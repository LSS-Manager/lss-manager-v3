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
            }
            return e.returnValue;
        }
    });
})();
