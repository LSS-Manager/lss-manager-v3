function get_buildings() {
    var data = [],
        stationId, stationName, stationLat, stationLng, stationType, el, map;
    $('#building_list').find('.building_list_li').each(function(index, element) {
        el = $(element).find('.building_list_caption'),
            map = el.find('.map_position_mover'),
            stationId = el.find('.building_marker_image').attr('building_id'),
            stationName = map.html(),
            stationLat = map.attr('data-latitude'),
            stationLng = map.attr('data-longitude'),
            stationType = $(element).attr('building_type_id');

        data.push({
            'stationId': stationId,
            'stationName': stationName,
            'stationLat': stationLat,
            'stationLng': stationLng,
            'stationType': parseInt(stationType)
        });
    });
    return data;
}
