const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "пожарные машины",
            platform: "платформы",
            heavyRescue: "спасательных работ",
            boat: "Boat",
            air: "респираторной",
            bchief: "командира батальона",
            tanker: "цистерны с водой",
            hazmat: "обезвреживания",
            police: "полицейские автомобили",
            arff: 'АПСР',
            mcv: "мобильные командные пункты",
            rth: "вертолёта",
            k9: "полицейские собаки",
            pmotorcycle: "Police Motorcycle",
            swatArmoured: "SWAT Armoured Vehicle",
            swatSuv: "SWAT SUV",
            policeHeli: "полицейский вертолет",
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
            if (content.match(/Кредиты/)) {
                credits = number;
            } else if (content.match(/Требуемые|Требуемое|Мин./)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Место/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Требуемые|Требуются|Нужны|Нужен/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Вероятность/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Макс\. Пациенты/)) {
                patientsMax = number;
            } else if (content.match(/Минимальное число пациентов/)) {
                patientsMin = number;
            } else if (content.match(/транспортировки/)) {
                transport = number;
            } else if (content.match(/вертолёта/)) {
                rth = number;
            } else if (content.match(/Специализации пациента/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Макс\. число заключённых/)) {
                prisonersMax = number;
            } else if (content.match(/состав спецназа/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Продолжительность/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Доступные к расширению задания/)) {
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
            lang: "ru_RU"
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
                "Больница",
                "Лес",
                "Автобусная остановка",
                "Трамвайная остановка",
                "Железнодорожная станция",
                "Железнодорожный вокзал",
                "Товарная станция",
                "Супермаркет \\(небольшой\\)",
                "Супермаркет \\(большой\\)",
                "Автозаправка",
                "Школа",
                "Музей",
                "Торговый центр",
                "Автомастерская",
                "Съезд с трассы",
                "Рождественский рынок",
                "Storehouse",
                "Дискотека",
                "Стадион",
                "Ферма",
                "Офисное здание",
                "Бассейн",
                "Railroad Crossing",
                "Театр",
                "Ярмарка",
                "Река",
                "Малый аэропорт \\(ВПП\\)",
                "Большой аэропорт \\(ВПП\\)",
                "Терминал аэропорта",
                "Банк",
                "Склад",
                "Мост",
                "Ресторан быстрого питания",
                "Грузовой порт",
                "Центр переработки ВО",
                "Высотка",
                "Причал круизных лайнеров",
                "Гавань",
                "Железнодорожный переезд",
                "Тоннель",
                "Холодный склад",
                "Электростанция",
                "Фабрика",
                "Утилизационный склад",
                "Станция метро",
                "Малое хранилище химикатов",
                "Большое хранилище химикатов",
                "Гостиница",
                "Бар",
                "Свалка",
                "Паркинг",
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
                0: "пожарные станции",
                2: "станции спасателей",
                6: "полицейских участков",
                13: "площадок полицейских вертолетов"
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
