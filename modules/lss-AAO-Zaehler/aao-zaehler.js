/**
 * @author Fabian Hassels (https://github.com/eaglefsd)
 */
(function ($, I18n) {
    const SETTINGS = "LSS_AAO_ZAEHLER_STORAGE";
    I18n.translations.de_DE['lssm']['aaozaehler'] = {
        reset: "Reset AAO-Zähler",
        label1: 'Auf Klick umranden',
        description1: 'Umrandet eine AAO sobald sie einmal angeklickt wurde.'
    };
    I18n.translations.en_US['lssm']['aaozaehler'] = {
        reset: "Reset AAO counter",
        label1: 'Border on click',
        description1: 'Borders an AAO once it has been clicked once.'
    };
    I18n.translations.cs_CZ['lssm']['aaozaehler'] = {
        reset: "Resetujte čítač AAO",
        label1: 'Hranice po kliknutí',
        description1: 'Okraje AAO, jakmile na něj jednou kliknete.'
    };
    I18n.translations.pl_PL['lssm']['aaozaehler'] = {
        reset: "Zresetuj licznik AAO",
        label1: 'Granica na kliknięcie',
        description1: 'Graniczy z AAO po jednokrotnym kliknięciu.'
    };
    I18n.translations.sv_SE['lssm']['aaozaehler'] = {
        reset: "Återställ AAO-räknaren",
        label1: 'Gränsa vid klick',
        description1: 'Gränsar till en AAO när den har klickats en gång.'
    };
    I18n.translations.nb_NO['lssm']['aaozaehler'] = {
        reset: "Tilbakestill AAO-telleren",
        label1: 'Kant på klikk',
        description1: 'Grenser til en AAO når den har blitt klikket en gang.'
    };
    I18n.translations.it_IT['lssm']['aaozaehler'] = {
        reset: "Ripristina contatore AAO",
        label1: 'Confine su click',
        description1: 'Confina un AAO una volta che è stato cliccato una volta.'
    };
    I18n.translations.fr_FR['lssm']['aaozaehler'] = {
        reset: "Réinitialiser le compteur AAO",
        label1: 'Frontière sur clic',
        description1: "Il suffit de cliquer une fois sur un AAO pour l'ouvrir."
    };
    I18n.translations.pt_PT['lssm']['aaozaehler'] = {
        reset: "Redefinir contador AAO",
        label1: 'Fronteira em clique',
        description1: 'Faz fronteira com uma AAO depois de clicada uma vez.'
    };
    I18n.translations.ko_KR['lssm']['aaozaehler'] = {
        reset: "AAO 카운터 재설정",
        label1: '클릭시 테두리',
        description1: '한 번 클릭하면 AAO와 경계를 이룹니다.'
    };
    I18n.translations.ro_RO['lssm']['aaozaehler'] = {
        reset: "Resetați contorul AAO",
        label1: 'Faceți clic pe clic',
        description1: 'Încadrează un AAO odată ce a fost făcut clic pe o dată.'
    };
    I18n.translations.nl_NL['lssm']['aaozaehler'] = { //AUR
        reset: "AUR-teller resetten",
        label1: 'Omlijning van AUR',
        description1: 'Geeft een omlijning om de AUR als er op geklikt is.'
    };
    const managedSettings = {
        id: SETTINGS,
        title: I18n.t('lssm.apps.aaoZaehler.name'),
        settings: {
            border: {
                default: false,
                ui: {
                    label: I18n.t('lssm.aaozaehler.label1'),
                    type: "toggle",
                    description: I18n.t('lssm.aaozaehler.description1'),
                }
            },
        }
    };
    lssm.managedSettings.register(managedSettings);
    /**
     * Prüft, ob die Einsatzseite geöffnet ist oder nicht.
     * @return boolean true, wenn die aktuelle URL der Einsatzseite entspricht, false wenn nicht.
     */
    if(!window.location.href.match(/missions\/\d+$/)) return;

    

    const getSetting = (setting) => lssm.managedSettings.getSetting(SETTINGS, setting);

    /**
     * Erstellt das Element für den Zähler.
     */
    function erstelleZaehler() {
        $('.aao, .vehicle_group').each(function () {
            $(this).find('span:not(.glyphicon):first').after(' <span class="aaoZaehler">0</span>x');
        });

        // Zähler-Reset Button
        $('#mission-aao-group').after(`<button id="resetAAOZaehler" class="btn  btn-default btn-xs" type="button">${I18n.t('lssm.aaozaehler.reset')}</button>`);
        // Zähler-Reset Funktion
        $('#resetAAOZaehler').click(function(){
            $('.aaoZaehler').replaceWith(' <span class="aaoZaehler">0</span>');
            $('.aao, .vehicle_group').css('border', 'unset');
        });
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

    $('.aao, .vehicle_group').bind('click', function () {
        setzeAaoZaehlerHoch(this);
        getSetting('border') && $(this).css('border', '2px solid green');
    });
})($, I18n);
