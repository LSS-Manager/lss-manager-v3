(function($, I18n) {
    let LSS_NOTIFICATION_STORAGE = "LSS_NOTIFICATION_STORAGE";

  I18n.translations.de.lssm['n-alarm'] = {
    not_support: "Dieser Browser unterstützt leider keine HTML5-Notifications",
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
      close: "Schließen",
      s5_text: "Status 5 als Notification bekommen",
      status_title: "Status",
      status_text: "Alle Status-Meldungen als Notification bekommen.",
      chatp_title: "Chatnachrichten als Info-Popup",
      chatp_text: "Alle Chatnachrichten auch als Popup-Nachrichten am rechten Rand anzeigen"
    }
  }

  I18n.translations.en.lssm['n-alarm'] = {
    not_support: "This browser doesn't support HTML5-Notifications",
    inithead: "Initalization",
    chat_message: "Chat message from ",
    blend: "Hide after:",
    seconds: "seconds",
    settings: {
      title: "Notification-Alert",
      chat_title: "Chat messages",
      chat_text: "Get chat messages as notification.",
      s5_title: "Transport Request",
      save: "Save",
      close: "Close",
      s5_text: "Get Transport Requests as notification",
      status_title: "Status",
      status_text: "Get all status messages as notification.",
      chatp_title: "Get chat messages as info popup",
      chatp_text: "Get all chat messages as popup message on the right side"
    }
  }

  I18n.translations.fj.lssm['n-alarm'] = {
    not_support: "This browser doesn't support HTML5-Notifications",
    inithead: "Initalization",
    chat_message: "Chat message from ",
    blend: "Hide after:",
    seconds: "seconds",
    settings: {
      title: "Notification-Alert",
      chat_title: "Chat messages",
      chat_text: "Get chat messages as notification.",
      s5_title: "Transport Request",
      save: "Save",
      close: "Close",
      s5_text: "Get Transport Requests as notification",
      status_title: "Status",
      status_text: "Get all status messages as notification.",
      chatp_title: "Get chat messages as info popup",
      chatp_text: "Get all chat messages as popup message on the right side"
    }
  }

  I18n.translations.eu.lssm['n-alarm'] = {
    not_support: "This browser doesn't support HTML5-Notifications",
    inithead: "Initalization",
    chat_message: "Chat message from ",
    blend: "Hide after:",
    seconds: "seconds",
    settings: {
      title: "Notification-Alert",
      chat_title: "Chat messages",
      chat_text: "Get chat messages as notification.",
      s5_title: "Transport Request",
      save: "Save",
      close: "Close",
      s5_text: "Get Transport Requests as notification",
      status_title: "Status",
      status_text: "Get all status messages as notification.",
      chatp_title: "Get chat messages as info popup",
      chatp_text: "Get all chat messages as popup message on the right side"
    }
  }

  I18n.translations.es.lssm['n-alarm'] = {
    not_support: "Este navegador no soporta Notificaciones HTML5",
    inithead: "Initalización",
    chat_message: "Mensaje de chat de ",
    blend: "Ocultar después:",
    seconds: "segunda porción",
    settings: {
      title: "Notificación-Alerta",
      chat_title: "Mensajes de chat",
      chat_text: "Recibe mensajes de chat como notificación.",
      s5_title: "Solicitud de transporte",
      save: "Guardar",
      close: "Cerrar",
      s5_text: "Obtener órdenes de transporte como notificación",
      status_title: "Estado",
      status_text: "Obtenga todos los mensajes de estado como notificación.",
      chatp_title: "Obtener mensajes de chat como ventana emergente de información",
      chatp_text: "Obtener todos los mensajes de chat como mensaje emergente en el lado derecho"
    }
  }

  I18n.translations.nl.lssm['n-alarm'] = {
    not_support: "Deze browser ondersteunt helaas geen HTML5-meldingen",
    inithead: "Aan het laden",
    chat_message: "Chatbericht van ",
    blend: "Vervagen na:",
    seconds: "seconden",
    settings: {
      title: "Meldingen-Alarm",
      chat_title: "Chatmeldingen",
      chat_text: "Ontvang notificaties van nieuwe berichten in de chat.",
      s5_title: "Spraakaanvragen",
      save: "Opslaan",
      s5_text: "Ontvang notificaties van spraakaanvragen",
      status_title: "Status",
      status_text: "Ontvang notificaties van alle status-meldingen.",
      chatp_title: "Chatberichten als Info-Popup",
      chatp_text: "Alle chatberichten ook als Popup-berichten aan de rechter rand van het scherm tonen"
    }
  }

    let managedSettings = {
    "id": LSS_NOTIFICATION_STORAGE,
    "title": I18n.t('lssm.n-alarm.settings.title'),
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
      let notification;
    if (!("Notification" in window)) {
      alert(I18n.t('lssm.n-alarm.not_support'));
    } else if (Notification.permission === "granted") {

      if (type === "Chat") {
        notification = new Notification(I18n.t('lssm.n-alarm.chat_message') + username, {
          body: message,
          icon: lssm.getlink("/modules/lss-notification_alert/img/134895.png")
        });
        setTimeout(function() {
          notification.close();
        }, getSetting('n-alarm-timeout-chat') * 1000);
        notification.onclick = function() {
          window.focus();
        };
      } else if (type === "Status") {
        notification = new Notification(username, {
          body: message,
          icon: lssm.getlink("/modules/lss-notification_alert/img/Status_" + fms + ".png"),
        });
        setTimeout(function() {
          notification.close();
        }, getSetting('n-alarm-timeout-status') * 1000);
        notification.onclick = function() {

          $("body").append('<a href="/vehicles/' + vid + '" id="v_' + vid + '_' + fms + '" class="btn btn-xs btn-default lightbox-open">' + username + '</a>');
          $('#v_' + vid + '_' + fms + '').click();
          window.focus();
          $('#v_' + vid + '_' + fms + '').remove();
        };
      } else if (type === "S5") {
        notification = new Notification(username, {
          body: message,
          icon: lssm.getlink("/modules/lss-notification_alert/img/Status_" + fms + ".png"),
        });
        setTimeout(function() {
          notification.close();
        }, getSetting('n-alarm-timeout-s5') * 1000);
        notification.onclick = function() {

          $("body").append('<a href="/vehicles/' + vid + '" id="v_' + vid + '_' + fms + '" class="btn btn-xs btn-default lightbox-open">' + username + '</a>');
          $('#v_' + vid + '_' + fms + '').click();
          window.focus();
          $('#v_' + vid + '_' + fms + '').remove();
        };
      }

    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function(permission) {
        if (permission === "granted") {
          // TODO: I18n
          new Notification("Benachrichtungen aktiviert!");
        }
      });
    }


  }
    let $mainDiv = $('<div id="chatNote" class="panel panel-default"><div class="panel-heading">Chat</div></div>');
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
  $mainDiv.click(function() {
    $(this).hide('slow');
  });
    let $contentDiv = $('<div class="panel-body" style="background-color: white;"></div>');
    let $ul = $('<ul id="chatNoteUl"></ul>');
  $ul.css({
    'list-style': 'none',
    'margin-left': '0',
    'padding-left': ' 20px'
  });
  $ul.appendTo($contentDiv);
  $contentDiv.appendTo($mainDiv);
  $mainDiv.appendTo($('body'));
    let MainDivTimer;

  function hideMainDiv() {
    clearTimeout(MainDivTimer);
    MainDivTimer = setTimeout(function() {
      $mainDiv.hide('slow');
    }, getSetting('n-alarm-timeout-chatp') * 1000);
  }

  function ChatPopup(date, user_id, username, mission_id, message) {
      let e = "<li><span class='mission_chat_message_username'>[" + date + "] <a href='/profile/" + user_id + "' class='lightbox-open'>" + username + ":</a></span>";
    mission_id && (e = e + "<a href='/missions/" + mission_id + "' class='lightbox-open'><span class='glyphicon glyphicon-bell'></span></a> ");
    e = e + " " + message + "</li>";
    $(e).appendTo($ul).delay(getSetting('n-alarm-timeout-chatp') * 1000).hide('slow', function() {
      $(this).remove();
    });
    $mainDiv.show('slow');
    hideMainDiv();

  }

  // Bind alliance chat event
  $(document).bind(lssm.hook.postname("allianceChat"), function(event, t) {
    if (user_id !== t.user_id && getSetting('n-alarm-chat') && !getSetting('n-alarm-chatp')) {
      notifyMe(t.username, t.message, "Chat");
    } else if (user_id !== t.user_id && getSetting('n-alarm-chatp') && !getSetting('n-alarm-chat')) {
      ChatPopup(t.date, t.user_id, t.username, t.mission_id, t.message);
    } else if (user_id !== t.user_id && getSetting('n-alarm-chatp') && getSetting('n-alarm-chat')) {
      ChatPopup(t.date, t.user_id, t.username, t.mission_id, t.message);
      notifyMe(t.username, t.message, "Chat");
    }
  });

  // Bind S5 FMS event
  $(document).bind(lssm.hook.postname("radioMessage"), function(event, t) {
    if (t.fms_real == 5 && getSetting('n-alarm-s5')) {
      // TODO: I18n
      if (t.fms_text.startsWith("[Verband]")) {
        if (!alliance_ignore_fms) {
          notifyMe(t.caption, t.fms_text, "S5", t.fms_real, t.id);
        }
      } else {
        notifyMe(t.caption, t.fms_text, "S5", t.fms_real, t.id);
      }
    } else if (t.fms_real != 5 && getSetting('n-alarm-status')) {
      // TODO: I18n
      if (t.fms_text.startsWith("[Verband]")) {
        if (!alliance_ignore_fms) {
          notifyMe(t.caption, t.fms_text, "Status", t.fms_real, t.id);
        }
      } else {
        notifyMe(t.caption, t.fms_text, "Status", t.fms_real, t.id);
      }
    }
  });

  function getSetting(setting) {
    return lssm.managedSettings.getSetting(LSS_NOTIFICATION_STORAGE, setting);
  }
})($, I18n);
