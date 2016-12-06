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
  var Module = {
    MissionOut:{
      name:'MissionOut',
      aktiv:true,
      description:{
        de:'Einklappen der Einsätze'
      }
      sorce:'/lss-MissionOut/MissionOut.user.js'
    },
    Chat:{
      name:'Chat',
      aktiv:true,
      description:{
        de:'Zeigt ein Popup an wenn eine neue Chatnachricht erscheint'
      }
      sorce:'/lss-chat/Chat.user.js'
    }
  };
  
})()
