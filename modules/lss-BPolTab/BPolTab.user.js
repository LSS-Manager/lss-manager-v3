(function (I18n, $) {
    'use strict';
    if (!location.pathname.match(/\/missions\/\d+/)) return;
    $('#mission-form').find('li[role="presentation"]').click(function () {
        $('#mission-form').find('.custom-tab').removeClass('show');
    });

    $('.missing_vehicles_load').click(function () {
        $(document).ajaxComplete(function () {
            var existCondition = setInterval(function () {
                if ($('.missing_vehicles_load').length === 0) {
                    clearInterval(existCondition);
                    $(sections).each(function () {
                        updateVehicles(this);
                    });
                }
            }, 100); // check every 100ms

        });
    });

    var sections = [{
        name: 'BPol',
        short: 'bpol',
        vehicles: [50, 51, 52, 35, 72]
    }, {
        name: 'NA',
        short: 'na',
        vehicles: [31, 29]
    }];

    $(sections).each(function () {
        updateVehicles(this);
        setContent(this);
    });

    function updateVehicles(section) {
        $(section.vehicles).each(function () {
            var vehicle = this;
            $('td[vehicle_type_id="' + vehicle + '"]').closest('tr').each(function () {
                var row = this;
                $.each(row.attributes, function (i, attrib) {
                    var name = attrib.name;
                    if (name !== undefined && name.indexOf('vehicle_table_') >= 0) {
                        $(row).removeAttr(name);
                    }
                });
                $(row).attr('vehicle_table_' + section.short, '1');
            });
        });
    }

    function setContent(section) {
        var tabContentMarkup = '<div role="tabpanel" class="custom-tab tab-pane" id="' + section.short + '">';
        tabContentMarkup += '<table id="vehicle_show_table_' + section.short + '" class="table table-striped">';
        tabContentMarkup += '<thead><tr><th style="width:20px;"></th>';
        tabContentMarkup += '<th style="width:20px;"></th><th>Fahrzeug</th><th>Entfernung</th>';
        tabContentMarkup += '<th class="hidden-xs">Wache</th></tr></thead>';
        tabContentMarkup += '<tbody id="vehicle_show_table_body_' + section.short + '"></tbody>';
        tabContentMarkup += '</table></div>';
        $('#mission-form').find('.tab-content').append(tabContentMarkup);

        var customTab = $('<li>').html('<a href="#' + section.short + '" tabload="' + section.short + '">' + section.name + '</a>').attr('role',
            'presentation');

        customTab.click(function () {
            $('#mission-form').find('.tab-pane').removeClass('active');
            $('#mission-form').find('.tab-pane').removeClass('show');
            $(this).tab('show');
            $('#' + section.short).addClass('show');
            var tabload = $(this).find('a').attr("tabload");
            searchClear("all");

            var tablesorter_id = "";

            if (tabload == section.short) {
                $(".vehicle_select_table_tr[vehicle_table_" + section.short + "=1][js_table_add_done!=1]").clone().appendTo("#vehicle_show_table_" + section.short);
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

})(I18n, jQuery);
