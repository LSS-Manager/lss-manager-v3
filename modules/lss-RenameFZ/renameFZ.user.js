(function (I18n, $) {

    const LSS_RENAMEFZ_STORAGE = "LSS_RENAMEFZ_STORAGE";

    I18n.translations.de.lssm.renameFz = {
        name: 'Fahrzeuge Umbenennen',
        rename: "Umbenennen",
        id: "{id} FahrzeugId ",
        old: "{old} Alten Namen ein",
        vehicleType: "{vehicleType} Typen des Fahrzeugs",
        stationName: "{stationName} Wachennamen",
        tagging: '{tagging} Kennzeichnung des Fahrzeugtyps',
        number: '{number} Typ-Zähler',
        numberRoman: '{numberRoman} Typ-Zähler (römische Zahlen)',
        dispatch: '{dispatch} Leitstellenname',
        dispatchAlias: '{dispatchAlias} Leitstellen-Alias',
        stationAlias: '{stationAlias} Wachen-Alias',
        saveAll: 'Alle speichern',
        statusWaiting: 'Warte auf Eingabe',
        statusError: '<b>Fehler bei der Generierung!</b> Sollte dieser Fehler ein weiteres mal auftreten, bitte melde ihn. Bitte teile dann folgendes mit:',
        statusWorking: 'Generiere Namen und Formulare. Dies kann, abhängig von System und Anzahl der Fahrzeuge, eine gewisse Zeit in Anspruch nehmen.',
        statusSuccess: 'Namen und Forumlare erfolgreich generiert!',
        nameAlreadyCorrect: 'Name entspricht bereits der Vorlage!',
        nameToLong: 'Für folgende Fahrzeuge ist der Name zu lang:',
        nameToLongOriginalName: 'Ursprünglicher Name',
        nameToLongGeneratedName: 'Generierter Name',
        nameToLongShortenedName: 'Neuer/gekürzter Name',
        startNum: 'Zähler-Start',
        counterOverride: 'Bei mehreren Fahrzeugen eines Typs trotzdem bei 1 anfangen',
        startNumHelp: 'Hier kann man einen Startwert für den Typzähler angeben. Setzt man da 0 und legt den Hebel nebendran um, so werden Fahrzeuge, die nur einen Typ auf der Wache haben keine durchnummerierung bekommen, sollten sich aber mehrere Fahrzeuge eines Typs auf der Wache befinden, wird der Typ, bei 1 beginnend, durchnummeriert. Man kann dann aber auch den Zähler bei 5 starten lassen (warum auch immer man das wollen sollte, aber es ist möglich ;) )',
        helpTitle: 'Eine kleine Anleitung findest du unter diesem Link: ',
        helpLink: 'https://docs.lss-manager.de/modules/renameFz',
        toggleNameCorrect: 'Fahrzeuge mit richtigem Namen ein-/ausblenden',
        settings: {
            show: 'Ein-/Ausblenden',
            names: {
                vehicleTypes: 'Fahrzeugtypen',
                stations: 'Wachen-Aliase'
            },
            descriptions: {
                vehicleTypes: 'Da die folgenden Textfelder vielleicht verwirrend erscheinen: Man kann hier für jeden Fahrzeugtyp eine alternative Bezeichnung eingeben und diese dann einfügen lassen, in der Leitstelle.',
                stations: 'Du kannst hier für jede Wache einen alternativen Namen eingeben und diesen dann beim Umbenennen in der Leitstelle verwenden.'
            },
            validStationTypes: {
                0: "Feuerwache",
                2: "Rettungswache",
                5: "Rettungshubschrauber-Station",
                6: "Polizeiwache",
                7: "Leitstelle",
                9: "THW",
                11: "Bereitschaftspolizei",
                12: "Schnelleinsatzgruppe (SEG)",
                13: "Polizeihubschrauberstation",
                15: "Wasserrettung",
                17: "Polizei-Sondereinheiten",
                18: "Feuerwache (Kleinwache)",
                19: "Polizeiwache (Kleinwache)",
                20: "Rettungswache (Kleinwache)"
            },
            vehicleTypes: {
                0: 'LF 20',
                1: 'LF 10',
                2: 'DLK 23',
                3: 'ELW 1',
                4: 'RW',
                5: 'GW-A',
                6: 'LF 8/6',
                7: 'LF 20/16',
                8: 'LF 10/6',
                9: 'LF 16-TS',
                10: 'GW-Öl',
                11: 'GW-L2-Wasser',
                12: 'GW-Messtechnik',
                13: 'SW 1000',
                14: 'SW 2000',
                15: 'SW 2000-Tr',
                16: 'SW Kats',
                17: 'TLF 2000',
                18: 'TLF 3000',
                19: 'TLF 8/8',
                20: 'TLF 8/18',
                21: 'TLF 16/24-Tr',
                22: 'TLF 16/25',
                23: 'TLF 16/45',
                24: 'TLF 20/40',
                25: 'TLF 20/40-SL',
                26: 'TLF 16',
                27: 'GW-Gefahrgut',
                28: 'RTW',
                29: 'NEF',
                30: 'HLF 20',
                31: 'RTH',
                32: 'FuStW',
                33: 'GW-Höhenrettung',
                34: 'ELW 2',
                35: 'leBefKw',
                36: 'MTW',
                37: 'TSF-W',
                38: 'KTW',
                39: 'GKW',
                40: 'MTW-TZ',
                41: 'MzKW',
                42: 'LKW K 9',
                43: 'BRmG R',
                44: 'Anh DLE',
                45: 'MLW 5',
                46: 'WLF',
                47: 'AB-Rüst',
                48: 'AB-Atemschutz',
                49: 'AB-Öl',
                50: 'GruKw',
                51: 'FüKw',
                52: 'GefKw',
                53: 'Dekon-P',
                54: 'AB-Dekon-P',
                55: 'KdoW-LNA',
                56: 'KdoW-OrgL',
                57: 'FwK',
                58: 'KTW Typ B',
                59: 'ELW 1 (SEG)',
                60: 'GW-San',
                61: 'Polizeihubschrauber',
                62: 'AB-Schlauch',
                63: 'GW-Taucher',
                64: 'GW-Wasserrettung',
                65: 'LKW 7 Lkr 19 tm',
                66: 'Anh MzB',
                67: 'Anh SchlB',
                68: 'Anh MzAB',
                69: 'Tauchkraftwagen',
                70: 'MZB',
                71: 'AB-MZB',
                72: 'WaWe 10',
                73: 'GRTW',
                74: 'NAW',
                75: 'FLF',
                76: 'Rettungstreppe',
                77: 'AB-Gefahrgut',
                78: 'AB-Einsatzleitung',
                79: 'SEK - ZF',
                80: 'SEK - MTF',
                81: 'MEK - ZF',
                82: 'MEK - MTF',
                83: 'GW-Werkfeuerwehr',
                84: 'ULF mit Löscharm',
                85: 'TM 50',
                86: 'Turbolöscher',
                87: 'TLF 4000',
                88: 'KLF',
                89: 'MLF',
                90: 'HLF 10'
            }
        }
    };

    I18n.translations.en.lssm.renameFz = {
        name: 'Rename vehicles',
        rename: "rename",
        id: "{id} Id of Vehicle",
        old: "{old} Current name",
        vehicleType: "{vehicleType} Type of Vehicle",
        stationName: "{stationName} Name of building",
        number: '{number} Type-counter',
        numberRoman: '{numberRoman} Type-counter (Roman numerals)',
        dispatch: '{dispatch} Name of Dispatchcenter',
        dispatchAlias: '{dispatchAlias} Alias od Dispatchcenter',
        stationAlias: '{stationAlias} Building-Alias',
        saveAll: 'save All',
        statusWaiting: 'Wait for input',
        statusError: '<b>Error during generation!</b> If this error occurs again, please report it. Please provide the following information:',
        statusWorking: 'Generate names and forms. This can take a certain amount of time, depending on the system and number of vehicles.',
        statusSuccess: 'Names and Forumlare successfully generated!',
        nameAlreadyCorrect: 'Name already corresponds to the template!',
        nameToLong: 'The name is too long for the following vehicles:',
        nameToLongOriginalName: 'Original Name',
        nameToLongGeneratedName: 'Generated Name',
        nameToLongShortenedName: 'New/shortened name',
        helpTitle: 'You can find a small instruction under this link: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Counter start',
        startNumHelp: 'Here you can enter a start value for the type counter. If you set 0 as the start value, the first vehicle of a type will not get the numbering, this is very practical if you have only one vehicle of a type on a guard and do not want to number it. But you can also start the counter at 5 (for whatever reason you want, but it is possible ;) )',
        toggleNameCorrect: 'Show/Hide Vehicles with correct names',
        settings: {
            show: 'Show/Hide',
            names: {
                vehicleTypes: 'vehicle Types',
                stations: 'Building alias'
            },
            descriptions: {
                vehicleTypes: 'Here you can set alternative names for each vehicle Type. You can use them when renaming you vehicles via dispatch center.',
                stations: 'Here you can set alternative names for each building. You can use them when renaming you vehicles via dispatch center.'
            },
            validStationTypes: {
                0: "Fire Station",
                1: "Dispatch Center",
                3: "Ambulance Station",
                5: "Police Station",
                6: "Helicopter station",
                8: "Police Aviation",
                11: "Fire boat dock",
                12: "Rescue boat dock",
                13: "Fire Station (Small)",
                14: "Urgent Care Center",
                15: "Police Station (Small station)",
                16: "Ambulance station (Small station)"
            },
            vehicleTypes: {
                0: 'Type 1 fire engine',
                1: 'Type 2 fire engine',
                2: 'Platform truck',
                3: 'Bataillon chief unit',
                4: 'Heavy rescue vehicle',
                5: 'Ambulance',
                6: 'Mobile air',
                7: 'Water Tanker',
                8: 'Utility unit',
                9: 'HazMat',
                10: 'Patrol car',
                11: 'HEMS',
                12: 'mcv',
                13: 'Quint',
                14: 'Police helicopter',
                15: 'Fly-Car',
                16: 'SWAT Armoured Vehicle',
                17: 'ARFF Crash Tender',
                18: 'Rescue Engine',
                19: 'K-9 Unit',
                20: 'Mass Casualty Unit',
                21: 'Heavy Rescue + Boat',
                22: 'Boat Trailer',
                23: 'Police Motorcycle',
                24: 'Large Fireboat',
                25: 'Large Rescue Boat',
                26: 'SWAT SUV',
                27: 'BLS Ambulance',
                28: 'EMS Rescue',
                29: 'EMS Chief'
            }
        }
    };

    I18n.translations.fj.lssm.renameFz = {
        name: 'Rename vehicles',
        rename: "rename",
        id: "{id} Id of Vehicle",
        old: "{old} Current name",
        vehicleType: "{vehicleType} Type of Vehicle",
        stationName: "{stationName} Name of building",
        number: '{number} Type-counter',
        numberRoman: '{numberRoman} Type-counter (Roman numerals)',
        dispatch: '{dispatch} Name of Dispatchcenter',
        dispatchAlias: '{dispatchAlias} Alias od Dispatchcenter',
        stationAlias: '{stationAlias} Building-Alias',
        saveAll: 'save All',
        statusWaiting: 'Wait for input',
        statusError: '<b>Error during generation!</b> If this error occurs again, please report it. Please provide the following information:',
        statusWorking: 'Generate names and forms. This can take a certain amount of time, depending on the system and number of vehicles.',
        statusSuccess: 'Names and Forumlare successfully generated!',
        nameAlreadyCorrect: 'Name already corresponds to the template!',
        nameToLong: 'The name is too long for the following vehicles:',
        nameToLongOriginalName: 'Original Name',
        nameToLongGeneratedName: 'Generated Name',
        nameToLongShortenedName: 'New/shortened name',
        helpTitle: 'You can find a small instruction under this link: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Counter start',
        startNumHelp: 'Here you can enter a start value for the type counter. If you set 0 as the start value, the first vehicle of a type will not get the numbering, this is very practical if you have only one vehicle of a type on a guard and do not want to number it. But you can also start the counter at 5 (for whatever reason you want, but it is possible ;) )',
        toggleNameCorrect: 'Show/Hide Vehicles with correct names',
        settings: {
            show: 'Show/Hide',
            names: {
                vehicleTypes: 'vehicle Types',
                stations: 'Building alias'
            },
            descriptions: {
                vehicleTypes: 'Here you can set alternative names for each vehicle Type. You can use them when renaming you vehicles via dispatch center.',
                stations: 'Here you can set alternative names for each building. You can use them when renaming you vehicles via dispatch center.'
            },
            validStationTypes: {
                0: "Fire Station",
                2: "Ambulance Station",
                6: "Police Station",
                7: "Dispatch Center",
                18: "Fire Station (Small)",
                19: "Police Station (Small station)",
                20: "Ambulance station (Small station)",
                21: "Urgent Care Center"
            },
            vehicleTypes: {
                0: 'Rescue Ladder',
                1: 'Tactical Response Vehicle (TRV)',
                2: 'Turntable Ladder (TL)',
                3: 'Command unit',
                4: 'Major Rescue Unit (MRU)',
                5: 'Ambulance',
                6: 'Water Carrier',
                7: 'HazMat Unit',
                8: 'Incident response vehicle (IRV)',
                9: 'SAR helicopter',
                10: 'Rapid Response Vehicle'
            }
        }
    };

    I18n.translations.nl.lssm.renameFz = {
        name: 'Voertuigen herbenoemen',
        rename: "Naam aanpassen",
        id: "{id} Voertuignaam ",
        old: "{old} Oude naam",
        vehicleType: "{vehicleType} Voertuigtype",
        stationName: "{stationName} Gebouwnaam",
        number: '{number} typeteller',
        numberRoman: '{numberRoman} typeteller (Romeinse cijfers)',
        dispatch: '{dispatch} meldkamernaam',
        dispatchAlias: '{dispatchAlias} Alias de meldkamer',
        stationAlias: '{stationAlias} Gebouw-Alias',
        saveAll: ' Alles opslaan',
        statusWaiting: 'Wachten op invoer',
        statusError: '<b>Error tijdens generatie!</b> Als deze fout zich opnieuw voordoet, gelieve dit te melden. Gelieve de volgende informatie te verstrekken:',
        statusWorking: 'Genereer namen en vormen. Afhankelijk van het systeem en het aantal voertuigen kan dit enige tijd in beslag nemen.',
        statusSuccess: 'Namen en Forumlare succesvol gegenereerd!',
        nameAlreadyCorrect: 'Naam komt al overeen met het sjabloon',
        nameToLong: 'De naam is te lang voor de volgende voertuigen:',
        nameToLongOriginalName: 'Oorspronkelijke naam',
        nameToLongGeneratedName: 'Gegenereerde naam',
        nameToLongShortenedName: 'Nieuw/verkorte naam',
        helpTitle: 'Een kleine instructie vindt u onder deze link: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Begin van de balie',
        startNumHelp: 'Hier kunt u een startwaarde voor de typeteller invoeren. Als je 0 als startwaarde instelt, krijgt het eerste voertuig van een type niet de nummering, dit is erg praktisch, als je maar één voertuig van een type op een horloge hebt, en je wilt het niet nummeren. Maar je kunt ook beginnen met de teller op 5 (om wat voor reden dan ook, maar het is mogelijk ;) )',
        toggleNameCorrect: 'Toon/verberg voertuigen met overeenkomstige naam',
        settings: {
            show: 'Verberg/Toon',
            names: {
                vehicleTypes: 'Alternatieve voertuigtype-namen',
                stations: 'Alternatieve geboude namen'
            },
            descriptions: {
                vehicleTypes: 'Hier kunt u alternatieve namen instellen voor elk voertuigtype. U kunt ze gebruiken bij het hernoemen van uw voertuigen via dispatch center.',
                stations: 'Hier kunt u alternatieve namen instellen voor elk geboude. U kunt ze gebruiken bij het hernoemen van uw voertuigen via dispatch center.'
            },
            validStationTypes: {
                0: "Brandweer, Kazerne",
                1: "Meldkamer",
                3: "Ambulance, standplaats",
                5: "Politie, Opkomstbureau",
                6: "MMT Standplaats",
                9: "Politiehelikopter standplaats",
                11: "Politie, Hoofdbureau",
                13: "Ambulance, VWS-post"
            },
            vehicleTypes: {
                0: 'SIV',
                1: 'TS 8/9',
                2: 'AL',
                3: 'DA-OVD-B',
                4: 'HV-G',
                5: 'AB',
                6: 'TST 8/9',
                7: 'TST 6/7',
                8: 'TST 4',
                9: 'TS 4',
                10: 'SL',
                11: 'WvD',
                12: 'TST-NBB 8/9',
                13: 'TS8 (4x4)',
                14: 'TST-NBB 6/7',
                15: 'TST-NBB 4',
                16: 'Ambulance',
                17: 'TS 6/7',
                18: 'HW',
                19: 'DA-HOvD-B',
                20: 'DA',
                21: 'DB',
                22: 'DA Noodhulp',
                23: 'Lifeliner',
                24: 'AGS',
                25: 'DB Noodhulp',
                26: 'HA',
                27: 'ABH',
                28: 'Politiehelikopter',
                29: 'WTH',
                30: 'Zorgambulance',
                31: 'CO',
                32: 'COH',
                33: 'WO',
                34: 'TW',
                35: 'OVD-P',
                36: 'WOA',
                37: 'MMT-Auto',
                38: 'OvD-G',
                39: 'ME Commandovoertuig',
                40: 'ME Flexbus',
                41: 'CT (8x8)',
                42: 'CT (6x6)',
                43: 'CT (4x4)',
                44: 'AFO/OSC',
                45: 'DBH',
                46: 'DM Noodhulp',
                47: 'DA Hondengeleider',
                48: 'DB Hondengeleider',
                49: 'PM-OR',
                50: 'TS-OR',
                51: 'HVH',
                52: 'RR'
            }
        }
    };

    function setSettings() {

        let managedSettings = {
            "id": LSS_RENAMEFZ_STORAGE,
            "title": I18n.t('lssm.renameFz.name'),
            "settings": {
                "renameFzVehicleShowHideButton": {
                    "name": I18n.t('lssm.renameFz.settings.names.vehicleTypes'),
                    "id": "renameFzVehicleShowHideButton",
                    "info_text": I18n.t('lssm.renameFz.settings.descriptions.vehicleTypes'),
                    "ui": {
                        "label": `${I18n.t('lssm.renameFz.settings.names.vehicleTypes')}&nbsp${I18n.t('lssm.renameFz.settings.show')}`,
                        "type": "button",
                        "custom_function_event": "click",
                        "custom_function": function () {
                            $(`[id^=${LSS_RENAMEFZ_STORAGE}_renameFz_vehicleTypes-].lssm_setting_line`).toggle();
                        }
                    }
                }
            }
        };

        let defaultTypeShortings = I18n.t('lssm.renameFz.settings.vehicleTypes');

        $.each(defaultTypeShortings, function (key, val) {
            let tmpObject = {
                ['renameFz_vehicleTypes-' + key]: {
                    "default": val,
                    "ui": {
                        "label": `${I18n.t(`lssm.renameFz.settings.vehicleTypes.${key}`)}:&nbsp;`,
                        "type": "text",
                        "description": "",
                        "hidden": true
                    }
                }
            };

            $.extend(managedSettings.settings, tmpObject);

        });

        $.extend(managedSettings.settings, {
            "renameFzStationsShowHideButton": {
                "name": I18n.t('lssm.renameFz.settings.names.stations'),
                "id": "renameFzStationsShowHideButton",
                "info_text": I18n.t('lssm.renameFz.settings.descriptions.stations'),
                "ui": {
                    "label": `${I18n.t('lssm.renameFz.settings.names.stations')}&nbsp${I18n.t('lssm.renameFz.settings.show')}`,
                    "type": "button",
                    "custom_function_event": "click",
                    "custom_function": function () {
                        $(`[id^=${LSS_RENAMEFZ_STORAGE}_renameFz_stations-].lssm_setting_line`).toggle();
                    }
                }
            }
        });

        let buildings = lssm.buildings;
        buildings.sort((a,b) => (a.caption > b.caption) ? 1 : ((b.caption > a.caption) ? -1 : 0));
        $.each(lssm.buildings, function (key, station) {
            if (I18n.t('lssm.renameFz.settings.validStationTypes')[station.building_type]) {
                let tmpObject = {
                    ['renameFz_stations-' + station.id]: {
                        "default": station.caption,
                        "ui": {
                            "label": `${station.caption} (${I18n.t('lssm.renameFz.settings.validStationTypes')[station.building_type]}:&nbsp;`,
                            "type": "text",
                            "description": "",
                            "hidden": true
                        }
                    }
                };
                $.extend(managedSettings.settings, tmpObject);
            }
        });

        lssm.managedSettings.register(managedSettings);
    }

    setSettings();

    if (document.querySelector('img.online_icon') || document.querySelector('.aao')) return;

    let vehiclesTypesByBuilding = {};
    let buildings = {};

    let set = {
        rename: false,
        options: {
            id: '',
            old: '',
            vehicleType: '',
            tagging: '',
            stationName: '',
            stationAlias: '',
            number: '',
            numberRoman: '',
            dispatch: '',
            dispatchAlias: ''
        },
        vehicles: {},
        str: {
            default: "{old}",
            str: ''
        }
    };
    const prefix = `${lssm.config.prefix}_renameFzSettings`;
    $('#tab_vehicle').on('DOMNodeInserted', 'script', createSettings);
    if ('#vehicle_table') createSettings();

    let executionFailed = false;
    const mode = $('#tab_vehicle')[0] ? "leitstelle" : "wache";

    function printError(err) {
        $(`#${prefix}_status`).html(`Status: ${I18n.t('lssm.renameFz.statusError')}<br><b>${err.name}</b><br><i>${err.message}</i><pre>${err.stack}</pre>`);
        executionFailed = true;
    }

    function arabicToRoman(arabicNumber) {
        try {
            let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
            let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
            arabicNumber = parseInt(arabicNumber);
            let romanNumber = "";

            if (isNaN(arabicNumber) || (arabicNumber <= 0)) {
                return "0";
            }

            for (let Nr = 0; Nr < arabic.length; Nr++)
                while (arabicNumber >= arabic[Nr]) {
                    romanNumber += roman[Nr];
                    arabicNumber -= arabic[Nr];
                }

            return romanNumber;
        } catch (err) {
            printError(err)
        }
    }

    function getVehicleNumberAtStation(vehicleID) {
        try {
            let vehicle = lssm.vehicles[vehicleID];
            let typeAtStation = vehiclesTypesByBuilding[vehicle.building][vehicle.type];
            let startNum = parseInt($(`#${prefix}_startNum`).val());
            return typeAtStation.indexOf(vehicleID) + startNum + ((startNum === 0 && $('#lssm-inline-counterOverride').prop("checked") && typeAtStation.length > 1) ? 1 : 0);
        } catch (err) {
            printError(err)
        }
    }

    function rename() {
        try {
            localStorage[`${prefix}_input`] = JSON.stringify({
                str: set.str.str,
                counter: $(`#${prefix}_startNum`).val(),
                counterOverride: $('#lssm-inline-counterOverride').prop("checked")
            });
            let vehicles = $('#vehicle_table tbody tr:visible');
            let vehiclesNum = vehicles.length;
            let status = $(`#${prefix}_status`);
            status.html(`Status: ${I18n.t('lssm.renameFz.statusWorking')} (0/${vehiclesNum})`);
            indexVehicles();
            indexBuildings();
            $(`.${prefix}_name_correct`).remove();
            $(`#${prefix}_nameToLongDiv`).hide();
            set.vehicles = {};
            let vars = set.str.str.match(/{.+?}/g);
            let usedOptions = [];
            let needType = false;
            let needTagging = false;
            let needStationAlias = false;
            let needDispatchAlias = false;
            let needNumber = false;
            let needNumberRoman = false;
            set.options.dispatch = mode === "leitstelle" ? $("h1").text() : $('.btn-group.pull-right:first-of-type .btn:nth-of-type(2)').text();
            let settings = lssm.settings.get(LSS_RENAMEFZ_STORAGE, {});
            for (let variable in vars) {
                variable = vars[variable].replace(/[{}]/g, "");
                if (set.options.hasOwnProperty(variable)) {
                    usedOptions.push(variable);
                }
            }
            if (usedOptions.indexOf("vehicleType") !== -1) {
                needType = true;
            }
            if (usedOptions.indexOf("tagging") !== -1) {
                needType = true;
                needTagging = true;
            }
            if (usedOptions.indexOf("stationAlias") !== -1) {
                needStationAlias = true;
            }
            if (usedOptions.indexOf("dispatchAlias") !== -1) {
                needDispatchAlias = true;
            }
            if (usedOptions.indexOf("number") !== -1) {
                needNumber = true;
            }
            if (usedOptions.indexOf("numberRoman") !== -1) {
                needNumber = true;
                needNumberRoman = true;
            }
            let numNewNames = 0;
            for (let i = 0; i < vehiclesNum; i++) {
                status.html(`Status: ${I18n.t('lssm.renameFz.statusWorking')} (${i+1}/${vehiclesNum})`);
                let vehicleRow = $(vehicles[i]);
                let vehicleCaption = mode === "leitstelle" ? vehicleRow.find('[id^=vehicle_caption_]') : vehicleRow.find("td[sortvalue]");
                let vehicleID = mode === "leitstelle" ? vehicleCaption.attr("id").replace(/\D/g, "") : vehicleCaption.find("a").attr("href").replace(/\D/g, "");
                if (mode === "wache" && !$(`#vehicle_form_holder_${vehicleID}`)[0]) vehicleCaption.append(`<div id="vehicle_form_holder_${vehicleID}"></div>`) && vehicleCaption.find("a").attr("id", `vehicle_link_${vehicleID}`);
                let vehicle = lssm.vehicles[vehicleID];
                let building = buildings[vehicle.building];
                set.vehicles[vehicleID] = {};
                set.vehicles[vehicleID].dispatch = set.options.dispatch;
                set.vehicles[vehicleID].id = vehicleID;
                set.vehicles[vehicleID].old = vehicle.name;
                set.vehicles[vehicleID].stationName = building.caption;
                if (needType) {
                    set.vehicles[vehicleID].vehicleType = lssm.carsById[vehicle.type][0];
                }
                if (needTagging) {
                    set.vehicles[vehicleID].tagging = settings[`renameFz_vehicleTypes-${vehicle.type}`]||set.vehicles[vehicleID].vehicleType;
                }
                if (needStationAlias) {
                    set.vehicles[vehicleID].stationAlias = settings[`renameFz_stations-${vehicle.building}`];
                }
                if (needDispatchAlias) {
                    set.vehicles[vehicleID].dispatchAlias = settings[`renameFz_stations-${(mode === "leitstelle" ? window.location.href : $('.btn-group.pull-right:first-of-type .btn:nth-of-type(2)').attr("href")).replace(/\D/g, "")}`];
                }
                if (needNumber) {
                    set.vehicles[vehicleID].number = getVehicleNumberAtStation(vehicleID)||"";
                }
                if (needNumberRoman) {
                    set.vehicles[vehicleID].numberRoman = arabicToRoman(set.vehicles[vehicleID].number||0);
                    set.vehicles[vehicleID].numberRoman = (set.vehicles[vehicleID].numberRoman === "0" ? "" : set.vehicles[vehicleID].numberRoman);
                }
                set.vehicles[vehicleID].newName = set.str.str.replace(/{(.*?)}/g, (match, p1) => typeof set.vehicles[vehicleID][p1] !== void 0 ? set.vehicles[vehicleID][p1] : match);
                if (set.vehicles[vehicleID].newName === set.vehicles[vehicleID].old) {
                    vehicleCaption.append(`<span class="${prefix}_name_correct"><br>${I18n.t('lssm.renameFz.nameAlreadyCorrect')}</span>`);
                    $(`#vehicle_form_holder_${vehicleID}`)
                        .empty()
                        .hide();
                    if (i + 1 === vehiclesNum && executionFailed !== true) {
                        status.html("Status: " + I18n.t('lssm.renameFz.statusSuccess'));
                    }
                } else {
                    numNewNames++;
                    window.setTimeout(function() {
                        applyNewName(vehicleID, (i + 1 === vehiclesNum));
                    }, numNewNames * 100);
                }
            }
        } catch (e) {
            printError(e);
        }
    }

    function applyNewName(vehicleID, last=false) {
        if (set.vehicles[vehicleID].newName.length > 40) {
            $(`#${prefix}_nameToLongDiv`).show();
            $(`#${prefix}_nameToLongTableBody`).append("<tr><td>" + set.vehicles[vehicleID].old + "</td><td>" + set.vehicles[vehicleID].newName + "</td><td>" + set.vehicles[vehicleID].newName.substr(0, 40) + "</td></tr>");
        }
        if (!$(`#vehicle_new_name_${vehicleID}`)[0]) {
            $(`#vehicle_form_holder_${vehicleID}`)
                .show()
                .html(I18n.t("common.loading"));

            $.ajax({
                url: `/vehicles/${vehicleID}/editName`,
                success: function (data) {
                    $(`#vehicle_form_holder_${vehicleID}`).html(data);
                    $(`#vehicle_new_name_${vehicleID}`).val(set.vehicles[vehicleID].newName.substr(0, 40));
                    if (last && executionFailed !== true) {
                        $(`#${prefix}_status`).html(`Status: ${I18n.t('lssm.renameFz.statusSuccess')}`);
                    }
                },
                error: function (error) {
                    $(`#vehicle_form_holder_${vehicleID}`).html("error");
                    printError(error);
                }
            });
        } else {
            $(`#vehicle_new_name_${vehicleID}`).val(set.vehicles[vehicleID].newName.substr(0, 40));
        }
    }

    function indexVehicles() {
        vehiclesTypesByBuilding = {};
        lssm.get_vehicles(false, true);
        for (let vehicleId in lssm.vehicles) {
            let vehicle = lssm.vehicles[vehicleId];
            if (lssm.vehicles.hasOwnProperty(vehicleId)) {
                if (!vehiclesTypesByBuilding.hasOwnProperty(vehicle.building)) {
                    vehiclesTypesByBuilding[vehicle.building] = {};
                }
                if (!vehiclesTypesByBuilding[vehicle.building].hasOwnProperty(vehicle.type)) {
                    vehiclesTypesByBuilding[vehicle.building][vehicle.type] = [];
                }
                vehiclesTypesByBuilding[vehicle.building][vehicle.type].push(vehicleId);
            }
        }
    }

    function indexBuildings() {
        buildings = {};
        lssm.get_buildings(false, true);
        for (let building in lssm.buildings) {
            buildings[lssm.buildings[building].id] = lssm.buildings[building];
        }
    }

    function createSettings() {
        if ($(`#${prefix}`).length) return;
        $('#vehicle_table').before(`\
<a id="toggleRename" state="${localStorage["lssm_renameFz_visibility"]||"open"}"><i class="glyphicon glyphicon-eye-close"></i></a><br>
<div id="${prefix}">
    <p><strong>${I18n.t('lssm.renameFz.helpTitle')}<a target="_blank" href="${I18n.t('lssm.renameFz.helpLink')}">${I18n.t('lssm.renameFz.helpLink')}</a></strong></p>
    <div id="${prefix}_buttons"></div>
    <div>
        <input class="form-control" id="${prefix}_string" type="text" value=""/>
        &nbsp;${I18n.t('lssm.renameFz.startNum')}
        &nbsp;<span class="glyphicon glyphicon-question-sign helpButton" aria-hidden="true" helpBox="startNum"></span>
        <div class="alert alert-info" id="startNum" style="display: none; position: absolute; z-index=9999">${I18n.t('lssm.renameFz.startNumHelp')}</div> :
        <input id="${prefix}_startNum" type="number" value="1" min="0"/>
        <div>
            <span class="pull-left"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="lssm-inline-counterOverride" value="true" name="onoffswitch" type="checkbox"/><label class="onoffswitch-label" for="lssm-inline-counterOverride"></label></div></span>
            ${I18n.t('lssm.renameFz.counterOverride')}
        </div>
    </div>
    <div>
        <a href="#" class="btn btn-default btn-xs disabled" id="${prefix}_rename">${I18n.t('lssm.renameFz.rename')}</a>
        &nbsp;<span id="${prefix}_status">Status: ${I18n.t('lssm.renameFz.statusWaiting')}</span>
    </div>
    <div class="alert fade in alert-danger" id="${prefix}_nameToLongDiv">
        <button class="close" type="button" id="${prefix}_HideNameToLongDiv">×</button>
        <b>${I18n.t('lssm.renameFz.nameToLong')}</b>
        <table class="table table-striped" role="grid" id="${prefix}_nameToLongTable">
            <thead><tr>
                <th>${I18n.t('lssm.renameFz.nameToLongOriginalName')}</th>
                <th>${I18n.t('lssm.renameFz.nameToLongGeneratedName')}</th>
                <th>${I18n.t('lssm.renameFz.nameToLongShortenedName')}</th>
            </tr></thead>
            <tbody id="${prefix}_nameToLongTableBody"></tbody>
        </table>
    </div>
    <input type="button" class="btn btn-success" id="${prefix}_saveAll" value="${I18n.t('lssm.renameFz.saveAll')}"/>
    <input type="button" class="btn btn-primary" id="${prefix}_toggle_name_correct" mode="hide" value="${I18n.t('lssm.renameFz.toggleNameCorrect')}"/>
</div>`);
        $(`#${prefix}`)[(localStorage["lssm_renameFz_visibility"]||"open") === "close" ? "hide" : "show"]();
        let buttons = "";
        for (let i in set.options) {
            buttons += `<a href="#" class="btn btn-default btn-xs" data-str="{${i}}">${I18n.t(`lssm.renameFz.${i}`)}</a>`;
        }
        $(`#${prefix}_buttons`).append(buttons);

        $('.helpButton')
            .on('mouseenter', function() {
                $(`#${$(this).attr('helpBox')}`).show();
            })
            .on('mouseleave', function() {
                $(`#${$(this).attr('helpBox')}`).hide();
            });

        $(`#${prefix}_HideNameToLongDiv`).click(function () {
            $(`#${prefix}_nameToLongDiv`).hide();
            $(`#${prefix}_nameToLongTableBody`).html("");
        });
        $(`#${prefix}_nameToLongDiv`).hide();
        $(`#${prefix}_buttons`).click(function (e) {
            let input = $(`#${prefix}_string`)[0], start = input.selectionStart,
                end = input.selectionEnd;
            input.value = input.value.substr(0, start) + $(e.target).data('str') + input.value.substr(end);
            let pos = start + $(e.target).data('str').length;
            input.selectionStart = pos;
            input.selectionEnd = pos;
            changeInput({'target': input});
            input.focus();
            return false;
        });

        function changeInput(e) {
            set.str.str = e.target && e.target.value.trim() || e.value.trim();
            $(`#${prefix}_rename`)[(set.str.str.length > 0 ? "removeClass" : "addClass")]("disabled");
        }

        $(`#${prefix}_string`)
            .change(changeInput)
            .on("keyup", changeInput);
        $(`#${prefix}_rename`).click(rename);
        $(`#${prefix}_saveAll`).click(function () {
            for (let i = 0; i < $(".vehicle_form input.btn.btn-success").length; i++) {
                setTimeout(function() {
                    $($(".vehicle_form input.btn.btn-success")[i]).click();
                }, 100 * i);
            }
            $(`.${prefix}_name_correct`).remove();
        });

        $(`#${prefix}_toggle_name_correct`).click(function() {
            let rows = $(`.${prefix}_name_correct`).parent().parent().parent();
            $(this).attr("mode") === "hide" ? (rows.hide() && $(this).attr("mode", "show")) : (rows.show() && $(this).attr("mode", "hide"));
        });

        $('#toggleRename').click(function() {
            let state_new = $(this).attr("state") === "open" ? "close" : "open";
            localStorage["lssm_renameFz_visibility"] = state_new;
            $(`#${prefix}`)[state_new === "close" ? "hide" : "show"]();
            $(this).attr("state", state_new);
        });

        let input_saved = localStorage[`${prefix}_input`];

        if (input_saved) {
            input_saved = JSON.parse(input_saved);
            $(`#${prefix}_startNum`).val(input_saved.counter||1);
            $('#lssm-inline-counterOverride').prop("checked", input_saved.counterOverride||0);
            $(`#${prefix}_string`)
                .val(input_saved.str||"")
                .trigger("change");
        }
    }

})(I18n, jQuery);
