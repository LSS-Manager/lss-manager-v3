const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "пожежні машини",
            platform: "платформ",
            heavyRescue: "важкі рятувальні машини",
            boat: "Boat",
            air: "респираторной",
            bchief: "командира батальйону",
            tanker: "автоцистерн",
            hazmat: "знезараження",
            police: "поліцейські машини",
            arff: 'АПСР',
            mcv: "мобильные командные пункты",
            rth: "HEMS",
            policeHeli: "Police Helicopter",
            ambulance: "скорые"
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
            if (content.match(/Кредити/)) {
                credits = number;
            } else if (content.match(/Необхідні|Вимоги/)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Місце/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Необхідні/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Вірогідність/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Макс\. Пацієнти/)) {
                patientsMax = number;
            } else if (content.match(/Мінімальна кількість пацієнтів/)) {
                patientsMin = number;
            } else if (content.match(/перевезенні/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/Спеціалізації пацієнта/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Мінімальна кількість в'язнів/)) {
                prisonersMax = number;
            } else if (content.match(/SWAT Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Duration/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/розширення/)) {
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
            lang: "uk_UA"
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
                "Парк",
                "Озеро",
                "Лікарня",
                "Ліс",
                "Автобусна зупинка",
                "Трамвайна зупинка",
                "Залізнична станція",
                "Залізничний вокзал",
                "Товарна станція",
                "Супермаркет \\(малий\\)",
                "Супермаркет \\(великий\\)",
                "Заправна станція",
                "Школа",
                "Музей",
                "Торгівельний центр",
                "Автомайстерня",
                "З'їзд із траси",
                "Різдвяний ринок",
                "Storehouse",
                "Дискотека",
                "Стадіон",
                "Ферма",
                "Офісна будівля",
                "Басейн",
                "Railroad Crossing",
                "Театр",
                "Ярмарок",
                "Річка",
                "Малий аеропорт \\(ЗПС\\)",
                "Великий аеропорт \\(ЗПС\\)",
                "Термінал аеропорту",
                "Банк",
                "Склад",
                "Міст",
                "Ресторан швидкого харчування",
                "Вантажний порт",
                "Центр переробки відходів",
                "Висотка",
                "Причал круїзних лайнерів",
                "Гавань",
                "Залізничний переїзд",
                "Тунель",
                "Холодний склад",
                "Електростанція",
                "Фабрика",
                "Утилізаційний склад",
                "Станція метро",
                "Мале сховище хімікатів",
                "Велике сховище хімікатів",
                "Готель",
                "Бар",
                "Сміттєзвалище",
                "Гараж",
				"Силос"
            ];
            for (let i = 0; i < pois.length; i++) {
                if (content.match(pois[i])) {
                    return i;
                }
            }
        }

        function getStation(content) {
            let stationDefinitions = {
                0: "пожежні станції",
                2: "рятувальні станції",
                6: "поліцейські відділки"
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
