(function($) {
    /*
     * id: id des umschließendesn Divs
     * targt: hier wird das umschließende Div an erster stelle eingehängt
     * draggable: true draggable möglich, false draggable nicht möglich
     */
    function clock(id, target,draggable) {
      /*
      	* Clock Objekt erstellt ein div mit hour,minute,second und aktualisiert dies sekündlich
        * Parameter:
        * id: id welches das Clock Div erhalten soll
        * target: Zielnode, hier wird die Uhr als erstes Element eingehängt
        * Returns:
        * start: startet die Uhr erneut und beldet diese ein
        * stop: beendet die Uhr und blendet diese aus
      */

        var hour = $('<span class="hour"></span>'),
            minute = $('<span class="minute"></span>'),
            second = $('<span class="second"></span>'),
            active = true,
            clockDiv = $('<div id="' + id + '"></div>').css(lssm.settings.get("ClockPosition_"+id, {"top":0,"left":0})),
            interval;

        function padding(n) {
            return (n < 10 ? '0' : '') + n;
        }

        function setClock() {
            var d = new Date();
            if (d.getSeconds() == 0 && active)
                if(!draggable)
                $("#lss_clock").effect("bounce");
            hour.html(padding(d.getHours()));
            minute.html(padding(d.getMinutes()));
            second.html(padding(d.getSeconds()));
        }

        function start() {
            active = true;
            setClock();
            clockDiv.show();
            interval = setInterval(setClock, 1000);
        }

        function stop() {
            active = false;
            clearInterval(interval);
            clockDiv.hide();
        }
        clockDiv.append(hour, minute, second);
        if(draggable){
        clockDiv.draggable({containment: "#map",
                scroll: false,
                start: function () {
                    map.dragging.disable();
                },
                stop: function (e, i) {
                    map.dragging.enable();
                    lssm.settings.set("ClockPosition_"+id, i.position);
                }})
        }
        target.prepend(clockDiv);
      	start();

        return {
            start: start,
            stop: stop
        }

    }
  new clock('lss_clock',$('#map'),true);
})($);
