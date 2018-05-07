(function() {
    I18n.translations.de.lssm.missionDate = {
        ago: 'Vor',
        months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        dateRegex: /([0-9]{2})\. (.*), ([0-9]{2}):([0-9]{2})/i,
        toggle: 'Uhrzeit in Liste anzeigen/ausblenden'
    };

    I18n.translations.en.lssm.missionDate = {
        ago: 'ago',
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
        toggle: 'Toggle Date and Time in Mission-List'
    };

    I18n.translations.nl.lssm.missionDate = {
        ago: 'geleden',
        months: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
        toggle: 'Schakel datum en tijd in Missie-lijst'
    };

    function parseMissionDate(dateString) {
        var matches = dateString.match(I18n.t('lssm.missionDate.dateRegex'));
        var day = matches[1];
        var month = matches[2];
        var hour = matches[3];
        var minute = matches[4];

        // Transform month name to numeric month
        var months = I18n.t("lssm.missionDate.months")
        month = months.indexOf(month);

        var today = new Date();

        var year = today.getFullYear();

        var date = new Date(year, month, day, hour, minute, 0, 0);

        // Make plausibility check. If diff is negative is has to be at least the year before.
        if (today.getTime() - date.getTime() < 0) {
            date.setFullYear(date.getFullYear() - 1);
        }
        return date;
    }

    // Just execute the script when there is a mission Headline
    var missionDate = $('#missionH1').length > 0 ? $('#missionH1').data('original-title') : null;
    if (missionDate != null) {
        // Parse mission date to Date() object
        var parsedMissionDate = parseMissionDate(missionDate);

        var today = new Date();
        var timeDiff = today.getTime() - parsedMissionDate.getTime();

        var minutes = (timeDiff / 1000) / 60;
        var hours = minutes / 60;
        var days = hours / 24;

        var newDay = Math.floor(days);
        var newHour = Math.floor(hours % 24);
        var newMin = Math.floor(minutes % 60);

        var timeGone = "";
        if (newDay > 0)
        timeGone += String.format(' {0} d', newDay);

        if (I18n.locale === 'en') {
            var offset = today.getTimezoneOffset() / 60;
            // Zahl 5, weil EST UTC+5 ist
            var newOffset = 5 - offset;
            newHour -= newOffset;
        }

        if (newHour > 0) {
            timeGone += String.format(' {0} h', newHour);
        }

        if (newMin > 0) {
            timeGone += String.format(' {0} min', newMin);
        }

        var markup;
        if (I18n.locale === 'de') {
            markup = '{0} - <span>{1} {2}</span>';
        } else {
            markup = '{0} - <span>{2} {1}</span>';
        }

        markup = String.format(markup, missionDate, I18n.t("lssm.missionDate.ago"), timeGone)
        $('#missionH1').after('<div><small>' + markup + '</small></div>');
    }

    // Write Times in Missionlist
    let writeTimes = function() {
        $('a[id*="mission_caption"]').each(function() {
            let einsatz = $(this)[0];
            let einsatzId = einsatz.id.replace(/\D*/, '');
            if(!$('#mission_time_'+einsatzId)[0]){
                let response = $.ajax({
                    type: "GET",
                    url: "./missions/"+einsatzId,
                    async: false
                }).responseText;
                if ($(response).find('h3')[0]) {
                    $(einsatz.parentElement).append('<div class="pull-right missionTime" id="mission_time_'+einsatzId+'"><small>'+$(response).find('h3')[0].title.replace('Einsatz eingegangen: ', '')+'</small></div>');
                }
            }
        });
    };

    let missionMarkerAddOrig = missionMarkerAdd;

    showTimes = false;

    $('#btn-group-mission-select').append('<a href="#" class="btn btn-danger btn-xs" id="toggleMissionTime" title="'+I18n.t('lssm.missionDate.toggle')+'"><i class="glyphicon glyphicon-hourglass"></i></a>');

    if (showTimes == true) {
        writeTimes();
    }

    $('#toggleMissionTime').click(function(){
        if ($(this).hasClass('btn-success')) {
            $(this).removeClass('btn-success').addClass('btn-danger');
            showTimes = false;
            $('.missionTime').each(function() {
                $(this).hide();
            });
        } else {
            $(this).removeClass('btn-danger').addClass('btn-success');
            showTimes = true;
            writeTimes();
            $('.missionTime').each(function() {
                $(this).show();
            });
        }
    });

    missionMarkerAdd = function(data){
        if (showTimes == true) {
            writeTimes();
            missionMarkerAddOrig(data);
        }
    };


})();
