(function() {

    let LSS_FASTS5_STORAGE = "StatusDispatching";

    I18n.translations.de_DE.lssm.statusDispatching = {
        name : 'Verbesserte Status 5',
        fms : 'Sprechwunsch bearbeiten',
        nextVehicle : 'Zum nächsten Fahrzeug im Status 5',
        backToAlarm : 'Zurück zum Einsatz',
        settingsTitle : 'Verbesserte Status 5 - Einstellungen',
        settingsAttr : '"Sprechwunsch bearbeiten" in Einsatzmaske automatisch anklicken',
        settingsAttrDesc : 'Die Aktivierung dieser Option bewirkt, dass bei einem Einsatz mit einem offenen Status 5 zuerst der Status bearbeitet werden muss, bevor der Einsatz weiter bearbeitet werden kann. Wird diese Option also aktiviert, werden alle Status 5 schneller bearbeitet.<br>'
                + 'Wird die Option deaktiviert, werden nur noch die Buttons "Zum nächsten Fahrzeug im Status 5" und "Zurück zum Einsatz" automatisch angeklickt.',
        close : 'Schließen',
        fms5H1 : 'transportiert'
    };

    I18n.translations.en_US.lssm.statusDispatching = {
        name : 'Enhanced transport requests',
        fms : 'Transport Requested',
        nextVehicle : 'Go to the next vehicle with a transport request',
        backToAlarm : 'Back to mission',
        settingsTitle : 'Enhanced transport requests - Settings',
        settingsAttr : 'Click the button "Transport Requested" in mission mask automatically',
        settingsAttrDesc : 'Enabling this option provides automatic clicking on the "transport requested" button in the mission mask. This way you have to go through all transport requests before you can view details to the mission. Enabling this option allows faster processing of the transport requests.<br>'
                + 'Disabling this option allows to see mission details before processing the transport requests. The buttons "Go to the next vehicle with a transport request" and "Back to mission" are not affected by this setting and are always automatically clicked.',
        close : 'Close',
        fms5H1 : 'transportiert'
    };

    I18n.translations.es_ES.lssm.statusDispatching = {
        name: 'Solicitudes de transporte mejoradas',
        fms: 'Transporte Solicitado',
        nextVehicle: 'Ir al vehículo siguiente con una orden de transporte',
        backToAlarm: 'Volver a la misión',
        settingsTitle: 'Órdenes de transporte ampliadas - Configuración',
        settingsAttr: 'Haga clic en el botón "Transport Requested" en la máscara de la misión automáticamente.',
        settingsAttrDesc: 'La activación de esta opción permite hacer clic automáticamente en el botón "transport requested" de la máscara de la misión. De esta forma, tendrá que pasar por todas las solicitudes de transporte antes de poder ver los detalles de la misión. Habilitar esta opción permite un procesamiento más rápido de las órdenes de transporte.<br>'
            + 'Desactivar esta opción permite ver los detalles de la misión antes de procesar las solicitudes de transporte. Los botones "Ir al siguiente vehículo con una solicitud de transporte" y "Volver a la misión" no se ven afectados por esta configuración y siempre se hace clic automáticamente.',
        close: 'Cerrar',
        fms5H1: 'transportista'
    };

    I18n.translations.pt_PT.lssm.statusDispatching = {
        name: 'Solicitudes de transporte mejoradas',
        fms: 'Transporte Solicitado',
        nextVehicle: 'Ir al vehículo siguiente con una orden de transporte',
        backToAlarm: 'Volver a la misión',
        settingsTitle: 'Órdenes de transporte ampliadas - Configuración',
        settingsAttr: 'Haga clic en el botón "Transport Requested" en la máscara de la misión automáticamente.',
        settingsAttrDesc: 'La activación de esta opción permite hacer clic automáticamente en el botón "transport requested" de la máscara de la misión. De esta forma, tendrá que pasar por todas las solicitudes de transporte antes de poder ver los detalles de la misión. Habilitar esta opción permite un procesamiento más rápido de las órdenes de transporte.<br>'
            + 'Desactivar esta opción permite ver los detalles de la misión antes de procesar las solicitudes de transporte. Los botones "Ir al siguiente vehículo con una solicitud de transporte" y "Volver a la misión" no se ven afectados por esta configuración y siempre se hace clic automáticamente.',
        close: 'Cerrar',
        fms5H1: 'transportista'
    };

    I18n.translations.pl_PL.lssm.statusDispatching = {
        name: 'Zwiększone zapotrzebowanie na transport',
        fms: 'Transport, którego dotyczy wniosek',
        nextVehicle: 'Przejdź do następnego pojazdu z prośbą o transport.',
        backToAlarm: 'Powrót do misji',
        settingsTitle: 'Ulepszone żądania transportowe - ustawienia',
        settingsAttr: 'Kliknij przycisk "Transport Requested" w masce misji automatycznie.',
        settingsAttrDesc: 'Włączenie tej opcji umożliwia automatyczne kliknięcie przycisku "żądany transport" w masce misji. W ten sposób musisz przejść przez wszystkie żądania transportowe, zanim będziesz mógł zobaczyć szczegóły misji. Włączenie tej opcji pozwala na szybsze przetwarzanie żądań transportowych.<br>'
            + 'Wyłączenie tej opcji pozwala zobaczyć szczegóły misji przed przetworzeniem żądań transportowych. Przyciski "Przejdź do następnego pojazdu z żądaniem transportu" i "Powrót do misji" nie są objęte tym ustawieniem i zawsze są automatycznie klikane.',
        close: 'Zamknij się.',
        fms5H1: 'transporter'
    };

    I18n.translations.sv_SE.lssm.statusDispatching = {
        name: 'Förbättrade transportförfrågningar',
        fms: 'Transport begärs',
        nextVehicle: 'Gå till nästa fordon med en transportförfrågan',
        backToAlarm: 'Tillbaka till uppdraget',
        settingsTitle: 'Förbättrade transportförfrågningar - Inställningar',
        settingsAttr: 'Klicka automatiskt på knappen "Transport begärt" i uppdragsmask',
        settingsAttrDesc: 'Aktivering av detta alternativ ger automatisk klickning på knappen "begärd transport" i uppdragsmask. På det här sättet måste du gå igenom alla transportförfrågningar innan du kan se detaljer till uppdraget. Att aktivera detta alternativ möjliggör snabbare behandling av transportförfrågningar.<br>'
            + 'Om du inaktiverar detta alternativ kan du se uppdragsuppgifter innan du behandlar transportförfrågningarna. Knapparna "Gå till nästa fordon med en transportförfrågan" och "Tillbaka till uppdrag" påverkas inte av denna inställning och klickas alltid automatiskt.',
        close: 'Stänga',
        fms5H1: 'transportiert'
    };
    
    I18n.translations.cs_CZ.lssm.statusDispatching = {
        name: 'Vylepšené požadavky na dopravu',
        fms: 'Požadován transport',
        nextVehicle: 'Přejít na další vozidlo s požadavkem na přepravu',
        backToAlarm: 'Zpět na misi',
        settingsTitle: 'Vylepšené požadavky na dopravu - nastavení',
        settingsAttr: 'Automaticky klikněte na tlačítko „Požadován transport“ v masce mise',
        settingsAttrDesc: 'Povolením této možnosti získáte automatické klepnutí na tlačítko „Požadovaný transport“ v masce mise. Tímto způsobem musíte projít všechny požadavky na dopravu, než budete moci zobrazit podrobnosti mise. Povolení této možnosti umožní rychlejší zpracování požadavků na přepravu.<br>'
            + 'Deaktivace této možnosti umožní zobrazit podrobnosti mise před zpracováním přepravních požadavků. Tlačítka „Přejít na další vozidlo s požadavkem na přepravu“ a „Zpět na misi“ nejsou tímto nastavením ovlivněna a jsou vždy automaticky kliknuta.',
        close: 'Zavřít',
        fms5H1: 'transportní'
    };

    I18n.translations.da_DK.lssm.statusDispatching = {
        name: 'Forbedrede transportanmodninger',
        fms: 'Transport anmodet',
        nextVehicle: 'Gå til det næste køretøj med en transportanmodning',
        backToAlarm: 'Tilbage til mission',
        settingsTitle: 'Forbedrede transportanmodninger - Indstillinger',
        settingsAttr: 'Klik automatisk på knappen "Anmodet om transport" i missionmasken',
        settingsAttrDesc: 'Aktivering af denne mulighed giver automatisk klik på knappen "anmodet om transport" i missionsmasken. På denne måde skal du gennemgå alle transportanmodninger, før du kan se detaljer til missionen. Aktivering af denne mulighed giver hurtigere behandling af transportanmodninger.<br>'
            + 'Deaktivering af denne mulighed gør det muligt at se mission detaljer før behandling af transportanmodninger. Knapperne "Gå til det næste køretøj med en transportanmodning" og "Tilbage til mission" påvirkes ikke af denne indstilling og klikkes altid automatisk.',
        close: 'Tæt',
        fms5H1: 'transportiert'
    };

    I18n.translations.nb_NO.lssm.statusDispatching = {
        name: 'Forbedrede transportforespørsler',
        fms: 'Transport forespurt',
        nextVehicle: 'Gå til neste kjøretøy med en transportforespørsel',
        backToAlarm: 'Tilbake til misjonen',
        settingsTitle: 'Forbedrede transportforespørsler - Innstillinger',
        settingsAttr: 'Klikk automatisk på knappen "Forespurt transport" i oppdragsmaske',
        settingsAttrDesc: 'Aktivering av dette alternativet gir automatisk klikk på "transport bedt om" -knappen i oppdragsmasken. På denne måten må du gå gjennom alle transportforespørsler før du kan se detaljer til oppdraget. Aktivering av dette alternativet gir raskere behandling av transportforespørsler. <br> '
            + 'Deaktivering av dette alternativet gjør det mulig å se oppdragsdetaljer før du behandler transportforespørsler. Knappene "Gå til neste kjøretøy med transportforespørsel" og "Tilbake til oppdrag" påvirkes ikke av denne innstillingen og blir alltid automatisk klikket.',
        close: 'Lukk',
        fms5H1: 'transportiert'
    };

    I18n.translations.it_IT.lssm.statusDispatching = {
        name: 'Richiesta di trasporto avanzatas',
        fms: 'Trasporto richiesto',
        nextVehicle: 'Vai al veicolo successivo con richiesta di trasporto',
        backToAlarm: 'Torna alla missione',
        settingsTitle: 'Richieste di trasporto avanzate - Impostazioni',
        settingsAttr: 'Fare clic sul pulsante "Trasporto richiesto" nella maschera di missione automaticamente',
        settingsAttrDesc: 'L\'attivazione di questa opzione permette di cliccare automaticamente sul pulsante "trasporto richiesto" nella maschera di missione.In questo modo è necessario esaminare tutte le richieste di trasporto prima di poter visualizzare i dettagli della missione.L\'attivazione di questa opzione consente un\'elaborazione più rapida delle richieste di trasporto.<br>'
            + 'Disabilitando questa opzione è possibile visualizzare i dettagli della missione prima di elaborare le richieste di trasporto. I pulsanti "Vai al veicolo successivo con una richiesta di trasporto" e "Torna in missione" non sono influenzati da questa impostazione e vengono sempre automaticamente cliccati.',
        close: 'Chiudere',
        fms5H1: 'trasportista'
    };

    I18n.translations.tr_TR.lssm.statusDispatching = {
        name: 'Geliştirilmiş taşıma talepleri',
        fms: 'Taşıma İstendi',
        nextVehicle: 'Taşıma talebiyle bir sonraki araca git',
        backToAlarm: 'Göreve geri dön',
        settingsTitle: 'Geliştirilmiş taşıma istekleri - Ayarlar',
        settingsAttr: 'Görev maskesinde "Taşıma İstendi" butonuna otomatik olarak tıklayın',
        settingsAttrDesc: 'Bu seçeneğin etkinleştirilmesi, görev maskesindeki "taşıma talep edildi" düğmesine otomatik olarak tıklanmasını sağlar. Bu şekilde, görevin ayrıntılarını görüntüleyebilmeniz için önce tüm taşıma isteklerini gözden geçirmeniz gerekir. Bu seçeneğin etkinleştirilmesi, taşıma isteklerinin daha hızlı işlenmesine olanak tanır.<br>'
            + 'Bu seçeneği devre dışı bırakmak, taşıma isteklerini işlemeden önce görev ayrıntılarını görmenizi sağlar. "Taşıma talebiyle bir sonraki araca git" ve "Göreve geri dön" düğmeleri bu ayardan etkilenmez ve her zaman otomatik olarak tıklanır.',
        close: 'Kapat',
        fms5H1: 'transportiert'
    };

    I18n.translations.fr_FR.lssm.statusDispatching = {
        name: 'Demandes de transport améliorées',
        fms: 'Transport demandé',
        nextVehicle: 'Aller au véhicule suivant avec une demande de transport',
        backToAlarm: 'Retour à la mission',
        settingsTitle: 'Demandes de transport améliorées - Paramètres',
        settingsAttr: 'Cliquez sur le bouton "Transport Demandé" dans le masque de mission automatiquement',
        settingsAttrDesc: 'L\'activation de cette option permet de cliquer automatiquement sur le bouton "transport demandé" dans le masque de mission. De cette façon, vous devez passer en revue toutes les demandes de transport avant de pouvoir voir les détails de la mission.L\'activation de cette option permet un traitement plus rapide des demandes de transport.<br>'
            + 'Désactiver cette option permet de voir les détails de la mission avant de traiter les demandes de transport. Les boutons "Aller au véhicule suivant avec une demande de transport" et "Retour à la mission" ne sont pas affectés par ce réglage et sont toujours cliqués automatiquement.',
        close: 'Fermer',
        fms5H1: 'transportiert'
    };

    I18n.translations.ru_RU.lssm.statusDispatching = {
        name: 'Расширенные запросы на транспортировку',
        fms: 'Запрошенный транспорт',
        nextVehicle: 'Перейти к следующему транспортному средству с запросом на перевозку.',
        backToAlarm: 'Назад к миссии',
        settingsTitle: 'Расширенные запросы на транспортировку - Настройки',
        settingsAttr: 'Автоматически нажать кнопку "Переместить запрошенный запрос" в маске миссии',
        settingsAttrDesc: 'Включение этой опции обеспечивает автоматическое нажатие на кнопку "запрошенный транспорт" в маске миссии. Таким образом, вы должны пройти через все транспортные запросы, прежде чем вы сможете просмотреть детали миссии. Включение данной опции позволяет ускорить обработку транспортных запросов.<br>'
            + 'Отключение этой опции позволяет просматривать детали миссии перед обработкой транспортных запросов. Кнопки "Перейти к следующему автомобилю с транспортным запросом" и "Назад к заданию" не затрагиваются этой настройкой и всегда автоматически нажимаются.',
        close: 'Близко',
        fms5H1: 'транспортник'
    };

    I18n.translations.uk_UA.lssm.statusDispatching = {
        name: 'Розширені запити на транспорт',
        fms: 'Запитаний транспорт',
        nextVehicle: 'Перейдіть до наступного транспортного засобу із запитом на транспорт',
        backToAlarm: 'Повернення до місії',
        settingsTitle: 'Розширені запити на транспорт - Налаштування',
        settingsAttr: 'Натисніть кнопку "Транспорт вимагається" в масці місії автоматично',
        settingsAttrDesc: 'Увімкнення цієї опції забезпечує автоматичне натискання на кнопку "транспорт вимагається" в масці місії. Таким чином, ви повинні пройти всі транспортні запити, перш ніж переглядати деталі місії. Увімкнення цієї опції дозволяє швидше обробляти транспортні запити.<br>'
            + 'Якщо вимкнути цю опцію, ви зможете побачити деталі місії перед обробкою транспортних запитів. Цей параметр не впливає на кнопки «Перейти до наступного транспортного засобу із запитом на транспорт» та «Повернутися до місії» і завжди автоматично натискається.',
        close: 'Закрити',
        fms5H1: 'перевезення'
    };

    I18n.translations.ja_JP.lssm.statusDispatching = {
        name: '強化されたトランスポート要求',
        fms: 'リクエストされた輸送',
        nextVehicle: '輸送リクエストがある次の車両に移動する',
        backToAlarm: 'ミッションに戻る',
        settingsTitle: '強化されたトランスポート要求-設定',
        settingsAttr: 'ミッションマスクの[トランスポート要求 ]ボタンをクリックします',
        settingsAttrDesc: 'このオプションを有効にすると、ミッションマスクの[トランスポート要求]ボタンが自動的にクリックされます。 この方法では、ミッションの詳細を表示する前に、すべてのトランスポートリクエストを処理する必要があります。 このオプションを有効にすると、トランスポートリクエストの処理が高速になります。<br>'
            + 'このオプションを無効にすると、トランスポートリクエストを処理する前にミッションの詳細を確認できます。 「輸送リクエストで次の車両に移動」および「ミッションに戻る」ボタンはこの設定の影響を受けず、常に自動的にクリックされます。',
        close: '閉じる',
        fms5H1: '輸送する'
    };

    I18n.translations.ko_KR.lssm.statusDispatching = {
        name: '향상된 전송 요청',
        fms: '운송 요청',
        nextVehicle: '운송 요청으로 다음 차량으로 이동',
        backToAlarm: '임무로 돌아 가기',
        settingsTitle: '향상된 전송 요청-설정',
        settingsAttr: '미션 마스크에서 "전송 요청"버튼을 자동으로 클릭하십시오',
        settingsAttrDesc: '이 옵션을 활성화하면 미션 마스크에서 "전송 요청"버튼을 자동으로 클릭 할 수 있습니다. 이렇게하면 임무에 대한 세부 정보를보기 전에 모든 전송 요청을 수행해야합니다. 이 옵션을 사용하면 전송 요청을보다 빠르게 처리 할 수 있습니다.<br>'
            + '이 옵션을 비활성화하면 전송 요청을 처리하기 전에 미션 세부 정보를 볼 수 있습니다. "운송 요청이있는 다음 차량으로 이동"및 "미션으로 돌아 가기"버튼은이 설정의 영향을받지 않으며 항상 자동으로 클릭됩니다.',
        close: '닫기',
        fms5H1: '운송업자'
    };

    I18n.translations.ro_RO.lssm.statusDispatching = {
        name: 'Cereri de transport îmbunătățite',
        fms: 'Transport solicitat',
        nextVehicle: 'Du-te la următorul vehicul cu o cerere de transport',
        backToAlarm: 'Înapoi la misiune',
        settingsTitle: 'Solicitări de transport îmbunătățite - Setări',
        settingsAttr: 'Faceți clic pe butonul "Transport solicitat" în masca de misiune automat',
        settingsAttrDesc: 'Activarea acestei opțiuni oferă clic automat pe butonul " transport solicitat " din masca de misiune. În acest fel va trebui să treacă prin toate cererile de transport înainte de a putea vizualiza detalii la misiune. Activarea acestei opțiuni permite procesarea mai rapidă a solicitărilor de transport.<br>'
            + 'Dezactivarea acestei opțiuni permite a vedea detaliile misiunii înainte de procesarea solicitărilor de transport. Butoanele "Du-te la următorul vehicul cu o cerere de transport" și "Înapoi la misiune" nu sunt afectate de această setare și sunt întotdeauna automat clic.',
        close: 'Închide',
        fms5H1: 'Transportate'
    };

    I18n.translations.nl_NL.lssm.statusDispatching = {
        name : 'Verbeterde spraakaanvragen',
        fms : 'Spraakaanvraag beantwoorden',
        nextVehicle : 'Naar het volgende status 7 voertuig',
        backToAlarm : 'Naar het incident',
        settingsTitle : 'Verbeterde spraakaanvragen - Instellingen',
        settingsAttr : 'De knop "Spraakaanvraag beantwoorden" in het meldingsvenster automatisch indrukken.', // TODO:
        // NL
        settingsAttrDesc : 'Door deze optie in te schakelen wordt de knop "spraakaanvraag beantwoorden" in het meldingsvenster automatisch ingedrukt. Op deze manier verwerk je sneller achter elkaar alle spraakaanvragen in plaats van dat je eerst nog de details van de desbetreffende melding te zien krijgt.<br>'
                + 'Uitgeschakeld krijg je wel nog alle meldingen apart te zien voordat je de spraakaanvraag beantwoordt. De knoppen "Naar het volgende status 7 voertuig" en "Naar het incident" worden niet door deze instelling beïnvloed.', // TODO:
        // NL
        close : 'Dicht',
        fms5H1 : 'transportiert'
    };

    let managedSettings = {
        "id" : LSS_FASTS5_STORAGE,
        "title" : I18n.t('lssm.statusDispatching.name'),
        "settings" : {
            "fastS5" : {
                "default" : false,
                "ui" : {
                    "label" : I18n.t('lssm.statusDispatching.settingsAttr'),
                    "description" : I18n.t('lssm.statusDispatching.settingsAttrDesc'),
                    "type" : "checkbox"
                }
            }
        }
    };

    lssm.managedSettings.register(managedSettings);

    function getSetting(setting) {
        return lssm.managedSettings.getSetting(LSS_FASTS5_STORAGE, setting);
    }

    function statusDispatching() {
        let next_clicked = false;

        if (getSetting('fastS5')) {
            let fms = document.getElementsByClassName('btn btn-xs btn-success');
            if (fms.length > 0) {
                if (fms[0].innerText.match(I18n.t('lssm.statusDispatching.fms')))
                    fms[0].click();
            }
        }
        let nextVehicle = document.getElementsByClassName('btn btn-success');
        let count = 0;
        for (let i = 0; i < nextVehicle.length; i++) {
            if (nextVehicle.length > 0 && nextVehicle[i].innerText.match(I18n.t('lssm.statusDispatching.nextVehicle'))) {
                nextVehicle[i].click();
                next_clicked = true;
            } else {
                count++;
            }
        }

        let backToMission = document.getElementById('btn_back_to_mission');
        if (backToMission !== null && !next_clicked) {
            backToMission.click();
        }

        let label = document.getElementsByClassName('alert alert-success');
        let allTransported = false;
        for (let i = 0; i < label.length; i++) {
            if (label[i].innerText.match(I18n.t('lssm.statusDispatching.fms5H1'))) {
                allTransported = true;
            }
        }
        if (backToMission === null && count === nextVehicle.length
                && allTransported) {
            tellParent("lightboxClose();");
        }
    }

    statusDispatching();
})();
