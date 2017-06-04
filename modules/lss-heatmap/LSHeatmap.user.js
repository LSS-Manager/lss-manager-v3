(function(I18n, $) {
    'use strict';
    
    I18n.translations.de['lssm']['heatmap'] = {
            loeschfz: "Löschfahrzeuge",
            tankloeschfz: "Tanklöschfahrzeuge",
            schlauchwg: "Schlauchwagen",
            ruest: "Rüstwagen",
            oel: "Öl",
            dekon: "Dekon-P",
            atem: "Atemschutz",
            elw: "ELW 1+2",
            radius: "Radius",
            activated: "Aktiviert",
            intensity: "Intensität",
            vehicleType: "Fahrzeug-Typ",
            reset: "Zurücksetzen",
            close: "Schließen"
    };
    
    I18n.translations.en['lssm']['heatmap'] = {
            loeschfz: "Fire Trucks",
            tankloeschfz: "Tank Fire Trucks",
            schlauchwg: "Watercar",
            ruest: "Supply Truck",
            oel: "Oil",
            dekon: "Decon-P",
            atem: "Respiratory",
            elw: "ELW 1+2",
            radius: "Radius",
            activated: "Activated",
            intensity: "Intensity",
            vehicleType: "Vehicle type",
            reset: "Reset",
            close: "Close"
    };

    //lssm.loadScript("/modules/lss-heatmap/vendor/leaflet-heat.js");

    var LS_HEATMAP_STORAGE = "LS_HEATMAP_STORAGE";

    var vehicleClasses = {
        '1000': {'name': '[' + I18n.t('lssm.heatmap.loeschfz') + ']', 'vehicleTypeIds': [0, 1,6,7,8,9,30,37]},
        '1001': {'name': '[' + I18n.t('lssm.heatmap.tankloeschfz') + ']', 'vehicleTypeIds': [17,18,19,20,21,22,23,24,25,26]},
        '1002': {'name': '[' + I18n.t('lssm.heatmap.schlauchwg') + ']', 'vehicleTypeIds': [11,13,14,15,16]},
        '1003': {'name': '[' + I18n.t('lssm.heatmap.ruest') + ']', 'vehicleTypeIds': [4,30,47]},
        '1004': {'name': '[' + I18n.t('lssm.heatmap.oel') + ']', 'vehicleTypeIds': [10,49]},
        '1005': {'name': '[' + I18n.t('lssm.heatmap.dekon') + ']', 'vehicleTypeIds': [53,54]},
        '1006': {'name': '[' + I18n.t('lssm.heatmap.atem') + ']', 'vehicleTypeIds': [5,48]},
        '1007': {'name': '[' + I18n.t('lssm.heatmap.elw') + ']', 'vehicleTypeIds': [3,34]}
    };

    function getSettings(){
        var settings = {
            'heatmap-activated': {'name': I18n.t('lssm.heatmap.activated'), 'type': 'boolean', 'default': false},
            'heatmap-radius': {'name': I18n.t('lssm.heatmap.radius'), 'type': 'range', 'default': '80'},
            'heatmap-intensity': {'name': I18n.t('lssm.heatmap.intensity'), 'type': 'range', 'default': '15'},
            'heatmap-vehicle': {'name': I18n.t('lssm.heatmap.vehicleType'), 'type': 'select', 'default': '1000'}
        };

        if (!lssm_settings.get(LS_HEATMAP_STORAGE)) {
            for (var key in settings) {
                settings[key].value = settings[key].default;
            }
        } else {
            settings = lssm_settings.get(LS_HEATMAP_STORAGE);
        }
        return settings;
    }

    function getSetting(name){
        var settings = getSettings();
        return settings[name].value;
    }

    function setSettings(reload){
        var settings = getSettings();
        for (var key in settings) {
            var formElement = $('#' + key);
            if(settings[key].type == 'boolean'){
                if (formElement.is(':checked')) {
                    settings[key].value = true;
                } else {
                    settings[key].value = false;
                }
            } else if(settings[key].type == 'range'){
                settings[key].value = formElement.slider("value");
            } else{
                settings[key].value = parseInt(formElement.val());
            }
        }

        lssm_settings.remove(LS_HEATMAP_STORAGE);
        lssm_settings.set(LS_HEATMAP_STORAGE, settings);

        if(reload) parent.location.reload();
    }

    /*$( window ).load(function() {
        if (window.top != window.self){
            // Nothing to do here yet.
        } else {
            handleMainWindow();
        }
    });*/

    function handleMainWindow(){
        renderMap();
        renderMapSettings();
    }

    function renderMapSettings(){
        $('.leaflet-control-container .leaflet-bottom.leaflet-left').append('<div id="ls-heatmap-config-wrapper" class="leaflet-bar leaflet-control" style="background-color: white;"><img id="ls-heatmap-config-img" style="height: 32px; width: 32px; cursor: pointer;" src="' + lssm.getlink("/modules/lss-heatmap/img/ls-heat-layer.png") + '"></div>');
        $('#ls-heatmap-config-img').on('click', function(){
            var wrapper = $('#ls-heatmap-config-wrapper');
            var isOpened = $(wrapper).attr('data-opened') == 'true';
            if(isOpened){
                $('#ls-heatmap-config').remove();
                $(wrapper).attr('data-opened', 'false');
            } else {
                var mapConfig = '<div id="ls-heatmap-config"><table style="line-height: 30px; margin-left: 30px; margin-bottom: 10px; margin-right: 10px;" class="ls-form-group"></table>';
                $('#ls-heatmap-config-wrapper').append(mapConfig);
                $(wrapper).attr('data-opened', 'true');

                // Aktiviert
                $('#ls-heatmap-config .ls-form-group').append('<tr class="ls-heatmap-option"><td>Aktiviert</td><td><input class="ls-input" type="checkbox" id="heatmap-activated"></td></tr>');
                if(getSetting('heatmap-activated')){
                    $('#heatmap-activated').attr('checked', 'checked');
                }
                
                // Vehicle
                $('#ls-heatmap-config .ls-form-group').append('<tr class="ls-heatmap-option"><td>Fahrzeug</td><td><select class="ls-input" id="heatmap-vehicle"></select></td></tr>');

                for(var key in vehicleClasses){
                    if(getSetting('heatmap-vehicle') == this){
                        $('#heatmap-vehicle').append('<option selected value="'+ key + '">' + vehicleClasses[key].name + '</option>');
                    } else {
                        $('#heatmap-vehicle').append('<option value="'+ key + '">' + vehicleClasses[key].name + '</option>');
                    }
                }

                $(availableVehicleTypes).each(function(){
                    if(getSetting('heatmap-vehicle') == this){
                        $('#heatmap-vehicle').append('<option selected value="'+ this + '">' + carsById[this][0] + '</option>');
                    } else {
                        $('#heatmap-vehicle').append('<option value="'+ this + '">' + carsById[this][0] + '</option>');
                    }
                });

                // Radius
                $('#ls-heatmap-config .ls-form-group').append('<tr class="ls-heatmap-option"><td>Radius</td><td><div class="value-slider" data-min="0" data-max="200" data-value="'+ getSetting('heatmap-radius') +'" id="heatmap-radius"></div></td></tr>');

                // Intensity
                $('#ls-heatmap-config .ls-form-group').append('<tr class="ls-heatmap-option"><td>Intensität</td><td><div class="value-slider" data-min="0" data-max="20" data-value="'+ getSetting('heatmap-intensity') +'" id="heatmap-intensity"></div></td></tr>');


                $('#ls-heatmap-config .ls-input').on('change', function () {
                    setSettings();
                    renderMap();
                });

                $('.value-slider').slider({
                    start: function(){
                        map.dragging.disable();
                    },
                    stop: function(){
                        map.dragging.enable();
                    },
                    create: function(event, ui) {
                        $(this).slider('option', 'max', $(this).data('max'));
                        $(this).slider('option', 'value', $(this).data('value'));
                    },
                    slide: function() {
                        setSettings();
                        renderMap();
                    },
                    min: 1
                });

                // Buttons
                $('#ls-heatmap-config .ls-form-group').append('<tr class="ls-heatmap-option"><td><button id="heatmap_close" class="btn btn-default btn-xs">' + I18n.t('lssm.heatmap.close') + '</button><td><button id="heatmap_reset" class="btn btn-default btn-xs">' + I18n.t('lssm.heatmap.reset') + '</button></td></td></tr>');

                $('#heatmap_reset').click(function () {
                    lssm_settings.remove(LS_HEATMAP_STORAGE);
                    renderMap();
                    $('#ls-heatmap-config-img').click();
                    $('#ls-heatmap-config-img').click();
                });

                $('#heatmap_close').click(function () {
                    $('#ls-heatmap-config-img').click();
                });
            }

        });
    }
    var availableVehicleTypes = [];
    function getVehicles(){
        var vehicles = [];
        $('#building_list .building_list_li').each(function(){
            var building = $(this);
            var long = $(building).find('.map_position_mover').attr('data-longitude');
            var lat = $(building).find('.map_position_mover').attr('data-latitude');
            $(this).find('.building_list_vehicle_element').each(function(){
                var vehicle_type_id = $(this).find('.vehicle_building_list_button').attr('vehicle_type_id');
                var name = $(this).find('.vehicle_building_list_button').text();
                var vehicle = {'vehicle_type_id': parseInt(vehicle_type_id), 'lat': lat, 'long': long, 'name': name};
                vehicles.push(vehicle);
                if (availableVehicleTypes.indexOf(vehicle_type_id) === -1) availableVehicleTypes.push(vehicle_type_id);
            });
        });
        return vehicles;
    }

    var heat;

    var vehicles;
    function renderMap(){
        if (heat !== undefined) {
            map.removeLayer(heat);
            heat = undefined;
        }

        if(vehicles === undefined){
            vehicles = getVehicles();
        }

        if(getSetting('heatmap-activated')){
            var entries = [];
            $(vehicles).each(function(){
                var vehicle = this;
                if(vehicle.vehicle_type_id == getSetting('heatmap-vehicle')){
                    entries.push([vehicle.lat, vehicle.long, getSetting('heatmap-intensity')]);
                } else if(vehicleClasses[getSetting('heatmap-vehicle')] !== undefined && vehicleClasses[getSetting('heatmap-vehicle')].vehicleTypeIds.indexOf(vehicle.vehicle_type_id ) !== -1){
                    entries.push([vehicle.lat, vehicle.long, getSetting('heatmap-intensity')]);
                }
            });
            heat = L.heatLayer(entries, {radius: getSetting('heatmap-radius')}).addTo(map);
        }
    }
    $.get(lssm.getlink("/modules/lss-heatmap/vendor/leaflet-heat.js"))
    .fail(function () {
        console.log("LSHeatmap: Clouldn't load leaflet extension")
    })
    .done(function () {
        handleMainWindow();
    });
})(I18n, jQuery);