/**
 * @author Fabian Hassels (https://github.com/eaglefsd)
 */
(function ($, I18n) {

    I18n.translations.de_DE['lssm']['aaozaehler'] = {
        reset: "Reset AAO-Zähler"
    };
    I18n.translations.en_US['lssm']['aaozaehler'] = {
        reset: "Reset AAO counter"
    };
    I18n.translations.cs_CZ['lssm']['aaozaehler'] = {
        reset: "Resetujte čítač AAO"
    };
    I18n.translations.pl_PL['lssm']['aaozaehler'] = {
        reset: "Zresetuj licznik AAO"
    };
    I18n.translations.sv_SE['lssm']['aaozaehler'] = {
        reset: "Återställ AAO-räknaren"
    };
    I18n.translations.da_DK['lssm']['aaozaehler'] = {
        reset: "Nulstil AAO-tæller"
    };
    I18n.translations.nb_NO['lssm']['aaozaehler'] = {
        reset: "Tilbakestill AAO-telleren"
    };
    I18n.translations.it_IT['lssm']['aaozaehler'] = {
        reset: "Ripristina contatore AAO"
    };
    I18n.translations.tr_TR['lssm']['aaozaehler'] = {
        reset: "AAO sayacını sıfırla"
    };
    I18n.translations.fr_FR['lssm']['aaozaehler'] = {
        reset: "Réinitialiser le compteur AAO"
    };
    I18n.translations.ru_RU['lssm']['aaozaehler'] = {
        reset: "Сброс счетчика AAO"
    };
    I18n.translations.uk_UA['lssm']['aaozaehler'] = {
        reset: "Скинути лічильник AAO"
    };
    I18n.translations.es_ES['lssm']['aaozaehler'] = {
        reset: "Restablecer contador AAO"
    };
    I18n.translations.pt_PT['lssm']['aaozaehler'] = {
        reset: "Redefinir contador AAO"
    };
    I18n.translations.ja_JP['lssm']['aaozaehler'] = {
        reset: "AAOカウンターをリセット"
    };
    I18n.translations.ko_KR['lssm']['aaozaehler'] = {
        reset: "AAO 카운터 재설정"
    };
    I18n.translations.ro_RO['lssm']['aaozaehler'] = {
        reset: "Resetați contorul AAO"
    };
    I18n.translations.fi_FI['lssm']['aaozaehler'] = {
        reset: "Nollaa AAO-laskuri"
    };
    I18n.translations.nl_NL['lssm']['aaozaehler'] = { //AUR
        reset: "AUR-teller resetten"
    };
    /**
     * Prüft, ob die Einsatzseite geöffnet ist oder nicht.
     * @return boolean true, wenn die aktuelle URL der Einsatzseite entspricht, false wenn nicht.
     */
    if(!window.location.href.match(/missions\/\d+$/)) return;

    /**
     * Erstellt das Element für den Zähler.
     */
    function erstelleZaehler() {
        $('.aao').each(function () {
            $(this).find('span:not(.glyphicon):first').after(' <span class="aaoZaehler">0</span>x');
        });

        $('[vehicle_group_id]').each(function () {
            $(this).find('div').after(' <span class="aaoZaehler">0</span>x');
        });

        // Zähler-Reset Button
        $('#mission-aao-group').after('<button id="resetAAOZaehler" class="btn  btn-default btn-xs" type="button">' + I18n.t('lssm.aaozaehler.reset') +'</button>');
        // Zähler-Reset Funktion
        $('#resetAAOZaehler').click(function(){$('.aaoZaehler').replaceWith(' <span class="aaoZaehler">0</span>');});
    }

    /**
     * Setzt den AAO-Zaehler in dem angegebenen Element um eins nach oben.
     * @param element Das Element, in dem sich der AAO-Zaehler befindet.
     */
    function setzeAaoZaehlerHoch(element) {
        let aaoZaehler = parseInt($(element).find('.aaoZaehler').html());
        ++aaoZaehler;
        $(element).find('.aaoZaehler').html(aaoZaehler);
    }

    // Startlogik
    erstelleZaehler();

    $('.aao').bind('click', function () {
        setzeAaoZaehlerHoch(this);
    });

    $('[vehicle_group_id]').bind('click', function () {
        setzeAaoZaehlerHoch(this);
    });
})($, I18n);
