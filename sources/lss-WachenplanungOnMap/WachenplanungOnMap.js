(function (map, I18n, $) {
    var markers = [], settings = {helper: false, fw: false, pol: false, rw: false, thw: false, bp: false, kh: false, radius: 5, locale: I18n.locale || 'de', translations: {
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
            console.log(markers[id]);
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
        var el = $(e.target), id = el.attr('id'), remove;
        console.log(el.prop('checked'),el);
        switch (id) {
            case settings.prefix + '_map_reload':
                mapReload(id);
                break;
            case settings.prefix + '_building_helper':
                remove=settings['helper'] = el.prop('checked');
                drawCircles(true,'', remove);
                break;
            case settings.prefix + '_x_radius':
                settings['radius'] = Number(el.val());
                drawCircles(true,'', true);
                break;
            case settings.prefix + '_mark_fw':
                remove = settings['fw'] = el.prop('checked');
                drawCircles(false,'fw', remove);
                break;
            case settings.prefix + '_mark_pol':
                remove=settings['pol'] = el.prop('checked');
                drawCircles(false,'pol', remove);
                break;
            case settings.prefix + '_mark_rw':
                remove=settings['rw'] = el.prop('checked');
                drawCircles(false,'rw', remove);
                break;
            case settings.prefix + '_mark_thw':
                remove=settings['thw'] = el.prop('checked');
                drawCircles(false,'thw', remove);
                break;
            case settings.prefix + '_mark_bp':
                remove=settings['bp'] = el.prop('checked');
                drawCircles(false,'bp', remove);
                break;
            case settings.prefix + '_mark_kh':
                remove=settings['kh'] = el.prop('checked');
                drawCircles(false,'kh', remove);
                break;
        }
        console.log(settings);
    }
    function createSettings() {
        var html = '<div id="' + settings.prefix + '_settings">';
            html += '<div class="col-md-4">Map Reload<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_map_reload" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_map_reload"></label></div></div>';
            html += '<div class="col-md-4">Wachen - Planung<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_building_helper" '+(settings.helper?'checked="true"':"")+' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_building_helper"></label></div></div>';
            html += '<div class="col-md-4">Radius<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_x_radius" '+(settings.radius?'checked="true"':"")+' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_x_radius"></label></div></div>';
            html += '<div class="col-md-4">Feuerwehr<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_fw" '+(settings.fw?'checked="true"':"")+' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_fw"></label></div></div>';
            html += '<div class="col-md-4">Polizei<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_pol" '+(settings.pol?'checked="true"':"")+' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_pol"></label></div></div>';
            html += '<div class="col-md-4">Rettungsdienst<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_rw" '+(settings.rw?'checked="true"':"")+' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_rw"></label></div></div>';
            html += '<div class="col-md-4">THW<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_thw" '+(settings.thw?'checked="true"':"")+' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_thw"></label></div></div>';
            html += '<div class="col-md-4">Bereitschaftspolizei<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_bp" '+(settings.bp?'checked="true"':"")+' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_bp"></label></div></div>';
            html += '<div class="col-md-4">Krankenhaus<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_kh" '+(settings.kh?'checked="true"':"")+' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_kh"></label></div></div>';
            
        html += '</div>';
        $('body').append(html);
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
            } else if (!remove && markers[value.stationId]) {
                rmLayer(value.stationId);
            }
        });
    }
    createSettings();
})(map, I18n, jQuery)

