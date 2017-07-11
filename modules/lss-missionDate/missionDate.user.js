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
    console.log("MD 0: v123");
    var h1 = document.getElementById('missionH1');
    if (h1 !== null)
    {
        var einsatzdate = $('#missionH1').data('original-title');
        console.log("MD 1: "+einsatzdate);
        if(I18n.locale == 'de')
        {
            h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - '+I18n.t('lssm.missionDate.ago')+' <span id="einsatzdate"></span></small><br>');
            einsatzdate = einsatzdate.replace(/ Januar,/i, ' January 2017 ').replace(/ Februar,/i, ' February 2017 ').replace(/ März,/i, ' March 2017 ').replace(/ April,/i, 'April 2017 ').replace(/ Mai,/i, ' May 2017 ').replace(/ Juni,/i, ' June 2017 ').replace(/ Juli,/i, ' July 2017 ').replace(/ August,/i, 'August 2017 ').replace(/ September,/i, 'September 2017 ').replace(/ Oktober,/i, ' October 2017 ').replace(/ November,/i, 'November 2017 ').replace(/ Dezember,/i, ' December 2017 ');
        }
        else
        {
            h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - <span id="einsatzdate"></span> '+I18n.t('lssm.missionDate.ago')+'</small><br>');
            einsatzdate = einsatzdate.replace(/ Jan /i, ' January 2017 ').replace(/ Feb /i, ' February 2017 ').replace(/ Mar /i, ' March 2017 ').replace(/ Apr /i, ' April 2017 ').replace(/ May /i, ' May 2017 ').replace(/ Jun /i, ' June 2017 ').replace(/ Jul /i, ' July 2017 ').replace(/ Aug /i, ' August 2017 ').replace(/ Sep /i, ' September 2017 ').replace(/ Okt /i, ' October 2017 ').replace(/ Nov /i, ' November 2017 ').replace(/ Dec /i, ' December 2017 ');
        }            
        console.log("MD 2: "+einsatzdate);
        
        
        var currDate = new Date();
        console.log("MD 3: "+currDate);
        var tempOlddate = einsatzdate.replace(I18n.t('lssm.missionDate.time_postfix'),'').replace(I18n.t('lssm.missionDate.created'),'')+":00";
        console.log("MD 4: "+tempOlddate);        
        missionDate = new Date(tempOlddate);
        missionDate.setFullYear(currDate.getFullYear());
        console.log("MD 5: "+missionDate);
    
        var timeDiff = currDate.getTime() - missionDate.getTime();
        console.log("MD 6: "+timeDiff);
        
        if(timeDiff < 0)
        {
            tempOlddate = h1.getAttribute("data-original-title").replace(I18n.t('lssm.missionDate.time_postfix'),'').replace(I18n.t('lssm.missionDate.created'),'');
            console.log("MD 7: "+tmpOlddate);
            missionDate = new Date(tempOlddate);
            missionDate.setFullYear(currDate.getFullYear()-1);
            console.log("MD 8: "+missionDate);
            
            timeDiff = currDate.getTime() - missionDate.getTime();
            console.log("MD 9: "+timeDiff);
        }
        
        var minutes = (timeDiff/1000)/60;
        var hours = minutes/60;
        var days = hours/24;
        console.log("MD 10: "+days+" - "+hours+" - "+minutes);
                        
        var newDay = Math.floor(days);
        var newHour = Math.floor(hours % 24);
        var newMin = Math.floor(minutes % 60);
        console.log("MD 11: "+newDay+" - "+newHour+" - "+newMin);
        
        if (newDay >= 1)
            newDay = newDay + 'd ';
        else
            newDay = '';
        
        console.log("MD 12: "+newDay);
        
        if (I18n.locale == 'en')
        {
            var offset = currDate.getTimezoneOffset()/60;
            //Zahl 4, weil EST UTC+4 ist
            var newOffset = 4 - offset;
                newHour -= newOffset;
        }
        console.log("MD 13: "+newHour);
        
        if (newHour >= 1)
            newHour = newHour + 'h ';
        else
            newHour = '';
        
        console.log("MD 14: "+newHour);
        
        if (newMin < 0)
            newMin = 0;
        
        console.log("MD 15: "+newMin);
        
        if (document.getElementById('einsatzdate') !== null)
            document.getElementById('einsatzdate').innerHTML = newDay + newHour + newMin + ' min';
    }
})();
