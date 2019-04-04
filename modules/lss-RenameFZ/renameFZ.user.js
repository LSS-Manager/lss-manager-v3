(function (I18n, $) {

    let LSS_RENAMEFZ_STORAGE = "LSS_RENAMEFZ_STORAGE";

    function setSettings() {

        I18n.translations.de.lssm.renameFzDefaults = {
            name: 'Fahrzeuge Umbenennen',
            settingsName: 'Fahrzeuge Umbenennen - Einstellungen',
            domain: 'leitstellenspiel.de',
            show: 'Ein-/Ausblenden',
            description: 'Da die folgenden Textfelder vielleicht verwirrend erscheinen: Man kann hier für jeden Fahrzeugtyp eine alternative Bezeichnung eingeben und diese dann einfügen lassen, in der Leitstelle.',
            types: {
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
        I18n.translations.en.lssm.renameFzDefaults = {
            name: 'Rename vehicles',
            settingsName: 'rename vehicles - settings',
            domain: 'missionchief.com',
            show: 'Show/Hide',
            description: 'Here you can set alternative names for each vehicle Type. You can use them when renaming you vehicles via dispatch center.',
            types: {
              0: 'Type 1 fire engine',
              1: 'Type 2 fire engine',
              2: 'Platform truck',
              3: 'Bataillon chief unit',
              4: 'Heavy rescue vehicle',
              5: 'ALS Ambulance',
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
        I18n.translations.nl.lssm.renameFzDefaults = {
            name: 'Voertuigen herbenoemen',
            settingsName: 'Voertuigen herbenoemen - Instellingen',
            domain: 'meldkamespel.com',
            show: 'Verberg/Toon',
            description: 'Hier kunt u alternatieve namen instellen voor elk voertuigtype. U kunt ze gebruiken bij het hernoemen van uw voertuigen via dispatch center.',
            types: {
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

        let managedSettings = {
          "id": LSS_RENAMEFZ_STORAGE,
          "title": I18n.t('lssm.renameFzDefaults.name'),
          "info_text": I18n.t('lssm.renameFzDefaults.description'),
          "settings": {
            "renameFzShowHideButton": {
              "default": "",
              "ui": {
                "label": I18n.t('lssm.renameFzDefaults.show'),
                "type": "button",
                "custom_function_event": "click",
                "custom_function": function() {
                  $('[id^=' + LSS_RENAMEFZ_STORAGE + '_renameFz-]').toggle();
                }
              }
            }
          }
        };

        let DEFAULT_SHORTINGS_DE = {
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
        let DEFAULT_SHORTINGS_EN = {
          0: 'Type 1 fire engine',
          1: 'Type 2 fire engine',
          2: 'Platform truck',
          3: 'Bataillon chief unit',
          4: 'Heavy rescue vehicle',
          5: 'ALS Ambulance',
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
        let DEFAULT_SHORTINGS_NL = {
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

        I18n.translations.de.lssm.renameFz = DEFAULT_SHORTINGS_DE;
        I18n.translations.en.lssm.renameFz = DEFAULT_SHORTINGS_EN;
        I18n.translations.nl.lssm.renameFz = DEFAULT_SHORTINGS_NL;


        if (I18n.locale === 'de')
          defaultShortings = DEFAULT_SHORTINGS_DE;
        else if (I18n.locale === 'en')
          defaultShortings = DEFAULT_SHORTINGS_EN;
        else if (I18n.locale === 'nl')
          defaultShortings = DEFAULT_SHORTINGS_NL;
        else
          defaultShortings = DEFAULT_SHORTINGS_DE;

        $.each(defaultShortings, function(key, val) {
            let tmpObject = {
            ['renameFz-' + key]: {
              "default": val,
              "ui": {
                "label": I18n.t('lssm.renameFzDefaults.types.' + key) + ":&nbsp;",
                "type": "text",
                "description": ""
              }
            }
          };

          $.extend(managedSettings.settings, tmpObject);

        });

        lssm.managedSettings.register(managedSettings);

    };

    setSettings();

    $('#tab_vehicle').on('DOMNodeInserted', 'script', createSettings);
    I18n.translations.de['lssm']['renameFZ'] = {
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
        saveAll: 'Alle speichern',
        exampleResult: 'ergibt: FZId Test ALTERNAME FAHRZEUGTYPE WACHE',
        statusWaiting: 'Warte auf Eingabe',
        statusError: '<b>Fehler bei der Generierung!</b> Sollte dieser Fehler ein weiteres mal auftreten, bitte melde ihn. Bitte teile dann folgendes mit:',
        statusWorking: 'Generiere Namen und Formulare. Dies kann, abhängig von System und Anzahl der Fahrzeuge, eine gewisse Zeit in Anspruch nehmen.',
        statusSuccess: 'Namen und Forumlare erfolgreich generiert!',
        nameAlreadyCorrect: 'Name entspricht bereits der Vorlage!',
        saveAllWarning: 'Achtung! Bei vielen Fahrzeugen kann es hier zu einem Absturz der Seite kommen. Moderne Browser bringen hier eine Meldung. Nach dem Neuladen der Seite sind jedoch alle Fahrzeuge umbenannt!',
        nameToLong: 'Für folgende Fahrzeuge ist der Name zu lang:',
        nameToLongOriginalName: 'Ursprünglicher Name',
        nameToLongGeneratedName: 'Generierter Name',
        nameToLongShortenedName: 'Neuer/gekürzter Name'
    };
    I18n.translations.en['lssm']['renameFZ'] = {
        example: "This is an example",
        rename: "rename",
        id: "{id} Id of Vehicle",
        old: "{old} Current name",
        vehicleType: "{vehicleType} Type of Vehicle",
        stationName: "{stationName} Name of building",
        number: '{number} Type-counter',
        numberRoman: '{numberRoman} Type-counter (Roman numerals)',
        dispatch: '{dispatch} Name of Dispatchcenter',
        saveAll: 'save All',
        exampleResult: 'results: ID Test OLDNAME VEHICLETYPE BUILDING',
        statusWaiting: 'Wait for input',
        statusError: '<b>Error during generation!</b> If this error occurs again, please report it. Please provide the following information:',
        statusWorking: 'Generate names and forms. This can take a certain amount of time, depending on the system and number of vehicles.',
        statusSuccess: 'Names and Forumlare successfully generated!',
        nameAlreadyCorrect: 'Name already corresponds to the template!',
        saveAllWarning: 'Attention! Many vehicles may crash the site. Modern browsers report here. After reloading the page, however, all vehicles are renamed!',
        nameToLong: 'The name is too long for the following vehicles:',
        nameToLongOriginalName: 'Original Name',
        nameToLongGeneratedName: 'Generated Name',
        nameToLongShortenedName: 'New/shortened name'
    };
	I18n.translations.nl['lssm']['renameFZ'] = {
        example: "Dit is een voorbeeld",
		rename: "Naam aanpassen",

		id: "{id} Voertuignaam ",
		old: "{old} Oude naam",
		vehicleType: "{vehicleType} Voertuigtype",
		stationName: "{stationName} Gebouwnaam",
    number: '{number} typeteller',
    numberRoman: '{numberRoman} typeteller (Romeinse cijfers)',
    dispatch: '{dispatch} meldkamernaam',
    saveAll: ' Alles opslaan',
    exampleResult: 'verknocht: ID Test OUDENAAM VOERTUIGTYPE GEBOUWNAAM',
    statusWaiting: 'Wachten op invoer',
    statusError: '<b>Error tijdens generatie!</b> Als deze fout zich opnieuw voordoet, gelieve dit te melden. Gelieve de volgende informatie te verstrekken:',
    statusWorking: 'Genereer namen en vormen. Afhankelijk van het systeem en het aantal voertuigen kan dit enige tijd in beslag nemen.',
    statusSuccess: 'Namen en Forumlare succesvol gegenereerd!',
    nameAlreadyCorrect: 'Naam komt al overeen met het sjabloon',
    saveAllWarning: 'Opgelet! Veel voertuigen kunnen op de site neerstorten. Moderne browsers rapporteren hier. Na het herladen van de pagina worden alle voertuigen echter hernoemd!',
    nameToLong: 'De naam is te lang voor de volgende voertuigen:',
    nameToLongOriginalName: 'Oorspronkelijke naam',
    nameToLongGeneratedName: 'Gegenereerde naam',
    nameToLongShortenedName: 'Nieuw/verkorte naam'
    };

    let set = {
        rename: false,
        option: {
            id: '',
            old: '',
            vehicleType: '',
            stationName: '',
            tagging: '',
            number: '',
            numberRoman: '',
            dispatch: '',
        },
        str: {
            bsp: "{id} Test {old} {vehicleType} {stationName}",
            default: "{old}",
            str: ''
        }
    }, token, prefix = "renameFzSettings";
    executionFailed = false;
    if (I18n.locale === 'de') {
        replaceGameVehicles = 'https://www.leitstellenspiel.de/vehicles/';
        replaceGameBuildings = 'https://www.leitstellenspiel.de/buildings/';
    } else if (I18n.locale === 'en') {
        replaceGameVehicles = 'https://www.missionchief.com/vehicles/';
        replaceGameBuildings = 'https://www.missionchief.com/buildings/';
    } else if (I18n.locale === 'nl') {
        replaceGameVehicles = 'https://www.meldkamerspel.com/vehicles/';
        replaceGameBuildings = 'https://www.meldkamerspel.com/buildings/';
    }

    $('#tab_vehicle').on('submit', '.vehicle_form', function (e) {

        let post_data = $(this).serialize();
        let vehicle_id = $(this).attr("vehicle_id");
        let href = $(this).attr("action");

        e.preventDefault();
        $.ajax({
            url: href,
            type: 'post',
            data: post_data,
            success: function () {
                tellParent('buildingLoadContent("/buildings");');
                $("#vehicle_form_holder_" + vehicle_id).hide();
                let newName = $("#vehicle_new_name_" + vehicle_id).val();
                $("#vehicle_link_" + vehicle_id).html(newName).next().show();

                $(this).html("saved");
            },
            error: function () {

                $(this).html("error");
            }
        });


    });
    function getSetting(setting) {
      return lssm.managedSettings.getSetting(LSS_RENAMEFZ_STORAGE, setting);
    }
    function arabicToRoman(arabicNumber) {
        try {
            let roman = new Array( "M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I");
            let arabic = new Array(1000, 900, 500,  400, 100,   90,  50,  40,   10,    9,   5,    4,   1);
            let arabicNumber = parseInt(arabicNumber);
            let romanNumber = "";

            if (isNaN(arabicNumber) || (arabicNumber <= 0)) { return "0"; }

            for (let Nr = 0; Nr < arabic.length; Nr++)
                while (arabicNumber >= arabic[Nr])
                {
                    romanNumber += roman[Nr];
                    arabicNumber -= arabic[Nr];
                }

             return romanNumber;
         } catch(err) {
             $("#" + prefix + "_status").html("Status: " + I18n.t('lssm.renameFZ.statusError') + " <i>" + err.stack + "</i>");
             executionFailed = true;
         }
    }
    function getVehiclesSorted() {
        try {
            vehicleIDs = [];
            buildingIDs = [];
            let vehicles = new Array();
            for(i=0;i<$("#vehicle_table tbody tr").length;i++) {
                vehicleIDs[i-1] = $("#vehicle_table tbody tr")[i].children[1].children[0].children[0].href.replace(replaceGameVehicles, "");
                buildingIDs[i-1] = $("#vehicle_table tbody tr")[i].children[3].children[0].href.replace(replaceGameBuildings, "");
                vehicleType = $("#vehicle_table tbody tr")[i].children[0].children[0].attributes["vehicle_type_id"].value;
                if (!vehicles["Building " + buildingIDs[i-1]]) {
                    vehicles["Building " + buildingIDs[i-1]] = new Array();
                }
                if (!vehicles["Building " + buildingIDs[i-1]]["Type " + vehicleType]) {
                    vehicles["Building " + buildingIDs[i-1]]["Type " + vehicleType] = new Array();
                }
                vehicles["Building " + buildingIDs[i-1]]["Type " + vehicleType].push(vehicleIDs[i-1]);
                vehicles["Building " + buildingIDs[i-1]]["Type " + vehicleType].sort(function(a, b){return a-b});
            }
            return vehicles
        } catch(err) {
            $("#" + prefix + "_status").html("Status: " + I18n.t('lssm.renameFZ.statusError') + " <i>" + err.stack + "</i>");
            executionFailed = true;
        }
    }
    function getVehicleNumberAtStation(vehicleID) {
        try {
            let number = 0;
            if (typeof vehicles === 'undefined') {
                vehicles = getVehiclesSorted();
            }
            for(i=0;i<$("#vehicle_table tbody tr").length;i++) {
                if (parseInt($("#vehicle_table tbody tr")[i].children[1].children[0].children[0].href.replace(replaceGameVehicles, "")) == parseInt(vehicleID)) {
                    buildingID = parseInt($("#vehicle_table tbody tr")[i].children[3].children[0].href.replace(replaceGameBuildings, ""));
                    vehicleType = $("#vehicle_table tbody tr")[i].children[0].children[0].attributes["vehicle_type_id"].value;
                }
            }
            let sameTypeOnStation = vehicles["Building " + buildingID]["Type " + vehicleType];
            sameTypeOnStation.forEach(function (item, index) {
                if (parseInt(item) == parseInt(vehicleID)) {
                    return number = parseInt(index) + 1;
                }
            });
            return number;
        } catch(err) {
            $("#" + prefix + "_status").html("Status: " + I18n.t('lssm.renameFZ.statusError') + " <i>" + err.stack + "</i>");
            executionFailed = true;
        }
    }
    function rename() {
        try {
            $("#" + prefix + "_HideNameToLongDiv").click();
            if (!set.rename) {
                set.rename = true;
                $("#" + prefix + "_status").html("Status: " + I18n.t('lssm.renameFZ.statusWorking'));
                $.ajax({url: '/vehicles/'+$('.vehicle_edit_button:first').attr('vehicle_id')+'/editName', success: function (d) {
                        token = d.match(/authenticity_token.* value="(.*)"/)[1];
                            $('.vehicle_edit_button').each(showForms);
                    }}).done(function () {
                        if (executionFailed !== true) {
                            $("#" + prefix + "_status").html("Status: " + I18n.t('lssm.renameFZ.statusSuccess'));
                        }
                    });
            } else {
                $('.vehicle_edit_button').each(showForms);
            }
          } catch(err) {
              $("#" + prefix + "_status").html("Status: " + I18n.t('lssm.renameFZ.statusError') + " <i>" + err.stack + "</i>");
              executionFailed = true;
          }
    }
    function creatForm(vehicleId, value, oldName) {
        try {
            $("#vehicle_link_" + vehicleId).parent()[0].innerHTML = $("#vehicle_link_" + vehicleId).parent()[0].innerHTML.replace(I18n.t('lssm.renameFZ.nameAlreadyCorrect'), "");
            if (oldName != value) {
                let formHTML = '<form accept-charset="UTF-8" action="/vehicles/' + vehicleId + '" class="simple_form form-horizontal vehicle_form" enctype="multipart/form-data" id="vehicle_form_' + vehicleId + '" method="post" novalidate="novalidate" vehicle_id="' + vehicleId + '"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="_method" type="hidden" value="put"><input name="authenticity_token" type="hidden" value="' + token + '"></div><div class="form-group string required vehicle_caption"><div class="col-sm-9"><input class="string required form-control" id="vehicle_new_name_' + vehicleId + '" maxlength="40" minlength="2" name="vehicle[caption]" size="50" type="text" value="' + value + '"></div></div><input class="btn btn btn-success" name="commit" type="submit" value="Speichern"></form>';
                $('#vehicle_form_holder_' + vehicleId).html(formHTML).show();
            } else {
                $("#vehicle_form_" + vehicleId).remove()
                $("#vehicle_link_" + vehicleId).parent()[0].append(I18n.t('lssm.renameFZ.nameAlreadyCorrect'));
            }
          } catch(err) {
              $("#" + prefix + "_status").html("Status: " + I18n.t('lssm.renameFZ.statusError') + " <i>" + err.stack + "</i>");
              executionFailed = true;
          }
    }
    function replaceString(type, id) {
        let str = set.str.str !== '' ? set.str.str : set.str.default;
        str = str.replace('{tagging}', getSetting("renameFz-" + type));
        for (let i in set.option) {
            str = str.replace('{' + i + '}', set.option[i]);
        }
        return str;
    }
    function setOptionsForVehicle(e) {
        let tr = e.closest('tr');
        let id = e.attr('vehicle_id');
        set.option.id = id;
        set.option.old = $('#vehicle_link_' + id).text().trim();
        set.option.stationName = tr.find('td').eq(3).text().trim();
        let vehicleType = tr.find('.vehicle_image_reload:first').attr('vehicle_type_id');
        if (lssm.carsById[vehicleType]) {
            set.option.vehicleType = lssm.carsById[vehicleType][0];
        }
        set.option.dispatch = $("h1")[0].innerHTML;
        set.option.number = getVehicleNumberAtStation(set.option.id);
        set.option.numberRoman = arabicToRoman(getVehicleNumberAtStation(set.option.id));
        return {'id': id, 'vehicleType': vehicleType, 'oldName': set.option.old};
    }
    function showForms() {
        let data = setOptionsForVehicle($(this));
        if (data.oldName != replaceString(data.vehicleType, data.id).substr(0, 40)) {
            $(this).hide();
        }
        if (replaceString(data.vehicleType, data.id).length > 40) {
            $("#" + prefix + "_nameToLongDiv").show();
            $("#" + prefix + "_nameToLongTableBody").append("<tr><td>" + data.oldName + "</td><td>" + replaceString(data.vehicleType, data.id) + "</td><td>" + replaceString(data.vehicleType, data.id).substr(0, 40) + "</td></tr>");
            creatForm(data.id, replaceString(data.vehicleType, data.id).substr(0, 40), data.oldName);
        } else {
            creatForm(data.id, replaceString(data.vehicleType, data.id), data.oldName);
        }
    }
    function createSettings() {
        if ($('#' + prefix).length)
            return;
        let mainDiv = $('<div id="' + prefix + '"></div>');
        let html = '' + I18n.t('lssm.renameFZ.example') + '<br>' + set.str.bsp + '<br> ' + I18n.t('lssm.renameFZ.exampleResult') + '</div><div id="' + prefix + '_buttons">';
        for (let i in set.option)
            html += '<a href="#" class="btn btn-default btn-xs" data-str="{' + i + '}">' + I18n.t('lssm.renameFZ.'+i) + '</a>';
        html += '</div><div><input id="' + prefix + '_string" type="text" value=""\></div><div><a href="#" class="btn btn-default btn-xs" id="' + prefix + '_rename">' + I18n.t('lssm.renameFZ.rename') + '</a>';
        html += ' <span id="' + prefix + '_status">Status: ' + I18n.t('lssm.renameFZ.statusWaiting') + '</span></div>';
        html += '<div class="alert fade in alert-danger" id="' + prefix + '_nameToLongDiv"><button class="close" type="button" id="' + prefix + '_HideNameToLongDiv">×</button><b>' + I18n.t('lssm.renameFZ.nameToLong') + '</b><table class="table table-striped" role="grid" id="' + prefix + '_nameToLongTable"><thead><tr><th>' + I18n.t('lssm.renameFZ.nameToLongOriginalName') + '</th><th>' + I18n.t('lssm.renameFZ.nameToLongGeneratedName') + '</th><th>' + I18n.t('lssm.renameFZ.nameToLongShortenedName') + '</th></tr></thead><tbody id="' + prefix + '_nameToLongTableBody"></tbody></table></div>';
        html += '<input type="button" class="btn btn-success" id="' + prefix + '_saveAll" value="' + I18n.t('lssm.renameFZ.saveAll') + '" />';
        mainDiv.append(html);

        $('#vehicle_table').parent().prepend(mainDiv);
        $("#" + prefix + "_HideNameToLongDiv").click(function() {
            $("#" + prefix + "_nameToLongDiv").hide();
            $("#" + prefix + "_nameToLongTableBody").html("");
        });
        $("#" + prefix + "_nameToLongDiv").hide();
        $('#' + prefix + '_buttons').click(function (e) {
            let input = document.getElementById(prefix + '_string'), start = input.selectionStart, end = input.selectionEnd;
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
        }
        $('#' + prefix + '_string').change(changeInput);
        $('#' + prefix + '_rename').click(rename);
        $("#" + prefix + "_saveAll").click(function(){alert(I18n.t("lssm.renameFZ.saveAllWarning")),$(".vehicle_form input.btn.btn-success").each(function(){let n=$(this);window.setTimeout(function(){n.click()},100)})});
    };
})(I18n, jQuery);
