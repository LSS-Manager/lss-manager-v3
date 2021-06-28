(function (I18n, $) {
    'use strict';

    let LSS_RADIOCALL_STORAGE = 'LSS_RADIOCALL_STORAGE';

    I18n.translations.de_DE.lssm.doctorradiocall = {
        nef2: 'NEF',
        rth: 'RTH',
        trag: 'Tragehilfe',
        settings: {
            nef1: 'NEF Nachforderung',
            rth1: 'RTH Nachforderung',
            trag1: 'Tragehilfe Nachforderung',
        },
    };
    I18n.translations.en_US.lssm.doctorradiocall = {
        nef: 'HEMS',
    };
    I18n.translations.nl_NL.lssm.doctorradiocall = {
        nef: 'MMT-Auto',
    };

    const managedSettings = {
        id: LSS_RADIOCALL_STORAGE,
        title: 'Nachforderungen',

        settings: {},
    };
    if (I18n.locale === 'de_DE') {
        managedSettings.settings.nef1 = {
            default: true,
            ui: {
                label: I18n.t('lssm.doctorradiocall.settings.nef1'),
                type: 'toggle',
                description:
                    'Wenn aktiviert, wird ein Sprechwunsch im Funk angezeigt',
            },
        };
        managedSettings.settings.rth1 = {
            default: false,
            ui: {
                label: I18n.t('lssm.doctorradiocall.settings.rth1'),
                type: 'toggle',
                description:
                    'Wenn aktiviert, wird ein Sprechwunsch im Funk angezeigt',
            },
        };
        managedSettings.settings.trag1 = {
            default: false,
            ui: {
                label: I18n.t('lssm.doctorradiocall.settings.trag1'),
                type: 'toggle',
                description:
                    'Wenn aktiviert, wird ein Sprechwunsch im Funk angezeigt',
            },
        };
        lssm.managedSettings.register(managedSettings);
    }
    function getSetting(setting) {
        return lssm.managedSettings.getSetting(LSS_RADIOCALL_STORAGE, setting);
    }
    // Hook into LSS function call
    $(document).bind(
        lssm.hook.postname('patientMarkerAdd'),
        function (event, payload) {
            handleFeedback(payload);
        }
    );

    function handleFeedback(t) {
        // Does the message contain a NEF demand?
        let isMissingNef =
            t.missing_text != null &&
            t.missing_text.indexOf(I18n.t('lssm.doctorradiocall.nef')) >= 0;
        let isMissingNef1, isMissingRth, isMissingTrag;
        if (I18n.locale == 'de_DE') {
            isMissingNef1 =
                t.missing_text != null &&
                t.missing_text.indexOf(I18n.t('lssm.doctorradiocall.nef2')) >=
                    0 &&
                getSetting('nef1');
            isMissingRth =
                t.missing_text != null &&
                t.missing_text.indexOf(I18n.t('lssm.doctorradiocall.rth')) >=
                    0 &&
                getSetting('rth1');
            isMissingTrag =
                t.missing_text != null &&
                t.missing_text.indexOf(I18n.t('lssm.doctorradiocall.trag')) >=
                    0 &&
                getSetting('trag1');
        }
        // Issue radio message either when it's an own mission or alliance radio is on
        let showMessage =
            $('#alliance_radio_on').is(':visible') ||
            $('#mission_list > div[mission_id=' + t.mission_id + ']').length >
                0;
        if (
            (isMissingNef || isMissingNef1 || isMissingRth || isMissingTrag) &&
            showMessage
        ) {
            radioMessage({
                mission_id: t.mission_id,
                additionalText: '',
                user_id: user_id,
                type: 'vehicle_fms',
                id: '',
                fms_real: 5,
                fms: 5,
                fms_text: t.missing_text,
                caption: '',
            });

            // Due we do not get a calling vehicle_id we have to remove the
            // corresponding button manually.
            let el = $('#radio_messages_important').find(
                'a[href="/vehicles/"]'
            );
            el.parent()
                .find('a')
                .click(function () {
                    $(this).parent().hide();
                });
            el.remove();
        }
    }
})(I18n, jQuery);
