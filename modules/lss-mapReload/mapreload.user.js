(function() {
    var clockDiv = $('<a class="btn btn-xs btn-default glyphicon glyphicon-refresh" style="position: relative;z-index: 9998;float: right;margin: 10px;" onclick="map.invalidateSize(true);"></a>');
    $('#map').prepend(clockDiv);
})();
