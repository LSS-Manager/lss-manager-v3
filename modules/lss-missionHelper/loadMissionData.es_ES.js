const missionlink = $('#mission_help').attr('href')||window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "camiones de bomberos",
            platform: "camiones con plataforma",
            heavyRescue: "Furgones de Útiles Varios",
            air: "aéreo",
            bchief: "unidades de Mando y Comunicaciones",
            mcv: "unidades de mando",
            tanker: "(c|C)amiones cisterna",
            hazmat: "vehículos de materiales peligrosos",
            police: "coches patrulla",
            rth: "HEMS",
            arff: "CBA",
            policeHeli: "Police Helicopter",
            ambulance: "Ambulancias"
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

        data.find(".col-md-4:nth-of-type(1) table tbody tr").each(function(){
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Media de créditos/)) {
                credits = number;
            } else if (content.match(/necesarios|necesarias|Requisitos de/)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Lugar/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function(){
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Se necesitan|necesarios|necesarias/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Probabilidad/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function(){
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/N\.º máximo de pacientes/)) {
                patientsMax = number;
            } else if (content.match(/Número mínimo de pacientes/)) {
                patientsMin = number;
            } else if (content.match(/transportar/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/Especializaciones de pacientes/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/N\.º máximo de presos/)) {
                prisonersMax = number;
            } else if (content.match(/SWAT Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Duración/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/helicoptero/)) {
                rth = number;
            } else if (content.match(/expansión/)) {
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
            lang: "es_ES"
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
                "Parque",
                "Lago",
                "Hospital",
                "Bosque",
                "Parada de autobús",
                "Parada de tranvía",
                "Parada de tren \\(cercanías\\)",
                "Parada de tren \\(cercanías y larga distancia\\)",
                "Estación de mercancías",
                "Supermercado \\(pequeño\\)",
                "Supermercado \\(grande\\)",
                "Gasolinera",
                "Escuela",
                "Museo",
                "Centro comercial",
                "Taller",
                "Salida de autopista",
                "Mercado navideño",
                "Depósito",
                "Discoteca",
                "Estadio",
                "Granja",
                "Edificio de oficinas",
                "Piscina",
                "Railroad Crossing",
                "Cine",
                "Feria",
                "Río",
                "Aeropuerto pequeño \\(pista\\)",
                "Aeropuerto grande \\(pista\\)",
                "Terminal de aeropuerto",
                "Banco",
                "Almacén",
                "Puente",
                "Restaurante de comida rápida",
                "Puerto de mercancías",
                "Centro de reciclaje",
                "Rascacielos",
                "Cubierta de yate",
                "Puerto deportivo",
                "Paso a nivel",
                "Túnel",
                "Almacén frigorífico",
                "Central eléctrica",
                "Fábrica",
                "Chatarrería",
                "Estación de metro",
                "Almacén químico pequeño",
                "Almacén químico grande",
                "Hotel",
                "Bar",
                "Vertedero",
                "Aparcamiento",
				"Granero"
            ];
            for (let i = 0; i < pois.length; i++) {
                if (content.match(pois[i])) {
                    return i;
                }
            }
        }

        function getStation(content) {
            let stationDefinitions = {
              0: "Parques de bomberos",
              2: "Estaciones de rescate",
              6: "comisarías de policía"
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
