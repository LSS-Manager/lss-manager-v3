/**
 * Created by Northdegree on 25.05.2017.
 */
function car_list(building) {
    // liefert die Fahrzeuge einer Wache zurück
    var data = [];
    $('#vehicle_building_' + building).find('li').each(function (index, element) {
        data.push({
            "id": $(element).attr('vehicle_id'),
            "name": $(element).find('a').html(),
            "type": $(element).find('a').attr('vehicle_type_id'),
            "fms": $(element).find(".building_list_fms").html()
        });
    });
    return data;
}
function car_list_all() {
    var data = [];
    $("[id^='vehicle_building']").find('li').each(function (index, element) {
        data.push({
            "id": $(element).attr('vehicle_id'),
            "name": $(element).find('a').html(),
            "type": $(element).find('a').attr('vehicle_type_id'),
            "fms": $(element).find(".building_list_fms").html()
        });
    });
    return data;
}
// Formatiert Fahrzeugliste um (mit FMS)
function car_list_printable(list) {
    var data = "";
    $.each(list, function (key, car) {
        data += "<br>&nbsp;&nbsp;&nbsp;<span class='building_list_fms building_list_fms_" + car.fms + "'>" + car.fms + "</span> " + car.name;
    });
    return data;
}
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
function car_list(building) {
    // liefert die Fahrzeuge einer Wache zurück
    var data = [];
    $('#vehicle_building_' + building).find('li').each(function (index, element) {
        data.push({
            "id": $(element).attr('vehicle_id'),
            "name": $(element).find('a').html(),
            "type": $(element).find('a').attr('vehicle_type_id'),
            "fms": $(element).find(".building_list_fms").html()
        });
    });
    return data;
}