const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "Fire engines",
            platform: "Aerial Appliance",
            heavyRescue: "Rescue Support Vehicle",
            air: "Breathing Apparatus Support Unit",
            bchief: "Fire Officer",
            tanker: "Water Carrier",
            hazmat: "HazMat",
            mcv: "Incident Command and Control Unit",
            police: "Police Car",
            ambulance: "Ambulance",
            arff: "ARFF",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            rth: "HEMS",
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
            if (content.match(/Average credits/)) {
                credits = number;
            } else if (content.match(/Required|Requirement|Min./)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Place/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Required/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Probability of/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Max\. Patients/)) {
                patientsMax = number;
            } else if (content.match(/Minimum patient number/)) {
                patientsMin = number;
            } else if (content.match(/transported/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/Patient Specializations/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Maximum Number of Prisoners/)) {
                prisonersMax = number;
            } else if (content.match(/Armed Response Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Duration/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Expandable/)) {
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
            lang: "en_GB"
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
                "Lake",
                "Hospital",
                "Forest",
                "Bus stop",
                "Tram stop",
                "Train station \\(regional traffic\\)",
                "Train station \\(regional traffic and long-distance travel\\)",
                "Goods station",
                "Supermarket \\(small\\)",
                "Supermarket \\(big\\)",
                "Gas station",
                "School",
                "Museum",
                "Mall",
                "Car workshop",
                "Highway exit",
                "Christmas market",
                "Storehouse",
                "Discotheque",
                "Stadium",
                "Farm",
                "Office building",
                "Swimming bath",
                "Railroad Crossing",
                "Theater",
                "Fairground",
                "River",
                "Small Airport \\(Runway\\)",
                "Large Airport \\(Runway\\)",
                "Airport Terminal",
                "Bank",
                "Warehouse",
                "Bridge",
                "Fast Food Restaurant",
                "Cargo Port",
                "Recycling Centre",
                "High rise",
                "Cruise ship dock",
                "Marina",
                "Rail Crossing",
                "Tunnel",
                "Cold Storage Warehouse",
                "Power Plant",
                "Factory",
                "Scrap yard",
                "Subway station",
                "Small chemical storage tank",
                "Large chemical storage tank",
                "Hotel",
                "Bar",
                "Landfill site",
				"Parking Garage",
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
                0: "Fire Station",
                2: "Rescue Station",
                6: "Police Station",
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
