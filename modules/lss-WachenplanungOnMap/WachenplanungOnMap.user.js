(function (map, I18n, $) {
    if ("undefined" != typeof mapkit) {
        alert("[" + lssm.Module.WachenplanungOnMap.name[I18n.locale] + "]\n\n" + I18n.t('lssm.mapkit'));
    } else {
        I18n.translations.de['lssm']['wpom'] = {
            setmarker: "Marker setzen",
            remmarker: "Marker entfernen",
            plan: "Wache planen",
            vehicles: "Fahrzeuge",
            btype: "Gebäudetyp",
            bname: "Name",
            addveh: "Fahrzeug hinzufügen",
            set: "Setzen",
            rem: "Entfernen",
            brem: "Geplante Wache entfernen"
        };
        I18n.translations.en['lssm']['wpom'] = {
            setmarker: "Set marker",
            remmarker: "Remove marker",
            plan: "Add planned building",
            vehicles: "Vehicles",
            btype: "Building type",
            bname: "Name",
            addveh: "Add vehicle",
            set: "Set",
            rem: "Remove",
            brem: "Remove planned building"
        };
        I18n.translations.nl['lssm']['wpom'] = {
            setmarker: "Plaats markering",
            remmarker: "Verwijder markering",
            plan: "Plaats een gepland gebouw",
            vehicles: "Voertuigen",
            btype: "Gebouwtype",
            bname: "Naam",
            addveh: "voeg voertuig toe",
            set: "Plaats",
            rem: "Verwijder",
            brem: "Verwijder gepland gebouw"
        };
        let markers = [], settings = {
            set: {
                ils: false,
                fw: false,
                pol: false,
                rw: false,
                thw: false,
                bp: false,
                kh: false,
                radius: 5,
                showCars: true,
                showSlider: true,
                showRadInput: false
            }, locale: I18n.locale || 'de', translations: {
                de: {
                    attributionControl: "Wachen-Planung by Lost &amp; Northdegree"
                }
            }, prefix: 'WachenplanungOnMap'
        }, types = {
            7: ['#5e5e5e', 'ils'],
            0: ['#ff4b38', 'fw'],
            6: ['#1d9b1d', 'pol'],
            2: ['#f9ffb7', 'rw'],
            9: ['#002aff', 'thw'],
            11: ['#0e4f0e', 'bp'],
            4: ['#fff000', 'kh'],
            12: ['#cdd668', 'seg'],
            15: ['#009dff', 'wr'],
            13: ['#147014', 'phl'],
            5: ['#e6f268', 'rhl']
        };

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
            let cars = '<span class="building_leaflet_text" style="z-index:99999; color: ' + col + ';"><i class="fa fa-building"></i> ' + name + '</span>' + (settings.set.showCars ? lssm.car_list_printable(lssm.car_list(id)) : ''),
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
            let el = $(e.target), id = el.attr('id');
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
                case settings.prefix + '_mark_showCars':
                    settings.set['showCars'] = el.prop('checked');
                    drawCircles(true);
                    break;
            }
            lssm.settings.set(settings.prefix, settings.set);
        }

        function generatetooltip(marker, name, cars) {
            let car_n = [];
            for (let c in cars) {
                c = cars[c];
                let n = lssm.carsById[c];
                car_n.push({classes: "", fms: "", name: n[0]});
            }
            data = name;
            if (car_n.length > 0) {
                data += '&nbsp;<i class="fa fa-car"></i>' + car_n.length;
                data += lssm.car_list_printable(car_n);
            }
            // Re-Bind the content
            marker.bindTooltip(data, {
                direction: "top",
                offset: L.point(0, -marker.options.icon.options.iconSize[1]),
                zIndex: 999
            });
        }

        function addBuildingToMap(id, name, type, cars, pos) {
                "use strict";
            let building_marker_image = "/images/building_leitstelle.png";
            switch (type) {
                case BUILDING_TYPE_FEUERWEHRSCHULE:
                    building_marker_image = "/images/building_fireschool.png";
                    break;

                case BUILDING_TYPE_FEUERWACHE:
                    building_marker_image = "/images/building_fire.png";
                    break;

                case BUILDING_TYPE_RETTUNGSWACHE:
                    building_marker_image = "/images/building_rettungswache.png";
                    break;

                case BUILDING_TYPE_RETTUNGSSCHULE:
                    building_marker_image = "/images/building_rettungsschule.png";
                    break;

                case BUILDING_TYPE_HOSPITAL:
                    building_marker_image = "/images/building_hospital.png";
                    break;

                case BUILDING_TYPE_NOTARZTHUBSCHRAUBERLANDEPLATZ:
                    building_marker_image = "/images/building_helipad.png";
                    break;

                case BUILDING_TYPE_POLIZEIHUBSCHRAUBERLANDEPLATZ:
                    building_marker_image = "/images/building_helipad.png";
                    break;
                case BUILDING_TYPE_POLIZEIZELLE:
                case BUILDING_TYPE_POLIZEIWACHE:
                    building_marker_image = "/images/building_polizeiwache.png";
                    break;
                case BUILDING_TYPE_LEITSTELLE:
                    building_marker_image = "/images/building_leitstelle.png";
                    break;

                case BUILDING_TYPE_POLIZEISCHULE:
                    building_marker_image = "/images/building_polizeischule.png";
                    break;

                case BUILDING_TYPE_THW:
                    building_marker_image = "/images/building_thw.png";
                    break;

                case BUILDING_TYPE_THW_BUNDESSCHULE:
                    building_marker_image = "/images/building_thw_school.png";
                    break;

                case BUILDING_TYPE_BEREITSCHAFTSPOLIZEI:
                    building_marker_image = "/images/building_bereitschaftspolizei.png";
                    break;

                case BUILDING_TYPE_SEG:
                    building_marker_image = "/images/building_seg.png";
                    break;

                case BUILDING_TYPE_BEREITSTELLUNGSRAUM:
                    building_marker_image = "/images/building_bereitstellungsraum.png";
                    break;

                case BUILDING_TYPE_WASSERRETTUNG:
                    building_marker_image = "/images/building_wasserwacht.png";
                    break;
            }
            let icon = L.icon({
                iconUrl: building_marker_image,
                iconSize: [32, 37],
                iconAnchor: iconAnchorCalculate([32, 37])
            });
            if (typeof pos == "undefined")
                pos = map.getCenter();
            let marker = L.marker(pos, {
                draggable: true,
                opacity: 0.8,
                icon: icon,
                id: id,
                zIndexOffset: 20000
            }).on("dragend", function (e) {
                let id = e.target.options.id;
                let pos = e.target._latlng;
                let index = $.map(plannedMarkers, function (obj, index) {
                    if (obj.id === id) {
                        return index
                    }
                });
                plannedMarkers[index[0]].p = pos;
                lssm.settings.set("wpomp", plannedMarkers);
            })
                .addTo(map);
            generatetooltip(marker, name, cars);
            plannedMarkersMap.push(marker);
            return pos;
        }

        function setMarker() {
                "use strict";
            let form = "<h1>Wache planen</h1>";
            // Type

            form += '<div class="input-group select required building_building_type"><div class="input-group-addon"><label class="select required " for="building_building_type"><abbr title="required">*</abbr> ' + I18n.t('lssm.wpom.btype') + '</label></div><select class="select required form-control" id="building_building_type"><option value=""></option>';
            for (let i in btypes) {
                form += '<option value="' + i + '">' + btypes[i] + '</option>';
            }
            form += '</select></div>';
            // Name
            form += '<div class="input-group string required building_name">';
            form += '<div class="input-group-addon"><label class="string required " for="building_name"><abbr title="required">*</abbr> ' + I18n.t('lssm.wpom.bname') + '</label></div>';
            form += '<input class="string required form-control" id="building_name" size="50" type="text"></div>';
            // Vehicles
            form += '<div class="input-group select required building_vehicle"><div class="input-group-addon"><label class="select required " for="building_vehicle"><abbr title="required">*</abbr> ' + I18n.t('lssm.wpom.addveh') + '</label></div><select class="select required form-control" id="building_vehicle"><option value=""></option>';
            for (let c in lssm.carsById) {
                let car = lssm.carsById[c];
                form += '<option value="' + c + '">' + car[0] + '</option>';
            }
            form += '</select></div>';
            form += '<button class="btn btn-success btn pull-right" style="display:none;" id="addmarker">' + I18n.t('lssm.wpom.set') + '</button>';
            form += "<h2>" + I18n.t('lssm.wpom.vehicles') + "</h2>";
            form += '<div id="building_vehicles"></div>';
            let modal = lssm.modal.show(form);

            $(modal + " #building_building_type").on('change', function () {
                if (this.value !== "" && $(modal + " #building_name").val().length > 0)
                    $(modal + " #addmarker").show();
                else
                    $(modal + " #addmarker").hide();
            });
            $(modal + " #building_name").on('keyup', function () {
                if (this.value.length > 0 && $(modal + " #building_building_type").val() !== "")
                    $(modal + " #addmarker").show();
                else
                    $(modal + " #addmarker").hide();
            });
            $(modal + ' #building_vehicle').on('change', function (ev) {
                let e = ev.target;
                if (e.value !== "") {
                    let val = parseInt(e.value);
                    $(modal + " #building_vehicles").append('<div style="margin: 5px;" data-type="' + val + '"><a href="#" onclick="$(this).parent().remove();"><i class="fa fa-times red"></i></a>&nbsp;' + e[val + 1].text + '</div>');
                    $(modal + " #building_vehicle").val("");
                }
            });
            $(modal + ' #addmarker').on('click', function (ev) {
                let name = $(modal + " #building_name").val();
                let type = parseInt($(modal + " #building_building_type").val());
                let cars = [];
                $(modal + " #building_vehicles div").each(function (i, e) {
                    cars.push($(e).attr('data-type'));
                });
                let pos = addBuildingToMap(pmid, name, type, cars);
                plannedMarkers.push({id: pmid, n: name, t: type, c: cars, p: pos});
                pmid++;
                lssm.settings.set("wpomp", plannedMarkers);
                lightboxClose();
            });
        };

        function remMarker() {
                "use strict";
            let form = "<h1>" + I18n.t('lssm.wpom.brem') + "</h1>";
            // Type
            form += '<div class="input-group select required planned_building"><div class="input-group-addon"><label class="select required " for="planned_building"><abbr title="required">*</abbr> ' + I18n.t('lssm.wpom.bname') + '</label></div><select class="select required form-control" id="planned_building"><option value=""></option>';
            for (let m in plannedMarkers) {
                m = plannedMarkers[m];
                form += '<option value="' + m.id + '">' + m.n + '</option>';
            }
            form += '</select></div>';

            form += '<button class="btn btn-success btn pull-right" style="display:none;" id="remmarker">' + I18n.t('lssm.wpom.rem') + '</button>';
            let modal = lssm.modal.show(form);
            $(modal + " #planned_building").on('change', function () {
                if (this.value !== "")
                    $(modal + " #remmarker").show();
                else
                    $(modal + " #remmarker").hide();
            });
            $(modal + ' #remmarker').on('click', function (ev) {
                /*plannedMarkers.push({id: pmid, n:name, t:type, c:cars});*/
                let id = parseInt($(modal + " #planned_building").val());
                let index = $.map(plannedMarkers, function (obj, index) {
                    if (obj.id === id) {
                        return index
                    }
                });
                plannedMarkers.splice(index[0], 1);
                lssm.settings.set("wpomp", plannedMarkers);
                index = $.map(plannedMarkersMap, function (obj, index) {
                    if (obj.options.id === id) {
                        map.removeLayer(obj);
                        return index
                    }
                });
                plannedMarkersMap.splice(index[0], 1);
                lightboxClose();
            });
        };

        function createSettings() {
            let html = '<div id="' + settings.prefix + '_settings">';
            html += '<div><span class="label label-default" style="margin-bottom:10px;">Radius</span><div id="lssm_radius_slider"><div id="lssm_radius_handle" class="label label-info ui-slider-handle"></div></div></div>';
            html += '<div><input class="numeric integer" ' + (settings.set.showRadInput ? '' : 'style="display:none;"') + ' id="lssm_radius_slider_input" step="1" type="number" value="0"></div>';
            html += '<div class="lssm_wachen_selector"><button id="' + settings.prefix + '_setmarker">' + I18n.t('lssm.wpom.setmarker') + '</button></div>';
            html += '<div class="lssm_wachen_selector"><button id="' + settings.prefix + '_remmarker">' + I18n.t('lssm.wpom.remmarker') + '</button></div>';
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
            html += '<div class="lssm_wachen_selector"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="' + settings.prefix + '_mark_showCars" ' + (settings.set.showCars ? 'checked="true"' : "") + ' name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="' + settings.prefix + '_mark_showCars"></label></div><span class="label label-default">Zeige Fahrzeuge?</span></div>';
            html += '</div>';
            $('#map_outer').append(html);
            $('#' + settings.prefix + '_setmarker').on("click", setMarker);
            $('#' + settings.prefix + '_remmarker').on("click", remMarker);
            $('#' + settings.prefix + '_settings').change(changeSetting);
            setCircleRadius();
        }

        function drawCircles(all, type) {
            let data = lssm.get_buildings();
            $.each(data, function (key, value) {
                if (all) {
                    rmLayer(value.id);
                    // type nicht definiert, da alle Typen betroffen sind
                    types[value.building_type] && settings.set[types[value.building_type][1]] && draw(value.building_type, types[value.building_type][0], value.id, value.latitude, value.longitude);
                } else if (value.building_type === type && settings.set[types[type][1]]) {
                    draw(value.caption, types[type][0], value.id, value.latitude, value.longitude);
                } else if (value.building_type === type && !settings.set[types[type][1]]) {
                    rmLayer(value.id);
                }
            });
        }

        function setCircleRadius() {
            let handle = $("#lssm_radius_handle");
            $('#lssm_radius_slider_input').val(settings.set.radius).change(function () {
                settings.set.radius = $(this).val();
                $("#lssm_radius_slider").slider("option", "value", settings.set.radius);
                handle.text(settings.set.radius + ' km');
                drawCircles(true);
                lssm.settings.set(settings.prefix, settings.set);
            });
            $('#lssm_radius_slider,#lssm_radius_slider_input').dblclick(function () {
                $('#lssm_radius_slider_input,#lssm_radius_slider').toggle("slow");
                settings.set.showRadInput = !settings.set.showRadInput;
                settings.set.showSlider = !settings.set.showSlider;
                lssm.settings.set(settings.prefix, settings.set);
            });
            $("#lssm_radius_slider").slider({
                min: 3,
                max: 400,
                value: settings.set.radius,

                create: function () {
                    handle.text($(this).slider('value') + ' km');
                    !settings.set.showSlider && $(this).hide();

                },
                slide: function (event, ui) {
                    handle.text(ui.value + ' km');
                    settings.set.radius = ui.value;
                    $('#lssm_radius_slider_input').val(settings.set.radius);
                },
                stop: function (event, ui) {
                    drawCircles(true);
                }
            });
        }

        // settings mit settings aus Storage erweitern
        map.attributionControl.addAttribution(settings.translations[settings.locale].attributionControl);
        $.extend(settings.set, lssm.settings.get(settings.prefix, null));
        // Einstellungen erstellen
        createSettings();
        // alle aktiven Typen zeichnen
        drawCircles(true);
        let btypes = {};
        $.get('/buildings/new')
            .fail(function () {
                console.log("Could not get building list. Disabling mapmarkers.");
                $("#WachenplanungOnMap_remmarker").remove();
                $("#WachenplanungOnMap_addmarker").remove();
            })
            .done(function (data) {
                $.each($(data).find("#building_building_type option"), function (key, value) {
                    "use strict";
                    if (value.value !== "")
                        btypes[value.value] = value.text;
                });
            });
        let pmid = 0;
        let plannedMarkers = lssm.settings.get("wpomp", []);
        let plannedMarkersMap = [];
        if (plannedMarkers.length > 0) {
            pmid = (plannedMarkers[plannedMarkers.length - 1].id) + 1;
            for (let b in plannedMarkers) {
                b = plannedMarkers[b];
                addBuildingToMap(b.id, b.n, b.t, b.c, b.p);
            }
        }
    }
})(map, I18n, jQuery);
