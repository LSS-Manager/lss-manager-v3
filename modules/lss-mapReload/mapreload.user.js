(function() {
    var mapReloadBtn = $(
      '<a class="leaflet-bar leaflet-control leaflet-control-custom hidden-xs lssm_map_reload" onclick="map.invalidateSize(true);">'+
        '<i class="glyphicon glyphicon-refresh" style="font-size: 15px;padding: 5px;"></i>'+
        '</a>'
      );

    $('#map').prepend(mapReloadBtn);

})();
