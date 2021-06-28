(function () {
    $(document).keydown(function (e) {
        if (!$('input').is(':focus')) {
            let destinations = $(
                '.col-md-9 a.btn-success[href*="/gefangener/"]:visible, .col-md-9 table a.btn-success[href*="/patient/"]:visible'
            );
            let vehicle_checkboxes = $('.vehicle_checkbox');
            switch (e.keyCode) {
                case 49: //drive to hospital/cells 1: 1
                    destinations[0].click();
                    break;
                case 50: //drive to hospital/cells 2: 2
                    destinations[1].click();
                    break;
                case 51: //drive to hospital/cells 3: 3
                    destinations[2].click();
                    break;
                case 52: //drive to hospital/cells 4: 4
                    destinations[3].click();
                    break;
                case 53: //drive to hospital/cells 5: 5
                    destinations[4].click();
                    break;
                case 80: //special privileges: P
                    $('#sonderrechte_switch').click();
                    break;
                case 82: //Back to Mission : R
                    $('#btn_back_to_mission').click();
                    break;
                case 89: //Back to Missionlist: Y
                    $('#mission_list')
                        .find("a[href^='/missions/']:eq(0)")
                        .click();
                    break;
                case 70: //Search field disable: F
                    tellParent($('#lssm_searchEntryToggle').click());
                    break;
                case 97: // Select first Vehicle: numpad 1
                    vehicle_checkboxes[0].click();
                    break;
                case 98: // Select second Vehicle: numpad 2
                    vehicle_checkboxes[1].click();
                    break;
                case 99: // Select third Vehicle: numpad 3
                    vehicle_checkboxes[2].click();
                    break;
                case 100: // Select fourth Vehicle: numpad 4
                    vehicle_checkboxes[3].click();
                    break;
                case 101: // Select fifth Vehicle: numpad 5
                    vehicle_checkboxes[4].click();
                    break;
                case 107: //Plus-Symbol Num-Block
                case 187: //Plus-Symbol
                    tellParent($('.missing_vehicles_load')[0].click());
                    break;
            }
            return e.returnValue;
        }
    });
})();
