const missionlink = $('#mission_help').attr('href')||window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "(t|T)ankautospuiten",
            noodhulpeen: "(n|N)oodhulpeenheden",
            bchief: "OvD-B",
            redvoertuig: "((r|R)edvoertuigen)|((h|H)oogwerker)",
            slangenwagen: "(s|S)langenwagen",
            hulpverlening: "(h|H)ulpverleningsvoertuigen",
            adembescherming: "Adembeschermingsvoertuig",
            hovd: "HOVD",
            waarschuwing: "Waarschuwings",
            gevaar: "Gevaarlijke Stoffen",
            ovdp: "Officier(s?) van Dienst Politie",
            commando: "Commandowagen",
            ambulance: "Ambulance",
            mmtarts: "MMT-arts",
            megroep: "ME Groepsvoertuig",
            mecommando: "ME Commandovoertuigen",
            polHeli: "politie helikopter",
            watervoertuig: "Waterongevallenvoertuig",
            wateraanhanger: "(w|W)aterongevallenaanhangers",
            hond: "Hondengeleider",
            crashtender: "Crashtender",
            afoosc: "AFO/OSC"
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
        let mmtarts = 0;
        let transport = 0;
        let specialisation;
        let tragehilfe = 0;
        let rth = 0;
        let special = {};
        let percentages = {};
        let expansions = [];
        let dauer;

        data.find(".col-md-4:nth-of-type(1) table tbody tr").each(function(){
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Credits/)) {
                credits = number;
            } else if (content.match(/Benodigd|Minimaal politie helikopter/)) {
                stations[getStation(content)] = number;
            } else if (content.match(/POI locatie/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function(){
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/waarschijnlijkheid|benodigdheid/)) {
                percentages[getVehicle(content)] = number;
            } else if (content.match(/[bB]enodigd|Crashtender/)) {
                vehicles[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function(){
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Maximale patiënten/)) {
                patientsMax = number;
            } else if (content.match(/Minimale aantal slachtoffers/)) {
                patientsMin = number;
            } else if (content.match(/getransporteerd/)) {
                transport = number;
            } else if (content.match(/MMT-Arts/)) {
                mmtarts = number;
            } else if (content.match(/Gespecialiseerde afdeling/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/gevangenen/)) {
                prisonersMax = number;
            } else if (content.match(/Duur/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Uitbreidingsmogelijkheid/)) {
                let expansionLinks = $(this).find("a");
                expansionLinks.each(function() {
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
            if (mmtarts) {
                mission.mmtarts = mmtarts;
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
                if (mmtarts) {
                    mission.patients.mmtarts = mmtarts;
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
            lang: "nl_NL"
        })
            .done(response => {
                if (response.startsWith('Error'))  {
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
                "Meer",
                "Ziekenhuis",
                "Bos",
                "Bushalte",
                "Tramhalte",
                "Station",
                "Centraal Station",
                "Rangeeremplacement",
                "Buurtsuper",
                "Supermarkt",
                "Tankstation",
                "School",
                "Museum",
                "Winkelcentrum",
                "Garage",
                "Snelweg oprit / afrit",
                "Kerstmarkt",
                "Magazijn",
                "Café/Club",
                "Stadion",
                "Boerderij",
                "Kantoorgebouw",
                "Zwembad",
                "Spoorwegovergang",
                "Theater",
                "Marktplein",
                "Rivier",
                "Sloot",
                "Vliegveld \\(klein\\): Start-/Landingsbaan",
                "Vliegveld \\(klein\\): Gebouw",
                "Vliegveld \\(klein\\): Vliegtuig parkeerplaats",
                "Vliegveld \\(groot\\): Start-/Landingsbaan",
                "Vliegveld \\(groot\\): Terminal",
                "Vliegveld \\(groot\\): Platform / Gate",
                "Vliegveld \\(groot\\): Parkeergarage",
                "Parkeergarage",
                "Verzorgingshuis",
                "Manege",
                "Hotel",
                "Restaurant",
                "Bankkantoor",
                "Sporthal",
                "Camping",
                "Gevangenis",
                "Asielzoekerscentrum",
                "Afvalverwerker",
                "Kerkgebouw",
                "Bouwmarkt",
                "Transformatorhuisje",
                "Industrieterrein",
                "Bedrijventerrein",
                "Haventerrein",
                "Bouwterrein"
            ];
            for (let i = 0; i < pois.length; i++) {
                if (content.match(pois[i])) {
                    return i;
                }
            }
        }

        function getStation(content) {
            let stationDefinitions = {
                0: "brandweerposten",
                3: "Ambulancestandplaats",
                5: "politiebureau",
                9: "politie helikopter",
                11: "Hoofdbureau",
                "water": "waterongevallenbestrijdingafdelingen"
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

