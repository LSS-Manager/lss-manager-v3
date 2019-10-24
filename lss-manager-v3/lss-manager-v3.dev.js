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

let lssm = {
    config: {
        //server: "https://localhost/lss-manager-v3",
        server: "https://lss-manager.de/lss-entwicklung", // Domain wo alles liegt
        stats_uri: "https://proxy.lss-manager.de/v3/stat.php",
        forum_link: "https://forum.leitstellenspiel.de/index.php/Thread/11166-LSS-MANAGER-V3/",
        key_link: "/profile/external_secret_key/", // Domain wo alles liegt
        version: "3.3.5",
        github: 'https://github.com/LSS-Manager/lss-manager-v3',
        prefix: 'lssm',
        game: window.location.hostname.toLowerCase().replace("www.",""),
    },
    loadScript: function (link, no_cache=false) {
        try {
            $.getScript(this.getlink(link, no_cache));
        } catch (e) {
            console.error("On script load: " + e.message);
        }
    },
    loadStyle: function (link, no_cache=false) {
        try {
            $('body').append('<link href="' + this.getlink(link, no_cache) + '" rel="stylesheet" type="text/css">');
        } catch (e) {
            console.error("On script load: " + e.message);
        }
    },
    getlink: function (file, no_cache=false) {
        try {
            let uid = "";
            let game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            return this.config.server + file + uid + (no_cache ? `&_=${new Date().getTime()}` : '');
        } catch (e) {
            console.error("On script load: " + e.message);
        }
    },
    key: null,
    buildings: {},
    vehicles: {},
};


/**
 * Localization
 */
I18n.defaultLocale = 'de';
I18n.fallbacks = true;
I18n.locales.nl = ['nl', 'es', 'eu', 'fj', 'en', 'de'];
if (!I18n.translations.hasOwnProperty('de')) I18n.translations.de = {};
if (!I18n.translations.hasOwnProperty('en')) I18n.translations.en = {};
if (!I18n.translations.hasOwnProperty('fj')) I18n.translations.fj = {};
if (!I18n.translations.hasOwnProperty('eu')) I18n.translations.eu = {};
if (!I18n.translations.hasOwnProperty('es')) I18n.translations.es = {};
if (!I18n.translations.hasOwnProperty('nl')) I18n.translations.nl = {};
I18n.translations.de.lssm = {
    lssm: "LSS-Manager",
    version: "Stable",
    appstore: "APPSTORE",
    appstore_welcome: "Willkommen im Appstore vom LSS Manager",
    appstore_desc: "Hier findest du verschiedene Plugins, die dein Spielerlebnis bereichern sollen. Jedes Plugin " +
        "kann einzeln aktiviert werden, indem du den Hebel auf Grün stellst. Sollte es zu irgendwelchen Problemen " +
        "kommen, kannst du gerne zu uns in den <a href=\"https://discord.gg/RcTNjpB\" target=\"blank\">Discord</a> " +
"kommen  oder <a href=\"https://forum.leitstellenspiel.de/index.php/Thread/11166-LSS-MANAGER-V3/" +
"\" target=\"blank\">im Forum einen Beitrag verfassen</a>.",
    back_lss: "Zurück zu Leitstellenspiel",
    settings: "Einstellungen",
    saving: "Speichere...",
    save: "Speichern",
    cantactivate: "kann nicht aktiviert werden, da es mit folgenden Modul(en) inkompatibel ist:",
    activated: "Folgende Module wurden aktiviert:",
    cantload: "<h2>LSS-Manager konnte nicht geladen werden</h2>Bitte kontaktiere ein Mitglied vom Entwicklerteam.",
    login: "Bitte zuerst anmelden",
    mapkit: "Dieses Modul unterstützt kein Mapkit",
    apps: {}
};
I18n.translations.en.lssm = {
    appstore_welcome: "Welcome to the Appstore of LSS Manager",
    appstore_desc: "Here you will find various plugins that will enrich your playing experience. Each plugin can be " +
        "activated individually by placing the lever on green. If there are any problems, you can join our " +
        "<a href=\"https://discord.gg/RcTNjpB\" target=\"blank\">Discord</a> or " +
        "<a href=\"http://board.missionchief.com/index.php/Thread/146-LSS-Manager-for-missionchief/" +
        "\" target=\"blank\">write a message in the forum</a>.",
    back_lss: "Back to missionchief",
    settings: "Settings",
    saving: "Saving...",
    save: "Save",
    activated: "Following Modules have been activated:",
    cantactivate: "can't be activated as it's incompatible with the following modul(es):",
    cantload: "<h2>LSS-Manager could not be loaded</h2>Please contact a member of the development team.",
    login: "Please log in first",
    mapkit: "This module doesn't support Mapkit",
    apps: {}
};
I18n.translations.fj.lssm = {
    appstore_welcome: "Welcome to the Appstore of LSS Manager",
    appstore_desc: "Here you will find various plugins that will enrich your playing experience. Each plugin can be " +
        "activated individually by placing the lever on green. If there are any problems, you can join our " +
        "<a href=\"https://discord.gg/RcTNjpB\" target=\"blank\">Discord</a> or " +
        "<a href=\"http://board.missionchief.com/index.php/Thread/146-LSS-Manager-for-missionchief/" +
        "\" target=\"blank\">write a message in the forum</a>.",
    back_lss: "Back to missionchief",
    settings: "Settings",
    saving: "Saving...",
    save: "Save",
    activated: "Following Modules have been activated:",
    cantactivate: "can't be activated as it's incompatible with the following modul(es):",
    cantload: "<h2>LSS-Manager could not be loaded</h2>Please contact a member of the development team.",
    login: "Please log in first",
    mapkit: "This module doesn't support Mapkit",
    apps: {}
};
I18n.translations.eu.lssm = {
    appstore_welcome: "Welcome to the Appstore of LSS Manager",
    appstore_desc: "Here you will find various plugins that will enrich your playing experience. Each plugin can be " +
        "activated individually by placing the lever on green. If there are any problems, you can join our " +
        "<a href=\"https://discord.gg/RcTNjpB\" target=\"blank\">Discord</a> or " +
        "<a href=\"http://board.missionchief.com/index.php/Thread/146-LSS-Manager-for-missionchief/" +
        "\" target=\"blank\">write a message in the forum</a>.",
    back_lss: "Back to missionchief",
    settings: "Settings",
    saving: "Saving...",
    save: "Save",
    activated: "Following Modules have been activated:",
    cantactivate: "can't be activated as it's incompatible with the following modul(es):",
    cantload: "<h2>LSS-Manager could not be loaded</h2>Please contact a member of the development team.",
    login: "Please log in first",
    mapkit: "This module doesn't support Mapkit",
    apps: {}
};
I18n.translations.es.lssm = {
    appstore_welcome: "Bienvenido a la Appstore of LSS Manager",
    appstore_desc: "Aquí encontrarás varios plugins que enriquecerán tu experiencia de juego. Cada plugin puede ser " +
        "se activa individualmente colocando la palanca en verde. Si hay algún problema, puedes unirte a nuestro " +
        "<a href=\"https://discord.gg/RcTNjpB\" target=\"blank\">Discord</a> o " +
        "<a href=\"http://board.missionchief.com/index.php/Thread/146-LSS-Manager-for-missionchief/" +
        "\" target=\"blank\">escribir un mensaje en el foro</a>.",
    back_lss: "Back to cendro de mando",
    settings: "Ajustes",
    saving: "Guardar....",
    save: "Guardar",
    activated: "Se han activado los siguientes módulos:",
    cantactivate: "no se puede activar porque es incompatible con lo siguiente módul(os):",
    cantload: "<h2>El LSS-Manager no se ha podido cargar</h2>Póngase en contacto con un miembro del equipo de desarrollo.",
    login: "Por favor, identifíquese primero",
    mapkit: "Este módulo no soporta Mapkit",
    apps: {}
};
I18n.translations.nl.lssm = {
    appstore_welcome: "Welkom bij de App Store van LSS Manager",
    appstore_desc: "Hier vindt u verschillende plug-ins die uw game-ervaring kunnen verbeteren. " +
        "Elke plugin kan individueel worden geactiveerd, de bijbehorende hendel op groen te zetten. Als er problemen zijn, " +
        "bent u van harte welkom om naar ons toe te komen in de <a href=\"https://discord.gg/RcTNjpB\" target=\"blank\">Discord</a>"+
        " of <a href=\"https://forum.meldkamerspel.com/index.php/Thread/52-LSS-Manager-for-meldkamerspel/" +
        "\" target=\"blank\">een bericht te plaatsen in ons onderwerp op het forum.</a>.",
    back_lss: "Terug naar Meldkamerspel",
    settings: "Instellingen",
    saving: "Wijzigingen aan het opslaan...",
    save: "Opslaan",
    activated: "De volgende modules zijn geactiveerd:",
    cantactivate: "Kan niet worden geactiveerd omdat deze lssm_module niet samenwerkt met de volgende lssm_module(s):",
    mapkit: "Deze module ondersteunt Mapkit niet",
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
            fj: 'Callview control',
            eu: 'Callview control',
            es: 'Control de Callview',
            nl: 'Besturing met toetsenbord'
        },
        active: false,
        description: {
            de: 'Einsatzmaske mit Tastatur steuern.',
            en: 'Control the mission view with the keyboard.',
            fj: 'Control the mission view with the keyboard.',
            eu: 'Control the mission view with the keyboard.',
            es: 'Controle la vista de misión con el teclado.',
            nl: 'Bestuur het meldingscherm met het toetsenbord.'
        },
        source: '/modules/lss-keyboardAlert/lss-keyboardAlert.user.js',
        inframe: true
    },
    tailoredTabs: {
        name: {
            de: 'Maßgeschneiderte Tabs'
        },
        active: false,
        description: {
            de: 'Das Plugin ermöglicht es, weitere Tabs zur Trennung von Fahrzeug-Typen im Alarmierungsfenster einzustellen.'
        },
        source: '/modules/lss-TailoredTabs/TailoredTabs.user.js',
        inframe: true,
        supportedLocales: ['de']
    },
    Layout01: {
        name: {
            de: 'Layout 01'
        },
        active: false,
        description: {
            de: 'Ansicht mit großer Karte - Einsätze & Co mit Menu durchschaltbar. Eine Badge wie bei den ' +
                'Nachrichten zeigt die Einsäte/Nachrichten/Funksprüche seit dem letzten Aufruf des jeweiligen ' +
                'Fensters im Menu.',
            en: 'View with main focus on the map. Missions and other windows can be changed using a menu. A badge ' +
                'is telling you how many missions etc. you have since your last visit within that window.',
            fj: 'View with main focus on the map. Missions and other windows can be changed using a menu. A badge ' +
                'is telling you how many missions etc. you have since your last visit within that window.',
            eu: 'View with main focus on the map. Missions and other windows can be changed using a menu. A badge ' +
                'is telling you how many missions etc. you have since your last visit within that window.',
            es: 'Ver con el foco principal en el mapa. Las misiones y otras ventanas se pueden cambiar usando un menú. Una insignia ' +
                'te dice cuántas misiones, etc. tienes desde tu última visita dentro de esa ventana.',
            nl: 'Design met een extra grote kaartweergave aan de linkerkant. Aan de rechterkant van het scherm kan ' +
                'met menuknoppen tussen de andere schermen gewisseld worden. Een teller houdt het aantal bericheten en ' +
                'meldingen voor je bij.'
        },
        source: '/modules/lss-layout-01/layout-01.user.js',
        collisions: ['Layout02', 'Layout03', 'Layout04']
    },
    Layout02: {
        name: {
            de: 'Layout 02'
        },
        active: false,
        description: {
            de: 'Ansicht mit 100% Karte im oberen Bereich - darunter die vier Fenster Einsätze, Gebäude, Chat & ' +
                'Funksprüche.',
            en: 'View with 100% map at the upper area - below that the four windows calls, buildings, chat and radio.',
            fj: 'View with 100% map at the upper area - below that the four windows calls, buildings, chat and radio.',
            eu: 'View with 100% map at the upper area - below that the four windows calls, buildings, chat and radio.',
            es: 'Ver con el mapa 100% en la parte superior - debajo de que las cuatro ventanas de llamadas, edificios, chat y radio.',
            nl: 'Design met een grote kaart bovenaan je scherm. onder de kaart zijn de vier overige schermen; ' +
                'meldingen, gebouwen, chat en statusmeldingen weergegeven.'
        },
        ghuser: 'lostdesign',
        source: '/modules/lss-layout-02/layout-02.user.js',
        collisions: ['Layout01', 'Layout03', 'Layout04']
    },
    Layout03: {
        name: {
            de: 'Layout 03'
        },
        active: false,
        description: {
            de: 'Layout ohne Karte. Die vier Fenster werden über die ganze Höhe dargestellt.',
            en: 'Layout without map. The four windows are using 100% of the given browser height.',
            fj: 'Layout without map. The four windows are using 100% of the given browser height.',
            eu: 'Layout without map. The four windows are using 100% of the given browser height.',
            es: 'Plano sin mapa. Las cuatro ventanas utilizan el 100% de la altura del navegador.',
            nl: 'Design zonder kaart. De vier overige schermen vullen het gehele scherm.'
        },
        source: '/modules/lss-layout-03/layout-03.user.js',
        collisions: ['Layout01', 'Layout02', 'Layout04', 'FMS5InMap']
    },
    Layout04: {
        name: {
            de: 'Layout 04'
        },
        active: false,
        description: {
            de: 'Karte im linken Bereich auf 100% Höhe. Rechts davon die Einsätze auf voller breite - alle ' +
                'Einsatzarten werden in jeweils einer Spalte dargestellt. Darunter Gebäude, Chat und Funk.',
            en: 'Map with 100% height on the left side. Next to it the calls, each category in its own column. ' +
                'Below that the buildings, chat and radio.',
            fj: 'Map with 100% height on the left side. Next to it the calls, each category in its own column. ' +
                'Below that the buildings, chat and radio.',
            eu: 'Map with 100% height on the left side. Next to it the calls, each category in its own column. ' +
                'Below that the buildings, chat and radio.',
            es: 'Mapa con 100% de altura a la izquierda. A su lado las llamadas, cada categoría en su propia columna. ' +
                'Debajo de los edificios, chat y radio.',
            nl: 'Design met een langwerpige kaart aan de linkerzijde van het scherm. Daarnaast een groot overzicht ' +
                'van de meldingen en daaronder hebben de overige schermen een eigen kolom'
        },
        source: '/modules/lss-layout-04/layout-04.user.js',
        collisions: ['Layout01', 'Layout02', 'Layout03']
    },
    DoctorRadioCall: {
        name: {
            de: 'NEF Nachforderung per FMS',
            en: 'HEMS request in radio',
            fj: 'HEMS request in radio',
            nl: 'Spraakaanvraag voor MMT'
        },
        active: false,
        description: {
            de: 'Bei NEF Nachforderung wird ein Sprechwunsch im Funk angezeigt.',
            en: 'Issues a radio call if HEMS is required.',
            nl: 'Spraakaanvraag weergeven indien MMT benodigd is.'
        },
        source: '/modules/lss-doctor-radio-call/DoctorRadioCall.user.js',
        develop: false
    },
    MissionOut: {
        name: {
            de: 'MissionOut',
            nl: 'Meldingen inklappen'
        },
        active: false,
        description: {
            de: 'Alle Einsätze ein/ausklappen oder für jeden Einsatz einzeln.',
            en: 'Minimize mission list entries. You can either expand or minimize all calls at once or do it for ' +
                'each one.',
            fj: 'Minimize mission list entries. You can either expand or minimize all calls at once or do it for ' +
                'each one.',
            eu: 'Minimize mission list entries. You can either expand or minimize all calls at once or do it for ' +
                'each one.',
            es: 'Minimizar las entradas de la lista de misiones. Puede desglosar o minimizar todas las llamadas a ' +
            'la vez o hacerlo para cada una de ellas.',
            nl: 'Verkleint de meldingen in de lijst. Je kunt alle meldingen verkleint weergeven of per melding kiezen.'
        },
        source: '/modules/lss-MissionOut/MissionOut.user.js',
        develop: false
    },
    saveVGE: {
        name: {
            de: 'Eigene VGE speichern',
            en: 'Save created alliance calls',
            fj: 'Save created alliance calls',
            eu: 'Save created alliance calls',
            es: 'Guardar llamadas de alianza creadas',
            nl: 'Zelfgemaakte inzetten opslaan.'
        },
        active: false,
        description: {
            de: 'Funktion um selbst erstellte VGE zu speichern.',
            en: 'Enables a function to save own created mission calls to use them as template.',
            fj: 'Enables a function to save own created mission calls to use them as template.',
            eu: 'Enables a function to save own created mission calls to use them as template.',
            es: 'Habilita una función para guardar las llamadas de misión creadas por el usuario y utilizarlas como plantilla.',
            nl: 'Maakt het mogelijk om zelfgemaakte inzetten op te slaan als sjabloon om ze later te gebruiken.'
        },
        source: '/modules/lss-saveVGE/saveVGE.user.js',
        develop: false
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
            en: 'Provides information about the latest updates in LSSM',
            fj: 'Provides information about the latest updates in LSSM'
        },
        source: '/modules/lss-releasenotes/Releasenotes.user.js',
        develop: false
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
        develop: false
    },
    Notification_Alert: {
        name: {
            de: 'Notification Alert',
            es: 'Alerta de notificación',
            nl: 'Browsermeldingen'
        },
        active: false,
        description: {
            de: 'Zeigt eine HTML-5 Notification an sobald ein Status oder eine Nachricht eingegangen ist. ' +
                '(ChatPoput included)',
            en: 'HTML5 Chatnotifications using the browser notificationsystem.',
            fj: 'HTML5 Chatnotifications using the browser notificationsystem.',
            es: 'Chatnotificaciones HTML5 utilizando el sistema de notificaciones del navegador.',
            nl: 'Toon HTML5 chatnotificaties met behulp van het notificatiesysteem van je browser zodat je nooit ' +
                'meer een chat of melding hoeft te missen.'
        },
        source: '/modules/lss-notification_alert/Notification_alarm.user.js',
        develop: false
    },
    Redesign01: {
        name: {
            de: 'Redesign 01'
        },
        active: false,
        description: {
            de: 'Neues Design für die Oberfläche',
            en: 'New design for the game.',
            fj: 'New design for the game.',
            eu: 'New design for the game.',
            es: 'Nuevo diseño para el juego.',
            nl: 'Een nieuw uiterlijk voor het spel.'
        },
        source: '/modules/lss-redesign-01/redesign-01.user.js',
        develop: false
    },
    Eventsmission: {
        name: {
            de: 'Markiert Eventeinsätze',
            en: 'Marked events',
            fj: 'Marked events',
            eu: 'Marked events',
            es: 'Eventos marcados',
            nl: 'Merken gebeurtenissen'
        },
        active: false,
        inframe: true,
        description: {
            de: 'Zeigt die Aktuellen Eventeinsätze an mit Großgeschriebenen ZEILEN!',
            en: 'Displays the current events with capitalized LINE!',
            fj: 'Displays the current events with capitalized LINE!',
            eu: 'Displays the current events with capitalized LINE!',
            es: 'Muestra los eventos actuales con LÍNEA en mayúsculas!',
            nl: 'Toont de actuele gebeurtenissen met hoofdlettercode LINE!'
        },
        source: '/modules/lss-eventmissions/eventmission.user.js',
        develop: false
    },
    DestinationFilter: {
        name: {
            de: 'Zielort Filter',
            en: 'Destination filter',
            fj: 'Destination filter',
            eu: 'Destination filter',
            es: 'Filtro de destino',
            nl: 'Bestemming Filter'
        },
        active: false,
        description: {
            de: 'Ermöglicht es, belegte oder ungeeignete Zielorte bei Sprechwünschen auszublenden',
            en: 'Allows you to hide busy or inappropriate destinations for speech requests',
            fj: 'Allows you to hide busy or inappropriate destinations for speech requests',
            eu: 'Allows you to hide busy or inappropriate destinations for speech requests',
            es: 'Le permite ocultar destinos ocupados o inapropiados para las peticiones de voz.',
            nl: 'Hiermee kunt u drukke of ongeschikte bestemmingen voor spraakverzoeken verbergen.'
        },
        source: '/modules/lss-destinationFilter/DestinationFilter.user.js',
        inframe: true
    },
    FMS5InMap: {
        name: {
            de: 'FMS 5 in der Karte',
            en: 'Request transport in map',
            fj: 'Request transport in map',
            eu: 'Request transport in map',
            es: 'Solicitar transporte en el mapa',
            nl: 'Spraakaanvragen op de kaart weergeven.'
        },
        active: false,
        description: {
            de: 'Zeigt alle FMS 5 in der Karte an.',
            en: 'Shows request transports within the map lower left corner.',
            fj: 'Shows request transports within the map lower left corner.',
            eu: 'Shows request transports within the map lower left corner.',
            es: 'Muestra los transportes de la solicitud en la esquina inferior izquierda del mapa.',
            nl: 'Toont alle spraakaanvragen op de kaart.'
        },
        source: '/modules/lss-FMS5InMap/FMS5InMap.user.js',
        collisions: ['Layout03', 'WachenplanungOnMap'],
        nomapkit: true,
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
            fj: 'Enables a small clock within the map.',
            eu: 'Enables a small clock within the map.',
            es: 'Activa un pequeño reloj dentro del mapa.',
            nl: 'Toont een kleine klok op de kaart.'
        },
        source: '/modules/lss-clock/clock.user.js',
        nomapkit: true,
    },
    WachenplanungOnMap: {
        name: {
            de: 'Wachenplanung auf der Karte',
            en: 'Station management on map',
            fj: 'Station management on map',
            nl: 'Gebouwplanning op de kaart.'
        },
        active: false,
        description: {
            de: 'Zeichnet Kreise im Radius X um deine Wachen. Der Radius kann selbst bestimmt werden & die ' +
                'Gebäude sind wählbar.',
            en: 'Draws circles around buildings with your chosen radius in kilometer. You can also filter for ' +
                'specific buildings.',
            fj: 'Draws circles around buildings with your chosen radius in kilometer. You can also filter for ' +
                'specific buildings.',
            nl: 'Toont cirkels met een zelf in te stellen radius rondom gebouwen. Je kunt ook filteren op specifieke ' +
                'gebouwen.'
        },
        source: '/modules/lss-WachenplanungOnMap/WachenplanungOnMap.user.js',
        collisions: ['Layout03', 'FMS5InMap', 'heatmap'],
        nomapkit: true,
        supportedLocales: ['de']
    },
    allianceMissionlistShare: {
        name: {
            de: 'Einsätze freigeben',
            en: 'Mission share',
            fj: 'Mission share',
            eu: 'Mission share',
            es: 'Porcentaje correspondiente a la misión',
            nl: 'Meldingen vrijgeven'
        },
        active: false,
        description: {
            de: 'Mit einem klick in der Übersicht, ohne den Einsatz zu öffnen, freigeben.',
            en: 'Instantly share missions without opening the call by clicking a button in the overview.',
            fj: 'Instantly share missions without opening the call by clicking a button in the overview.',
            eu: 'Instantly share missions without opening the call by clicking a button in the overview.',
            es: 'Comparte misiones al instante sin abrir la llamada haciendo clic en un botón de la vista general.',
            nl: 'Vanuit het hoofdscherm gemakkelijk meldingen vrijgeven in je team met behulp van een extra knop in ' +
                'de meldingenlijst.'
        },
        source: '/modules/lss-allianceMissionlistShare/allianceMissionlistShare.user.js',
        develop: false
    },
	ShareAlliancePost: {
        name: {
            de: 'Alarmieren, Teilen & Posten',
            en: 'Alert, Share & Post',
            es: 'Alerta, Compartir y Publicar',
            nl: 'Alarmeren, delen & Posten'
        },
        active: false,
        description: {
            de: 'Fügt einen zusätzlichen Button ein, mit dem man Alarmieren, Freizugeben und vordefinierte Nachrichten im Chat posten kann. In nur einem Schritt!',
            en: 'Adds a new button for alerting, sharing and posting predefined messages to the chat. In just one step!',
            es: 'Añade un nuevo botón para alertar, compartir y publicar mensajes predefinidos en el chat. En un solo paso!',
            nl: 'Voeg een nieuwe knop toe voor alarmeren, delen en een vooraf ingesteld bericht in de chat posten. In slechts één stap!'
        },
        source: '/modules/lss-shareAlliancePost/ShareAlliancePost.js',
        inframe: true
    },
    searchMissions: {
        name: {
            de: 'Einsätze suchen',
            en: 'Mission search',
            fj: 'Mission search',
            eu: 'Mission search',
            es: 'Búsqueda de misiones',
            nl: 'Meldingen doorzoeken'
        },
        active: false,
        description: {
            de: 'In der Übersicht Einsätze suchen & filtern. In der Alarmmaske diese Liste mit Buttons durchgehen.',
            en: 'Search for calls & filter them - a group of buttons on the bottom lets you change searched missions ' +
                'quickly.',
            fj: 'Search for calls & filter them - a group of buttons on the bottom lets you change searched missions ' +
                'quickly.',
            eu: 'Search for calls & filter them - a group of buttons on the bottom lets you change searched missions ' +
                'quickly.',
            es: 'Buscar llamadas y filtrarlas - un grupo de botones en la parte inferior le permite cambiar rápidamente ' +
                ' las misiones buscadas.',
            nl: 'In het overzicht meldingen zoeken en filteren. Een rij knoppen aan de onderkant van het scherm laat ' +
                'je snel door je meldingen bladeren.'
        },
        source: '/modules/lss-searchMissions/searchMissions.user.js',
        develop: false
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
        develop: false
    },
    WachenHoverStati: {
        name: {
            de: 'Wachen Status',
            en: 'Station status',
            fj: 'Station status',
            eu: 'Station status',
            es: 'Estado de la estación',
            nl: 'Voertuigstatus bij gebouwen'
        },
        active: false,
        description: {
            de: 'Zeigt beim drüberfahren einer Wache auf der Karte die Status der Fahrzeuge an.',
            en: 'Shows the code of vehciles on station hover on the map.',
            fj: 'Shows the code of vehciles on station hover on the map.',
            eu: 'Shows the code of vehciles on station hover on the map.',
            es: 'Muestra el código de los vehículos en la estación y pasa el puntero del ratón sobre el mapa.',
            nl: 'Toont de status van voertuigen van een gebouw als je je muis boven het gebouw houdt.'
        },
        source: '/modules/lss-WachenHoverStati/WachenHoverStati.user.js',
        nomapkit: true,
    },
    RenameFZ: {
        name: {
            de: 'Fahrzeuge umbenennen',
            en: 'Rename vehicle',
            fj: 'Rename vehicle',
            eu: 'Rename vehicle',
            es: 'Renombrar vehículo',
            nl: 'Voertuigen herbenoemen'
        },
        active: false,
        description: {
            de: 'Alle Fahrzeuge einer Wache oder einer Leitstelle nach dem selben System benennen.',
            en: 'Rename vehicles in bulk using tags.',
            fj: 'Rename vehicles in bulk using tags.',
            eu: 'Rename vehicles in bulk using tags.',
            es: 'Cambie el nombre de los vehículos a granel utilizando etiquetas.',
            nl: 'Maakt het makkelijk om grote hoeveelheiden voertuigen snel van een nieuwe naam te voorzien met ' +
                'behulp van tags.'
        },
        source: '/modules/lss-RenameFZ/renameFZ.user.js',
        inframe: true,
        develop: false,
        needVehicles: true,
        needBuildings: true
    },
    telemetry: {
        name: {
            de: 'Telemetrie',
            en: 'Telemetry',
            fj: 'Telemetry',
            nl: 'Telemetrie'
        },
        active: true,
        description: {
            de: 'Sendet Daten an das Entwicklerteam zur Erstellung einer Statistik',
            en: 'Sends data to the developer team for the purpose of creating a statistic',
            fj: 'Sends data to the developer team for the purpose of creating a statistic',
            eu: 'Sends data to the developer team for the purpose of creating a statistic',
            es: 'Envía datos al equipo de desarrolladores con el fin de crear una estadística.',
            nl: 'Stuurt gegevens naar het developmentteam om statistieken te kunnen gebruiken.'
        },
        source: '/modules/telemetry/telemetry.user.js',
        noapp: true, // Nicht im App-Store auflisten
        develop: false
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
        develop: false
    },
    showBackAlarmAbove: {
        name: {
            de: 'show Back Alarm Above',
            en: 'show Back Alarm Above',
            fj: 'show Back Alarm Above',
            eu: 'show Back Alarm Above',
            es: 'Mostrar atrás Alarma Arriba',
            nl: 'Extra annuleerknop'
        },
        active: false,
        description: {
            de: 'Zeigt den Alle Rückalarmieren Button auch überhalb der Fahrzeuge an',
            en: 'Shows the All back alarm button also above the vehicles',
            fj: 'Shows the All back alarm button also above the vehicles',
            eu: 'Shows the All back alarm button also above the vehicles',
            es: 'Muestra el botón de alarma All back también por encima de los vehículos',
            nl: 'Voegt een extra annuleerknop toe bovenaan de voertuiglijst.'
        },
        source: '/modules/lss-showBackAlarmAbove/showBackAlarmAbove.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false
    },
    AaoSearch: {
        name: {
            de: 'AAO-Suche',
            en: 'AAO-Search',
            fj: 'AAO-Search',
            eu: 'AAO-Search',
            es: 'AAO-Buscar',
            nl: 'AUR-zoekfuncties'
        },
        active: false,
        description: {
            de: 'Packt alle AAO\'s in ein durchsuchbares dropdown',
            en: 'Packs all AAO\'s into a searchable dropdown',
            fj: 'Packs all AAO\'s into a searchable dropdown',
            eu: 'Packs all AAO\'s into a searchable dropdown',
            es: 'Empaqueta todos los AAO en un menú desplegable que permite realizar búsquedas',
            nl: 'Maakt het mogelijk om de Alarm en Uitrukregels te doorzoeken met een dropdownmenu.'
        },
        source: '/modules/lss-aao-search/aao-search.user.js',
        inframe: true,
        develop: false
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
            fj: 'Shows the density of selectable vehicle types on map to identify supply gaps.',
            eu: 'Shows the density of selectable vehicle types on map to identify supply gaps',
            es: 'Muestra la densidad de los tipos de vehículos seleccionables en el mapa para identificar las brechas de suministro.',
            nl: 'Maakt het mogelijk om de verspreiding per voertuigsoort te zien. Hiermee kun je zien waar je nog ' +
                'extra voertuigen nodig hebt voor optimale dekking van je inzetgebied.'
        },
        source: '/modules/lss-heatmap/LSHeatmap.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: false,
        collisions: ['Layout03', 'WachenplanungOnMap'],
        nomapkit: true,
    },
    centermap: {
        name: {
            de: 'Center-Map',
            en: 'Center-Map',
            nl: 'KAART CENTREREN'
        },
        active: false,
        description: {
            de: 'Zentriert die Karte beim Aufruf des Spiels und bei Knopfdruck. Genau so wie du es möchtest.',
            en: 'Centers the map on page load and on click. Just as you prefer.',
            fj: 'Centers the map on page load and on click. Just as you prefer.',
            eu: 'Centers the map on page load and on click. Just as you prefer.',
            es: 'Centra el mapa en la carga de la página y en el clic. Como usted prefiera.',
            nl: 'Maakt het mogelijk zelf de zoom en het bereik van de kaart in te stellen als je het spel opstart of door gebruik van de Centreer-knop'
        },
        source: '/modules/lss-centermap/Centermap.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: false,
        nomapkit: true,
    },
    missionHelper: {
        name: {
            de: 'Einsatzhelfer',
            en: 'Missionhelper',
            fj: 'Missionhelper',
            eu: 'Missionhelper',
            es: 'Missionhelper',
            nl: 'Meldinghelper'
        },
        active: false,
        description: {
            de: 'Zeigt benötigte Fahrzeuge an!.',
            en: 'Shows required vehicles in mission mask.',
            fj: 'Shows required vehicles in mission mask.',
            eu: 'Shows required vehicles in mission mask.',
            es: 'Muestra los vehículos requeridos en la máscara de la misión.',
            nl: 'Toont de benodigde voertuigen in het meldingscherm.'
        },
        source: '/modules/lss-missionHelper/missionHelper.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false
    },
    statusDispatching: {
        name: {
            de: 'Verbesserte Status 5',
            en: 'Enhanced transport requests',
            fj: 'Enhanced transport requests',
            eu: 'Enhanced transport requests',
            es: 'Solicitudes de transporte mejoradas',
            nl: 'Verbeterde spraakaanvragen'
        },
        active: false,
        description: {
            de: 'Schnellere Abarbeitung von Status 5 Meldungen.',
            en: 'Faster processing of transport requests.',
            fj: 'Faster processing of transport requests.',
            eu: 'Faster processing of transport requests.',
            es: 'Procesamiento más rápido de las solicitudes de transporte.',
            nl: 'Sneller verwerken van spraakaanvragen.'
        },
        source: '/modules/lss-statusDispatching/statusDispatching.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        settings: {
            has: false,
            function_code: "statusDispatching_show_settings"
        }
    },
    managedSettings: {
        name: {
            de: 'Einstellungen',
            en: 'Settings',
            fj: 'Settings',
            eu: 'Settings',
            es: 'Ajustes',
        },
        active: true,
        description: {
            de: 'Globale Einstellungen',
            en: 'Global Settings',
            fj: 'Global Settings',
            eu: 'Global Settings',
            es: 'Parametrizaciones globales',
        },
        source: '/modules/lss-managedsettings/ManagedSettings.user.js',
        noapp: true, // Nicht im App-Store auflisten
        inframe: true,
        develop: false
    },
    missionKeyword: {
        name: {
            de: 'Einsatzstichworte',
            en: 'Mission Keywords',
            fj: 'Mission Keywords',
            eu: 'Mission Keywords',
            es: 'Palabras clave de la misión',
            nl: 'Steekwoorden bij meldingen'
        },
        active: false,
        description: {
            de: 'Anzeige von Stichworten bei Einsätzen. Die Stichworte orientieren sich weitgehend an denen ' +
                'für Bayern.',
            en: 'Shows keywords for missions. The keywords are oriented to those used in Bavaria.',
            fj: 'Shows keywords for missions. The keywords are oriented to those used in Bavaria.',
            eu: 'Shows keywords for missions. The keywords are oriented to those used in Bavaria.',
            es: 'Muestra las palabras clave de las misiones. Las palabras clave están orientadas a las que se utilizan en Baviera.',
            nl: 'Toont steekwoorden bij de meldingen. Deze steekwoorden zijn grotendeels gebaseerd op de ' +
                'steekwoorden die in Nederlandse hulpverlening gebruikt worden.'
        },
        source: '/modules/lss-missionKeyword/missionKeyword.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false
    },
    missionDate: {
        name: {
            de: 'Meldedatum für Einsätze',
            en: 'Mission Date',
            fj: 'Mission Date',
            eu: 'Mission Date',
            es: 'Fecha de la misión',
            nl: 'Begintijd melding weergeven'
        },
        active: false,
        description: {
            de: 'Zeigt das Meldedatum und die vergangene Zeit seit Eingang an.',
            en: 'Shows the date when the mission was generated and the hours/minutes since then',
            fj: 'Shows the date when the mission was generated and the hours/minutes since then',
            eu: 'Shows the date when the mission was generated and the hours/minutes since then',
            es: 'Muestra la fecha en que se generó la misión y las horas/minutos transcurridos desde entonces.',
            nl: 'Deze module toont de begintijd en -datum van je melding en laat daarnaast zien hoeveel tijd er ' +
                'verstreken is sinds de melding binnenkwam.'
        },
        source: '/modules/lss-missionDate/missionDate.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false
    },
    iconFilter: {
        name: {
            de: 'Icon Gebäude Filter',
            en: 'Icon building filter',
            fj: 'Icon building filter',
            eu: 'Icon building filter',
            es: 'Filtro de construcción de iconos',
            nl: 'REDESIGN FILTERKNOPPEN GEBOUWEN'
        },
        active: false,
        description: {
            de: 'Tauscht den Gebäude Filter mit Icons aus.',
            en: 'Replaces the building filter with icons.',
            fj: 'Replaces the building filter with icons.',
            eu: 'Replaces the building filter with icons.',
            es: 'Sustituye el filtro del edificio por iconos.',
            nl: 'Vervangt de gebouwfilter met nieuwe iconen.'
        },
        source: '/modules/lss-iconFilter/iconFilter.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: false,
        develop: false
    },
    sumDailyMissions: {
        name: {
            de: 'Summe für die tägliche Zusammenfassung',
            en: 'Sum for daily stats',
            fj: 'Sum for daily stats',
            eu: 'Sum for daily stats',
            es: 'Suma de las estadísticas diarias',
            nl: 'Totaalweergave in dagsamenvatting'
        },
        active: false,
        description: {
            de: 'Zeigt eine Summe über Anzahl Einsätze, Patienten, Gefangene und Verbandseinlieferungen in der ' +
                'täglichen Zusammenfassung an.',
            en: 'Shows sums over missions, patients, prisoners and alliance in the daily stats page',
            fj: 'Shows sums over missions, patients, prisoners and alliance in the daily stats page',
            eu: 'Shows sums over missions, patients, prisoners and alliance in the daily stats page',
            es: 'Muestra sumas sobre misiones, pacientes, prisioneros y alianzas en la página de estadísticas diarias.',
            nl: 'Geeft een totaaloverzicht van het aantal meldingen, patienten, gevangenen en teamopnames.'
        },
        source: '/modules/lss-sumDailyMissions/sumDailyMissions.user.js',
        noapp: false, // Nicht im App-Store auflisten
        inframe: true,
        develop: false
    },
    aaoZaehler: {
        name: {
            de: 'AAO-Klick-Zähler',
            en: 'Alarm-Regulations-Counter',
            fj: 'Alarm-Regulations-Counter',
            eu: 'Alarm-Regulations-Counter',
            es: 'Alarmas-Regulaciones-Contador',
            nl: 'AUR-Klik-Teller'
        },
        active: false,
        description: {
            de: 'Zählt die Klicks auf einen AAO-Button',
            en: 'Counts the clicks on an alarm-regulations-button',
            fj: 'Counts the clicks on an alarm-regulations-button',
            eu: 'Counts the clicks on an alarm-regulations-button',
            es: 'Cuenta los clics en un botón de regulación de alarma',
            nl: 'Telt het aantal keer dat een AUR aangeklikt is.'
        },
        source: '/modules/lss-AAO-Zaehler/aao-zaehler.js',
        inframe: true,
        develop: false
    },
    creditserweiterung: {
        name: {
            de: 'Creditserweiterung',
            en: 'Credit expansion',
            fj: 'Credit expansion',
            eu: 'Credit expansion',
            es: 'Expansión del crédito',
            nl: 'Credits-uitbreiding'
        },
        active: false,
        description: {
            de: 'Fügt ein paar spezielle Informationen zu den Credits in einem Dropdown hinzu',
            en: 'Add some special information about the credits in a drop-down list',
            fj: 'Add some special information about the credits in a drop-down list',
            eu: 'Add some special information about the credits in a drop-down list',
            es: 'Agregar información especial sobre los créditos en una lista desplegable',
            nl: 'Voegt wat speciale informatie over de credits toe in een vervolgkeuzelijst'
        },
        source: '/modules/lss-creditserweiterung/creditserweiterung.user.js',
        inframe: false,
        develop: false
    },
    displayUserId: {
        name: {
            de: 'User-ID',
            en: 'User-ID',
            nl: 'User-ID'
        },
        active: false,
        description: {
            de: 'Zeigt die eigene ID in der Kopfzeile an',
            en: 'shows your ID in the header',
            fj: 'shows your ID in the header',
            eu: 'shows your ID in the header',
            es: 'muestra su ID en el encabezado',
            nl: 'Geeft uw eigen ID in de kopregel weer'
        },
        source: '/modules/lss-userid/lss-userId.user.js',
        inframe: false,
        develop: false
    },
    showChatButtonAbove: {
        name: {
            de: 'show Chatbutton Above',
            en: 'show Chatbutton Above',
            eu: 'show Chatbutton Above',
            es: 'Mostrar Chatbutton Arriba',
            nl: 'Toon boven chat-knop'
        },
        active: false,
        description: {
            de: 'Zeigt den Chatverlauf-Knopf auch in der Kopfzeile des Chats an.',
            en: 'Displays the Chat History button in the chat header.',
            fj: 'Displays the Chat History button in the chat header.',
            eu: 'Displays the Chat History button in the chat header.',
            es: 'Muestra el botón Historial de chat en el encabezado del chat.',
            nl: 'Toont de chatgeschiedenisknop  in de chatheader.'
        },
        source: '/modules/lss-showChatbuttonAbove/showChatbuttonAbove.user.js',
        inframe: false,
        develop: false
    },
    showNotTransportButtonAbove: {
        name: {
            de: 'show Patient entlassen Above',
        },
        active: false,
        description: {
            de: 'Zeigt den Patient-Entlassen-Knopf bei einem Sprechwunsch unter dem Fahrzeugnamen an.'
        },
        source: '/modules/lss-show-notTransportPatientButtonAbove/show-notTransportPatientButtonAbove.user.js',
        supportedLocales: ['de'],
        inframe: true,
        develop: false
    },
    verbandsverwaltung: {
        name: {
            de: "Verbandsverwaltung",
            en: "Alliance-extension",
            fj: "Alliance-extension",
            eu: "Alliance-extension",
            es: "Extensión de la alianza",
            nl: "Team-uitbreiding"
        },
        active: false,
        description: {
            de: "Verbandsübersicht auf einen Blick im Hauptfenster",
            en: "Alliance overview at a glance in the main window",
            fj: "Alliance overview at a glance in the main window",
            eu: "Alliance overview at a glance in the main window",
            es: "Vista general de la alianza de un vistazo en la ventana principal",
            nl: "Teamoverzicht in een oogopslag in het hoofdvenster"
        },
        source: "/modules/lss-verbandsverwaltung/verbandsverwaltung.js",
        inframe: false,
        develop: false
    },
    overview: {
        name: {
            de: "Übersicht",
            en: "overview",
            fj: "overview",
            eu: "overview",
            es: "visión de conjunto",
            nl: "overzicht"
        },
        active: false,
        description: {
            de: "Übersicht über alle Fahrzeuge sowie auch Wachen.",
            en: "Overview of all vehicles as well as buildings.",
            fj: "Overview of all vehicles as well as buildings.",
            eu: "Overview of all vehicles as well as buildings.",
            es: "Vista general de todos los vehículos así como de los edificios.",
            nl: "Overzicht van alle voertuigen, later ook gebouwen."
        },
        source: "/modules/lss-overview/overview.js",
        inframe: true,
        nomapkit: true,
    },
    extendedBuilding: {
        name: {
            de: "Erweiterte Gebäudeansicht",
            en: "Extended building view",
            fj: "Extended building view",
            eu: "Extended building view",
            es: "Vista ampliada del edificio",
            nl: "Uitgebreide bouwweergave"
        },
        active: false,
        description: {
            de: "Übersicht über Ausbauten und Personalbedarf",
            en: "Overview of extensions and personnel requirements",
            fj: "Overview of extensions and personnel requirements",
            eu: "Overview of extensions and personnel requirements",
            es: "Resumen de las ampliaciones y de las necesidades de personal",
            nl: "Overzicht van uitbreidingen en personeelsvereisten"
        },
        source: "/modules/lss-extendedBuilding/extendedBuilding.js",
        inframe: true,
    },
    statusCount: {
        name: {
            de: "Status-Zähler",
            en: "Status Counter",
            fj: "Status Counter",
            eu: "Status Counter",
            es: "Contador de estado",
            nl: "Statusteller"
        },
        active: false,
        description: {
            de: "Gibt die Zahl der einzelnen Status aus.",
            en: "Displays the number of individual statuses.",
            fj: "Displays the number of individual statuses.",
            eu: "Displays the number of individual statuses.",
            es: "Muestra el número de status individuales.",
            nl: "Geeft het aantal van ten individuele statussen."
        },
        source: "/modules/lss-statuscount/statuscount.js",
        inframe: false,
        needVehicles: true
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
        let ca = true;
        // TODO: Sprechendere Variablennamen
        if ('collisions' in mod) {
            for (let c in mod.collisions) {
                let d = mod.collisions[c];
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
        let panels = $('<div class="row">' +
            '<div class="col-sm-4" id="apps_col_0"></div>' +
            '<div class="col-sm-4" id="apps_col_1"></div>' +
            '<div class="col-sm-4" id="apps_col_2"></div>' +
            '</div>');
        let col = 0;
        // Get all the keys of the modules
        let mods = $.map(lssm.Module, function (value, index) {
            return [index];
        });
        // Sort the lssm_module keys
        mods.sort(function (a, b) {
            "use strict";
            let aName = I18n.t("lssm.apps." + a + ".name").toLowerCase();
            let bName = I18n.t("lssm.apps." + b + ".name").toLowerCase();
            if (aName < bName) {
                return -1;
            } else {
                return (aName > bName) ? 1 : 0;
            }
        });
        for (let i in mods) {
            let mod = lssm.Module[mods[i]];
            let isSupportedLocale = !('supportedLocales' in mod) ||
                mod.supportedLocales.indexOf(I18n.currentLocale()) >= 0;
            // Do not show certain modules in the lssm.appstore or is not supported with this locale
            if ('noapp' in mod && mod.noapp === true || !isSupportedLocale) {
                continue;
            }
            let nomapkit = (typeof mapkit !== "undefined" && 'nomapkit' in mod && mod.nomapkit === true);
            let dom = '<div style="margin-top:10px;" class="lssm_module' +
                (mod.develop ? ' lssm_module_develop' : '') + '">' +
                '<div class="panel panel-default" style="display: inline-block;width:100%;">' +
                '<div class="panel-body">' +
                '<span class="pull-right">';
            if(!nomapkit)
                dom += '<div class="onoffswitch">' +
                    '<input class="onoffswitch-checkbox" id="lssm.modules_' + mods[i] + '" ' +
                    (mod.active ? 'checked="true"' : '') + ' value="' + mods[i] +
                    '" name="onoffswitch" type="checkbox">' +
                    '<label class="onoffswitch-label" for="lssm.modules_' + mods[i] + '"></label>' +
                    '</div>';
            dom += '</span>' +
                '<h4>' + I18n.t('lssm.apps.' + mods[i] + '.name') + '</h4>';
            if(!nomapkit)
                dom += '<small style="display:none">' + I18n.t('lssm.apps.' + mods[i] + '.description');
            else
                dom += '<small style="color:darkred">' +I18n.t('lssm.mapkit');

            dom += '</small>' +
                '</div>' +
                '</div>' +
                '</div>';
            let panel = $(dom);
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
        let prefix = lssm.config.prefix + '_appstore';
        let div = $(
            '<div class="col-md-12 lssm.appstore" id="' + prefix + '">' +
            '<div class="row">' +
            '<h2>' + I18n.t('lssm.appstore') + '</h2>' +
            '<p class="lead">' + I18n.t('lssm.appstore_welcome') + '.</p>' +
            '<p>' + I18n.t('lssm.appstore_desc') + '</p>' +
            '<input type="text" class="form-control pull-right" id="' + prefix +
            '_search" placeholder="Suche" style=" width:25%;display:inline-block;">' +
            '</div>' +
            '</div>'
        );
        div.append(this.createModulePanels());
        return div;
    },

    // Menüpunkt zu den Modulen / Einstellungen / Dashboard
    appendAppstore: function () {
        // Variablen setzen für weitere Verwendung
        let prefix = lssm.config.prefix + '_appstore';
        let settingButton = $('<li role="presentation" id="' + prefix + '"><a id="' + prefix +
            '_activate" href="#">' +
            I18n.t('lssm.appstore') + '</a></li>');

        let content = $('#navbar-mobile-footer').prev();
        content.attr('id', 'content');

        settingButton.click(function () {
            let div = $('<div class="row" id="' + prefix + '_row"></div>').append(lssm.appstore.createModuleMain());
            let dom = lssm.modal.show(div.html(), lssm.appstore.closeAppstore);
            $(dom).on('keyup', '#' + prefix + '_search', function () {
                "use strict";
                let ss = $(this).val();
                if (ss.length > 0) {
                    $(dom).find(".lssm_module:containsci(" + ss + ")").show();
                    $(dom).find(".lssm_module:not(:containsci(" + ss + "))").hide();
                } else {
                    $(dom).find(".lssm_module").show();
                }
            });
            $(dom).on('change', '.onoffswitch-checkbox', function (ev) {
                let e = ev.target;
                if (e.checked && !lssm.appstore.canActivate(lssm.Module[e.value])) {
                    $(e).prop('checked', false);
                    let warn = "\"" + I18n.t('lssm.apps.' + e.value + '.name') + "\" " + I18n.t(
                        'lssm.cantactivate');
                    // TODO: Sprechendere Variablennamen
                    for (let c in lssm.Module[e.value].collisions) {
                        let d = lssm.Module[e.value].collisions[c];
                        if (lssm.Module[d].active) {
                            warn += "\r\n" + I18n.t('lssm.apps.' + d + '.name');
                        }
                    }
                    alert(warn);
                    return;
                }
                lssm.Module[e.value].active = e.checked;
            });
            $(dom).find("h4").on("click", function () {
                "use strict";
                let next = $(this).next();
                if (next.is(":hidden")) {
                    next.slideDown("slow");
                } else {
                    next.slideUp("slow");
                }
            });
        });
        // einhängen des Buttons in der Navi
        $('#' + lssm.config.prefix + '_menu').append(settingButton);
    },
    closeAppstore: function () {
        "use strict";
        let action = lssm.appstore.checkModChanges();
        lssm.modules.saveall();
        if (action === "Reload") {
            location.reload();
        } else {
            $(document).unbind(lssm.hook.prename("lightboxClose"),lssm.appstore.closeAppstore);
            // Inform the user about activated modules.
            let activated = "";
            for (let m in action) {
                lssm.modules.load(action[m]);
                activated += I18n.t('lssm.apps.' + action[m] + '.name') + ', ';
            }
            activated = activated.substring(0, activated.length - 2);
            if (activated.length > 0) {
                let msg = I18n.t('lssm.activated') + ' ' + activated;
                lssm.notification(msg);
            }
        }
    },

    /**
     * Check if modules have been activated/deactivated and tell the caller what to do.
     * Returns: "Reload" or a array of modules to load
     */
    checkModChanges: function () {
        "use strict";
        let activated = [];
        let deactivated = [];
        let modules = lssm.settings.get("Modules", {});
        for (let m in lssm.Module) {
            if (modules[m] && !lssm.Module[m].active) {
                deactivated.push(m);
            } else if ((!modules[m]) && lssm.Module[m].active) {
                activated.push(m);
            }
        }
        if (deactivated.length > 0) {
            return "Reload";
        }
        return activated;
    },

    createDropDown: function () {
        let lssm_dropdown = $(' <li class="dropdown" id="' + lssm.config.prefix + '_dropdown">' +
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

    exists: function(key)
    {
        return localStorage.getItem(lssm.config.prefix + '_' + key) !== null;
    },

    // Get a config value from localstorage
    get: function (key, defaultvalue) {
        "use strict";
        if (typeof defaultvalue === "undefined")
        // defaultvalue is not set, return null if nothing found
        {
            defaultvalue = null;
        }
        let data;
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
        localStorage.removeItem(`${lssm.config.prefix}_${key}`);
    }
};

/**
 * Add the managed settings-functions to lssm
 */
lssm.managedSettings = {
    registeredModules: {},

    register: function (moduleSettings) {
        "use strict";
        let moduleId = moduleSettings.id;
        let settingsKey;
        // If settings don't exist, overwrite with defaults
        if (!lssm.settings.get(moduleId)) {
            for (settingsKey in moduleSettings.settings) {
                moduleSettings.settings[settingsKey].value = moduleSettings.settings[settingsKey].default;
            }
            // If we have values use them
        } else {
            let storedSettings = lssm.settings.get(moduleId);
            for (settingsKey in moduleSettings.settings) {
                if (storedSettings[settingsKey] != null) {
                    moduleSettings.settings[settingsKey].value = storedSettings[settingsKey];
                } else {
                    moduleSettings.settings[settingsKey].value = moduleSettings.settings[settingsKey].default;
                }
            }
        }
        lssm.managedSettings.registeredModules[moduleId] = moduleSettings;
    },

    reset: function (moduleId) {
        if (!lssm.settings.get(moduleId) || !lssm.managedSettings.registeredModules[moduleId]) {
            return;
        }
        lssm.settings.remove(lssm.config.prefix + '_' + moduleId);
        lssm.managedSettings.register(lssm.managedSettings.registeredModules[moduleId]);
    },

    getSetting: function (module, field) {
        "use strict";
        let settings = this.getSettings(module);
        if (settings && settings[field] !== undefined) {
            return settings[field].value;
        } else {
            return null;
        }
    },

    getSettings: function (module) {
        "use strict";
        if (lssm.managedSettings.registeredModules[module]) {
            return lssm.managedSettings.registeredModules[module].settings;
        } else {
            return null;
        }
    },

    update: function (moduleSettings) {
        "use strict";

        // Store managedSettings for runtime
        let moduleId = moduleSettings.id;
        lssm.managedSettings.registeredModules[moduleId] = moduleSettings;

        // Strip down settings object to values only and persist them
        let storeSettings = {};
        let settingsKey;
        for (settingsKey in moduleSettings.settings) {
            storeSettings[settingsKey] = moduleSettings.settings[settingsKey].value;
        }
        lssm.settings.set(moduleId, storeSettings);
    }

};

/**
 * Add the module-handler to LSSM
 */
lssm.modules = {
    saveall: function () {
        "use strict";
        let arr = {};
        for (let i in lssm.Module) {
            if(lssm.Module[i].active)
                arr[i] = lssm.Module[i].active;
        }
        lssm.settings.set("Modules", arr);
    },
    // Zum zwischenspeichern der schon geladenen Module
    addLocales: function (module) {
        let mod = module.toString();
        if (mod in lssm.Module) {
            let keys = ['name', 'description'];
            // TODO: sprechendere Variablennamen
            for (let k in keys) {
                k = keys[k];
                if (!(k in lssm.Module[mod])) {
                    continue;
                }
                for (let l in lssm.Module[mod][k]) {
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
            for (let m in lssm.Module) {
                this.load(m);
            }
        } catch (e) {
            console.error("LOADALL: " + e.message);
        }
    },

    load: function (module) {
        try {
            let path = window.location.pathname.length;
            let uid = "";
            let game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            this.addLocales(module);
            if (lssm.Module[module].active && lssm.Module.status !== 'develop' &&
                lssm.appstore.canActivate(lssm.Module[module])) {
                if (path <= 2 || ("inframe" in lssm.Module[module] && lssm.Module[module].inframe ===
                    true)) {
                    if (lssm.Module[module].source) {
                        $.getScript(lssm.getlink(lssm.Module[module].source));
                    }
                }
            }
        } catch (e) {
            console.error("On lssm_module load: " + e.message);
        }
    },
    isActive: function(e) {
        return lssm.Module[e].active;
    }
};

/**
 * Add hooks to lssm
 */
lssm.hook = {
    orgfunctions: {},
    prename: function (event) {
        "use strict";
        let self = this;
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
        let self = this;
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
        let e = parseInt($("#lightbox_background").css("width")),
            i = parseInt($("#lightbox_background").css("height")),
            n = i - 100;
        if (592 > n) {
            n = i - 30;
        }
        let s = e - 70;
        if (862 > s) {
            s = e - 0;
        }
        let o = s - 2,
            a = n - 34,
            r = (e - s) / 2;
        $("#lightbox_box").css("width", s + "px")
            .css("height", n + "px")
            .show();
        $("#lightbox_box")
            .append('<div class="lightbox_iframe" style="width:' + o + "px;height:" + a +
                'px" id="lightbox_iframe_' +
                iframe_lightbox_number + '"><div id="iframe-inside-container">' + content + '</div></div>');
        $("#lightbox_background").show();
        $("#lightbox_box").css("left", r + "px");
        $("#lightbox_box").css("top", (i - n) / 2 + "px");
        $("#lightbox_iframe_" + iframe_lightbox_number + " #iframe-inside-container").css("height", a).css(
            "width", o);
        setTimeout(function () {
            $("#lightbox_iframe_" + iframe_lightbox_number).show().focus();
            if (typeof closefunc !== "undefined") {
                $(document).bind(lssm.hook.prename("lightboxClose"), closefunc);
            }
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
        .prepend('<link href="' + lssm.getlink('/lss-manager-v3/css/main.css') +
            '" rel="stylesheet" type="text/css">');
    // Create the lssm dropdown menu
    lssm.appstore.createDropDown();
    // And append the version to it
    $('#' + lssm.config.prefix + '_menu')
        .prepend('<li class="menu-center"><a href="' + lssm.config.github + '" target="_blank">' +
            I18n.t('lssm.version') + ': ' + lssm.config.version + '</a></li><li class="divider"></li>');
    // Only execute everything else if user is logged in
    if (typeof user_id === "undefined") {
        $('#' + lssm.config.prefix + '_menu').append('<li class="menu-center">' + I18n.t('lssm.login') +
            '</li>');
    } else {
        // Oh, and don't forget the helperfunctions
        $.getScript(lssm.getlink('/lss-manager-v3/helperfunctions.js'))
            .fail(function () {
                $("#map_outer")
                    .before(
                        '<div class="alert alert-danger alert-dismissable" style="text-align:center"><a href="#" ' +
                        'class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
                        I18n.t('lssm.cantload') + '</div>');
            })
            .done(function () {
                // There goes the core
                let loadCore = function () {
                    // Load required library's
                    $("head")
                        .append(
                            '<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" ' +
                            'integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous">' +
                            '</script>')
                        .append('<script src="' + lssm.getlink('/lss-manager-v3/js/highcharts.min.js') +
                            '" type="text/javascript"></script>')
                        .append(
                            '<link rel="stylesheet" ' +
                            'href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css">'
                        );
                    let modules = lssm.settings.get('Modules') || {};
                    // Get the last activated modules
                    let deact = 0;
                    for (let i in modules) {
                        let modname = i.toString();
                        let nomapkit = (typeof mapkit !== "undefined" && 'nomapkit' in lssm.Module[i] && lssm.Module[i].nomapkit === true);
                        if (nomapkit && modules[i]) {
                            console.error(modname + " is not compatible with mapkit.");
                            lssm.Module[i].active = false;
                            deact++;
                        } else if ((modname in lssm.Module) === false) {
                            console.error(modname + " is not a valid app. Skipping.");
                            deact++;
                        } else if (lssm.Module[i].active === false) {
                            lssm.Module[i].active = modules[i];
                        }
                    }
                    if (deact > 0)
                        lssm.modules.saveall();
                    let overwriteLoadVehicles = false;
                    let overwriteLoadBuildings = false;
                    for (let i in modules) {
                        let module = lssm.Module[i];
                        if (module.needVehicles && module.active) {
                            overwriteLoadVehicles = true;
                            break;
                        }
                    }
                    for (let i in modules) {
                        let module = lssm.Module[i];
                        if (module.needBuildings && module.active) {
                            overwriteLoadBuildings = true;
                            break;
                        }
                    }
                    lssm.get_vehicles(false, overwriteLoadVehicles);
                    lssm.get_buildings(false, overwriteLoadBuildings);
                    setInterval(function () {
                        lssm.get_buildings(true, overwriteLoadVehicles);
                        lssm.get_vehicles(true, overwriteLoadBuildings);
                    }, 300000);
                    // Let's load all the modules
                    lssm.modules.loadall();
                    // Oh, we also need a appstore
                    lssm.appstore.appendAppstore();
                };
                loadCore();
            });
    }
})(I18n, jQuery);
