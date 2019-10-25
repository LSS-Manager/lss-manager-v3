// ==UserScript==
// @name         LSS Manager v3 Autoupdater
// @version      3.3.0
// @description  Das Tool für LSS
// @author       lost | northdegree | mausmajor | dlrg-dominik | mrweezle | sanni | jan
// @homepage     https://lss-manager.de
// @include      *://leitstellenspiel.de/*
// @include      *://www.leitstellenspiel.de/*
// @include      *://missionchief.co.uk/*
// @include      *://www.missionchief.co.uk/*
// @include      *://missionchief.com/*
// @include      *://www.missionchief.com/*
// @include      *://meldkamerspel.com/*
// @include      *://www.meldkamerspel.com/*
// @include      *://centro-de-mando.es/*
// @include      *://www.centro-de-mando.es/*
// @include      *://missionchief-australia.com/*
// @include      *://www.missionchief-australia.com/*
// @updateURL    https://github.com/LSS-Manager/lss-manager-v3/raw/master/lssm-v3.user.js
// @grant        none
// @run          document-start
// ==/UserScript==
if("undefined"==typeof jQuery)throw new Error("LSS-Manager: No jQuery! Aborting!");$.ajaxPrefilter(function(e,a,s){("script"==e.dataType||"script"==a.dataType||"stylesheet"==e.dataType||"stylesheet"==a.dataType)&&(e.cache=!0)});var uid="";"undefined"!=typeof user_id&&(game=window.location.hostname.toLowerCase().replace("www.","").split(".")[0],uid="?uid="+game+user_id),$("head").append('<script id="lss_manager_js" src="https://proxy.lss-manager.de/v3/lss-manager-v3/lss-manager-v3.dev.js'+uid+'" type="text/javascript"></script>');
