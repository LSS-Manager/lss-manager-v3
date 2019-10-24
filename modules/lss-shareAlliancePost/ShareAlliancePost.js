(function (I18n, $) {

    let LSS_SHAREALLIANCEPOST_STORAGE = "LSS_SHAREALLIANCEPOST_STORAGE";

    I18n.translations.de.lssm.sharealliancepost = {
        share: 'Teilen...',
        chat: 'Chatten...',
        alert: 'Alarmieren...',
        reqVehIdent: 'Zusätzlich benötigte Fahrzeuge:',
        reqVeh: 'Keine weiteren Fahrzeuge benötigt.',
        settings: {
            title: 'Alarmieren, Teilen & Posten',
            jumpNext: 'Nach Alarmierung zum nächsten Einsatz springen',
            enableKeyboard: 'Alarmierung mit Tastatur aktivieren',
            defaultPostToChat: 'Post in Chat als Standard festlegen',
            shortcutKeys: 'Kommagetrennte Tasten für Tastatur Alarmierung. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages: 'Nachrichten Vorlagen. Platzhalter: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li></ul>',
            timeOffset: 'Offset für %TIME_OFFSET%-Formatter in Stunden'
        }
    };

    I18n.translations.en.lssm.sharealliancepost = {
        share: 'Share...',
        chat: 'Chat...',
        alert: 'Alert...',
        reqVehIdent: 'Needed vehicles:',
        reqVeh: 'No other vehicles required.',
        settings: {
            title: 'Alert, Share & Post',
            jumpNext: 'Jump to next mission after alerting',
            enableKeyboard: 'Enable Keyboard shortcuts',
            defaultPostToChat: 'Post to chat is default',
            shortcutKeys: 'Comma separated list of keys for alerting. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages: 'Message templates. Placeholders: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li></ul>',
            timeOffset: 'Offset for %TIME_OFFSET%-formatter in hours'
        }
    };

    I18n.translations.nl.lssm.sharealliancepost = {
        share: 'aandeel...',
        chat: 'Chat...',
        alert: 'Alarm...',
        reqVehIdent: 'Benodigde voertuigen:',
        reqVeh: 'Geen andere voertuigen nodig.',
        settings: {
            title: 'Waarschuwing, delen & posten',
            jumpNext: 'Spring naar de volgende missie na het alarmeren',
            enableKeyboard: 'Sneltoetsen op het toetsenbord inschakelen',
            defaultPostToChat: 'Post om te chatten is standaard',
            shortcutKeys: 'Kommagescheiden lijst van sleutels om te waarschuwen. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages: 'Boodschapssjablonen. Plaatshouders: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li></ul>',
            timeOffset: 'Compensatie voor %TIME_OFFSET%-formaat in uren'
        }
    };

    I18n.translations.es.lssm.sharealliancepost = {
        share: 'Compartir...',
        chat: 'Chat...',
        alert: 'Alerta...',
        reqVehIdent: 'Vehículos necesarios:',
        reqVeh: 'No se requieren otros vehículos.',
        settings: {
            title: 'Alerta, Compartir y Publicar',
            jumpNext: 'Saltar a la siguiente misión después de alertar',
            enableKeyboard: 'Habilitar accesos directos de teclado',
            defaultPostToChat: 'Publicar en el chat es predeterminado',
            shortcutKeys: 'Lista de teclas separadas por comas para alertas. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages: 'Plantillas de mensajes. Marcadores de posición: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li></ul>',
            timeOffset: 'Offset para %TIME_OFFSET%-formatter en horas'
        }
    };

    const managedSettings = {
        id: LSS_SHAREALLIANCEPOST_STORAGE,
        title: I18n.t('lssm.sharealliancepost.settings.title'),
        settings: {
            jumpNext: {
                default: false,
                ui: {
                    label: I18n.t('lssm.sharealliancepost.settings.jumpNext'),
                    type: 'checkbox'
                }
            },
            enableKeyboard: {
                default: false,
                ui: {
                    label: I18n.t('lssm.sharealliancepost.settings.enableKeyboard'),
                    type: 'checkbox'
                }
            },
            defaultPostToChat: {
                default: false,
                ui: {
                    label: I18n.t('lssm.sharealliancepost.settings.defaultPostToChat'),
                    type: 'checkbox'
                }
            },
            shortcutKeys: {
                default: '17, 89',
                ui: {
                    label: I18n.t('lssm.sharealliancepost.settings.shortcutKeys'),
                    type: 'text'
                }
            },
            timeOffset: {
                default: 2,
                ui: {
                    label: I18n.t('lssm.sharealliancepost.settings.timeOffset'),
                    type: 'int'
                }
            },
            messages: {
                default: ['Frei zum Mitverdienen', // First entry is default
                    'Rettungsdienst für %PATIENTS_LEFT% Patienten benötigt',
                    'Weitere Kräfte benötigt',
                    'Unterstützung in %ADDRESS% benötigt',
                    'Offen bis %TIME_OFFSET%.',
                    '%REQUIRED_VEHICLES%'],
                ui: {
                    label: I18n.t('lssm.sharealliancepost.settings.messages'),
                    type: 'flexList',
                    allowSizeChange: true
                }
            }
        }
    };

    lssm.managedSettings.register(managedSettings);
    function getSetting(setting) {
        return lssm.managedSettings.getSetting(LSS_SHAREALLIANCEPOST_STORAGE, setting);
    }

    if (!location.pathname.match(/\/missions\/\d+/)) return;

    // Create Button and add event listener
    const initButtons = () => {
        let btnMarkup = '<div class="btn-group" style="margin-left: 5px; margin-right: 5px;">';

        btnMarkup += '<a href="#" class="btn btn-success btn-sm alert_notify_alliance" title="Alarmieren, im Verband freigeben und Nachricht in Verbands-Chat">';
        btnMarkup += '<img class="icon icons8-Phone-Filled" src="/images/icons8-phone_filled.svg" width="18" height="18">';
        btnMarkup += '<img class="icon icons8-Share" src="/images/icons8-share.svg" width="20" height="20">';
        btnMarkup += '<span class="glyphicon glyphicon-bullhorn" style="font-size: 13px;"></span>';
        btnMarkup += '</a></div>';

        let optionsBtnMarkup = '<a href="#" id="openAllianceShareOptions" class="btn btn-sm btn-default" title="Einstellungen" style="margin: 0">';
        optionsBtnMarkup += '<span class="glyphicon glyphicon-option-horizontal"></span></a>';

        optionsBtnMarkup += '<div class="btn btn-sm btn-default" style="margin:0; padding: 1px; display: none;" id="allianceShareOptions"><input type="text" id="allianceShareText" value="' + messages[0] + '">';
        optionsBtnMarkup += '<label style="margin-left: 2px; margin-right: 2px;"><input type="checkbox" ' + (getSetting('defaultPostToChat') ? 'checked' : '') + ' id="postToChat" name="postToChat" value="true">An VB Chat?</label>';

        optionsBtnMarkup += '<div style="text-align: left;"><ul>';
        $.each(messages, (index, msg) => {
            optionsBtnMarkup += '<li class="customAllianceShareText">' + msg + '</li>';
        });
        optionsBtnMarkup += '</ul></div>';
        optionsBtnMarkup += '</div>';

        $('.alert_next_alliance').parent().append(btnMarkup);

        $('.alert_notify_alliance').first().parent().prepend(optionsBtnMarkup);


        $('#openAllianceShareOptions').click(() => {
            $('#allianceShareOptions').show();
            $('#openAllianceShareOptions').hide();
        });


        $('.customAllianceShareText').click(function () {
            $('#allianceShareText').val($(this).text());
        });


        if (getSetting('jumpNext')) {
            $('.alert_notify_alliance').append('<span style="margin-left: 5px;" class="glyphicon glyphicon-arrow-right"></span>');
        }

        $('.alert_notify_alliance').click(processAllianceShare);

    };

    // Add Keylisteners
    const initKeys = () => {
        try {
            if (getSetting('enableKeyboard')) {
                let keys = [];
                const shortcutKeys = getSetting('shortcutKeys').replace(' ', '').split(',').map((key) => {
                    return parseInt(key);
                })

                $(document).keydown((e) => {
                    keys.push(e.which);
                    if (keys.length >= shortcutKeys.length) {
                        let pressedAll = true;
                        $.each(shortcutKeys, (index, value) => {
                            if (keys.indexOf(value) < 0) {
                                pressedAll = false;
                                return;
                            }
                        });
                        if (pressedAll) {
                            // Is there an extra key pressed?
                            if (keys.length > shortcutKeys.length) {
                                // Remove regular (expected pressed) keys from list
                                let extraKey = keys.filter((el) => !shortcutKeys.includes(el));
                                // As number 9 key has value 48, substract that to get an expected key (value) range from 1-9
                                extraKey = extraKey[extraKey.length - 1] - 48;
                                // If the extra button has the (value) number 1-9,
                                // and the message array as a corresponding number of messages, select it

                                if (extraKey > 0 && extraKey <= 10 && extraKey <= messages.length) {
                                    $('#allianceShareText').val(messages[extraKey - 1]);
                                }
                            }

                            processAllianceShare();

                        }
                    }
                });

                $(document).keyup((e) => {
                    keys.splice(keys.indexOf(e.which));
                });
            }
        } catch (e) {
            console.warn('Error initializing keys', e);
        }
    };

    const processAllianceShare = () => {

        $('#allianceShareOptions').hide();
        $('#openAllianceShareOptions').show();

        const sendToAlliance = $('#postToChat').is(':checked') ? 1 : 0;
        const missionShareLink = $('#mission_alliance_share_btn').attr('href');
        const missionId = missionShareLink.replace('/missions/', '').replace('/alliance', '');
        const csrfToken = $('meta[name="csrf-token"]').attr('content');
        const message = $('#allianceShareText').val();

        $('.alert_notify_alliance').html(I18n.t('lssm.sharealliancepost.share'));
        $.get('/missions/' + missionId + '/alliance', () => {
            $('.alert_notify_alliance').html(I18n.t('lssm.sharealliancepost.chat'));
            $.post("/mission_replies", { authenticity_token: csrfToken, mission_reply: { alliance_chat: sendToAlliance, content: message, mission_id: missionId } }, (data, status, xhr) => {
                $('.alert_notify_alliance').html(I18n.t('lssm.sharealliancepost.alert'));
                if (getSetting('jumpNext')) {
                    $('.alert_next').first().click();
                } else {
                    $('#mission_alarm_btn').click();
                }
            });
        });

    };

    const transformMessages = () => {
        try {
            // Prepare values for %ADDRESS% and %PATIENTS_LEFT%
            // Possible inputs 'xy street, 1234 city', '1234 city', '123 city | 2' (where 2 is number of patients)
            let addressAndPatrientRow = $('.mission_header_info >> small').first().text().trim().split(',');
            addressAndPatrientRow = addressAndPatrientRow[addressAndPatrientRow.length - 1].split('|');
            const address = addressAndPatrientRow[0];
            const patientsLeft = addressAndPatrientRow.length === 2 ? addressAndPatrientRow[1] : 0;

            // Prepare values for %MY_CUSTOM_TIME%
            const offsetInHours = getSetting('timeOffset');
            let customTime = new Date().getHours() + offsetInHours;
            customTime = customTime > 24 ? customTime - 24 : customTime;

            // Prepare required Vehicles
            const alertText = $('.alert-danger');
            const requiredVehiclesIdentifier = I18n.t('lssm.sharealliancepost.reqVehIdent');
            let requiredVehicles = I18n.t('lssm.sharealliancepost.reqVeh');
            if (alertText && alertText.text().indexOf(requiredVehiclesIdentifier) >= 0) {
                requiredVehicles = alertText.text().trim().substr(requiredVehiclesIdentifier.length, alertText.text().trim().length - 1);
            }

            messages = messages.map((message) => {
                message = message.replace('%ADDRESS%', address);
                message = message.replace('%TIME_OFFSET%', customTime + ':00 Uhr');
                message = message.replace('%PATIENTS_LEFT%', patientsLeft);
                message = message.replace('%REQUIRED_VEHICLES%', requiredVehicles);

                return message;
            });
        } catch (e) {
            console.log('Error transforming messages', e);
        }
    };

    let messages = Array.isArray(getSetting('messages')) ? getSetting('messages') : [];
    transformMessages();
    initButtons();
    initKeys();


})(I18n, jQuery);
