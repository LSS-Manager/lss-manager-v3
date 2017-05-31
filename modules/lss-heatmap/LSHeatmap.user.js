(function() {
    'use strict';

    //$('head').append('<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>');
    //$('head').append('<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"></script>');

    $('head').append('<script type="text/javascript" src="' + lssm.config.server + '/modules/lss-heatmap/vendor/leaflet-heat.js"></script>');

    var LS_HEATMAP_STORAGE = "LS_HEATMAP_STORAGE";
    
    var carIds = {
        0: 'LF 20',
        1: 'LF 10',
        2: 'DLK 23',
        3: 'ELW 1',
        4: 'RW',
        5: 'GW-A',
        6: 'LF 8/6',
        7: 'LF 20/16',
        8: 'LF 10/6',
        9: 'LF 16-TS',
        10: 'GW-Öl',
        11: 'GW-L2-Wasser',
        12: 'GW-Messtechnik',
        13: 'SW 1000',
        14: 'SW 2000',
        15: 'SW 2000-Tr',
        16: 'SW KatS',
        17: 'TLF 2000',
        18: 'TLF 3000',
        19: 'TLF 8/8',
        20: 'TLF 8/18',
        21: 'TLF 16/24-Tr',
        22: 'TLF 16/25',
        23: 'TLF 16/45',
        24: 'TLF 20/40',
        25: 'TLF 20/40-SL',
        26: 'TLF 16',
        27: 'GW-Gefahrgut',
        28: 'RTW',
        29: 'NEF',
        30: 'HLF 20',
        31: 'RTH',
        32: 'FuStW',
        33: 'GW-Höhenrettung',
        34: 'ELW 2',
        35: 'leBefKw',
        36: 'MTW',
        37: 'TSF-W',
        38: 'KTW',
        39: 'GKW',
        40: 'MTW-TZ',
        41: 'MzKW',
        42: 'LKW K9',
        43: 'BRmG R',
        44: 'Anh. DLE',
        45: 'MLW 5',
        46: 'WLF',
        47: 'AB-Rüst',
        48: 'AB-Atemschutz',
        49: 'AB-Öl',
        50: 'GruKw',
        51: 'FüKw',
        52: 'GefKw',
        53: 'GW Dekon-P',
        54: 'AB-Dekon-P',
        55: 'KdoW-LNA',
        56: 'KdoW-OrgL',
        57: 'Kran',
        58: 'KTW Typ B',
        59: 'ELW 1 (SEG)',
        60: 'GW-SAN',
        61: 'Polizeihubschrauber',
        62: 'AB-Schlauch',
        63: 'GW-Taucher',
        64: 'GW-Wasserrettung',
        65: 'LKW 7 Lkr 19 tm',
        66: 'Anh MzB',
        67: 'Anh SchlB',
        68: 'Anh MzAB',
        69: 'Tauchkraftwagen',
        70: 'MZB',
        71: 'AB-MZB'
    };

    var vehicleClasses = {
        '1000': {'name': '[Löschfahrzeuge]', 'vehicleTypeIds': [0, 1,6,7,8,9,30,37]},
        '1001': {'name': '[Tanklöschfahrzeuge]', 'vehicleTypeIds': [17,18,19,20,21,22,23,24,25,26]},
        '1002': {'name': '[Schlauchwagen]', 'vehicleTypeIds': [11,13,14,15,16]},
    };

    function getSettings(){
        var settings = {
            'heatmap-activated': {'name': 'Aktiviert', 'type': 'boolean', 'default': false},
            'heatmap-radius': {'name': 'Radius', 'type': 'range', 'default': '80'},
            'heatmap-intensity': {'name': 'Intensität', 'type': 'range', 'default': '15'},
            'heatmap-vehicle': {'name': 'Fahrzeug-Typ', 'type': 'select', 'default': '0'}
        };

        if (!window.localStorage.getItem(LS_HEATMAP_STORAGE)) {
            for (var key in settings) {
                settings[key].value = settings[key].default;
            }
        } else {
            settings = JSON.parse(window.localStorage.getItem(LS_HEATMAP_STORAGE));
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

        window.localStorage.removeItem(LS_HEATMAP_STORAGE);
        window.localStorage.setItem(LS_HEATMAP_STORAGE, JSON.stringify(settings));

        if(reload) parent.location.reload();
    }

    $( window ).load(function() {
        if (window.top != window.self){
            // Nothing to do here yet.
        } else {
            handleMainWindow();
        }
    });

    function handleMainWindow(){
        renderMap();
        renderMapSettings();
    }

    function renderMapSettings(){
        $('.leaflet-control-container .leaflet-bottom.leaflet-left').append('<div id="ls-heatmap-config-wrapper" class="leaflet-bar leaflet-control" style="background-color: white;"><img id="ls-heatmap-config-img" style="height: 32px; width: 32px; cursor: pointer;" src="https://jalibu.github.io/LSHeat/LSHeat/images/ls-heat-layer.png"></div>');
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

                // Radius
                $('#ls-heatmap-config .ls-form-group').append('<tr class="ls-heatmap-option"><td>Radius</td><td><div class="value-slider" data-min="0" data-max="200" data-value="'+ getSetting('heatmap-radius') +'" id="heatmap-radius"></div></td></tr>');

                // Intensity
                $('#ls-heatmap-config .ls-form-group').append('<tr class="ls-heatmap-option"><td>Intensität</td><td><div class="value-slider" data-min="0" data-max="20" data-value="'+ getSetting('heatmap-intensity') +'" id="heatmap-intensity"></div></td></tr>');

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
                        $('#heatmap-vehicle').append('<option selected value="'+ this + '">' + carIds[this] + '</option>');
                    } else {
                        $('#heatmap-vehicle').append('<option value="'+ this + '">' + carIds[this] + '</option>');
                    }
                });

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
                $('#ls-heatmap-config .ls-form-group').append('<tr class="ls-heatmap-option"><td><button id="heatmap_close" class="btn">Schließen</button><td><button id="heatmap_reset" class="btn">Zurücksetzen</button></td></td></tr>');

                $('#heatmap_reset').click(function () {
                    window.localStorage.removeItem(LS_HEATMAP_STORAGE);
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
})();