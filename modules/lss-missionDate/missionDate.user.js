(function() {
    I18n.translations.de['lssm']['missionDate'] = {
        ago: 'Vor',
        dateRegex: /([0-9]{2})\. (.*), ([0-9]{2}):([0-9]{2})/i
    };

    I18n.translations.en['lssm']['missionDate'] = {
        ago: 'ago',
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i
    };

    I18n.translations.nl['lssm']['missionDate'] = {
        ago: 'geleden',
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i
    };

    function parseMissionDate(dateString){
    	var matches = dateString.match(I18n.t('lssm.missionDate.dateRegex'));
    	var day = matches[1];
    	var month = matches[2];
    	var hour = matches[3];
    	var minute = matches[4];
    	if(I18n.currentLocale() === "de"){
    		months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    		month = months.indexOf(month);
    	} else if(I18n.currentLocale() === "nl"){
    		months = ['jan', 'feb', 'maart', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    		month = months.indexOf(month);
    	} else if(I18n.currentLocale() === "en"){
    		months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    		month = months.indexOf(month);
    	}
    	var today = new Date();
    	var year = today.getFullYear();
    	return new Date(year, month, day, hour, minute, 0, 0);
    }

    // Just execute the script when there is a mission Headline
    var missionDate = $('#missionH1').length > 0 ? $('#missionH1').data('original-title') : null;
    if(missionDate != null){
    	// Parse mission date to Date() object
    	var parsedMissionDate = parseMissionDate(missionDate);
    	console.log(parsedMissionDate);

    	var today = new Date();
    	var timeDiff = today.getTime() - parsedMissionDate.getTime();
        if(timeDiff < 0) {
        	parsedMissionDate.setFullYear(currDate.getFullYear()-1);
            timeDiff = today.getTime() - parsedMissionDate.getTime();
        }

        var minutes = (timeDiff/1000)/60;
        var hours = minutes/60;
        var days = hours/24;

        var newDay = Math.floor(days);
        var newHour = Math.floor(hours % 24);
        var newMin = Math.floor(minutes % 60);

        var timeGone = "";
        if (newDay > 0)
        	timeGone += ' ' + newDay + 'd ';

        if (I18n.locale === 'en'){
            var offset = today.getTimezoneOffset()/60;
            // Zahl 4, weil EST UTC+4 ist
            var newOffset = 4 - offset;
            newHour -= newOffset;
        }

        if (newHour > 0){
        	timeGone += newHour + 'h '        	
        }
        
        if (newMin > 0){
        	timeGone += ' ' + newMin + ' min'        	
        }

        var markup;
        if (I18n.locale === 'de'){
            markup = '<small>' + missionDate + ' - ' + I18n.t("lssm.missionDate.ago");
            markup += '<span>' + timeGone + '</span></small>';	
        } else {
            markup = '<small>' + missionDate + ' - ';
            markup += '<span>' + timeGone + '</span>' + I18n.t("lssm.missionDate.ago") + '</small>';
        }

        $('#missionH1').after('<div>' + markup + '</div>');
    }
})();
