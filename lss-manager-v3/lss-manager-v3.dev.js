// ==UserScript==
// @name         LSS Manager v3 AutoUpdate
// @version      beta 0.4
// @description  Das Tool für LSS
// @author       lost | mausmajor | chaoskai | northdegree
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      *://www.missionchief.com/*
// @include      *://www.missionchief.com/
// @grant        none
// @run          document-start
// ==/UserScript==
//$.getScript('https://lost.design/lssm-develop-beta/lss-manager-v3.dev.js');
// ============================================================
// ALLGEMEINE INFORMATIONEN:
// - prefix immer mit prefix + _name verwenden
// -
// ============================================================
// TABLE OF CONTENTS
// main function
// setzt meta variablen
// einladen der verfügbaren module
// activeModule()
//
var carsById = {
        "0": "LF 20",
        "1": "LF 10",
        "2": "DLK 23",
        "3": "ELW 1",
        "4": "RW",
        "5": "GW-A",
        "6": "LF 8/6",
        "7": "LF 20/16",
        "8": "LF 10/6",
        "9": "LF 16-TS",
        "10": "GW-Öl",
        "11": "GW-L2-Wasser",
        "12": "GW-Messtechnik",
        "13": "SW 1000",
        "14": "SW 2000",
        "15": "SW 2000-Tr",
        "16": "SW Kats",
        "17": "TLF 2000",
        "18": "TLF 3000",
        "19": "TLF 8/18",
        "20": "TLF 8/18",
        "21": "TLF 16/24-Tr",
        "22": "TLF 16/25",
        "23": "TLF 16/45",
        "24": "TLF 20/40",
        "25": "TLF 20/40-SL",
        "26": "TLF 16",
        "27": "GW-Gefahrgut",
        "28": "RTW",
        "29": "NEF",
        "30": "HLF 20",
        "31": "RTH",
        "32": "FuStW",
        "33": "GW-Höhenrettung",
        "34": "ELW 2",
        "35": "leBefKw",
        "36": "MTW",
        "37": "TSF-W",
        "38": "KTW",
        "39": "GKW",
        "40": "MTW-TZ",
        "41": "MzKW",
        "42": "LKW K 9",
        "43": "BRmG R",
        "44": "Anh DLE",
        "45": "MLW 5",
        "46": "WLF",
        "47": "AB-Rüst",
        "48": "AB-Atemschutz",
        "49": "AB-Öl",
        "50": "GruKw",
        "51": "FüKw",
        "52": "GefKw",
        "53": "Dekon-P",
        "54": "AB-Dekon-P",
        "55": "KdoW-LNA",
        "56": "KdoW-Orgl",
        "57": "FwK",
        "58": "KTW Typ B",
        "59": "ELW 1 (SEG)",
        "60": "GW-San",
        "61": "Polizeihubschrauber",
        "62": "AB-Schlauch",
        "63": "GW-Taucher",
        "64": "GW-Wasserrettung",
        "65": "LKW 7 Lkr 19 tm",
        "66": "Anh MzB",
        "67": "Anh SchlB",
        "68": "Anh MzAB",
        "69": "Tauchkraftwagen",
        "70": "MZB",
    "71": "AB-MZB"
};

lss_config = {
    server: "https://lss-manager.de/lss-entwicklung", // Domain wo alles liegt
    stats_uri: "https://proxy.lss-manager.de/stat.php",
    version: "3.1"
};

(function(I18n,$) {
    // alle Settings die immer wieder benötigt werden
    $("head").prepend('<link href="'+lss_config.server+'/lss-manager-v3/css/main.css" rel="stylesheet" type="text/css">');
    $('head').append('<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="   +crossorigin="anonymous"></script>');
    $('head').append('<script src="'+lss_config.server+'/lss-manager-v3/js/highcharts.min.js" type="text/javascript"></script>');

    var set = {
        //server: "https://lssm-develop.lost.design/sources", // Domain wo alles liegt
        server: lss_config.server, // Domain wo alles liegt
        prefix: 'lssm',
        github: 'https://github.com/',
        ModuleKey: function() {
            return this.prefix + '_Module';
        },
        locale: I18n.locale || 'de'
    };
    var Module = {
        Layout01: {
            name: {
                de: 'Layout 01',
                en: 'Layout 01',
                nl: 'Layout 01'
            },
            active: false,
            description: {
                de: 'Ansicht mit großer Karte, alle anderen Elemente rechts davon auswählbar'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-layout-01/layout-01.user.js',
            develop: false,
            version: 'v 1.1',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        Layout02: {
            name: {
                de: 'Layout 02',
                en: 'Layout 02',
                nl: 'Layout 02'
            },
            active: false,
            description: {
                de: 'Ansicht mit großer Karte, alle anderen Elemente rechts davon auswählbar'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-layout-02/layout-02.user.js',
            develop: false,
            version: 'v 1.0',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        Layout03: {
            name: {
                de: 'Layout 03',
                en: 'Layout 03',
                nl: 'Layout 03'
            },
            active: false,
            description: {
                de: 'Layout ohne Karte'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-layout-03/layout-03.user.js',
            develop: false,
            version: 'v 1.0',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        Layout04: {
            name: {
                de: 'Layout 04',
                en: 'Layout 04',
                nl: 'Layout 04'
            },
            active: false,
            description: {
                de: 'Ansicht mit großer Karte, alle anderen Elemente rechts davon auswählbar'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-layout-04/layout-04.user.js',
            develop: false,
            version: 'v 1.0',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        MissionOut: {
            name: {
                de: 'Einsatzliste komprimieren',
                en: 'minify Mission',
                nl: 'MissionOut'
            },
            active: false,
            description: {
                de: 'Einklappen der Einsätze'
            },
            ghuser: 'Mausmajor',
            source: '/modules/lss-MissionOut/MissionOut.user.js',
            develop: false,
            version: 'v 1.4',
            copyright: '@Mausmajor',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        ChatPopup: {
            name: {
                de: 'Chat Popup',
                en: 'Chat Popup',
                nl: 'Chat Popup'
            },
            active: false,
            description: {
                de: 'Zeigt ein Popup an wenn eine neue Chatnachricht erscheint'
            },
            ghuser: 'Mausmajor',
            source: '/modules/lss-chat/Chat.user.js',
            develop: false,
            version: 'v 1.0',
            copyright: '@Mausmajor',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        Notification_Alert: {
            name: {
                de: 'Notification Alert',
                en: 'Notification Alert',
                nl: 'Notification Alert'
            },
            active: false,
            description: {
                de: 'Zeigt eine HTML-5 Notification an sobald ein Status oder eine Nachricht eingegangen ist. (ChatPoput included)'
            },
            ghuser: 'DLRG-Dominik',
            source: '/modules/lss-notification_alert/Notification_alarm.user.js',
            develop: false,
            version: 'v 2.0',
            copyright: '@DLRG-Dominik / @Mausmajor',
            settings:
            {
              has: true,
              function_code: "NotificationAlarm_show_settings"
            }
        },
        Redesign01: {
            name: {
                de: 'Redesign 01',
                en: 'Redesign 01',
                nl: 'Redesign 01'
            },
            active: false,
            description: {
                de: 'Neues Design für die Oberfläche'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-redesign-01/redesign-01.user.js',
            develop: false,
            version: 'alpha-0.1',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        Tableau: {
            name: {
                de: 'Fahrzeug Tableau',
                en: 'Vehicle Tableau',
                nl: 'Fahrzeug Tableau'
            },
            active: false,
            description: {
                de: 'Exportiert Fahrzeuge und Wachen zum Fahrzeugtableau'
            },
            ghuser: 'ChaosKai',
            source: '/modules/lss-tableau/tableau.user.js',
            develop: false,
            version: 'v 0.1',
            copyright: '@ChaosKai93',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        FMS5InMap: {
            name: {
                de: 'FMS 5 in der Karte',
                en: 'FMS 5 within Map',
                nl: '-'
            },
            active: false,
            description: {
                de: 'Zeigt alle FMS 5 in der Karte an.'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-FMS5InMap/FMS5InMap.user.js',
            develop: false,
            version: 'v 0.1',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        Clock: {
            name: {
                de: 'Clock',
                en: 'Clock',
                nl: 'Clock'
            },
            active: false,
            description: {
                de: 'Zeigt eine Uhr in der Karte an'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-clock/clock.user.js',
            develop: false,
            version: 'v 0.1',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        WachenplanungOnMap: {
            name: {
                de: 'Wachenplanung auf der Karte',
                en: 'Stationmanagement on Map',
                nl: '-'
            },
            active: false,
            description: {
                de: 'Zeichnet Kreise im Radius X um deine Wachen. Der Radius kann selbst bestimmt werden & die Wachen sind wählbar.'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-WachenplanungOnMap/WachenplanungOnMap.user.js',
            develop: false,
            version: 'v 0.1',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        tagMissions: {
            name: {
                de: 'Einsätze markieren',
                en: 'Emergencycase mark',
                nl: '-'
            },
            active: false,
            description: {
                de: 'Wurde ins Spiel integriert, vorerst deaktiviert'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-tagMissions/tagMissions.user.js',
            develop: true,
            version: 'v 0.1',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        allianceMissionlistShare: {
            name: {
                de: 'Einsätze freigeben',
                en: 'Mission share',
                nl: '-'
            },
            active: false,
            description: {
                de: 'In der Übersicht ohne den Einsatz zu öffnen, freigeben.'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-allianceMissionlistShare/allianceMissionlistShare.user.js',
            develop: false,
            version: 'v 0.2',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        searchMissions: {
            name: {
                de: 'Einsätze suchen',
                en: 'Mission search',
                nl: '-'
            },
            active: false,
            description: {
                de: 'In der Übersicht Einsätze suchen & filtern. In der Alarmmaske diese Liste mit Buttons durchgehen.'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-searchMissions/searchMissions.user.js',
            develop: false,
            version: 'v 0.2',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        keyboard: {
            name: {
                de: 'Keyboard Alarmierung',
                en: 'Keyboard control',
                nl: '-'
            },
            active: false,
            description: {
                de: 'Einsatzmaske mit Tastatur steuern.'
            },
            ghuser: 'ChaosKai',
            source: '/modules/lss-tastaturalarmierung/keyboard.user.js',
            develop: false,
            inframe: true, // Soll das Modul auch in iframes (mission, gebäude ...) geladen werden?
            version: 'v 0.1',
            copyright: '@ChaosKai',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        get_buildings_helper: {
            name: {
                de: 'get_buildings_helper',
                en: 'Keyboard control',
                nl: '-'
            },
            active: true,
            description: {
                de: 'get_buildings_helper.'
            },
            ghuser: 'lss-manager',
            source: '/helperFunctions/get_buildings.js',
            noapp: true, // Nicht im App-Store auflisten
            develop: true,
            version: 'v 0.1',
            copyright: '@lss-manager',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        car_list_printable: {
            name: {
                de: 'car_list_printable',
                en: 'Keyboard control',
                nl: '-'
            },
            active: true,
            description: {
                de: 'car_list_printable.'
            },
            ghuser: 'lss-manager',
            source: '/helperFunctions/car_list_printable.js',
            noapp: true, // Nicht im App-Store auflisten
            develop: true,
            version: 'v 0.1',
            copyright: '@lss-manager',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        car_list: {
            name: {
                de: 'car_list',
                en: 'Keyboard control',
                nl: '-'
            },
            active: true,
            description: {
                de: 'car_list.'
            },
            ghuser: 'lss-manager',
            source: '/helperFunctions/car_list.js',
            noapp: true, // Nicht im App-Store auflisten
            develop: true,
            version: 'v 0.1',
            copyright: '@lss-manager',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        Statistik: {
            name: {
                de: 'Statistik',
                en: 'Statistik',
                nl: 'Statistik'
            },
            active: false,
            description: {
                de: 'Statistik'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-Statistik/statistik.user.js',
            develop: false,
            version: 'v 0.1',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        dashboard: {
            name: {
                de: 'Dashboard',
                en: 'SDashboard',
                nl: '-'
            },
            active: false,
            description: {
                de: 'Statistik'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-dashboard/dashboard.user.js',
            develop: false,
            version: 'v 0.1',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        WachenHoverStati: {
            name: {
                de: 'WachenHoverStati',
                en: 'WachenHoverStati',
                nl: 'WachenHoverStati'
            },
            active: false,
            description: {
                de: 'WachenHoverStati'
            },
            ghuser: 'lostdesign',
            source: '/modules/lss-WachenHoverStati/WachenHoverStati.js',
            develop: true,
            version: 'v 0.1',
            copyright: '@lostdesign',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        RenameFZ: {
            name: {
                de: 'RenameFZ',
                en: 'RenameFZ',
                nl: 'RenameFZ'
            },
            active: false,
            description: {
                de: 'RenameFZ'
            },
            ghuser: 'Mausmajor',
            source: '/modules/lss-RenameFZ/renameFZ.user.js',
            develop: false,
            version: 'v 0.2',
            copyright: '@Mausmajor',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        telemetry: {
            name: {
                de: 'Telemetrie',
                en: 'Telemetry',
                nl: 'Telemetrie'
            },
            active: true,
            description: {
                de: 'Sendet Daten an das Entwicklerteam zur Erstellung einer Statistik',
                en: 'Sends data to the developer team for the purpose of creating a statistic',
                en: 'Stuurt gegevens naar het development team voor het doel van de schepping van een statistiek'
            },
            ghuser: 'Tsumiki-Chan',
            source: '/modules/telemetry/telemetry.user.js',
            noapp: true, // Nicht im App-Store auflisten
            develop: false,
            version: 'v 0.1',
            copyright: '@lss-manager',
            settings:
            {
              has: false,
              function_code: ""
            }
        },
        mapreload: {
            name: {
                de: 'Map Reload',
                en: 'Map Reload',
                nl: 'Map Reload'
            },
            active: true,
            description: {
                de: '-',
            },
            ghuser: 'Tsumiki-Chan',
            source: '/modules/lss-mapReload/mapreload.user.js',
            noapp: true, // Nicht im App-Store auflisten
            develop: false,
            version: 'v 0.1',
            copyright: '@lss-manager',
            settings:
            {
              has: false,
              function_code: ""
            }
        }
    };
    // Zum zwischenspeichern der schon geladenen Module
    var activeModule = [];

    function loadModule() {
        for (var i in Module) {
            var uc = (window.location.pathname.match(/\//g)).length;
            if (Module[i].active && Module.status != 'develop' && activeModule.indexOf(i) === -1) {
                if (uc <= 1 || ("inframe" in Module[i] && Module[i].inframe == true && uc>1)) {
                    $('body').append('<script src="' + lss_config.server + Module[i].source + '" type="text/javascript"></script>');
                }
            }
        }
    }
    // Speichern der Einstellungen
    function saveSettings() {
        var arr = {};
        for (var i in Module)
            arr[i] = Module[i].active;
        localStorage.setItem(set.ModuleKey(), JSON.stringify(arr));
    }
    // laden der Einstellungen
    function loadSettings() {
        var load = JSON.parse(localStorage.getItem(set.ModuleKey())) || {};
        for (var i in load) {
            var modname = i.toString();
            if ((modname in Module) === false)
            {
                console.log(modname +" is not a valid app. Skipping.");
                continue;
            }
            Module[i].active = load[i];
        }
    }

    function createSettings() {
        var settingsHtml = '';
        for (var i in Module) {
            var mod = Module[i];
            // Do not show certain modules in the appstore
            if ('noapp' in mod && mod.noapp === true)
            {
                continue;
            }
            if ('settings' in mod && mod.settings.has == true)
            {
                settingsHtml += '<li><a href="#" role="tab" onclick="'+ mod.settings.function_code +'();" data-toggle="tab">'+ mod.name[set.locale] +'</a></li>';
            }
        }
        return settingsHtml;
    }

    // Erstellen der Pandels
    function createModulePanels() {
        var modulePanelHtml = '';
        for (var i in Module) {
            var mod = Module[i];
            // Do not show certain modules in the appstore
            if ('noapp' in mod && mod.noapp === true)
            {
                continue;
            }
            modulePanelHtml += '<div class="col-md-3 '+ (mod.develop ? set.ModuleKey()+ '_develop' : '') + '"><div class="panel panel-default" style="display: inline-block;width:100%;">' +
                '<div class="panel-body">' +
                '<span class="pull-right">' +
                '<div class="onoffswitch">' +
                '<input class="onoffswitch-checkbox" id="' + set.ModuleKey() + '_' + i + '" ' + (mod.active ? 'checked="true"' : '') + ' value="' + i + '"name="onoffswitch" type="checkbox">' +
                '<label class="onoffswitch-label" for="' + set.ModuleKey() + '_' + i + '"></label>' +
                '</div>' +
                '</span>' +
                '<h4>' + mod.name[set.locale] + '</h4>' +
                '<small>' + mod.description[set.locale] + '</small>' +
                '</div>' +
                '<div class="panel-footer">' +
                '<a href="' + set.github + mod.ghuser + '">Github</a><div class="pull-right"><span>'+ mod.version +'</span> / <span>'+ mod.copyright +'</span></div>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        return modulePanelHtml;
    }
    // Packt alle ModulPanels in ein Div zudem werden beim an und ausschalten die Einstellungen ge?ndert  & gespeichert;
    // TODO: DIV mit ID so wie CSS ausstatten & festlegen wo es eingebettet werden soll
    function createModuleMain() {
        var prefix = set.prefix + '_appstore';
      var div = $('<div class="col-md-12 lssm_appstore" id="' + prefix + '"><div class="jumbotron"><h1>APPSTORE</h1><p>Willkommen im LSS Manager Appstore.</p><p>Hier findest du verschiedene Plugins, die dein Spielerlebnis bereichern sollen. Jedes Plugin kann einzeln aktiviert werden, indem du den Hebel auf Grün stellst. Sollte es zu irgendwelchen Problemen kommen, kannst du uns gerne eine Nachricht schreiben oder » hier « im Forum einen Beitrag verfassen.</p><br><p><button type="button" class="btn btn-grey btn-sm" id="' + prefix + '_close" aria-label="Close"><span aria-hidden="true">Zurück zum Leitstellenspiel</span></button></p><span class="pull-right"><small>MADE BY:</small>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/81460" target="_blank" class="username-link">@lost</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=lost" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/168556" target="_blank" class="username-link">@Northdegree</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=Northdegree" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/201213" target="_blank" class="username-link">@Mausmajor</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=Mausmajor" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/32912" target="_blank" class="username-link">@ChaosKai93</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=ChaosKai93" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-danger">Version 0.1</span></span></div><nav class="navbar navbar-default navbar-static-top" role="navigation" id="lssm_appstore_settingsbar" style=""> <div class="lssm_appstore_settingsbar_div" style="padding-left: 20px;padding-right: 20px;"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li><a href="#" role="tab" data-toggle="tab">EINSTELLUNGEN:</a></li>'+createSettings()+'</ul><!--<ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-ok"></span>ok</a></li></ul>--></div></div></nav></div>');
        div.on('change', '.onoffswitch-checkbox', function(ev) {
            var e = ev.target;
            Module[e.value].active = e.checked;
            saveSettings();
        });

        div.append(createModulePanels());
        return div;
    }

    // Menüpunkt zu den Modulen / Einstellungen / Dashboard
    function appendAppstore() {
        // Variablen setzen für weitere Verwendung
        var prefix = set.prefix + '_appstore';
        var settingButton = $('<li><a id="' + prefix + '_activate" href="#"><span class="label label-success">LSS Manager</span></a></li>');
        var div = $('<div class="row" id="' + prefix + '_row"></div>').append(createModuleMain());
        var content = $('#navbar-mobile-footer').prev();
        // hier ist alles drin
        content.attr('id','content');

        //div.append(createModulePanels());
        settingButton.click(function() {
            // versteckt den Hauptkörper von LSS und öffnet das LSS Manager Einstellungsfenster / den Appstore
            content.hide().after(div);
            $('footer').hide();
            $('#' + prefix + '_close').click(function() {
                loadModule();
                $('body').append('<div id="preloader">Speichere Einstellugen</div>');
                content.delay(50).show(function(){
                    $('#preloader').delay(50).remove();
                    location.reload();
                });
                //div.remove();

            });
        });
        // einhängen des Buttons in der Navi
        $('#navbar-main-collapse > ul').append(settingButton);
    }

    loadSettings();
    appendAppstore();
    loadModule();
})(I18n,jQuery)
