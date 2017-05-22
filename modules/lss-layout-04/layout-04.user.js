(function () {
	$('body').prepend('<style type="text/css" id="lss-layout-03-style">#map_outer{height: calc(100vh - 90px) !important;padding-left:5px !important, padding-right:10px !important}#missions_outer{height: 49vh !important;padding: 0 !important;}#missions-panel-body{height: calc(49vh - 45px) !important;display: flex;padding: 0 !important;margin-right: -10px !important;}div[id^="mission_list"]{display: inline-block;width: 33.3333333%;padding: 10px;overflow: scroll;}#map{height:100% !important}#missions{margin-right: 10px !important;}#buildings_outer .panel .panel-default,#chat_outer .panel .panel-default,#radio_outer .panel .panel-default {height:calc(49vh - 70px)}#missions strong{display:none !important} #missions .btn-group {margin-left: 11px;}#btn-alliance-new-mission{margin-bottom:0 !important}.alliance_true .btn-group{float:right }#buildings_outer{padding-left: 10px !important;padding-right: 15px !important;}#chat_outer{padding-left:0px!important;padding-right:10px!important;}#radio_outer{padding-left:10px!important;padding-right: 5px!important;}</style>');

	$('a:contains("Verbands-Großeinsatz erstellen")').parent().detach().insertAfter('#missions .btn-group').addClass('pull-right');
	$('#map_outer').removeClass('col-sm-8').addClass('col-sm-4');
	$('#missions_outer, #buildings_outer, #radio_outer, #chat_outer').removeClass('col-sm-4');
	$('#missions_outer').addClass('col-md-8');
	$('#buildings_outer').addClass('col-sm-3');
	$('#chat_outer').addClass('col-sm-3');
	$('#radio_outer').addClass('col-md-2');
	map.invalidateSize(true);
})();
