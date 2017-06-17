(function() {
	
	I18n.translations.de['lssm']['missionDate'] = {
        ago: 'Vor'
    };

    I18n.translations.de['lssm']['missionDate'] = {
        ago: 'ago'
    };
	
	I18n.translations.de['lssm']['missionDate'] = {
        ago: 'geleden'
    };
	
    var h1 = document.getElementById('missionH1');
    var einsatzdate = h1.getAttribute("data-original-title");
	var a;
	if(I18n.locale == 'de')
	{
		h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - '+I18n.t('lssm.missionDate.ago')+' <span id="einsatzdate"></span></small><br>');
		a = einsatzdate.replace(/[a-zA-Z]/ig,'').replace(': ','').replace('.','').replace(' , ',':').trim().split(':');
	}
	else
	{	
		h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - <span id="einsatzdate"></span></small>'+I18n.t('lssm.missionDate.ago')+'<br>');
		a = einsatzdate.replace(/[a-zA-Z]/ig,'').replace(': ','').replace('  ',':').trim().split(':');
	}	

    
    var oldHour = a[1];
    var oldMin = a[2];

    var strcount;
    var x = new Date();
    var hour = x.getHours();
    var min = x.getMinutes();
    var newHour, newMin;

    if (oldHour > hour) {
        newHour = (24-oldHour)+hour;
    }
    else {
        newHour = hour-oldHour;
    }

    if (oldMin > min) {
        newMin = (60 - oldMin) + min;
        newHour--;
    }
    else {
        newMin = min-oldMin;
    }

    if (newHour >= 1)
        newHour = newHour + 'h ';
    else
        newHour = '';

    if (newMin < 0)
        newMin = 0;
    if (document.getElementById('einsatzdate') !== null)
        document.getElementById('einsatzdate').innerHTML = newHour + newMin + ' min';
    
})();