const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "Mașini de pompieri",
            platform: "platformă",
            heavyRescue: "grele de salvare",
            air: "aéreo",
            bchief: "Șeful de batalion",
            mcv: "comandă forțe mobile",
            tanker: "de apă",
            hazmat: "mărfurilor periculoase",
            police: "Mașini de poliție",
            rth: "Helicóptero HSR",
            arff: "Serviciu aeronautic de salvare și luptă împotriva incendiilor",
            policeHeli: "Police Helicopter",
            ambulance: "Ambulanțe"
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
            if (content.match(/Credite în medie/)) {
                credits = number;
            } else if (content.match(/necesare|Necesitate de/)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Loc/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/necesare|necesar/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/să fie|Probabilitate/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Max\. Pacienți/)) {
                patientsMax = number;
            } else if (content.match(/Număr minim de pacienți/)) {
                patientsMin = number;
            } else if (content.match(/nevoie de transport/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/Specializări pentru tratarea pacienților/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Număr maxim de deținuți/)) {
                prisonersMax = number;
            } else if (content.match(/SWAT Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Durată/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/expandabile/)) {
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
            lang: "ro_RO"
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
                "Parc",
                "Lac",
                "Spital",
                "Pădure",
                "Stație de autobuz",
                "Stație de tramvai",
                "Gară \\(trafic regional\\)",
                "Gară \\(trafic regional și deplasări pe distanțe lungi\\)",
                "Stație de marfă",
                "Supermarket \\(mic\\)",
                "Supermarket \\(mare\\)",
                "Stație de benzină",
                "Școală",
                "Muzeu",
                "Centru comercial",
                "Atelier auto",
                "Ieșire pe autostradă",
                "Târg de Crăciun",
                "asdasdasd",
                "Discotecă",
                "Stadion",
                "Fermă",
                "Clădire de birouri",
                "Bazin de înot",
                "Trecere de cale ferată",
                "Teatru",
                "Bâlci",
                "Râu",
                "Aeroport mic \\(pistă\\)",
                "Aeroport mare \\(pistă\\)",
                "Terminal aeroport",
                "Bancă",
                "Magazie",
                "Pod",
                "Restaurant fast-food",
                "Port pentru mărfuri",
                "Centru de reciclare",
                "Bloc cu multe etaje",
                "Doc pentru nave de croazieră",
                "Debarcader",
                "Trecere de nivel",
                "Tunel",
                "Depozit frigorific",
                "Centrală electrică",
                "Fabrică",
                "Depozit de fier vechi",
                "Stație de metrou",
                "Rezervor mic pentru stocarea de substanțe chimice",
                "Rezervor mare pentru stocarea de substanțe chimice",
                "Hotel",
                "Bar",
                "Depozit",
                "Parcare",
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
                0: "Stații de pompieri",
                2: "Stații de salvare",
                6: "Secții de poliție"
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
