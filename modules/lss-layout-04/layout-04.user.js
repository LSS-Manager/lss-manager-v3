(function () {



$('body').prepend('<style type="text/css" id="lss-layout-03-style">#map_outer{height: calc(100vh - 90px) !important;}#missions_outer{height: 49vh !important;}#missions-panel-body{height: calc(49vh - 50px) !important;display: flex;}div[id^="mission_list"]{display: inline-block;width: 33.3333333%;padding: 10px;overflow: scroll;}</style>');
	$('#map_outer').removeClass('col-sm-8').addClass('col-sm-4');
	$('#missions_outer, #buildings_outer, #radio_outer, #chat_outer').removeClass('col-sm-4');
	$('#missions_outer').addClass('col-md-8');
	$('#buildings_outer').addClass('col-sm-4');
	$('#chat_outer').addClass('col-sm-3');
	$('#radio_outer').addClass('col-md-2');


	map.invalidateSize(true);
})();
