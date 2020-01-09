const missionlink = $('#mission_help').attr('href')||window.location.href.replace(/\?.*$/, "");
const missionID = missionlink.replace(/\?.*$/, "").match(/\d*$/)[0];

$.get(missionlink)
    .done(data => {
        data = $(data);

        let vehicleDefinitons = {
            truck: 'Löschfahrzeug|^LF',
            dlk: 'Drehleiter',
            rw: 'Rüstwagen',
            elw1: 'ELW 1',
            elw2: 'ELW 2',
            atem: 'GW-A',
            oel: 'GW-Öl',
            mess: 'GW-Mess',
            gefahr: 'GW-Gefahrgut',
            gwl2: 'GW(-| )L ?2(-| )Wasser',
            dekon: 'Dekon(-| )P',
            fwk: 'FwK',
            hoehen: 'GW-Höhenrettung',
            fustw: 'Streifenwagen',
            boot: 'Boot',
            lebefkw: 'leBefKw',
            fukw: 'FüKw',
            grukw: 'GruKw',
            gefkw: 'GefKw',
            wawe: 'Wasserwerfer',
            nef: 'NEF',
            rth: 'RTH',
            lna: 'KdoW-LNA',
            orgl: 'KdoW-OrgL',
            rtw: 'RTW',
            ktw: 'KTW oder RTW',
            lfogkworw: 'LF oder GKW oder RW',
            gkw: 'GKW',
            mzkw: 'MzKW',
            mtwtz: 'MTW-TZ',
            radlader: 'BRmG R',
            anhdle: 'Drucklufterzeugung',
            polheli: 'Polizeihubschrauber',
            arff: 'Flugfeldlöschfahrzeug',
            rtf: 'Rettungstreppen',
            taucher: 'Taucher',
            mek: 'MEK-Fahrzeuge',
            sek: 'SEK-Fahrzeuge',
            gwwerk: 'GW-Werkfeuerwehr',
            ulf: 'ULF',
            tm: 'Teleskopmasten',
            turbo: 'Turbolöscher',
            gwsan: 'GW-San'
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
            if (content.match(/Credits im Durchschnitt/)) {
                credits = number;
            } else if (content.match(/Vorr?aussetzung(en)? an|THW-Wachen|Polizeihubschrauberstationen/)) {
                stations[getStation(content)] = number;
            } else if (content.match(/Ort/)) {
                poi = getPOI(content);
            }
        });
        data.find(".col-md-4:nth-of-type(2) table tbody tr").each(function(){
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Wasserbedarf/)) {
                water = number;
            } else if (content.match(/Benötigte|BRmG R|Drucklufterzeugung/)) {
                vehicles[getVehicle(content)] = number;
            } else if (content.match(/Durchschnittliche min. Personalanzahl \(Feuerwehr\)/)) {
                special["averageMinimumEmployeesFire"] = number;
            } else if (content.match(/Durchschnittliche min. Personalanzahl \(Polizei\)/)) {
                special["averageMinimumEmployeesPolice"] = number;
            } else if (content.match(/Anforderungswahrscheinlichkeit/)) {
                percentages[getVehicle(content)] = number;
            }
        });
        data.find(".col-md-4:nth-of-type(3) table tbody tr").each(function(){
            let content = $(this).text().trim();
            let number = $(this).find("td:last-of-type").text().trim().replace(/\D/g, "");
            if (content.match(/Ausbreitungsmöglichkeiten/)) {
                let expansionLinks = $(this).find("a");
                expansionLinks.each(function() {
                    expansions.push($(this).attr("href").replace(/\D/g, ""));
                });
            } else if (content.match(/Minimale Anzahl an Gefangene/)) {
                prisonersMin = number;
            } else if (content.match(/Maximale Anzahl an Gefangene/)) {
                prisonersMax = number;
            } else if (content.match(/Mindest Patientenanzah/)) {
                patientsMin = number;
            } else if (content.match(/Maximale Patientenanzahl/)) {
                patientsMax = number;
            } else if (content.match(/NEF/)) {
                nef = number;
            } else if (content.match(/transportiert/)) {
                transport = number;
            } else if (content.match(/Fachrichtung/)) {
                specialisation = $(this).find("td:last-of-type").text().trim();
            } else if (content.match(/Tragehilfe/)) {
                tragehilfe = number;
            } else if (content.match(/RTH/)) {
                rth = number;
            } else if (content.match(/Dauer/)) {
                dauer = $(this).find("td:last-of-type").text().trim();
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

        $.post(lssm.getlink(`/modules/lss-missionHelper/writeMission.php`), {
            mission: mission,
            id: missionID,
            lang: "de"
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
                "Park$",
                "See",
                "Krankenhaus",
                "Wald",
                "Bushaltestelle",
                "Straßenbahnhaltestelle",
                "Bahnhof \\(Regionalverkehr\\)",
                "Bahnhof \\(Regionalverkehr und Fernverkehr\\)",
                "Güterbahnhof",
                "Supermarkt \\(Klein\\)",
                "Supermarkt \\(Goß\\)",
                "Tankstelle",
                "Schule",
                "Museum",
                "Einkaufszentrum",
                "Auto-Werkstatt",
                "Autobahnauf.- / abfahrt",
                "Weihnachtsmarkt",
                "Lagerhalle",
                "Diskothek",
                "Stadion",
                "Bauernhof",
                "Bürokomplex",
                "Schwimmbad",
                "Bahnübergang",
                "Theater",
                "Festplatz",
                "Fluss",
                "Baumarkt",
                "Flughafen \\(klein\\): Start-/Landebahn",
                "Flughafen \\(klein\\): Gebäude",
                "Flughafen \\(klein\\): Flugzeug Standplatz",
                "Flughafen \\(groß\\): Start-/Landebahn",
                "Flughafen \\(groß\\): Terminal",
                "Flughafen \\(groß\\): Vorfeld / Standplätze",
                "Flughafen \\(groß\\): Parkhaus",
                "Biogasanlage",
                "Bank",
                "Kirche",
                "Chemiepark",
                "Industrie-Allgemein",
                "Automobilindustrie",
                "Müllverbrennungsanlage",
                "Eishalle"
            ];
            for (let i = 0; i < pois.length; i++) {
                if (content.match(pois[i])) {
                    return i;
                }
            }
        }

        function getStation(content) {
            let stationDefinitions = {
                0: "Feuerwachen",
                2: "Rettungswachen",
                6: "Polizeiwachen",
                9: "THW-Wachen",
                11: "Bereitschaftspolizeiwache",
                13: "Polizeihubschrauberstationen",
                15: "Wasserrettungswachen",
                "sek": "SEK-Wachen",
                "mek": "MEK-Wachen",
                "werk": "Werkfeuerwehren"
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
