(function(){

	var LSS_FASTS5_STORAGE = "StatusDispatching";
    I18n.translations.de['lssm']['statusDispatching'] = {
        fms: 'Sprechwunsch bearbeiten',
        nextVehicle: 'Zum nächsten Fahrzeug im Status 5',
        backToAlarm: 'Zurück zum Einsatz',
		settingsTitle: 'Verbesserte Status 5 - Einstellungen',
		settingsAttr: '"Sprechwunsch bearbeiten" in Einsatzmaske automatisch anklicken',
		settingsAttrDesc: 'Die Aktivierung dieser Option bewirkt, dass bei einem Einsatz mit einem offenen Status 5 zuerst der Status bearbeitet werden muss, bevor der Einsatz weiter bearbeitet werden kann. Wird diese Option also aktiviert, werden alle Status 5 schneller bearbeitet.<br><br>'+
							'Wird die Option deaktiviert, werden nur noch die Buttons "Zum nächsten Fahrzeug im Status 5" und "Zurück zum Einsatz" automatisch angeklickt.',
		close:'Schließen'
    };

    I18n.translations.en['lssm']['statusDispatching'] = {
        fms: 'Transport Requested',
        nextVehicle: 'Go to the next vehicle with a transport request',
        backToAlarm: 'Back to mission',
		settingsTitle: 'Enhanced transport requests - Settings',
		settingsAttr: 'Click the button "Transport Requested" in mission mask automatically',
		settingsAttrDesc: 'Enabling this option provides automatic clicking on the "transport requested" button in the mission mask. This way you have to go through all transport requests before you can view details to the mission. Enabling this option allows faster processing of the transport requests.<br><br>'+
		'Disabling this option allows to see mission details before processing the transport requests. The buttons "Go to the next vehicle with a transport request" and "Back to mission" are not affected by this setting and are always automatically clicked.',
		close:'Close'
    };

    I18n.translations.nl['lssm']['statusDispatching'] = {
        fms: 'Spraakaanvraag beantwoorden',
        nextVehicle: 'Naar het volgende status 7 voertuig',
        backToAlarm: 'Naar het incident',
		settingsTitle: 'Verbeterde spraakaanvragen - Instellingen',
		settingsAttr: 'Click the button "Transport Requested" in mission mask automatically', //TODO: NL
		settingsAttrDesc: 'Enabling this option provides automatic clicking on the "transport requested" button in the mission mask. This way you have to go through all transport requests before you can view details to the mission. Enabling this option allows faster processing of the transport requests.<br><br>'+
		'Disabling this option allows to see mission details before processing the transport requests. The buttons "Go to the next vehicle with a transport request" and "Back to mission" are not affected by this setting and are always automatically clicked.', //TODO: NL
		close:'Dicht'
    };
	
	function getSettings(){
		var settings = {
			'fastS5': {'type': 'boolean', 'default': false} // false = Der Button "Sprechwunsch bearbeiten" in der Einsatzmaske wird nicht automatisch angeklickt.
		};

		if (!lssm.settings.get(LSS_FASTS5_STORAGE) || Object.keys(lssm.settings.get(LSS_FASTS5_STORAGE)).length !== Object.keys(settings).length) {
			for (var key in settings) {
				settings[key].value = settings[key].default;
			}
		} else {
			settings = lssm.settings.get(LSS_FASTS5_STORAGE);
		}
		return settings;
	}
	
	function getSetting(name){
		var settings = getSettings();
		return settings[name].value;
	}

	function setSettings(){
		var settings = getSettings();
		for (var key in settings) {
			var formElement = $('#' + key);
			if (formElement.is(':checked')) {
				settings[key].value = true;
			} else {
				settings[key].value = false;
			}
		}

		lssm.settings.remove(LSS_FASTS5_STORAGE);
		lssm.settings.set(LSS_FASTS5_STORAGE, settings);
	}

	function statusDispatching()
	{
		if(getSetting('fastS5'))
		{
			var fms = document.getElementsByClassName('btn btn-xs btn-success');
			if (fms.length>0) {
				if (fms[0].innerText.match(I18n.t('lssm.statusDispatching.fms')))
					fms[0].click();
			}
		}
		var nextVehicle = document.getElementsByClassName('btn btn-success');
		var next_clicked = false;
		for (var i = 0;i<nextVehicle.length;i++)
		{
			if (nextVehicle.length > 0 && nextVehicle[i].innerText.match(I18n.t('lssm.statusDispatching.nextVehicle'))) {
				nextVehicle[i].click();
				next_clicked = true;
			}
		}
		
		var backToMission = document.getElementById('btn_back_to_mission');
		
		if (backToMission !== null && !next_clicked) {
			backToMission.click();
		}
	}
		
	function createSettings() {
		var settingsHTML = 	'<div id="' + lssm.config.prefix + '_appstore_statusDispatchingSettings" class="jumbotron" style="display: none">'+
							'<h3>' + I18n.t('lssm.statusDispatching.settingsTitle') + '</h3>'+
							'<div class="col-md-12"><div class="panel panel-default" style="display: inline-block;width:100%;"><div class="panel-body"><span class="pull-left"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="fastS5" name="statusDispatchingSetting_fasterS5" type="checkbox"><label class="onoffswitch-label" for="fastS5"></label></div></span><br><h4>' + I18n.t('lssm.statusDispatching.settingsAttr') + '</h4><small>' + I18n.t('lssm.statusDispatching.settingsAttrDesc') + '</small></div></div></div>'+
							'<button type="button" class="btn btn-success btn-sm" id="' + lssm.config.prefix + '_appstore_statusDispatchingSettings_close" aria-label="Close"><span aria-hidden="true">Schließen</span></button></div>';
							
		$('#map_outer').before(settingsHTML);
		if(getSetting('fastS5')){
			$('#fastS5').prop('checked', true);
		}
	}
	createSettings();
	
	function statusDispatching_show_settings() {
		$('#' + lssm.config.prefix + '_appstore_statusDispatchingSettings').show();
	}
	

	
	var button = $('<li><a id="statusDispatchingSettings" href="#"> Verbesserte S5</a></li>');
    $('#' + lssm.config.prefix + '_menu').append(button);
	
	    $('#statusDispatchingSettings').click(function () {
        statusDispatching_show_settings();
		
		$('#fastS5').change(function(){
            setSettings();
        });
		
		$('#' + lssm.config.prefix + '_appstore_statusDispatchingSettings_close').click(function () {
			$('#' + lssm.config.prefix + '_appstore_statusDispatchingSettings').hide();
		});
    });
	
	statusDispatching();
})();
