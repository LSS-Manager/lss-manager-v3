(($, win, I18n) => {
    I18n.translations.de.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9\.]*)? verdiente Credits(.*)/i,
        ranks: {
            0: 'Anwärter(in)',
            200: 'Feuerwehrmann / Feuerwehrfrau',
            10000: 'Oberfeuerwehrmann / Oberfeuerwehrfrau',
            100000: 'Hauptfeuerwehrmann / Hauptfeuerwehrfrau',
            1000000: 'Stv. Gruppenführer(in)',
            5000000: 'Gruppenführer(in)',
            10000000: 'Stv. Zugführer(in)',
            20000000: 'Zugführer(in)',
            50000000: 'Stv. Wehrführer(in)',
            100000000: 'Wehrführer(in)',
            200000000: 'Stv. Kreisbrandmeister(in)',
            500000000: 'Kreisbrandmeister(in)',
            1000000000: 'Stv. Landesbrandmeister(in)',
            2000000000: 'Landesbrandmeister(in)',
            5000000000: 'Ehrenmitglied'
        },
        texts:{
            dropdownName: 'Creditserweiterung',
            creditsOverview: 'Credits-Übersicht',
            coinsProtokoll: 'Coinsprotokoll',
            earnedCredits: 'Gesamtcredits',
            creditsToNextRank: 'Credits zum nächsten Dienstgrad',
            updateMessage: 'Werte aktualisieren',
            allianceFunds: 'Verbandskasse'
        }
    };
    I18n.translations.en.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? earned Credits.*/i,
        ranks: {
            0: 'Probie',
            200: 'Firefighter',
            10000: 'Senior Firefighter',
            100000: 'Fire Apparatus Operator',
            1000000: 'Lieutenant',
            5000000: 'Captain',
            20000000: 'Staff Captain',
            50000000: 'Battalion Chief',
            1000000000: 'Division Chief',
            2000000000: 'Deputy Chief',
            5000000000: 'Fire Chief'
        },
        texts:{
            reloadMessage: 'Please open your profile<br>and reload the website!',
            dropdownName: 'Creditsextension',
            creditsOverview: 'Overview',
            coinsProtokoll: 'Coins List',
            earnedCredits: 'Totally earned Credits',
            creditsToNextRank: 'Credits to next rank',
            updateMessage: 'Values are updated<br>all 5 minutes.',
            allianceFunds: 'Alliance Funds'
        }
    };
    I18n.translations.nl.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9]\.)? verdiende Credits.*/i,
        ranks: {
            0: 'Aspirant',
            200: 'Brandwacht (Manschap A)',
            10000: 'Hoofdbrandwacht (Manschap B)',
            100000: 'Brandmeester',
            1000000: 'Hoofdbrandmeester',
            5000000: 'Commandeur',
            50000000: 'Adjunct-Hoofdcommandeur',
            500000000: 'Hoofdcommandeur',
            5000000000: 'Erelid'
        },
        texts:{
            reloadMessage: 'Open uw profiel<br>open en de website herladen!',
            dropdownName: 'Kredietexpansie',
            creditsOverview: 'Overzicht statistiek',
            coinsProtokoll: 'Coin protocol',
            earnedCredits: 'Totale studiepunten',
            creditsToNextRank: 'Credits voor de volgende rang',
            updateMessage: 'Waarden actualiseren<br>om de 5 minuten.',
            allianceFunds: 'Teamkas'
        }
    };

    function getCreditsOfNextRank(earnedCredits){
        let ranks = I18n.t('lssm.creditserweiterung.ranks');
        for (var key in ranks) {
            if(earnedCredits > key){
                continue;
            } else {
                return key;
            }
        }
        return null;
    }

    function getEarnedCredits() {
        let response = $.ajax({
            type: "GET",
            url: $('#navbar_profile_link').attr('href'),
            async: false
        }).responseText;
        let results = $(response).find('.page-header').text().trim().match(I18n.t('lssm.creditserweiterung.earnedCreditsRegEx'));
        return parseInt(results[1].replace(/\./g,'').replace(/,/g, '')); // Delete all "." and "," as these are kilo-splitting-chars of DE, NL and EN
    }

    function getAlianceFundsCredits() {
        let response = $.ajax({
            type: "GET",
            url: "./verband/kasse",
            async: false
        }).responseText;
        return parseInt($(response).find('h1')[0].innerText.replace(/\./g, "").replace(/,/g, ""));
    }

    function updateCreditsTry() {
        alert("Test");
        updateCredits();
    }

    function updateCredits() {
        let earnedCredits = getEarnedCredits();
        let creditsOfNextRank = getCreditsOfNextRank(earnedCredits);
        let nextRank = I18n.t('lssm.creditserweiterung.ranks')[creditsOfNextRank];
        var creditsToNextRank = creditsOfNextRank - earnedCredits;
        let allianceFundsCredits = getAlianceFundsCredits();

        let markup = '<li><a id="menu_creditsverwaltung" class="dropdown_toggle href="#" role="button" data-toggle="dropdown" aria-expanded="false">';
        markup += '<img id="ls-credits-money-img" style="height: 19px; width: 19px; cursor: pointer;" src="';
        markup += lssm.getlink("/modules/lss-creditserweiterung/img/icons8-money-box-150.png") + '">';
        markup += '<span class="visible-xs">' + I18n.t('lssm.creditserweiterung.texts.dropdownName') + '</span>';
        markup += '<b class="caret"></b></a><ul class="dropdown-menu" role="menu" aria-labelledy="menu_Creditsverwaltung">';
        markup += '<li role="presentation" id="creditserweiterungCredits"></li>';
        markup += '<li id="creditsOverview" role="presentation"><a href="/credits/overview" class="lightbox-open" target="blank">' + I18n.t('lssm.creditserweiterung.texts.creditsOverview') + '</a></li>';
        markup += '<li role="presentation" id="creditserweiterungCoins"></li>';
        markup += '<li role="presentation"><a href="/coins/list" class="lightbox-open" target="blank">' + I18n.t('lssm.creditserweiterung.texts.coinsProtokoll') + '</a></li>';
        markup += '<li class="divider" role="presentation"></li><li role="presentation"><a>' + I18n.t('lssm.creditserweiterung.texts.earnedCredits') + ': ' + earnedCredits.toLocaleString() + '</a>';
        markup += '<a>' + I18n.t('lssm.creditserweiterung.texts.creditsToNextRank') + '<br>(' + nextRank + '):<br>'+ creditsToNextRank.toLocaleString() + '</a></li>';
        if (allianceFundsCredits){
            markup += '<li class="divider" role="presentation"></li><li><a href="./verband/kasse" class="lightbox-open">';
            markup += I18n.t('lssm.creditserweiterung.texts.allianceFunds') + ': ' + allianceFundsCredits.toLocaleString() + ' Credits' + '</a></li>';
        }
        markup += '<li class="divider" role="presentation"></li><li role="presentation"><a><button style="width: 100%;" class="btn btn-success navbar-btn btn-sm">' + I18n.t('lssm.creditserweiterung.texts.updateMessage') + '</button></a></li></ul></li>';

        $('#menu_creditsverwaltung').remove();
        $('#lssm_dropdown').before(markup);
        $('#creditserweiterungCredits').append($('#navigation_top'));
        $('#creditserweiterungCoins').append($('#coins_top'));
    }

    updateCredits();
    creditsUpdate = setInterval(updateCredits, 300000);
})($, window, I18n);
