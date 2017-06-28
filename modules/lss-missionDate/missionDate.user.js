(function() {
	
	I18n.translations.de['lssm']['missionDate'] = {
        ago: 'Vor',
		created: 'Einsatz eingegangen: ',
		time_postfix: ' Uhr'
    };

    I18n.translations.en['lssm']['missionDate'] = {
        ago: 'ago',
		created: 'Created at: ',
		time_postfix: ' Uhr'
    };
	
	I18n.translations.nl['lssm']['missionDate'] = {
        ago: 'geleden',
		created: 'Inzet begonnen: ',
		time_postfix: ' Uhr'
    };
	
    var h1 = document.getElementById('missionH1');
	if (h1 !== null)
    {
		var einsatzdate = h1.getAttribute("data-original-title");
		if(I18n.locale == 'de')
		{
			h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - '+I18n.t('lssm.missionDate.ago')+' <span id="einsatzdate"></span></small><br>');
		}
		else
		{
			h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - <span id="einsatzdate"></span> '+I18n.t('lssm.missionDate.ago')+'</small><br>');
		}
		
		
		var currDate = new Date();
		var tempOlddate = h1.getAttribute("data-original-title").replace(',', ' '+currDate.getFullYear()+',').replace(I18n.t('lssm.missionDate.time_postfix'),'').replace(I18n.t('lssm.missionDate.created'),'');
		missionDate = new Date(tempOlddate);
	
		var timeDiff = currDate.getTime() - missionDate.getTime();
		
		if(timeDiff < 0)
		{
			tempOlddate = h1.getAttribute("data-original-title").replace(',', ' '+currDate.getFullYear()-1+',').replace(I18n.t('lssm.missionDate.time_postfix'),'').replace(I18n.t('lssm.missionDate.created'),'');
			missionDate = new Date(tempOlddate);
			timeDiff = currDate.getTime() - missionDate.getTime();
		}
		
		var minutes = (timeDiff/1000)/60;
		var hours = minutes/60;
		var days = hours/24;
						
		var newDay = Math.floor(days);
		var newHour = Math.floor(hours % 24);
		var newMin = Math.floor(minutes % 60);
		
		if (newDay >= 1)
			newDay = newDay + 'd ';
		else
			newDay = '';
		
	    if (I18n.locale == 'en')
		{
		    var offset = currDate.getTimezoneOffset()/60;
		    //Zahl 4, weil EST UTC+4 ist
		    var newOffset = 4 - offset;
	    	    newHour -= newOffset;
    	}
	    
		if (newHour >= 1)
			newHour = newHour + 'h ';
		else
			newHour = '';
	    
		if (newMin < 0)
			newMin = 0;
		if (document.getElementById('einsatzdate') !== null)
			document.getElementById('einsatzdate').innerHTML = newDay + newHour + newMin + ' min';
	}
})();
