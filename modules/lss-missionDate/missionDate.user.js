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
        var einsatzdate = $('#missionH1').data('original-title');
        console.log("MD 1: "+einsatzdate);
        if(I18n.locale == 'de')
        {
            h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - '+I18n.t('lssm.missionDate.ago')+' <span id="einsatzdate"></span></small><br>');
            einsatzdate = einsatzdate.replace(/ Januar /i, ' January ').replace(/ Februar /i, ' February ').replace(/ März /i, ' March ').replace(/ Mai /i, ' May ').replace(/ Juni /i, ' June ').replace(/ Juli /i, ' July ').replace(/ Oktober /i, ' October ').replace(/ Dezember /i, ' December ');
        }
        }
        else
        {
            h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - <span id="einsatzdate"></span> '+I18n.t('lssm.missionDate.ago')+'</small><br>');
            einsatzdate = einsatzdate.replace(/ Jan /i, ' January ').replace(/ Feb /i, ' February ').replace(/ Mar /i, ' March ').replace(/ Apr /i, ' April ').replace(/ May /i, ' May ').replace(/ Jun /i, ' June ').replace(/ Jul /i, ' July ').replace(/ Aug /i, ' August ').replace(/ Sep /i, ' September ').replace(/ Okt /i, ' October ').replace(/ Nov /i, ' November ').replace(/ Dec /i, ' December ');
        }            
        console.log("MD 2: "+einsatzdate);
        
        
        var currDate = new Date();
        console.log("MD 3: "+currDate);
        var tempOlddate = einsatzdate.replace(I18n.t('lssm.missionDate.time_postfix'),'').replace(I18n.t('lssm.missionDate.created'),'');
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
