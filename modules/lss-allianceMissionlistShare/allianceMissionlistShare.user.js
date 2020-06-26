(function ($, win, I18n) {
    I18n.translations.de_DE['lssm']['allianceMissionlistShare'] = {
        title: "Im Verband freigeben"
    };
    I18n.translations.en_US['lssm']['allianceMissionlistShare'] = {
        title: "Release in alliance"
    };
    I18n.translations.pl_PL['lssm']['allianceMissionlistShare'] = {
        title: "Uwolnienie w sojuszu"
    };
    I18n.translations.sv_SE['lssm']['allianceMissionlistShare'] = {
        title: "Släpp i allians"
    };
    I18n.translations.da_DK['lssm']['allianceMissionlistShare'] = {
        title: "Slip i alliance"
    };
    I18n.translations.nb_NO['lssm']['allianceMissionlistShare'] = {
        title: "Slipp i allianse"
    };
    I18n.translations.es_ES['lssm']['allianceMissionlistShare'] = {
        title: "Lanzamiento en alianza"
    };
    I18n.translations.pt_PT['lssm']['allianceMissionlistShare'] = {
        title: "Lançamento da Aliança"
    };
    I18n.translations.cs_CZ['lssm']['allianceMissionlistShare'] = {
        title: "Vydání v alianci"
    };
    I18n.translations.it_IT['lssm']['allianceMissionlistShare'] = {
        title: "Rilascio in alleanza"
    };
    I18n.translations.tr_TR['lssm']['allianceMissionlistShare'] = {
        title: "İttifakta salıverme"
    };
    I18n.translations.fr_FR['lssm']['allianceMissionlistShare'] = {
        title: "Libération en alliance"
    };
    I18n.translations.ru_RU['lssm']['allianceMissionlistShare'] = {
        title: "Освобождение в альянсе"
    };
    I18n.translations.uk_UA['lssm']['allianceMissionlistShare'] = {
        title: "Відпустіть в союзі"
    };
    I18n.translations.ja_JP['lssm']['allianceMissionlistShare'] = {
        title: "提携リリース"
    };
    I18n.translations.ko_KR['lssm']['allianceMissionlistShare'] = {
        title: "동맹의 석방"
    };
    I18n.translations.ro_RO['lssm']['allianceMissionlistShare'] = {
        title: "Eliberarea în alianță"
    };
    I18n.translations.fi_FI['lssm']['allianceMissionlistShare'] = {
        title: "Vapauta liittoutumassa"
    };
    I18n.translations.nl_NL['lssm']['allianceMissionlistShare'] = {
        title: "In team vrijgeven"
    };

    // NOchmals checken kann aber denke ich raus
    /*var buffermPa_sm = mission_participation_add;

    mission_participation_add = function (e) {
        buffermPa_sm(e);
        shareMissions(e);
    };*/
    $(document).bind(lssm.hook.postname("missionMarkerAdd"), function (event, e) {
        shareMissions(e.id);
    });

    function shareMissions(id) {
        if (typeof win.alliance_id === "undefined" || win.alliance_id === 0)
            return;
        if ($('#allianceShareButton_' + id).length === 0) {
            if (!$('#mission_panel_' + id).hasClass('panel-success')) {
                create($('#mission_panel_heading_' + id), id, '');
            } else {
                create($('#mission_panel_heading_' + id), id, ' btn__disabled');
            }
        } else {
            $('#mission_panel_' + id).hasClass('panel-success') && $('#allianceShareButton_' + id + ' .allianceShareButton').addClass('btn__disabled');
        }
    }

    function create(h, id, allianceShareButtonDisabled) {
        let div = $('<div class="pull-right" id="allianceShareButton_' + id + '"></div>');
        let $button = $('<a  href="#" class="btn btn-success btn-xs allianceShareButton pull-right' + allianceShareButtonDisabled + '" data-header="' + id + '" title="' + I18n.t('lssm.allianceMissionlistShare.title') + '"><i class="glyphicon glyphicon-share-alt"></i></a>');
        div.prepend($button);
        h.prepend(div);
    }
    $('div.missionSideBarEntry:not(:hidden)').each(function () {
        shareMissions($(this).attr('mission_id'));
    });
    $('#missions-panel-body').on('click', '.allianceShareButton', function (e) {
        e.preventDefault();
        $.ajax({
            url: '/missions/' + $(this).attr('data-header') + '/alliance',
            headers: {
                'X-LSS-Manager': lssm.headerVersion()
            },
        });
        $(this).addClass('btn__disabled');
    });
})($, window, I18n);
