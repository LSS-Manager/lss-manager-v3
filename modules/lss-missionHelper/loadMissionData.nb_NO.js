const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "brannbiler",
            platform: "høyderedskap",
            heavyRescue: "redningsbiler",
            air: "røykdykk",
            bchief: "innsatsledere fra brann",
            tanker: "tankbiler",
            hazmat: "CBRN",
            mcv: "utryckningsfordon",
            police: "politibiler",
            ambulance: "ambulanser",
            arff: "brann- og redningstjeneste for fly",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            rth: "Räddningshelikopter",
            policeHeli: "Police Helicopter",
        };

        let credits;
        let stations = {};
        let vehicles = {};
        let water;
        let poi;
        let prisonersMin = 0;
        let prisonersMax = 0;
        let patientsMin = 0;
        let patientsMax = 0;
        let nef = 0;
        let transport = 0;
        let specialisation;
        let tragehilfe = 0;
        let rth = 0;
        let special = {};
        let percentages = {};
        let expansions = [];
        let dauer;

        data.find(".col-md-4:nth-of-type(1) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Gjennomsnittlig kreditt/)) {
                credits = number;
            } else if (content.match(/Nødvendige|Krav på|Min./)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Sted/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Nødvendige|Nødvendig/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Sannsynlighet/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Maks pasienter/)) {
                patientsMax = number;
            } else if (content.match(/Minste antall pasienter/)) {
                patientsMin = number;
            } else if (content.match(/transporteres/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/Sykehusavdeling/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Maks antall pågripelser/)) {
                prisonersMax = number;
            } else if (content.match(/Armed Response Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Varighet/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/helikopter/)) {
                rth = number;
            } else if (content.match(/Utvidbare oppdrag/)) {
                let expansionLinks = $(this).find("a");
                expansionLinks.each(function () {
                    expansions.push($(this).attr("href").replace(/\D/g, ""));
                });
            }
        });

        let mission = {
            name: data.find("h1").text().trim(),
            stations: stations
        };

        if (data.find(".col-md-4:nth-of-type(2) table tbody tr").length === 1) {
            mission.onlyRd = true;
            if (transport) {
                mission.transport = transport;
            }
            if (nef) {
                mission.nef = nef;
            }
            if (rth) {
                mission.rth = rth;
            }
            if (tragehilfe) {
                mission.tragehilfe = tragehilfe;
            }
            if (specialisation) {
                mission.specialisation = specialisation;
            }
        } else {
            mission.vehicles = vehicles;
            if (credits) {
                mission.credits = credits;
            }
            if (patientsMax > 0) {
                mission.patients = {
                    max: patientsMax
                };
                if (patientsMin > 0) {
                    mission.patients.min = patientsMin;
                }
                if (transport) {
                    mission.patients.transport = transport;
                }
                if (nef) {
                    mission.patients.nef = nef;
                }
                if (rth) {
                    mission.patients.rth = rth;
                }
                if (tragehilfe) {
                    mission.patients.tragehilfe = tragehilfe;
                }
                if (specialisation) {
                    mission.patients.specialisation = specialisation;
                }
            }
        }

        if (void 0 !== typeof poi) {
            mission.poi = poi;
        }

        if (water) {
            mission.water = water;
        }

        if (prisonersMax > 0) {
            mission.prisoners = {
                max: prisonersMax
            };
            if (prisonersMin > 0) {
                mission.prisoners.min = prisonersMin;
            }
        }

        for (let spec in special) {
            if (!mission.special) {
                mission.special = {};
            }
            mission.special[spec] = special[spec];
        }

        if (expansions) {
            mission.expansions = expansions;
        }

        if (percentages) {
            mission.percentages = percentages;
        }

        if (dauer) {
            mission.siwa = true;
            mission.dauer = dauer;
        }

        $.post(`${lssm.config.server}/modules/lss-missionHelper/writeMission.php`, {
            mission: mission,
            id: missionID,
            lang: "nb_NO"
        })
            .done(response => {
                if (response.startsWith('Error')) {
                    return console.error(`missionHelper Error:\n${response}`);
                }
                console.log(`Registered Missiontype ${missionID}`);
                let missionhelper_content = $(`#${LSSM_MH_PREFIX} .content`);
                if (!missionhelper_content[0]) return;
                missionhelper_content.append(response);
                lssm_missionhelper_adjustPosition();
            })
            .fail(reason => {
                console.error(reason);
            });

        function getPOI(content) {
            let pois = [
                "Park",
                "Innsjø",
                "Sykehus",
                "Skog",
                "Busstopp",
                "Trikkestopp",
                "Togstasjon \\(regional\\)",
                "Togstasjon \\(regional og langdistanse\\)",
                "Godsstasjon",
                "Matvarebutikk \\(liten\\)",
                "Matvarebutikk \\(stor\\)",
                "Bensinstasjon",
                "Skole",
                "Museum",
                "Kjøpesenter",
                "Bilverksted",
                "Motorveiavkjøring",
                "Julemarked",
                "Lagerbygning",
                "Nattklubb",
                "Stadion",
                "Gård",
                "Kontorbygning",
                "Basseng",
                "Järnvägsövergång",
                "Teater",
                "Tivoli",
                "Elv",
                "Liten flyplass \\(flystripe\\)",
                "Stor flyplass \\(flystripe\\)",
                "Flyplassterminal",
                "Bank",
                "Varehus",
                "Bro",
                "Gatekjøkken",
                "Cargohavn",
                "Gjenvinningssenter",
                "Skyskraper",
                "Cruisehavn",
                "Marina",
                "Planovergang",
                "Tunnel",
                "Kaldt varehus",
                "Kraftverk",
                "Fabrikk",
                "Skrotplass",
                "Metrostasjon",
                "Liten kjemisk lagringstank",
                "Stor kjemisk lagringstank",
                "Hotell",
                "Bar",
                "Avfallsdeponi",
                "Parkeringshus",
				"Silo"
            ];
            for (let i = 0; i < pois.length; i++) {
                if (content.match(pois[i])) {
                    return i;
                }
            }
        }

        function getStation(content) {
            let stationDefinitions = {
                0: "brannstasjoner",
                2: "ambulansestasjoner",
                6: "politistasjoner",
                13: "Police Helicopter"
            };
            for (let station in stationDefinitions) {
                if (content.match(stationDefinitions[station])) {
                    return station;
                }
            }
        }

        function getVehicle(content) {
            for (let vehicle in vehicleDefinitons) {
                if (content.match(vehicleDefinitons[vehicle])) {
                    return vehicle;
                }
            }
        }
    });
