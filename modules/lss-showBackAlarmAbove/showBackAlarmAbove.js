(function ($) {
    if ($('#h2_vehicle_driving').length) {
        $('a[href$=backalarmAll]').length && $('#h2_vehicle_driving').prev().after($('a[href$=backalarmAll]').parent().clone());
    } else if ($('#h2_vehicles_at_mission').length) {
        $('a[href$=backalarmAll]').length && $('#h2_vehicles_at_mission').prev().after($('a[href$=backalarmAll]').parent().clone());
    }
})($);