(function() {

    let LSS_FASTS5_STORAGE = "StatusDispatching";

    I18n.translations.de.lssm.statusDispatching = {
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

    I18n.translations.en.lssm.statusDispatching = {
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

    I18n.translations.es.lssm.statusDispatching = {
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

    I18n.translations.nl.lssm.statusDispatching = {
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
