(function() {
    var mapReloadBtn = $(
      '<a id="lssm_map_reload" class="leaflet-bar leaflet-control leaflet-control-custom hidden-xs lssm_map_reload">'+
        '<i class="glyphicon glyphicon-refresh" style="font-size: 15px;padding: 5px;"></i>'+
        '</a>'
      );

    $('.leaflet-control-container .leaflet-top.leaflet-left').append(mapReloadBtn);
    $('#lssm_map_reload').click(function(){
    	map.invalidateSize(true);
    	$(map).trigger('lssm-map-reload');
    });

})();
