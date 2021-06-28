## Einsatzhelfer neu schreiben:

-   [ ] replace w/ LSS `t.mission_text`
-   [ ] work in _missionHelper.user.js_

`t.mission_text` == `<div class="alert alert danger">MISSING VEHICLES</div>`

### Funktion aus LSS:

```
  n && $("#mission_" + t.id).hide(), t.alliance_id && $("#mission_panel_" + t.id).addClass("panel-success"), t.missing_text ? ($("#mission_missing_" + t.id).html(t.missing_text), $("#mission_missing_" + t.id).attr("class", "alert alert-danger")) : ($("#mission_missing_" + t.id).html(""), $("#mission_missing_" + t.id).attr("class", "")), t.date_end > 0 && missionTimerStart(t), missionSelectionUpdateButtons(), t.live_current_value <= 0 && missionFinish(t)
```
