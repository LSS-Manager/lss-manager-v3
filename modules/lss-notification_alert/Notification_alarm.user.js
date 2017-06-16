(function ($, I18n) {
    //var set = JSON.parse(localStorage.getItem('Notification')) || { // Outdated
    var set = lssm.settings.get('Notification', null) || {
        allianceChatNotifcation: true, // true = Chat-Notification sind standardmäßig aktiviert (Standard: true).
        allianceS5Notifcation: true, // true = Status 5-Notification sind standardmäßig aktiviert (Standard: true).
        allianceStatusNotifcation: true, // true = Alle anderen Status-Notification sind standardmäßig aktiviert (Standard: false).
        allianceChatPNotifcation: true, // true = Alle anderen Status-Notification sind standardmäßig aktiviert (Standard: false).
        timeout_Chat: 3, //Zeit in Sekunden wie lange Chat-Notifications angezeigt werden sollen (Standard: 3).
        timeout_S5: 3, //Zeit in Sekunden wie lange S5-Notifications angezeigt werden sollen (Standard: 3).
        timeout_Status: 3, //Zeit in Sekunden wie lange Status-Notifications angezeigt werden sollen (Standard: 3).
        timeout_ChatPopup: 3
    };

    I18n.translations.de['lssm']['n-alarm'] = {
        not_support: "Dieser Browser unterstützt leider keine HTML5-Notifications",
        init: "Notification-Alarm wird initalisiert, Bitte warten...",
        inithead: "Initalisierung",
        chat_message: "Chatnachricht von ",
        blend: "Ausblenden nach:",
        seconds: "Sekunden",
        settings: {
            title: "Einstellungen - Notification-Alarm",
            text_1: "Willkommen im Einstellungsbereich vom Notification-Alarm.",
            text_2: "Hier findest du alle einstellungen, um den N-A auf dich zu personalisieren. Die Einstellungen werden pro Browser gespeichert. Beduetet du kannst hier andere Einstellungen vornehmen als zb. auf deinem 2. Rechner.",
            chat_title: "Chatnachrichten",
            chat_text: "Chatnachrichten als Notification bekommen.",
            s5_title: "Status 5",
            save: "Speichern",
            close:"Schließen",
            s5_text: "Status 5 als Notification bekommen",
            status_title: "Status",
            status_text: "Alle Status-Meldungen als Notification bekommen.",
            chatp_title: "Chatnachrichten als Info-Popup",
            chatp_text: "Alle Chatnachrichten auch als Popup-Nachrichten am rechten Rand anzeigen(ehemals Chat-Notification)"
        }
    }

    I18n.translations.en['lssm']['n-alarm'] = {
        not_support: "Dieser Browser unterstützt leider keine HTML5-Notifications",
        init: "Notification-Alarm wird initalisiert, Bitte warten...",
        inithead: "Initalisierung",
        chat_message: "Chatnachricht von ",
        blend: "Ausblenden nach:",
        seconds: "Sekunden",
        settings: {
            title: "Einstellungen - Notification-Alarm",
            text_1: "Willkommen im Einstellungsbereich vom Notification-Alarm.",
            text_2: "Hier findest du alle einstellungen, um den N-A auf dich zu personalisieren. Die Einstellungen werden pro Browser gespeichert. Beduetet du kannst hier andere Einstellungen vornehmen als zb. auf deinem 2. Rechner.",
            chat_title: "Chatnachrichten",
            chat_text: "Chatnachrichten als Notification bekommen.",
            s5_title: "Status 5",
            save: "Save",
            close:"Close",
            s5_text: "Status 5 als Notification bekommen",
            status_title: "Status",
            status_text: "Alle Status-Meldungen als Notification bekommen.",
            chatp_title: "Chatnachrichten als Info-Popup",
            chatp_text: "Alle Chatnachrichten auch als Popup-Nachrichten am rechten Rand anzeigen(ehemals Chat-Notification)"
        }
    }

    I18n.translations.nl['lssm']['n-alarm'] = {
        not_support: "Dieser Browser unterstützt leider keine HTML5-Notifications",
        init: "Notification-Alarm wird initalisiert, Bitte warten...",
        inithead: "Initalisierung",
        chat_message: "Chatnachricht von ",
        blend: "Ausblenden nach:",
        seconds: "Sekunden",
        settings: {
            title: "Einstellungen - Notification-Alarm",
            text_1: "Willkommen im Einstellungsbereich vom Notification-Alarm.",
            text_2: "Hier findest du alle einstellungen, um den N-A auf dich zu personalisieren. Die Einstellungen werden pro Browser gespeichert. Beduetet du kannst hier andere Einstellungen vornehmen als zb. auf deinem 2. Rechner.",
            chat_title: "Chatnachrichten",
            chat_text: "Chatnachrichten als Notification bekommen.",
            s5_title: "Status 5",
            save: "Speichern",
            s5_text: "Status 5 als Notification bekommen",
            status_title: "Status",
            status_text: "Alle Status-Meldungen als Notification bekommen.",
            chatp_title: "Chatnachrichten als Info-Popup",
            chatp_text: "Alle Chatnachrichten auch als Popup-Nachrichten am rechten Rand anzeigen(ehemals Chat-Notification)"
        }
    }


    function notifyMe(username, message, type = "init", fms = "2", vid = "0") {

    if (!("Notification" in window)) {
        alert(I18n.t('lssm.n-alarm.not_support'));
    } else if (Notification.permission === "granted") {

        if (type == "init")
        {
            var notification = new Notification(username, {
                body: message,
                icon: "https://www.leitstellenspiel.de/images/logo-header.png"
            });
        } else if (type == "Chat")
        {
            var notification = new Notification(I18n.t('lssm.n-alarm.chat_message') + username, {
                body: message,
                icon: lssm.getlink("/modules/lss-notification_alert/img/134895.png")
            });
            setTimeout(function () {
                notification.close();
            }, set.timeout_Chat * 1000);
            notification.onclick = function () {
                window.focus();
            };
        } else if (type == "Status")
        {
            var notification = new Notification(username, {
                body: message,
                icon: lssm.getlink("/modules/lss-notification_alert/img/Status_" + fms + ".png"),
            });
            setTimeout(function () {
                notification.close();
            }, set.timeout_Status * 1000);
            notification.onclick = function () {

                $("body").append('<a href="/vehicles/' + vid + '" id="v_' + vid + '_' + fms + '" class="btn btn-xs btn-default lightbox-open">' + username + '</a>');
                $('#v_' + vid + '_' + fms + '').click();
                window.focus();
                $('#v_' + vid + '_' + fms + '').remove();
            };
        } else if (type == "S5")
        {
            var notification = new Notification(username, {
                body: message,
                icon: lssm.getlink("/modules/lss-notification_alert/img/Status_" + fms + ".png"),
            });
            setTimeout(function () {
                notification.close();
            }, set.timeout_S5 * 1000);
            notification.onclick = function () {

                $("body").append('<a href="/vehicles/' + vid + '" id="v_' + vid + '_' + fms + '" class="btn btn-xs btn-default lightbox-open">' + username + '</a>');
                $('#v_' + vid + '_' + fms + '').click();
                window.focus();
                $('#v_' + vid + '_' + fms + '').remove();
            };
        }

    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {

            if (permission === "granted") {
                var notification = new Notification("Benachrichtungen aktiviert!");
            } else {

            }
        });
    }


    }
    var $mainDiv = $('<div id="chatNote" class="panel panel-default"><div class="panel-heading">Chat</div></div>');
    $mainDiv.css({
        'position': 'fixed',
        'width': '250px',
        'z-index': '99999',
        'margin-left': '-255px',
        'top': '20%',
        'left': '100%',
        'display': 'none',
        'cursor': 'pointer'
    });
    $mainDiv.click(function () {
        $(this).hide('slow');
    });
    var $contentDiv = $('<div class="panel-body" style="background-color: white;"></div>');
    var $ul = $('<ul id="chatNoteUl"></ul>');
    $ul.css({
        'list-style': 'none',
        'margin-left': '0',
        'padding-left': ' 20px'
    });
    $ul.appendTo($contentDiv);
    $contentDiv.appendTo($mainDiv);
    $mainDiv.appendTo($('body'));
    var MainDivTimer;
    function hideMainDiv() {
        clearTimeout(MainDivTimer);
        MainDivTimer = setTimeout(function () {
            $mainDiv.hide('slow');
        }, set.timeout_ChatPopup * 1000);
    }
    function ChatPopup(date, user_id, username, mission_id, message)
    {
        var e = "<li><span class='mission_chat_message_username'>[" + date + "] <a href='/profile/" + user_id + "' class='lightbox-open'>" + username + ":</a></span>";
        mission_id && (e = e + "<a href='/missions/" + mission_id + "' class='lightbox-open'><span class='glyphicon glyphicon-bell'></span></a> ");
        e = e + " " + message + "</li>";
        $(e).appendTo($ul).delay(set.timeout_ChatPopup * 1000).hide('slow', function () {
            $(this).remove();
        });
        $mainDiv.show('slow');
        hideMainDiv();

    }
    function createSettings(){
        var settings_html = '<div id="'+lssm.config.prefix + '_appstore_NotificationSettings" style="display:none;"><div class="jumbotron" style="padding:5px;"><h1>' + I18n.t('lssm.n-alarm.settings.title') + '</h1><p>' + I18n.t('lssm.n-alarm.settings.text_1') + '</p><p>' + I18n.t('lssm.n-alarm.settings.text_2') + '</p><br><p></p><span class="pull-right"><small>MADE BY:</small>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/359760" target="_blank" class="username-link">@DLRG-Dominik</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=DLRG-Dominik" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/201213" target="_blank" class="username-link">@Mausmajor</a>&nbsp;';

        settings_html += '<a href="https://www.leitstellenspiel.de/messages/new?target=Mausmajor" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-danger">Version 2.0</span></span></div><nav class="navbar navbar-default navbar-static-top" role="navigation" id="lssm.appstore_settingsbar" style=""><div class="lssm.appstore_settingsbar_div" style="padding-left: 20px;padding-right: 20px;"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav">';

        settings_html += '<button style="padding:5px;" class="btn btn-success" id="'+lssm.config.prefix + '_appstore_NotificationSettings_close">' + I18n.t('lssm.n-alarm.settings.close') + '</button></ul></div></div></nav><div class="col-md-3 "><div class="panel panel-default" style="display: inline-block;width:100%;"><div class="panel-body"><span class="pull-right"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="N-A_chat" '+(set.allianceChatNotifcation?'checked="true"':'')+'" value="allianceChatNotifcation" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="N-A_chat"></label></div></span><h4>' + I18n.t('lssm.n-alarm.settings.chat_title') + '</h4><small>' + I18n.t('lssm.n-alarm.settings.chat_text') + '</small></div><div class="panel-footer">' + I18n.t('lssm.n-alarm.blend') + '<div class="pull-right"><span><input type="number" min="1" max="60" data-set="timeout_Chat" value="'+set.timeout_Chat+'" id="N-A_chat_blend" /></span><span>' + I18n.t('lssm.n-alarm.seconds') + '</span></div></div></div></div>';

        settings_html += '<div class="col-md-3 "><div class="panel panel-default" style="display: inline-block;width:100%;"><div class="panel-body"><span class="pull-right"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="N-A_S5" '+(set.allianceS5Notifcation?'checked="true"':'')+' value="allianceS5Notifcation" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="N-A_S5"></label></div></span><h4>' + I18n.t('lssm.n-alarm.settings.s5_title') + '</h4><small>' + I18n.t('lssm.n-alarm.settings.s5_text') + '</small></div><div class="panel-footer">' + I18n.t('lssm.n-alarm.blend') + '<div class="pull-right"><span><input type="number" min="1" max="60" data-set="timeout_S5" value="'+set.timeout_S5+'" id="N-A_S5_blend" /></span><span>' + I18n.t('lssm.n-alarm.seconds') + '</span></div></div></div></div>';

        settings_html += '<div class="col-md-3 "><div class="panel panel-default" style="display: inline-block;width:100%;"><div class="panel-body"><span class="pull-right"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="N-A_status" '+(set.allianceStatusNotifcation?'checked="true"':'')+' value="allianceStatusNotifcation" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="N-A_status"></label></div></span><h4>' + I18n.t('lssm.n-alarm.settings.status_title') + '</h4><small>' + I18n.t('lssm.n-alarm.settings.status_text') + '</small></div><div class="panel-footer">' + I18n.t('lssm.n-alarm.blend') + '<div class="pull-right"><span><input type="number" min="1" max="60" data-set="timeout_Status" value="'+set.timeout_Status+'" id="N-A_status_blend" /></span><span>' + I18n.t('lssm.n-alarm.seconds') + '</span></div></div></div></div>';

        settings_html += '<div class="col-md-3 "><div class="panel panel-default" style="display: inline-block;width:100%;"><div class="panel-body"><span class="pull-right"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="N-A_chatp" '+(set.allianceChatPNotifcation?'checked="true"':'')+' value="allianceChatPNotifcation" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="N-A_chatp"></label></div></span><h4>' + I18n.t('lssm.n-alarm.settings.chatp_title') + '</h4><small>' + I18n.t('lssm.n-alarm.settings.chatp_text') + '</small></div><div class="panel-footer">' + I18n.t('lssm.n-alarm.blend') + '<div class="pull-right"><span><input type="number" min="1" max="60" data-set="timeout_ChatPopup" value="'+set.timeout_ChatPopup+'" id="N-A_chatp_blend" /></span><span>' + I18n.t('lssm.n-alarm.seconds') + '</span></div></div></div></div></div>';
        $('#map_outer').before(settings_html);
        $('#'+lssm.config.prefix + '_appstore_NotificationSettings_close').click(function(){
            $('#'+lssm.config.prefix + '_appstore_NotificationSettings').hide();
            return false;
        })
        $('#N-A_chat,#N-A_S5,#N-A_status,#N-A_chatp').change(function(){
            set[this.value] = this.checked;
            saveSettings();
        });
        $('#N-A_chat_blend,#N-A_S5_blend,#N-A_status_blend,#N-A_chatp_blend').change(function(){
            set[$(this).data('set')]=this.value;
            saveSettings();
        });
    }
    createSettings();
    function NotificationAlarm_show_settings()
    {
        $('#'+lssm.config.prefix + '_appstore_NotificationSettings').show();
    }
    var li = $('<li role="presentation"><a href="#">Notification Alert</a></li>').click(function(){
        NotificationAlarm_show_settings();
        return false;
    })
    $('#lssm_menu').append(li)
    function saveSettings(){
        //localStorage.setItem('Notification',JSON.stringify(set)); // Outdated
        lssm.settings.set("Notification", set);
    }
    notifyMe(I18n.t('lssm.n-alarm.inithead'), I18n.t('lssm.n-alarm.init'), "init");

    $(document).bind(lssm.hook.postname("allianceChat"),function(event,t){
        if (user_id !== t.user_id && set.allianceChatNotifcation && !set.allianceChatPNotifcation) {

            notifyMe(t.username, t.message, "Chat");
        } else if (user_id !== t.user_id && set.allianceChatPNotifcation && !set.allianceChatNotifcation) {
            ChatPopup(t.date, t.user_id, t.username, t.mission_id, t.message);
        } else if (user_id !== t.user_id && set.allianceChatPNotifcation && set.allianceChatNotifcation)
        {
            ChatPopup(t.date, t.user_id, t.username, t.mission_id, t.message);
            notifyMe(t.username, t.message, "Chat");
        }
    });
    $(document).bind(lssm.hook.postname("radioMessage"),function(event,t){
        if (t.fms_real == 5 && set.allianceS5Notifcation) {
            if (t.fms_text.startsWith("[Verband]"))
            {
                if (!alliance_ignore_fms)
                {
                    notifyMe(t.caption, t.fms_text, "S5", t.fms_real, t.id);
                }
            } else
            {
                notifyMe(t.caption, t.fms_text, "S5", t.fms_real, t.id);
            }
        } else if (t.fms_real != 5 && set.allianceStatusNotifcation) {
            if (t.fms_text.startsWith("[Verband]"))
            {
                if (!alliance_ignore_fms)
                {
                    notifyMe(t.caption, t.fms_text, "Status", t.fms_real, t.id);
                }
            } else
            {
                notifyMe(t.caption, t.fms_text, "Status", t.fms_real, t.id);
            }
        }
    });
})($, I18n);
