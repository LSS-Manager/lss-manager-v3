/* global jQuery, I18n, lssm */

(function(I18n, $) {
    let LSS_SHAREALLIANCEPOST_STORAGE = 'LSS_SHAREALLIANCEPOST_STORAGE';

    I18n.translations.de_DE.lssm.sharealliancepost = {
        share: 'Teilen...',
        chat: 'Chatten...',
        alert: 'Alarmieren...',
        chatm: 'An VB Chat',
        clock: 'Uhr',
        reqVehIdent: 'Zusätzlich benötigte Fahrzeuge:',
        reqVeh: 'Keine weiteren Fahrzeuge benötigt.',
        settings: {
            title: 'Alarmieren, Teilen & Posten',
            jumpNext: 'Nach Alarmierung zum nächsten Einsatz springen',
            enableKeyboard: 'Alarmierung mit Tastatur aktivieren',
            defaultPostToChat: 'Post in Chat als Standard festlegen',
            shortcutKeys:
                'Kommagetrennte Tasten für Tastatur Alarmierung. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Nachrichten Vorlagen. Platzhalter: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Offset für %TIME_OFFSET%-Formatter in Stunden',
        },
    };

    I18n.translations.en_US.lssm.sharealliancepost = {
        share: 'Share...',
        chat: 'Chat...',
        alert: 'Alert...',
        chatm: 'To Team Chat',
        clock: "o'clock",
        reqVehIdent: 'Needed vehicles:',
        reqVeh: 'No other vehicles required.',
        settings: {
            title: 'Alert, Share & Post',
            jumpNext: 'Jump to next mission after alerting',
            enableKeyboard: 'Enable Keyboard shortcuts',
            defaultPostToChat: 'Post to chat is default',
            shortcutKeys:
                'Comma separated list of keys for alerting. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Message templates. Placeholders: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Offset for %TIME_OFFSET%-formatter in hours',
        },
    };

    I18n.translations.nl_NL.lssm.sharealliancepost = {
        share: 'Delen...',
        chat: 'Chat...',
        alert: 'Alarmeren...',
        chatm: 'Naar Team Chat',
        clock: 'uur',
        reqVehIdent: 'Benodigde voertuigen:',
        reqVeh: 'Geen andere voertuigen nodig.',
        settings: {
            title: 'Alarmeren, delen & posten',
            jumpNext: 'Ga naar de volgende inzet na het alarmeren',
            enableKeyboard: 'Sneltoetsen inschakelen',
            defaultPostToChat: 'Bericht in chat is standaard',
            shortcutKeys:
                'Kommabescheiden lijst van toetsen om te alarmeren. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Bericht voorbeelden. Plaatshouders: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'compensatie voor %TIME_OFFSET%-format in uren',
        },
    };

    I18n.translations.cs_CZ.lssm.sharealliancepost = {
        share: 'Podíl...',
        chat: 'Povídat si...',
        alert: 'Upozornění ...',
        chatm: 'Na týmový chat',
        clock: 'je to',
        reqVehIdent: 'Potřebná vozidla:',
        reqVeh: 'Nevyžadují se žádná další vozidla.',
        settings: {
            title: 'Výstraha, sdílet & post',
            jumpNext: 'Po upozornění přejděte na další misi',
            enableKeyboard: 'Povolit klávesové zkratky',
            defaultPostToChat: 'Výchozí je příspěvek do chatu',
            shortcutKeys:
                'Seznam kláves oddělených čárkami pro upozornění. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Šablony zpráv. Zástupné symboly: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Ofset pro %TIME_OFFSET%-formátovat v hodinách',
        },
    };

    I18n.translations.es_ES.lssm.sharealliancepost = {
        share: 'Compartir...',
        chat: 'Chat...',
        alert: 'Alerta...',
        clock: 'en punto',
        reqVehIdent: 'Vehículos necesarios:',
        reqVeh: 'No se requieren otros vehículos.',
        settings: {
            title: 'Alerta, Compartir y Publicar',
            jumpNext: 'Saltar a la siguiente misión después de alertar',
            enableKeyboard: 'Habilitar accesos directos de teclado',
            defaultPostToChat: 'Publicar en el chat es predeterminado',
            shortcutKeys:
                'Lista de teclas separadas por comas para alertas. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Plantillas de mensajes. Marcadores de posición: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Offset para %TIME_OFFSET%-formatter en horas',
        },
    };

    I18n.translations.pt_PT.lssm.sharealliancepost = {
        share: 'Compartilhar...',
        chat: 'Conversa...',
        alert: 'Alerta...',
        chatm: 'Para chat de equipa',
        clock: 'horas',
        reqVehIdent: 'Veículos necessários:',
        reqVeh: 'Nenhum outro veículo é necessário.',
        settings: {
            title: 'Alerta, Partilha & Post',
            jumpNext: 'Salta para a próxima missão depois de alertar',
            enableKeyboard: 'Ativar atalhos de teclado',
            defaultPostToChat: 'Post to chat é padrão',
            shortcutKeys:
                'Vírpara a lista de chaves separadas para alertar. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Modelos de mensagem. Espaços reservados: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Compensado para %TIME_OFFSET%-formatter em horas',
        },
    };

    I18n.translations.pl_PL.lssm.sharealliancepost = {
        share: 'dzielony',
        chat: 'chatty',
        alert: 'czujny',
        chatm: 'Na pogawędkę drużynową',
        clock: 'tu',
        reqVehIdent: 'Potrzebne pojazdy:',
        reqVeh: 'Nie są wymagane żadne inne pojazdy.',
        settings: {
            title: 'Alerty, akcje i poczta',
            jumpNext: 'Przejdź do następnej misji po ostrzeżeniu.',
            enableKeyboard: 'Włączyć skróty klawiaturowe',
            defaultPostToChat: 'Post to chat jest wartością domyślną',
            shortcutKeys:
                'Lista klawiszy alarmowych oddzielonych przecinkami. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Szablony wiadomości. Posiadacze miejsc: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Offset dla %TIME_OFFSET%-formatter w godzinach',
        },
    };

    I18n.translations.sv_SE.lssm.sharealliancepost = {
        share: 'Dela med sig...',
        chat: 'Chatt...',
        alert: 'Varna...',
        chatm: 'Till Teamchatt',
        clock: 'är det',
        reqVehIdent: 'Nödvändiga fordon:',
        reqVeh: 'Inga andra fordon krävs.',
        settings: {
            title: 'Alert, Share & Post',
            jumpNext: 'Hoppa till nästa uppdrag efter varning',
            enableKeyboard: 'Aktivera kortkommandon',
            defaultPostToChat: 'Inlägg till chatt är som standard',
            shortcutKeys:
                'Kommaseparerad lista med nycklar för varning. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Meddelandemallar. Platshållare: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Offset för %TIME_OFFSET% -format i timmar',
        },
    };

    I18n.translations.da_DK.lssm.sharealliancepost = {
        share: 'Del...',
        chat: 'Snak...',
        alert: 'Alert...',
        chatm: 'Til teamchat',
        clock: 'er det',
        reqVehIdent: 'Påkrævede køretøjer:',
        reqVeh: 'Ingen andre køretøjer kræves.',
        settings: {
            title: 'Alert, del & indlæg',
            jumpNext: 'Gå til næste mission efter alarmering',
            enableKeyboard: 'Aktivér tastaturgenveje',
            defaultPostToChat: 'Indlæg til chat er som standard',
            shortcutKeys:
                'Kommasepareret liste over nøgler til alarmering. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Meddelelsesskabeloner. pladsholdere: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Offset i %TIME_OFFSET% -format i timer',
        },
    };

    I18n.translations.nb_NO.lssm.sharealliancepost = {
        share: 'Dele...',
        chat: 'Chat...',
        alert: 'Varsling...',
        chatm: 'Å Team Chat',
        clock: 'er det',
        reqVehIdent: 'Nødvendige fremkomstmidler:',
        reqVeh: 'Ingen andre kjøretøy kreves.',
        settings: {
            title: 'Varsel, del og post',
            jumpNext: 'Hopp til neste oppdrag etter varsling',
            enableKeyboard: 'Aktiver tastatursnarveier',
            defaultPostToChat: 'Innlegg til chat er standard',
            shortcutKeys:
                'Kommaseparert liste over nøkler for varsling. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Meldingsmaler. Plassholdere: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Offset for %TIME_OFFSET% -format i timer',
        },
    };

    I18n.translations.it_IT.lssm.sharealliancepost = {
        share: 'condivisibile',
        chat: 'loquace',
        alert: 'vigile',
        chatm: 'Alla Chat di squadra',
        clock: 'Ore',
        reqVehIdent: 'Veicoli necessari:',
        reqVeh: 'Non sono richiesti altri veicoli.',
        settings: {
            title: 'Allarme, condivisione e pubblicazione',
            jumpNext: 'Passa alla prossima missione dopo averlo avvisato',
            enableKeyboard: 'Attivare le scorciatoie da tastiera',
            defaultPostToChat: 'Post to chat è predefinito',
            shortcutKeys:
                'Elenco separato da virgole di chiavi per l\'allerta. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Modelli di messaggi. Segnaposto: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Offset per %TIME_OFFSET%-formatter in ore',
        },
    };

    I18n.translations.tr_TR.lssm.sharealliancepost = {
        share: 'Paylaş...',
        chat: 'Sohbet...',
        alert: 'Uyarmak...',
        chatm: 'Takım Sohbetine',
        clock: 'saat',
        reqVehIdent: 'Gerekli araçlar:',
        reqVeh: 'Başka araca gerek yok.',
        settings: {
            title: 'Uyarı, Paylaş ve Gönder',
            jumpNext: 'Uyarı verdikten sonra bir sonraki göreve atla',
            enableKeyboard: 'Klavye kısayollarını etkinleştir',
            defaultPostToChat: 'Sohbete gönder varsayılan',
            shortcutKeys:
                'Uyarı için virgülle ayrılmış anahtar listesi. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Mesaj şablonları. Yer tutucular: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'İçin ofset %TIME_OFFSET%-saat olarak saat',
        },
    };

    I18n.translations.fr_FR.lssm.sharealliancepost = {
        share: 'Partager....',
        chat: 'Chat...',
        alert: 'Alerte....',
        chatm: "Au Chat d'équipe",
        clock: 'heures',
        reqVehIdent: 'Véhicules nécessaires :',
        reqVeh: 'Aucun autre véhicule requis.',
        settings: {
            title: 'Alerter, Partager & Poster',
            jumpNext: "Passer à la mission suivante après l'alerte",
            enableKeyboard: 'Activer les raccourcis clavier',
            defaultPostToChat: 'Poster sur le chat est par défaut',
            shortcutKeys:
                'Liste de clés séparées par des virgules pour l\'alerte. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Modèles de messages. Caractères de remplissage : <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Décalage pour %TIME_OFFSET%-formatter en heures',
        },
    };

    I18n.translations.ru_RU.lssm.sharealliancepost = {
        share: 'Поделиться...',
        chat: 'Чат...',
        alert: 'Тревога...',
        chatm: 'В командный чат',
        clock: 'в',
        reqVehIdent: 'Требуются машины:',
        reqVeh: 'Других транспортных средств не требуется.',
        settings: {
            title: 'Предупреждение, обмен информацией и почта',
            jumpNext: 'Перейти к следующей миссии после оповещения',
            enableKeyboard: 'Включить горячие клавиши на клавиатуре',
            defaultPostToChat: 'Отправка сообщения в чат по умолчанию',
            shortcutKeys:
                'Разделенный запятой список клавиш для оповещения. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Шаблоны сообщений. Места хранения: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Смещение для %TIME_OFFSET%-формата в часах',
        },
    };

    I18n.translations.uk_UA.lssm.sharealliancepost = {
        share: 'Поділитися ...',
        chat: 'Чат ...',
        alert: 'Сповіщення ...',
        chatm: 'До командного чату',
        clock: 'вечора',
        reqVehIdent: 'Необхідні машини:',
        reqVeh: 'Ніяких інших транспортних засобів не потрібно.',
        settings: {
            title: 'Попередження, обмін та публікація',
            jumpNext: 'Перейдіть до наступної місії після попередження',
            enableKeyboard: 'Увімкнути комбінації клавіш',
            defaultPostToChat: 'Повідомлення у чаті за замовчуванням',
            shortcutKeys:
                'Список розділених комами клавіш для оповіщення. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Шаблони повідомлень. Заставники: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Зсув для %TIME_OFFSET%-форматор в годинах',
        },
    };

    I18n.translations.ja_JP.lssm.sharealliancepost = {
        share: '共有...',
        chat: 'チャット...',
        alert: 'アラート...',
        chatm: 'チームチャットへ',
        clock: '時です',
        reqVehIdent: '必要な車両：',
        reqVeh: '他の車両は必要ありません。',
        settings: {
            title: 'アラート、共有、投稿',
            jumpNext: '警告後に次のミッションにジャンプ',
            enableKeyboard: 'キーボードショートカットを有効にする',
            defaultPostToChat: 'チャットへの投稿がデフォルトです',
            shortcutKeys:
                'アラート用のキーのカンマ区切りリスト。 [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'アラート用のキーのカンマ区切りリスト。 <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'のオフセット %TIME_OFFSET% -フォーマッター数時間',
        },
    };

    I18n.translations.ko_KR.lssm.sharealliancepost = {
        share: '공유...',
        chat: '잡담...',
        alert: '경보...',
        chatm: '팀 채팅',
        clock: '입니다',
        reqVehIdent: '필요 차량:',
        reqVeh: '다른 차량은 필요하지 않습니다.',
        settings: {
            title: '알림, 공유 및 게시',
            jumpNext: '경고 후 다음 미션으로 이동',
            enableKeyboard: '키보드 단축키 사용',
            defaultPostToChat: '채팅에 게시가 기본입니다',
            shortcutKeys:
                '경고를위한 쉼표로 구분 된 키 목록. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                '메시지 템플릿. 자리 표시 자 :<ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: '에 대한 오프셋 %TIME_OFFSET%-시간 단위의 포맷터',
        },
    };

    I18n.translations.fi_FI.lssm.sharealliancepost = {
        share: 'Jaa...',
        chat: 'Chat...',
        alert: 'Ilmoituksen...',
        chatm: 'Tiimikeskusteluun',
        clock: "o 'kello",
        reqVehIdent: 'Tarvittavat ajoneuvot:',
        reqVeh: 'Muita ajoneuvoja ei tarvita.',
        settings: {
            title: 'Hälytys, Jaa ja julkaise',
            jumpNext: 'Siirry seuraavaan tehtävään hälytyksen jälkeen',
            enableKeyboard: 'Pikanäppäinten ottaminen käyttöön',
            defaultPostToChat: 'Lähetä chat on oletuksena',
            shortcutKeys:
                'Pilkulla erotettu hälytysnäppäinten luettelo. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Viestimallit. Paikkamerkit: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Siirtymä %TIME_OFFSET%-formatter tunteina',
        },
    };

    I18n.translations.ro_RO.lssm.sharealliancepost = {
        share: 'Împărtăşi...',
        chat: 'Conversație...',
        alert: 'Alertă...',
        chatm: 'Pentru a Chat-ul de echipă',
        clock: "ora o'",
        reqVehIdent: 'Vehicule necesare:',
        reqVeh: 'Nu sunt necesare alte vehicule.',
        settings: {
            title: 'Alertare, partajare și postare',
            jumpNext: 'Salt la următoarea misiune după alertare',
            enableKeyboard: 'Activarea comenzilor rapide de la tastatură',
            defaultPostToChat: 'Post la chat este implicit',
            shortcutKeys:
                'Listă separată prin virgulă de taste pentru alertare. [17 = ctrl, 89 = y] (<a href="https://keycode.info" target="_blank">Info</a>)',
            messages:
                'Șabloane de mesaje. Substituenţi: <ul><li>%ADDRESS%</li><li>%TIME_OFFSET%</li><li>%PATIENTS_LEFT%</li><li>%REQUIRED_VEHICLES%</li><li>%CREDITS%</li></ul>',
            timeOffset: 'Deplasare pentru %TIME_OFFSET%-formatter în ore',
        },
    };

    const managedSettings = {
        id: LSS_SHAREALLIANCEPOST_STORAGE,
        title: I18n.t('lssm.sharealliancepost.settings.title'),
        settings: {
            jumpNext: {
                default: false,
                ui: {
                    label: I18n.t('lssm.sharealliancepost.settings.jumpNext'),
                    type: 'checkbox',
                },
            },
            enableKeyboard: {
                default: false,
                ui: {
                    label: I18n.t(
                        'lssm.sharealliancepost.settings.enableKeyboard'
                    ),
                    type: 'checkbox',
                },
            },
            defaultPostToChat: {
                default: false,
                ui: {
                    label: I18n.t(
                        'lssm.sharealliancepost.settings.defaultPostToChat'
                    ),
                    type: 'checkbox',
                },
            },
            shortcutKeys: {
                default: '17, 89',
                ui: {
                    label: I18n.t(
                        'lssm.sharealliancepost.settings.shortcutKeys'
                    ),
                    type: 'text',
                },
            },
            timeOffset: {
                default: 2,
                ui: {
                    label: I18n.t('lssm.sharealliancepost.settings.timeOffset'),
                    type: 'int',
                },
            },
            messages: {
                default: [
                    'Frei zum Mitverdienen', // First entry is default
                    'Rettungsdienst für %PATIENTS_LEFT% Patienten benötigt',
                    'Weitere Kräfte benötigt',
                    'Unterstützung in %ADDRESS% benötigt',
                    'Offen bis %TIME_OFFSET%.',
                    '%REQUIRED_VEHICLES%',
                ],
                ui: {
                    label: I18n.t('lssm.sharealliancepost.settings.messages'),
                    type: 'flexList',
                    allowSizeChange: true,
                },
            },
        },
    };

    lssm.managedSettings.register(managedSettings);
    function getSetting(setting) {
        return lssm.managedSettings.getSetting(
            LSS_SHAREALLIANCEPOST_STORAGE,
            setting
        );
    }

    if (!location.pathname.match(/\/missions\/\d+/)) return;

    // Create Button and add event listener
    const initButtons = () => {
        let btnMarkup =
            '<div class="btn-group" style="margin-left: 5px; margin-right: 5px;">';

        btnMarkup +=
            '<a href="#" class="btn btn-success btn-sm alert_notify_alliance" title="Alarmieren, im Verband freigeben und Nachricht in Verbands-Chat">';
        btnMarkup +=
            '<img class="icon icons8-Phone-Filled" src="/images/icons8-phone_filled.svg" width="18" height="18">';
        btnMarkup +=
            '<img class="icon icons8-Share" src="/images/icons8-share.svg" width="20" height="20">';
        btnMarkup +=
            '<span class="glyphicon glyphicon-bullhorn" style="font-size: 13px;"></span>';
        btnMarkup += '</a></div>';

        let optionsBtnMarkup =
            '<a href="#" id="openAllianceShareOptions" class="btn btn-sm btn-default" title="Einstellungen" style="margin: 0">';
        optionsBtnMarkup +=
            '<span class="glyphicon glyphicon-option-horizontal"></span></a>';

        optionsBtnMarkup +=
            '<div class="btn btn-sm btn-default" style="margin:0; padding: 1px; display: none;" id="allianceShareOptions"><input type="text" id="allianceShareText" value="' +
            messages[0] +
            '">';
        optionsBtnMarkup +=
            '<label style="margin-left: 2px; margin-right: 2px;"><input type="checkbox" ' +
            (getSetting('defaultPostToChat') ? 'checked' : '') +
            ' id="postToChat" name="postToChat" value="true">' +
            I18n.t('lssm.sharealliancepost.chatm') +
            '</label>';

        optionsBtnMarkup += '<div style="text-align: left;"><ul>';
        $.each(messages, (index, msg) => {
            optionsBtnMarkup +=
                '<li class="customAllianceShareText">' + msg + '</li>';
        });
        optionsBtnMarkup += '</ul></div>';
        optionsBtnMarkup += '</div>';

        $('.alert_next_alliance')
            .parent()
            .append(btnMarkup);

        $('.alert_notify_alliance')
            .first()
            .parent()
            .prepend(optionsBtnMarkup);

        $('#openAllianceShareOptions').click(() => {
            $('#allianceShareOptions').show();
            $('#openAllianceShareOptions').hide();
        });

        $('.customAllianceShareText').click(function() {
            $('#allianceShareText').val($(this).text());
        });

        if (getSetting('jumpNext')) {
            $('.alert_notify_alliance').append(
                '<span style="margin-left: 5px;" class="glyphicon glyphicon-arrow-right"></span>'
            );
        }

        $('.alert_notify_alliance').click(processAllianceShare);
    };

    // Add Keylisteners
    const initKeys = () => {
        try {
            if (getSetting('enableKeyboard')) {
                let keys = [];
                const shortcutKeys = getSetting('shortcutKeys')
                    .replace(' ', '')
                    .split(',')
                    .map(key => {
                        return parseInt(key);
                    });

                $(document).keydown(e => {
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
                                let extraKey = keys.filter(
                                    el => !shortcutKeys.includes(el)
                                );
                                // As number 9 key has value 48, substract that to get an expected key (value) range from 1-9
                                extraKey = extraKey[extraKey.length - 1] - 48;
                                // If the extra button has the (value) number 1-9,
                                // and the message array as a corresponding number of messages, select it

                                if (
                                    extraKey > 0 &&
                                    extraKey <= 10 &&
                                    extraKey <= messages.length
                                ) {
                                    $('#allianceShareText').val(
                                        messages[extraKey - 1]
                                    );
                                }
                            }

                            processAllianceShare();
                        }
                    }
                });

                $(document).keyup(e => {
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
        const missionId = missionShareLink
            .replace('/missions/', '')
            .replace('/alliance', '');
        const csrfToken = $('meta[name="csrf-token"]').attr('content');
        const message = $('#allianceShareText').val();

        $('.alert_notify_alliance').html(
            I18n.t('lssm.sharealliancepost.share')
        );
        $.ajax({
            url: `/missions/${missionId}/alliance`,
            headers: {
                'X-LSS-Manager': lssm.headerVersion(),
            },
            success() {
                $('.alert_notify_alliance').html(
                    I18n.t('lssm.sharealliancepost.chat')
                );
                $.ajax({
                    type: 'POST',
                    url: `/mission_replies`,
                    headers: {
                        'X-LSS-Manager': lssm.headerVersion(),
                    },
                    data: {
                        authenticity_token: csrfToken,
                        mission_reply: {
                            alliance_chat: sendToAlliance,
                            content: message,
                            mission_id: missionId,
                        },
                    },
                    success() {
                        $('.alert_notify_alliance').html(
                            I18n.t('lssm.sharealliancepost.alert')
                        );
                        if (getSetting('jumpNext')) {
                            $('.alert_next')
                                .first()
                                .click();
                        } else {
                            $('#mission_alarm_btn').click();
                        }
                    },
                });
            },
        });
    };

    const transformMessages = callback => {
        try {
            // Prepare values for %ADDRESS% and %PATIENTS_LEFT%
            // Possible inputs 'xy street, 1234 city', '1234 city', '123 city | 2' (where 2 is number of patients)
            let addressAndPatrientRow = $('.mission_header_info >> small')
                .first()
                .text()
                .trim()
                .split(',');
            addressAndPatrientRow = addressAndPatrientRow[
                addressAndPatrientRow.length - 1
            ].split('|');
            const address = addressAndPatrientRow[0];
            let ort = address.substring(7);
            const patientsLeft =
                addressAndPatrientRow.length === 2
                    ? addressAndPatrientRow[1]
                    : 0;

            // Prepare values for %MY_CUSTOM_TIME%
            const offsetInHours = getSetting('timeOffset');
            let time = new Date();
            let customTime = time.getHours() + offsetInHours;
            customTime = customTime >= 24 ? customTime - 24 : customTime;

            // Prepare required Vehicles
            const alertText = $('.alert-danger');
            const requiredVehiclesIdentifier = I18n.t(
                'lssm.sharealliancepost.reqVehIdent'
            );
            let requiredVehicles = I18n.t('lssm.sharealliancepost.reqVeh');
            if (
                alertText &&
                alertText.text().indexOf(requiredVehiclesIdentifier) >= 0
            ) {
                requiredVehicles = alertText
                    .text()
                    .trim()
                    .substr(
                        requiredVehiclesIdentifier.length,
                        alertText.text().trim().length - 1
                    );
            }

            // Prepare %CREDITS%
            const missionHelp = $('#mission_help');
            const missionlink = missionHelp.attr('href');
            if (missionHelp && missionlink) {
                const missionID = missionlink
                    .replace(/\?.*$/, '')
                    .match(/\d*$/)[0];
                const langCode = I18n.currentLocale();
                fetch(
                    `https://proxy.lss-manager.de/api/missions.php?lang=${langCode}&mission=${missionID}`,
                    { cache: 'default' }
                )
                    .then(res => res.json())
                    .then(data => {
                        messages = messages.map(message => {
                            data?.average_credits && (message = message.replace(
                                /%CREDITS%/g,
                                data.average_credits.toLocaleString()
                            ));
                            message = message.replace(/%ADDRESS%/g, address);
                            message = message.replace(/%CITY%/g, ort);
                            message = message.replace(
                                /%TIME_OFFSET%/g,
                                `${customTime}:${
                                    time.getMinutes() < 10
                                        ? `0${time.getMinutes()}`
                                        : time.getMinutes()
                                } ${I18n.t('lssm.sharealliancepost.clock')}`
                            );
                            message = message.replace(
                                /%PATIENTS_LEFT%/g,
                                patientsLeft
                            );
                            message = message.replace(
                                /%REQUIRED_VEHICLES%/g,
                                requiredVehicles
                            );

                            return message;
                        });
                        callback();
                    });
            }
        } catch (e) {
            console.log('Error transforming messages', e);
        }
    };

    let messages = Array.isArray(getSetting('messages'))
        ? getSetting('messages')
        : [];
    transformMessages(() => {
        initButtons();
        initKeys();
    });
})(I18n, jQuery);
