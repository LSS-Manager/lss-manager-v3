(function ($, I18n) {
	
	var LSS_NOTIFICATION_STORAGE = "LSS_NOTIFICATION_STORAGE";

    I18n.translations.de['lssm']['n-alarm'] = {
        not_support: "Dieser Browser unterstützt leider keine HTML5-Notifications",
        init: "Notification-Alarm wird initalisiert, Bitte warten...",
        inithead: "Initalisierung",
        chat_message: "Chatnachricht von ",
        blend: "Ausblenden nach:",
        seconds: "Sekunden",
        settings: {
            title: "Notification-Alarm",
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
            title: "Notification-Alarm",
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
            title: "Notification-Alarm",
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
    
	var managedSettings = {
		    "id": LSS_NOTIFICATION_STORAGE,
		    "title": I18n.t('lssm.n-alarm.settings.title'),
		    "version": "1.4",
		    "settings": {
		        "n-alarm-chat": {
		            "default": true,
		            "ui": {
		                "label": I18n.t('lssm.n-alarm.settings.chat_title'),
		                "type": "toggle",
		                "description": I18n.t('lssm.n-alarm.settings.chat_text')
		            }
		        },
		        "n-alarm-timeout-chat": {
		            "default": 3,
		            "ui": {
		                "label": I18n.t('lssm.n-alarm.blend'),
		                "type": "int",
		                "parent": LSS_NOTIFICATION_STORAGE + "_n-alarm-chat_toggle",
		                "class": "panel-footer"
		            }
		        },
		        "n-alarm-s5": {
		            "default": true,
		            "ui": {
		                "label": I18n.t('lssm.n-alarm.settings.s5_title'),
		                "type": "toggle",
		                "description": I18n.t('lssm.n-alarm.settings.s5_text')
		            }
		        },
		        "n-alarm-timeout-s5": {
		            "default": 3,
		            "ui": {
		                "label": I18n.t('lssm.n-alarm.blend'),
		                "type": "int",
		                "parent": LSS_NOTIFICATION_STORAGE + "_n-alarm-s5_toggle",
		                "class": "panel-footer"
		            }
		        },
		        "n-alarm-status": {
		            "default": true,
		            "ui": {
		                "label": I18n.t('lssm.n-alarm.settings.status_title'),
		                "type": "toggle",
		                "description": I18n.t('lssm.n-alarm.settings.status_text')
		            }
		        },
		        "n-alarm-timeout-status": {
		            "default": 3,
		            "ui": {
		                "label": I18n.t('lssm.n-alarm.blend'),
		                "type": "int",
		                "parent": LSS_NOTIFICATION_STORAGE + "_n-alarm-status_toggle",
		                "class": "panel-footer"
		            }
		        },
		        "n-alarm-chatp": {
		            "default": true,
		            "ui": {
		                "label": I18n.t('lssm.n-alarm.settings.chatp_title'),
		                "type": "toggle",
		                "description": I18n.t('lssm.n-alarm.settings.chatp_text')
		            }
		        },
		        "n-alarm-timeout-chatp": {
		            "default": 3,
		            "ui": {
		                "label": I18n.t('lssm.n-alarm.blend'),
		                "type": "int",
		                "parent": LSS_NOTIFICATION_STORAGE + "_n-alarm-chatp_toggle",
		                "class": "panel-footer"
		            }
		        }
		    }
		};
	
	lssm.managedSettings.register(managedSettings);


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
	            }, getSetting('n-alarm-timeout-chat') * 1000);
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
	            }, getSetting('n-alarm-timeout-status') * 1000);
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
	            }, getSetting('n-alarm-timeout-s5') * 1000);
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
        }, getSetting('n-alarm-timeout-chatp') * 1000);
    }
    function ChatPopup(date, user_id, username, mission_id, message)
    {
        var e = "<li><span class='mission_chat_message_username'>[" + date + "] <a href='/profile/" + user_id + "' class='lightbox-open'>" + username + ":</a></span>";
        mission_id && (e = e + "<a href='/missions/" + mission_id + "' class='lightbox-open'><span class='glyphicon glyphicon-bell'></span></a> ");
        e = e + " " + message + "</li>";
        $(e).appendTo($ul).delay(getSetting('n-alarm-timeout-chatp') * 1000).hide('slow', function () {
            $(this).remove();
        });
        $mainDiv.show('slow');
        hideMainDiv();

    }
    
    notifyMe(I18n.t('lssm.n-alarm.inithead'), I18n.t('lssm.n-alarm.init'), "init");

    $(document).bind(lssm.hook.postname("allianceChat"),function(event,t){
        if (user_id !== t.user_id && getSetting('n-alarm-chat') && !getSetting('n-alarm-chatp')) {

            notifyMe(t.username, t.message, "Chat");
        } else if (user_id !== t.user_id && getSetting('n-alarm-chatp') && !getSetting('n-alarm-chat')) {
            ChatPopup(t.date, t.user_id, t.username, t.mission_id, t.message);
        } else if (user_id !== t.user_id && getSetting('n-alarm-chatp') && getSetting('n-alarm-chat'))
        {
            ChatPopup(t.date, t.user_id, t.username, t.mission_id, t.message);
            notifyMe(t.username, t.message, "Chat");
        }
    });
    $(document).bind(lssm.hook.postname("radioMessage"),function(event,t){
        if (t.fms_real == 5 && getSetting('n-alarm-s5')) {
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
        } else if (t.fms_real != 5 && getSetting('n-alarm-status')) {
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
	function getSetting(setting){
		return lssm.managedSettings.getSetting(LSS_NOTIFICATION_STORAGE, setting);
	}
})($, I18n);
