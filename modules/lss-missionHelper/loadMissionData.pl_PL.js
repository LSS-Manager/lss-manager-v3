const missionlink = $('#mission_help').attr('href') || window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: "samochody pożarnicze",
            platform: "SP wysokościow",
            heavyRescue: "ratownictwa technicznego",
            air: "SPGaz",
            bchief: "szefa brygady",
            tanker: "z wodą",
            hazmat: "SP Rchem",
            mcv: "samochody dowodzenia i łączności",
            police: "radiowozy",
            hems: "śmigłowiec LPR",
            rtw: "ambulanse",
            arff: "SP LSP",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
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
            if (content.match(/Średnie kredyty/)) {
                credits = number;
            } else if (content.match(/Wymagane|Wymagany|Wymagania/)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Miejsce/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Wymagane|Wymagany/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Szanse/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function () {
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Maks\. Pacjenci/)) {
                patientsMax = number;
            } else if (content.match(/Minimalna liczba pacjentów/)) {
                patientsMin = number;
            } else if (content.match(/transport pacjenta/)) {
                transport = number;
            } else if (content.match(/śmigłowiec LPR/)) {
                nef = number;
            } else if (content.match(/Rodzaj pacjenta/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Maksymalna liczba więźniów/)) {
                prisonersMax = number;
            } else if (content.match(/Armed Response Personnel/)) {
                special["SWATPersonnel"] = number;
            } else if (content.match(/Duration/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/można rozwinąć/)) {
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
            lang: "pl_PL"
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
                "Jezioro",
                "Szpital",
                "Las",
                "Przystanek autobusowy",
                "Przystanek tramwajowy",
                "Dworzec kolejowy \\(ruch podmiejski\\)",
                "Dworzec kolejowy \\(ruch podmiejski i dalekobieżny\\)",
                "Stacja towarowa",
                "Supermarket \\(mały\\)",
                "Supermarket \\(duży\\)",
                "Stacja paliw",
                "Szkoła",
                "Muzeum",
                "Centrum handlowe",
                "Warsztat samochodowy",
                "Zjazd z autostrady",
                "Jarmark Bożonarodzeniowy",
                "Storehouse",
                "Dyskoteka",
                "Stadion",
                "Gospodarstwo rolne",
                "Biurowiec",
                "Basen",
                "Przejazd kolejowy",
                "Teatr",
                "Teren wystawowy",
                "Rzeka",
                "Mały port lotniczy \\(pas startowy\\)",
                "Duży port lotniczy \\(pas startowy\\)",
                "Terminal portu lotniczego",
                "Bank",
                "Magazyn",
                "Most",
                "Bar szybkiej obsługi",
                "Cargo-port",
                "Centrum segregacji odpadów",
                "Wieżowiec",
                "Dok dla wycieczkowców",
                "Marina",
                "Przejazd kolejowo-drogowy",
                "Tunel",
                "Chłodnia składowa",
                "Elektrownia",
                "Fabryka",
                "Składowisko złomu",
                "Stacja metra",
                "Mały zbiornik na substancje chemiczne",
                "Duży zbiornik na substancje chemiczne",
                "Hotel",
                "Bar",
                "Składowisko odpadów",
                "Parking"
            ];
            for (let i = 0; i < pois.length; i++) {
                if (content.match(pois[i])) {
                    return i;
                }
            }
        }

        function getStation(content) {
            let stationDefinitions = {
                0: "straży pożarnej",
                2: "ratunkowego",
                6: "policji",
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
