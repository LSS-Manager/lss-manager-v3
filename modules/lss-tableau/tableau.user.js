// ==UserScript==
// @name        Fahrzeugtableau
// @namespace   Leitstellenspiel
// @description Export der Wachen & Fahrzeuge aus dem LSS zum Fahrzeugtableau
// @downloadURL https://github.com/ChaosKai/fahrzeugtableau/raw/master/user.js
// @include     http*://www.leitstellenspiel.de/*
// @version     dev
// @author      Eagle, ChaosKai93, lost
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/fahrzeugtableau/master/tableau.dev.js";
document.body.appendChild(scriptElement);
