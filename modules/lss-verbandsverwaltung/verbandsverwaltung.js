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
        chartErr: 'Konnte Grafik "{{chart}}" nicht laden!',
        hoverTip: 'Tipp: Fahre mit der Maus über ein Element, um einen Werte-Verlauf angezeigt zu bekommen.'
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
        chartErr: 'Could not load chart "{{chart}}"!',
        hoverTip: 'Tip: Hover over an element to display a value history.'
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
        chartErr: 'Kon de grafiek "{{chart}" niet laden!',
        hoverTip: 'Tip: Beweeg de muis over een element om een waardegeschiedenis weer te geven.'
    };

    let updateable = true;

    async function loadChart(element, name, data) {
        try {
            element.highcharts({
                chart: {
                    width: $('#alliance_li ul').width() - 10,
                    height: $('#alliance_li ul').width() - 10
                },
                title: {
                    text: name
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
                        name: name,
                        data: data
                    }
                ]
            });
        } catch (err) {
            element.html(I18n.t('lssm.verbandsverwaltung.chartErr').replace(/{{chart}}/, name));
            window.setTimeout(loadChart(element, name, data), 10000);
        }
    }

    function updateValues() {
        if (updateable) {
            $.get("/api/allianceinfo")
                .then(response => {
                    let date = new Date();
                    date.setMilliseconds(0);
                    date.setSeconds(0);

                    let time = date.getTime() - (date.getTimezoneOffset()*60*1000);

                    if (!localStorage["lssmVerbandsverwaltung_" + alliance_id]) {
                        localStorage["lssmVerbandsverwaltung_" + alliance_id] = "{}";
                    }

                    let storage = JSON.parse(localStorage["lssmVerbandsverwaltung_" + alliance_id]);

                    let allianceFundsCredits = response.credits_current;

                    if (response.finance_active) {
                        if (!storage.allianceFunds) {
                            storage.allianceFunds = {};
                        }
                        $("#verbandsverwaltungAllianceFunds").html('<a href="/verband/kasse" class="lightbox-open">' + I18n.t('lssm.verbandsverwaltung.allianceFunds') + ': ' + allianceFundsCredits.toLocaleString() + ' Credits</a>');
                        storage.allianceFunds[time] = allianceFundsCredits;

                        let allianceFundsData = [];

                        for (let key in storage.allianceFunds) {
                            allianceFundsData.push([parseInt(key), storage.allianceFunds[key]]);
                        }

                        loadChart($('#allianceFundsChart'), I18n.t('lssm.verbandsverwaltung.allianceFunds'), allianceFundsData);

                    } else {
                        if ($("#verbandsverwaltungAllianceFunds")) {
                            $("#verbandsverwaltungAllianceFunds").remove();
                        }
                        if ($("#allianceFundsChart")) {
                            $("#allianceFundsChart").remove();
                        }
                    }

                    if (!storage.allianceCredits) {
                        storage.allianceCredits = {};
                    }

                    let allianceCredits = parseInt(response.credits_total);
                    $('#verbandsverwaltungAllianceCredits').html(I18n.t('lssm.verbandsverwaltung.allianceCredits') + ': ' + allianceCredits.toLocaleString() + ' Credits');

                    storage.allianceCredits[time] = allianceCredits;

                    let allianceCreditsData = [];

                    for (let key in storage.allianceCredits) {
                        allianceCreditsData.push([parseInt(key), storage.allianceCredits[key]]);
                    }

                    loadChart($('#allianceCreditsChart'), I18n.t('lssm.verbandsverwaltung.allianceCredits'), allianceCreditsData);

                    let allianceRank = response.rank;
                    let allianceRankPage = parseInt(allianceRank / 20) + 1;

                    if (!storage.allianceRank) {
                        storage.allianceRank = {};
                    }

                    if (!storage.allianceRankPage) {
                        storage.allianceRankPage = {};
                    }

                    storage.allianceRank[time] = allianceRank;
                    storage.allianceRankPage[time] = allianceRankPage;
                    storage.lastPage = allianceRankPage;

                    let allianceRankData = [];
                    let allianceRankPageData = [];

                    for (let key in storage.allianceRank) {
                        allianceRankData.push([parseInt(key), storage.allianceRank[key]]);
                    }
                    for (let key in storage.allianceRankPage) {
                        allianceRankPageData.push([parseInt(key), storage.allianceRankPage[key]]);
                    }

                    loadChart($('#allianceRankChart'), I18n.t('lssm.verbandsverwaltung.allianceRank'), allianceRankData);
                    loadChart($('#allianceRankPageChart'), I18n.t('lssm.verbandsverwaltung.page'), allianceRankPageData);

                    $('#verbandsverwaltungAllianceRank').html('<a href="/alliances?page=' + allianceRankPage + '" class="lightbox-open">' + I18n.t('lssm.verbandsverwaltung.allianceRank') + ': ' + allianceRank.toLocaleString() + ' (' + I18n.t('lssm.verbandsverwaltung.page') + ' ' + allianceRankPage + ')</a>');

                    let users = response.user_count;
                    let onlineUsers = response.user_online_count;
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

                    loadChart($('#allianceUserChart'), I18n.t('lssm.verbandsverwaltung.users'), userData);
                    loadChart($('#allianceUserOnlineChart'), I18n.t('lssm.verbandsverwaltung.onlineUsers'), userOnlineData);

                    localStorage["lssmVerbandsverwaltung_" + alliance_id] = JSON.stringify(storage);

                    updateable = false;
                    setTimeout(function() {
                        updateable = true;
                    }, 300000);
                });
        }
    }

    let markup = '<li role="presentation"  id="verbandsverwaltung" class="alliance_true"><a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><b class="caret" style="transform: rotate(90deg);"></b>&nbsp;' + I18n.t('lssm.verbandsverwaltung.name') + '</a><ul id="verbandsverwaltungDropdown"><li role="presentation" id="verbandsverwaltungUsers" chart="user"><a href="/verband/mitglieder" class="lightbox-open" chart="user">Mitglieder online: 0</a></li><li role="presentation" id="verbandsverwaltungAllianceFunds" chart="funds"><a href="/verband/kasse" class="lightbox-open">Verbandskasse: 0 Credits</a></li><li role="presentation" id="verbandsverwaltungAllianceCredits" chart="credits">Verdiente Credits: 0 Credits</li><li role="presentation" id="verbandsverwaltungAllianceRank" chart="rank">Platz in der Verbandsliste: 0</li><li class="divider" role="presentation"></li><li role="presentation">' + I18n.t('lssm.verbandsverwaltung.updateMessage') + '</li><li class="divider" role="presentation"></li><li role="presentation">' + I18n.t('lssm.verbandsverwaltung.hoverTip') + '</li></ul><ul id="verbandsverwaltungCharts"><li><span id="allianceCreditsChart" class="chart" chart="credits"></span></li><li><span id="allianceFundsChart" class="chart" chart="funds"></span></li><li><span id="allianceRankChart" class="chart" chart="rank"></span><span id="allianceRankPageChart" class="chart" chart="rank"></span></li><li><span id="allianceUserChart" class="chart" chart="user"></span><span id="allianceUserOnlineChart" class="chart" chart="user"></span></li></ul></li>';

    $("#menu_alliance ~ ul li:first").before(markup);

    $('#verbandsverwaltungDropdown').hide();
    $('#verbandsverwaltungCharts').hide();

    $('#verbandsverwaltung').hover(function () {
        $('#verbandsverwaltungDropdown').toggle();
    });

    $('li span.chart[chart]').hide();

    $('li[chart]').hover(function () {
        $('li span.chart[chart="' + $(this).attr('chart') + '"]').toggle();
        $('#verbandsverwaltungCharts').toggle();
    });

    $('#verbandsverwaltungDropdown').css('position', 'absolute');
    $('#verbandsverwaltungCharts').css('position', 'absolute');
    $('#verbandsverwaltungDropdown').css('z-index', '999');
    $('#verbandsverwaltungCharts').css('z-index', '999');
    $('#verbandsverwaltungDropdown').css('background', '#BA1D1A');
    $('#verbandsverwaltungCharts').css('background', '#BA1D1A');
    $('#verbandsverwaltungDropdown').css('width', '100%');
    $('#verbandsverwaltungCharts').css('width', '100%');
    $('#verbandsverwaltungDropdown').css('top', '0px');
    $('#verbandsverwaltungCharts').css('top', '0px');
    $('#verbandsverwaltungDropdown').css('left', (0 - $('#alliance_li ul').width()) + 'px');
    $('#verbandsverwaltungCharts').css('left', (0 + $('#alliance_li ul').width()) + 'px');
    $('#verbandsverwaltungDropdown').css('padding', '5px');
    $('#verbandsverwaltungCharts').css('padding', '5px');
    $('#verbandsverwaltungDropdown').css('border', '1px solid black');
    $('#verbandsverwaltungCharts').css('border', '1px solid black');

    updateValues();
    $('#menu_alliance').click(function() {
        updateValues();
    });
})($, window, I18n);
