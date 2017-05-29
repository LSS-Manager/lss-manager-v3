(function() {
    var clockDiv = $('<a class="leaflet-bar leaflet-control leaflet-control-custom hidden-xs" style="height: 26px;width: 26px;position: relative;z-index: 9998;float: left;margin-left: 10px;margin-top: 110px;outline: none;background-color: white;" onclick="map.invalidateSize(true);"><i class="glyphicon glyphicon-refresh" style="font-size: 15px;padding: 5px;"></i></a>');
    $('#map').prepend(clockDiv);
})();
