(function (map, I18n, $) {
    var markers = [], settings = {set:{fw: false, pol: false, rw: false, thw: false, bp: false, kh: false, radius: 5}, locale: I18n.locale || 'de', translations: {
            de: {
                attributionControl: "Wachen-Planung by Lost &amp; Northdegree"
            }
        }, prefix: 'WachenplanungOnMap'}, types = {0: ['red', 'fw'], 6: ['green', 'pol'], 2: ['orange', 'rw'], 9: ['darkblue', 'thw'], 11: ['lightblue', 'bp'], 4: ['black', 'kh']};
    function rmLayer(id) {
        if (typeof id === 'undefined') {
            $.each(markers, function (key, value) {
                map.removeLayer(value);
            });
            markers = {};
        } else if (markers[id]) {
            map.removeLayer(markers[id]);
            delete markers[id];
        }
    }
    function draw(name, col, id, Lat, Lng) {
        var cars = '<span class="building_leaflet_text" style="z-index:99999; color: ' + col + ';"><i class="fa fa-building"></i> ' + name + '</span>' + car_list_printable(car_list(id)),
                circle = L.circle([Lat, Lng], settings.set.radius * 1000, {
                    color: col,
                    fillOpacity: 0.3,
                    riseOnHover: true
                }).addTo(map);
        circle.bindLabel(cars);
        markers[id] = circle;
    }
    function mapReload(e) {
        setTimeout(function () {
           e.attr("checked", false);
            map.invalidateSize(true);
        }, 300);
    }
    function changeSetting(e) {
        var el = $(e.target), id = el.attr('id');
        switch (id) {
            case settings.prefix + '_map_reload':
                mapReload(el);
                break;
            case settings.prefix + '_x_radius':
                settings.set['radius'] = Number(el.val());
                drawCircles(true);
                break;
            case settings.prefix + '_mark_fw':
                settings.set['fw'] = el.prop('checked');
                drawCircles(false, 0);
                break;
            case settings.prefix + '_mark_pol':
                settings.set['pol'] = el.prop('checked');
                drawCircles(false, 6);
                break;
            case settings.prefix + '_mark_rw':
                settings.set['rw'] = el.prop('checked');
                drawCircles(false, 2);
                break;
            case settings.prefix + '_mark_thw':
                settings.set['thw'] = el.prop('checked');
                drawCircles(false, 9);
                break;
            case settings.prefix + '_mark_bp':
                settings.set['bp'] = el.prop('checked');
                drawCircles(false, 11);
                break;
            case settings.prefix + '_mark_kh':
                settings.set['kh'] = el.prop('checked');
                drawCircles(false, 4);
                break;
        }
        localStorage.setItem(settings.prefix,JSON.stringify(settings.set));
    }
    function createSettings() {
        var html = '<div id="' + settings.prefix + '_settings">';
        html += '<div class="col-md-4">Map Reload<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_map_reload" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_map_reload"></label></div></div>';
        html += '<div class="col-md-4">Radius<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_x_radius" ' + (settings.set.radius ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_x_radius"></label></div></div>';
        html += '<div class="col-md-4">Feuerwehr<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_fw" ' + (settings.set.fw ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_fw"></label></div></div>';
        html += '<div class="col-md-4">Polizei<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_pol" ' + (settings.set.pol ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_pol"></label></div></div>';
        html += '<div class="col-md-4">Rettungsdienst<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_rw" ' + (settings.set.rw ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_rw"></label></div></div>';
        html += '<div class="col-md-4">THW<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_thw" ' + (settings.set.thw ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_thw"></label></div></div>';
        html += '<div class="col-md-4">Bereitschaftspolizei<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_bp" ' + (settings.set.bp ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_bp"></label></div></div>';
        html += '<div class="col-md-4">Krankenhaus<div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_kh" ' + (settings.set.kh ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_kh"></label></div></div>';
        html += '</div>';
        $('body').append(html);
        $('#' + settings.prefix + '_settings').change(changeSetting);
    }
    function drawCircles(all, type) {
        var data = get_buildings();
        $.each(data, function (key, value) {
            if (all) {
                rmLayer(value.stationId);
                // type nicht definiert, da alle Typen betroffen sind
                types[value.stationType] && settings.set[types[value.stationType][1]] && draw(value.stationName, types[value.stationType][0], value.stationId, value.stationLat, value.stationLng);
            } else if (value.stationType === type && settings.set[types[type][1]]) {
                draw(value.stationName, types[type][0], value.stationId, value.stationLat, value.stationLng);
            } else if (value.stationType === type && !settings.set[types[type][1]]) {
                rmLayer(value.stationId);
            }
        });
    }
    // settings mit settings aus Storage erweitern
    map.attributionControl.addAttribution(settings.translations[settings.locale].attributionControl);
    $.extend(settings.set,JSON.parse(localStorage.getItem(settings.prefix)));
    // Einstellungen erstellen
    createSettings();
    // alle aktiven Typen zeichnen
    drawCircles(true);
})(map, I18n, jQuery)

