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

    if ($('#missionH1') !== null)
    {
        var einsatzdate = $('#missionH1').data('original-title');
        if(I18n.locale === 'de')
        {
            $('#missionH1').append(
                  '<small>' +
                      einsatzdate + ' - ' + I18n.t('lssm.missionDate.ago') +
                      '<span id="einsatzdate"></span>'+
                  '</small><br>'
            );

            einsatzdate = einsatzdate
                .replace(/ Januar,/i, ' January 2017 ').replace(/ Februar,/i, ' February 2017 ')
                .replace(/ März,/i, ' March 2017 ').replace(/ April,/i, 'April 2017 ')
                .replace(/ Mai,/i, ' May 2017 ').replace(/ Juni,/i, ' June 2017 ')
                .replace(/ Juli,/i, ' July 2017 ').replace(/ August,/i, 'August 2017 ')
                .replace(/ September,/i, 'September 2017 ').replace(/ Oktober,/i, ' October 2017 ')
                .replace(/ November,/i, 'November 2017 ').replace(/ Dezember,/i, ' December 2017 ');
        }
        else
        {
            $('#missionH1').append(
                  '<small>' +
                      einsatzdate + ' - '+
                      <span id="einsatzdate"></span> '+
                      I18n.t('lssm.missionDate.ago')+
                  '</small><br>'
            );

            einsatzdate = einsatzdate
                .replace(/ Jan /i, ' January 2017 ').replace(/ Feb /i, ' February 2017 ')
                .replace(/ Mar /i, ' March 2017 ').replace(/ Apr /i, ' April 2017 ')
                .replace(/ May /i, ' May 2017 ').replace(/ Jun /i, ' June 2017 ')
                .replace(/ Jul /i, ' July 2017 ').replace(/ Aug /i, ' August 2017 ')
                .replace(/ Sep /i, ' September 2017 ').replace(/ Okt /i, ' October 2017 ')
                .replace(/ Nov /i, ' November 2017 ').replace(/ Dec /i, ' December 2017 ');
        }

        var currDate = new Date();
        var tempOlddate = einsatzdate
        .replace(I18n.t('lssm.missionDate.time_postfix'),'')
        .replace(I18n.t('lssm.missionDate.created'),'')
        .replace('.','')+":00";

        var missionDate = new Date(tempOlddate);
        missionDate.setFullYear(currDate.getFullYear());

        var timeDiff = currDate.getTime() - missionDate.getTime();

        if(timeDiff < 0)
        {
            tempOlddate = h1.getAttribute("data-original-title")
                .replace(I18n.t('lssm.missionDate.time_postfix'),'')
                .replace(I18n.t('lssm.missionDate.created'),'');

            missionDate = new Date(tempOlddate);
            missionDate.setFullYear(currDate.getFullYear()-1);

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

        if (I18n.locale === 'en')
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
