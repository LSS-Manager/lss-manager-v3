// ==UserScript==
// @name         LSS Manger 
// @namespace    http://www.lss-manager.de
// @version      2.7
// @description  Erweiterungsscript des Browserspiels Leitstellenspiel.de
// @author       lost & northdegree
// @include      https://www.leitstellenspiel.de/
// @include      https://www.leitstellenspiel.de/*
// @include      https://www.missionchief.com/*
// @include      https://www.missionchief.com/
// @grant        none
// @run-at       document-start
// ==/UserScript==

// set variables and arrays --------------------------------------------------------------------------------------------------------------------------------
var curwindow = "#missions_outer",
    curtab_db = "#db_main_outer",
    curtab_wp = "#wp_fw",
	// Dev: https://dev.northdegree.de/lss
	// Prod: https://proxy.lss-manager.de
    server = "https://proxy.lss-manager.de", // All files are getting loaded from this server (without ending /)
    markers = [],
    mapfix = false,
    nightmode = 'false',
    newmessages = 0,
    buildingsById = {
        BUILDING_TYPE_FEUERWACHE: 'Feuerwache',
        BUILDING_TYPE_FEUERWEHRSCHULE: 'Feuerwehrschule',
        BUILDING_TYPE_RETTUNGSWACHE: 'Rettungswache',
        BUILDING_TYPE_RETTUNGSSCHULE: 'Rettungsschule',
        BUILDING_TYPE_HOSPITAL: 'Krankenhaus',
        BUILDING_TYPE_NOTARZTHUBSCHRAUBERLANDEPLATZ: 'Rettungshubschrauber-Station',
        BUILDING_TYPE_POLIZEIWACHE: 'Polizeiwache',
        BUILDING_TYPE_LEITSTELLE: 'Leitstelle',
        BUILDING_TYPE_POLIZEISCHULE: 'Polizeischule',
        BUILDING_TYPE_THW: 'THW',
        BUILDING_TYPE_THW_BUNDESSCHULE: 'THW Schule',
        BUILDING_TYPE_BEREITSCHAFTSPOLIZEI: 'Bereitschaftspolizei',
        BUILDING_TYPE_POLIZEIHUBSCHRAUBERLANDEPLATZ: 'Polizeihubschrauber-Station',
        BUILDING_TYPE_SEG: 'SEG'
    },
    lssm.carsById = {
        "0": 'LF 20',
        "1": 'LF 10',
        "2": 'DLK 23',
        "3": 'ELW 1',
        "4": 'RW',
        "5": 'GW-A',
        "6": 'LF 8/6',
        "7": 'LF 20/16',
        "8": 'LF 10/6',
        "9": 'LF 16-TS',
        "10": 'GW-Öl',
        "11": 'GW-L2-Wasser',
        "12": 'GW-Messtechnik',
        "13": 'SW 1000',
        "14": 'SW 2000',
        "15": 'SW 2000-Tr',
        "16": 'SW KatS',
        "17": 'TLF 2000',
        "18": 'TLF 3000',
        "19": 'TLF 8/8',
        "20": 'TLF 8/18',
        "21": 'TLF 16/24-Tr',
        "22": 'TLF 16/25',
        "23": 'TLF 16/45',
        "24": 'TLF 20/40',
        "25": 'TLF 20/40-SL',
        "26": 'TLF 16',
        "27": 'GW-Gefahrgut',
        "28": 'RTW',
        "29": 'NEF',
        "30": 'HLF 20',
        "31": 'RTH',
        "32": 'FuStW',
        "33": 'GW-Höhenrettung',
        "34": 'ELW 2',
        "35": 'leBefKw',
        "36": 'MTW',
        "37": 'TSF-W',
        "38": 'KTW',
        "39": 'GKW',
        "40": 'MTW-TZ',
        "41": 'MzKW',
        "42": 'LKW K9',
        "43": 'BRmG R',
        "44": 'Anh. DLE',
        "45": 'MLW 5',
        "46": 'WLF',
        "47": 'AB-Rüst',
        "48": 'AB-Atemschutz',
        "49": 'AB-Öl',
        "50": 'GruKw',
        "51": 'FüKw',
        "52": 'GefKw',
        "53": 'Dekon-P',
        "54": 'AB-Dekon',
        "55": 'KdoW-LNA',
        "56": 'KdoW-Orgl',
        "57": 'FwK',
        "58": 'KTW Typ B',
        "59": 'ELW 1 SEG',
        "60": 'GW-San',
        "61": 'Polizeihubschrauber',
        "62": 'AB-Schlauch'
    };

// load previous lss settings --------------------------------------------------------------------------------------------------------------------------------
function loadConfig(){
    for (var key in localStorage){
        if(key.indexOf("lssm_") === 0){
            var val = localStorage.getItem(key.toString());
            if (key == "lssm_nightmode" && val == "true") {
                $("#night-mode").attr("checked",true);
                nightmode = val;
                NightMode();
            } else if (key == "lssm_sw_verband" && val == "true") {
                $("#sw_verband").click();
            } else if (key == "lssm_mode_fms5" && val == "true") {
                $("#moveFMS5-sw").click();
            } else if (typeof val !== 'undefined') {
                $("#"+val).click();
            }
        }
    }
}

// important css for lss ==================================================================================================================================

//$("*").css("background-image","none");


// group car id's for chart --------------------------------------------------------------------------------------------------------------------------------
function fz_type(id) {
    /*
        FW = 0
        RD = 1
        Pol/BP = 2
        THW = 3
    */
    if (id <= 27 || (id >= 46 && id <= 49) || id == 30 || id == 33 || id == 34 || id == 36 || id == 37 || id == 53 || id == 54 || id == 57 || id == 62) {
        return 0;
    } else if (id == 28 || id == 29 || id == 31 || id == 38 || id == 55 || id == 56 || id == 58 || id == 59 || id == 60) {
        return 1;
    } else if (id >= 39 && id <= 45) {
        return 3;
    } else {
        return 2;
    }
}

// Fix for the fixed dashboard
// This fix is quick and dirty, we are just waiting for Sebastian to add an id to this elemtn.
//moved to active_redesign()

// add extra recourses and own scripts --------------------------------------------------------------------------------------------------------------------------------
$('head')
    .append('<link id="lss_font_css" href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">')
    //.append('<link href="https://fonts.googleapis.com/css?family=Sintony:400,700" rel="stylesheet" type="text/css">')
    .append('<link id="lss_icon_css" async rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">')
    .append('<script id="lss_dashboard_js" async src="'+server+'/lss-dashboard.dev.js" type="text/javascript">')
    .append('<script id="lss_chart_js" async src="'+server+'/highcharts.min.js" type="text/javascript">')
    .append('<script async src="'+server+'/json2.js" type="text/javascript">')
    .append("<style type='text/css' rel='stylesheet' id='switch-css'>.onoffswitch{position:relative;width:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.onoffswitch-checkbox{display:none}.onoffswitch-label{display:block;overflow:hidden;cursor:pointer;height:15px;padding:0;line-height:15px;border:2px solid #CCC;border-radius:15px;background-color:#FFF;transition:background-color .3s ease-in}.onoffswitch-label:before{content:'';display:block;width:15px;margin:0;background:#FFF;position:absolute;top:0;bottom:0;right:13px;border:2px solid #CCC;border-radius:15px;transition:all .3s ease-in 0}.onoffswitch-checkbox:checked + .onoffswitch-label{background-color:#49E845}.onoffswitch-checkbox:checked + .onoffswitch-label,.onoffswitch-checkbox:checked + .onoffswitch-label:before{border-color:#49E845}.onoffswitch-checkbox:checked + .onoffswitch-label:before{right:0}</style>");

$("#news_li").before('<li>Redesign<div class="onoffswitch"><input class="onoffswitch-checkbox" id="s-redesign" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="s-redesign"></label></div></li>');

// add link to thread and new logo --------------------------------------------------------------------------------------------------------------------------------
$("a[class^='navbar-brand hidden-xs']").append("<a href='http://forum.leitstellenspiel.de/index.php/Thread/8077-REDESIGNS-by-lost/'><img src='http://i.imgur.com/cPr2nKr.png' style='width:250px; top: 10px;left: 0; position: absolute !important;'></a>");

// add new id's for keyboard shortcuts --------------------------------------------------------------------------------------------------------------------------------
$("a:contains('Sprechwunsch bearbeiten')").attr('id', 'sprechwunsch-bearbeiten');
$("a:contains('Zurück zum Einsatz')").attr('id', 'zurueck-einsatz');
$("a:contains('Anfahren')").addClass('naechstes-krankenhaus');
$("a:contains('Rückalarmieren')").addClass('lf-zurueck');
$("small:contains('Fahrzeuge ausgeblendet.')").css('display', 'none');
$(".panel-heading:contains('Einsätze')").css('background-color', '#e74c3c').css("color", "#fff");
$("div[class^='visible-xs']").before('<br>');
$(".logo").css('display', 'none');
// Vorerst deaktiviert, da von Sebastian kopiert. Sollte Sebastian nicht die Fahrzeuge auf Anfahrt in den Button einbinden, diese Funktion erweitern
//$('#h2_vehicles_at_mission').append('<br><a href="#" id="backalarm_all" class="btn btn-default btn-xs pull-right">Alle Einheiten rückalarmieren</a>');

if (typeof map == "undefined") {
	// Shorten the text of that fucking button...
	$('a[href$="backalarmAll"]').html("Eigene Fahrzeuge r&uuml;ckalarmieren");
	// Copy the backalarm buttons to a h2 next to the top
	if($('#h2_vehicle_driving').length) {
		$('a[href$="backalarmAll"]').parent().detach().appendTo('#h2_vehicle_driving');
	} else if($('#h2_vehicles_at_mission').length) {
		$('a[href$="backalarmAll"]').parent().detach().appendTo('#h2_vehicles_at_mission');
	}
	// Remove the unneeded <tr>
	$('#mission_vehicle_at_mission tbody tr:last').remove();
	
	// Amount of vehicles at mission
    $('#h2_vehicles_at_mission').prepend($('#mission_vehicle_at_mission .building_list_fms').length+" ");
    $('#h2_vehicle_driving').prepend($('#mission_vehicle_driving .building_list_fms').length+" ");
}
// backalarm all vehicles --------------------------------------------------------------------------------------------------------------------------------
$('#backalarm_all').on("click", function () {
    $('.lf-zurueck').each(function (key, link) {
        $.ajax({
            timeout: 1000,
            url: link.href.replace("?return=mission", "")
        });
    });
    setTimeout(function () {
        window.location.reload();
    }, 500);
});

// keyboard shutcuts function --------------------------------------------------------------------------------------------------------------------------------
$(document).keydown(function (e) {
    if (!($("input").is(":focus"))) {
        switch (e.keyCode) {
            case 68:
                $("#mission_next_mission_btn")[0].click();
                break;
            case 87:
                $("#mission_alliance_share_btn")[0].click();
                break;
            case 65:
                $("#mission_previous_mission_btn")[0].click();
                break;
            case 83:
                $("#alert_next").click();
                break;
            case 81:
                $("#sprechwunsch-bearbeiten")[0].click();
                break;
            case 49:
                $(".naechstes-krankenhaus")[0].click();
                break;
            case 50:
                $(".naechstes-krankenhaus")[1].click();
                break;
            case 51:
                $(".naechstes-krankenhaus")[2].click();
                break;
            case 52:
                $(".naechstes-krankenhaus")[3].click();
                break;
            case 53:
                $(".naechstes-krankenhaus")[4].click();
                break;
            case 82:
                $("#zurueck-einsatz").click();
                break;
            case 69:
                $(".lf-zurueck")[0].click();
                break;
            case 88:
                $("#mission_alarm_btn").click();
                break;
            case 89:
                $("#mission_list").find("a[href^='/missions/']:eq(0)").click();
                break;
            case 67:
                lightboxClose();
            break;

        }
        return e.returnValue;
    }
});

// add settings, verbandstab, designmenu, dashboard & uhr
/* Sollte inline über den Einsätzen sein, sieht sonst komisch aus. */
$("#missions_outer")
    /* style="z-index:997;right:0px;font-weight:700!important;font-size:13px;text-transform:uppercase;position:fixed;border-radius:0px;top:60px" */
    .before('<div class="btn-group-vertical" id="lost-menu" style="z-index:997;right:0px;font-weight:700!important;font-size:13px;text-transform:uppercase;position:fixed;border-radius:0px;top:60px"><a href="#" class="btn btn-sm btn-default" id="lssm_zurueck-a" data-toggle="tooltip" data-placement="left" title="Zurück"><i id="lssm_zurueck" class="fa fa-arrow-left"></i></a><a href="#" class="btn btn-sm btn-default" id="dashboard-aa" data-toggle="tooltip" data-placement="left" title="Dashboard"><i id="dashboard" class="fa fa-area-chart"></i></a><a href="#" class="btn btn-sm btn-default" id="missions-aa" data-toggle="tooltip" data-placement="left" title="Einsätze"><i id="missions-fire" class="fa fa-fire"></i></a><a href="#" class="btn btn-sm btn-default" id="verband-aa" data-toggle="tooltip" data-placement="left" title="Verband"><i class="fa fa-fire"></i></a><a href="#" class="btn btn-sm btn-default" id="radio-aa" data-toggle="tooltip" data-placement="left" title="Funksprüche"><i id="radio-spin" class="fa fa-feed"></i></a><a href="#" class="btn btn-sm btn-default" id="buildings-aa" data-toggle="tooltip" data-placement="left" title="Wachen"><i id="buildings-spin" class="fa fa-building-o"></i></a><a href="#" class="btn btn-sm btn-default" id="chat-aa" data-toggle="tooltip" data-placement="left" title="Chat"><i id="chat-spin" class="fa fa-comment-o"></i></a><a href="#" class="btn btn-sm btn-default" id="settings-aa" style="font-weight:600;" data-toggle="tooltip" data-placement="left" title="Einstellungen"><i id="settings-spin" class="fa fa-cog"></i></a></div>')
$("#radio_outer") 
    .after('<div class="col-sm-4 overview_outer" id="settings_outer"><div id="settings1“ class="><div class="panel panel-default"><div class="panel-heading"><a href="#" id="s_close"><i class="fa fa-times-circle"></i></a>Einstellungen</div><div class="panel-body"><div class="col-md-12" id="settings_content"><h4 style="line-height:0.5;">Design</h4><div class="btn-group" id="color-menu"><a class="btn btn-sm btn-default" href="#" id="rot-design" style="background-color: transparent;"><i class="fa fa-circle" style="color:#e74c3c;"></i>Rot</a><a class="btn btn-sm btn-default" href="#" id="rtw-design" style="background-color: transparent;"><i class="fa fa-circle" style="color:#F7CA18;"></i>Gelb</a><a class="btn btn-sm btn-default" href="#" id="pol-design" style="background-color: transparent;"><i class="fa fa-circle" style="color:#2ecc71;"></i>Grün</a><a class="btn btn-sm btn-default" href="#" id="thw-design" style="background-color: transparent;"><i class="fa fa-circle" style="color:#3498db;"></i>Blau</a><a class="btn btn-sm btn-default" href="#" id="orange-design" style="background-color: transparent;"><i class="fa fa-circle" style="color:#f39c12;"></i>Orange</a><a class="btn btn-sm btn-default" href="#" id="pink-design" style="background-color: transparent;"><i class="fa fa-circle" style="color:#D2527F;"></i>Pink</a><a class="btn btn-sm btn-default" href="#" id="grau-design" style="background-color: transparent;"><i class="fa fa-circle" style="color:#6C7A89;"></i>Grau</a></div><br><br><div class="col-md-4">FMS5 Verband<div class="onoffswitch"><input class="onoffswitch-checkbox" id="sw_verband" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="sw_verband"></label></div></div><div class="col-md-4">FMS5 in Map<div class="onoffswitch"><input class="onoffswitch-checkbox" id="moveFMS5-sw" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="moveFMS5-sw"></label></div></div><div class="col-md-4">Uhr in Map<div class="onoffswitch"><input class="onoffswitch-checkbox" id="enclock" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="enclock"></label></div></div><div class="col-md-4">Night Mode<div class="onoffswitch"><input class="onoffswitch-checkbox" id="night-mode" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="night-mode"></label></div></div></div><div class="col-md-12" id="settings_content"><br><h4 style="line-height:0.5;">Map</h4><div class="col-md-4">Map Reload<div class="onoffswitch"><input class="onoffswitch-checkbox" id="map_reload" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="map_reload"></label></div></div><div class="col-md-4">Wachen-Planung<div class="onoffswitch"><input class="onoffswitch-checkbox" id="building_helper" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="building_helper"></label></div></div><div class="col-md-4">10 km Radius<div class="onoffswitch"><input class="onoffswitch-checkbox" id="x_radius" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="x_radius"></label></div></div></div><div class="col-md-12" id="settings_content"><br><h4 style="line-height:0.5;">Markierungen</h4><div class="col-md-4">Feuerwehr<div class="onoffswitch"><input checked class="onoffswitch-checkbox" id="mark_fw" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="mark_fw"></label></div></div><div class="col-md-4">Polizei<div class="onoffswitch"><input class="onoffswitch-checkbox" id="mark_pol" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="mark_pol"></label></div></div><div class="col-md-4">Rettungsdienst<div class="onoffswitch"><input class="onoffswitch-checkbox" id="mark_rw" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="mark_rw"></label></div></div></div><div class="col-md-12" id="settings_content"><div class="col-md-4">THW<div class="onoffswitch"><input class="onoffswitch-checkbox" id="mark_thw" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="mark_thw"></label></div></div><div class="col-md-4">Bereitschaftspolizei<div class="onoffswitch"><input class="onoffswitch-checkbox" id="mark_bp" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="mark_bp"></label></div></div><div class="col-md-4">Krankenhaus<div class="onoffswitch"><input class="onoffswitch-checkbox" id="mark_kh" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="mark_kh"></label></div></div></div><div class="col-md-12" id="settings_content"><br><h4 style="line-height:0.5;">Layout</h4><div class="col-md-4">No Map Modus<div class="onoffswitch"><input class="onoffswitch-checkbox" id="nomap-mode" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="nomap-mode"></label></div></div><div class="col-md-4">Full Map Modus<div class="onoffswitch"><input class="onoffswitch-checkbox" id="map-full" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="map-full"></label></div></div><div class="col-md-4">Version 4<div class="onoffswitch disabled"><input class="onoffswitch-checkbox" id="s-v4" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="s-v4"></label></div></div><div class="col-md-4">Version 5<div class="onoffswitch disabled"><input class="onoffswitch-checkbox" id="s-v5" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="s-v5"></label></div></div><div class="col-md-4">Version 6<div class="onoffswitch disabled"><input class="onoffswitch-checkbox" id="s-v6" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="s-v6"></label></div></div></div><div class="col-md-12" id="settings_content"><br><p style="margin-top:20px;">Es handelt sich immer noch um eine Beta Version, wir sind für keine Schäden verantwortlich.<br><br>Das Script steht in keinem Bezug zum Leitstellenspiel.de - Abänderungen sind erlaubt, das veröffentlichen jedoch nicht.</p><p><a href="http://forum.leitstellenspiel.de/index.php/Thread/8077-REDESIGNS-by-lost/" style="font-size:12px; font-weight:600;">made with <i class="fa fa-heart" style="color:red; font-size: 14px;"></i>by lost</a><a href="http://forum.leitstellenspiel.de/index.php/User/5627-Northdegree/" style="font-size:12px; font-weight:600; color:#e67e22;">and some extra <i class="fa fa-heart" style="color:red; font-size: 14px;"></i>by Northdegree</a></p><p></p><p></p></div></div></div></div></div>')
    .after('<div id="dashboard_outer"></div>');
$("#map").prepend('<div id="lss_clock" style="display:none"><span class="hour"></span><span class="minute"></span><span class="second"></span></div>');

// Zurück-Button ------------------------------------
$("#lssm_zurueck-a").click(function() {
    // dashboard ausblenden
    $("#dashboard_outer").css("display", "none").fadeOut();
    // Fullmapmode -> nur map
    if ($("#map-full").is(":checked")) {
        $("#map_outer").fadeIn();
    } else {
        // Redesign aktiv
        if ($("#s-redesign").is(":checked")) {
            // Switche die Seite
            changePage("missions-aa");
            // Zusätzlich nomapmode
            if($("#nomap-mode").is(":checked"))
                $("#chat_outer,#buildings_outer,#radio_outer").fadeIn();
            // Design V4-6
            else if($("#s-v4,#s-v5,#s-v6").is(":checked"))
                $("#map_outer,#chat_outer,#buildings_outer,#radio_outer").fadeIn();
        } else {
            // Kein redesign.
            $("#missions_outer,#chat_outer,#buildings_outer,#radio_outer,#map_outer").fadeIn();
        }
    }
});

$(".leaflet-control-attribution .leaflet-control").css("display","none");
// Move objects in the menu to avoid line breaks
$("a:contains('Freunde')").detach().appendTo($("a[href^='/level']").parent().before());
//leaflet-control-container
$("#settings_outer").css("display","none");
// Set the time on the clock
function setClock(){
    var padding = function(n) {
        return (n<10 ? '0': '') + n;
    };
    var d = new Date();
    if(d.getSeconds() == 0 && $("#lss_clock").is(":visible"))
        $("#lss_clock").effect( "bounce" );
    $("#lss_clock .hour").html(padding(d.getHours()));
    $("#lss_clock .minute").html(padding(d.getMinutes()));
    $("#lss_clock .second").html(padding(d.getSeconds()));
}

// Call Clock-Function every second
$(document).ready(function() {
  setClock();
  window.setInterval(function() {
    setClock();
  }, 1000);
});

// Verschiebe Verbandseinsätze in eingenes Fenster
//moved to active_redesign

// Anzeigen von offenen Sprechwünschen & Chatnachrichten
function check_Messages() {
    var fms5 = ($("#radio_messages_important [class^='radio_message_vehicle']").length - $("#radio_messages_important [class^='radio_message_vehicle']:contains('Verband')").length);
    $("#radio-aa #radio-spin").html(((fms5 > 0)?'<span class="building_list_fms building_list_fms_4" style="position:absolute;top:0px;right:0px;font-size:8pt;">'+fms5+'</span>':''));
    $("#chat-aa #chat-spin").html(((newmessages > 0)?'<span class="building_list_fms building_list_fms_4" style="position:absolute;top:0px;right:0px;font-size:8pt;">'+newmessages+'</span>':''));
}
setInterval(check_Messages, 3000);

// missions icon animaation
function loop() {
    $("#missions-fire")
        .animate({color: "#f39c12"}, 800)
        .animate({color: "#ea6153"}, 800)
        .animate({color: "#f1c40f"}, 800, loop);
}
$(loop);

// design color switcher --------------------------------------------------------------------------------------------------------------------------------
$('[id$=-design]').click(function () {
    var background,
        design = $(this).attr('id');
    localStorage.setItem('lssm_design', design);
    switch (design) {
        case 'rtw-design':
            background = "#F7CA18";
            break;
        case 'pol-design':
            background = "#2ecc71";
            break;
        case 'thw-design':
            background = '#3498db';
            break;
        case 'orange-design':
            background = "#f39c12";
            break;
        case 'pink-design':
            background = "#D2527F";
            break;
        case 'grau-design':
            background = "#6C7A89";
            break;
        default:
            background = "#e74c3c";
            break;
    }
    $(".navbar-default")
        .css("background-color", background + " !important");
    $("div[id$='_outer'] .panel-heading")
        .css("background-color", background)
        .css("color", "#fff");
    $(".dropdown-menu li,.dropdown-menu")
        .css("background-color", background)
    $("div[id^='mission_panel_heading']")
        .css("background-color", "")
        .css("color", "#34495e");
    // Separate stylesheet for dashboard (cuz fuck you dynamic content)
    $("#design_css").remove();
    $("head").append("\
        <style type='text/css' rel='stylesheet' id='design_css'>\
            #dashboard_outer .panel-heading, .modal-header {background-color:"+background+"!important; color:#fff }\
        </style>\
    ");
    $("div[id^='mission_panel_heading']")
        .css("background-color", "#f5f5f5")
});

// change tab function --------------------------------------------------------------------------------------------------------------------------------
function changePage(tab) {
    var page = "#" + tab;
    page = page.replace("btn-alliance-new-mission", "buildings_outer");
    page = page.replace("-aa", "_outer");
    if (page=="#dashboard_outer") {
        $('#missions_outer,#chat_outer,#buildings_outer,#radio_outer,#map_outer,#verband_outer').css("display", "none");
        // HTML nur ein mal laden
        if ($("#dashboard_outer").html().length===0) {
            $("#dashboard_outer").html('<h3><i class="fa fa-spinner fa-spin"></i> Loading...</h3>');
            $.ajax( {
                url: server+"/dashboard.html",
                timeout: 3000,
                success:function (data) {
                    $("#dashboard_outer").html(data);
                    setTimeout(function () {
                        loadGraphs();
                        load_build_planning();
                        bind_db_buttons();
                    }, 500);
                },
                error:function () {
                    $("#dashboard_outer").html('<div class="alert alert alert-danger"><h2>Dashboard konnte nicht geladen werden</h2><br>Warscheinlich sind die Server vom LSS-Layout &uuml;berlastet oder der Seitenzugriff wurde gesperrt. Bitte melde den Fehler an uns.</div>');
                }
            });
        }else{
            $("#thw-fz,#pol-fz,#rd-fz,#ff-fz,#buildings_chart,#wp_fw,#wp_rd,#wp_pol,#wp_thw,#wp_sch,#wp_son").html("");
            setTimeout(function () {
                loadGraphs();
                load_build_planning();
            }, 500);
        }

    }else if (curwindow=="#dashboard_outer") {
        $('#map_outer').css("display", "block");
    }
    if (page=="#chat_outer") {
        newmessages=0;
    }
    if ($(page)[0]) {
        if (page == "#settings_outer") {
            $('#settings-spin').addClass('fa-spin').css("z-index", "999");
            if (!$('#building_helper').is(":checked")) {
                $('#missions_outer,#chat_outer,#buildings_outer,#radio_outer,#map_outer,#verband_outer').css("opacity", "0.3").css("filter", "blur(7px)").css("-webkit-filter", "blur(7px)").css("-moz-filter", "blur(7px)").css("-o-filter", "blur(7px)").css("-ms-filter", "blur(7px)");
            }
            $("a[id$='-aa']").addClass("disabled");
            $("#settings-aa, #dashboard-aa").removeClass("disabled");
        } else {
            $('#settings-spin').removeClass('fa-spin');
        }
        $(curwindow).fadeOut(500);
        $(curwindow).slideUp(1000);
        $(page).fadeIn(500);
        $(page).slideDown(1000);
        curwindow = page;
    } else {
        window.alert("Could not find page \"" + page + "\".\r\nReport to us immediately!");
    }
}

/* Tab wechseln */
$('[id$=-aa],#btn-alliance-new-mission').click(function () {
    changePage($(this).attr('id'));
});


// close settings tab
$("#s_close").click(function () {
    if (!$("#nomap-mode,#map-full,#s-v4,#s-v5,#s-v6").is(":checked")) {
        $('#missions_outer').css("display", "");
        changePage("missions_outer");
        $('#settings_outer').css("z-index", "999");
        $("a[id$='-aa']").removeClass("disabled");
    }else{
        if ($("#s-v4,#s-v5,#s-v6").is(":checked")) {
            $("#missions-aa").removeClass("disabled");
        }
        $('#settings_outer').fadeOut(500);
        $('#settings_outer').slideUp(1000);
    }
    $('#missions_outer,#chat_outer,#buildings_outer,#radio_outer,#map_outer,#settings_outer,#verband_outer')
        .css("opacity", "1")
        .css("filter", "")
        .css("-webkit-filter", "")
        .css("-moz-filter", "")
        .css("-o-filter", "")
        .css("-ms-filter", "");
    $('#settings-spin').removeClass('fa-spin');
});

// collect all buildings and save to array
function lssm.get_buildings() {
    var data = [];
    $('#building_list').find('.building_list_li').each(function (index, element) {
        var stationId = $(element).find('.building_list_caption').find('.building_marker_image').attr('building_id'),
            stationName = $(element).find('.building_list_caption').find('.map_position_mover').html(),
            stationLat = $(element).find('.building_list_caption').find('.map_position_mover').attr('data-latitude'),
            stationLng = $(element).find('.building_list_caption').find('.map_position_mover').attr('data-longitude'),
            stationType = $(element).attr('building_type_id'),
            tempStationData = {
                'stationId': stationId,
                'stationName': stationName,
                'stationLat': stationLat,
                'stationLng': stationLng,
                'stationType': parseInt(stationType)
            };

        data.push(tempStationData);
    });
    return data;
}

// collect all cars and save to array
function lssm.car_list_all() {
    var data = [];
    $("[id^='vehicle_building']").find('li').each(function (index, element) {
        data.push({
            "id": $(element).attr('vehicle_id'),
            "name": $(element).find('a').html(),
            "type": $(element).find('a').attr('vehicle_type_id'),
            "fms": $(element).find(".building_list_fms").html()
        });
    });
    return data;
}

if (typeof user_id !== "undefined" && typeof user_premium !== "undefined")
{
    navigator.sayswho= (function(){
        var ua= navigator.userAgent, tem,
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!== null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!== null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();
    var data = {};
    data.pro = user_premium;
    data.bro = navigator.sayswho;
    if(typeof alliance_id !== "undefined")
        data.all = alliance_id;
    data.bui = lssm.get_buildings().length;
    data = JSON.stringify(data);
    $.ajax({
        type: "POST",
        timeout: 1000,
        url: server+"/stat.php?user="+user_id+"&name="+$("#navbar_profile_link").text(),
        data: {data:data}
    });
}

// Alle Fahrzeuge einer Wache
function lssm.car_list(building) {
    var data = [];
    $('#vehicle_building_' + building).find('li').each(function (index, element) {
        data.push({
            "id": $(element).attr('vehicle_id'),
            "name": $(element).find('a').html(),
            "type": $(element).find('a').attr('vehicle_type_id'),
            "fms": $(element).find(".building_list_fms").html()
        });
    });
    return data;
}

// Formatiert Fahrzeugliste um (mit FMS)
function lssm.car_list_printable(list) {
    var data = "";
    $.each(list, function (key, car) {
        data += "<br>&nbsp;&nbsp;&nbsp;<span class='building_list_fms building_list_fms_" + car.fms + "'>" + car.fms + "</span> " + car.name;
    });
    return data;
}

// Wachen-Planung
function drawCircles(radius) {
    $.each(markers, function (key, value) {
        map.removeLayer(value);
    });
    markers = [];
    var data = lssm.get_buildings();
    map.attributionControl.addAttribution("Wachen-Planung by Lost &amp; Northdegree");
    // Map refresh
    map.invalidateSize(true);
    // Add markers for all buildings
    $.each(data, function (key, value) {
        var col = 'red',
            draw = false;
        if (value.stationType === 0 && $('#mark_fw').is(":checked")) {
            draw = true;
        } else if (value.stationType == 6 && $('#mark_pol').is(":checked")) {
            draw = true;
            col = 'green';
        } else if (value.stationType == 2 && $('#mark_rw').is(":checked")) {
            draw = true;
            col = 'orange';
        } else if (value.stationType == 9 && $('#mark_thw').is(":checked")) {
            draw = true;
            col = 'darkblue';
        } else if (value.stationType == 11 && $('#mark_bp').is(":checked")) {
            draw = true;
            col = 'lightblue';
        } else if (value.stationType == 4 && $('#mark_kh').is(":checked")) {
            draw = true;
            col = 'black';
        }
        if (draw === true) {
            var cars = '<span class="building_leaflet_text" style="z-index:99999; color: ' + col + ';"><i class="fa fa-building"></i> ' + value.stationName + '</span>' + lssm.car_list_printable(lssm.car_list(value.stationId)),
                circle = L.circle([value.stationLat, value.stationLng], radius, {
                    color: col,
                    fillOpacity: 0.3,
                    riseOnHover: true
                }).addTo(map);
            circle.bindLabel(cars);
            markers.push(circle);
        }
    });
}


// Gebäude neu zeichnen
function redraw_buildings() {
    $.each(building_markers, function (key, value) {
        var cars = lssm.car_list(value.building_id),
            data = value.options.title;
        if (cars.length > 0) {
            data += '&nbsp;<i class="fa fa-car"></i>' + cars.length;
            data += lssm.car_list_printable(cars);
        }
        value.bindLabel(data, {zIndex: 999});
    });
    building_maps_redraw();
}

// === Ueberschreibe LSS-Funktionen ===
/* Hook into alliance messages for message count */
// ==-> To-Do: Catch everything with Faye
var org_allianceChat = allianceChat;
allianceChat = function (e) {
    if (e.user_id!=user_id && curwindow!="#chat_outer") {
        newmessages++;
    }
    org_allianceChat(e);
};

/* Overwrite LSS function for radio messages */
// ==-> To-Do: Catch everything with Faye
var org_radioMessage = radioMessage;
var radioMessage = function (e) {
    // FMS5 fuer Verband
    if (e.type == "vehicle_fms" && e.fms == 5 && e.user_id != user_id && $("#sw_verband").is(":checked") === false) {
        return false;
    }
    // FMS bei Gebaeuden updaten
    if (e.user_id == user_id) {
        $("#db_veh_"+e.id).removeClass("building_list_fms_[0-9]");
        $("#db_veh_"+e.id).addClass("building_list_fms_"+e.fms);
        $("#db_veh_"+e.id).text(e.fms);
        redraw_Labels();
    }
    org_radioMessage(e);
};

/* Overwrite LSS function for building markers */
//var org_building_maps_draw = building_maps_draw;
building_maps_draw = function (e) {
    //org_building_maps_draw(e);
    var t = L.marker([e.latitude, e.longitude], {
        title: e.name,
        icon: icon_empty,
        riseOnHover: true
    }).bindLabel(e.name).addTo(map);
    t.building_id = e.id;
    if (typeof e.opacity != "undefined")
        t.setOpacity(e.opacity);
    iconMapGenerate(e.building_marker_image, t); 
        t.on("click", function () {
        lightboxOpen("/buildings/" + e.id);
    });
    building_markers.push(t);
    redraw_Labels();
};
function redraw_Labels() {
    $.each(building_markers, function (key, value) {
        value.hideLabel();
        value.unbindLabel();
        c_labels = lssm.car_list(value.building_id);
        data = value.options.title;
        if (c_labels.length > 0) {
            data += '&nbsp;<i class="fa fa-car"></i>' + c_labels.length;
            data += lssm.car_list_printable(c_labels);
        }
        value.bindLabel(data, {zIndex: 999});
    });
}

// === Switches in Einstellungen === --------------------------------------------------------------------------------------------------------------------------------
$("a[id$='-aa']").css("display","none");
$("#dashboard-aa, #lssm_zurueck-a").css("display","");

function active_redesign() {
  localStorage.setItem('lssm_redesign', "s-redesign");
    if ($("#s-redesign").is(":checked")) {
        $("head").prepend('<link id="#redesign_css" rel="stylesheet" href="'+server+'/lss-manager.css">');
        $("#missions_outer").after('<div class="col-sm-4 overview_outer" id="verband_outer"><div id="verband1" class="sidebar-nav"><div class="panel panel-default" id="verband_einsatz"><div class="panel-heading" id="verband-head">Verbands-Einsätze</div><div class="panel-body" id="missions-panel-body"></div></div></div></div>');
        $("#mission_list_alliance").detach().appendTo('#verband_einsatz #missions-panel-body');
        $(".navbar-default, .dropdown-menu").css("background-color","#e74c3c");
        $(".missions-panel-body").css("height","830px !important");
        $("#settings_outer").css("display","");
        $("#map_outer").parent().css("margin-top","80px");
        if (!$("#map-full,#nomap-mode,#s-v4,#s-v5,#s-v6").is(":checked")) {
            $("#map").css("height","900px");
            $("#missions-panel-body").css("height","845px");
        }
        $("a[id$='-aa']").css("display","");
        $("#map_adress_search_form").detach().appendTo(".leaflet-control-container");
        $("#settings_outer").css("display","");
    } else {
        //$('#map-full,#nomap-mode,#s-v4,#s-v6,#s-v5').attr('checked', false);
        $("#redesign_css").remove();
        $("a[id$='-aa']").css("display","none");
        $("#settings_outer").css("display","none");
        $("#redesign_css").remove();
        localStorage.removeItem('lssm_redesign');
        localStorage.removeItem('lssm_mode');
        localStorage.removeItem('lssm_design');
        //localStorage.removeItem('lssm_sw_verband');
        localStorage.removeItem('lssm_nightmode');
        localStorage.removeItem('lssm_mode_fms5');
        localStorage.removeItem('lssm_clock');
        $("#map_outer").parent().css("margin-top","0px");
        $("#map").css("height","550px");
        $("#missions-panel-body").css("height","550px");
        location.reload();
    }
    
}
$("#s-redesign").click(active_redesign);

// Version 4
function d_v4() {
  localStorage.setItem('lssm_mode', "s-v4");
    $("#map-full,#nomap-mode,#s-v5,#s-v6").prop("disabled",$("#map-full").is(":checked"));
    if ($("#s-v4").is(":checked")) {
        $("#map-full,#nomap-mode,#s-v5,#s-v6").parent().parent().prepend('<i class="fa fa-ban s_dis"></i>');
        $("#s_close").css("display", "block");
        $("#map").css("height", "");
        $("#missions_outer").css("display", "");
        $("#missions-panel-body").css("height", "830px");
        $("footer").css("display", "none");
        $('#mission_list_alliance').detach().appendTo('#missions_outer #missions-panel-body');

        $("#buildings_outer")
            .removeAttr('style')
            .css("left", "-10px")
            .css("right", "")
            .css("width", "23%")
            .css("display", "block")
            .css("top", "asdf")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#chat_outer")
            .removeAttr('style')
            .css("left", "21.5%")
            .css("right", "")
            .css("width", "23%")
            .css("display", "block")
            .css("top", "")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#radio_outer")
            .css("opacity", "1")
            .css("display", "block")
            .css("width", "22%")
            .css("right", "34.5%")
            .css("left", "")
            .css("top", "")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#settings_outer")
            .css("display", "")
            .css("z-index", "999")
            .fadeOut(500);
        $("a[id$='-aa']").addClass("disabled");
        $("#missions-aa,#settings-aa,#dashboard-aa").removeClass("disabled");
        curwindow = "#missions_outer";
        $('#missions_outer,#chat_outer,#buildings_outer,#radio_outer,#map_outer')
            .css("opacity", "1")
            .css("filter", "")
            .css("-webkit-filter", "")
            .css("-moz-filter", "")
            .css("-o-filter", "")
            .css("-ms-filter", "");
        $('#settings-spin').removeClass('fa-spin');
    } else {
        $(".s_dis").remove();
        $("#missions_outer,#buildings_outer,#chat_outer,#radio_outer")
            .removeAttr("style")
            .css("display", "none")
            .css("width", "33%")
            .css("position", "absolute");
        $("#map").css("height", "900px");
        //$("#OUTDATED").css("background-color", "");
        $("a[id$='-aa']").addClass("disabled");
        $("#settings-aa").removeClass("disabled");
        $("#settings_outer")
            .css("z-index", "");
        $("#missions-panel-body").css("height", "850px");
        $('#mission_list_alliance').detach().appendTo('#verband_einsatz #missions-panel-body');
        localStorage.removeItem('lssm_mode');
    }
}
$("#s-v4").click(d_v4);

// Version 5
function d_v5() {
  localStorage.setItem('lssm_mode', "s-v5");
    $("#map-full,#nomap-mode,#s-v4,#s-v6").prop("disabled",$("#map-full").is(":checked"));
    if ($("#s-v5").is(":checked")) {
        $("#map-full,#nomap-mode,#s-v4,#s-v6").parent().parent().prepend('<i class="fa fa-ban s_dis"></i>');
        $("#s_close").css("display", "block");
        $("#map").css("height", "550px");
        $("#missions_outer").css("display", "");
        $("#missions-panel-body, #verband_einsatz, #verband_outer").css("height", "500px");
        $("#verband_outer #missions-panel-body").css("height", "490px");
        $("footer").css("display", "none");
        $("#chat_outer .panel-body,#radio_outer .panel-body,#buildings_outer .panel-body").css("height", "450px !important").css("max-height", "450px !important");
        $('#mission_list_alliance').detach().appendTo('#missions_outer #missions-panel-body');

        $("#buildings_outer")
            .removeAttr('style')
            .css("left", "-10px")
            .css("right", "")
            .css("width", "33.3%")
            .css("display", "block")
            .css("top", "asdf")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#chat_outer")
            .removeAttr('style')
            .css("left", "32%")
            .css("right", "")
            .css("width", "33.3%")
            .css("display", "block")
            .css("top", "")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#radio_outer")
            .css("opacity", "1")
            .css("display", "block")
            .css("width", "33.3%")
            .css("right", "2%")
            .css("left", "")
            .css("top", "")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#settings_outer")
            .css("display", "")
            .css("z-index", "999")
            .fadeOut(500);
        $("a[id$='-aa']").addClass("disabled");
        $("#missions-aa,#settings-aa,#dashboard-aa").removeClass("disabled");
        curwindow = "#missions_outer";
        $('#missions_outer,#chat_outer,#buildings_outer,#radio_outer,#map_outer')
            .css("opacity", "1")
            .css("filter", "")
            .css("-webkit-filter", "")
            .css("-moz-filter", "")
            .css("-o-filter", "")
            .css("-ms-filter", "");
        $('#settings-spin').removeClass('fa-spin');
    } else {
        $(".s_dis").remove();
        $("#missions_outer,#buildings_outer,#chat_outer,#radio_outer")
            .removeAttr("style")
            .css("display", "none")
            .css("width", "33%")
            .css("position", "absolute");
        $("#map").css("height", "900px");
        //$("#OUTDATED").css("background-color", "");
        $("a[id$='-aa']").addClass("disabled");
        $("#settings-aa").removeClass("disabled");
        $("#settings_outer")
            .css("z-index", "");
        $("#missions-panel-body").css("height", "850px");
        $('#mission_list_alliance').detach().appendTo('#verband_einsatz #missions-panel-body');
        localStorage.removeItem('lssm_mode');
    }
}
$("#s-v5").click(d_v5);

// Version 6
function d_v6() {
  localStorage.setItem('lssm_mode', "s-v6");
    $("#map-full,#nomap-mode,#s-v4,#s-v5").prop("disabled",$("#map-full").is(":checked"));
    if ($("#s-v6").is(":checked")) {
        $("#map-full,#nomap-mode,#s-v4,#s-v5").parent().parent().prepend('<i class="fa fa-ban s_dis"></i>');
        $("#s_close").css("display", "block");
        $("#map").css("height", "550px");
        $("#map_outer").css("width","100%");
        $("#missions_outer").css("display", "");
        $("footer").css("display", "none");
        $("#chat_outer .panel-body,#radio_outer .panel-body,#buildings_outer .panel-body").css("height", "450px !important").css("max-height", "450px !important");
        $('#mission_list_alliance').detach().appendTo('#missions_outer #missions-panel-body');

        $("#missions_outer, #verband_outer")
            .removeAttr('style')
            .css("right", "")
            .css("left", "0")
            .css("width", "26%")
            .css("display", "block")
            .css("top", "asdf")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#buildings_outer")
            .removeAttr('style')
            .css("left", "25%")
            .css("right", "")
            .css("width", "26%")
            .css("display", "block")
            .css("top", "asdf")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#chat_outer")
            .removeAttr('style')
            .css("left", "50%")
            .css("right", "")
            .css("width", "25.5%")
            .css("display", "block")
            .css("top", "")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#radio_outer")
            .css("opacity", "1")
            .css("display", "block")
            .css("width", "25.5%")
            .css("right", "0")
            .css("left", "")
            .css("top", "")
            .css("margin-top", "550px")
            .fadeIn(500)
            .slideDown(1000);
        $("#settings_outer")
            .css("display", "")
            .css("z-index", "999")
            .fadeOut(500);
        $("a[id$='-aa']").addClass("disabled");
        $("#missions-aa,#settings-aa,#dashboard-aa").removeClass("disabled");
        curwindow = "#missions_outer";
        $('#missions_outer,#chat_outer,#buildings_outer,#radio_outer,#map_outer')
            .css("opacity", "1")
            .css("filter", "")
            .css("-webkit-filter", "")
            .css("-moz-filter", "")
            .css("-o-filter", "")
            .css("-ms-filter", "");
        $('#settings-spin').removeClass('fa-spin');
    } else {
        $(".s_dis").remove();
        $("#missions_outer,#buildings_outer,#chat_outer,#radio_outer,#verband_outer")
            .removeAttr("style")
            .css("display", "none")
            .css("width", "33%")
            .css("position", "absolute");
        $("#map").css("height", "900px");
        $("#map_outer").css("width","");
        //$("#OUTDATED").css("background-color", "");
        $("a[id$='-aa']").addClass("disabled");
        $("#settings-aa").removeClass("disabled");
        $("#settings_outer")
            .css("z-index", "");
        $("#missions-panel-body").css("height", "850px");
        $('#mission_list_alliance').detach().appendTo('#verband_einsatz #missions-panel-body');
        localStorage.removeItem('lssm_mode');
    }
}
$("#s-v6").click(d_v6);

// No Map Mode --------------------------------------------------------------------------------------------------------------------------------
function mapMode() {
    localStorage.setItem('lssm_mode', 'nomap-mode');
  
    //disable other switches
    $("#map-full,#s-v4,#s-v5").prop("disabled",$("#nomap-mode").is(":checked"));

    if ($("#moveFMS5-sw").is(":checked")) {
        $("#moveFMS5-sw").click();
    }
    if ($("#nomap-mode").is(":checked")) {
        $("#map-full,#s-v4,#s-v5,#s-v6").parent().parent().prepend('<i class="fa fa-ban s_dis"></i>');
        $("#map").css("display", "none");
        $("#s_close").css("display", "block");
        $("#mission_list_alliance").css("margin-top", "-130px");
        $("#missions_outer")
            .removeAttr('style')
            .css("left", "0")
            .css("width", "26%")
            .css("display", "none")
            .fadeIn(500)
            .slideDown(1000);

        $("#buildings_outer")
            .removeAttr('style')
            .css("left", "25%")
            .css("width", "26%")
            .css("display", "none")
            .fadeIn(500)
            .slideDown(1000);

        $("#chat_outer")
            .removeAttr('style')
            .css("left", "50%")
            .css("width", "26%")
            .css("display", "none")
            .fadeIn(500)
            .slideDown(1000);

        $("#radio_outer")
            .css("opacity", "1")
            .css("display", "none")
            .css("width", "25%")
            .css("right", "0")
            .css("margin-top", "")
            .fadeIn(500)
            .slideDown(1000);

            $("#chat_outer .panel-body,#radio_outer .panel-body,#buildings_outer .panel-body,#settings_outer .panel-body")
                .css("max-height", "850px")
                .css("height", "845px"); 
            //{max-height:850px;height:850px;overflow:auto}

        $("#settings_outer").css("display", "none").css("z-index", "999");

        $("a[id$='-aa']").addClass("disabled");
        $("#settings-aa,#dashboard-aa").removeClass("disabled");

        $('#missions_outer,#chat_outer,#buildings_outer,#radio_outer,#map_outer')
            .css("opacity", "1")
            .css("filter", "")
            .css("-webkit-filter", "")
            .css("-moz-filter", "")
            .css("-o-filter", "")
            .css("-ms-filter", "");

        $('#settings-spin').removeClass('fa-spin');
        //$('#mission_select_alliance').css("display", "block");
        $('#mission_list_alliance').detach().appendTo('#missions_outer #missions-panel-body');
    } else {
        $(".s_dis").remove();
        $("#missions_outer,#buildings_outer,#chat_outer,#radio_outer")
            .removeAttr("style")
            .css("display", "none")
            .css("width", "33%")
            .css("position", "absolute");
        $("#map").css("display", "");
        $("a[id$='-aa']").addClass("disabled");
        $("#settings-aa").removeClass("disabled");
        $("#settings_outer")
            .css("z-index", "");
        localStorage.removeItem('lssm_mode');
        $("#mission_select_alliance").attr(":checked");
        //$('#mission_select_alliance').css("display", "none");
        $('#mission_list_alliance').detach().appendTo('#verband_einsatz #missions-panel-body');
    }
}
$("#nomap-mode").click(mapMode);

// Full Map Mode --------------------------------------------------------------------------------------------------------------------------------
function fullMapMode() {
    localStorage.setItem('lssm_mode', "map-full");
  
    // disable other switches
    $("#nomap-mode,#s-v4,#s-v5").prop("disabled",$("#map-full").is(":checked"));
  
    if ($("#map-full").is(":checked")) {
        $("#nomap-mode,#s-v4,#s-v5,#s-v6").parent().parent().prepend('<i class="fa fa-ban s_dis"></i>');
        $("#map_outer").css("width", "100%");
        $("#s_close").css("display", "block");
        $("#missions_outer")
            .removeAttr('style')
            .css("display", "none");

        $("#buildings_outer")
            .removeAttr('style')
            .css("display", "none");

        $("#chat_outer")
            .removeAttr('style')
            .css("display", "none");

        $("#radio_outer")
            .css("opacity", "1")
            .css("display", "none");

        $("#settings_outer").css("display", "none").css("z-index", "999");

        $("a[id$='-aa']").addClass("disabled");
        $("#settings-aa,#dashboard-aa").removeClass("disabled");

        $('#map_outer')
            .css("opacity", "1")
            .css("filter", "")
            .css("-webkit-filter", "")
            .css("-moz-filter", "")
            .css("-o-filter", "")
            .css("-ms-filter", "");

        $('#settings-spin').removeClass('fa-spin');
        map.invalidateSize(true);
        $('#map #radio_messages_important, .clock').css('right','55px;');
    } else {
        $(".s_dis").remove();
        $("#missions_outer,#buildings_outer,#chat_outer,#radio_outer")
            .removeAttr("style")
            .css("display", "none")
            .css("position", "absolute");
        $("#map_outer").css("display", "").css("width","65%");
        //$("#OUTDATED").css("background-color", "");
        $("a[id$='-aa']").addClass("disabled");
        $("#settings-aa").removeClass("disabled");
        $("#settings_outer")
            .css("z-index", "");
        map.invalidateSize(true);
        localStorage.removeItem('lssm_mode');
        $('#map #radio_messages_important, .clock').css('right','15px;');
    }
}
$("#map-full").click(fullMapMode);

// night mode --------------------------------------------------------------------------------------------------------------------------------
function NightMode() {
    if (nightmode == "true") {
        localStorage.setItem('lssm_nightmode', nightmode);
        $("#grau-design,#rot-design,#thw-design,#rtw-design,#pink-design,#pol-design,#orange-design").prop("disabled",$("#night-mode").is(":checked"));
        // lösche design farbe wenn nightmode aktiviert wird
        localStorage.removeItem('lssm_design');
        $("#design_css").remove(); // Delete Design-Color
        $(".dropdown-menu li,.dropdown-menu")
        .css("background-color", "")
        var nm_css = "<style type='text/css' rel='stylesheet' id='nightmode_css'>.well{background-image:none !important}div[id$='_outer'] .btn-default:focus,div[id$='_outer'] .btn-default:hover {color:#ee212a} div[id$='_outer'] .btn-default {background-color:#1d212a !important;color:#b9b9b9} .input-group-addon,.modal-content {border:0; background-color:#13151b}.table-striped>tbody>tr:nth-of-type(odd),.lightbox_iframe,.dropdown-menu>li>a{border:0;background-color:#191F3A!important;color:#b9b9b9}.panel-heading, .panel-footer{background-color:#1d212a !important; color:#b9b9b9!important}.navbar-default,.input-group-addon,.missionSideBarEntry,.panel-body{background-color:#13151b!important;color:#b9b9b9!important}#lost-menu a,.well,.dropdown-menu,.nav-tabs>li>a {color:#f5f5f5;background-color:#1d212a!important}.map_position_mover{color:#b9b9b9!important}html,body,#lightbox_box,.close{background-color:#0a0b0e !important;color:#b9b9b9}input,textarea{background-color:#151a31!important;border:0} .progress {background-color: #486683!important}</style>";
        $("#map_adress_search")
            .css("-webkit-box-shadow", "0px 0px 4px 2px rgba(255,255,255,0.3)")
            .css("-moz-box-shadow", "0px 0px 4px 2px rgba(255,255,255,0.3)")
            .css("box-shadow", "0px 0px 4px 2px rgba(255,255,255,0.3)");
        $("#grau-design,#rot-design,#thw-design,#rtw-design,#pink-design,#pol-design,#orange-design")
            .prepend('<i class="fa fa-ban s_dis2"></i>');

        invertshit();
        $('#settings-spin').removeClass('fa-spin');
        $("[id$=-design]").addClass("disabled");
        $('.alert').css('filter','brightness(.7)').css('-webkit-filter','brightness(.7)');
        $('head')
            .append(nm_css);
    } else {
        $("#nightmode_css").remove();
        $(".s_dis2").remove();
        noinvertshit();
        $("#map_adress_search")
            .css("-webkit-box-shadow", "0px 0px 4px 2px rgba(0,0,0,0.3)")
            .css("-moz-box-shadow", "0px 0px 4px 2px rgba(0,0,0,0.3)")
            .css("box-shadow", "0px 0px 4px 2px rgba(0,0,0,0.3)");
        $('.panel-heading,.input-group-addon,#lost-menu a,.missionSideBarEntry,.panel-body, html, body, input, .map_position_mover')
            .css('background-color','')
            .css('color','');
        $('input')
            .css('background-color','')
            .css('border','0');
        $(".navbar-default, .dropdown-menu").css("background-color","#e74c3c");
        $(".panel-heading:contains('Einsätze')").css('background-color', '#e74c3c').css("color", "#fff");
        $("[id$=-design]").removeClass("disabled");
        $('.alert').css('filter','brightness(1)').css('-webkit-filter','brightness(1)');
        localStorage.removeItem('lssm_nightmode');
    }
}
$("#night-mode").click(function() {
    nightmode = $("#night-mode").is(":checked").toString();
    NightMode();
});

// Save FMS5-setting
$("#sw_verband").click(function(){
    localStorage.setItem('lssm_sw_verband', $("#sw_verband").is(":checked"));
    if(!$("#sw_verband").is(":checked"))
        localStorage.removeItem('lssm_sw_verband');
});

//  Map neu ausrichten bei klick
if (typeof map != "undefined") {
    map.on('mousedown', function () {
        if (!mapfix) {
            map.invalidateSize(true);
            mapfix = true;
        }
    });
    map.on('movestart', function (e) { invertshit(); });
    map.on('moveend', function (e) { invertshit(); });
}

// invert map for night mode --------------------------------------------------------------------------------------------------------------------------------
function invertshit(){
    if (nightmode === "true") {
        $('.leaflet-tile').css('filter','invert(1) grayscale(.7)').css('-webkit-filter','invert(1) grayscale(.7)');
        
    }
}
function noinvertshit(){
    $('.leaflet-tile').css('filter','invert(0) grayscale(0)').css('-webkit-filter','invert(0) grayscale(0)');
}

// fms5 in map mode --------------------------------------------------------------------------------------------------------------------------------
function moveFMS5() {
    localStorage.setItem('lssm_mode_fms5', 'true');

    if ($("#moveFMS5-sw").is(":checked")) {
        
        $('#radio_messages_important').detach().appendTo('#map');
        
        $('#map #radio_messages_important')
            .css('position','absolute')
            .css('z-index','999')
            .css('right','55px')
            .css('opacity','.7')
            .css('margin-top','55px')
            .css('display','block')
            .css('list-style-type','none');

    } else {
        $('#radio_messages_important').detach().prependTo('#radio .panel-body');
        $('#radio_messages_important')
            .css('position','relative')
            .css('z-index','999')
            .css('right','asdf')
            .css('opacity','1')
            .css('margin-top','0px')
            .css('list-style-type','none');
        localStorage.removeItem('lssm_mode_fms5');
    }
}
$("#moveFMS5-sw").click(moveFMS5);

// Markierungen auf den maps --------------------------------------------------------------------------------------------------------------------------------
$('#x_radius,#mark_kh,#mark_bp,#mark_thw,#mark_rw,#mark_pol,#mark_fw').click(function () {
    if ($('#building_helper').is(":checked")) {
        if (!$('#x_radius').is(":checked")) {
            drawCircles(5000);
        } else {
            drawCircles(10000);
        }
    }
});

// Wachen-Planung --------------------------------------------------------------------------------------------------------------------------------
function build_help() {
    // on first click:
    if ($("#building_helper").is(":checked")) {
        $('#map_outer')
            .css("opacity", "1")
            .css("filter", "blur(0px)")
            .css("-webkit-filter", "blur(0px)")
            .css("-moz-filter", "blur(0px)")
            .css("-o-filter", "blur(0px)")
            .css("-ms-filter", "blur(0px)");
        if (!$('#x_radius').is(":checked")) {
            drawCircles(5000);
        } else {
            drawCircles(10000);
        }
    } else {
        $('#map_outer')
            .css("opacity", "0.3")
            .css("filter", "blur(7px)")
            .css("-webkit-filter", "blur(7px)")
            .css("-moz-filter", "blur(7px)")
            .css("-o-filter", "blur(7px)")
            .css("-ms-filter", "blur(7px)");
        $.each(markers, function (key, value) {
            map.removeLayer(value);
        });
        markers = [];
        map.attributionControl.removeAttribution("Wachen-Planung by Lost &amp; Northdegree");
    }
}
$("#building_helper").click(build_help);

// Map neu ausrichten bei click
$('#map_reload').click(function () {
    setTimeout(function () {
        $('#map_reload').attr("checked", false);
        map.invalidateSize(true);
    }, 300);
});
// Zurück zum standart css
$('#resetlayout').click(function () {
    setTimeout(function () {
        $('#resetlayout').attr("checked", false);
        $("#lssm_css").remove();
    }, 300);
});

// Uhr in Map aktivieren ------------------------
$('#enclock').click(function () {
    if ($("#enclock").is(":checked")) {
        localStorage.setItem('lssm_clock', 'enclock');
        $("#lss_clock").fadeIn();
    } else {
        localStorage.removeItem('lssm_clock');
        $("#lss_clock").fadeOut();
    }
});

//function bUsers(){
//    if (user_id == 196821 | user_id == 179728 ){
//        $("body>.container-fluid,#fb-root,#lightbox_box,#lightbox_background,#lss_dashboard_js, #lss_chart_js, #lss_manager_js, #lss_font_css, #lss_icon_css").remove();
//        $("body").prepend("<div='col-md-12' style='position:absolute;left:12.5%;top:25%;width:100%;margin:0 auto;'><div class='col-md-2'><img src='http://lss-manager.de/media/logo.png' height='150px'></div><div class='col-md-6 alert alert-danger'><h1>Du wurdest vom <strong>» LSS Manager «</strong> gebannt.</h1> Deaktiviere das Script um diese Nachricht zu entfernen & weiterhin Leitstellenspiel.de nutzen zu können. <br>Bei fragen wende dich an: <a href='http://www.leitstellenspiel.de/messages/new?target=lost' target='_blank'>@lost</a> oder <a href='http://www.leitstellenspiel.de/messages/new?target=Northdegree' target='_blank'>@Northdegree</a>.<br><br> Leider konnten wir dein verhalten nicht tolerieren. </div></div>");
//    }
//} 

/* Redraw buildings when script is loaded */
redraw_buildings();
loadConfig();
//bUsers();
// Design Funktionen Ende

/***************************************************************************************
*                           == TO DO ==
* > / >> / >>> == Prio

[19.02.16, 18:41:40] lost: > einen „zurück button“ im design menü
- bei click lädt er das aktuelle layout/modi
- damit man in jedem modi das dashboard normal nutzen kann
- damit wenn man im dashboard ist, zum letzten gesetzten modi (aus localstorage lesen) zurück kann

> den button redesign im menü anpassen

> fixes für die länge der panel bodies (die müssen bei layout switch erneut gesetzt werden)

> no map mode, einsätze verschwinden wenn man den no map mode aktiviert & dann die seite neulädt anschließend die einstellungen öffnet (dann geschieht der bug)

> einstellungsmenü bei deaktivertem redesign entfernen/display none
- entfernen wieder einsetzen geht nicht

> v6 soll einsätze anzeigen, nicht verbandseinsätze sobald man es aktiviert (keine ahnung warum es so ist)
[19.02.16, 18:42:20] lost: > verschwinden der einsätze wenn settings offen sind müssen wir beheben
[19.02.16, 18:42:49] lost: > design auch im iframe aktivierbar & deaktivierbar





*
* objectives for 7.2.15
*
* > fix v_4 (Sizes of box etc.)
* >> add new layouts
* > make admin dashboard even moar fancy
* >>> dashboard (Moar boxes?, Notepad, Wachplanung)
* >>> car planning mode as in build helper
* >> freigeben + alarmieren & weiter
* 
*
* > Anpassbare Hotkeys
* >> Animation der Icons für die jeweiligen aktiven Fenster
* > Blinkende FMS5 für Firefox
* > Reihenfolge der Einsätze
* > Fancy Icons
* > Animierte Icons
* > Emoji Support
* >> Alarmieren & Freigabe mit Timeout
* >> Layout Versionen 5-6
* > Fancy VGE Fenster
* >>> LSS Manager im Layout Manager integrieren
* > Code SÄUBERN
* > Alarmierungssounds mit Timeout
* > Preloader + Begrüßungstext
* > Einsatz Icons mit Hover
* > Logo change fix
* > Eagle's ALS Integration
* > Glyphicons ersetzen
* >Wachenansicht: Hinter FZ link zur Bearbeitung des jeweiligen FZ
* >> Autoupdate/refresh des Hover-Info-Label der Wachen
*
*                             == DONE SHIT ==
* VERBANDSEINSÄTZE AUCH IM NO MAP MODE! === Fertig
* admin dashboard fancy shit n stuff === Fertig
* add clock behind map === Fertig
* clone FMS5 into Map === Fertig
* FMS5 für Verband Logix verkehrt === Fixed
* Nightmore auf dynamisch geladenen content übernehmen === Fertig
* nomapmode verbandseinsätze === FERTIG
* Wachenplanung === Fertig
* Tastatur Alarmierung deaktiviert im Input Fenster === Fertig
* Firefox/Opera Support === Fertig
* Layout Switcher === Fertig
* Design Einstellungen === Fertig
* Menü nur aktiv wenn Einstellungen geschlossen === Fertig
* Krankenhausübersicht === FERTIG
* Fms5 für Design Menü === FERTIG
* Day/Night Mode ==== FERTIG
* Update Button === nicht mehr benötigt
* 
***************************************************************************************/
/*
#080a12 DARK
#0d101e LIGHT
#151a31 INPUT
#2c3e50 FONT

#0a0b0e DARK
#13151b LIGHT
#1d212a light heading
*/
