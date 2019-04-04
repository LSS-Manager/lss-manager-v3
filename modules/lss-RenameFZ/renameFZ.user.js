(function (I18n, $) {

    const LSS_RENAMEFZ_STORAGE = "LSS_RENAMEFZ_STORAGE";

    I18n.translations.de.lssm.renameFz = {
        name: 'Fahrzeuge Umbenennen',
        example: "Dies ist ein Beipsiel",
        rename: "Umbenennen",
        id: "{id} FahrzeugId ",
        old: "{old} Alten Namen ein",
        vehicleType: "{vehicleType} Typen des Fahrzeugs",
        stationName: "{stationName} Wachennamen",
        tagging: '{tagging} Kennzeichnung des Fahrzeugtyps',
        number: '{number} Typ-Zähler',
        numberRoman: '{numberRoman} Typ-Zähler (römische Zahlen)',
        dispatch: '{dispatch} Leitstellenname',
        stationAlias: '{stationAlias} Wachen-Alias',
        saveAll: 'Alle speichern',
        exampleResult: 'ergibt: FZId Test ALTERNAME FAHRZEUGTYPE WACHE',
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
        startNumHelp: 'Hier kann man einen Startwert für den Typzähler angeben können. Setzt man da 0 als Startwert, so wird das erste Fahrzeug eines Typs die Nummerierung nicht bekommen, das ist ganz praktisch, wenn man nur ein Fahrzeug eines Typs auf einer Wache hat, und das dann nicht durchnummerieren will. Man kann dann aber auch den Zähler bei 5 starten lassen (warum auch immer man das wollen sollte, aber es ist möglich ;) )',
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
                9: "THW",
                11: "Bereitschaftspolizei",
                12: "Schnelleinsatzgruppe (SEG)",
                13: "Polizeihubschrauberstation",
                15: "Wasserrettung",
                17: "Polizei-Sondereinheiten",
                18: "Feuerwache (Kleinwache)"
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
                87: 'TLF 4000'
            }
        }
    };

    I18n.translations.en.lssm.renameFz = {
        name: 'Rename vehicles',
        example: "This is an example",
        rename: "rename",
        id: "{id} Id of Vehicle",
        old: "{old} Current name",
        vehicleType: "{vehicleType} Type of Vehicle",
        stationName: "{stationName} Name of building",
        number: '{number} Type-counter',
        numberRoman: '{numberRoman} Type-counter (Roman numerals)',
        dispatch: '{dispatch} Name of Dispatchcenter',
        stationAlias: '{stationAlias} Building-Alias',
        saveAll: 'save All',
        exampleResult: 'results: ID Test OLDNAME VEHICLETYPE BUILDING',
        statusWaiting: 'Wait for input',
        statusError: '<b>Error during generation!</b> If this error occurs again, please report it. Please provide the following information:',
        statusWorking: 'Generate names and forms. This can take a certain amount of time, depending on the system and number of vehicles.',
        statusSuccess: 'Names and Forumlare successfully generated!',
        nameAlreadyCorrect: 'Name already corresponds to the template!',
        nameToLong: 'The name is too long for the following vehicles:',
        nameToLongOriginalName: 'Original Name',
        nameToLongGeneratedName: 'Generated Name',
        nameToLongShortenedName: 'New/shortened name',
        startNum: 'Counter start',
        startNumHelp: 'Here you can enter a start value for the type counter. If you set 0 as the start value, the first vehicle of a type will not get the numbering, this is very practical if you have only one vehicle of a type on a guard and do not want to number it. But you can also start the counter at 5 (for whatever reason you want, but it is possible ;) )',
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
                3: "Ambulance Station",
                5: "Police Station",
                6: "Helicopter station",
                8: "Police Aviation",
                11: "Fire boat dock",
                12: "Rescue boat dock",
                13: "Fire Station (Small)"
                // 14: "Urgent Care Center" // We will see
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
                27: 'BLS Ambulance'
            }
        }
    };

    I18n.translations.nl.lssm.renameFz = {
        name: 'Voertuigen herbenoemen',
        example: "Dit is een voorbeeld",
        rename: "Naam aanpassen",
        id: "{id} Voertuignaam ",
        old: "{old} Oude naam",
        vehicleType: "{vehicleType} Voertuigtype",
        stationName: "{stationName} Gebouwnaam",
        number: '{number} typeteller',
        numberRoman: '{numberRoman} typeteller (Romeinse cijfers)',
        dispatch: '{dispatch} meldkamernaam',
        stationAlias: '{stationAlias} Gebouw-Alias',
        saveAll: ' Alles opslaan',
        exampleResult: 'verknocht: ID Test OUDENAAM VOERTUIGTYPE GEBOUWNAAM',
        statusWaiting: 'Wachten op invoer',
        statusError: '<b>Error tijdens generatie!</b> Als deze fout zich opnieuw voordoet, gelieve dit te melden. Gelieve de volgende informatie te verstrekken:',
        statusWorking: 'Genereer namen en vormen. Afhankelijk van het systeem en het aantal voertuigen kan dit enige tijd in beslag nemen.',
        statusSuccess: 'Namen en Forumlare succesvol gegenereerd!',
        nameAlreadyCorrect: 'Naam komt al overeen met het sjabloon',
        nameToLong: 'De naam is te lang voor de volgende voertuigen:',
        nameToLongOriginalName: 'Oorspronkelijke naam',
        nameToLongGeneratedName: 'Gegenereerde naam',
        nameToLongShortenedName: 'Nieuw/verkorte naam',
        startNum: 'Begin van de balie',
        startNumHelp: 'Hier kunt u een startwaarde voor de typeteller invoeren. Als je 0 als startwaarde instelt, krijgt het eerste voertuig van een type niet de nummering, dit is erg praktisch, als je maar één voertuig van een type op een horloge hebt, en je wilt het niet nummeren. Maar je kunt ook beginnen met de teller op 5 (om wat voor reden dan ook, maar het is mogelijk ;) )',
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
                0: "Brandweerpost",
                3: "Ambulance standplaats",
                5: "Politiebureau",
                6: "MMT Standplaats",
                9: "Politiehelikopter standplaats",
                11: "Politie hoofdbureau"
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
                51: 'HVH'
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
                        "label": I18n.t('lssm.renameFz.settings.names.vehicleTypes') + "&nbsp;" + I18n.t('lssm.renameFz.settings.show'),
                        "type": "button",
                        "custom_function_event": "click",
                        "custom_function": function () {
                            $('[id^=' + LSS_RENAMEFZ_STORAGE + '_renameFz_vehicleTypes-].lssm_setting_line').toggle();
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
                        "label": I18n.t('lssm.renameFz.settings.vehicleTypes.' + key) + ":&nbsp;",
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
                    "label": I18n.t('lssm.renameFz.settings.names.stations') + "&nbsp;" + I18n.t('lssm.renameFz.settings.show'),
                    "type": "button",
                    "custom_function_event": "click",
                    "custom_function": function () {
                        $('[id^=' + LSS_RENAMEFZ_STORAGE + '_renameFz_stations-].lssm_setting_line').toggle();
                    }
                }
            }
        });

        $.each(lssm.buildings, function (key, station) {
            if (I18n.t('lssm.renameFz.settings.validStationTypes')[station.building_type]) {
                let tmpObject = {
                    ['renameFz_stations-' + station.id]: {
                        "default": station.caption,
                        "ui": {
                            "label": station.caption + " (" + I18n.t('lssm.renameFz.settings.validStationTypes')[station.building_type] + "):&nbsp;",
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

    let vehiclesTypesByBuilding = {};
    let buildings = {};

    let set = {
        rename: false,
        options: {
            id: '',
            old: '',
            vehicleType: '',
            stationName: '',
            tagging: '',
            number: '',
            numberRoman: '',
            dispatch: '',
            stationAlias: ''
        },
        vehicles: {},
        str: {
            bsp: "{id} Test {old} {vehicleType} {stationName} {tagging} {stationAlias}-{numberRoman}",
            default: "{old}",
            str: ''
        }
    };
    let prefix = lssm.config.prefix + "_renameFzSettings";
    $('#tab_vehicle').on('DOMNodeInserted', 'script', createSettings);

    let executionFailed = false;

    function printError(err) {
        $("#" + prefix + "_status").html("Status: " + I18n.t('lssm.renameFz.statusError') + " <br><b>" + err.name + "</b><br><i>" + err.message + "</i><pre>" + err.stack + "</pre>");
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
            return vehiclesTypesByBuilding[vehicle.building][vehicle.type].indexOf(vehicleID) + parseInt($('#' + prefix + '_startNum').val());
        } catch (err) {
            printError(err)
        }
    }

    function rename() {
        try {
            let vehicles = $('#vehicle_table tbody tr');
            let vehiclesNum = vehicles.length;
            $(`#${prefix}_status`).html(`Status: ${I18n.t('lssm.renameFz.statusWorking')} (0/${vehiclesNum})`);
            indexVehicles();
            indexBuildings();
            $(`.${prefix}_name_correct`).remove();
            $(`#${prefix}_nameToLongDiv`).hide();
            let vars = set.str.str.match(/{.+?}/g);
            let usedOptions = [];
            let needType = false;
            let needTagging = false;
            let needStationAlias = false;
            let needNumber = false;
            let needNumberRoman = false;
            set.options.dispatch = $("h1").text();
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
            if (usedOptions.indexOf("number") !== -1) {
                needNumber = true;
            }
            if (usedOptions.indexOf("numberRoman") !== -1) {
                needNumber = true;
                needNumberRoman = true;
            }
            for (let i = 0; i < vehiclesNum; i++) {
                window.setTimeout(function() {
                    $(`#${prefix}_status`).html(`Status: ${I18n.t('lssm.renameFz.statusWorking')} (${i+1}/${vehiclesNum})`);
                    let vehicleRow = $(vehicles[i]);
                    let vehicleCaption = vehicleRow.find('[id^=vehicle_caption_]');
                    let vehicleID = vehicleCaption.attr("id").replace(/\D/g, "");
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
                        set.vehicles[vehicleID].tagging = settings[`renameFz_vehicleTypes-${vehicle.type}`];
                    }
                    if (needStationAlias) {
                        set.vehicles[vehicleID].stationAlias = settings[`renameFz_stations-${vehicle.building}`];
                    }
                    if (needNumber) {
                        set.vehicles[vehicleID].number = getVehicleNumberAtStation(vehicleID);
                    }
                    if (needNumberRoman) {
                        set.vehicles[vehicleID].numberRoman = arabicToRoman(set.vehicles[vehicleID].number);
                    }
                    set.vehicles[vehicleID].newName = set.str.str.replace(/{(.*?)}/g, (match, p1) => set.vehicles[vehicleID][p1]||match);
                    if (set.vehicles[vehicleID].newName === set.vehicles[vehicleID].old) {
                        vehicleCaption.append(`<span class="${prefix}_name_correct"><br>${I18n.t('lssm.renameFz.nameAlreadyCorrect')}</span>`);
                        $(`#vehicle_form_holder_${vehicleID}`).empty();
                        $(`#vehicle_form_holder_${vehicleID}`).hide();
                        if (i + 1 === vehiclesNum && executionFailed !== true) {
                            $(`#${prefix}_status`).html("Status: " + I18n.t('lssm.renameFz.statusSuccess'));
                        }
                    } else {
                        if (set.vehicles[vehicleID].newName.length > 40) {
                            $(`#${prefix}_nameToLongDiv`).show();
                            $(`#${prefix}_nameToLongTableBody`).append("<tr><td>" + set.vehicles[vehicleID].old + "</td><td>" + set.vehicles[vehicleID].newName + "</td><td>" + set.vehicles[vehicleID].newName.substr(0, 40) + "</td></tr>");
                        }
                        if (!$(`#vehicle_new_name_${vehicleID}`)[0]) {
                            $(`#vehicle_form_holder_${vehicleID}`).show();


                            $(`#vehicle_form_holder_${vehicleID}`).html(I18n.t("common.loading"));

                            $.ajax({
                                url: `/vehicles/${vehicleID}/editName`,
                                success: function (data) {
                                    $(`#vehicle_form_holder_${vehicleID}`).html(data);
                                    $(`#vehicle_new_name_${vehicleID}`).val(set.vehicles[vehicleID].newName.substr(0, 40));
                                    if (i + 1 === vehiclesNum && executionFailed !== true) {
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
                }, 100 * i);
            }
        } catch (e) {
            printError(e);
        }
    }

    function indexVehicles() {
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
        lssm.get_buildings(false, true);
        for (let building in lssm.buildings) {
            buildings[lssm.buildings[building].id] = lssm.buildings[building];
        }
    }

    function createSettings() {
        if ($('#' + prefix).length)
            return;
        let mainDiv = $('<div id="' + prefix + '"></div>');
        let html = '' + I18n.t('lssm.renameFz.example') + '<br>' + set.str.bsp + '<br> ' + I18n.t('lssm.renameFz.exampleResult') + '</div><div id="' + prefix + '_buttons">';
        for (let i in set.options)
            html += '<a href="#" class="btn btn-default btn-xs" data-str="{' + i + '}">' + I18n.t('lssm.renameFz.' + i) + '</a>';
        html += '</div><div><input class="form-control" id="' + prefix + '_string" type="text" value=""\>&nbsp;' + I18n.t('lssm.renameFz.startNum') + ' <span class="glyphicon glyphicon-question-sign helpButton" aria-hidden="true" helpBox="startNum"></span><div class="alert alert-info" id="startNum" style="display: none; position: absolute; z-index=9999">' + I18n.t('lssm.renameFz.startNumHelp') + '</div> :<input id="' + prefix + '_startNum" type="number" value="1" min="0"\></div><div><a href="#" class="btn btn-default btn-xs disabled" id="' + prefix + '_rename">' + I18n.t('lssm.renameFz.rename') + '</a>';
        html += ' <span id="' + prefix + '_status">Status: ' + I18n.t('lssm.renameFz.statusWaiting') + '</span></div>';
        html += '<div class="alert fade in alert-danger" id="' + prefix + '_nameToLongDiv"><button class="close" type="button" id="' + prefix + '_HideNameToLongDiv">×</button><b>' + I18n.t('lssm.renameFz.nameToLong') + '</b><table class="table table-striped" role="grid" id="' + prefix + '_nameToLongTable"><thead><tr><th>' + I18n.t('lssm.renameFz.nameToLongOriginalName') + '</th><th>' + I18n.t('lssm.renameFz.nameToLongGeneratedName') + '</th><th>' + I18n.t('lssm.renameFz.nameToLongShortenedName') + '</th></tr></thead><tbody id="' + prefix + '_nameToLongTableBody"></tbody></table></div>';
        html += '<input type="button" class="btn btn-success" id="' + prefix + '_saveAll" value="' + I18n.t('lssm.renameFz.saveAll') + '" />';
        mainDiv.append(html);

        $('#vehicle_table').parent().prepend(mainDiv);

        $('.helpButton').on('mouseenter', function() {
            $('#' + $(this).attr('helpBox')).show();
        });
        $('.helpButton').on('mouseleave', function() {
            $('#' + $(this).attr('helpBox')).hide();
        });

        $("#" + prefix + "_HideNameToLongDiv").click(function () {
            $("#" + prefix + "_nameToLongDiv").hide();
            $("#" + prefix + "_nameToLongTableBody").html("");
        });
        $("#" + prefix + "_nameToLongDiv").hide();
        $('#' + prefix + '_buttons').click(function (e) {
            let input = document.getElementById(prefix + '_string'), start = input.selectionStart,
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
            set.str.str = e.target.value.trim();
            set.str.str.length > 0 ? $(`#${prefix}_rename`).removeClass("disabled") : $(`#${prefix}_rename`).addClass("disabled");
        }

        $('#' + prefix + '_string').change(changeInput);
        $('#' + prefix + '_string').on("keyup", changeInput);
        $('#' + prefix + '_rename').click(rename);
        $('#' + prefix + '_saveAll').click(function () {
            for (let i = 0; i < $(".vehicle_form input.btn.btn-success").length; i++) {
                setTimeout(function() {
                    $($(".vehicle_form input.btn.btn-success")[i]).click();
                }, 100 * i);
            }
            $(`.${prefix}_name_correct`).remove();
        });
    }

})(I18n, jQuery);
