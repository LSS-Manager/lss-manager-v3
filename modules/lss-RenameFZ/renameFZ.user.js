(function (I18n, $) {

    var LSS_RENAMEFZ_STORAGE = "LSS_RENAMEFZ_STORAGE";

    function setSettings() {

        I18n.translations.de.lssm.renameFzDefaults = {
            name: 'Fahrzeuge Umbenennen',
            settingsName: 'Fahrzeuge Umbenennen - Einstellungen',
            domain: 'leitstellenspiel.de',
            show: "Ein-/Ausblenden",
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
              77: 'AB-Gefahrgut'
            }
        }
        I18n.translations.en.lssm.renameFzDefaults = {
            name: 'Rename vehicles',
            settingsName: 'rename vehicles - settings',
            domain: 'missionchief.com',
            show: "show/hide",
            types: {
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
              16: 'SWAT',
              17: 'ARFF Crash Tender',
              18: 'Rescue Engine',
              19: 'K-9 Unit',
              20: 'Mass Casualty Unit'
            }
        }
        I18n.translations.en.lssm.renameFzDefaults = {
            name: 'Voertuigen herbenoemen',
            settingsName: 'Voertuigen herbenoemen - Instellingen',
            domain: 'meldkamespel.com',
            show: "verbergen",
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
              13: 'TST-NBB 6/7',
              14: 'TST-NBB 4',
              15: 'Ambulance',
              16: 'TS 6/7',
              17: 'HW',
              18: 'DA-HOvD-B',
              19: 'DA',
              20: 'DB',
              21: 'DA Noodhulp',
              22: 'Lifeliner',
              23: 'AGS',
              24: 'DB Noodhulp',
              25: 'HA',
              26: 'ABH',
              27: 'Politiehelikopter',
              28: 'WTH',
              29: 'Zorgambulance',
              30: 'CO',
              31: 'COH',
              32: 'WO',
              33: 'TW',
              34: 'OVD-P',
              35: 'WOA',
              36: 'MMT-Auto',
              37: 'OvD-G',
              38: 'ME Commandovoertuig',
              39: 'ME Flexbus',
              40: 'CT (8x8)',
              41: 'CT (6x6)',
              42: 'CT (4x4)',
              43: 'AFO/OSC'
            }
        }

        var managedSettings = {
          "id": LSS_RENAMEFZ_STORAGE,
          "title": I18n.t('lssm.renameFzDefaults.name'),
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

        var DEFAULT_SHORTINGS_DE = {
          0: '49',
          1: '49',
          2: '30',
          3: '11',
          4: '52',
          5: '56',
          6: '42',
          7: '49',
          8: '42',
          9: '45',
          10: '55',
          11: '66',
          12: '94',
          13: '61',
          14: '62',
          15: '63',
          16: '66',
          17: '22',
          18: '25',
          19: '21',
          20: '21',
          21: '21',
          22: '23',
          23: '26',
          24: '26',
          25: '26',
          26: '23',
          27: '54',
          28: '83',
          29: '82',
          30: '44',
          31: '84',
          32: 'FuStW',
          33: '59',
          34: '12',
          35: 'leBefKw',
          36: '19',
          37: '48',
          38: '85',
          39: 'GKW',
          40: 'MTW-TZ',
          41: 'MzKW',
          42: 'LKW K 9',
          43: 'BRmG R',
          44: 'Anh DLE',
          45: 'MLW 5',
          46: '65',
          47: '65-52',
          48: '65-56',
          49: '65-55',
          50: 'GruKw',
          51: 'FüKw',
          52: 'GefKw',
          53: '59',
          54: '65-59',
          55: '04',
          56: '03',
          57: '71',
          58: '85-B',
          59: '11',
          60: '47',
          61: 'Polizeihubschrauber',
          62: '65-61',
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
          74: '81',
          75: 'FLF',
          76: 'Rettungstreppe',
          77: '65-54'
        }
        var DEFAULT_SHORTINGS_EN = {
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
          16: 'SWAT',
          17: 'ARFF Crash Tender',
          18: 'Rescue Engine',
          19: 'K-9 Unit',
          20: 'Mass Casualty Unit'
        }
        var DEFAULT_SHORTINGS_NL = {
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
          13: 'TST-NBB 6/7',
          14: 'TST-NBB 4',
          15: 'Ambulance',
          16: 'TS 6/7',
          17: 'HW',
          18: 'DA-HOvD-B',
          19: 'DA',
          20: 'DB',
          21: 'DA Noodhulp',
          22: 'Lifeliner',
          23: 'AGS',
          24: 'DB Noodhulp',
          25: 'HA',
          26: 'ABH',
          27: 'Politiehelikopter',
          28: 'WTH',
          29: 'Zorgambulance',
          30: 'CO',
          31: 'COH',
          32: 'WO',
          33: 'TW',
          34: 'OVD-P',
          35: 'WOA',
          36: 'MMT-Auto',
          37: 'OvD-G',
          38: 'ME Commandovoertuig',
          39: 'ME Flexbus',
          40: 'CT (8x8)',
          41: 'CT (6x6)',
          42: 'CT (4x4)',
          43: 'AFO/OSC'
        }

        I18n.translations.de.lssm.renameFz = DEFAULT_SHORTINGS_DE;
        I18n.translations.en.lssm.renameFz = DEFAULT_SHORTINGS_EN;
        I18n.translations.en.lssm.renameFz = DEFAULT_SHORTINGS_NL;


        if (I18n.locale === 'de')
          defaultShortings = DEFAULT_SHORTINGS_DE;
        else if (I18n.locale === 'en')
          defaultShortings = DEFAULT_SHORTINGS_EN;
        else if (I18n.locale === 'nl')
          defaultShortings = DEFAULT_SHORTINGS_NL;
        else
          defaultShortings = DEFAULT_SHORTINGS_DE;

        $.each(defaultShortings, function(key, val) {
          var tmpObject = {
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
        exampleResult: 'ergibt: FZId Test ALTERNAME FAHRZEUGTYPE WACHE'
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
        exampleResult: 'results: ID Test OLDNAME VEHICLETYPE BUILDING'
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
    exampleResult: 'verknocht: ID Test OUDENAAM VOERTUIGTYPE GEBOUWNAAM'
    };
    var set = {
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
    $('#tab_vehicle').on('submit', '.vehicle_form', function (e) {

        var post_data = $(this).serialize();
        var vehicle_id = $(this).attr("vehicle_id");
        var href = $(this).attr("action");

        e.preventDefault();
        $.ajax({
            url: href,
            type: 'post',
            data: post_data,
            success: function () {
                tellParent('buildingLoadContent("/buildings");');
                $("#vehicle_form_holder_" + vehicle_id).hide();
                var newName = $("#vehicle_new_name_" + vehicle_id).val();
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
        var roman = new Array( "M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I");
        var arabic = new Array(1000, 900, 500,  400, 100,   90,  50,  40,   10,    9,   5,    4,   1);
        var arabicNumber = parseInt(arabicNumber);
        var romanNumber = "";

        if (isNaN(arabicNumber) || (arabicNumber <= 0)) { return "Fehler"; }

        for (var Nr = 0; Nr < arabic.length; Nr++)
            while (arabicNumber >= arabic[Nr])
            {
                romanNumber += roman[Nr];
                arabicNumber -= arabic[Nr];
            }

         return romanNumber;
    }
    function getVehiclesSorted() {
        vehicleIDs = [];
        buildingIDs = [];
        var vehicles = new Array();
        for(i=1;i<$("tr").length;i++) {
          vehicleIDs[i-1] = $("tr")[i].children[1].children[0].children[0].href.replace("https://www.leitstellenspiel.de/vehicles/", "");
          buildingIDs[i-1] = $("tr")[i].children[3].children[0].href.replace("https://www.leitstellenspiel.de/buildings/", "");
          vehicleType = $("tr")[i].children[0].children[0].attributes["vehicle_type_id"].value;
          if (!vehicles["Building " + buildingIDs[i-1]]) {
              vehicles["Building " + buildingIDs[i-1]] = new Array();
          }
          if (!vehicles["Building " + buildingIDs[i-1]]["Type " + vehicleType]) {
              vehicles["Building " + buildingIDs[i-1]]["Type " + vehicleType] = new Array();
          }
          vehicles["Building " + buildingIDs[i-1]]["Type " + vehicleType].push(vehicleIDs[i-1]);
        }
        return vehicles
    }
    function getVehicleNumberAtStation(vehicleID) {
        var number = 0;
        if (typeof vehicles === 'undefined') {
            vehicles = getVehiclesSorted();
        }
        for(i=1;i<$("tr").length;i++) {
            if (parseInt($("tr")[i].children[1].children[0].children[0].href.replace("https://www.leitstellenspiel.de/vehicles/", "")) == parseInt(vehicleID)) {
                buildingID = parseInt($("tr")[i].children[3].children[0].href.replace("https://www.leitstellenspiel.de/buildings/", ""));
                vehicleType = $("tr")[i].children[0].children[0].attributes["vehicle_type_id"].value;
            }
        }
        var sameTypeOnStation = vehicles["Building " + buildingID]["Type " + vehicleType];
        sameTypeOnStation.forEach(function (item, index) {
            if (parseInt(item) == parseInt(vehicleID)) {
                return number = parseInt(index) + 1;
            }
        });
        return number;
    }
    function rename() {
        if (!set.rename) {
            set.rename = true;
            $.ajax({url: '/vehicles/'+$('.vehicle_edit_button:first').attr('vehicle_id')+'/editName', success: function (d) {
                    token = d.match(/authenticity_token.* value="(.*)"/)[1];
                    $('.vehicle_edit_button').each(showForms);
                }});
        } else {
            $('.vehicle_edit_button').each(showForms);
        }
    }
    function creatForm(vehicleId, value) {
        var formHTML = '<form accept-charset="UTF-8" action="/vehicles/' + vehicleId + '" class="simple_form form-horizontal vehicle_form" enctype="multipart/form-data" id="vehicle_form_' + vehicleId + '" method="post" novalidate="novalidate" vehicle_id="' + vehicleId + '"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="_method" type="hidden" value="put"><input name="authenticity_token" type="hidden" value="' + token + '"></div><div class="form-group string required vehicle_caption"><div class="col-sm-9"><input class="string required form-control" id="vehicle_new_name_' + vehicleId + '" maxlength="40" minlength="2" name="vehicle[caption]" size="50" type="text" value="' + value + '"></div></div><input class="btn btn btn-success" name="commit" type="submit" value="Speichern"></form>';
        $('#vehicle_form_holder_' + vehicleId).html(formHTML).show();
    }
    function replaceString(type, id) {
        var str = set.str.str !== '' ? set.str.str : set.str.default;
        str = str.replace('{tagging}', getSetting("renameFz-" + type));
        for (var i in set.option) {
            str = str.replace('{' + i + '}', set.option[i]);
        }
        return str;
    }
    function setOptionsForVehicle(e) {
        var tr = e.closest('tr');
        var id = e.attr('vehicle_id');
        set.option.id = id;
        set.option.old = $('#vehicle_link_' + id).text().trim();
        set.option.stationName = tr.find('td').eq(3).text().trim();
        var vehicleType = tr.find('.vehicle_image_reload:first').attr('vehicle_type_id');
        if (lssm.carsById[vehicleType]) {
            set.option.vehicleType = lssm.carsById[vehicleType][0];
        }
        set.option.dispatch = $("h1")[0].innerHTML;
        set.option.number = getVehicleNumberAtStation(set.option.id);
        set.option.numberRoman = arabicToRoman(getVehicleNumberAtStation(set.option.id));
        return {'id': id, 'vehicleType': vehicleType};
    }
    function showForms() {
        $(this).hide(); //
        var data = setOptionsForVehicle($(this));
        if (replaceString(data.vehicleType, data.id).length > 40) {
            alert("Für das Fahrzeug mit dem (neuen) Namen '" + replaceString(data.vehicleType, data.id) + "' ist der Name zu lang. Es kann nur der Name '" + replaceString(data.vehicleType, data.id).substr(0, 40) + "' übernommen werden");
            creatForm(data.id, replaceString(data.vehicleType, data.id).substr(0, 40));
        } else {
            creatForm(data.id, replaceString(data.vehicleType, data.id));
        }
    }
    function createSettings() {
        if ($('#' + prefix).length)
            return;
        var mainDiv = $('<div id="' + prefix + '"></div>');
        var html = '' + I18n.t('lssm.renameFZ.example') + '<br>' + set.str.bsp + '<br> ' + I18n.t('lssm.renameFZ.exampleResult') + '</div><div id="' + prefix + '_buttons">';
        for (var i in set.option)
            html += '<a href="#" class="btn btn-default btn-xs" data-str="{' + i + '}">' + I18n.t('lssm.renameFZ.'+i) + '</a>';
        html += '</div><div><input id="' + prefix + '_string" type="text" value=""\></div><div><a href="#" class="btn btn-default btn-xs" id="' + prefix + '_rename">' + I18n.t('lssm.renameFZ.rename') + '</a></div>';
        html += '<input type="button" class="btn btn-success" id="' + prefix + '_saveAll" value="' + I18n.t('lssm.renameFZ.saveAll') + '" />';
        mainDiv.append(html);
        $('#vehicle_table').parent().prepend(mainDiv);
        $('#' + prefix + '_buttons').click(function (e) {
            var input = document.getElementById(prefix + '_string'), start = input.selectionStart, end = input.selectionEnd;
            input.value = input.value.substr(0, start) + $(e.target).data('str') + input.value.substr(end);
            var pos = start + $(e.target).data('str').length;
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
        $('#' + prefix + '_saveAll').click(function () {
          for(i=0;i<$("input.btn.btn-success").length;i++){
            $("input.btn.btn-success")[i].click();
          }
        });
    }

})(I18n, jQuery);
