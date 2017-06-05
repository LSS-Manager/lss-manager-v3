(function ($) {
  $('head').prepend('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>');
  $('head').prepend('<link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/leaflet.css" type="text/css" rel="stylesheet"/>');
  //$('.missionSideBarEntry > div > div > div > .col-xs-1 > img').detach().insertBefore('.panel-heading');
  var missionMarkerAddBuffer = missionMarkerAdd;

  missionMarkerAdd = function (t) {
      missionMarkerAddBuffer(t);
      var $header = $('#mission_panel_heading_' + t.id);
      $('#mission_vehicle_state_' + t.id).detach().insertBefore($header);
  };

  $('body').prepend(
    '<style type="text/css" id="lss-redesign-01">'+
      'img.vehicle_search, .map_position_mover small, #arrow_build_feuerwache, #arrow_location_select, .glyphicon-user, .glyphicon-asterisk {'+
        'display:none;'+
      '}'+
      'div[id^="mission_bar_outer_"],div[id^="patient_bar_outer_"]{'+
        'margin-bottom: 0px !important;'+
        'height: 10px !important;'+
      '}'+
      '#mission_chat_messages, .building_list_vehicles, #building_list {'+
        'padding: 0 !important;'+
      '}'+
      '#mission_chat_messages li, .building_list_li, .building_list_vehicle_element {'+
        'list-style: none !important;'+
      '}'+
      'div[id^="mission_missing_"]{'+
        'margin-bottom: 0px !important;'+
        'font-size: 11px !important;'+
      '}'+
      '.panel-heading {'+
        'background-color: #fff !important;'+
        'border:none !important;'+
      '}'+
      '.MissionOut, div[id^="allianceShareButton_"] {'+
        'margin-left: 2px;'+
      '}'+
      '.navbar-default {'+
        'background-color: #c9302c !important;'+
      '}'+
      '.missionSideBarEntry > div > div > div > .col-xs-1 {'+
        'display: none;'+
      '}'+
      '.missionSideBarEntry > div > div > div > .col-xs-11 {'+
        'width:100% !important;'+
      '}'+
      // VON LEITSTELLENSPIEL
      '.mission_panel_red {'+
        'border-left: 5px #c9302c solid !important'+
      '}'+
      '.mission_panel_yellow {'+
        'border-left: 5px #fedc32 solid !important'+
      '}'+
      '.mission_panel_green {'+
        'border-left: 5px limegreen solid !important'+
      '}'+
      '#lightbox_background {'+
          'background-color: #000;'+
          'position: fixed;'+
          'width: 100%;'+
          'height: 100%;'+
          'top: 0;'+
          'left: 0;'+
          'z-index: 10000;'+
          'opacity: 0.7;'+
          'display: none'+
      '}'+
      '@-webkit-keyframes animation_lightbox_open {'+
          'from {'+
              '-webkit-transform: scale(0)'+
          '}'+
          'to {'+
              '-webkit-transform: scale(1)'+
          '}'+
      '}'+
      '#lightbox_box {'+
          'background-color: #fafafa;'+
          'width: 862px;'+
          'height: 592px;'+
          'position: fixed;'+
          'z-index: 10005;'+
          'border: 1px solid #e3e3e3;'+
          'display: none;'+
          '-webkit-animation: animation_lightbox_open ease-in-out 0.2s'+
      '}'+
      '.lightbox_iframe {'+
          'border: 0;'+
          'display: none;'+
          'margin: 0'+
      '}'+
      '#lightbox_close {'+
          'width: 32px;'+
          'height: 32px;'+
          'float: right;'+
          'cursor: pointer'+
      '}'+
      '#buildings_outer .panel-body, #chat_outer .panel-body, #radio_outer .panel-body {'+
          'max-height: 500px;'+
          'overflow: auto;'+
          'height: 500px;'+
          'padding-bottom: 150px'+
      '}'+
      '.navbar-default .navbar-nav>li>a {'+
        'color: #fff !important;'+
      '}'+
      '.building_list_fms {'+
          'display: inline;'+
          'padding: .2em .6em .3em;'+
          'font-weight: 700;'+
          'font-size: 12px;'+
          'line-height: 1;'+
          'color: #fff;'+
          'text-align: center;'+
          'white-space: nowrap;'+
          'vertical-align: baseline;'+
          'border-radius: .25em;'+
          'margin-right: 5px'+
      '}'+
      '.building_list_fms_1 {'+
          'background-color: #5a97f3;'+
          'color: white'+
      '}'+
      '.building_list_fms_2 {'+
          'background-color: #77dc81;'+
          'color: black'+
      '}'+
      '.building_list_fms_3 {'+
          'background-color: #f3d470;'+
          'color: black'+
      '}'+
      '.building_list_fms_4 {'+
          'background-color: #f58558;'+
          'color: black'+
      '}'+
      '.building_list_fms_7 {'+
          'background-color: #ff8600;'+
          'color: black'+
      '}'+
      '.building_list_caption {'+
        'background-color: #f3f3f3;'+
        'padding: 5px;'+
        'border-radius: 3px;'+
        'margin-bottom: 5px'+
      '}'+
      '.navbar-icon {'+
        'width: 19px;'+
        'height: 19px'+
      '}'+
      '.panel-success > .panel-heading, .panel-success > .panel-body {'+
        'color: #3c763d !important;'+
        'background-color: #dff0d8 !important;'+
        'border-color: #d6e9c6 !important'+
      '}'+
      '.mission_vehicle_state, .logoSmall{'+
        'width:22px;'+
        'display:inline-block !important;'+
      '}'+
      '.missionSideBarEntry > div > .panel-body{'+
        'padding:15px;'+
        'padding-top:0px;'+
      '}'+
      '.missionSideBarEntry > .panel {'+
        'margin-bottom: 10px !important;'+
      '}'+
      '#map {'+
        'height: 550px;'+
      '}'+
      '#missions-panel-body {'+
        'height: 528px;'+
        'overflow-x: hidden;'+
        'overflow-y: scroll;'+
        'margin-bottom: 10px;'+
        'padding: 0 20px 0 0'+
      '}'+
      '.navbar-default .dropdown-menu{'+
        'background-color:#c9302c;'+
        'color: white !important;'+
      '}'+
      '.dropdown-menu>li>a {'+
        'color:white !important'+
      '}'+
    '</style>');
    $("LINK[href*='/assets/application']").remove();
})($);


/*
.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.mission_patient{background-color:#e1e1e1}.navbar-default,nav{background-color:#E74C3C!important;border:0!important;border-radius:0!important}#navbar-main-collapse{border:0!important}.dropdown-menu{background-color:#e14a2a!important;border:none!important;border-radius:0 0 5px 5px}.logo{display:none!important}*{background-image:none!important}body{background-color:#eee!important}div#preloader{text-align:center;position:fixed;left:0;top:0;z-index:999;width:100%;height:100%;overflow:visible;background:url(https://i.stack.imgur.com/h6viz.gif) center center no-repeat rgba(255,255,255,1)!important}.btn__disabled{pointer-events:none;color:#ddd!important;background-color:#eee!important}.lssm_Module_develop .panel-footer{background:repeating-linear-gradient(45deg,rgba(255,219,27,1),rgba(255,219,27,1) 10px,rgba(74,74,74,1) 10px,rgba(74,74,74,1) 25px)!important}#lssm_appstore .panel-footer a,#lssm_appstore .panel-footer span{background-color:#f3ebee;color:#4a4a4a!important;padding:5px;border-radius:2px}.lssm_Module_develop label{display:none}#lssm_appstore .panel{background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05);display:inline-block}#lssm_appstore .panel-default{border-color:#ddd;width:40%}#lssm_appstore .panel-body{padding:15px}#lssm_appstore small{font-size:85%}#lssm_appstore h4{text-transform:uppercase;font-size:18px;margin-top:10px;margin-bottom:10px;font-family:inherit;font-weight:500;line-height:1.1;color:inherit}#lssm_appstore_row{margin-top:15px}#lssm_appstore_row .jumbotron{background-color:#ddd;margin-bottom:0!important}.username-link{color:#fff;text-decoration:none}.username-link:hover{color:#ddd!important;text-decoration:none!important}#lssm_appstore_settingsbar{width:100%;border-radius:0 0 7px 7px!important;margin-top:-5px;background-color:#4a4a4a!important;margin-bottom:15px}.lssm_appstore_settingsbar_div{padding-left:20px;padding-right:20px}.btn-grey{background-color:#afadb2!important;border:none!important;box-shadow:none!important;-webkit-box-shadow:none!important;color:#fff}.btn-grey:hover{background-color:#a2a0a5!important;color:#eee!important}#lss_clock{position:relative;z-index:9998;color:#fff;float:right;margin:10px;font-weight:900}.label-kh,.label-rhl,.label-rw,.label-seg{color:#4a4a4a!important}#lss_clock+span:after{content:":"}#lss_clock span{padding:3px;background-color:#212121}#WachenplanungOnMap_settings{position:absolute!important;z-index:9999;background-color:rgba(255,255,255,.86);bottom:0;left:15px;padding:5px!important;border-radius:0 10px 10px 0}#lssm_radius_slider{margin-top:5px;margin-bottom:5px;width:90%;margin-left:5%;border-radius:10px}.lssm_wachen_selector{display:flex;margin:2px}.lssm_wachen_selector .onoffswitch{margin-right:5px}.lssm_wachen_selector .onoffswitch .onoffswitch-label:before{margin-top:-.5px!important;margin-bottom:4.5px!important;right:14.5px}.label-fw{background-color:#ff4b38!important}.label-rw{background-color:#f9ffb7!important}.label-rhl{background-color:#e6f268!important}.label-seg{background-color:#cdd668!important}.label-pol{background-color:#1d9b1d!important}.label-phl{background-color:#147014!important}.label-bp{background-color:#0e4f0e!important}.label-thw{background-color:#002aff!important}.label-kh{background-color:#fff000!important}.label-wr{background-color:#009dff!important}.onoffswitch{position:relative;width:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.onoffswitch-checkbox{display:none}.onoffswitch-label{display:block;overflow:hidden;cursor:pointer;height:15px;padding:0;line-height:15px;border:2px solid #CCC;border-radius:15px;background-color:#FFF;transition:background-color .3s ease-in}.onoffswitch-label:before{content:"";display:block!important;width:15px;margin:0;background:#FFF;position:absolute;top:0;bottom:0;right:13px;border:2px solid #CCC;border-radius:15px;transition:all .3s ease-in 0}.onoffswitch-checkbox:checked+.onoffswitch-label{background-color:#49E845}.onoffswitch-checkbox:checked+.onoffswitch-label,.onoffswitch-checkbox:checked+.onoffswitch-label:before{border-color:#49E845}.onoffswitch-checkbox:checked+.onoffswitch-label:before{right:0}.container-fluid{padding:0}div#content.row{margin:20px 0 0}nav.navbar.navbar-default{margin-bottom:1px}.missionSideBarEntry .panel-heading{padding:3px}small[id^=pat_]{margin:6px 3px 3px}.MissionOut{margin:2px}img#icon_{display:none}a#alarm_button{margin-top:1px;margin-left:1px}.lss_allianceChat{position:fixed;width:25vw;z-index:99999;margin-left:-255px;bottom:30px;right:40px;cursor:pointer;-webkit-box-shadow:rgba(0,0,0,.619608) 0 0 28px -11px;box-shadow:rgba(0,0,0,.619608) 0 0 28px -11px;display:none}.lss_label{padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}.lss_label-danger{background-color:#d9534f}.leaflet-tile-container img{filter:saturate(.5)}li[class^=radio_message_vehicle_]{margin-bottom:2px;border-radius:5px;border:none!important}li[class^=radio_message_vehicle_] span{font-weight:900}li[class^=radio_message_vehicle_] img{height:20px;margin-bottom:2px;margin-left:-3px}li[class^=radio_message_vehicle_] a{margin-bottom:1px;font-size:11px;padding:1px 5px;margin-left:-3px;border-radius:0!important;border:none!important;color:#212121!important}li[class^=radio_message_vehicle_] a+a{margin-left:1px;background:red;color:#fff!important;text-transform:uppercase}.lss_new_case{border-left:solid red 5px!important}.lss_new_case_in_progress{border-left:solid #32cd32 5px!important}div#iframe-inside-container.container-fluid.lss_new_case{border:none!important}.lss_allianceCase{animation:blinkAlliance .5s step-end infinite alternate}@keyframes blinkAlliance{50%{border-color:red}}#container_navbar_alarm{margin-bottom:0!important}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;z-index:2;width:4em;height:2em;cursor:default;padding:4px;border-radius:10px;-ms-touch-action:none;touch-action:none}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:-.6em;margin-left:-.8em}.ui-widget{font-family:Arial,Helvetica,sans-serif;font-size:1em}.ui-widget-content{border:1px solid #ddd;background:#fff;color:#333}.ui-button,.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default,html .ui-button.ui-state-disabled:active,html .ui-button.ui-state-disabled:hover{border:1px solid #c5c5c5;background:#f6f6f6;font-weight:400;color:#454545}.ui-corner-all,.ui-corner-left,.ui-corner-tl,.ui-corner-top{border-top-left-radius:3px}.ui-corner-all,.ui-corner-right,.ui-corner-top,.ui-corner-tr{border-top-right-radius:3px}.ui-corner-all,.ui-corner-bl,.ui-corner-bottom,.ui-corner-left{border-bottom-left-radius:3px}.ui-corner-all,.ui-corner-bottom,.ui-corner-br,.ui-corner-right{border-bottom-right-radius:3px}

*/
