(function($) {
    function clock(id, target) {
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
            clockDiv = $('<div id="' + id + '"></div>'),
            interval;

        function padding(n) {
            return (n < 10 ? '0' : '') + n;
        }

        function setClock() {
            var d = new Date();
            if (d.getSeconds() == 0 && active)
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
        target.prepend(clockDiv);
      	start();

        return {
            start: start,
            stop: stop
        }

    }
  var lssClock = new clock('lss_clock',$('#map'));
})($);
