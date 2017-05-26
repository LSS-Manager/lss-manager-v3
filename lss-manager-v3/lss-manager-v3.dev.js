// ==UserScript==
// @name         LSS Manager v3 AutoUpdate
// @version      beta 0.5
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
lss_config = {
    server: "https://lss-manager.de/lss-entwicklung", // Domain wo alles liegt
    stats_uri: "https://proxy.lss-manager.de/stat.php",
    forum_link: "https://forum.leitstellenspiel.de/index.php/Thread/11166-LSS-MANAGER-V3/",
    version: "3.1",
    prefix: 'lssm'
};

/**
 * Localization
 */
I18n.defaultLocale = 'de';
I18n.fallbacks = true;
I18n.locales.nl = ['nl', 'en', 'de'];
I18n.translations.de['lssm'] = {
    lssm: "LSS-Manager",
    appstore: "App Store",
    appstore_welcome: "Willkommen im Appstore vom LSS Manager",
    appstore_desc: "Hier findest du verschiedene Plugins, die dein Spielerlebnis bereichern sollen. Jedes Plugin kann einzeln aktiviert werden, indem du den Hebel auf Grün stellst. Sollte es zu irgendwelchen Problemen kommen, kannst du uns gerne eine Nachricht schreiben oder <a href=\"" + lss_config.forum_link + "\" target=\"blank\">im Forum einen Beitrag verfassen</a>.",
    back_lss: "Zurück zu Leistellenspiel",
    settings: "Einstellungen",
    saving: "Speichere...",
    save: "Speichern",
    cantactivate: "kann nicht aktiviert werden, da es mit folgenden Modul(en) inkompatibel ist:",
    cantload: "<h2>LSS-Manager konnte nicht geladen werden</h2><br>Bitte kontaktiere ein Mitglied vom Entwicklerteam.",
    apps: {}
}
I18n.translations.en['lssm'] = {
    lssm: "LSS-Manager",
    appstore: "App Store",
    appstore_welcome: "Welcome to the appstore of LSS Manager",
    appstore_desc: "Here you will find various plugins that will enrich your playing experience. Each plugin can be activated individually by placing the lever on green. If there are any problems, you can write us a message or <a href=\"" + lss_config.forum_link + "\" target=\"blank\">write a message in the forum</a>.",
    back_lss: "Back to missionchief",
    settings: "Settings",
    saving: "Saving...",
    save: "Save",
    cantactivate: "can't be activated as it's incompatible with the following modul(es):",
    cantload: "<h2>LSS-Manager could not be loaded</h2><br>Please contact a member of the development team.",
    apps: {}
}
I18n.translations.nl['lssm'] = {
    lssm: "LSS-Manager",
    appstore: "App winkel",
    appstore_welcome: "Welkom bij de App winkel van LSS Manager",
    appstore_desc: "Dit zijn verschillende plug-ins die uw game-ervaring zal verbeteren. Elke plugin kan individueel worden geactiveerd, door te vragen de hendel naar groen. Mochten er problemen zijn, kunt u <a href=\"" + lss_config.forum_link + "\" target=\"blank\">een bericht plaatsen of een bericht posten op het forum zoals wij</a>.",
    back_lss: "Terug naar meldkamerspel",
    apps: {}
}

var carsById = {
    "0": ["LF 20", 0],
    "1": ["LF 10", 0],
    "2": ["DLK 23", 0],
    "3": ["ELW 1", 0],
    "4": ["RW", 0],
    "5": ["GW-A", 0],
    "6": ["LF 8/6", 0],
    "7": ["LF 20/16", 0],
    "8": ["LF 10/6", 0],
    "9": ["LF 16-TS", 0],
    "10": ["GW-Öl", 0],
    "11": ["GW-L2-Wasser", 0],
    "12": ["GW-Messtechnik", 0],
    "13": ["SW 1000", 0],
    "14": ["SW 2000", 0],
    "15": ["SW 2000-Tr", 0],
    "16": ["SW Kats", 0],
    "17": ["TLF 2000", 0],
    "18": ["TLF 3000", 0],
    "19": ["TLF 8/18", 0],
    "20": ["TLF 8/18", 0],
    "21": ["TLF 16/24-Tr", 0],
    "22": ["TLF 16/25", 0],
    "23": ["TLF 16/45", 0],
    "24": ["TLF 20/40", 0],
    "25": ["TLF 20/40-SL", 0],
    "26": ["TLF 16", 0],
    "27": ["GW-Gefahrgut", 0],
    "28": ["RTW", 1],
    "29": ["NEF", 1],
    "30": ["HLF 20", 0],
    "31": ["RTH", 1],
    "32": ["FuStW", 2],
    "33": ["GW-Höhenrettung", 0],
    "34": ["ELW 2", 0],
    "35": ["leBefKw", 2],
    "36": ["MTW", 0],
    "37": ["TSF-W", 0],
    "38": ["KTW", 1],
    "39": ["GKW", 3],
    "40": ["MTW-TZ", 3],
    "41": ["MzKW", 3],
    "42": ["LKW K 9", 3],
    "43": ["BRmG R", 3],
    "44": ["Anh DLE", 3],
    "45": ["MLW 5", 3],
    "46": ["WLF", 0],
    "47": ["AB-Rüst", 0],
    "48": ["AB-Atemschutz", 0],
    "49": ["AB-Öl", 0],
    "50": ["GruKw", 2],
    "51": ["FüKw", 2],
    "52": ["GefKw", 2],
    "53": ["Dekon-P", 0],
    "54": ["AB-Dekon-P", 0],
    "55": ["KdoW-LNA", 1],
    "56": ["KdoW-Orgl", 1],
    "57": ["FwK", 0],
    "58": ["KTW Typ B", 1],
    "59": ["ELW 1 (SEG)", 1],
    "60": ["GW-San", 1],
    "61": ["Polizeihubschrauber", 2],
    "62": ["AB-Schlauch", 0],
    "63": ["GW-Taucher", 4],
    "64": ["GW-Wasserrettung", 4],
    "65": ["LKW 7 Lkr 19 tm", 4],
    "66": ["Anh MzB", 4],
    "67": ["Anh SchlB", 4],
    "68": ["Anh MzAB", 4],
    "69": ["Tauchkraftwagen", 4],
    "70": ["MZB", 4],
    "71": ["AB-MZB", 4],
};

(function (I18n, $) {
    $.get(lss_config.server + '/lss-manager-v3/helperfunctions.js', function (data) {
        $('header').append('<script type="text/javascript">' + data + '</script>');
    })
            .fail(function () {
                $("#map_outer").before('<div class="alert alert-danger alert-dismissable" style="text-align:center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + I18n.t('lssm.cantload') + '</div>');
            })
            .done(function () {
                loadCore();
            });
    function loadCore() {
        // alle Settings die immer wieder benötigt werden
        $("head").prepend('<link href="' + lss_config.server + '/lss-manager-v3/css/main.css" rel="stylesheet" type="text/css">')
                .append('<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="   +crossorigin="anonymous"></script>')
                .append('<script src="' + lss_config.server + '/lss-manager-v3/js/highcharts.min.js" type="text/javascript"></script>');

        var set = {
            //server: "https://lssm-develop.lost.design/sources", // Domain wo alles liegt
            server: lss_config.server, // Domain wo alles liegt
            github: 'https://github.com/',
            ModuleKey: function () {
                return lss_config.prefix + '_Module';
            },
            locale: I18n.locale || 'de'
        };
        var Module = {
            Layout01: {
                name: {
                    de: 'Layout 01',
                },
                active: false,
                description: {
                    de: 'Ansicht mit großer Karte - Einsätze & Co mit Menu durchschaltbar. Eine Badge wie bei den Nachrichten zeigt die Einsäte/Nachrichten/Funksprüche seit dem letzten Aufruf des jeweiligen Fensters im Menu.',
                    en: 'View with main focus on the map. Missions and other windows can be changed using a menu. A badge is telling you how many missions etc. you have since your last visit within that window.'
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-layout-01/layout-01.user.js',
                develop: false,
                version: 'v 1.1',
                copyright: '@lostdesign',
                collisions: ['Layout02', 'Layout03', 'Layout04'],
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            Layout02: {
                name: {
                    de: 'Layout 02'
                },
                active: false,
                description: {
                    de: 'Ansicht mit 100% Karte im oberen Bereich - darunter die vier Fenster Einsätze, Gebäude, Chat & Funksprüche.',
                    en: 'View with 100% map at the upper area - below that the four windows calls, buildings, chat and radio.'
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-layout-02/layout-02.user.js',
                develop: false,
                version: 'v 1.0',
                copyright: '@lostdesign',
                collisions: ['Layout01', 'Layout03', 'Layout04'],
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            Layout03: {
                name: {
                    de: 'Layout 03'
                },
                active: false,
                description: {
                    de: 'Layout ohne Karte. Die vier Fenster werden über die ganze Höhe dargestellt.',
                    en: 'Layout without map. The four windows are using 100% of the given browser height.'
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-layout-03/layout-03.user.js',
                develop: false,
                version: 'v 1.0',
                copyright: '@lostdesign',
                collisions: ['Layout01', 'Layout02', 'Layout04', 'FMS5InMap'],
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            Layout04: {
                name: {
                    de: 'Layout 04'
                },
                active: false,
                description: {
                    de: 'Karte im linken Bereich auf 100% Höhe. Rechts davon die Einsätze auf voller breite - alle Einsatzarten werden in jeweils einer Spalte dargestellt. Darunter Gebäude, Chat und Funk.',
                    en: 'Map with 100% height on the left side. Next to it the calls, each category in its own column. Below that the buildings, chat and radio.'
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-layout-04/layout-04.user.js',
                develop: false,
                version: 'v 1.0',
                copyright: '@lostdesign',
                collisions: ['Layout01', 'Layout02', 'Layout03'],
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            MissionOut: {
                name: {
                    de: 'MissionOut'
                },
                active: false,
                description: {
                    de: 'Alle Einsätze ein/ausklappen oder für jeden Einsatz einzeln.',
                    en: 'Minimize mission list entries. You can either expand or minimize all calls at once or do it for each one.',
                },
                ghuser: 'Mausmajor',
                source: '/modules/lss-MissionOut/MissionOut.user.js',
                develop: false,
                version: 'v 1.4',
                copyright: '@Mausmajor',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            saveVGE: {
                name: {
                    de: 'Eigene VGE speichern',
                    en: 'Save created alliance calls'
                },
                active: false,
                description: {
                    de: 'Funktion um sebst erstlle VGE zu speichern.',
                    en: 'Enables a function to save own created mission calls to use them as template.',
                },
                ghuser: 'Mausmajor',
                source: '/modules/lss-saveVGE/saveVGE.user.js',
                develop: false,
                version: 'v 1.0',
                copyright: '@Mausmajor',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            Notification_Alert: {
                name: {
                    de: 'Notification Alert'
                },
                active: false,
                description: {
                    de: 'Zeigt eine HTML-5 Notification an sobald ein Status oder eine Nachricht eingegangen ist. (ChatPoput included)',
                    en: 'HTML5 Chatnotifications using the browser notificationsystem.',
                },
                ghuser: 'DLRG-Dominik',
                source: '/modules/lss-notification_alert/Notification_alarm.user.js',
                develop: false,
                version: 'v 2.0',
                copyright: '@DLRG-Dominik / @Mausmajor',
                settings: {
                    has: true,
                    function_code: "NotificationAlarm_show_settings"
                }
            },
            Redesign01: {
                name: {
                    de: 'Redesign 01'
                },
                active: false,
                description: {
                    de: 'Neues Design für die Oberfläche',
                    en: 'New design for the game.'
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-redesign-01/redesign-01.user.js',
                develop: false,
                version: 'alpha-0.1',
                copyright: '@lostdesign',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            FMS5InMap: {
                name: {
                    de: 'FMS 5 in der Karte',
                    en: 'Request transport in map'
                },
                active: false,
                description: {
                    de: 'Zeigt alle FMS 5 in der Karte an.',
                    en: 'Shows request transports within the map lower left corner.'
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-FMS5InMap/FMS5InMap.user.js',
                develop: false,
                version: 'v 0.1',
                copyright: '@lostdesign',
                settings: {
                    has: false,
                    function_code: ""
                },
                collisions: ['Layout03', 'WachenplanungOnMap']
            },
            Clock: {
                name: {
                    de: 'Clock'
                },
                active: false,
                description: {
                    de: 'Zeigt eine Uhr in der Karte an.',
                    en: 'Enables a small clock within the map.',
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-clock/clock.user.js',
                develop: false,
                version: 'v 0.1',
                copyright: '@lostdesign',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            WachenplanungOnMap: {
                name: {
                    de: 'Wachenplanung auf der Karte',
                    en: 'Station management on map'
                },
                active: false,
                description: {
                    de: 'Zeichnet Kreise im Radius X um deine Wachen. Der Radius kann selbst bestimmt werden & die Gebäude sind wählbar.',
                    en: 'Draws circles around buildings with your chosen radius in kilometer. You can also filter for specific buildings.',
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-WachenplanungOnMap/WachenplanungOnMap.user.js',
                develop: false,
                version: 'v 0.1',
                copyright: '@lostdesign',
                settings: {
                    has: false,
                    function_code: ""
                },
                collisions: ['Layout03', 'FMS5InMap']
            },
            tagMissions: {
                name: {
                    de: 'Einsätze markieren',
                    en: 'Mark calls'
                },
                active: false,
                description: {
                    de: 'Wurde ins Spiel integriert, vorerst deaktiviert.',
                    en: 'Got inplemented into the game - deactivated for now.',
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-tagMissions/tagMissions.user.js',
                develop: true,
                version: 'v 0.1',
                copyright: '@lostdesign',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            allianceMissionlistShare: {
                name: {
                    de: 'Einsätze freigeben',
                    en: 'Mission share'
                },
                active: false,
                description: {
                    de: 'Mit einem klick in der Übersicht, ohne den Einsatz zu öffnen, freigeben.',
                    en: 'Instantly share missions without opening the call by clicking a button in the overview.'
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-allianceMissionlistShare/allianceMissionlistShare.user.js',
                develop: false,
                version: 'v 0.2',
                copyright: '@lostdesign',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            searchMissions: {
                name: {
                    de: 'Einsätze suchen',
                    en: 'Mission search'
                },
                active: false,
                description: {
                    de: 'In der Übersicht Einsätze suchen & filtern. In der Alarmmaske diese Liste mit Buttons durchgehen.',
                    en: 'Search for calls & filter them - a group of buttons on the bottom lets you change searched missions quickly.'
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-searchMissions/searchMissions.user.js',
                develop: false,
                version: 'v 0.2',
                copyright: '@lostdesign',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            keyboard: {
                name: {
                    de: 'Alarmmasken Steuerung',
                    en: 'Callview control'
                },
                active: false,
                description: {
                    de: 'Einsatzmaske mit Tastatur steuern.',
                    en: 'Control the mission view with the keyboard.',
                },
                ghuser: 'ChaosKai',
                source: '/modules/lss-tastaturalarmierung/keyboard.user.js',
                develop: false,
                inframe: true, // Soll das Modul auch in iframes (mission, gebäude ...) geladen werden?
                version: 'v 0.1',
                copyright: '@ChaosKai',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            Statistik: {
                name: {
                    de: 'Statistik',
                    en: 'Statistic'
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
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            dashboard: {
                name: {
                    de: 'Dashboard'
                },
                active: false,
                description: {
                    de: 'Dashboard',
                    en: 'Dashboard'
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-dashboard/dashboard.user.js',
                develop: false,
                version: 'v 0.1',
                copyright: '@lostdesign',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            WachenHoverStati: {
                name: {
                    de: 'Wachen Status',
                    en: 'Station status'
                },
                active: false,
                description: {
                    de: 'Zeigt beim drüberfahren einer Wache auf der Karte die Status der Fahrzeuge an.',
                    en: 'Shows the code of vehciles on station hover on the map.',
                },
                ghuser: 'lostdesign',
                source: '/modules/lss-WachenHoverStati/WachenHoverStati.js',
                develop: true,
                version: 'v 0.1',
                copyright: '@lostdesign',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            RenameFZ: {
                name: {
                    de: 'Fahrzeuge umbennenen',
                    en: 'Rename vehicle'
                },
                active: false,
                description: {
                    de: 'Fahrzeuge in bulk mit Tags umbennenen.',
                    en: 'Rename vehicles in bulk using tags.',
                },
                ghuser: 'Mausmajor',
                source: '/modules/lss-RenameFZ/renameFZ.user.js',
                develop: false,
                version: 'v 0.2',
                copyright: '@Mausmajor',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            telemetry: {
                name: {
                    de: 'Telemetrie',
                    en: 'Telemetry'
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
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            mapreload: {
                name: {
                    de: 'Map Reload'
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
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            showBackAlarmAbove: {
                name: {
                    de: 'show Back Alarm Above',
                    en: 'show Back Alarm Above'
                },
                active: false,
                description: {
                    de: 'Zeigt den Alle Rückalamieren Button auch überhalb der Fahrzeuge an',
                },
                ghuser: 'Mausmajor',
                source: '/modules/lss-showBackAlarmAbove/showBackAlarmAbove.js',
                noapp: false, // Nicht im App-Store auflisten
                inframe: true,
                develop: false,
                version: 'v 0.1',
                copyright: '@lss-manager',
                settings: {
                    has: false,
                    function_code: ""
                }
            },
            recolor: {
                name: {
                    de: 'Einfärben',
                    en: 'Colorize'
                },
                active: false,
                description: {
                    de: 'Ändere die Farbe des Leitstellenspiels. THIS FUNCTION IS WORK IN PROGRESS',
                    en: 'Change the color of Missionchief.  THIS FUNCTION IS WORK IN PROGRESS',
                },
                ghuser: 'Tsumiki-Chan',
                source: '/modules/lss-recolor/recolor.user.js',
                noapp: false, // Nicht im App-Store auflisten
                inframe: true,
                develop: true,
                version: 'v 0.1',
                copyright: '@Northdegree',
                settings: {
                    has: false,
                    function_code: ""
                }
            }
        };

        /**
         * Checks if a module collides with other modules
         * @param module
         * @returns {boolean}
         */
        var active_mods = [];

        function canActivate(mod) {
            var ca = true;
            if ('collisions' in mod) {
                for (var c in mod.collisions) {
                    var c = mod.collisions[c];
                    if (active_mods.indexOf(c) != -1)
                        ca = false;
                }
            }
            return ca;
        }

        // Zum zwischenspeichern der schon geladenen Module
        function addLocales(module) {
            var mod = module.toString();
            if (mod in Module) {
                var keys = ['name', 'description']
                for (var k in keys) {
                    k = keys[k];
                    if (!k in Module[mod])
                        continue;
                    for (var l in Module[mod][k]) {
                        l = l.toString();
                        if (!(mod in I18n.translations[l]['lssm']['apps'])) {
                            I18n.translations[l]['lssm']['apps'][mod] = {}
                        }
                        I18n.translations[l]['lssm']['apps'][mod][k] = Module[mod][k][l];
                    }
                }
            }
        }

        function loadModule() {
            for (var i in Module) {
                addLocales(i);
                var uc = (window.location.pathname.match(/\//g)).length;
                if (Module[i].active && Module.status != 'develop' && canActivate(Module[i])) {
                    if (uc <= 1 || ("inframe" in Module[i] && Module[i].inframe == true && uc > 1)) {
                        active_mods.push(i.toString());
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
                if ((modname in Module) === false) {
                    console.log(modname + " is not a valid app. Skipping.");
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
                if ('noapp' in mod && mod.noapp === true) {
                    continue;
                }
                if ('settings' in mod && mod.settings.has == true && mod.active == true) {
                    settingsHtml += '<li><a href="#" role="tab" onclick="' + mod.settings.function_code + '();hideAllForSettings();" data-toggle="tab">' + I18n.t('lssm.apps.' + i.toString() + '.name') + '</a></li>';
                }
            }
            return settingsHtml;
        }
        function hideAllForSettings(){
            $('.'+lss_config.prefix+'__appstore_hideForSettings').hide();
        }
        window.hideAllForSettings = hideAllForSettings;
        // Erstellen der Pandels
        function createModulePanels() {
            var modulePanelHtml = '<div id="'+lss_config.prefix + '_appstore_Module" class="'+lss_config.prefix + '__appstore_hideForSettings">';
            for (var i in Module) {
                var mod = Module[i];
                // Do not show certain modules in the appstore
                if ('noapp' in mod && mod.noapp === true)
                    continue;
                modulePanelHtml += '<div style="margin-top:10px;height: 190px!important;overflow-y:auto;" class="col-md-3 ' + (mod.develop ? set.ModuleKey() + '_develop' : '') + '"><div class="panel panel-default" style="display: inline-block;width:100%;">' +
                        '<div class="panel-body">' +
                        '<span class="pull-right">' +
                        '<div class="onoffswitch">' +
                        '<input class="onoffswitch-checkbox" id="' + set.ModuleKey() + '_' + i + '" ' + (mod.active ? 'checked="true"' : '') + ' value="' + i + '"name="onoffswitch" type="checkbox">' +
                        '<label class="onoffswitch-label" for="' + set.ModuleKey() + '_' + i + '"></label>' +
                        '</div>' +
                        '</span>' +
                        '<h4>' + I18n.t('lssm.apps.' + i.toString() + '.name') + '</h4>' +
                        '<small>' + I18n.t('lssm.apps.' + i.toString() + '.description') + '</small>' +
                        '</div>' +
                        '<div class="panel-footer">' +
                        '<a href="' + set.github + mod.ghuser + '">Github</a><div class="pull-right"><span>' + mod.version + '</span> / <span>' + mod.copyright + '</span></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
            }
            modulePanelHtml+="</div>";
            return modulePanelHtml;
        }

        // Packt alle ModulPanels in ein Div zudem werden beim an und ausschalten die Einstellungen ge?ndert  & gespeichert;
        // TODO: DIV mit ID so wie CSS ausstatten & festlegen wo es eingebettet werden soll
        function createModuleMain() {
            var prefix = lss_config.prefix + '_appstore';
            var div = $('<div class="col-md-12 lssm_appstore" id="' + prefix + '"><div class="jumbotron"><h1>' + I18n.t('lssm.appstore') + '</h1><p>' + I18n.t('lssm.appstore_welcome') + '.</p><p>' + I18n.t('lssm.appstore_desc') + '</p> <br><p><button type="button" class="btn btn-grey btn-sm" id="' + prefix + '_close" aria-label="Close"><span aria-hidden="true">' + I18n.t('lssm.back_lss') + '</span></button></p><span class="pull-right"><small>MADE BY:</small>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/81460" target="_blank" class="username-link">@lost</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=lost" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/168556" target="_blank" class="username-link">@Northdegree</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=Northdegree" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/201213" target="_blank" class="username-link">@Mausmajor</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=Mausmajor" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-danger">Version 0.1</span></span></div><nav class="navbar navbar-default navbar-static-top" role="navigation" id="lssm_appstore_settingsbar" style=""> <div class="lssm_appstore_settingsbar_div" style="padding-left: 20px;padding-right: 20px;"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li><a href="#" role="tab" data-toggle="tab">' + I18n.t('lssm.settings') + '</a></li>' + createSettings() + '</ul><!--<ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-ok"></span>ok</a></li></ul>--></div></div></nav></div>');
            div.on('change', '.onoffswitch-checkbox', function (ev) {
                var e = ev.target;
                if (e.checked && !canActivate(Module[e.value])) {
                    $(e).prop('checked', false);
                    var warn = "\"" + I18n.t('lssm.apps.' + e.value + '.name') + "\" " + I18n.t('lssm.cantactivate');
                    for (var c in Module[e.value].collisions) {
                        var c = Module[e.value].collisions[c];
                        if (active_mods.indexOf(c) != -1)
                            warn += "\r\n" + I18n.t('lssm.apps.' + c + '.name');
                    }
                    alert(warn);
                    return;
                }
                Module[e.value].active = e.checked;
                if (e.checked) {
                    active_mods.push(e.value);
                } else {
                    active_mods.splice(active_mods.indexOf(e.value), 1);
                }
                saveSettings();
            });
            div.append(createModulePanels());
            return div;
        }

        // Menüpunkt zu den Modulen / Einstellungen / Dashboard
        function appendAppstore() {
            // Variablen setzen für weitere Verwendung
            var prefix = lss_config.prefix + '_appstore';
            var settingButton = $('<li role="presentation" id="' + prefix + '"><a id="' + prefix + '_activate" href="#">' + I18n.t('lssm.appstore') + '</a></li>');
            var div = $('<div class="row" id="' + prefix + '_row"></div>').append(createModuleMain());
            var content = $('#navbar-mobile-footer').prev();
            // hier ist alles drin
            content.attr('id', 'content');

            //div.append(createModulePanels());
            settingButton.click(function () {
                // versteckt den Hauptkörper von LSS und öffnet das LSS Manager Einstellungsfenster / den Appstore
                content.hide().after(div);
                $('footer').hide();
                $('#' + prefix + '_close').click(function () {
                    loadModule();
                    $('body').append('<div id="preloader">' + I18n.t('lssm.saving') + '</div>');
                    content.delay(50).show(function () {
                        $('#preloader').delay(50).remove();
                        location.reload();
                    });
                    //div.remove();

                });
            });
            // einhängen des Buttons in der Navi
            $('#' + lss_config.prefix + '_menu').append(settingButton);
        }

        function createDropDown() {
            var lssm_dropdown = $(' <li class="dropdown" id="' + lss_config.prefix + '_dropdown">\
            <a href="#" id="' + lss_config.prefix + '_menu_switch" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\
                <span class="label label-success">' + I18n.t('lssm.lssm') + '</span> <b class="caret"></b>\
            </a>\
            <ul id="' + lss_config.prefix + '_menu"class="dropdown-menu" role="menu" aria-labelledby="' + lss_config.prefix + '_menu_switch"> </ul>\
            </li>');
            $('#navbar-main-collapse > ul').append(lssm_dropdown);
        }

        createDropDown();
        loadSettings();
        loadModule();
        appendAppstore();
    }}
)(I18n, jQuery);
