(function () {
    $(document).keydown(function (e) {
        if (!($("input").is(":focus"))) {
            switch (e.keyCode) {
                case 68: //Next Mission: D
                    $("#mission_next_mission_btn")[0].click();
                    break;
                case 65: //Last Mission: A
                    $("#mission_previous_mission_btn")[0].click();
                    break;
                case 81: //Editing a call request : Q
                    $('a:contains("Sprechwunsch bearbeiten")')[0].click();
                    break;
                case 49: //drive to hospital 1: 1
                    $('a[id^="btn_approach_"]')[0].click();
                    break;
                case 50: //drive to hospital 2: 2
                    $('a[id^="btn_approach_"]')[1].click();
                    break;
                case 51: //drive to hospital 3: 3
                    $('a[id^="btn_approach_"]')[2].click();
                    break;
                case 52: //drive to hospital 4: 4
                    $('a[id^="btn_approach_"]')[3].click();
                    break;
                case 53: //drive to hospital 5:5
                    $('a[id^="btn_approach_"]')[4].click();
                    break;
                case 80: //special privileges: P
                    $("#sonderrechte_switch").click();
                    break;
                case 82: //Back to Mission : R
                    $("#btn_back_to_mission").click();
                    break;
                case 88: //Alarm units: X
                    $("#mission_alarm_btn").click();
                    break;
                case 89: //Back to Missionlist: Y
                    $("#mission_list").find("a[href^='/missions/']:eq(0)").click();
                    break;
                case 70: //Search field disable: F
                    tellParent($('#lssm_searchEntryToggle').click());
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
