(function (map, I18n, $) {
    var markers = [], settings = {set:{ils: false, fw: false, pol: false, rw: false, thw: false, bp: false, kh: false, radius: 5}, locale: I18n.locale || 'de', translations: {
            de: {
                attributionControl: "Wachen-Planung by Lost &amp; Northdegree"
            }
        }, prefix: 'WachenplanungOnMap'}, types = {7:['#5e5e5e', 'ils'],0: ['#ff4b38', 'fw'], 6: ['#1d9b1d', 'pol'], 2: ['#f9ffb7', 'rw'], 9: ['#002aff', 'thw'], 11: ['#0e4f0e', 'bp'], 4: ['#fff000', 'kh'], 12: ['#cdd668','seg'], 15: ['#009dff','wr'], 13: ['#147014','phl'], 5: ['#e6f268','rhl']};
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
        circle.bindTooltip(cars);
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
            //case settings.prefix + '_x_radius':
            //    settings.set['radius'] = Number(el.val());
            //    drawCircles(true);
            //    break;
            case settings.prefix + '_mark_ils':
                settings.set['ils'] = el.prop('checked');
                drawCircles(false, 7);
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
            case settings.prefix + '_mark_seg':
                settings.set['seg'] = el.prop('checked');
                drawCircles(false, 12);
                break;
            case settings.prefix + '_mark_wr':
                settings.set['wr'] = el.prop('checked');
                drawCircles(false, 15);
                break;
            case settings.prefix + '_mark_phl':
                settings.set['phl'] = el.prop('checked');
                drawCircles(false, 13);
                break;
            case settings.prefix + '_mark_rhl':
                settings.set['rhl'] = el.prop('checked');
                drawCircles(false, 5);
                break;
        }
        localStorage.setItem(settings.prefix,JSON.stringify(settings.set));
    }
    function createSettings() {
        var html = '<div id="' + settings.prefix + '_settings">';
        html += '<div><span class="label label-default" style="margin-bottom:10px;">Radius</span><div id="lssm_radius_slider"><div id="lssm_radius_handle" class="label label-info ui-slider-handle"></div></div></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_ils" ' + (settings.set.ils ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_ils"></label></div><span class="label label-ils">Leitstelle</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_fw" ' + (settings.set.fw ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_fw"></label></div><span class="label label-fw">Feuerwehr</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_pol" ' + (settings.set.pol ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_pol"></label></div><span class="label label-pol">Polizei</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_phl" ' + (settings.set.phl ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_phl"></label></div><span class="label label-phl">Polizei Helikopter</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_bp" ' + (settings.set.bp ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_bp"></label></div><span class="label label-bp">Bereitschaftspolizei</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_rw" ' + (settings.set.rw ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_rw"></label></div><span class="label label-rw">Rettungsdienst</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_rhl" ' + (settings.set.rhl ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_rhl"></label></div><span class="label label-rhl">Rettungs Helikopter</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_seg" ' + (settings.set.seg ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_seg"></label></div><span class="label label-seg">SEG</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_kh" ' + (settings.set.kh ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_kh"></label></div><span class="label label-kh">Krankenhaus</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_thw" ' + (settings.set.thw ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_thw"></label></div><span class="label label-thw">THW</span></div>';
        html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_wr" ' + (settings.set.wr ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_wr"></label></div><span class="label label-wr">Wasserrettung</span></div>';
        html += '</div>';
        $('#map_outer').append(html);
        $('#' + settings.prefix + '_settings').change(changeSetting);
        setCircleRadius();
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

    function setCircleRadius(){
        var handle = $( "#lssm_radius_handle" );
        $( "#lssm_radius_slider" ).slider({
            min: 3,
            max: 400,
            value: settings.set.radius,

            create: function() {
                handle.text( $( this ).slider( 'value' ) + ' km');
            },
            slide: function( event, ui ) {
                handle.text( ui.value + ' km' );
                settings.set.radius = ui.value;
            },
            stop: function( event, ui ) {
                drawCircles(true);
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
