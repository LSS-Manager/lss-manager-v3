(function (I18n, $) {
    'use strict';

    I18n.translations.de_DE.lssm.carriercall = {
        trag: 'Tragehilfe',
    };

    // Hook into LSS function call
    $(document).bind(
        lssm.hook.postname('patientMarkerAdd'),
        function (event, payload) {
            handleFeedback(payload);
        }
    );

    function handleFeedback(t) {
        // Does the message contain a NEF demand?
        let isMissingTrag =
            t.missing_text != null &&
            t.missing_text.indexOf(I18n.t('lssm.carriercall.trag')) >= 0;
        // Issue radio message either when it's an own mission or alliance radio is on
        let showMessage =
            $('#alliance_radio_on').is(':visible') ||
            $('#mission_list > div[mission_id=' + t.mission_id + ']').length >
                0;
        if (isMissingTrag && showMessage) {
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
