(function () {
    I18n.translations.de['lssm']['layout-04']={
        containsVGE:"Verbands-Großeinsatz erstellen"
    };
    $('body').prepend('<style type="text/css" id="lss-layout-03-style">#map_outer{height:calc(100vh - 90px)!important;padding-left:0!important;padding-right:0!important;margin-left:20px}#missions_outer{height:49vh!important;padding-left:0;width:calc(66.66666667% - 30px);margin-left:10px;padding-right:10px}#missions-panel-body{height:calc(49vh - 45px)!important;display:flex;padding:0!important;margin-right:-10px!important}div[id^=mission_list]{display:inline-block;width:33.3333333%;padding:10px;overflow:scroll}#map{height:100%!important}#missions{margin-right:10px!important}#buildings_outer,#chat_outer,#radio_outer{height:calc(49vh - 70px);overflow:hidden;overflow-y:scroll}#buildings>.panel-default{height:calc(49vh - 70px);margin-bottom:0}#buildings_outer .panel-body{height:calc(49vh - 40px);max-height:100%}#chat_outer .panel-body,#radio_outer .panel-body{height:calc(100% - 70px);max-height:100%;padding-bottom:0;width: 100%;}#chat_outer>div,#radio>div,#radio_outer>div{height:100%;margin:0}#missions strong{display:none!important}#missions .btn-group{margin-left:11px}#buildings_outer,#chat_outer,#radio_outer{margin-left:5px}#btn-alliance-new-mission{margin-bottom:0!important}.alliance_true .btn-group{float:right}#chat_outer{padding:0}#radio_outer{width:calc(16.66666667% - 40px)}</style>');

    $('a:contains("'+I18n.t('lssm.layout-04.containsVGE')+'")').parent().detach().insertAfter('#missions .btn-group').addClass('pull-right');
    $('#map_outer').removeClass('col-sm-8').addClass('col-sm-4');
    $('#missions_outer, #buildings_outer, #radio_outer, #chat_outer').removeClass('col-sm-4');
    $('#missions_outer').addClass('col-md-8');
    $('#buildings_outer').addClass('col-sm-3');
    $('#chat_outer').addClass('col-sm-3');
    $('#radio_outer').addClass('col-md-2');
    map.invalidateSize(true);
})();
