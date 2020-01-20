const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "İtfaiye Araçları",
            platform: "Platformlu Kamyon",
            heavyRescue: "Büyük Kurtarma",
            air: "fordon",
            bchief: "Tabur Amiri",
            tanker: "Su Tanker",
            hazmat: "Tehlikeli Madde",
            mcv: "Mobil Komuta",
            police: "Polis Arabaları",
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
            if (content.match(/Ortalama kredi/)) {
                credits = number;
            } else if (content.match(/Gerekli|Gerekliliği|Min./)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Yer/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Gerekli|Požadovaná/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/olasılığı/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Maks\. Hastalar/)) {
                patientsMax = number;
            } else if (content.match(/Minimum hasta sayısı/)) {
                patientsMin = number;
            } else if (content.match(/nakletme/)) {
                transport = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/Hasta Uzmanlıkları/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Maksimum Mahkum Sayısı/)) {
                prisonersMax = number;
            } else if (content.match(/Armed Response Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Duration/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Genişletilebilen Görevler/)) {
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
            lang: "tr_TR"
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
                "Göl",
                "Hastane",
                "Orman",
                "Otobüs durağı",
                "Tramvay durağı",
                "Tren istasyonu \\(bölgesel trafik\\)",
                "Tren istasyonu \\(bölgesel trafik ve uzun mesafeli yolculuk\\)",
                "Yük istasyonu",
                "Süpermarket \\(küçük\\)",
                "Süpermarket \\(büyük\\)",
                "Akaryakıt istasyonu",
                "Okul",
                "Müze",
                "Alışveriş Merkezi",
                "Oto tamirhanesi",
                "Otoyol çıkışı",
                "Noel pazarı",
                "Depo",
                "Diskotek",
                "Stadyum",
                "Çiftlik",
                "Ofis binası",
                "Yüzme havuzu",
                "Järnvägsövergång",
                "Tiyatro",
                "Lunapark",
                "Nehir",
                "Küçük Havalimanı \\(Uçak Pisti\\)",
                "Büyük Havalimanı \\(Uçak Pisti\\)",
                "Havalimanı Terminali",
                "Banka",
                "Ambar",
                "Köprü",
                "Fast Food Restoranı",
                "Kargo limanı",
                "Geri Dönüşüm Merkezi",
                "Gökdelen",
                "Yolcu gemisi limanı",
                "Marina",
                "Demiryolu Geçidi",
                "Tünel",
                "Soğuk Hava Ambarı",
                "Enerji Santrali",
                "Fabrika",
                "Hurdalık",
                "Metro istasyonu",
                "Küçük kimyasal depo tankı",
                "Büyük kimyasal depo tankı",
                "Otel",
                "Bar",
                "Çöplük",
                "Katlı Otopark"
            ];
            for (let i = 0; i < pois.length; i++) {
                if (content.match(pois[i])) {
                    return i;
                }
            }
        }

        function getStation(content) {
            let stationDefinitions = {
                0: "İtfaiye İstasyonları",
                2: "Kurtarma İstasyonları",
                6: "Polis Karakollar",
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
