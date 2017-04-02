(function (map, I18n, $) {
    var markers = {}, settings = {helper: false, fw: false, pol: false, rw: false, thw: false, bp: false, kh: false, radius: 5, locale: I18n.locale || 'de', translations: {
            de: {
                attributionControl: "Wachen-Planung by Lost &amp; Northdegree"
            }
        }, prefix: 'WachenplanungOnMap'};
    function rmLayer(id) {
        if (typeof id === 'undefined') {
            $.each(markers, function (key, value) {
                map.removeLayer(value);
            });
            markers = {};
        } else {
            map.removeLayer(markers[id]);
            delete markers[id];
        }
    }
    function mapReload(id) {
        setTimeout(function () {
            $(id).attr("checked", false);
            map.invalidateSize(true);
        }, 300);
    }
    function changeSetting(e) {
        var el = $(this), id = el.attr('id'), remove;
        switch (id) {
            case settings.prefix + '_map_reload':
                mapReload(id);
                break;
            case settings.prefix + '_building_helper':
                remove=settings['helper'] = el.prop('checked');
                break;
            case settings.prefix + '_x_radius':
                settings['radius'] = Number(el.val());

                break;
            case settings.prefix + '_mark_fw':
                remove = settings['fw'] = el.prop('checked');
                break;
            case settings.prefix + '_mark_pol':
                remove=settings['pol'] = el.prop('checked');
                break;
            case settings.prefix + '_mark_rw':
                remove=settings['rw'] = el.prop('checked');
                break;
            case settings.prefix + '_mark_thw':
                remove=settings['thw'] = el.prop('checked');
                break;
            case settings.prefix + '_mark_bp':
                remove=settings['bp'] = el.prop('checked');
                break;
            case settings.prefix + '_mark_kh':
                remove=settings['kh'] = el.prop('checked');
                break;
                console.log(settings);
        }
    }
    function createSettings() {
        var html = '<div id="' + settings.prefix + '_settings">';
        html += '<div class="col-md-12">';
        html += '<div class="col-md-4">';
        html += 'Map Reload';
        html += '<div class="onoffswitch"> <input class="onoffswitch-checkbox" id="' + settings.prefix + '_map_reload" name="onoffswitch" type="checkbox"> <label class="onoffswitch-label" id="' + settings.prefix + '_map_reload"> </label></div>';
        html += '</div>';
        html += '<div class="col-md-4">';
        html += 'Wachen - Planung';
        html += '<div class="onoffswitch"> <input class="onoffswitch-checkbox" id="' + settings.prefix + '_building_helper" name="onoffswitch" type="checkbox"> <label class="onoffswitch-label" id="' + settings.prefix + '_building_helper"> </label></div>';
        html += '</div>';
        html += '<div class="col-md-4">';
        html += 'Radius';
        html += '<div class="onoffswitch"> <input class="onoffswitch-checkbox" id="' + settings.prefix + '_x_radius" name="onoffswitch" type="checkbox"> <label class="onoffswitch-label" id="' + settings.prefix + '_x_radius"> </label></div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="col-md-12">';
        html += '<div class="col-md-4">';
        html += 'Feuerwehr';
        html += '<div class="onoffswitch"> <input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_fw" name="onoffswitch" type="checkbox"> <label class="onoffswitch-label" id="' + settings.prefix + '_mark_fw"> </label></div>';
        html += '</div>';
        html += '<div class="col-md-4">';
        html += 'Polizei';
        html += '<div class="onoffswitch"> <input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_pol" name="onoffswitch" type="checkbox"> <label class="onoffswitch-label" id="' + settings.prefix + '_mark_pol"> </label></div>';
        html += '</div>';
        html += '<div class="col-md-4">';
        html += 'Rettungsdienst';
        html += '<div class="onoffswitch"> <input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_rw" name="onoffswitch" type="checkbox"> <label class="onoffswitch-label" id="' + settings.prefix + '_mark_rw"> </label></div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="col-md-12">';
        html += '<div class="col-md-4">';
        html += 'THW';
        html += '<div class="onoffswitch"> <input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_thw" name="onoffswitch" type="checkbox"> <label class="onoffswitch-label" id="' + settings.prefix + '_mark_thw"> </label></div>';
        html += '</div>';
        html += '<div class="col-md-4">';
        html += 'Bereitschaftspolizei';
        html += '<div class="onoffswitch"> <input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_bp" name="onoffswitch" type="checkbox"> <label class="onoffswitch-label" id="' + settings.prefix + '_mark_bp"> </label></div>';
        html += '</div>';
        html += '<div class="col-md-4">';
        html += 'Krankenhaus';
        html += '<div class="onoffswitch"> <input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_kh" name="onoffswitch" type="checkbox"> <label class="onoffswitch-label" id="' + settings.prefix + '_mark_kh"> </label></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        $('#settings_outer').append(html);
        $('#' + settings.prefix + '_settings').change(changeSetting);
    }
    function drawCircles(all, type, remove) {
        var data = get_buildings();
        // Add markers for all buildings
        $.each(data, function (key, value) {
            var col = 'red', draw = false;
            if (value.stationType === 0 && settings['fw'] && (all || type === 'fw') && remove) {
                draw = true;
            } else if (value.stationType == 6 && settings['pol'] && (all || type === 'pol') && remove) {
                draw = true;
                col = 'green';
            } else if (value.stationType == 2 && settings['rw'] && (all || type === 'rw') && remove) {
                draw = true;
                col = 'orange';
            } else if (value.stationType == 9 && settings['thw'] && (all || type === 'thw') && remove) {
                draw = true;
                col = 'darkblue';
            } else if (value.stationType == 11 && settings['bp'] && (all || type === 'bp') && remove) {
                draw = true;
                col = 'lightblue';
            } else if (value.stationType == 4 && settings['kh'] && (all || type === 'kh') && remove) {
                draw = true;
                col = 'black';
            }
            if (draw === true) {
                var cars = '<span class="building_leaflet_text" style="z-index:99999; color: ' + col + ';"><i class="fa fa-building"></i> ' + value.stationName + '</span>' + car_list_printable(car_list(value.stationId)),
                        circle = L.circle([value.stationLat, value.stationLng], settings.radius * 1000, {
                            color: col,
                            fillOpacity: 0.3,
                            riseOnHover: true
                        }).addTo(map);
                circle.bindLabel(cars);
                markers[value.stationId] = circle;
            } else if (!remove) {
                rmLayer(value.stationId);
            }
        });
    }
    createSettings();
})(map, I18n, jQuery)

