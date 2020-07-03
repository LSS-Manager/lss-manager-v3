/* global I18n, $ */
(function() {
    I18n.translations.de_DE.lssm.missionDate = {
        ago: 'Vor',
        months: [
            'Januar',
            'Februar',
            'März',
            'April',
            'Mai',
            'Juni',
            'Juli',
            'August',
            'September',
            'Oktober',
            'November',
            'Dezember',
        ],
        dateRegex: /([0-9]{2})\. (.*), ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.en_US.lssm.missionDate = {
        ago: 'ago',
        months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.cs_CZ.lssm.missionDate = {
        ago: 'před',
        months: [
            'led',
            'úno',
            'bře',
            'dub',
            'kvě',
            'červen',
            'červenec',
            'srp',
            'září',
            'říj',
            'list',
            'pro',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.es_ES.lssm.missionDate = {
        ago: 'hace',
        months: [
            'Ene',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dic',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.pt_PT.lssm.missionDate = {
        ago: 'atrás',
        months: [
            'Jan',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dic',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.pl_PL.lssm.missionDate = {
        ago: 'temu',
        months: [
            'Sty',
            'Lut',
            'Mar',
            'Kwi',
            'Maj',
            'Cze',
            'Lip',
            'Sie',
            'Wrz',
            'Paź',
            'Lis',
            'Gru',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.sv_SE.lssm.missionDate = {
        ago: 'sedan',
        months: [
            'jan',
            'feb',
            'mar',
            'apr',
            'maj',
            'jun',
            'jul',
            'aug',
            'sep',
            'oct',
            'nov',
            'dec',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.da_DK.lssm.missionDate = {
        ago: 'siden',
        months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.nb_NO.lssm.missionDate = {
        ago: 'siden',
        months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.it_IT.lssm.missionDate = {
        ago: 'fa',
        months: [
            'Gen',
            'Feb',
            'Mar',
            'Apr',
            'Mag',
            'Giu',
            'Lug',
            'Ago',
            'Sett',
            'Ott',
            'Nov',
            'Dic',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.tr_TR.lssm.missionDate = {
        ago: 'Önce',
        months: [
            'Oca',
            'şub',
            'mar',
            'nis',
            'may',
            'hazi',
            'temm',
            'ağu',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.fr_FR.lssm.missionDate = {
        ago: 'il y a',
        months: [
            'Janv.',
            'Fév',
            'Mar',
            'Avr',
            'Mai',
            'Juin',
            'Juil',
            'Août',
            'Sep',
            'Oct',
            'Nov',
            'Déc.',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.ru_RU.lssm.missionDate = {
        ago: 'назад',
        months: [
            'Янв',
            'Фев',
            'Мар',
            'Апр',
            'Май',
            'Июнь',
            'Июль',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    I18n.translations.nl_NL.lssm.missionDate = {
        ago: 'geleden',
        months: [
            'jan',
            'feb',
            'mrt',
            'apr',
            'mei',
            'jun',
            'jul',
            'aug',
            'sep',
            'okt',
            'nov',
            'dec',
        ],
        dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i,
    };

    function parseMissionDate(dateString) {
        let matches = dateString.match(I18n.t('lssm.missionDate.dateRegex'));
        let day = matches[1];
        let month = matches[2];
        let hour = matches[3];
        let minute = matches[4];

        // Transform month name to numeric month
        let months = I18n.t('lssm.missionDate.months');
        month = months.indexOf(month);

        let today = new Date();

        let year = today.getFullYear();

        let date = new Date(year, month, day, hour, minute, 0, 0);

        // Make plausibility check. If diff is negative is has to be at least the year before.
        if (today.getTime() - date.getTime() < 0) {
            date.setFullYear(date.getFullYear() - 1);
        }
        return date;
    }

    // Just execute the script when there is a mission Headline
    let missionDate =
        $('#missionH1').length > 0
            ? $('#missionH1').data('original-title')
            : null;
    if (missionDate != null) {
        // Parse mission date to Date() object
        let parsedMissionDate = parseMissionDate(missionDate);

        let today = new Date();
        let timeDiff = today.getTime() - parsedMissionDate.getTime();

        let minutes = timeDiff / 1000 / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        let newDay = Math.floor(days);
        let newHour = Math.floor(hours % 24);
        let newMin = Math.floor(minutes % 60);

        let timeGone = '';
        if (newDay > 0) timeGone += String.format(' {0} d', newDay);

        if (I18n.locale === 'en_US') {
            let offset = today.getTimezoneOffset() / 60;
            // Zahl 5, weil EST UTC+5 ist
            let newOffset = 5 - offset;
            newHour -= newOffset;
        }
        if (I18n.locale === 'en_GB') {
            let offset = today.getTimezoneOffset() / 60;
            // Zahl 1, weil EST UTC+1 ist
            let newOffset = 0 - offset;
            newHour -= newOffset;
        }
        if (I18n.locale === 'pt_PT') {
            let offset = today.getTimezoneOffset() / 60;
            // Zahl 1, weil EST UTC+1 ist
            let newOffset = 1 - offset;
            newHour -= newOffset;
        }
        if (I18n.locale === 'ru_RU') {
            let offset = today.getTimezoneOffset() / 60;
            // Zahl 1, weil EST UTC+1 ist
            let newOffset = 3 - offset;
            newHour -= newOffset;
        }
        if (I18n.locale === 'tr_TR') {
            let offset = today.getTimezoneOffset() / 60;
            // Zahl 1, weil EST UTC+1 ist
            let newOffset = 3 - offset;
            newHour -= newOffset;
        }
        if (I18n.locale === 'en_AU') {
            let offset = today.getTimezoneOffset() / 60;
            // Zahl 1, weil EST UTC+1 ist
            let newOffset = 11 - offset;
            newHour -= newOffset;
        }

        if (newHour > 0) {
            timeGone += String.format(' {0} h', newHour);
        }

        if (newMin > 0) {
            timeGone += String.format(' {0} min', newMin);
        }

        let markup;
        if (I18n.locale === 'de_DE') {
            markup = '{0} – {1} {2}';
        } else {
            markup = '{0} – {2} {1}';
        }

        markup = String.format(
            markup,
            missionDate
                .trim()
                .replace(/^.*?:/, '')
                .trim(),
            I18n.t('lssm.missionDate.ago'),
            timeGone
        );
        $('#mission_general_info > small').append(`&nbsp;|&nbsp;${markup}`);
    }
})();
