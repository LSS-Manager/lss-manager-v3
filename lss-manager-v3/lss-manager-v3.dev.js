//██╗.....███████╗███████╗....███╗...███╗.█████╗.███╗...██╗.█████╗..██████╗.███████╗██████╗
//██║.....██╔════╝██╔════╝....████╗.████║██╔══██╗████╗..██║██╔══██╗██╔════╝.██╔════╝██╔══██╗
//██║.....███████╗███████╗....██╔████╔██║███████║██╔██╗.██║███████║██║..███╗█████╗..██████╔╝
//██║.....╚════██║╚════██║....██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║...██║██╔══╝..██╔══██╗
//███████╗███████║███████║....██║.╚═╝.██║██║..██║██║.╚████║██║..██║╚██████╔╝███████╗██║..██║
//╚══════╝╚══════╝╚══════╝....╚═╝.....╚═╝╚═╝..╚═╝╚═╝..╚═══╝╚═╝..╚═╝.╚═════╝.╚══════╝╚═╝..╚═╝
/**
 * Tell jQuery to allow caching beforehand!
 */
$.ajaxPrefilter(function (options, originalOptions) {
    if (options.dataType === 'script' || originalOptions.dataType === 'script' ||
        options.dataType === 'stylesheet' || originalOptions.dataType === 'stylesheet') {
        options.cache = true;
    }
});

/**
 * Make case insensetive :contains() possible
 */
jQuery.expr[':'].containsci = function (a, i, m) {
    return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
};

var lssm = {
    config: {
        //server: "https://localhost/lss-manager-v3",
        server: "https://lss-manager.de/lss-entwicklung", // Domain wo alles liegt
        stats_uri: "https://proxy.lss-manager.de/stat.php",
        forum_link: "https://forum.leitstellenspiel.de/index.php/Thread/11166-LSS-MANAGER-V3/",
        version: "3.2.4",
        github: 'https://github.com/LSS-Manager/lss-manager-v3',
        prefix: 'lssm'
    },
    loadScript: function (link) {
        try {
            var uid = "";
            var game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            //$('body').append('<script src="' + this.config.server + link + uid +'" type="text/javascript"></script>');
            $.getScript(this.config.server + link + uid);
        } catch (e) {
            console.log("On script load: " + e.message);
        }
    },
    loadStyle: function (link) {
        try {
            var uid = "";
            var game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            $('body').append('<link href="' + this.getlink(link) + '" rel="stylesheet" type="text/css">');
        } catch (e) {
            console.log("On script load: " + e.message);
        }
    },
    getlink: function (file) {
        try {
            var uid = "";
            var game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            return this.config.server + file + uid;
        } catch (e) {
            console.log("On script load: " + e.message);
        }
    },
};

/**
 * Localization
 */
I18n.defaultLocale = 'de';
I18n.fallbacks = true;
I18n.locales.nl = ['nl', 'en', 'de'];
I18n.translations.de.lssm = {
    lssm: "LSS-Manager",
    version: "Beta",
    appstore: "APPSTORE",
    appstore_welcome: "Willkommen im Appstore vom LSS Manager",
    appstore_desc: "Hier findest du verschiedene Plugins, die dein Spielerlebnis bereichern sollen. Jedes Plugin kann einzeln aktiviert werden, indem du den Hebel auf Grün stellst. Sollte es zu irgendwelchen Problemen kommen, kannst du uns gerne eine Nachricht schreiben oder <a href=\"" +
    lssm.config.forum_link + "\" target=\"blank\">im Forum einen Beitrag verfassen</a>.",
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
I18n.translations.en.lssm = {
    lssm: "LSS-Manager",
    version: "Beta",
    appstore: "APPSTORE",
    appstore_welcome: "Welcome to the lssm.appstore of LSS Manager",
    appstore_desc: "Here you will find various plugins that will enrich your playing experience. Each plugin can be activated individually by placing the lever on green. If there are any problems, you can write us a message or <a href=\"" +
    lssm.config.forum_link + "\" target=\"blank\">write a message in the forum</a>.",
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
I18n.translations.nl.lssm = {
    lssm: "LSS-Manager",
    appstore: "App Store",
    appstore_welcome: "Welkom bij de App Store van LSS Manager",
    appstore_desc: "Hier vindt u verschillende plug-ins die uw game-ervaring kunnen verbeteren. Elke plugin kan individueel worden geactiveerd, de bijbehorende hendel op groen te zetten. Mochten er problemen zijn, kunt u <a href=\"" +
    lssm.config.forum_link +
    "\" target=\"blank\">ons een bericht sturen of een bericht posten in ons topic op het forum.</a>.",
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
        description: {
            de: 'Vollständig anpassbares Layout',
            nl: 'Een volledig aanpasbaar design'
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
            de: 'MissionOut',
            nl: 'Meldingen inklappen'
        },
        active: false,
        description: {
            de: 'Alle Einsätze ein/ausklappen oder für jeden Einsatz einzeln.',
            en: 'Minimize mission list entries. You can either expand or minimize all calls at once or do it for each one.',
            nl: 'Verkleint de meldingen in de lijst. Je kunt alle meldingen verkleint weergeven of per melding kiezen.'
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
            en: 'Save created alliance calls',
            nl: 'Zelgemaakte inzetten opslaan.'
        },
        active: false,
        description: {
            de: 'Funktion um sebst erstlle VGE zu speichern.',
            en: 'Enables a function to save own created mission calls to use them as template.',
            nl: 'Maakt het mogelijk om zelgemaakte inzetten op te slaan als sjabloon zodat je ze latet nog eens kan gebruiken.'
        },
        source: '/modules/lss-saveVGE/saveVGE.user.js',
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    coinConfirm: {
        name: {
            de: 'Coin Confirm',
            en: 'Coin Confirm'
        },
        active: false,
        inframe: true,
        description: {
            de: 'Fordert zur Bestätigung bei Coin Ausgaben auf, um versehendliche Ausgaben zu vermeiden. (Ohne Gewähr)',
            en: 'Asks for confirmation on coin spendings to avoid mistakes. (Without warranty)'
        },
        source: '/modules/lss-coinconfirm/CoinConfirm.user.js',
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    releaseNotes: {
        name: {
            de: 'Release Notes',
            en: 'Release Notes'
        },
        active: false,
        inframe: false,
        description: {
            de: 'Informiert immer über die Neusten Updates im LSSM',
            en: 'Provides information about the latest updates in LSSM'
        },
        source: '/modules/lss-releasenotes/Releasenotes.user.js',
        develop: true,
        settings: {
            has: false,
            function_code: ""
        }
    },
    vonginator: {
        name: {
            de: 'Vonginator',
            en: 'Vonginator'
        },
        active: false,
        inframe: true,
        description: {
            de: 'Hallo i bims. 1 total sinnlose Skript vong Bedeutung her. lol',
            en: 'Not seriously meant script for german language only.'
        },
        source: '/modules/lss-vonginator/Vonginator.user.js',
        supportedLocales: ['de'],
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    Notification_Alert: {
        name: {
            de: 'Notification Alert',
            nl: 'Browsermeldingen'
        },
        active: false,
        description: {
            de: 'Zeigt eine HTML-5 Notification an sobald ein Status oder eine Nachricht eingegangen ist. (ChatPoput included)',
            en: 'HTML5 Chatnotifications using the browser notificationsystem.',
            nl: 'Toon HTML5 chatnotificaties met behulp van het notificatiesysteem van je browser zodat je nooit meer een chat of melding hoeft te missen.'
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
            en: 'New design for the game.',
            nl: 'Een nieuw uiterlijk voor het spel.'
        },
        source: '/modules/lss-redesign-01/redesign-01.user.js',
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    DestinationFilter: {
        name: {
            de: 'Zielort Filter',
            en: 'Destination filter'
        },
        active: false,
        description: {
            de: 'Ermöglicht belegte oder ungeeignete KH auszublenden',
            en: 'Allows hiding full or unelegible hospitals'
        },
        source: '/modules/lss-destinationFilter/DestinationFilter.user.js',
        develop: false,
        inframe: true,
        settings: {
            has: false,
            function_code: ""
        }
    },
    FMS5InMap: {
        name: {
            de: 'FMS 5 in der Karte',
            en: 'Request transport in map',
            nl: 'Spraakaanvragen op de kaart weergeven.'
        },
        active: false,
        description: {
            de: 'Zeigt alle FMS 5 in der Karte an.',
            en: 'Shows request transports within the map lower left corner.',
            nl: 'Toont alle spraakaanvragen op de kaart.'
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
            de: 'Clock',
            nl: 'Klok'
        },
        active: false,
        description: {
            de: 'Zeigt eine Uhr in der Karte an.',
            en: 'Enables a small clock within the map.',
            nl: 'Toont een kleine klok op de kaart.'
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
            en: 'Station management on map',
            nl: 'Gebouwplanning op de kaart.'
        },
        active: false,
        description: {
            de: 'Zeichnet Kreise im Radius X um deine Wachen. Der Radius kann selbst bestimmt werden & die Gebäude sind wählbar.',
            en: 'Draws circles around buildings with your chosen radius in kilometer. You can also filter for specific buildings.',
            nl: 'Toont cirkels met een zelf in te stellen radius rondom gebouwen. Je kunt ook filteren op specifieke gebouwen.'
        },
        source: '/modules/lss-WachenplanungOnMap/WachenplanungOnMap.user.js',
        develop: false,
        settings: {
            has: false,
            function_code: ""
        },
        collisions: ['Layout03', 'FMS5InMap', 'heatmap']
    },
    tagMissions: {
        name: {
            de: 'Einsätze markieren',
            en: 'Mark calls',
            nl: 'Meldingen markeren.'
        },
        active: false,
        description: {
            de: 'Wurde ins Spiel integriert, vorerst deaktiviert.',
            en: 'Got inplemented into the game - deactivated for now.',
            nl: 'Zit in het spel ingebouwd - momenteel gedeactiveerd.'
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
            en: 'Mission share',
            nl: 'Meldingen vrijgeven'
        },
        active: false,
        description: {
            de: 'Mit einem klick in der Übersicht, ohne den Einsatz zu öffnen, freigeben.',
            en: 'Instantly share missions without opening the call by clicking a button in the overview.',
            nl: 'Vanuit het hoofdscherm gemakkelijk meldingen vrijgeven in je team met behulp van een extra knop in de meldingenlijst.'
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
            en: 'Mission search',
            nl: 'Meldingen doorzoeken'
        },
        active: false,
        description: {
            de: 'In der Übersicht Einsätze suchen & filtern. In der Alarmmaske diese Liste mit Buttons durchgehen.',
            en: 'Search for calls & filter them - a group of buttons on the bottom lets you change searched missions quickly.',
            nl: 'In het overzicht meldingen zoeken en filteren. Een rij knoppen aan de onderkant van het scherm laat je snel door je meldingen bladeren.'
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
            en: 'Dashboard',
            nl: 'Een Dashboard waarin je een duidelijk overzicht krijgt van je gebouwen en voertuigen.'
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
            en: 'Station status',
            nl: 'Voertuigstatus bij gebouwen'
        },
        active: false,
        description: {
            de: 'Zeigt beim drüberfahren einer Wache auf der Karte die Status der Fahrzeuge an.',
            en: 'Shows the code of vehciles on station hover on the map.',
            nl: 'Toont de status van voertuigen van een gebouw als je je muis boven het gebouw houdt.'
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
            en: 'Rename vehicle',
            nl: 'Voertuigen herbenoemen'
        },
        active: false,
        description: {
            de: 'Fahrzeuge in bulk mit Tags umbennenen.',
            en: 'Rename vehicles in bulk using tags.',
            nl: 'Maakt het makkelijk om grote hoeveelheiden voertuigen snel van een nieuwe naam te voorzien met behulp van tags.'
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
            en: 'Telemetry',
            nl: 'Telemetrie'
        },
        active: true,
        description: {
            de: 'Sendet Daten an das Entwicklerteam zur Erstellung einer Statistik',
            en: 'Sends data to the developer team for the purpose of creating a statistic',
            nl: 'Stuurt gegevens naar het developmentteam om statistieken te kunnen gebruiken.'
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
            de: 'Map Reload',
            nl: 'Kaart opnieuw laden'
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
            en: 'show Back Alarm Above',
            nl: 'Extra annuleerknop'
        },
        active: false,
        description: {
            de: 'Zeigt den Alle Rückalamieren Button auch überhalb der Fahrzeuge an',
            nl: 'Voegt een extra annuleerknop toe bovenaan de voertuiglijst.'
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
            en: 'AAO-Search',
            nl: 'AUR-zoekfuncties'
        },
        active: false,
        description: {
            de: 'Packt alle AAO\'s in ein durchsuchbares dropdown',
            nl: 'Maakt het mogelijk om de Alarm en Uitrukregels te doorzoeken met een dropdownmenu.'
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
            en: 'Colorize',
            nl: 'Hoofdkleur veranderen'
        },
        active: false,
        description: {
            de: 'Ändere die Farbe des Leitstellenspiels. THIS FUNCTION IS WORK IN PROGRESS',
            en: 'Change the color of Missionchief.  THIS FUNCTION IS WORK IN PROGRESS',
            nl: 'Verander de kleur van meldkamerspel. DEZE FUNCTIE IS NOG IN AANBOUW.'
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
            en: 'LS-Heatmap',
            nl: 'Voertuigspreiding weergeven'
        },
        active: false,
        description: {
            de: 'Zeigt die Dichte bestimmter Fahrzeugtypen auf der Karte an, um Versorgungslücken zu identifizieren.',
            en: 'Shows the density of selectable vehicle types on map to identify supply gaps.',
            nl: 'Maakt het mogelijk om de verspreiding per voertuigsoort te zien. Hiermee kun je zien waar je nog extra voertuigen nodig hebt voor optimale dekking van je inzetgebied.'
        },
        source: '/modules/lss-heatmap/LSHeatmap.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: false,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        },
        collisions: ['Layout03', 'WachenplanungOnMap']
    },
    centermap: {
        name: {
            de: 'Center-Map',
            en: 'Center-Map'
        },
        active: false,
        description: {
            de: 'Zentriert die Karte beim Aufruf des Spiels und bei Knopfdruck. Genau so wie du es möchtest.',
            en: 'Centers the map on page load and on click. Just as you prefer.'
        },
        source: '/modules/lss-centermap/Centermap.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: false,
        develop: false,
        settings: {
            has: false,
            function_code: "CenterMap_show_settings"
        }
    }, /*
     missionTabs: {
     name: {
     de: 'Einsatztabs',
     en: 'Missiontabs',
     nl: 'Meldingtabbladen'
     },
     active: false,
     description: {
     de: 'Zeigt Einsätze in eigenen Tabs an anstatt sie zu Filtern.',
     en: 'Shows the missions in own dedicated tabs instead of filtering them.',
     nl: 'Geeft de Meldingen in tabbladen weer.'
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
     },*/
    missionHelper: {
        name: {
            de: 'Einsatzhelfer',
            en: 'Missionhelper',
            nl: 'Meldinghelper'
        },
        active: false,
        description: {
            de: 'Zeigt benötigte Fahrzeuge an!.',
            en: 'Shows required vehicles in mission mask.',
            nl: 'Toont de benodigde voertuigen in het meldingscherm.'
        },
        source: '/modules/lss-missionHelper/missionHelper.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    statusDispatching: {
        name: {
            de: 'Verbesserte Status 5',
            en: 'Enhanced transport requests',
            nl: 'Verbeterde spraakaanvragen'
        },
        active: false,
        description: {
            de: 'Schnellere Abarbeitung von Status 5 Meldungen.',
            en: 'Faster processing of transport requests.',
            nl: 'Sneller verwerken van spraakaanvragen.'
        },
        source: '/modules/lss-statusDispatching/statusDispatching.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false,
        settings: {
            has: false,
            function_code: "statusDispatching_show_settings"
        }
    },
    managedSettings: {
        name: {
            de: 'Einstellungen',
            en: 'Settings'
        },
        active: true,
        description: {
            de: 'Globale Einstellungen',
            en: 'Global Settings'
        },
        source: '/modules/lss-managedsettings/ManagedSettings.user.js',
        noapp: true, // Nicht im App-Store auflisten
        inframe: true,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    missionKeyword: {
        name: {
            de: 'Einsatzstichworte',
            en: 'Mission Keywords',
            nl: 'Steekwoorden bij meldingen'
        },
        active: false,
        description: {
            de: 'Anzeige von Stichworten bei Einsätzen. Die Stichworte orientieren sich weitgehend an denen für Bayern.',
            en: 'Shows keywords for missions. The keywords are oriented to those used in Bavaria.',
            nl: 'Toont steekwoorden bij de meldingen. Deze steekwoorden zijn grotendeels gebaseerd op de steekwoorden die in Nederlandse hulpverlening gebruikt worden.'
        },
        source: '/modules/lss-missionKeyword/missionKeyword.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    missionDate: {
        name: {
            de: 'Meldedatum für Einsätze',
            en: 'Mission Date',
            nl: 'Begintijd melding weergeven'
        },
        active: false,
        description: {
            de: 'Zeigt das Meldedatum und die vergangene Zeit seit Eingang an.',
            en: 'Shows the date when the mission was generated and the hours/minutes since then',
            nl: 'Deze module toont de begintijd en -datum van je melding en laat daarnaast zien hoeveel tijd er verstreken is sinds de melding binnenkwam.'
        },
        source: '/modules/lss-missionDate/missionDate.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    iconFilter: {
        name: {
            de: 'Icon Gebäude Filter',
            en: 'Icon building filter',
            nl: 'Icon building filter'
        },
        active: false,
        description: {
            de: 'Tauscht den Gebäude Filter mit Icons aus.',
            en: 'Replaces the building filter with icons.',
            nl: 'Replaces the building filter with icons.'
        },
        source: '/modules/lss-iconFilter/iconFilter.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: false,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    sumDailyMissions: {
        name: {
            de: 'Summe für die tägliche Zusammenfassung',
            en: 'Sum for daily stats',
            nl: 'Totaalweergave in dagsamenvatting'
        },
        active: false,
        description: {
            de: 'Zeigt eine Summe über Anzahl Einsätze, Patienten, Gefangene und Verbandseinlieferungen in der täglichen Zusammenfassung an.',
            en: 'Shows sums over missions, patients, prisoners and alliance in the daily stats page',
            nl: 'Geeft een totaaloverzicht van het aantal meldingen, patienten, gevangenen en teamopnames.'
        },
        source: '/modules/lss-sumDailyMissions/sumDailyMissions.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    },
    aaoZaehler: {
        name: {
            de: 'AAO-Klick-Zähler',
            en: 'Alarm-Regulations-Counter',
            nl: 'AUR-Klik-Teller'
        },
        active: false,
        description: {
            de: 'Zählt die Klicks auf einen AAO-Button',
            en: 'Counts the clicks on an alarm-regulations-button',
            nl: 'Telt het aantal keer dat een AUR aangeklikt is.'
        },
        source: '/modules/lss-AAO-Zaehler/aao-zaehler.js',
        noapp: false,
        inframe: true,
        develop: false,
        settings: {
            has: false,
            function_code: ""
        }
    }
};

/**
 * Add the appstore to LSSM
 */
lssm.appstore = {
    /**
     * Checks if a lssm_module collides with other modules
     * @param mod
     * @returns {boolean}
     */
    canActivate: function (mod) {
        var ca = true;
        // TODO: Sprechendere Variablennamen
        if ('collisions' in mod) {
            for (var c in mod.collisions) {
                var d = mod.collisions[c];
                if (lssm.Module[d].active) {
                    ca = false;
                }
            }
        }
        return ca;
    },

    hideAllForSettings: function () {
        $('.' + lssm.config.prefix + '__appstore_hideForSettings').hide();
    },
    // Erstellen der Pandels
    createModulePanels: function () {
        var panels = $('<div class="row">' +
            '<div class="col-sm-4" id="apps_col_0"></div>' +
            '<div class="col-sm-4" id="apps_col_1"></div>' +
            '<div class="col-sm-4" id="apps_col_2"></div>' +
            '</div>');
        var col = 0;
        // Get all the keys of the modules
        var mods = $.map(lssm.Module, function (value, index) {
            return [index];
        });
        // Sort the lssm_module keys
        mods.sort(function (a, b) {
            "use strict";
            var aName = I18n.t("lssm.apps." + a + ".name").toLowerCase();
            var bName = I18n.t("lssm.apps." + b + ".name").toLowerCase();
            return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        });
        for (var i in mods) {
            var mod = lssm.Module[mods[i]];
            var isSupportedLocale = !('supportedLocales' in mod) ||
                mod.supportedLocales.indexOf(I18n.currentLocale()) >= 0;
            // Do not show certain modules in the lssm.appstore or is not supported with this locale
            if ('noapp' in mod && mod.noapp === true || !isSupportedLocale) {
                continue;
            }
            var panel = $('<div style="margin-top:10px;" class="lssm_module' +
                (mod.develop ? ' lssm_module_develop' : '') + '">' +
                '<div class="panel panel-default" style="display: inline-block;width:100%;">' +
                '<div class="panel-body">' +
                '<span class="pull-right">' +
                '<div class="onoffswitch">' +
                '<input class="onoffswitch-checkbox" id="lssm.modules_' + mods[i] + '" ' +
                (mod.active ? 'checked="true"' : '') + ' value="' + mods[i] + '"name="onoffswitch" type="checkbox">' +
                '<label class="onoffswitch-label" for="lssm.modules_' + mods[i] + '"></label>' +
                '</div>' +
                '</span>' +
                '<h4>' + I18n.t('lssm.apps.' + mods[i] + '.name') + '</h4>' +
                '<small style="display:none">' + I18n.t('lssm.apps.' + mods[i] + '.description') + '</small>' +
                '</div>' +
                //'<div class="panel-footer">' +
                //'<a href="' + lssm.config.github + mod.ghuser + '">Github</a><div class="pull-right"><span>' + mod.version + '</span> / <span>' + mod.copyright + '</span>' +
                //'</div>' +
                '</div>' +
                '</div>');
            panel.find("h4").on("click", function () {
                "use strict";
                var next = $(this).next();
                if (next.is(":hidden")) {
                    next.slideDown("slow");
                } else {
                    next.slideUp("slow");
                }
            });
            panels.find("#apps_col_" + col).append(panel);
            col++;
            if (col > 2) {
                col = 0;
            }
        }
        return panels;
    },

    // Packt alle ModulPanels in ein Div zudem werden beim an und ausschalten die Einstellungen ge?ndert  & gespeichert;
    // TODO: DIV mit ID so wie CSS ausstatten & festlegen wo es eingebettet werden soll
    createModuleMain: function () {
        var prefix = lssm.config.prefix + '_appstore';
        var div = $(
            '<div class="col-md-12 lssm.appstore" id="' + prefix + '">' +
            '<div class="jumbotron">' +
            '<h1>' + I18n.t('lssm.appstore') + '</h1>' +
            '<p>' + I18n.t('lssm.appstore_welcome') + '.</p>' +
            '<p>' + I18n.t('lssm.appstore_desc') + '</p> <br>' +
            '<p>' +
            '<input type="text" class="form-control pull-right" id="' + prefix +
            '_search" placeholder="Suche" style=" width:25%;display:inline-block;">' +
            '<button type="button" class="btn btn-grey btn-sm" id="' + prefix + '_close" aria-label="Close">' +
            '<span aria-hidden="true">' + I18n.t('lssm.back_lss') + '</span>' +
            '</button></p>' +
            '<span class="pull-right"><small>MADE BY:</small>&nbsp;' +
            '<span class="label label-primary">' +
            '<a href="https://www.leitstellenspiel.de/profile/81460" target="_blank" class="username-link">@lost</a>&nbsp;' +
            '<a href="https://www.leitstellenspiel.de/messages/new?target=lost" target="_blank" class="username-link">' +
            '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>' +
            '</a>' +
            '</span>&nbsp;' +
            '<span class="label label-primary">' +
            '<a href="https://www.leitstellenspiel.de/profile/168556" target="_blank" class="username-link">@Northdegree</a>&nbsp;' +
            '<a href="https://www.leitstellenspiel.de/messages/new?target=Northdegree" target="_blank" class="username-link">' +
            '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>' +
            '</a>' +
            '</span>&nbsp;' +
            '<span class="label label-primary">' +
            '<a href="https://www.leitstellenspiel.de/profile/201213" target="_blank" class="username-link">@Mausmajor</a>&nbsp;' +
            '<a href="https://www.leitstellenspiel.de/messages/new?target=Mausmajor" target="_blank" class="username-link">' +
            '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>' +
            '</a>' +
            '</span>&nbsp;' +
            '<span class="label label-primary">' +
            '<a href="https://www.leitstellenspiel.de/profile/359760" target="_blank" class="username-link">@DLRG-Dominik</a>&nbsp;' +
            '<a href="https://www.leitstellenspiel.de/messages/new?target=DLRG-Dominik" target="_blank" class="username-link">' +
            '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>' +
            '</a>' +
            '</span>&nbsp;' +
            '<span class="label label-primary">' +
            '<a href="https://www.leitstellenspiel.de/profile/68742" target="_blank" class="username-link">@MrWeezle</a>&nbsp;' +
            '<a href="https://www.leitstellenspiel.de/messages/new?target=MrWeezle" target="_blank" class="username-link">' +
            '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>' +
            '</a>' +
            '</span>&nbsp;' +
            '<span class="label label-primary">' +
            '<a href="https://www.leitstellenspiel.de/profile/675" target="_blank" class="username-link">@SanniHameln</a>&nbsp;' +
            '<a href="https://www.leitstellenspiel.de/messages/new?target=SanniHameln" target="_blank" class="username-link">' +
            '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>' +
            '</a>' +
            '</span>' +
            '</div>' +
            '</div>'
        );
        div.on('keyup', '#' + prefix + '_search', function () {
            "use strict";
            var ss = $(this).val();
            if (ss.length > 0) {
                div.find(".lssm_module:containsci(" + ss + ")").show();
                div.find(".lssm_module:not(:containsci(" + ss + "))").hide();
            } else {
                div.find(".lssm_module").show();
            }
        });
        div.on('click', '#' + prefix + '_close', function () {
            lssm.appstore.closeAppstore();
        });
        div.on('change', '.onoffswitch-checkbox', function (ev) {
            var e = ev.target;
            if (e.checked && !lssm.appstore.canActivate(lssm.Module[e.value])) {
                $(e).prop('checked', false);
                var warn = "\"" + I18n.t('lssm.apps.' + e.value + '.name') + "\" " + I18n.t('lssm.cantactivate');
                // TODO: Sprechendere Variablennamen
                for (var c in lssm.Module[e.value].collisions) {
                    var d = lssm.Module[e.value].collisions[c];
                    if (lssm.Module[d].active) {
                        warn += "\r\n" + I18n.t('lssm.apps.' + c + '.name');
                    }
                }
                alert(warn);
                return;
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
        var settingButton = $('<li role="presentation" id="' + prefix + '"><a id="' + prefix + '_activate" href="#">' +
            I18n.t('lssm.appstore') + '</a></li>');
        var div = $('<div class="row" id="' + prefix + '_row"></div>').append(this.createModuleMain());
        var content = $('#navbar-mobile-footer').prev();
        // hier ist alles drin
        content.attr('id', 'content');
        //div.append(createModulePanels());
        settingButton.click(function () {
            // versteckt den Hauptkörper von LSS und öffnet das LSS Manager Einstellungsfenster / den Appstore
            content.hide().after(div);
            $('#' + lssm.config.prefix + '_appstore_row').show();
            $('footer').hide();
            //lssm.modal.show(div[0].innerHTML, lssm.appstore.closeAppstore);
        });
        // einhängen des Buttons in der Navi
        $('#' + lssm.config.prefix + '_menu').append(settingButton);
    },
    closeAppstore: function () {
        "use strict";
        //var action = lssm.appstore.checkModChanges();
        var action = this.checkModChanges();
        lssm.modules.saveall();
        if (action === "Reload") {
            location.reload();
        }
        else {

            $('#' + lssm.config.prefix + '_appstore_row').hide();
            $('#content').show();
            $('footer').show();
            //$(document).unbind(lssm.hook.prename("lightboxClose"),lssm.appstore.closeAppstore);
            // Inform the user about activated modules.
            var activated = "";
            for (var m in action) {
                lssm.modules.load(action[m]);
                activated += I18n.t('lssm.apps.' + action[m] + '.name') + ', ';
            }
            activated = activated.substring(0, activated.length - 2);
            if (activated.length > 0) {
                $("#content")
                    .before(
                        '<div class="alert alert-success alert-dismissable" id="lssm_activated_notify" style="text-align:center;width:90%"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
                        I18n.t('lssm.activated') + ' ' + activated + '</div>');
                setTimeout(function () {
                    $("#lssm_activated_notify").slideUp("slow", function () {
                        $("#lssm_activated_notify").remove();
                    });
                }, 2000);
            }
        }
    },

    /**
     * Check if modules have been activated/deactivated and tell the caller what to do.
     * Returns: "Reload" or a array of modules to load
     */
    checkModChanges: function () {
        "use strict";
        var activated = [];
        var deactivated = [];
        var modules = lssm.settings.get("Modules", {});
        for (var m in lssm.Module) {
            if (modules[m] && !lssm.Module[m].active) {
                deactivated.push(m);
            }
            else if ((!modules[m]) && lssm.Module[m].active) {
                activated.push(m);
            }
        }
        if (deactivated.length > 0) {
            return "Reload";
        }
        return activated;
    },

    createDropDown: function () {
        var lssm_dropdown = $(' <li class="dropdown" id="' + lssm.config.prefix + '_dropdown">' +
            '<a href="#" id="' + lssm.config.prefix +
            '_menu_switch" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">' +
            '<span class="label label-success">' + I18n.t('lssm.lssm') + '</span> <b class="caret"></b>' +
            '</a>' +
            '<ul id="' + lssm.config.prefix + '_menu"class="dropdown-menu" role="menu" aria-labelledby="' +
            lssm.config.prefix + '_menu_switch"> </ul>' +
            '</li>');
        $('#navbar-main-collapse > ul').append(lssm_dropdown);
    }
};

/**
 * Add the settings-functions to lssm
 */
lssm.settings = {
    // Set a value to the localstorage
    set: function (key, value) {
        "use strict";
        if (typeof value === "object")
        // We have a object, parse it to json and save it.
        {
            localStorage.setItem(lssm.config.prefix + '_' + key, JSON.stringify(value));
        } else
        // Otherwise we save the raw value
        {
            localStorage.setItem(lssm.config.prefix + '_' + key, value);
        }
    },

    // Get a config value from localstorage
    get: function (key, defaultvalue) {
        "use strict";
        if (typeof defaultvalue === "undefined")
        // defaultvalue is not set, return null if nothing found
        {
            defaultvalue = null;
        }
        var data;
        try {
            // Try to parse the config string as json
            data = JSON.parse(localStorage.getItem(lssm.config.prefix + '_' + key)) || defaultvalue;
        } catch (e) {
            // Couldn't parse the config value as json. Return the raw value
            data = (localStorage.getItem(lssm.config.prefix + '_' + key)) || defaultvalue;
        }
        return data;
    },

    // Remove a config value from localstorage
    remove: function (key) {
        "use strict";
        localStorage.removeItem(key);
    }
};

/**
 * Add the managed settings-functions to lssm
 */
lssm.managedSettings = {
    registeredModules: [],

    register: function (moduleSettings) {
        "use strict";
        var moduleId = moduleSettings.id;
        var settingsKey;
        // If settings don't exist, overwrite with defaults
        if (!lssm.settings.get(moduleId) || !lssm.settings.get(moduleId).settings) {
            for (settingsKey in moduleSettings.settings) {
                moduleSettings.settings[settingsKey].value = moduleSettings.settings[settingsKey].default;
            }
            // If we have values use them
        } else {
            var storedSettings = lssm.settings.get(moduleId).settings;
            for (settingsKey in moduleSettings.settings) {
                if (storedSettings[settingsKey] && storedSettings[settingsKey].value) {
                    moduleSettings.settings[settingsKey].value = storedSettings[settingsKey].value;
                } else {
                    moduleSettings.settings[settingsKey].value = moduleSettings.settings[settingsKey].default;
                }
            }
        }
        lssm.managedSettings.registeredModules[moduleId] = moduleSettings;
    },

    getSetting: function (module, field) {
        "use strict";
        var settings = this.getSettings(module);
        if (settings !== undefined && settings[field] !== undefined) {
            return settings[field].value;
        } else {
            return undefined;
        }
    },

    getSettings: function (module) {
        "use strict";
        if (lssm.managedSettings.registeredModules[module]) {
            return lssm.managedSettings.registeredModules[module].settings;
        } else {
            return undefined;
        }
    },

    update: function (moduleSettings) {
        "use strict";
        var moduleId = moduleSettings.id;
        lssm.settings.set(moduleSettings.id, moduleSettings);
        lssm.managedSettings.registeredModules[moduleId] = moduleSettings;
    },

};

/**
 * Add the module-handler to LSSM
 */
lssm.modules = {
    saveall: function () {
        "use strict";
        var arr = {};
        for (var i in lssm.Module) {
            arr[i] = lssm.Module[i].active;
        }
        lssm.settings.set("Modules", arr);
    },
    // Zum zwischenspeichern der schon geladenen Module
    addLocales: function (module) {
        var mod = module.toString();
        if (mod in lssm.Module) {
            var keys = ['name', 'description'];
            for (var k in keys) {
                k = keys[k];
                if (!(k in lssm.Module[mod])) {
                    continue;
                }
                for (var l in lssm.Module[mod][k]) {
                    l = l.toString();
                    if (!(mod in I18n.translations[l].lssm.apps)) {
                        I18n.translations[l].lssm.apps[mod] = {};
                    }
                    I18n.translations[l].lssm.apps[mod][k] = lssm.Module[mod][k][l];
                }
            }
        }
    },
    loadall: function () {
        "use strict";
        try {
            for (var m in lssm.Module) {
                this.load(m);
            }
        } catch (e) {
            console.log("LOADALL: " + e.message);
        }
    },

    load: function (module) {
        try {
            var path = window.location.pathname.length;
            var uid = "";
            var game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            this.addLocales(module);
            if (lssm.Module[module].active && lssm.Module.status !== 'develop' &&
                lssm.appstore.canActivate(lssm.Module[module])) {
                if (path <= 2 || ("inframe" in lssm.Module[module] && lssm.Module[module].inframe === true)) {
                    //$('body').append('<script src="' + lssm.config.server + lssm.Module[module].source + uid +'" type="text/javascript"></script>');
                    $.getScript(lssm.getlink(lssm.Module[module].source));
                }
            }
        } catch (e) {
            console.log("On lssm_module load: " + e.message);
        }
    }
};

/**
 * Add hooks to lssm
 */
lssm.hook = {
    orgfunctions: {},
    prename: function (event) {
        "use strict";
        var self = this;
        if (!this.orgfunctions.hasOwnProperty(event)) {
            this.orgfunctions[event] = window[event];
            window[event] = function () {
                $(document).trigger("lssm_" + event + "_before", arguments);
                self.orgfunctions[event].apply(window, arguments);
                $(document).trigger("lssm_" + event + "_after", arguments);
            };
        }
        return "lssm_" + event + "_before";
    },
    postname: function (event) {
        "use strict";
        var self = this;
        if (!this.orgfunctions.hasOwnProperty(event)) {
            this.orgfunctions[event] = window[event];
            window[event] = function () {
                $(document).trigger("lssm_" + event + "_before", arguments);
                self.orgfunctions[event].apply(window, arguments);
                $(document).trigger("lssm_" + event + "_after", arguments);
            };
        }
        return "lssm_" + event + "_after";
    }
};

lssm.modal = {
    /**
     * Creates a new modal
     * @param content The content
     * @param closefunc Function to call when closed
     * @returns {string} The ID of the modal
     */
    show: function (content, closefunc) {
        "use strict";
        var e = parseInt($("#lightbox_background").css("width")),
            i = parseInt($("#lightbox_background").css("height")),
            n = i - 100;
        if (592 > n) {
            n = i - 30;
        }
        var s = e - 70;
        if (862 > s) {
            s = e - 0;
        }
        var o = s - 2,
            a = n - 34,
            r = (e - s) / 2;
        $("#lightbox_box").css("width", s + "px")
            .css("height", n + "px")
            .show();
        $("#lightbox_box")
            .append('<div class="lightbox_iframe" style="width:' + o + "px;height:" + a + 'px" id="lightbox_iframe_' +
                iframe_lightbox_number + '"><div id="iframe-inside-container">' + content + '</div></div>');
        $("#lightbox_background").show();
        $("#lightbox_box").css("left", r + "px");
        $("#lightbox_box").css("top", (i - n) / 2 + "px");
        $("#lightbox_iframe_" + iframe_lightbox_number + " #iframe-inside-container").css("height", a).css("width", o);
        if (typeof closefunc !== "undefined") {
            $(document).bind(lssm.hook.prename("lightboxClose"), closefunc);
        }
        setTimeout(function() {
            $("#lightbox_iframe_" + iframe_lightbox_number).show().focus();
        }, 100);
        return "#lightbox_iframe_" + iframe_lightbox_number + " #iframe-inside-container";
    }
};

/**
 * Lets roll!
 */
(function (I18n, $) {
    // Append our main css
    $("head")
        .prepend('<link href="' + lssm.getlink('/lss-manager-v3/css/main.css') + '" rel="stylesheet" type="text/css">');
    // Create the lssm dropdown menu
    lssm.appstore.createDropDown();
    // And append the version to it
    $('#' + lssm.config.prefix + '_menu')
        .prepend('<li class="menu-center"><a href="' + lssm.config.github + '" target="_blank">' +
            I18n.t('lssm.version') + ': ' + lssm.config.version + '</a></li><li class="divider"></li>');
    // Only execute everything else if user is logged in
    if (typeof user_id === "undefined") {
        $('#' + lssm.config.prefix + '_menu').append('<li class="menu-center">' + I18n.t('lssm.login') + '</li>');
    } else {
        // Oh, and don't forget the helperfunctions
        $.getScript(lssm.getlink('/lss-manager-v3/helperfunctions.js'))
            .fail(function () {
                $("#map_outer")
                    .before(
                        '<div class="alert alert-danger alert-dismissable" style="text-align:center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
                        I18n.t('lssm.cantload') + '</div>');
            })
            .done(function () {
                loadCore();
            });
        // There goes the core
        function loadCore() {
            // Load required library's
            $("head")
                .append(
                    '<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="   +crossorigin="anonymous"></script>')
                .append('<script src="' + lssm.getlink('/lss-manager-v3/js/highcharts.min.js') +
                    '" type="text/javascript"></script>')
                .append(
                    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css">');

            // Get the last activated modules
            var modules = lssm.settings.get('Modules') || {};
            for (var i in modules) {
                var modname = i.toString();
                if ((modname in lssm.Module) === false) {
                    console.log(modname + " is not a valid app. Skipping.");
                    continue;
                }
                if (lssm.Module[i].active === false) {
                    lssm.Module[i].active = modules[i];
                }
            }
            // Let's load all the modules
            lssm.modules.loadall();
            // Oh, we also need a appstore
            lssm.appstore.appendAppstore();
        }
    }
})(I18n, jQuery);
