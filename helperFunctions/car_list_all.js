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