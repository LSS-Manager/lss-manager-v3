const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "소방차",
            platform: "플랫폼 트럭",
            heavyRescue: "중장비 구조 차량",
            air: "Breathing Apparatus Support Unit",
            bchief: "소방대장",
            tanker: "수상 탱커",
            hazmat: "생화학 차량",
            mcv: "Incident Command and Control Unit",
            police: "경찰차",
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
            if (content.match(/평균 크레딧/)) {
                credits = number;
            } else if (content.match(/필요한|요건/)) {
                stations[getStation(content)] = number;
            } else if (content.match(/공간/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/필요한/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/필요 가능성/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/최대 환자/)) {
                patientsMax = number;
            } else if (content.match(/최소 환자 수/)) {
                patientsMin = number;
            } else if (content.match(/환자가 이송될 확률/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/환자 전문화/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/최대 죄수 수/)) {
                prisonersMax = number;
            } else if (content.match(/Armed Response Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Duration/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/확장할 수 있는 임무/)) {
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
            lang: "ko_KR"
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
                "공원",
                "호수",
                "병원",
                "숲",
                "버스 정류장",
                "전차 정류장",
                "기차역\\(지역 교통\\)",
                "기차역\\(지역 교통 및 장거리 여행역\\)",
                "화물역",
                "슈퍼마켓\\(소형\\)",
                "슈퍼마켓\\(대형\\)",
                "주유소",
                "학교",
                "박물관",
                "쇼핑몰",
                "차량 정비소",
                "고속도로 출구",
                "크리스마스 마켓",
                "저장소",
                "디스코텍",
                "경기장",
                "농장",
                "사무용 건물",
                "수영장",
                "철길 건널목",
                "극장",
                "박람회장",
                "강",
                "소형 공항\\(활주로\\)",
                "대형 공항\\(활주로\\)",
                "공항 터미널",
                "은행",
                "창고",
                "다리",
                "패스트푸드 레스토랑",
                "적하구",
                "재활용 센터",
                "고층 건물",
                "유람선 부두",
                "정박지",
                "철도 건널목",
                "터널",
                "냉동 창고",
                "발전소",
                "공장",
                "고철 처리장",
                "지하철역",
                "소형 화학물질 저장 탱크",
                "대형 화학물질 저장 탱크",
                "호텔",
                "술집",
                "매립지",
                "주차장",
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
                0: "소방서",
                2: "구조대",
                6: "경찰서",
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
