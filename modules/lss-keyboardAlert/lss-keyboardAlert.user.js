(function () {
    $(document).keydown(function (e) {
        if (!($("input").is(":focus"))) {
            switch (e.keyCode) {
                case 68:
                    $("#mission_next_mission_btn")[0].click();
                    break;
                case 65:
                    $("#mission_previous_mission_btn")[0].click();
                    break;
                case 81:
                    $('a:contains("Sprechwunsch bearbeiten")')[0].click();
                    break;
                case 49:
                    $('a[id^="btn_approach_"]')[0].click();
                    break;
                case 50:
                    $('a[id^="btn_approach_"]')[1].click();
                    break;
                case 51:
                    $('a[id^="btn_approach_"]')[2].click();
                    break;
                case 52:
                    $('a[id^="btn_approach_"]')[3].click();
                    break;
                case 53:
                    $('a[id^="btn_approach_"]')[4].click();
                    break;
                case 80:
                    $("#sonderrechte_switch").click();
                    break;
                case 82:
                    $("#btn_back_to_mission").click();
                    break;
                case 88:
                    $("#mission_alarm_btn").click();
                    break;
                case 89:
                    $("#mission_list").find("a[href^='/missions/']:eq(0)").click();
                    break;
                case 70:
                    tellParent($('#lssm_searchEntryToggle').click());
                    break;
                case 97: // Select first Vehicle: numpad 1
                    $(".vehicle_checkbox")[0].click();
                    break;
                case 98: // Select second Vehicle: numpad 2
                    $(".vehicle_checkbox")[1].click();
                    break;
                case 99: // Select third Vehicle: numpad 3
                    $(".vehicle_checkbox")[2].click();
                    break;
                case 100: // Select fourth Vehicle: numpad 4
                    $(".vehicle_checkbox")[0].click();
                    break;
                case 101: // Select fifth Vehicle: numpad 5
                    $(".vehicle_checkbox")[1].click();
                    break;
                case 107: //Plus-Symbol Num-Block
                    tellParent($('.missing_vehicles_load')[0].click());
                    break;
                case 187: //Plus-Symbol
                    tellParent($('.missing_vehicles_load')[0].click());
                    break;
            }
            return e.returnValue;
        }
    });
})();
