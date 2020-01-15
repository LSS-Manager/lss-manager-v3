const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "hasičské vozy",
            platform: "vozy s plošinou",
            heavyRescue: "těžká technická vozidla",
            air: "fordon",
            bchief: "jednotky",
            tanker: "cistern",
            hazmat: "nebezpečnými látkami",
            mcv: "velitelská vozidla",
            police: "policejní vozidla",
            rtw: "Sanitkat",
            arff: "ARFF",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            hems: "Räddningshelikopter",
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
            if (content.match(/Průměrné kredity/)) {
                credits = number;
            } else if (content.match(/Požadované|Krav på|Min./)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Místo/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Požadované|Požadovaná/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Pravděpodobnost/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Max\. Pacienti/)) {
                patientsMax = number;
            } else if (content.match(/Minimální počet pacientů/)) {
                patientsMin = number;
            } else if (content.match(/převézt/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/Nemocniční oddělení/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Maximální počet vězňů/)) {
                prisonersMax = number;
            } else if (content.match(/Armed Response Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Duration/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Rozšiřitelné mise/)) {
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
            lang: "cs_CZ"
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
                "Jezero",
                "Nemocnice",
                "Les",
                "Zastávka autobusu",
                "Zastávka tramvaje",
                "Železniční stanice \\(regionální doprava\\)",
                "Železniční stanice \\(regionální a dálková doprava\\)",
                "Nákladové nádraží",
                "Supermarket \\(malý\\)",
                "Supermarket \\(velký\\)",
                "Čerpací stanice",
                "Škola",
                "Muzeum",
                "Nákupní centrum",
                "Autoservis",
                "Dálniční sjezd",
                "Vánoční trh",
                "Skladiště",
                "Diskotéka",
                "Stadion",
                "Farma",
                "Kancelářská budova",
                "Plovárna",
                "Järnvägsövergång",
                "Divadlo",
                "Zábavní park",
                "Řeka",
                "Malé letiště \\(ranvej\\)",
                "Velké letiště \\(ranvej\\)",
                "Letištní terminál",
                "Banka",
                "Velkosklad",
                "Most",
                "Rychlé občerstvení",
                "Nákladní přístav",
                "Sběrný dvůr",
                "Výšková budova",
                "Přístaviště výletních lodí",
                "Malý přístav",
                "Železniční přejezd",
                "Tunel",
                "Chladírenský sklad",
                "Elektrárna",
                "Továrna",
                "Šrotiště",
                "Stanice metra",
                "Malá chemická skladovací nádrž",
                "Velká chemická skladovací nádrž",
                "Hotel",
                "Bar",
                "Skládka",
                "Kryté parkoviště"
            ];
            for (let i = 0; i < pois.length; i++) {
                if (content.match(pois[i])) {
                    return i;
                }
            }
        }

        function getStation(content) {
            let stationDefinitions = {
                0: "hasičské stanice",
                2: "záchranářské stanice",
                6: "policejní stanice",
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
