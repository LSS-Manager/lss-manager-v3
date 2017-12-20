/**
 * @author Fabian Hassels (https://github.com/eaglefsd)
 */
(function ($) {
    /**
     * Prüft, ob die Einsatzseite geöffnet ist oder nicht.
     * @return boolean true, wenn die aktuelle URL der Einsatzseite entspricht, false wenn nicht.
     */
    function pruefeObEinsatzseiteOffen() {
        return !!window.location.href.match(/https:\/\/www\.[a-z]+\.[a-z]+\/missions\/[0-9]+$/g);
    }

    /**
     * Erstellt das Element für den Zähler.
     */
    function erstelleZaehler() {
        $('.aao').each(function () {
            $(this).append('<div id="aaocounter" class="aao-counter">0</div>');
        });

        $('[vehicle_group_id]').each(function () {
            $(this).append('<div id="aaocounter" class="aao-counter">0</div>');
        });
    }

    /**
     * Setzt den AAO-Zaehler in dem angegebenen Element um eins nach oben.
     * @param element Das Element, in dem sich der AAO-Zaehler befindet.
     */
    function setzeAaoZaehlerHoch(element) {
        var aaoZaehler = parseInt($(element).find('.aaoZaehler').html());
        ++aaoZaehler;
        $(element).find('#aaocounter').html(aaocounter);
        $(element).find('#aaocounter').css('display', 'block');
    }

    // Startlogik
    if (pruefeObEinsatzseiteOffen()) {
        erstelleZaehler();

        $('.aao').bind('click', function () {
            setzeAaoZaehlerHoch(this);
        });

        $('[vehicle_group_id]').bind('click', function () {
            setzeAaoZaehlerHoch(this);
        });
    }
})($);
