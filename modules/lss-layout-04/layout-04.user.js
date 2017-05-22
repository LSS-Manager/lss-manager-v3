(function () {
	$('#map_outer').removeClass('col-md-8').addClass('col-md-4');
	$('#missions_outer, #buildings_outer, #radio_outer, #chat_outer').removeClass('col-md-4');
	$('#missions_outer').addClass('col-md-8');
	$('#buildings_outer, #radio_outer').addClass('col-md-4');
	$('#radio_outer').addClass('col-md-2');
	map.invalidateSize(true);
})();
