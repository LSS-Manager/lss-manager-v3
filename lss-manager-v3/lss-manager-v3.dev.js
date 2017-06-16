//██╗.....███████╗███████╗....███╗...███╗.█████╗.███╗...██╗.█████╗..██████╗.███████╗██████╗
//██║.....██╔════╝██╔════╝....████╗.████║██╔══██╗████╗..██║██╔══██╗██╔════╝.██╔════╝██╔══██╗
//██║.....███████╗███████╗....██╔████╔██║███████║██╔██╗.██║███████║██║..███╗█████╗..██████╔╝
//██║.....╚════██║╚════██║....██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║...██║██╔══╝..██╔══██╗
//███████╗███████║███████║....██║.╚═╝.██║██║..██║██║.╚████║██║..██║╚██████╔╝███████╗██║..██║
//╚══════╝╚══════╝╚══════╝....╚═╝.....╚═╝╚═╝..╚═╝╚═╝..╚═══╝╚═╝..╚═╝.╚═════╝.╚══════╝╚═╝..╚═╝


/**
 * Tell jQuery to allow caching beforehand!
 */
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    if ( options.dataType == 'script' || originalOptions.dataType == 'script' ||
        options.dataType == 'stylesheet' || originalOptions.dataType == 'stylesheet') {
        options.cache = true;
    }
});

/**
 * Make case insensetive :contains() possible
 */
jQuery.expr[':'].containsci = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
};

var lssm = {
    config: {
        server: "https://lss-manager.de/lss-entwicklung", // Domain wo alles liegt
        stats_uri: "https://proxy.lss-manager.de/stat.php",
        forum_link: "https://forum.leitstellenspiel.de/index.php/Thread/11166-LSS-MANAGER-V3/",
        version: "3.2.3",
        github: 'https://github.com/LSS-Manager/lss-manager-v3',
        prefix: 'lssm'
    },
    loadScript: function(link) {
        try {
            var path = window.location.pathname.length;
            var uid = "";
            if (typeof user_id != "undefined")
                var game = window.location.hostname.toLowerCase().replace("www.","").split(".")[0];
            uid = "?uid="+game+user_id;
            //$('body').append('<script src="' + this.config.server + link + uid +'" type="text/javascript"></script>');
            $.getScript(this.config.server + link + uid);
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
            $('body').append('<link href="' + this.getlink(link) +'" rel="stylesheet" type="text/css">');
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
 * Localization
 */
I18n.defaultLocale = 'de';
I18n.fallbacks = true;
I18n.locales.nl = ['nl', 'en', 'de'];
I18n.translations.de['lssm'] = {
    lssm: "LSS-Manager",
    version: "Beta",
    appstore: "APPSTORE",
    appstore_welcome: "Willkommen im Appstore vom LSS Manager",
    appstore_desc: "Hier findest du verschiedene Plugins, die dein Spielerlebnis bereichern sollen. Jedes Plugin kann einzeln aktiviert werden, indem du den Hebel auf Grün stellst. Sollte es zu irgendwelchen Problemen kommen, kannst du uns gerne eine Nachricht schreiben oder <a href=\"" + lssm.config.forum_link + "\" target=\"blank\">im Forum einen Beitrag verfassen</a>.",
    back_lss: "Zurück zu Leitstellenspiel",
    settings: "Einstellungen",
    saving: "Speichere...",
    save: "Speichern",
    cantactivate: "kann nicht aktiviert werden, da es mit folgenden Modul(en) inkompatibel ist:",
    activated: "Folgende Module wurden aktiviert:",
    cantload: "<h2>LSS-Manager konnte nicht geladen werden</h2>Bitte kontaktiere ein Mitglied vom Entwicklerteam.",
    login: "Bitte zuerst anmelden",
    apps: {}
};
I18n.translations.en['lssm'] = {
    lssm: "LSS-Manager",
    version: "Beta",
    appstore: "APPSTORE",
    appstore_welcome: "Welcome to the lssm.appstore of LSS Manager",
    appstore_desc: "Here you will find various plugins that will enrich your playing experience. Each plugin can be activated individually by placing the lever on green. If there are any problems, you can write us a message or <a href=\"" + lssm.config.forum_link + "\" target=\"blank\">write a message in the forum</a>.",
    back_lss: "Back to missionchief",
    settings: "Settings",
    saving: "Saving...",
    save: "Save",
    activated: "Following Modules have been activated:",
    cantactivate: "can't be activated as it's incompatible with the following modul(es):",
    cantload: "<h2>LSS-Manager could not be loaded</h2>Please contact a member of the development team.",
    login: "Please log in first",
    apps: {}
};
I18n.translations.nl['lssm'] = {
    lssm: "LSS-Manager",
    appstore: "App Store",
    appstore_welcome: "Welkom bij de App Store van LSS Manager",
    appstore_desc: "Hier vindt u verschillende plug-ins die uw game-ervaring kunnen verbeteren. Elke plugin kan individueel worden geactiveerd, de bijbehorende hendel op groen te zetten. Mochten er problemen zijn, kunt u <a href=\"" + lssm.config.forum_link + "\" target=\"blank\">ons een bericht sturen of een bericht posten in ons topic op het forum.</a>.",
    back_lss: "Terug naar Meldkamerspel",
    settings: "Instellingen",
    saving: "Wijzigingen aan het opslaan...",
    save: "Opslaan",
    activated: "De volgende modules zijn geactiveerd:",
    cantactivate: "Kan niet worden geactiveerd omdat deze lssm_module niet samenwerkt met de volgende lssm_module(s):",
    apps: {}
};

/**
 * Add the modules to lssm
 */
lssm.Module = {
    keyboardAlert: {
        name: {
            de: 'Keyboard Alarmierung',
            en: 'Callview control',
            nl: 'Besturing met toetsenbord'
        },
        active: false,
        description: {
            de: 'Einsatzmaske mit Tastatur steuern.',
            en: 'Control the mission view with the keyboard.',
            nl: 'Bestuur het meldingscherm met het toetsenbord.'
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
            en: 'View with main focus on the map. Missions and other windows can be changed using a menu. A badge is telling you how many missions etc. you have since your last visit within that window.',
            nl: 'Design met een extra grote kaartweergave aan de linkerkant. Aan de rechterkant van het scherm kan met menuknoppen tussen de andere schermen gewisseld worden. Een teller houdt het aantal bericheten en meldingen voor je bij.'
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
            en: 'View with 100% map at the upper area - below that the four windows calls, buildings, chat and radio.',
            nl: 'Design met een grote kaart bovenaan je scherm. onder de kaart zijn de vier overige schermen; meldingen, gebouwen, chat en statusmeldingen weergegeven.'
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
            en: 'Layout without map. The four windows are using 100% of the given browser height.',
            nl: 'Design zonder kaart. De vier overige schermen vullen het gehele scherm.'
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
            en: 'Map with 100% height on the left side. Next to it the calls, each category in its own column. Below that the buildings, chat and radio.',
            nl: 'Design met een langwerpige kaart aan de linkerzijde van het scherm. Daarnaast een groot overzicht van de meldingen en daaronder hebben de overige schermen een eigen kolom'
        },
        source: '/modules/lss-layout-04/layout-04.user.js',
        develop: false,
        collisions: ['Layout01', 'Layout02', 'Layout03', 'Layout05'],
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
  