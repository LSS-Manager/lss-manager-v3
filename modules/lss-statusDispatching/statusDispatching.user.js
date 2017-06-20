(function(){

    I18n.translations.de['lssm']['statusDispatching'] = {
        fms: 'Sprechwunsch bearbeiten',
        nextVehicle: 'Zum nächsten Fahrzeug im Status 5',
        backToAlarm: 'Zurück zum Einsatz'
    };

    I18n.translations.en['lssm']['statusDispatching'] = {
        fms: 'Transport Requested',
        nextVehicle: 'Go to the next vehicle with a transport request',
        backToAlarm: 'Back to mission'
    };

    I18n.translations.nl['lssm']['statusDispatching'] = {
        fms: 'Spraakaanvraag beantwoorden',
        nextVehicle: 'Naar het volgende status 7 voertuig',
        backToAlarm: 'Naar het incident'
    };

    var fms = document.getElementsByClassName('btn btn-xs btn-success');
    if (fms.length>0) {
        if (fms[0].innerText.match(I18n.t('lssm.statusDispatching.fms')))
            fms[0].click();
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
})();