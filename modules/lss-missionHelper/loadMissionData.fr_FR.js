const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "Fourgons d’incendie",
            platform: "(M|m)oyen (E|e)lévateur (A|a)érien",
            heavyRescue: "Véhicule de secours routier",
            boat: "Boat",
            air: "Assistance respiratoire",
            bchief: "de groupe",
            tanker: "(c|C)amion-citerne[^s]",
            hazmat: "risques technologiques",
            police: "police",
            arff: 'ARFF',
            mcv: 'poste de commandement',
            rth: "hélicoptère",
            policeHeli: "Police Helicopter",
            ambulance: "Ambulances",
            gkw: 'VTU',
            hoehen: 'VGRIMP'
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
            if (content.match(/Crédits moyens/)) {
                credits = number;
            } else if (content.match(/requises|requis|Min./)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Lieu/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/requis|requises/) && !content.match(/Spécialistes IMP/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Moyenne minimale Pompiers/)) {
                special["averageMinimumEmployeesFire"] = number;
            } else if (content.match(/Spécialistes IMP/)) {
                special["averageMinimumEmployeesHoehen"] = number;
            } else if (content.match(/Chances qu’un|Chances que/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Max\. Patients/)) {
                patientsMax = number;
            } else if (content.match(/minimal de patients/)) {
                patientsMin = number;
            } else if (content.match(/transport/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/Spécialisation de patients/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/maximal de prisonniers/)) {
                prisonersMax = number;
            } else if (content.match(/SWAT Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Durée/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/hélicoptère/)) {
                rth = number;
            } else if (content.match(/Missions à extension/)) {
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
            lang: "fr_FR"
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
                "Hôpital",
                "Forêt",
                "Arrêt de bus",
                "Arrêt de tram",
                "Gare ferroviaire \\(trajets régionaux\\)",
                "Gare ferroviaire \\(trajets régionaux et grandes lignes\\)",
                "Supérette",
                "Supermarché \\(petit\\)",
                "Supermarché \\(grand\\)",
                "Station-service",
                "École",
                "Musée",
                "Centre commercial",
                "Garage automobile",
                "Sortie d’autoroute",
                "Marché de Noël",
                "Hangar",
                "Discothèque",
                "Stade",
                "Ferme",
                "Bureaux",
                "Piscine",
                "Passage à niveau",
                "Théâtre",
                "Fête foraine",
                "Rivière",
                "Petit aéroport \\(piste\\)",
                "Grand aéroport \\(piste\\)",
                "Terminal d’aéroport",
                "Banque",
                "Entrepôt",
                "Pont",
                "Restauration rapide",
                "Port de fret",
                "Centre de recyclage",
                "Tour",
                "Quai de navire de croisière",
                "Marina",
                "Croisement de voie ferrée",
                "Tunnel",
                "Entrepôt frigorifique",
                "Centrale électrique",
                "Usine",
                "Casse",
                "Station de métro",
                "Petite citerne de produits chimiques",
                "Grande citerne de produits chimiques",
                "Hôtel",
                "Bar",
                "Décharge",
                "Parking couvert",
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
                0: "Casernes de pompiers",
                2: "Postes de secours",
                6: "postes de police"
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
