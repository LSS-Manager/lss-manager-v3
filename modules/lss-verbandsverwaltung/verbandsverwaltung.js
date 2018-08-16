(($, win, I18n) => {
    if (!document.URL.match(/(leitstellenspiel|missionchief|meldkamerspel)(.de|.com)\/#?$/)) {
        return;
    }

    I18n.translations.de.lssm.verbandsverwaltung = {
        name: 'Verwaltung',
        allianceFunds: 'Verbandskasse',
        earnedCredits: 'Verdiente Credits',
        onlineUsers: 'Mitglieder online',
        allianceRank: 'Platz in der Verbandsliste',
        page: 'Seite',
        updateMessage: 'Werte aktualisieren sich<br>automatisch alle 5 Minuten.'
    };
    I18n.translations.en.lssm.verbandsverwaltung = {
        name: 'Administration',
        allianceFunds: 'Alliance Funds',
        earnedCredits: 'Earned Credits',
        onlineUsers: 'Members online',
        allianceRank: 'Rank in Alliancelist',
        page: 'Page',
        updateMessage: 'Values update automatically<br>every 5 minutes.'
    };
    I18n.translations.nl.lssm.verbandsverwaltung = {
        name: 'Toediening',
        allianceFunds: 'Teamkas',
        earnedCredits: 'Verdiende Credits',
        onlineUsers: 'Leden online',
        allianceRank: 'Rangschikking in Alliancelist',
        page: 'Pagina',
        updateMessage: 'Waarden worden elke<br>5 minuten automatisch bijgewerkt.'
    };

    function getAllianceFundsCredits() {
        let response = $.ajax({
            type: "GET",
            url: "./verband/kasse",
            async: false
        }).responseText;
        if ($(response).find('h1')[0]) {
            return parseInt($(response).find('h1')[0].innerText.replace(/\./g, "").replace(/,/g, ""));
        } else {
            return;
        }
    }

    function getAllianceName() {
        let response = $.ajax({
            type: "GET",
            url: "./verband",
            async: false
        }).responseText;
        if ($(response).find('.navbar-header a')[0]) {
            return $(response).find('.navbar-header a')[0].innerText;
        } else {
            return "?!";
        }
    }

    function getAllianceListEntry() {
        let allianceName = getAllianceName();
        let response = $.ajax({
            type: "GET",
            url: "./alliances?utf8=%E2%9C%93&caption=" + encodeURIComponent(allianceName),
            async: false
        }).responseText;
        if ($(response).find('table tbody tr:first')) {
            let datas = $(response).find('table tbody tr:first').children();
            return [datas[1], datas[2], datas[3]];
        } else {
            return ["", "", ""];
        }
    }

    function getOnlineUsers() {
        let online = 0;
        let response = $.ajax({
            type: "GET",
            url: "./verband/mitglieder?online=true",
            async: false
        }).responseText;
        let pageControl = $(response).find('table ~ ul.pagination');
        if (pageControl.length != 0) {
            for (let i = 1; i < pageControl.children().length - 1; i++) {
                if (i != pageControl.children().length - 2) {
                    online += 20;
                } else {
                    let response = $.ajax({
                        type: "GET",
                        url: "./verband/mitglieder?online=true&page=" + pageControl.children()[i].innerText,
                        async: false
                    }).responseText;
                    let rows = $(response).find('tbody tr');
                    online += rows.length;
                }
            }
        } else {
            let rows = $(response).find('tbody tr');
            online += rows.length;
        }
        return online;
    }

    function getAllianceRank(earnedCredits) {
        let page = 1;
        let rank = checkAllianceOnPage(page, earnedCredits);
        if (rank === null || rank === -1) {
            while (rank === null) {
                page += 100;
                rank = checkAllianceOnPage(page, earnedCredits);
            }
            rank = null;
            if (page > 100) {
                page -= 100;
            } else {
                page = 1;
            }
            while (rank === null) {
                page += 10;
                rank = checkAllianceOnPage(page, earnedCredits);
            }
            rank = null;
            if (page > 10) {
                page -= 10;
            } else {
                page = 1;
            }
            while (rank === null) {
                page += 1;
                rank = checkAllianceOnPage(page, earnedCredits);
            }
        }
        return {
            rank: rank,
            page: page
        }
    }

    function checkAllianceOnPage(page, earnedCredits) {
        let response = $.ajax({
            type: "GET",
            url: "./alliances?page=" + page,
            async: false
        }).responseText;
        let rank = (page - 1) * 20;
        if (response.match('/alliances/' + alliance_id)) {
            let counter = 0;
            $(response).find('tr').each(function() {
                if ($(this).html().match('/alliances/' + alliance_id + '"')) {
                    rank += counter;
                }
                counter += 1;
            });
            return rank;
        } else {
            if ($(response).find('table').length === 0) {
                return -1;
            }
            if (parseInt($($($(response).find('tr')[2]).children()[2]).html().replace(/\D/g, '')) < earnedCredits) {
                return -1;
            }
        }
        return null;
    }

    function updateValues() {
        let allianceFundsCredits = getAllianceFundsCredits();

        if (allianceFundsCredits) {
            $("#verbandsverwaltungAllianceFunds").html(I18n.t('lssm.verbandsverwaltung.allianceFunds') + ': ' + allianceFundsCredits.toLocaleString() + ' Credits');
        } else {
            $("#verbandsverwaltungAllianceFunds").remove();
        }

        let allianceListEntry = getAllianceListEntry();

        let earnedCredits = parseInt(allianceListEntry[1].innerText.replace(/[\D]/g, ''));
        $('#verbandsverwaltungAllianceCredits').html(I18n.t('lssm.verbandsverwaltung.earnedCredits') + ': ' + earnedCredits.toLocaleString() + ' Credits');

        let allianceRankList = getAllianceRank(earnedCredits);
        let allianceRank = allianceRankList.rank;
        let allianceRankPage = allianceRankList.page;
        $('#verbandsverwaltungAllianceRank').html('<a href="/alliances?page=' + allianceRankPage + '" class="lightbox-open">' + I18n.t('lssm.verbandsverwaltung.allianceRank') + ': ' + allianceRank.toLocaleString() + ' (' + I18n.t('lssm.verbandsverwaltung.page') + ' ' + allianceRankPage + ')</a>');

        let users = parseInt(allianceListEntry[2].innerText.replace(/[\D]/g, ''));
        let onlineUsers = getOnlineUsers();
        $('#verbandsverwaltungUsers').html(I18n.t('lssm.verbandsverwaltung.onlineUsers') + ': ' + onlineUsers.toLocaleString() + '/' + users + ' (' + Math.round((100 / users) * onlineUsers) + '%)');
    }

    let markup = '<li role="presentation"  id="verbandsverwaltung" class="alliance_true"><a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">' + I18n.t('lssm.verbandsverwaltung.name') + '&nbsp;<b class="caret"></b></a><ul id="verbandsverwaltungDropdown"><li role="presentation" id="verbandsverwaltungUsers">Mitglieder online: 0</li><li role="presentation" id="verbandsverwaltungAllianceFunds">Verbandskasse: 0 Credits</li><li role="presentation" id="verbandsverwaltungAllianceCredits">Verdiente Credits: 0 Credits</li><li role="presentation" id="verbandsverwaltungAllianceRank">Platz in der Verbandsliste: 0</li><li class="divider" role="presentation"></li><li role="presentation">' + I18n.t('lssm.verbandsverwaltung.updateMessage') + '</li></ul></li>';

    $("#menu_alliance ~ ul li:first").before(markup);

    $('#verbandsverwaltungDropdown').hide();

    $('#verbandsverwaltung').hover(function() {
        $('#verbandsverwaltungDropdown').toggle();
    });

    $('#verbandsverwaltungDropdown').css('position', 'absolute');
    $('#verbandsverwaltungDropdown').css('z-index', '999');
    $('#verbandsverwaltungDropdown').css('background', '#BA1D1A');
    $('#verbandsverwaltungDropdown').css('width', '100%');
    $('#verbandsverwaltungDropdown').css('padding-top', '5px');
    $('#verbandsverwaltungDropdown').css('padding-bottom', '5px');
    $('#verbandsverwaltungDropdown').css('border', '1px solid black');

    updateValues();
    setInterval(updateValues, 300000);
})($, window, I18n);
