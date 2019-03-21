(($, win, I18n) => {
    let lsName = "lssmVerbandsverwaltung_" + user_id + "_" + alliance_id;

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
        updateMessage: 'Werte aktualisieren sich<br>automatisch alle 10 Minuten.',
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
        updateMessage: 'Values update automatically<br>every 10 minutes.',
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
        updateMessage: 'Waarden worden elke<br>10 minuten automatisch bijgewerkt.',
        chartErr: 'Kon de grafiek "{{chart}" niet laden!',
        hoverTip: 'Tip: Beweeg de muis over een element om een waardegeschiedenis weer te geven.'
    };
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
                        hour: '%H:%M',
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

    function updateValues()
    {
        // Only update if we're in a alliance
        if (!alliance_id)
            return;
        let date = new Date();

        let time = Math.floor(date.getTime()/1000) - (date.getTimezoneOffset()*60);

        if (!localStorage[lsName])
            localStorage[lsName] = "{}";

        let storage = JSON.parse(localStorage[lsName]);
        let lastEntry;
        let remove = [];

        // Remove entries that are older than 24 hours
        // While we are there, let's check when the last update has been made
        for (let key in storage)
        {
            if (storage.hasOwnProperty(key)) {
                let karr = key.split("_");
                if (parseInt(karr[karr.length - 1]) < (time - 86400))
                    remove.push(key)
                else
                    lastEntry = (typeof lastEntry == 'undefined' || key > lastEntry) ? key : lastEntry;
            }
        }
        remove.forEach(function (key) {
            localStorage.removeItem(key);
        });
        // Only update if last update has been 10 minutes ago
        if(lastEntry > time-600)
            return;

        $.get("/api/allianceinfo")
            .then(response => {

                // Write up-to-date values into localstorage
                storage[time] = {
                    "credits": response.credits_current,
                    "total": parseInt(response.credits_total),
                    "rank": response.rank,
                    "page": parseInt(response.rank / 20) + 1,
                    "users": response.user_count,
                    "online": response.user_online_count
                };

                if (response.finance_active) {
                    // Write kurrent alliance funds into DOM
                    $("#verbandsverwaltungAllianceFunds").html(
                        '<a href="/verband/kasse" class="lightbox-open">' +
                        '' + I18n.t('lssm.verbandsverwaltung.allianceFunds') + ': ' +
                        '' + storage[time].credits + ' Credits' +
                        '</a>'
                    );

                    // Write Credits History into array
                    let allianceFundsData = [];

                    for (let key in storage) {
                        allianceFundsData.push([parseInt(key), storage[key].credits]);
                    }
                    // and generate chart
                    loadChart($('#allianceFundsChart'), I18n.t('lssm.verbandsverwaltung.allianceFunds'), allianceFundsData);

                } else {
                    if ($("#verbandsverwaltungAllianceFunds")) {
                        $("#verbandsverwaltungAllianceFunds").remove();
                    }
                    if ($("#allianceFundsChart")) {
                        $("#allianceFundsChart").remove();
                    }
                }

                // Write total earned credits
                $('#verbandsverwaltungAllianceCredits').html(
                    I18n.t('lssm.verbandsverwaltung.allianceCredits') + ': ' + storage[time].total + ' Credits'
                );

                let allianceCreditsData = [];

                for (let key in storage) {
                    allianceCreditsData.push([parseInt(key), storage[key].total]);
                }

                loadChart($('#allianceCreditsChart'), I18n.t('lssm.verbandsverwaltung.allianceCredits'), allianceCreditsData);

                // Write rank and page history into array
                let allianceRankData = [];
                let allianceRankPageData = [];

                for (let key in storage) {
                    allianceRankData.push([parseInt(key), storage[key].rank]);
                }
                for (let key in storage) {
                    allianceRankPageData.push([parseInt(key), storage[key].page]);
                }
                // Load the charts
                loadChart($('#allianceRankChart'), I18n.t('lssm.verbandsverwaltung.allianceRank'), allianceRankData);
                loadChart($('#allianceRankPageChart'), I18n.t('lssm.verbandsverwaltung.page'), allianceRankPageData);

                // And display the latest values
                $('#verbandsverwaltungAllianceRank').html(
                    '<a href="/alliances?page=' + storage[time].rank + '" class="lightbox-open">' +
                    '' + I18n.t('lssm.verbandsverwaltung.allianceRank') + ': ' +
                    '' + storage[time].rank + ' (' +
                    '' + I18n.t('lssm.verbandsverwaltung.page') + ' ' + storage[time].page + ')' +
                    '</a>'
                );

                // Display current member statistic
                $('#verbandsverwaltungUsers').html(
                    '<a href="/verband/mitglieder" class="lightbox-open">' +
                    '' + I18n.t('lssm.verbandsverwaltung.onlineUsers') + ': ' +
                    '' + storage[time].online + '/' + storage[time].users + ' ' +
                    '(' + Math.round((100 / storage[time].users) * storage[time].online) + '%)' +
                    '</a>'
                );

                // Write history of users into array
                let userData = [];
                let userOnlineData = [];

                for (let key in storage) {
                    userData.push([parseInt(key), storage[key].users]);
                }
                for (let key in storage) {
                    userOnlineData.push([parseInt(key), storage[key].online]);
                }

                // And load the charts
                loadChart($('#allianceUserChart'), I18n.t('lssm.verbandsverwaltung.users'), userData);
                loadChart($('#allianceUserOnlineChart'), I18n.t('lssm.verbandsverwaltung.onlineUsers'), userOnlineData);

                // Write the new json into the localstorage
                localStorage[lsName] = JSON.stringify(storage);
            });
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

    // Veraltete Einträge löschen
    let remove = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i).toLowerCase();
        if ((key.split("_").length - 1)<2)
        {
            remove.push((key))
        }
        else if(key.startsWith("lssmverbandsverwaltung_"+ user_id.toString()))
        {
            if (key != lsName.toLowerCase())
                remove.push(key);
        }
    }
    remove.forEach(function (key) {
        localStorage.removeItem(key);
    });
    // Wir versuchen erstmal zu updaten.
    updateValues();
    // Danach setzen wir einen 10-minuten-interval
    setInterval(function() {
        updateValues()
    }, 600000);
})($, window, I18n);
