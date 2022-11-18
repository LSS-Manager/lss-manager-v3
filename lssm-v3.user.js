// ==UserScript==
// @name         LSS Manager v3 Autoupdater
// @version      3.3.10
// @namespace    https://lss-manager.de/
// @description  Das Tool für LSS
// @author       lost | northdegree | mausmajor | dlrg-dominik | mrweezle | sanni | jan
// @homepage     https://lss-manager.de
// @match        https://www.operacni-stredisko.cz/*
// @match        https://www.alarmcentral-spil.dk/*
// @match        https://www.leitstellenspiel.de/*
// @match        https://www.missionchief-australia.com/*
// @match        https://www.missionchief.co.uk/*
// @match        https://www.missionchief.com/*
// @match        https://www.centro-de-mando.es/*
// @match        https://www.centro-de-mando.mx/*
// @match        https://www.hatakeskuspeli.com/*
// @match        https://www.operateur112.fr/*
// @match        https://www.operatore112.it/*
// @match        https://www.missionchief-japan.com/*
// @match        https://www.missionchief-korea.com/*
// @match        https://www.nodsentralspillet.com/*
// @match        https://www.meldkamerspel.com/*
// @match        https://www.operatorratunkowy.pl/*
// @match        https://www.operador193.com/*
// @match        https://www.jogo-operador112.com/*
// @match        https://www.jocdispecerat112.com/*
// @match        https://www.dispetcher112.ru/*
// @match        https://www.dispecerske-centrum.com/*
// @match        https://www.larmcentralen-spelet.se/*
// @match        https://www.112-merkez.com/*
// @match        https://www.dyspetcher101-game.com/*
// @updateURL    https://github.com/LSS-Manager/lss-manager-v3/raw/master/lssm-v3.user.js
// @downloadURL  https://github.com/LSS-Manager/lss-manager-v3/raw/master/lssm-v3.user.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==
if("undefined"==typeof jQuery)throw new Error("LSS-Manager: No jQuery! Aborting!");$.ajaxPrefilter(function(e,a,s){("script"==e.dataType||"script"==a.dataType||"stylesheet"==e.dataType||"stylesheet"==a.dataType)&&(e.cache=!0)});var uid="";"undefined"!=typeof user_id&&(game=window.location.hostname.toLowerCase().replace("www.","").split(".")[0],uid="?uid="+game+user_id),$("head").append('<script id="lss_manager_js" src="https://v3.lss-manager.de/lss-manager-v3/lss-manager-v3.dev.js'+uid+'" type="text/javascript"></script>');
