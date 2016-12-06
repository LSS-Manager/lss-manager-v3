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
    ModuleKey:set.prefix+'Module'
  };
  var Module = {
    MissionOut:{
      name:'MissionOut',
      aktiv:true,
      description:{
        de:'Einklappen der Einsätze'
      }
      source:'/lss-MissionOut/MissionOut.user.js'
    },
    Chat:{
      name:'Chat',
      aktiv:true,
      description:{
        de:'Zeigt ein Popup an wenn eine neue Chatnachricht erscheint'
      }
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
})()
