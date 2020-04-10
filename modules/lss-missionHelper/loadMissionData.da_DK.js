const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "brandbiler",
            platform: "platformvogn",
            heavyRescue: "pionertjenesten",
            air: "højtrykskompressor",
            bchief: "holdleder",
            tanker: "vandtankvogn",
            hazmat: "gift- og kemikaliekøretøj",
            mcv: "ledelses- og kommunikationsmoduler",
            police: "politibiler",
            ambulance: "ambulancer",
            arff: "ARFF",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            rth: "Rednings Helikopter",
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
            if (content.match(/Kreditter/)) {
                credits = number;
            } else if (content.match(/Påkrævede|Krav på|Min./)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Sted/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Påkrævede|Påkrævet/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Sandsynlighed/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Maks\. antal patienter/)) {
                patientsMax = number;
            } else if (content.match(/Min\. antal patienter/)) {
                patientsMin = number;
            } else if (content.match(/patienttransport/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/Patientspecialer/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Maks\. antal fanger/)) {
                prisonersMax = number;
            } else if (content.match(/Armed Response Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Varighed/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Helikopter/)) {
                rth = number;
            } else if (content.match(/Udvidelsesmissioner/)) {
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
            lang: "da_DK"
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
                "Sø",
                "Hostpital",
                "Skov",
                "Busstoppested",
                "Sporvognstoppested",
                "Togstation \\(lokal trafik\\)",
                "Togstation \\(lokal og national /international trafik\\)",
                "Godsstation",
                "Supermarked \\(lille\\)",
                "Supermarked \\(stort\\)",
                "Benzinstation",
                "Skole",
                "Museum",
                "Indkøbscenter",
                "Bilværksted",
                "Motervejsfrakørsel",
                "Julemarked",
                "Pakhus",
                "Diskotek",
                "Stadion",
                "Gård",
                "Kontorbygning",
                "Svømmehal",
                "Jernbaneovergang",
                "Teater",
                "Markedsplads",
                "Flod",
                "Lille lufthavn \\(landingsbane\\)",
                "Stor lufthavn \\(landingsbane\\)",
                "Lufthavnsterminal",
                "Bank",
                "Varehus",
                "Bro",
                "Fast Food-restaurant",
                "Containerhavnn",
                "Genbrugscenter",
                "Skyskraber",
                "Krydstogthavn",
                "Lystbådehavn",
                "Skinnekrydsning",
                "Tunnel",
                "Kølehus",
                "Kraftværk",
                "Fabrik",
                "Skrotplads",
                "Metrostation",
                "Lille kemikalietank",
                "Stor kemikalietank",
                "Hotel",
                "Bar",
                "Losseplads",
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
                0: "brandstationer",
                2: "redningsstationer",
                6: "politistationer",
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
