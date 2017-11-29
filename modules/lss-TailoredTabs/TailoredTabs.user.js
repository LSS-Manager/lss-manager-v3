(function (I18n, $) {
    'use strict';
    const SETTINGS = "LSS_TAILORED_TABS_STORAGE";

    const managedSettings = {
        "id": SETTINGS,
        "title": 'Tailored Tabs',
        "settings": {
            "bpol": {
                "default": false,
                "ui": {
                    "label": 'Bereitschaftspolizei',
                    "type": "toggle",
                    "description": 'Bereitschaftspolizei in eigenem Tab'
                }
            },
            "polhub": {
                "default": false,
                "ui": {
                    "label": 'Polizeihubschrauber hinzufügen',
                    "type": "checkbox",
                    "parent": SETTINGS + "_bpol_toggle",
                }
            },
            "nas": {
                "default": false,
                "ui": {
                    "label": 'Notärzte',
                    "type": "toggle",
                    "description": 'NEF/NAWs und RTHs in eigenem Tab'
                }
            },
            "lna": {
                "default": true,
                "ui": {
                    "label": 'LNA hinzufügen',
                    "type": "checkbox",
                    "parent": SETTINGS + "_nas_toggle",
                }
            },
            "orgl": {
                "default": true,
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
            "seg": {
                "default": false,
                "ui": {
                    "label": 'SEG',
                    "type": "toggle",
                    "description": 'SEG Einheiten in eigenem Tab'
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
                "default": true,
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
    if (getSetting('bpol') && !isKtwMode) {
        let bpolSection = {
            name: 'BPol',
            short: 'bpol',
            vehicles: [50, 51, 52, 35, 72]
        };
        if (getSetting('polhub')) {
            bpolSection.vehicles.push(61);
        }
        sections.push(bpolSection);
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
            vehicles: [59, 60]
        };
        sections.push(segSection);
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
