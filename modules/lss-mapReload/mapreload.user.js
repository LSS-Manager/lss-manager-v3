(function() {
    var clockDiv = $('<a class="btn btn-xs btn-default glyphicon glyphicon-refresh" style="position: relative;z-index: 9998;float: left;margin-left:10px;margin-top: 100px;" onclick="map.invalidateSize(true);"></a>');
    $('#map').prepend(clockDiv);
})();
