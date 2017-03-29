// ==UserScript==
// @name         LSS Manager v3 AutoUpdate
// @version      beta 0.2
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
(function() {
    // alle Settings die immer wieder benötigt werden
    $('head').append('<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="   +crossorigin="anonymous"></script>');
    var set = {
        server: "https://lssm-develop.lost.design/sources", // Domain wo alles liegt
        prefix: 'lssm',
        github: 'https://github.com/',
        ModuleKey: function() {
            return this.prefix + '_Module';
        },
        locale: I18n.locale || 'de'
    };
    var Module = {
        MissionOut: {
            name: {
                de: 'Einsatzliste komprimieren',
                en: 'minify Mission',
                nl: 'MissionOut'
            },
            active: true,
            description: {
                de: 'Einklappen der Einsätze'
            },
            ghuser: 'Mausmajor',
            source: '/lss-MissionOut/MissionOut.user.js',
            develop: false,
            version: 'v 1.0',
            copyright: '@Mausmajor'
        },
        ChatPopup: {
            name: {
                de: 'Chat Popup',
                en: 'Chat Popup',
                nl: 'Chat Popup'
            },
            active: true,
            description: {
                de: 'Zeigt ein Popup an wenn eine neue Chatnachricht erscheint'
            },
            ghuser: 'Mausmajor',
            source: '/lss-chat/Chat.user.js',
            develop: false,
            version: 'v 1.0',
            copyright: '@Mausmajor'
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
            source: '/lss-redesign-01/Redesign-01.user.js',
            develop: true,
            version: 'alpha-0.1',
            copyright: '@lostdesign'
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
            source: '/lss-tableau/tableau.user.js',
            develop: false,
            version: 'v 0.1',
            copyright: '@ChaosKai93'
        }
    };
    // Zum zwischenspeichern der schon geladenen Module
    var activeModule = [];

    function loadModule() {
        for (var i in Module) {
            if (Module[i].active && Module.status != 'develop' && activeModule.indexOf(i) === -1) {
                activeModule.push(i);
                $('body').append('<script src="'+set.server + Module[i].source+'" type="text/javascript"></script>');
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
        for (var i in load)
            Module[i].active = load[i];
    }

    // Erstellen der Pandels
    function createModulePanels() {
        var modulePanelHtml = '';
        for (var i in Module) {
            var mod = Module[i];
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
        var div = $('<div class="col-md-12 lssm_appstore" id="' + prefix + '"><div class="jumbotron"><h1>APPSTORE</h1><p>Willkommen im LSS Manager Appstore.</p><p>Hier findest du verschiedene Plugins, die dein Spielerlebnis bereichern sollen. Jedes Plugin kann einzeln aktiviert werden, indem du den Hebel auf Grün stellst. Sollte es zu irgendwelchen Problemen kommen, kannst du uns gerne eine Nachricht schreiben oder » hier « im Forum einen Beitrag verfassen.</p><br><p><button type="button" class="btn btn-danger btn-sm" id="' + prefix + '_close" aria-label="Close"><span aria-hidden="true">Zurück zum Leitstellenspiel</span></button></p><span class="pull-right"><small>MADE BY:</small>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/81460" target="_blank" class="username-link">@lost</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=lost" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/168556" target="_blank" class="username-link">@Northdegree</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=Northdegree" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/201213" target="_blank" class="username-link">@Mausmajor</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=Mausmajor" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/32912" target="_blank" class="username-link">@ChaosKai93</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=ChaosKai93" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-danger">Version 0.1</span></span></div><nav class="navbar navbar-default navbar-static-top" role="navigation" id="lssm_appstore_settingsbar" style=""> <div class="lssm_appstore_settingsbar_div" style="padding-left: 20px;padding-right: 20px;"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li><a href="#" role="tab" data-toggle="tab">EINSTELLUNGEN:</a></li><li><a href="#" role="tab" data-toggle="tab">Redesign #01 <span class="label label-success">ok</span></a></li><li><a href="#" role="tab" data-toggle="tab">Tastatur Alarmierung</a></li><li><a href="#el-k" role="tab" data-toggle="tab">Einsatzliste komprimieren</a> </li><li><a href="#wachen-planung" role="tab" data-toggle="tab">Wachenplanung</a> </li></ul><!--<ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-ok"></span>ok</a></li></ul>--></div></div></nav></div>');
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

})()
