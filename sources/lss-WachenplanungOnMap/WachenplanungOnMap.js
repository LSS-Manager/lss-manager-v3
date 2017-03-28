(function (map, I18n, $) {
    var markers = [], settings = {fw: false, pol: false, rw: false, thw: false, bp: false, kh: false, radius: 5, locale: I18n.locale || 'de', translations: {
            de: {
                attributionControl: "Wachen-Planung by Lost &amp; Northdegree"
            }
        }, prefix: 'WachenplanungOnMap'};
    function rmLayer(id) {
        if (typeof id === 'undefined')
            $.each(markers, function (key, value) {
                map.removeLayer(value);
            });
        else
            map.removeLayer(markers[id]);
    }
    function createSettings() {
        var html = '<div id="' + settings.prefix + '_settings">';
        html += '< div class = "col-md-12" >';
        html += '< div class = "col-md-4" >';
        html += 'Map Reload';
        html += '< div class = "onoffswitch" > < input class = "onoffswitch-checkbox" id = "' + settings.prefix + '_map_reload" name = "onoffswitch" type = "checkbox" > < label class = "onoffswitch-label" id = "' + settings.prefix + '_map_reload" > < /label></div >';
        html += '< /div>';
        html += '< div class = "col-md-4" >';
        html += 'Wachen - Planung';
        html += '< div class = "onoffswitch" > < input class = "onoffswitch-checkbox" id = "' + settings.prefix + '_building_helper" name = "onoffswitch" type = "checkbox" > < label class = "onoffswitch-label" id = "' + settings.prefix + '_building_helper" > < /label></div >';
        html += '< /div>';
        html += '< div class = "col-md-4" >';
        html += 'Radius';
        html += '< div class = "onoffswitch" > < input class = "onoffswitch-checkbox" id = "' + settings.prefix + '_x_radius" name = "onoffswitch" type = "checkbox" > < label class = "onoffswitch-label" id = "' + settings.prefix + '_x_radius" > < /label></div >';
        html += '< /div>';
        html += '< /div>';
        html += '< div class = "col-md-12" >';
        html += '< div class = "col-md-4" >';
        html += 'Feuerwehr';
        html += '< div class = "onoffswitch" > < input checked = "" class = "onoffswitch-checkbox" id = "' + settings.prefix + '_mark_fw" name = "onoffswitch" type = "checkbox" > < label class = "onoffswitch-label" id = "' + settings.prefix + '_mark_fw" > < /label></div >';
        html += '< /div>';
        html += '< div class = "col-md-4" >';
        html += 'Polizei';
        html += '< div class = "onoffswitch" > < input class = "onoffswitch-checkbox" id = "' + settings.prefix + '_mark_pol" name = "onoffswitch" type = "checkbox" > < label class = "onoffswitch-label" id = "' + settings.prefix + '_mark_pol" > < /label></div >';
        html += '< /div>';
        html += '< div class = "col-md-4" >';
        html += 'Rettungsdienst';
        html += '< div class = "onoffswitch" > < input class = "onoffswitch-checkbox" id = "' + settings.prefix + '_mark_rw" name = "onoffswitch" type = "checkbox" > < label class = "onoffswitch-label" id = "' + settings.prefix + '_mark_rw" > < /label></div >';
        html += '< /div>';
        html += '< /div>';
        html += '< div class = "col-md-12" id = "' + settings.prefix + '_settings_content" >';
        html += '< div class = "col-md-4" >';
        html += 'THW';
        html += '< div class = "onoffswitch" > < input class = "onoffswitch-checkbox" id = "' + settings.prefix + '_mark_thw" name = "onoffswitch" type = "checkbox" > < label class = "onoffswitch-label" id = "' + settings.prefix + '_mark_thw" > < /label></div >';
        html += '< /div>';
        html += '< div class = "col-md-4" >';
        html += 'Bereitschaftspolizei';
        html += '< div class = "onoffswitch" > < input class = "onoffswitch-checkbox" id = "' + settings.prefix + '_mark_bp" name = "onoffswitch" type = "checkbox" > < label class = "onoffswitch-label" id = "' + settings.prefix + '_mark_bp" > < /label></div >';
        html += '< /div>';
        html += '< div class = "col-md-4" >';
        html += 'Krankenhaus';
        html += '< div class = "onoffswitch" > < input class = "onoffswitch-checkbox" id = "' + settings.prefix + '_mark_kh" name = "onoffswitch" type = "checkbox" > < label class = "onoffswitch-label" id = "' + settings.prefix + '_mark_kh" > < /label></div >';
        html += '< /div>';
        html += '< /div>';
        html += '</div>';
        $('body').append(html);
    }
    function drawCircles(radius, type) {
        var data = get_buildings();
        // Map refresh
        map.invalidateSize(true);
        // Add markers for all buildings
        $.each(data, function (key, value) {
            var col = 'red', draw = false;
            if (value.stationType === 0 && type === settings.prefix + '_mark_fw') {
                draw = true;
            } else if (value.stationType == 6 && type === settings.prefix + 'mark_pol') {
                draw = true;
                col = 'green';
            } else if (value.stationType == 2 && type === settings.prefix + 'mark_rw') {
                draw = true;
                col = 'orange';
            } else if (value.stationType == 9 && type === settings.prefix + 'mark_thw') {
                draw = true;
                col = 'darkblue';
            } else if (value.stationType == 11 && type === settings.prefix + 'mark_bp') {
                draw = true;
                col = 'lightblue';
            } else if (value.stationType == 4 && type === settings.prefix + 'mark_kh') {
                draw = true;
                col = 'black';
            }
            if (draw === true) {
                var cars = '<span class="building_leaflet_text" style="z-index:99999; color: ' + col + ';"><i class="fa fa-building"></i> ' + value.stationName + '</span>' + car_list_printable(car_list(value.stationId)),
                        circle = L.circle([value.stationLat, value.stationLng], radius, {
                            color: col,
                            fillOpacity: 0.3,
                            riseOnHover: true
                        }).addTo(map);
                circle.bindLabel(cars);
                markers[value.stationId]=circle;
            }else{
                rmLayer(value.stationId);
            }
        });
    }
})(map, I18n, Jquery)

