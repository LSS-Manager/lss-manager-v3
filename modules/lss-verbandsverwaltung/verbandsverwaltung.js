(($, win, I18n) => {
    if (!document.URL.match(/(leitstellenspiel|missionchief|meldkamerspel)(.de|.com)\/#?$/)) {
        return;
    }

    I18n.translations.de.lssm.verbandsverwaltung = {
        name: 'Verwaltung',
        allianceFunds: 'Verbandskasse',
        allianceCredits: 'Verdiente Credits',
        users: 'Mitglieder',
        onlineUsers: 'Mitglieder online',
        allianceRank: 'Platz in der Verbandsliste',
        page: 'Seite',
        updateMessage: 'Werte aktualisieren sich<br>automatisch alle 5 Minuten.',
        chartErr: 'Konnte Grafik "{{chart}}" nicht laden!'
    };
    I18n.translations.en.lssm.verbandsverwaltung = {
        name: 'Administration',
        allianceFunds: 'Alliance Funds',
        allianceCredits: 'Earned Credits',
        users: 'Members',
        onlineUsers: 'Members online',
        allianceRank: 'Rank in Alliancelist',
        page: 'Page',
        updateMessage: 'Values update automatically<br>every 5 minutes.',
        chartErr: 'Could not load chart "{{chart}}"!'
    };
    I18n.translations.nl.lssm.verbandsverwaltung = {
        name: 'Toediening',
        allianceFunds: 'Teamkas',
        allianceCredits: 'Verdiende Credits',
        users: 'Leden',
        onlineUsers: 'Leden online',
        allianceRank: 'Rangschikking in Alliancelist',
        page: 'Pagina',
        updateMessage: 'Waarden worden elke<br>5 minuten automatisch bijgewerkt.',
        chartErr: 'Kon de grafiek "{{chart}" niet laden!'
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
            $(response).find('tr').each(function () {
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
        let date = new Date();
        date.setMilliseconds(0);
        date.setSeconds(0);

        let time = date.getTime();

        if (!localStorage["lssmVerbandsverwaltung_" + alliance_id]) {
            localStorage["lssmVerbandsverwaltung_" + alliance_id] = "{}";
        }

        let storage = JSON.parse(localStorage["lssmVerbandsverwaltung_" + alliance_id]);

        let allianceFundsCredits = getAllianceFundsCredits();

        if (allianceFundsCredits) {
            if (!storage.allianceFunds) {
                storage.allianceFunds = {};
            }
            $("#verbandsverwaltungAllianceFunds").html('<a href="/verband/kasse" class="lightbox-open">' + I18n.t('lssm.verbandsverwaltung.allianceFunds') + ': ' + allianceFundsCredits.toLocaleString() + ' Credits</a>');
            storage.allianceFunds[time] = allianceFundsCredits;

            let allianceFundsData = [];

            for (let key in storage.allianceFunds) {
                allianceFundsData.push([parseInt(key), storage.allianceFunds[key]]);
            }

            try {
                $('#allianceFundsChart').highcharts({
                    chart: {
                        width: $('#alliance_li ul').width() - 10,
                        height: $('#alliance_li ul').width() - 10
                    },
                    title: {
                        text: I18n.t('lssm.verbandsverwaltung.allianceFunds')
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            hour: '%I %p',
                            minute: '%H:%M'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [
                        {
                            name: I18n.t('lssm.verbandsverwaltung.allianceFunds'),
                            data: allianceFundsData
                        }
                    ]
                });
            } catch (err) {
                $('#allianceFundsChart').html(I18n.t('lssm.verbandsverwaltung.chartErr').replace(/{{chart}}/, I18n.t('lssm.verbandsverwaltung.allianceFunds')));
            }
        } else {
            if ($("#verbandsverwaltungAllianceFunds")) {
                $("#verbandsverwaltungAllianceFunds").remove();
            }
            if ($("#allianceFundsChart")) {
                $("#allianceFundsChart").remove();
            }
        }

        let allianceListEntry = getAllianceListEntry();

        if (!storage.allianceCredits) {
            storage.allianceCredits = {};
        }

        let allianceCredits = parseInt(allianceListEntry[1].innerText.replace(/[\D]/g, ''));
        $('#verbandsverwaltungAllianceCredits').html(I18n.t('lssm.verbandsverwaltung.allianceCredits') + ': ' + allianceCredits.toLocaleString() + ' Credits');

        storage.allianceCredits[time] = allianceCredits;

        let allianceCreditsData = [];

        for (let key in storage.allianceCredits) {
            allianceCreditsData.push([parseInt(key), storage.allianceCredits[key]]);
        }

        try {

            $('#allianceCreditsChart').highcharts({
                chart: {
                    width: $('#alliance_li ul').width() - 10,
                    height: $('#alliance_li ul').width() - 10
                },
                title: {
                    text: I18n.t('lssm.verbandsverwaltung.allianceCredits')
                },
                yAxis: {
                    title: {
                        text: null
                    }
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        hour: '%I %p',
                        minute: '%H:%M'
                    }
                },
                legend: {
                    enabled: false
                },
                series: [
                    {
                        name: I18n.t('lssm.verbandsverwaltung.allianceCredits'),
                        data: allianceCreditsData
                    }
                ]
            });
        } catch (err) {
            $('#allianceCreditsChart').html(I18n.t('lssm.verbandsverwaltung.chartErr').replace(/{{chart}}/, I18n.t('lssm.verbandsverwaltung.allianceCredits')));
        }

        let allianceRankList = getAllianceRank(allianceCredits);
        let allianceRank = allianceRankList.rank;
        let allianceRankPage = allianceRankList.page;

        if (!storage.allianceRank) {
            storage.allianceRank = {};
        }

        if (!storage.allianceRankPage) {
            storage.allianceRankPage = {};
        }

        storage.allianceRank[time] = allianceRank;
        storage.allianceRankPage[time] = allianceRankPage;

        let allianceRankData = [];
        let allianceRankPageData = [];

        for (let key in storage.allianceRank) {
            allianceRankData.push([parseInt(key), storage.allianceRank[key]]);
        }
        for (let key in storage.allianceRankPage) {
            allianceRankPageData.push([parseInt(key), storage.allianceRankPage[key]]);
        }

        try {
            $('#allianceRankChart').highcharts({
                chart: {
                    width: $('#alliance_li ul').width() - 10,
                    height: $('#alliance_li ul').width() - 10
                },
                title: {
                    text: I18n.t('lssm.verbandsverwaltung.allianceRank')
                },
                yAxis: {
                    title: {
                        text: null
                    }
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        hour: '%I %p',
                        minute: '%H:%M'
                    }
                },
                legend: {
                    enabled: false
                },
                series: [
                    {
                        name: I18n.t('lssm.verbandsverwaltung.allianceRank'),
                        data: allianceRankData
                    }
                ]
            });
        } catch (err) {
            $('#allianceRankChart').html(I18n.t('lssm.verbandsverwaltung.chartErr').replace(/{{chart}}/, I18n.t('lssm.verbandsverwaltung.allianceRank')));
        }
        try {
            $('#allianceRankPageChart').highcharts({
                chart: {
                    width: $('#alliance_li ul').width() - 10,
                    height: $('#alliance_li ul').width() - 10
                },
                title: {
                    text: I18n.t('lssm.verbandsverwaltung.page')
                },
                yAxis: {
                    title: {
                        text: null
                    }
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        hour: '%I %p',
                        minute: '%H:%M'
                    }
                },
                legend: {
                    enabled: false
                },
                series: [
                    {
                        name: I18n.t('lssm.verbandsverwaltung.page'),
                        data: allianceRankPageData
                    }
                ]
            });
        } catch (err) {
            $('#allianceRankPageChart').html(I18n.t('lssm.verbandsverwaltung.chartErr').replace(/{{chart}}/, I18n.t('lssm.verbandsverwaltung.page')));
        }


        $('#verbandsverwaltungAllianceRank').html('<a href="/alliances?page=' + allianceRankPage + '" class="lightbox-open">' + I18n.t('lssm.verbandsverwaltung.allianceRank') + ': ' + allianceRank.toLocaleString() + ' (' + I18n.t('lssm.verbandsverwaltung.page') + ' ' + allianceRankPage + ')</a>');

        let users = parseInt(allianceListEntry[2].innerText.replace(/[\D]/g, ''));
        let onlineUsers = getOnlineUsers();
        $('#verbandsverwaltungUsers').html('<a href="/verband/mitglieder" class="lightbox-open">' + I18n.t('lssm.verbandsverwaltung.onlineUsers') + ': ' + onlineUsers.toLocaleString() + '/' + users + ' (' + Math.round((100 / users) * onlineUsers) + '%)</a>');

        if (!storage.users) {
            storage.users = {};
        }
        if (!storage.usersOnline) {
            storage.usersOnline = {};
        }

        storage.users[time] = users;
        storage.usersOnline[time] = onlineUsers;

        let userData = [];
        let userOnlineData = [];

        for (let key in storage.users) {
            userData.push([parseInt(key), storage.users[key]]);
        }
        for (let key in storage.usersOnline) {
            userOnlineData.push([parseInt(key), storage.usersOnline[key]]);
        }

        try {
            $('#allianceUserChart').highcharts({
                chart: {
                    width: $('#alliance_li ul').width() - 10,
                    height: $('#alliance_li ul').width() - 10
                },
                title: {
                    text: I18n.t('lssm.verbandsverwaltung.users')
                },
                yAxis: {
                    title: {
                        text: null
                    }
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        hour: '%I %p',
                        minute: '%H:%M'
                    }
                },
                legend: {
                    enabled: false
                },
                series: [
                    {
                        name: I18n.t('lssm.verbandsverwaltung.users'),
                        data: userData
                    }
                ]
            });
        } catch (err) {
            $('#allianceUserChart').html(I18n.t('lssm.verbandsverwaltung.chartErr').replace(/{{chart}}/, I18n.t('lssm.verbandsverwaltung.users')));
        }
        try {
            $('#allianceUserOnlineChart').highcharts({
                chart: {
                    width: $('#alliance_li ul').width() - 10,
                    height: $('#alliance_li ul').width() - 10
                },
                title: {
                    text: I18n.t('lssm.verbandsverwaltung.onlineUsers')
                },
                yAxis: {
                    title: {
                        text: null
                    }
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        hour: '%I %p',
                        minute: '%H:%M'
                    }
                },
                legend: {
                    enabled: false
                },
                series: [
                    {
                        name: I18n.t('lssm.verbandsverwaltung.onlineUsers'),
                        data: userOnlineData
                    }
                ]
            });
        } catch (err) {
            $('#allianceUserOnlineChart').html(I18n.t('lssm.verbandsverwaltung.chartErr').replace(/{{chart}}/, I18n.t('lssm.verbandsverwaltung.onlineUsers')));
        }

        localStorage["lssmVerbandsverwaltung_" + alliance_id] = JSON.stringify(storage);
    }

    let markup = '<li role="presentation"  id="verbandsverwaltung" class="alliance_true"><a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><b class="caret" style="transform: rotate(90deg);"></b>&nbsp;' + I18n.t('lssm.verbandsverwaltung.name') + '</a><ul id="verbandsverwaltungDropdown"><li role="presentation" id="verbandsverwaltungUsers" chart="user"><a href="/verband/mitglieder" class="lightbox-open" chart="user">Mitglieder online: 0</a></li><li role="presentation" id="verbandsverwaltungAllianceFunds" chart="funds"><a href="/verband/kasse" class="lightbox-open">Verbandskasse: 0 Credits</a></li><li role="presentation" id="verbandsverwaltungAllianceCredits" chart="credits">Verdiente Credits: 0 Credits</li><li role="presentation" id="verbandsverwaltungAllianceRank" chart="rank">Platz in der Verbandsliste: 0</li><li class="divider" role="presentation"></li><li role="presentation">' + I18n.t('lssm.verbandsverwaltung.updateMessage') + '</li><li class="divider" role="presentation"></li><li><span id="allianceCreditsChart" class="chart" chart="credits"></span></li><li><span id="allianceFundsChart" class="chart" chart="funds"></span></li><li><span id="allianceRankChart" class="chart" chart="rank"></span><span id="allianceRankPageChart" class="chart" chart="rank"></span></li><li><span id="allianceUserChart" class="chart" chart="user"></span><span id="allianceUserOnlineChart" class="chart" chart="user"></span></li></ul></li>';

    $("#menu_alliance ~ ul li:first").before(markup);

    $('#verbandsverwaltungDropdown').hide();

    $('#verbandsverwaltung').hover(function () {
        $('#verbandsverwaltungDropdown').toggle();
    });

    $('li span.chart[chart]').hide();

    $('li[chart]').hover(function () {
        $('li span.chart[chart="' + $(this).attr('chart') + '"]').toggle();
    });

    $('#verbandsverwaltungDropdown').css('position', 'absolute');
    $('#verbandsverwaltungDropdown').css('z-index', '999');
    $('#verbandsverwaltungDropdown').css('background', '#BA1D1A');
    $('#verbandsverwaltungDropdown').css('width', '100%');
    $('#verbandsverwaltungDropdown').css('top', '0px');
    $('#verbandsverwaltungDropdown').css('left', (0 - $('#alliance_li ul').width()) + 'px');
    $('#verbandsverwaltungDropdown').css('padding', '5px');
    $('#verbandsverwaltungDropdown').css('border', '1px solid black');

    updateValues();
    setInterval(updateValues, 300000);
})($, window, I18n);
