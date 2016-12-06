// ==UserScript==
// @name         LSS Manager v3 AutoUpdate
// @version      3.0
// @description  Das Tool für LSS
// @author       lost | mausmajor | chaoskai | JanH8 | in memories: northdegree
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      *://www.missionchief.com/*
// @include      *://www.missionchief.com/
// @grant        none
// @run          document-start
// ==/UserScript==
(function(){
  // alle Settings die immer wieder benötigt werden
  var set = {
    praefix:'LSS_Manager_v3_'
    ModuleKey:set.prefix+'Module',
    locale:I18n.locale||'de'
  };
  var Module = {
    MissionOut:{
      name:'MissionOut',
      aktiv:true,
      description:{
        de:'Einklappen der Einsätze'
      }
      more:'/sources/lss-chat/readme.md',
      source:'/lss-MissionOut/MissionOut.user.js'
    },
    Chat:{
      name:'Chat',
      aktiv:true,
      description:{
        de:'Zeigt ein Popup an wenn eine neue Chatnachricht erscheint'
      }
      more:'/sources/lss-chat/readme.md',
      source:'/lss-chat/Chat.user.js'
    }
  };
  
  // Speichern der Einstellungen
  function saveSettings(){
    var arr = {};
    for(var i in Module)
      arr[i]=Module[i].aktiv;
    localStorage.setItem(set.ModuleKey,JSON.stringify(arr));
  }
  // laden der Einstellungen
  function loadSettings(){
    var load = JSON.parse(localStorage.getItem(set.ModuleKey)) || {};
    for(var i in load)
      Module[i].aktiv =load[i];
  }
  
  // Erstellen der Pandels
  function creatModulPanels(){
    var html='';
    for(var i in Module){
          html+='<div class="panel panel-default" style="display: inline-block;margin: 10px;">'
          +'<div class="panel-body">'
              +'<span class="pull-right">'
                  +'<div class="onoffswitch">'
                      +'<input class="onoffswitch-checkbox" id="'+set[ModuleKey]+'_'+i+'" name="onoffswitch" type="checkbox">'
                      '<label class="onoffswitch-label" for="'set[ModuleKey]+'_'+i+'"></label>'
                  +'</div><!-- end .onoffswitch-->'
               +'</span>'
               +'<h4>'+i+'</h4>'
                    +'<small>'+Module[i].description[set.locale]+'</small>'
          +'</div><!-- end .panel-body-->'
          +'<div class="panel-footer">'
              +'<a href="'+Module[i].more'">Github</a>'
          +'</div>'
      +'</div><!-- end .panel-->"';
    }
    return html;
  }
})()
