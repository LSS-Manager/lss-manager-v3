((I18n, $) => {
    const LS_HEATMAP_STORAGE = "LSS_HEATMAP_STORAGE";

    delete localStorage['lssm_LS_HEATMAP_STORAGE'];

    Object.filter = (obj, predicate) =>
        Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {} );

    I18n.translations.de.lssm.heatmap = {
        active: 'Aktiviert',
        vehicleType: 'Gruppierung',
        radius: 'Radius',
        intensity: 'Intensität',
        close: 'Schliessen',
        reset: 'Reset',
        vehicleGroups: [
            {
                name: 'Löschfahrzeuge',
                vehicles: [0, 1, 6, 7, 8, 9, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 30, 37, 87, 88, 89, 90],
            },
            {
                name: 'DLK / Teleskopmasten',
                vehicles: [2, 85]
            },
            {
                name: 'ELW 1 / ELW 2 / AB-Einsatzleitung',
                vehicles: [3, 34, 78]
            },
            {
                name: 'RW / HLF / GKW / AB-Rüst',
                vehicles: [4, 30, 39, 47, 90]
            },
            {
                name: 'GW-A / AB-Atemschutz',
                vehicles: [5, 48]
            },
            {
                name: 'GW-Öl / AB-Öl',
                vehicles: [10, 49]
            },
            {
                name: 'Schlauchwagen / AB-Schlauch',
                vehicles: [11, 13, 14, 15, 16, 62]
            },
            {
                name: 'GW-Messtechnik',
                vehicles: [12]
            },
            {
                name: 'GW-Gefahrgut / AB-Gefahrgut',
                vehicles: [27, 77]
            },
            {
                name: 'GW-Höhenrettung',
                vehicles: [33]
            },
            {
                name: 'MTW',
                vehicles: [36]
            },
            {
                name: 'Dekon-P / AB-Dekon-P',
                vehicles: [53, 54]
            },
            {
                name: 'FwK',
                vehicles: [57]
            },
            {
                name: 'WLF',
                vehicles: [46]
            },
            {
                name: 'alle AB',
                vehicles: [47, 48, 49, 54, 62, 71, 77, 78]
            },
            {
                name: 'Fahrzeuge der Flughafenfeuerwehr',
                vehicles: [75, 76]
            },
            {
                name: 'Fahrzeuge der Werkfeuerwehr',
                vehicles: [83, 84, 85, 86]
            },
            {
                name: 'RTW',
                vehicles: [28]
            },
            {
                name: 'NEF',
                vehicles: [29]
            },
            {
                name: 'RTH',
                vehicles: [31]
            },
            {
                name: 'KTW',
                vehicles: [38]
            },
            {
                name: 'KdoW-LNA',
                vehicles: [55]
            },
            {
                name: 'KdoW-OrgL',
                vehicles: [56]
            },
            {
                name: 'GRTW',
                vehicles: [73]
            },
            {
                name: 'NAW',
                vehicles: [74]
            },
            {
                name: 'KTW Typ B',
                vehicles: [58]
            },
            {
                name: 'ELW 1 (SEG)',
                vehicles: [59]
            },
            {
                name: 'GW-San',
                vehicles: [60]
            },
            {
                name: 'FuStW',
                vehicles: [32]
            },
            {
                name: 'leBefKw',
                vehicles: [35]
            },
            {
                name: 'GruKw',
                vehicles: [50]
            },
            {
                name: 'FüKw',
                vehicles: [51]
            },
            {
                name: 'GefKw',
                vehicles: [52]
            },
            {
                name: 'Polizeihubschrauber',
                vehicles: [61]
            },
            {
                name: 'WaWe 10',
                vehicles: [72]
            },
            {
                name: 'SEK',
                vehicles: [79, 80]
            },
            {
                name: 'MEK',
                vehicles: [81, 82]
            },
            {
                name: 'Boote',
                vehicles: [66, 67, 68, 70, 71]
            },
            {
                name: 'Taucher',
                vehicles: [63, 69]
            },
            {
                name: 'GW-Wasserrettung',
                vehicles: [64]
            },
            {
                name: 'GKW',
                vehicles: [39]
            },
            {
                name: 'MTW-TZ',
                vehicles: [40]
            },
            {
                name: 'MzKw',
                vehicles: [41]
            },
            {
                name: 'LKW K 9 + BRmG R',
                vehicles: [42, 43]
            },
            {
                name: 'Anh DLE',
                vehicles: [44]
            },
            {
                name: 'MLW 5',
                vehicles: [45]
            },
            {
                name: 'Eigene Kombination',
                vehicles: []
            }
        ]
    };
    I18n.translations.en_US.lssm.heatmap = {
        active: 'Active',
        vehicleType: 'Groups',
        radius: 'Radius',
        intensity: 'Intensity',
        close: 'Close',
        vehicleGroups: [
            {
                name: 'Fire Engines / Quints / Rescue Engines',
                vehicles: [0, 1, 13, 18],
            },
            {
                name: 'Platform Trucks / Quints',
                vehicles: [2, 13]
            },
            {
                name: 'Heavy rescue vehicles / Rescue Engines / Utility Unit',
                vehicles: [4, 18]
            },
            {
                name: 'Heavy rescue vehicle + Boat',
                vehicles: [21]
            },
            {
                name: 'Utility Units',
                vehicles: [8]
            },
            {
                name: 'Boat trailers',
                vehicles: [22]
            },
            {
                name: 'Mobile air',
                vehicles: [6]
            },
            {
                name: 'Battalion Chief unit',
                vehicles: [3]
            },
            {
                name: 'Water Tanker',
                vehicles: [7]
            },
            {
                name: 'HazMat',
                vehicles: [9]
            },
            {
                name: 'Mobile command vehicle',
                vehicles: [12]
            },
            {
                name: 'ARFF',
                vehicles: [17]
            },
            {
                name: 'Large Fireboat',
                vehicles: [24]
            },
            {
                name: 'Ambulances',
                vehicles: [5, 27]
            },
            {
                name: 'Fly-Cars',
                vehicles: [15]
            },
            {
                name: 'EMS Rescue',
                vehicles: [28]
            },
            {
                name: 'EMS Chief',
                vehicles: [29]
            },
            {
                name: 'Mass Casualty Unit',
                vehicles: [20]
            },
            {
                name: 'Large Rescue Boat',
                vehicles: [25]
            },
            {
                name: 'Police Car',
                vehicles: [10]
            },
            {
                name: 'K-9',
                vehicles: [19]
            },
            {
                name: 'Police Motorcycle',
                vehicles: [23]
            },
            {
                name: 'SWAT-Vehicles',
                vehicles: [16, 26]
            },
            {
                name: 'HEMS',
                vehicles: [11]
            },
            {
                name: 'Police Helicopter',
                vehicles: [14]
            },
            {
                name: 'Own Combination',
                vehicles: []
            }
        ]
    };
    I18n.translations.en_GB.lssm.heatmap = {
        active: 'Active',
        vehicleType: 'Groups',
        radius: 'Radius',
        intensity: 'Intensity',
        close: 'Close',
        vehicleGroups: [
            {
                name: 'Own Combination',
                vehicles: []
            }
        ]
    };
    I18n.translations.en_AU.lssm.heatmap = {
        active: 'Active',
        vehicleType: 'Groups',
        radius: 'Radius',
        intensity: 'Intensity',
        close: 'Close',
        vehicleGroups: [
            {
                name: 'Own Combination',
                vehicles: []
            }
        ]
    };
    I18n.translations.cs_CZ.lssm.heatmap = {
        active: 'Aktivní',
        vehicleType: 'Skupiny',
        radius: 'Poloměr',
        intensity: 'Intenzita',
        close: 'Zavřít',
        vehicleGroups: [
            {
                name: 'Vlastní kombinace',
                vehicles: []
            }
        ]
    };
    I18n.translations.es_ES.lssm.heatmap = {
        active: 'Activo',
        vehicleType: 'Grupos',
        radius: 'Radio',
        intensity: 'Intensidad',
        close: 'Cerrar',
        vehicleGroups: [
            {
                name: 'Combinación propia',
                vehicles: []
            }
        ]
    };
    I18n.translations.pl_PL.lssm.heatmap = {
        active: 'Aktywny',
        vehicleType: 'Grupy',
        radius: 'Promień',
        intensity: 'Intensywność',
        close: 'Zamknij się.',
        vehicleGroups: [
            {
                name: 'Kombinacja własna',
                vehicles: []
            }
        ]
    };
    I18n.translations.sv_SE.lssm.heatmap = {
        active: 'Aktiva',
        vehicleType: 'grupper',
        radius: 'Radie',
        intensity: 'Intensitet',
        close: 'Stänga',
        vehicleGroups: [
            {
                name: 'Egen kombination',
                vehicles: []
            }
        ]
    };
    I18n.translations.da_DK.lssm.heatmap = {
        active: 'Aktiv',
        vehicleType: 'grupper',
        radius: 'Radius',
        intensity: 'Intensitet',
        close: 'Tæt',
        vehicleGroups: [
            {
                name: 'Egen kombination',
                vehicles: []
            }
        ]
    };
    I18n.translations.nb_NO.lssm.heatmap = {
        active: 'Aktiv',
        vehicleType: 'grupper',
        radius: 'Radius',
        intensity: 'Intensitet',
        close: 'Lukk',
        vehicleGroups: [
            {
                name: 'Egen kombinasjon',
                vehicles: []
            }
        ]
    };
    I18n.translations.it_IT.lssm.heatmap = {
        active: 'Attivo',
        vehicleType: 'Gruppi',
        radius: 'Raggio',
        intensity: 'Intensità',
        close: 'Chiudere',
        vehicleGroups: [
            {
                name: 'Combinazione propria',
                vehicles: []
            }
        ]
    };
    I18n.translations.tr_TR.lssm.heatmap = {
        active: 'Aktif',
        vehicleType: 'Gruplar',
        radius: 'yarıçap',
        intensity: 'yoğunluk',
        close: 'Kapat',
        vehicleGroups: [
            {
                name: 'Kendi Kombinasyonu',
                vehicles: []
            }
        ]
    };
    I18n.translations.fr_FR.lssm.heatmap = {
        active: 'Actif',
        vehicleType: 'Groupes',
        radius: 'Rayon',
        intensity: 'Intensité',
        close: 'Fermer',
        vehicleGroups: [
            {
                name: 'Combinaison propre',
                vehicles: []
            }
        ]
    };
    I18n.translations.ru_RU.lssm.heatmap = {
        active: 'Активный',
        vehicleType: 'Группы',
        radius: 'Радиус',
        intensity: 'Интенсивность',
        close: 'Близко',
        vehicleGroups: [
            {
                name: 'Собственная комбинация',
                vehicles: []
            }
        ]
    };
    I18n.translations.nl.lssm.heatmap = {
        active: 'Actief',
        vehicleType: 'Fracties',
        radius: 'Radius',
        intensity: 'Heftigheid',
        close: 'Sluiten',
        vehicleGroups: [
            {
                name: 'Eigen combinatie',
                vehicles: []
            }
        ]
    };

    let selection = 0;
    let heatLayer;
    let vehicleGroups = I18n.t('lssm.heatmap.vehicleGroups');

    let heatmap_settings = {
        'heatmap-active': {
            type: 'boolean',
            default: false
        },
        'heatmap-radius': {
            type: 'range',
            default: 80
        },
        'heatmap-intensity': {
            type: 'range',
            default: 15
        },
        'heatmap-vehicle': {
            type: 'select',
            default: 0
        }
    };

    for (let id in lssm.carsById) {
        if (!lssm.carsById.hasOwnProperty(id)) continue;
        heatmap_settings[`heatmap-custom-${id}`] = {
            type: 'boolean',
            default: false
        }
    }

    function getSettings() {
        let settings = heatmap_settings;
        if (!lssm.settings.get(LS_HEATMAP_STORAGE)) {
            for (let key in settings) {
                if (!settings.hasOwnProperty(key)) continue;
                settings[key].value = settings[key].default;
            }
        } else {
            settings = lssm.settings.get(LS_HEATMAP_STORAGE);
        }
        return settings;
    }

    function getSetting(key) {
        return getSettings()[key].value;
    }

    function setSettings(reload) {
        let settings = getSettings();
        for (let key in settings) {
            if (!settings.hasOwnProperty(key)) continue;
            let formElement = $('#' + key);
            if (!formElement[0]) continue;
            if (settings[key].type === 'boolean') {
                settings[key].value = !!formElement.is(':checked');
            } else if (settings[key].type === 'range') {
                settings[key].value = formElement.slider("value");
            } else {
                settings[key].value = parseInt(formElement.val());
            }
        }

        lssm.settings.remove(LS_HEATMAP_STORAGE);
        lssm.settings.set(LS_HEATMAP_STORAGE, settings);

        if (reload) parent.location.reload();
    }

    function renderCustomSettings() {
        let vehicle_checkboxes = '';
        for (let id in lssm.carsById) {
            if (!lssm.carsById.hasOwnProperty(id)) continue;
            vehicle_checkboxes += `<tr><td>${lssm.carsById[id][0]}</td><td><input class="ls-input" type="checkbox" id="heatmap-custom-${id}" vehicle_type="${id}" ${getSetting(`heatmap-custom-${id}`) ? 'checked' : ''}></td></tr>`;
        }
        $('.leaflet-control-container').after(`<div id="ls-heatmap-config-custom" class="leaflet-bottom leaflet-right leaflet-bar leaflet-pane" style="background-color: ${$('body').hasClass('dark') ? '#323232' : 'white'}; padding: 20px; left: 75%; overflow: auto; pointer-events: auto;"><table>${vehicle_checkboxes}</table></div>`);
        let handlers = [
            'boxZoom',
            'doubleClickZoom',
            'dragging',
            'keyboard',
            'scrollWheelZoom',
            'tap',
            'touchZoom'
        ];
        $('#ls-heatmap-config-custom')
            .on('mouseover', () => {
                for (let id in handlers) {
                    map[handlers[id]] && map[handlers[id]].disable();
                }
            })
            .on('mouseout', () => {
                for (let id in handlers) {
                    map[handlers[id]] && map[handlers[id]].enable();
                }
            });

        let checkboxes = $('#ls-heatmap-config-custom .ls-input');

        checkboxes.on('change', () => {
            setSettings();
            renderMap();
        });

    }

    function renderMapSettings() {
        let markup = `<div id="ls-heatmap-config-wrapper" class="leaflet-bar leaflet-control" style="background-color: ${$('body').hasClass('dark') ? '#323232' : 'white'};"><img id="ls-heatmap-config-img" style="height: 26px; width:26px; cursor: pointer;" src="${lssm.getlink('/modules/lss-heatmap/img/ls-heat-layer.png')}"></div>`;
        $('.leaflet-control-container .leaflet-bottom.leaflet-left').append(markup);
        $('#ls-heatmap-config-img').click(() => {
            $('#ls-heatmap-config-custom').remove();
            let wrapper = $('#ls-heatmap-config-wrapper');
            let isOpened = $(wrapper).attr('data-opened') === 'true';
            if (isOpened) {
                $('#ls-heatmap-config').remove();
                $(wrapper).attr('data-opened', 'false');
            } else {
                $('#ls-heatmap-config-wrapper').append(`<div id="ls-heatmap-config"><table style="line-height: 30px; margin-left: 30px; margin-bottom: 10px; margin-right: 10px;" class="ls-form-group"></table></div>`);
                $(wrapper).attr('data-opened', 'true');
                let form = $('#ls-heatmap-config .ls-form-group');
                // Active
                form.append(`<tr class="ls-heatmap-option"><td>${I18n.t('lssm.heatmap.active')}</td><td><input class="ls-input" type="checkbox" id="heatmap-active" ${getSetting('heatmap-active') ? 'checked' : ''}></td></tr>`);
                // Vehicle-Selection
                let vehicle_options = '';
                for (let key in vehicleGroups) {
                    if (!vehicleGroups.hasOwnProperty(key)) continue;
                    vehicle_options += `<option value=${key} ${parseInt(key) === getSetting('heatmap-vehicle') ? 'selected' : ''}>${vehicleGroups[key].name}</option>`;
                }
                if (getSetting('heatmap-vehicle') === vehicleGroups.length - 1) renderCustomSettings();
                form.append(`<tr class="ls-heatmap-option"><td>${I18n.t('lssm.heatmap.vehicleType')}</td><td><select class="ls-input" id="heatmap-vehicle">${vehicle_options}</select></td></tr>`);

                // Radius
                form.append(`<tr class="ls-heatmap-option"><td>${I18n.t('lssm.heatmap.radius')}</td><td><div class="value-slider" data-min="0" data-max="110" data-value="${getSetting('heatmap-radius')}" id="heatmap-radius"><div id="radius-handle" class="ui-slider-handle"></div></div></td></tr>`);

                // Intensity
                form.append(`<tr class="ls-heatmap-option"><td>${I18n.t('lssm.heatmap.intensity')}</td><td><div class="value-slider" data-min="0" data-max="50" data-value="${getSetting('heatmap-intensity')}" id="heatmap-intensity"><div id="intensity-handle" class="ui-slider-handle"></div></div></td></tr>`);

                // Btns
                form.append(`<tr class="ls-heatmap-option"><td><button id="heatmap_close" class="btn btn-default btn-xs">${I18n.t('lssm.heatmap.close')}</button></td><td><button id="heatmap_reset" class="btn btn-default btn-xs">${I18n.t('lssm.heatmap.reset')}</button></td></tr>`);

                $('#heatmap_close').click(() => {
                    $('#ls-heatmap-config-img').click();
                });

                $('#heatmap_reset').click(() => {
                    lssm.settings.remove(LS_HEATMAP_STORAGE);
                    $('#ls-heatmap-config-img')
                        .click()
                        .click();
                });

                $('#heatmap-vehicle').on('change', e => {
                    let select = e.currentTarget;
                    if (parseInt(select.value) !== vehicleGroups.length - 1) {
                        return $('#ls-heatmap-config-custom').remove();
                    }
                    renderCustomSettings();
                });

                $('#ls-heatmap-config .ls-input').on('change', () => {
                    setSettings();
                    renderMap();
                });

                $('.value-slider').slider({
                    start: function () {
                        map.dragging.disable();
                    },
                    stop: function () {
                        map.dragging.enable();
                        if ($(this).attr('id') === 'heatmap-intensity') {
                            for (let key in vehicleGroups) {
                                if (!vehicleGroups.hasOwnProperty(key)) continue;
                                delete vehicleGroups[key].generated;
                            }
                        }
                        setSettings();
                        renderMap();
                    },
                    create: function () {
                        $(this).slider('option', 'max', $(this).data('max'));
                        $(this).slider('option', 'value', $(this).data('value'));
                        $(this).find('.ui-slider-handle').text($(this).slider("value"));
                    },
                    slide: function(event, ui) {
                        $(this).find('.ui-slider-handle').text(ui.value);
                    },
                    min: 1
                });
            }
        });
    }

    function renderMap() {
        if (!getSetting('heatmap-active')) {
            heatLayer && map.removeLayer(heatLayer);
            heatLayer = null;
            return;
        }
        if (heatLayer) {
            map.removeLayer(heatLayer);
            heatLayer = null;
        }
        selection = getSetting('heatmap-vehicle');
        if (selection === vehicleGroups.length - 1) {
            vehicleGroups[selection].vehicles = [];
            for (let id in lssm.carsById) {
                if (!lssm.carsById.hasOwnProperty(id)) continue;
                if (getSetting(`heatmap-custom-${id}`)) {
                    vehicleGroups[selection].vehicles.push(parseInt(id));
                }
            }
            delete vehicleGroups[selection].generated;
        }
        if (!vehicleGroups[selection].generated) {
            let vehicles = Object.filter(lssm.vehicles, vehicle => vehicleGroups[selection].vehicles.includes(vehicle.type));
            vehicleGroups[selection].buildings = {};
            vehicleGroups[selection].points = [];
            vehicleGroups[selection].totalVehicles = 0;
            for (let vehicle_id in vehicles) {
                if (!vehicles.hasOwnProperty(vehicle_id)) continue;
                let vehicle = vehicles[vehicle_id];
                if (!vehicleGroups[selection].buildings[vehicle.building]) vehicleGroups[selection].buildings[vehicle.building] = 0;
                vehicleGroups[selection].buildings[vehicle.building]++;
                vehicleGroups[selection].totalVehicles++;
            }
            for (let building_id in vehicleGroups[selection].buildings) {
                if (!vehicleGroups[selection].buildings.hasOwnProperty(building_id)) continue;
                let building = lssm.buildings.filter(building => building.id === parseInt(building_id))[0];
                vehicleGroups[selection].points.push([
                    building.latitude,
                    building.longitude,
                    getSetting('heatmap-intensity') * vehicleGroups[selection].buildings[building_id]
                ]);
            }
        }
        vehicleGroups[selection].generated = true;
        heatLayer = L.heatLayer(vehicleGroups[selection].points, {
            radius: getSetting('heatmap-radius')
        }).addTo(map);
        $('.leaflet-heatmap-layer').css('background-color', 'unset');
    }

    $.get(lssm.getlink('/modules/lss-heatmap/vendor/leaflet-heat.js'))
        .fail(() => {
            console.log('[LSSM] Heatmap: Konnte Leaflet-Erweiterung nicht laden!');
        })
        .done(() => {
            renderMap();
            renderMapSettings();
        });
})(I18n, jQuery);
