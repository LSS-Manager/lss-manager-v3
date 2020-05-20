(function (I18n, $) {
    'use strict';
    const SETTINGS = "LSS_TAILORED_TABS_STORAGE";

    const managedSettings = {
        "id": SETTINGS,
        "title": 'Tailored Tabs',
        "settings": {
            "sekmek": {
                "default": false,
                "ui": {
                    "label": 'SEK/MEK',
                    "type": "toggle",
                    "description": 'SEK/MEK Einheiten in eigenem Tab'
                }
            },
            "icao": {
                "default": false,
                "ui": {
                    "label": 'ICAO',
                    "type": "toggle",
                    "description": 'FLF und RTF in eigenen Tab'
                }
            },
            "wf": {
                "default": false,
                "ui": {
                    "label": 'Werkfeuerwehr',
                    "type": "toggle",
                    "description": 'Werkfeuerwehr in eigenen Tab'
                }
            },
            "heli": {
                "default": false,
                "ui": {
                    "label": 'Helikopter',
                    "type": "toggle",
                    "description": 'RTH und Polizeihelikopter in eigenen Tab'
                }
            },
            "nas": {
                "default": false,
                "ui": {
                    "label": 'Notärzte',
                    "type": "toggle",
                    "description": 'NEF/NAWs und RTHs in eigenen Tab'
                }
            },
            "lna": {
                "default": false,
                "ui": {
                    "label": 'LNA hinzufügen',
                    "type": "checkbox",
                    "parent": SETTINGS + "_nas_toggle",
                }
            },
            "orgl": {
                "default": false,
                "ui": {
                    "label": 'OrgL hinzufügen',
                    "type": "checkbox",
                    "parent": SETTINGS + "_nas_toggle",
                }
            },
            "grtw": {
                "default": false,
                "ui": {
                    "label": 'GRTW hinzufügen',
                    "type": "checkbox",
                    "parent": SETTINGS + "_nas_toggle",
                }
            },
            "rhs": {
                "default": false,
                "ui": {
                    "label": 'RHS',
                    "type": "toggle",
                    "description": 'Hundestaffeln in eigenen Tab'
                }
            },
            "seg": {
                "default": false,
                "ui": {
                    "label": 'SEG',
                    "type": "toggle",
                    "description": 'SEG Einheiten in eigenen Tab'
                }
            },
            "rhs1": {
                "default": false,
                "ui": {
                    "label": 'RHS hinzufügen',
                    "type": "checkbox",
                    "parent": SETTINGS + "_seg_toggle",
                }
            },
            "ktw": {
                "default": false,
                "ui": {
                    "label": 'KTW',
                    "type": "toggle",
                    "description": 'KTWs in eigenem Tab. (Funktioniert leider momentan nicht bei der Einsatzart Krankentransport)'
                }
            },
            "segktw": {
                "default": false,
                "ui": {
                    "label": 'KTWs der SEG hinzufügen',
                    "type": "checkbox",
                    "parent": SETTINGS + "_ktw_toggle",
                }
            },
        }
    };

    lssm.managedSettings.register(managedSettings);

    if (!location.pathname.match(/\/missions\/\d+/)) return;

    $('#mission-form').find('li[role="presentation"]').click(function () {
        $('#mission-form').find('.custom-tab').removeClass('show');
    });

    $('.missing_vehicles_load').click(function () {
        $(document).ajaxComplete(function () {
            let existCondition = setInterval(function () {
                if (!$('.missing_vehicles_load').is(":visible")) {
                    clearInterval(existCondition);
                    $(sections).each(function () {
                        updateVehicles(this);
                    });
                }
            }, 100); // check every 100ms

        });
    });

    let isKtwMode = $('#tabs').text().trim().startsWith('Rettung');

    let sections = [];
    if (getSetting('sekmek') && !isKtwMode) {
        let sekmekSection = {
            name: 'SEK/MEK',
            short: 'sond',
            vehicles: [79, 80, 81, 82]
        };
        sections.push(sekmekSection);
    }
    if (getSetting('icao') && !isKtwMode) {
        let icaoSection = {
            name: 'ICAO',
            short: 'icao',
            vehicles: [75, 76]
        };
        sections.push(icaoSection);
    }
    if (getSetting('wf') && !isKtwMode) {
        let icaoSection = {
            name: 'WF',
            short: 'wf',
            vehicles: [83, 84, 85, 86]
        };
        sections.push(icaoSection);
    }
    if (getSetting('nas') && !isKtwMode) {
        let naSection = {
            name: 'NA',
            short: 'na',
            vehicles: [31, 29, 74]
        };
        if (getSetting('lna')) {
            naSection.vehicles.push(55);
        }
        if (getSetting('orgl')) {
            naSection.vehicles.push(56);
        }
        if (getSetting('grtw')) {
            naSection.vehicles.push(73);
        }
        sections.push(naSection);
    }
    if (getSetting('seg') && !isKtwMode) {
        let segSection = {
            name: 'SEG',
            short: 'seg',
            vehicles: [58, 59, 60]
        };
        if (getSetting('rsh1')) {
            segSection.vehicles.push(91);
        }
        sections.push(segSection);
    }
    if (getSetting('rhs') && !isKtwMode) {
        let rhsSection = {
            name: 'RHS',
            short: 'rhs',
            vehicles: [91]
        };
        sections.push(rhsSection);
    }
    if (getSetting('heli') && !isKtwMode) {
        let heliSection = {
            name: 'Helikopter',
            short: 'heli',
            vehicles: [61, 31]
        };
        sections.push(heliSection);
    }

    // Yes, I know... Excluding the tab in KTW mode does not really make sense.
    // Since the procedure seams to be slidely different here it did not work.
    // ToDo: Get this with KTW alerts to work.
    if (getSetting('ktw') && !isKtwMode) {
        let ktwSection = {
            name: 'KTW',
            short: 'ktw',
            vehicles: [38]
        };
        if (getSetting('segktw')) {
            ktwSection.vehicles.push(58);
        }
        sections.push(ktwSection);
    }

    $(sections).each(function () {
        updateVehicles(this);
        setContent(this);
    });

    function updateVehicles(section) {
        $(section.vehicles).each(function () {
            let vehicle = this;
            $('td[vehicle_type_id="' + vehicle + '"]').closest('tr').each(function () {
                let row = this;
                $.each(row.attributes, function (i, attrib) {
                    let name = attrib.name;
                    if (name !== undefined && name.indexOf('vehicle_table_') >= 0) {
                        $(row).removeAttr(name);
                    }
                });
                $(row).attr('vehicle_table_' + section.short, '1');
            });
        });
    }

    function setContent(section) {
        let tabContentMarkup = '<div role="tabpanel" class="custom-tab tab-pane" id="' + section.short + '">';
        tabContentMarkup += '<table id="vehicle_show_table_' + section.short + '" class="table table-striped">';
        tabContentMarkup += '<thead><tr><th style="width:20px;"></th>';
        tabContentMarkup += '<th style="width:20px;"></th><th>Fahrzeug</th><th>Entfernung</th>';
        tabContentMarkup += '<th class="hidden-xs">Wache</th></tr></thead>';
        tabContentMarkup += '<tbody id="vehicle_show_table_body_' + section.short + '"></tbody>';
        tabContentMarkup += '</table></div>';
        $('#mission-form').find('.tab-content').append(tabContentMarkup);

        let customTab = $('<li>').html('<a href="#' + section.short + '" tabload="' + section.short + '">' + section.name + '</a>').attr('role',
            'presentation');

        customTab.click(function () {
            let missionFormTabPane = $('#mission-form').find('.tab-pane');
            missionFormTabPane.removeClass('active');
            missionFormTabPane.removeClass('show');
            $(this).tab('show');
            $('#' + section.short).addClass('show');
            let tabload = $(this).find('a').attr("tabload");
            searchClear("all");

            let tablesorter_id = "";
            if (tabload === section.short) {
                $(".vehicle_select_table_tr[vehicle_table_" + section.short + "=1][js_table_add_done!=1]").clone().appendTo("#vehicle_show_table_" +
                    section.short);
                $(".vehicle_select_table_tr[vehicle_table_" + section.short + "=1][js_table_add_done!=1]").attr("js_table_add_done", "1");
                tablesorter_id = "vehicle_show_table_" + section.short;
            }

            if (tablesorter_id !== "") {
                $("#" + tablesorter_id).tablesorter({
                    sortList: [
                        [3, 0]
                    ],
                    headers: {
                        3: {
                            sorter: 'mission_time'
                        },
                        0: {
                            sorter: false
                        },
                        1: {
                            sorter: false
                        }
                    }
                });
            }
        });
        customTab.insertBefore($('#tabs li:nth-last-child(1)'));
    }

    function getSetting(setting) {
        return lssm.managedSettings.getSetting(SETTINGS, setting);
    }

})(I18n, jQuery);
