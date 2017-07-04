(function(){

    var LSS_FASTS5_STORAGE = "StatusDispatching";
	var VERSION = "1.1";
	
    I18n.translations.de['lssm']['statusDispatching'] = {
	name: 'Verbesserte Status 5',
        fms: 'Sprechwunsch bearbeiten',
        nextVehicle: 'Zum nächsten Fahrzeug im Status 5',
        backToAlarm: 'Zurück zum Einsatz',
	settingsTitle: 'Verbesserte Status 5 - Einstellungen',
	settingsAttr: '"Sprechwunsch bearbeiten" in Einsatzmaske automatisch anklicken',
	settingsAttrDesc: 'Die Aktivierung dieser Option bewirkt, dass bei einem Einsatz mit einem offenen Status 5 zuerst der Status bearbeitet werden muss, bevor der Einsatz weiter bearbeitet werden kann. Wird diese Option also aktiviert, werden alle Status 5 schneller bearbeitet.<br>'+
						'Wird die Option deaktiviert, werden nur noch die Buttons "Zum nächsten Fahrzeug im Status 5" und "Zurück zum Einsatz" automatisch angeklickt.',
	close:'Schließen',
	fms5H1: 'transportiert'
    };

    I18n.translations.en['lssm']['statusDispatching'] = {
	name: 'Enhanced transport requests',
        fms: 'Transport Requested',
        nextVehicle: 'Go to the next vehicle with a transport request',
        backToAlarm: 'Back to mission',
	settingsTitle: 'Enhanced transport requests - Settings',
	settingsAttr: 'Click the button "Transport Requested" in mission mask automatically',
	settingsAttrDesc: 'Enabling this option provides automatic clicking on the "transport requested" button in the mission mask. This way you have to go through all transport requests before you can view details to the mission. Enabling this option allows faster processing of the transport requests.<br>'+
	'Disabling this option allows to see mission details before processing the transport requests. The buttons "Go to the next vehicle with a transport request" and "Back to mission" are not affected by this setting and are always automatically clicked.',
	close:'Close',
	fms5H1: 'transportiert'
    };

    I18n.translations.nl['lssm']['statusDispatching'] = {
	name: 'Verbeterde spraakaanvragen',
        fms: 'Spraakaanvraag beantwoorden',
        nextVehicle: 'Naar het volgende status 7 voertuig',
        backToAlarm: 'Naar het incident',
	settingsTitle: 'Verbeterde spraakaanvragen - Instellingen',
	settingsAttr: 'De knop "Spraakaanvraag beantwoorden" in het meldingsvenster automatisch indrukken.', //TODO: NL
	settingsAttrDesc: 'Door deze optie in te schakelen wordt de knop "spraakaanvraag beantwoorden" in het meldingsvenster automatisch ingedrukt. Op deze manier verwerk je sneller achter elkaar alle spraakaanvragen in plaats van dat je eerst nog de details van de desbetreffende melding te zien krijgt.<br>'+
	'Uitgeschakeld krijg je wel nog alle meldingen apart te zien voordat je de spraakaanvraag beantwoordt. De knoppen "Naar het volgende status 7 voertuig" en "Naar het incident" worden niet door deze instelling beïnvloed.', //TODO: NL
	close:'Dicht',
	fms5H1: 'transportiert'
    };
	
	var managedSettings = {
		"id": LSS_FASTS5_STORAGE,
		"title": I18n.t('lssm.statusDispatching.name'),
		"version": VERSION,
		"settings": {
			"fastS5" : {
				"default" : false,
				"ui" : {
					"label" : I18n.t('lssm.statusDispatching.settingsAttr'),
					"description": I18n.t('lssm.statusDispatching.settingsAttrDesc'),
					"type" : "checkbox"
				}
			}
		}
	};	
	
	lssm.managedSettings.register(managedSettings);	
	
	function getSetting(setting) {
		return lssm.managedSettings.getSetting(LSS_FASTS5_STORAGE, setting);
	}

	function statusDispatching()
	{
		var backMission_clicked = false;
		var next_clicked = false;
		
		if(getSetting('fastS5'))
		{
			var fms = document.getElementsByClassName('btn btn-xs btn-success');
			if (fms.length>0) {
				if (fms[0].innerText.match(I18n.t('lssm.statusDispatching.fms')))
					fms[0].click();
			}
		}
		var nextVehicle = document.getElementsByClassName('btn btn-success');
		var count = 0;
		for (var i = 0;i<nextVehicle.length;i++)
		{
			if (nextVehicle.length > 0 && nextVehicle[i].innerText.match(I18n.t('lssm.statusDispatching.nextVehicle'))) {
				nextVehicle[i].click();
				next_clicked = true;
			}
			else{
				count++;
			}
		}
		
		var backToMission = document.getElementById('btn_back_to_mission');
		if (backToMission !== null && !next_clicked) {
			backToMission.click();
			backMission_clicked = true;
		}
		
		var label = document.getElementsByClassName('alert alert-success');
		allTransported = false;
		for (var i = 0;i<label.length;i++)
		{
			if (label[i].innerText.match(I18n.t('lssm.statusDispatching.fms5H1'))) {
				allTransported = true;
			}
		}
		if(backToMission === null && count == nextVehicle.length && allTransported) 
		{
			tellParent("lightboxClose();");
		}
	}
	
	statusDispatching();
})();
