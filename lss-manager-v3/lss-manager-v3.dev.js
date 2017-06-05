//██╗.....███████╗███████╗....███╗...███╗.█████╗.███╗...██╗.█████╗..██████╗.███████╗██████╗
//██║.....██╔════╝██╔════╝....████╗.████║██╔══██╗████╗..██║██╔══██╗██╔════╝.██╔════╝██╔══██╗
//██║.....███████╗███████╗....██╔████╔██║███████║██╔██╗.██║███████║██║..███╗█████╗..██████╔╝
//██║.....╚════██║╚════██║....██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║...██║██╔══╝..██╔══██╗
//███████╗███████║███████║....██║.╚═╝.██║██║..██║██║.╚████║██║..██║╚██████╔╝███████╗██║..██║
//╚══════╝╚══════╝╚══════╝....╚═╝.....╚═╝╚═╝..╚═╝╚═╝..╚═══╝╚═╝..╚═╝.╚═════╝.╚══════╝╚═╝..╚═╝

/**
 * Localization
 */

var lssm = {
    config: {
        server: "https://lss-manager.de/lss-entwicklung", // Domain wo alles liegt
        stats_uri: "https://proxy.lss-manager.de/stat.php",
        forum_link: "https://forum.leitstellenspiel.de/index.php/Thread/11166-LSS-MANAGER-V3/",
        version: "3.2.1",
        github: 'https://github.com/',
        prefix: 'lssm'
    },
    loadScript: function(link) {
        try {
            var path = window.location.pathname.length;
            var uid = "";
            if (typeof user_id != "undefined")
                var game = window.location.hostname.toLowerCase().replace("www.","").split(".")[0];
            uid = "?uid="+game+user_id;
            $('body').append('<script src="' + this.config.server + link + uid +'" type="text/javascript"></script>');
        } catch (e) {
            console.log("On script load: "+e.message);
        }
    },
    loadStyle: function(link) {
        try {
            var path = window.location.pathname.length;
            var uid = "";
            if (typeof user_id != "undefined")
                var game = window.location.hostname.toLowerCase().replace("www.","").split(".")[0];
            uid = "?uid="+game+user_id;
            $('body').append('<link href="' + this.config.server + link + uid +'" rel="stylesheet" type="text/css">');
        } catch (e) {
            console.log("On script load: "+e.message);
        }
    },
    getlink: function(file) {
        try {
            var path = window.location.pathname.length;
            var uid = "";
            if (typeof user_id != "undefined")
                var game = window.location.hostname.toLowerCase().replace("www.","").split(".")[0];
            uid = "?uid="+game+user_id;
            return this.config.server + file + uid;
        } catch (e) {
            console.log("On script load: "+e.message);
        }
    },
};

/**
 * Tell jQuery to allow caching beforehand!
 */
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    if ( options.dataType == 'script' || originalOptions.dataType == 'script' ||
        options.dataType == 'stylesheet' || originalOptions.dataType == 'stylesheet') {
        options.cache = true;
    }
});

I18n.defaultLocale = 'de';
I18n.fallbacks = true;
I18n.locales.nl = ['nl', 'en', 'de'];
I18n.translations.de['lssm'] = {
    lssm: "LSS-Manager",
    version: "Beta",
    appstore: "APPSTORE",
    appstore_welcome: "Willkommen im Appstore vom LSS Manager",
    appstore_desc: "Hier findest du verschiedene Plugins, die dein Spielerlebnis bereichern sollen. Jedes Plugin kann einzeln aktiviert werden, indem du den Hebel auf Grün stellst. Sollte es zu irgendwelchen Problemen kommen, kannst du uns gerne eine Nachricht schreiben oder <a href=\"" + lssm.config.forum_link + "\" target=\"blank\">im Forum einen Beitrag verfassen</a>.",
    back_lss: "Zurück zu Leistellenspiel",
    settings: "Einstellungen",
    saving: "Speichere...",
    save: "Speichern",
    cantactivate: "kann nicht aktiviert werden, da es mit folgenden Modul(en) inkompatibel ist:",
    cantload: "<h2>LSS-Manager konnte nicht geladen werden</h2>Bitte kontaktiere ein Mitglied vom Entwicklerteam.",
    login: "Bitte zuerst anmelden",
    apps: {}
};
I18n.translations.en['lssm'] = {
    lssm: "LSS-Manager",
    version: "Beta",
    appstore: "APPSTORE",
    appstore_welcome: "Welcome to the appstore of LSS Manager",
    appstore_desc: "Here you will find various plugins that will enrich your playing experience. Each plugin can be activated individually by placing the lever on green. If there are any problems, you can write us a message or <a href=\"" + lssm.config.forum_link + "\" target=\"blank\">write a message in the forum</a>.",
    back_lss: "Back to missionchief",
    settings: "Settings",
    saving: "Saving...",
    save: "Save",
    cantactivate: "can't be activated as it's incompatible with the following modul(es):",
    cantload: "<h2>LSS-Manager could not be loaded</h2>Please contact a member of the development team.",
    login: "Please log in first",
    apps: {}
};
I18n.translations.nl['lssm'] = {
    lssm: "LSS-Manager",
    appstore: "App winkel",
    appstore_welcome: "Welkom bij de App winkel van LSS Manager",
    appstore_desc: "Dit zijn verschillende plug-ins die uw game-ervaring zal verbeteren. Elke plugin kan individueel worden geactiveerd, door te vragen de hendel naar groen. Mochten er problemen zijn, kunt u <a href=\"" + lssm.config.forum_link + "\" target=\"blank\">een bericht plaatsen of een bericht posten op het forum zoals wij</a>.",
    back_lss: "Terug naar meldkamerspel",
    apps: {}
};


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


lssm.Module = {
    keyboardAlert: {
        name: {
            de: 'Keyboard Alarmierung',
            en: 'Callview control'
        },
        active: false,
        description: {
            de: 'Einsatzmaske mit Tastatur steuern.',
            en: 'Control the mission view with the keyboard.',
        },
        source: '/modules/lss-keyboardAlert/lss-keyboardAlert.user.js',
        develop: false,
        inframe: true, // Soll das Modul auch in iframes (mission, gebäude ...) geladen werden?
        settings: {
            has: false,
            function_code: ""
        }
    },
    Layout01: {
        name: {
            de: 'Layout 01',
        },
        active: false,
        description: {
            de: 'Ansicht mit großer Karte - Einsätze & Co mit Menu durchschaltbar. Eine Badge wie bei den Nachrichten zeigt die Einsäte/Nachrichten/Funksprüche seit dem letzten Aufruf des jeweiligen Fensters im Menu.',
            en: 'View with main focus on the map. Missions and other windows can be changed using a menu. A badge is telling you how many missions etc. you have since your last visit within that window.'
        },
        source: '/modules/lss-layout-01/layout-01.user.js',
        develop: false,
        collisions: ['Layout02', 'Layout03', 'Layout04', 'Layout05'],
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
        collisions: ['Layout01', 'Layout03', 'Layout04', 'Layout05'],
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
        source: '/modules/lss-layout-03/layout-03.user.js',
        develop: false,
        collisions: ['Layout01', 'Layout02', 'Layout04', 'Layout05', 'FMS5InMap'],
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
        source: '/modules/lss-layout-04/layout-04.user.js',
        develop: false,
        collisions: ['Layout01', 'Layout02', 'Layout03', 'Layout05', 'missionTabs'],
        settings: {
            has: false,
            function_code: ""
        }
    },
    Layout05: {
        name: {
            de: 'Layout 05'
        },
        active: false,
        description: {
            de: 'Vollständig anpassbares Layout',
        },
        source: '/modules/lss-layout-05/layout-05.user.js',
        develop: true,
        collisions: ['Layout01', 'Layout02', 'Layout03', 'Layout04'],
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
        source: '/modules/lss-MissionOut/MissionOut.user.js',
        develop: false,
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
        source: '/modules/lss-saveVGE/saveVGE.user.js',
        develop: false,
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
        source: '/modules/lss-notification_alert/Notification_alarm.user.js',
        develop: false,
        settings: {
            has: false,
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
        source: '/modules/lss-redesign-01/redesign-01.user.js',
        develop: false,
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
        source: '/modules/lss-FMS5InMap/FMS5InMap.user.js',
        develop: false,
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
        source: '/modules/lss-clock/clock.user.js',
        develop: false,
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
        source: '/modules/lss-WachenplanungOnMap/WachenplanungOnMap.user.js',
        develop: false,
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
        source: '/modules/lss-tagMissions/tagMissions.user.js',
        develop: true,
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
        source: '/modules/lss-allianceMissionlistShare/allianceMissionlistShare.user.js',
        develop: false,
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
        source: '/modules/lss-searchMissions/searchMissions.user.js',
        develop: false,
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
        source: '/modules/lss-dashboard/dashboard.user.js',
        develop: false,
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
        source: '/modules/lss-WachenHoverStati/WachenHoverStati.user.js',
        develop: false,
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
        source: '/modules/lss-RenameFZ/renameFZ.user.js',
        inframe: true,
        develop: false,
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
        source: '/modules/telemetry/telemetry.user.js',
        noapp: true, // Nicht im App-Store auflisten
        develop: false,
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
        source: '/modules/lss-mapReload/mapreload.user.js',
        noapp: true, // Nicht im App-Store auflisten
        develop: false,
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
            de: 'Zeigt den Alle Rückalamieren Button auch überhalb der Fahrzeuge an'
        },
        source: '/modules/lss-showBackAlarmAbove/showBackAlarmAbove.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    aaosearch: {
        name: {
            de: 'AAO-Suche',
            en: 'AAO-Search'
        },
        active: false,
        description: {
            de: 'Packt alle AAO\'s in ein durchsuchbares dropdown'
        },
        source: '/modules/lss-aao-search/aao-search.user.js',
        noapp: false,
        inframe: true,
        develop: false,
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
            en: 'Change the color of Missionchief.  THIS FUNCTION IS WORK IN PROGRESS'
        },
        source: '/modules/lss-recolor/recolor.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: true,
        settings: {
            has: false,
            function_code: ""
        }
    },
    heatmap: {
        name: {
            de: 'LS-Heatmap',
            en: 'LS-Heatmap'
        },
        active: false,
        description: {
            de: 'Zeigt die Dichte bestimmter Fahrzeugtypen auf der Karte an, um Versorgungslücken zu identifizieren.',
            en: 'Shows the density of selectable vehicle types on map to identify supply gaps.'
        },
        source: '/modules/lss-heatmap/LSHeatmap.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: false,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    missionTabs: {
        name: {
            de: 'Einsatztabs',
            en: 'Missiontabs'
        },
        active: false,
        description: {
            de: 'Zeigt Einsätze in eigenen Tabs an anstatt sie zu Filtern.',
            en: 'Shows the missions in own dedicated tabs instead of filtering them.'
        },
        source: '/modules/lss-missionTabs/missionTabs.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: false,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        },
        collisions: ['Layout04']
    },
    missionHelper: {
        name: {
            de: 'Einsatzhelfer',
            en: 'Missionhelper'
        },
        active: false,
        description: {
            de: 'Zeigt benötigte Fahrzeuge an!.',
            en: 'Shows required vehicles in mission mask.'
        },
        source: '/modules/lss-missionHelper/missionHelper.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    }
};

var appstore = {
    active_mods: [],
    /**
     * Checks if a module collides with other modules
     * @param mod
     * @returns {boolean}
     */
    canActivate: function (mod) {
        var ca = true;
        if ('collisions' in mod) {
            for (var c in mod.collisions) {
                var c = mod.collisions[c];
                if (this.active_mods.indexOf(c) != -1)
                    ca = false;
            }
        }
        return ca;
    },

    hideAllForSettings: function () {
        $('.' + lssm.config.prefix + '__appstore_hideForSettings').hide();
    },
    // Erstellen der Pandels
    createModulePanels: function () {
        var panels = $('<div class="row">'+
        '<div class="col-sm-4" id="apps_col_0"></div>'+
        '<div class="col-sm-4" id="apps_col_1"></div>'+
        '<div class="col-sm-4" id="apps_col_2"></div>'+
        '</div>');
        var col = 0;
        // Get all the keys of the modules
        var mods = $.map(lssm.Module, function(value, index) {
            return [index];
        });
        // Sort the module keys
        mods.sort(function (a,b){
            "use strict";
            var aName = I18n.t("lssm.apps."+a+".name").toLowerCase();
            var bName = I18n.t("lssm.apps."+b+".name").toLowerCase();
            return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        });
        for (var i in mods)
        {
            var mod = lssm.Module[mods[i]];
            // Do not show certain modules in the appstore
            if ('noapp' in mod && mod.noapp === true)
                continue;
            var panel = $('<div style="margin-top:10px;"'+(mod.develop ? ' class="lssm_module_develop"' : '')+'">' +
                '<div class="panel panel-default" style="display: inline-block;width:100%;">' +
                '<div class="panel-body">' +
                '<span class="pull-right">' +
                '<div class="onoffswitch">' +
                '<input class="onoffswitch-checkbox" id="lssm_modules_' + mods[i] + '" ' + (mod.active ? 'checked="true"' : '') + ' value="' + mods[i] + '"name="onoffswitch" type="checkbox">' +
                '<label class="onoffswitch-label" for="lssm_modules_' + mods[i] + '"></label>' +
                '</div>'+
                '</span>' +
                '<h4>' + I18n.t('lssm.apps.' + mods[i] + '.name') + '</h4>' +
                '<small style="display:none">' + I18n.t('lssm.apps.' + mods[i] + '.description') + '</small>' +
                '</div>' +
                //'<div class="panel-footer">' +
                //'<a href="' + lssm.config.github + mod.ghuser + '">Github</a><div class="pull-right"><span>' + mod.version + '</span> / <span>' + mod.copyright + '</span>' +
                //'</div>' +
                '</div>' +
                '</div>');
            panel.find("h4").on("click", function(){
                "use strict";
                var next = $(this).next();
                if(next.is(":hidden"))
                {
                    next.slideDown("slow");
                } else {
                    next.slideUp("slow");
                }
            });
            panels.find("#apps_col_"+col).append(panel);
            col++;
            if(col>2)
                col = 0;
        }
        return panels;
    },

    // Packt alle ModulPanels in ein Div zudem werden beim an und ausschalten die Einstellungen ge?ndert  & gespeichert;
    // TODO: DIV mit ID so wie CSS ausstatten & festlegen wo es eingebettet werden soll
    createModuleMain: function () {
        var prefix = lssm.config.prefix + '_appstore';
        var div = $(
          '<div class="col-md-12 lssm_appstore" id="' + prefix + '">'+
            '<div class="jumbotron">'+
              '<h1>' + I18n.t('lssm.appstore') + '</h1>'+
              '<p>' + I18n.t('lssm.appstore_welcome') + '.</p>'+
              '<p>' + I18n.t('lssm.appstore_desc') + '</p> <br>'+
              '<p><button type="button" class="btn btn-grey btn-sm" id="' + prefix + '_close" aria-label="Close">'+
                '<span aria-hidden="true">' + I18n.t('lssm.back_lss') + '</span>'+
              '</button></p>'+
              '<span class="pull-right"><small>MADE BY:</small>&nbsp;'+
              '<span class="label label-primary">'+
                '<a href="https://www.leitstellenspiel.de/profile/81460" target="_blank" class="username-link">@lost</a>&nbsp;'+
                '<a href="https://www.leitstellenspiel.de/messages/new?target=lost" target="_blank" class="username-link">'+
                  '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>'+
                '</a>'+
              '</span>&nbsp;'+
              '<span class="label label-primary">'+
                '<a href="https://www.leitstellenspiel.de/profile/168556" target="_blank" class="username-link">@Northdegree</a>&nbsp;'+
                '<a href="https://www.leitstellenspiel.de/messages/new?target=Northdegree" target="_blank" class="username-link">'+
                  '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>'+
                '</a>'+
              '</span>&nbsp;'+
              '<span class="label label-primary">'+
                '<a href="https://www.leitstellenspiel.de/profile/201213" target="_blank" class="username-link">@Mausmajor</a>&nbsp;'+
                '<a href="https://www.leitstellenspiel.de/messages/new?target=Mausmajor" target="_blank" class="username-link">'+
                  '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>'+
                '</a>'+
              '</span>&nbsp;'+
              '<span class="label label-primary">'+
                '<a href="https://www.leitstellenspiel.de/profile/359760" target="_blank" class="username-link">@DLRG-Dominik</a>&nbsp;'+
                '<a href="https://www.leitstellenspiel.de/messages/new?target=DLRG-Dominik" target="_blank" class="username-link">'+
                  '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>'+
                '</a>'+
              '</span>'+
            '</div>'+
          '</div>'
        );

        var self = this;
        div.on('change', '.onoffswitch-checkbox', function (ev) {
            var e = ev.target;
            if (e.checked && !self.canActivate(lssm.Module[e.value])) {
                $(e).prop('checked', false);
                var warn = "\"" + I18n.t('lssm.apps.' + e.value + '.name') + "\" " + I18n.t('lssm.cantactivate');
                for (var c in lssm.Module[e.value].collisions) {
                    var c = lssm.Module[e.value].collisions[c];
                    if (self.active_mods.indexOf(c) != -1)
                        warn += "\r\n" + I18n.t('lssm.apps.' + c + '.name');
                }
                alert(warn);
                return;
            }
            if (e.checked) {
                self.active_mods.push(e.value);
            } else {
                self.active_mods.splice(self.active_mods.indexOf(e.value), 1);
            }
            lssm.Module[e.value].active = e.checked;
        });
        div.append(this.createModulePanels());
        return div;
    },

    // Menüpunkt zu den Modulen / Einstellungen / Dashboard
    appendAppstore: function () {
        // Variablen setzen für weitere Verwendung
        var prefix = lssm.config.prefix + '_appstore';
        var settingButton = $('<li role="presentation" id="' + prefix + '"><a id="' + prefix + '_activate" href="#">' + I18n.t('lssm.appstore') + '</a></li>');
        var div = $('<div class="row" id="' + prefix + '_row"></div>').append(this.createModuleMain());
        var content = $('#navbar-mobile-footer').prev();
        // hier ist alles drin
        content.attr('id', 'content');
        var self = this;
        //div.append(createModulePanels());
        settingButton.click(function () {
            // versteckt den Hauptkörper von LSS und öffnet das LSS Manager Einstellungsfenster / den Appstore
            content.hide().after(div);
            $('footer').hide();
            $('#' + prefix + '_close').click(function () {
                self.closeAppstore();
            });
        });
        // einhängen des Buttons in der Navi
        $('#' + lssm.config.prefix + '_menu').append(settingButton);
    },
    closeAppstore: function() {
        "use strict";
        var action = this.checkModChanges();
        module.saveall();
        if(action == "Reload") {
            console.log("reload");
            location.reload();
        }
        else
        {
            for (var m in action)
                module.load(action[m]);
            $('#'+lssm.config.prefix + '_appstore_row').remove();
            $('#content').show();
            $('footer').show();
        }
    },

    /**
     * Check if modules have been activated/deactivated and tell the caller what to do.
     * Returns: "Reload" or a array of modules to load
     */
    checkModChanges: function() {
        "use strict";
        //this.active_mods
        var activated = [];
        var deactivated = [];
        var modules = lssm_settings.get("Modules", {});
        for (var m in lssm.Module)
        {
            // Wenn das Modul in modules true ist, aber nicht mehr in active_mods -> Wurde deaktiviert
            // Wenn das Modul in modules false ist, aber in active_mods -> Wurde aktiviert
            if (modules[m] && this.active_mods.indexOf(m) == -1) {
                deactivated.push(m);
            }
            else if ((!modules[m]) && this.active_mods.indexOf(m) != -1) {
                activated.push(m);
            }
        }
        if(deactivated.length > 0)
        {
            return "Reload";
        }
        return activated;
    },

    createDropDown: function () {
        var lssm_dropdown = $(' <li class="dropdown" id="' + lssm.config.prefix + '_dropdown">'+
                '<a href="#" id="' + lssm.config.prefix + '_menu_switch" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">'+
                    '<span class="label label-success">' + I18n.t('lssm.lssm') + '</span> <b class="caret"></b>'+
                '</a>'+
                '<ul id="' + lssm.config.prefix + '_menu"class="dropdown-menu" role="menu" aria-labelledby="' + lssm.config.prefix + '_menu_switch"> </ul>'+
                '</li>');
        $('#navbar-main-collapse > ul').append(lssm_dropdown);
    },
};

var lssm_settings = {
    // Set a value to the localstorage
    set: function(key, value) {
        "use strict";
        if (typeof value == "object")
            // We have a object, parse it to json and save it.
            localStorage.setItem(lssm.config.prefix +'_'+ key, JSON.stringify(value));
        else
            // Otherwise we save the raw value
            localStorage.setItem(lssm.config.prefix +'_'+ key, value);
    },

    // Get a config value from localstorage
    get: function(key, defaultvalue) {
        "use strict";
        if (typeof defaultvalue == "undefined")
        // defaultvalue is not set, return null if nothing found
            defaultvalue = null;
        var data;
        try {
            // Try to parse the config string as json
            data = JSON.parse(localStorage.getItem(lssm.config.prefix +'_'+key)) || defaultvalue;
        } catch (e) {
            // Couldn't parse the config value as json. Return the raw value
            data = (localStorage.getItem(lssm.config.prefix +'_'+key)) || defaultvalue;
        }
        return data;
    },

    // Remove a config value from localstorage
    remove: function(key) {
        "use strict";
        localStorage.removeItem(key);
    }
};

var module = {
    saveall: function()
    {
        "use strict";
        var arr = {};
        for (var i in lssm.Module)
            arr[i] = lssm.Module[i].active;
        lssm_settings.set("Modules", arr);
    },
    // Zum zwischenspeichern der schon geladenen Module
    addLocales: function(module) {
        var mod = module.toString();
        if (mod in lssm.Module) {
            var keys = ['name', 'description'];
            for (var k in keys) {
                k = keys[k];
                if (!k in lssm.Module[mod])
                    continue;
                for (var l in lssm.Module[mod][k]) {
                    l = l.toString();
                    if (!(mod in I18n.translations[l]['lssm']['apps'])) {
                        I18n.translations[l]['lssm']['apps'][mod] = {}
                    }
                    I18n.translations[l]['lssm']['apps'][mod][k] = lssm.Module[mod][k][l];
                }
            }
        }
    },
    loadall: function() {
        "use strict";
        try {
            for (var m in lssm.Module) {
                this.load(m);
            }
        } catch (e) {
            console.log("LOADALL: "+ e.message);
        }
    },

    load: function(module) {
        try {
            var path = window.location.pathname.length;
            var uid = "";
            if (typeof user_id != "undefined")
                var game = window.location.hostname.toLowerCase().replace("www.","").split(".")[0];
                uid = "?uid="+game+user_id;
            this.addLocales(module);
            if (lssm.Module[module].active && lssm.Module.status != 'develop' && appstore.canActivate(lssm.Module[module])) {
                if (path <= 2 || ("inframe" in lssm.Module[module] && lssm.Module[module].inframe == true)) {
                    appstore.active_mods.push(module);
                    $('body').append('<script src="' + lssm.config.server + lssm.Module[module].source + uid +'" type="text/javascript"></script>');
                }
            }
        } catch (e) {
            console.log("On module load: "+e.message);
        }
    }
};


(function (I18n, $) {
    $("head").prepend('<link href="' + lssm.config.server + '/lss-manager-v3/css/main.css" rel="stylesheet" type="text/css">');
    appstore.createDropDown();
    $('#' + lssm.config.prefix + '_menu').prepend('<li class="menu-center">' + I18n.t('lssm.version') + ': ' + lssm.config.version + '</li><li class="divider"></li>');
    // Only execute everything else if user is logged in
    if (typeof user_id == "undefined") {
        $('#' + lssm.config.prefix + '_menu').append('<li class="menu-center">' + I18n.t('lssm.login') + '</li>');
    } else {
        $.get(lssm.config.server + '/lss-manager-v3/helperfunctions.js')
            .fail(function () {
                $("#map_outer").before('<div class="alert alert-danger alert-dismissable" style="text-align:center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + I18n.t('lssm.cantload') + '</div>');
            })
            .done(function () {
                loadCore();
            });

        function loadCore() {
            var game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            var uid = "uid=" + game + user_id + "&";
            // alle Settings die immer wieder benötigt werden
            $("head").append('<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="   +crossorigin="anonymous"></script>')
                .append('<script src="' + lssm.config.server + '/lss-manager-v3/js/highcharts.min.js" type="text/javascript"></script>')
                .append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css">');

            // laden der Einstellungen
            var modules = lssm_settings.get('Modules') || {};
            for (var i in modules) {
                var modname = i.toString();
                if ((modname in lssm.Module) === false) {
                    console.log(modname + " is not a valid app. Skipping.");
                    continue;
                }
                if (lssm.Module[i].active == false)
                    lssm.Module[i].active = modules[i];
            }

            module.loadall();
            appstore.appendAppstore();
        }
    }
})(I18n, jQuery);
