(function ($) {
  $('head').prepend('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>');
  $('head').prepend('<link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/leaflet.css" type="text/css" rel="stylesheet"/>');
  //$('.missionSideBarEntry > div > div > div > .col-xs-1 > img').detach().insertBefore('.panel-heading');
  /*var missionMarkerAddBuffer = missionMarkerAdd;

  missionMarkerAdd = function (t) {
      missionMarkerAddBuffer(t);
      var $header = $('#mission_panel_heading_' + t.id);
      $('#mission_vehicle_state_' + t.id).detach().insertBefore($header);
  };*/

  $('body').prepend(
    '<style type="text/css" id="lss-redesign-01">'+
      'img.vehicle_search, .map_position_mover small, #arrow_build_feuerwache, #arrow_location_select {'+
        'display:none !important;'+
      '}'+
      'div[id^="mission_bar_outer_"],div[id^="patient_bar_outer_"]{'+
        'margin-bottom: 0px !important;'+
        'height: 10px !important;'+
      '}'+
      '#mission_chat_messages, .building_list_vehicles, #building_list, #radio_messages_important, #radio_messages {'+
        'padding: 0 !important;'+
      '}'+
      '#mission_chat_messages li, .building_list_li, .building_list_vehicle_element, #radio_messages_important li {'+
        'list-style: none !important;'+
      '}'+
      'div[id^="mission_missing_"]{'+
        'margin-bottom: 0px !important;'+
        'font-size: 11px !important;'+
      '}'+
      'div[id^="patients_missing_"]{'+
        'margin-bottom:0px !important'+
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
      '.building_list_fms_5 {'+
        'background-color: #ff0000;'+
        'color: white;'+
        '-webkit-animation-name: blink;'+
        'animation-name: blink;'+
        '-webkit-animation-iteration-count: infinite;'+
        'animation-iteration-count: infinite;'+
        '-webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);'+
        'animation-timing-function: cubic-bezier(1, 0, 0, 1);'+
        '-webkit-animation-duration: 1s;'+
        'animation-duration: 1s'+
      '}'+
      '.building_list_fms_6 {'+
        'background-color: black;'+
        'color:white;'+
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
      '.mission_vehicle_state, .logoSmall, .building_marker_image{'+
        'width:22px;'+
        'display:inline-block !important;'+
      '}'+
      '.custom_mission_not_shown {' +
        'display: none;' +
      '}' +
      '.search_input_field, #search_input_field_missions {' +
          'background - image: url(/images/search_5a5753.svg);' +
          'background - repeat: no - repeat;' +
          'background - size: auto 100 % ;' +
          'padding - left: 25 px' +
      '}' +
      '.searchHelperInvisble, .mission_alliance_distance_hide, .mission_deleted {' +
          'display: none' +
      '}' +
      '#search_input_field_missions {' +
          'margin: 5 px 0;width: 100 % ;font - size: 12 px;border: 1 px solid# ccc;border - radius: 4 px' +
      '}' +
      'body.bigMap# search_input_field_missions {' +
          'color: #333' +
      '}' +
      '.mobile-navbar-selector {' +
        'margin:4px 0;padding:10px 0;width:58px' +
      '}' +
      '.missionSideBarEntry > div > .panel-body{'+
        'padding:15px;'+
        'padding-top:0px;'+
      '}'+
      '.missionSideBarEntry > .panel {'+
        'margin-bottom: 10px !important;'+
      '}'+
      '#map {'+
        'height: 525px;'+
      '}'+
      '#missions-panel-body {'+
        'height: 497px;'+
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
      '#mission_chat_messages li {'+
      	'padding: 5px;'+
      	'color: #424242;'+
      	'margin-bottom: 5px;'+
      	'border: 2px solid #ddd;'+
      	'border-radius: 5px;'+
      '}'+
      '#mission_chat_messages li span {'+
      	'background: #eee;'+
      	'display: block;'+
      	'padding: 5px;'+
      	'border-radius: 3px;'+
      	'margin-bottom: 2px;'+
      	'color: #424242;'+
      '}'+
      '.glyphicon-bell {'+
      	'display: inline-block !important;'+
      	'background-color: rgb(255, 73, 5) !important;'+
      	'color: white !important;'+
      '}'+
      '.highlight {'+
        'animation-name: highlight;'+
        'animation-iteration-count: 3;'+
        '-webkit-animation-duration: 1s;'+
        'animation-duration: 1s;'+
      '}'+
      '@keyframes highlight {'+
        '0% {background: rgba(0, 0, 0, 0)}'+
        '50% {background: #62c462}'+
        '100% {background: rgba(0, 0, 0, 0)}'+
      '}'+
      '@-webkit-keyframes "blink" {'+
        '0% {background: #000000}'+
        '100% {background: #ff0000}'+
      '}'+
      '@keyframes "blink" {'+
        '0% {background: #000000}'+
        '100% {background: #ff0000}'+
      '}'+
      '#radio_messages_important li, #radio_messages_important li > span, #radio_messages_important li > a, #radio_messages li, #radio_messages li > a, #radio_messages li > span{'+
        'font-size:10px;'+
      '}'+
      '#radio_messages_important li > a {'+
        'max-width: 25ch;'+
        'overflow:hidden;'+
      '}'+
      '.dropdown-menu>li>a:hover, .navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover{'+
        'background-color: rgb(177, 0, 0)'+
      '}'+
      '.building_build_costs_active{'+
        'display: block !important;'+
        'animation-name: fadeInFromNone;'+
        'animation-duration: 1s'+
      '}'+
      '.building_build_costs{'+
        'display: none;'+
      '}'+
      '@keyframes fadeInFromNone {'+
        '0% {display: none;opacity: 0}'+
        '1% {display: block;opacity: 0}'+
        '100% {display: block;opacity: 1}'+
      '}'+
      '.hideLeitstelle, .hideBuildingType {'+
        'display:none'+
      '}'+
      '.news_new, .alliance_forum_new, .alliance_message_new, .message_new,.alliance_apply_new, .alliance_news_new {'+
        'background-color: #77dc81'+
      '}'+
      '.alliance_chat_copy_username,.alliance_chat_private_username {'+
        'width: 16px;'+
        'height: 16px;'+
        'cursor: pointer'+
      '}'+
      '.mission_list_patient_icon {'+
        'margin - right: 5 px;'+
        'width: 20px;'+
        'height: 20px'+
      '}'+
      '.chatToSelf {'+
        'background-color: #d84f4b;'+
        'color: white'+
      '}'+
      '.chatWhisper {'+
        'background - color: #656565;'+
        'font-style:italic;'+
        'color:white'+
      '}'+
      '.map-expand-button {'+
        'background-image: url(/images/expand.png);'+
        'background-size: 100% 100%'+
      '}'+
    '</style>');

    $("LINK[href*='/assets/application']").remove();
})($);
