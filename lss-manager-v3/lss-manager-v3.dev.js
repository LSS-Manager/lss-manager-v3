// ==UserScript==
// @name         LSS Manager v3 AutoUpdate
// @version      beta 0.1
// @description  Das Tool für LSS
// @author       lost | mausmajor | chaoskai | northdegree
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      *://www.missionchief.com/*
// @include      *://www.missionchief.com/
// @grant        none
// @run          document-start

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
                de: 'Einklappen der EinsÃ¤tze'
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
                de: 'Neues Design fÃ¼r die OberflÃ¤che'
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
            modulePanelHtml += '<div class="col-md-3 '+ (mod.develop ? set.ModuleKey()+ '_develop' : '') + '"><div class="panel panel-default" style="display: inline-block;margin: 10px; width:100%;">' +
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
    // Packt alle ModulPanels in ein Div zudem werden beim an und ausschalten die Einstellungen geändert  & gespeichert;
    // TODO: DIV mit ID so wie CSS ausstatten & festlegen wo es eingebettet werden soll
    function createModuleMain() {
        var prefix = set.prefix + '_appstore';
        var div = $('<div class="col-md-12 lssm_appstore" id="' + prefix + '"><p>Erstellt von lostdesign - northdegree - mausmajor - chaoskai</p><div class="row" style="padding-left:35px; padding-right:35px"><button type="button" class="btn btn-danger btn-sm" id="' + prefix + '_close" aria-label="Close"><span aria-hidden="true">ZurÃ¼ck zum Leitstellenspiel</span></button></div></div>');
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
            // versteckt den HauptkÃ¶rper von LSS und öffnet das LSS Manager Einstellungsfenster / den Appstore
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
