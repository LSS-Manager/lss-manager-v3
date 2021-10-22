(function () {
    $('#map_outer').removeClass('col-sm-8').addClass('col-sm-4');
    $('body').prepend(
        '<style type="text/css" id="lss-layout-04-style">' +
            '#map_outer{height:calc(100vh - 90px)!important;padding-left:0!important;padding-right:0!important;margin-left:20px;width: 33.33333333% !important;}' +
            '#missions_outer{height:49vh!important;padding-left:0;width:calc(66.66666667% - 30px);margin-left:10px;padding-right:10px}' +
            '#missions-panel-body{height:calc(49vh - 45px)!important;display:flex;padding:0!important;margin-right:-10px!important}' +
            'div[id^=mission_list]{display:inline-block;width:100% !important;padding:10px;overflow:scroll}' +
            '#map{height:100%!important}' +
            '#missions{margin-right:10px!important}' +
            '#buildings_outer,#chat_outer,#radio_outer{height:calc(49vh - 70px);overflow:hidden;overflow-y:scroll}' +
            '#buildings>.panel-default{height:calc(49vh - 70px);margin-bottom:0}' +
            '#buildings_outer .panel-body{height:calc(49vh - 40px);max-height:100%}' +
            '#chat_outer .panel-body,#radio_outer .panel-body{height:calc(100% - 55px);max-height:100%;padding-bottom:0;width: 100%;}' +
            '#chat_outer>div,#radio>div,#radio_outer>div{height:100%;margin:0}' +
            '.missions-panel-head strong{display:none!important}' +
			'.anti-abuse-warning {display:none}' +
			'#anti-abuse-warning strong{display:none!important}' +
            '#missions .btn-group{margin-left:11px}' +
            '#buildings_outer,#chat_outer,#radio_outer{margin-left:5px}' +
            '.alliance_events_buttons{margin-bottom:0!important}' +
            '.alliance_true .btn-group{float:right}' +
            '#chat_outer{padding:0}' +
            '#radio_outer{width:calc(16.66666667% - 40px)}' +
            '#buildings{overflow:hidden}' +
            '#mission_list{order:1}' +
            '#mission_list_krankentransporte{order:2}' +
            '#mission_list_sicherheitswache{order:5}' +
            '#mission_list_alliance{order:3}' +
            '#mission_list_alliance_event{order:4}' +
            '</style>'
    );

    $('.alliance_events_buttons')
        .parent()
        .detach()
        .insertAfter('#missions .btn-group')
        .addClass('pull-right');

    $(
        '#missions_outer, #buildings_outer, #radio_outer, #chat_outer'
    ).removeClass('col-sm-4');
    $('#missions_outer').addClass('col-md-8');
    $('#buildings_outer').addClass('col-sm-3');
    $('#chat_outer').addClass('col-sm-3');
    $('#radio_outer').addClass('col-md-2');
    $('#eventInfo').prependTo('#content');
    $(
        '#missions-panel-body > div:nth-child(6), #missions-panel-body > div:nth-child(7),#missions-panel-body > div:nth-child(8)'
    ).remove();
    if ('undefined' != typeof mapkit) {
    } else map.invalidateSize(true);
})();
