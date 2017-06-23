(function() {
	
	I18n.translations.de['lssm']['missionDate'] = {
        ago: 'Vor'
    };

    I18n.translations.en['lssm']['missionDate'] = {
        ago: 'ago'
    };
	
	I18n.translations.nl['lssm']['missionDate'] = {
        ago: 'geleden'
    };
	
    var h1 = document.getElementById('missionH1');
	if (h1 !== null)
    {
		var einsatzdate = h1.getAttribute("data-original-title");
		var a;
		if(I18n.locale == 'de')
		{
			h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - '+I18n.t('lssm.missionDate.ago')+' <span id="einsatzdate"></span></small><br>');
			a = einsatzdate.replace(/[a-zA-Z]/ig,'').replace(': ','').replace('.','').replace(' , ',':').trim().split(':');
		}
		else
		{
			h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - <span id="einsatzdate"></span> '+I18n.t('lssm.missionDate.ago')+'</small><br>');
			a = einsatzdate.replace(/[a-zA-Z]/ig,'').replace(': ','').replace('  ',':').trim().split(':');
		}

		var oldDay = a[0];
		var oldHour = a[1];
		var oldMin = a[2];

		var strcount;
		var x = new Date();
		var day = x.getDate();
		var hour = x.getHours();
		var min = x.getMinutes();
		var newDay, newHour, newMin;

		if(oldDay > day)
		{
			if(hour > oldHour)
			{
				if(oldDay == 31)
					newDay = day;
				if(oldDay == 30 && day >= 1)
					newDay = day+1;
			}
		}
		else {
			if(oldHour > hour)
			{
				if(oldMin > min)
					newDay = (day-oldDay)-1;
			}
			newDay = day-oldDay;
		}
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

		if (newDay >= 1)
			newDay = newDay + 'd ';
		else
			newDay = '';
		
		if (newHour >= 1)
			newHour = newHour + 'h ';
		else
			newHour = '';

	    	if (I18n.locale == 'en')
		{
		    var offset = x.getTimezoneOffset()/60;
	    	    newHour += offset;
    		}
	    
		if (newMin < 0)
			newMin = 0;
		if (document.getElementById('einsatzdate') !== null)
			document.getElementById('einsatzdate').innerHTML = newDay + newHour + newMin + ' min';
	}
})();
