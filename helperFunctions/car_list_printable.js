// Formatiert Fahrzeugliste um (mit FMS)
function lssm.car_list_printable(list) {
    var data = "";
    $.each(list, function (key, car) {
        data += "<br>&nbsp;&nbsp;&nbsp;<span class='building_list_fms building_list_fms_" + car.fms + "'>" + car.fms + "</span> " + car.name;
    });
    return data;
}
