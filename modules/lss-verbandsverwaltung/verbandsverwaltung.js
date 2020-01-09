(($, win, I18n) => {
    const lsName = "lssmVerbandsverwaltung_" + user_id + "_" + alliance_id;
    const updateMin = 30; // Minuten-Inetrval in dem geupdatet wird

    if (!document.URL.match(/(leitstellenspiel|missionchief|missionchief-australia|centro-de-mando|meldkamerspel|larmcentralen-spelet|operatorratunkowy|operatore112|operateur112|dispetcher112|alarmcentral-spil|nodsentralspillet)(\.de|\.com|\.co\.uk|\.dk|\.es|\.se|\.pl|\.it|\.fr|\.ru)\/#?$/)) return;

    I18n.translations.de.lssm.verbandsverwaltung = {
        name: 'Verwaltung',
        allianceFunds: 'Verbandskasse',
        allianceCredits: 'Verdiente Credits',
        users: 'Mitglieder',
        onlineUsers: 'Mitglieder online',
        allianceRank: 'Platz in der Verbandsliste',
        page: 'Seite',
        updateMessage: 'Werte aktualisieren sich<br>automatisch alle ' + updateMin + ' Minuten.',
        chartErr: 'Konnte Grafik "{{chart}}" nicht laden!<br>Wir wissen bereits, dass dies bei manchen Browsern vorkommt, allerdings noch nicht warum. Bitte mache diesbezüglich <b>keine</b> Fehlermeldung, wir sind bereits an diesem Problem dran!',
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
        updateMessage: 'Values update automatically<br>every ' + updateMin + ' minutes.',
        chartErr: 'Could not load chart "{{chart}}"!<br>We already know that this happens with some browsers, but not yet why. Please <b>don\'t</b> report us this error as we are already on this problem!',
        hoverTip: 'Tip: Hover over an element to display a value history.'
    };
    I18n.translations.es.lssm.verbandsverwaltung = {
        name: 'Administración',
        allianceFunds: 'Fondos de la Alianza',
        allianceCredits: 'Créditos Obtenidos',
        users: 'Miembros',
        onlineUsers: 'Miembros en línea',
        allianceRank: 'Rango en Alliancelista',
        page: 'Página',
        updateMessage: 'Los valores se actualizan automáticamente<br>cada ' + updateMin + ' actas.',
        chartErr: 'No se pudo cargar el gráfico "{{chart}}"!<br>Ya sabemos que esto sucede con algunos navegadores, pero aún no sabemos por qué. Por favor <b>no nos informe de este error ya que estamos en este problema!',
        hoverTip: 'Consejo: Pase el ratón por encima de un elemento para mostrar un historial de valores.'
    };
    I18n.translations.pl_PL.lssm.verbandsverwaltung = {
        name: 'Administracja',
        allianceFunds: 'Fundusze Alliance',
        allianceCredits: 'Kredyty zarobione',
        users: 'Członkowie',
        onlineUsers: 'Członkowie online',
        allianceRank: 'Ranking na liście sojuszników',
        page: 'Strona',
        updateMessage: 'Automatyczna aktualizacja wartości<br>każdy ' + updateMin + ' minuty.',
        chartErr: 'Nie można było wprowadzić wykresu obciążenia. "{{chart}}"!<br>Wiemy już, że dzieje się to w przypadku niektórych przeglądarek, ale jeszcze nie wiemy dlaczego. Proszę <b>don\'t</b> zgłoś nam ten błąd, ponieważ jesteśmy już na tym problemie!',
        hoverTip: 'Wskazówka: Przejechać nad elementem, aby wyświetlić historię wartości.'
    };
    I18n.translations.sv_SE.lssm.verbandsverwaltung = {
        name: 'Administrering',
        allianceFunds: 'Alliansfonder',
        allianceCredits: 'Förtjänade krediter',
        users: 'medlemmar',
        onlineUsers: 'Medlemmar online',
        allianceRank: 'Rang i Alliancelist',
        page: 'Sida',
        updateMessage: 'Värden uppdateras automatiskt <br> varje ' + updateMin + ' minuter.',
        chartErr: 'Det gick inte att ladda diagrammet "{{chart}}"!<br>Vi vet redan att detta händer med vissa webbläsare, men ännu inte varför. Snälla <b> inte </b> anmäla oss det här felet eftersom vi redan har problemet!',
        hoverTip: 'Tips: Håll muspekaren över ett element för att visa en värdehistorik.'
    };
    I18n.translations.da_DK.lssm.verbandsverwaltung = {
        name: 'Administration',
        allianceFunds: 'Alliance fonde',
        allianceCredits: 'Optjente kredit',
        users: 'Medlemmer',
        onlineUsers: 'Medlemmer online',
        allianceRank: 'Rang i Alliancelist',
        page: 'Side',
        updateMessage: 'Værdier opdateres automatisk<br>hvert ' + updateMin + ' minut.',
        chartErr: 'Kunne ikke indlæse diagram "{{chart}}"!<br>Vi ved allerede, at dette sker med nogle browsere, men endnu ikke hvorfor. Venligst <b> ikke </b> indberet os denne fejl, da vi allerede har problemet.',
        hoverTip: 'Tip: Hold markøren over et element for at få vist en værdihistorik.'
    };
    I18n.translations.nb_NO.lssm.verbandsverwaltung = {
        name: 'Administrasjon',
        allianceFunds: 'Alliansefond',
        allianceCredits: 'Opptjente kreditter',
        users: 'medlemmer',
        onlineUsers: 'Medlemmer online',
        allianceRank: 'Rang i Alliancelist',
        page: 'Side',
        updateMessage: 'Verdiene oppdateres automatisk <br> hver ' + updateMin + ' minutter.',
        chartErr: 'Kunne ikke laste diagrammet "{{chart}}"!<br>Vi vet allerede at dette skjer med noen nettlesere, men ennå ikke hvorfor. Vennligst <b> ikke </b> rapporter oss denne feilen, da vi allerede har dette problemet!',
        hoverTip: 'Tips: Hold musepekeren over et element for å vise en verdihistorikk.'
    };
    I18n.translations.it_IT.lssm.verbandsverwaltung = {
        name: 'Amministrazione',
        allianceFunds: 'Fondi dell\'Alleanza',
        allianceCredits: 'Crediti guadagnati',
        users: 'Membri',
        onlineUsers: 'Membri online',
        allianceRank: 'Classifica nella lista degli Alliancelist',
        page: 'Page',
        updateMessage: 'Aggiornamento automatico dei valori<br>ogni volta ' + updateMin + ' minuti.',
        chartErr: 'Impossibile caricare il grafico "{{chart}}"!<br>Sappiamo già che questo accade con alcuni browser, ma non ancora perché. Per favore <b>don\'t</b> segnalateci questo errore perché siamo già su questo problema!',
        hoverTip: 'Suggerimento: passare con il mouse su un elemento per visualizzare la cronologia dei valori.'
    };
    I18n.translations.fr_FR.lssm.verbandsverwaltung = {
        name: 'Administration',
        allianceFunds: 'Fonds Alliance',
        allianceCredits: 'Crédits gagnés',
        users: 'Members',
        onlineUsers: 'Membres en ligne',
        allianceRank: 'Rang dans Alliancelist',
        page: 'Page',
        updateMessage: 'Mise à jour automatique des valeurs <br>chaque valeur ' + updateMin + ' minutes.',
        chartErr: 'Impossible de charger le graphique "{{chart}}"!<br>Nous savons déjà que cela se produit avec certains navigateurs, mais pas encore pourquoi. S\'il vous plaît<b>don\'t</b> nous signaler cette erreur comme nous sommes déjà sur ce problème !',
        hoverTip: 'Astuce : Survolez un élément pour afficher l\'historique des valeurs.'
    };
    I18n.translations.ru_RU.lssm.verbandsverwaltung = {
        name: 'Администрация',
        allianceFunds: 'Альянс Фонды',
        allianceCredits: 'Заработанные Кредиты',
        users: 'Члены',
        onlineUsers: 'Участники онлайн',
        allianceRank: 'Рейтинг в Альянс-листе',
        page: 'Страница',
        updateMessage: 'Обновление значений автоматически<br> для каждого из них ' + updateMin + ' протокол.',
        chartErr: 'Не смог загрузить диаграмму "{{chart}}"!<br>Мы уже знаем, что это происходит с некоторыми браузерами, но пока не знаем, почему. Пожалуйста, <b>don\'t</b> сообщите нам об этой ошибке, поскольку мы уже сталкиваемся с этой проблемой!',
        hoverTip: 'Совет: наведите указатель мыши на элемент, чтобы отобразить историю значений.'
    };
    I18n.translations.nl.lssm.verbandsverwaltung = {
        name: 'Administratie',
        allianceFunds: 'Teamkas',
        allianceCredits: 'Verdiende Credits',
        users: 'Leden',
        onlineUsers: 'Leden online',
        allianceRank: 'Rangschikking in Teamlijst',
        page: 'Pagina',
        updateMessage: 'Waarden worden elke<br>' + updateMin + ' minuten automatisch bijgewerkt.',
        chartErr: 'Kon de grafiek "{{chart}" niet laden!<br>We weten al dat dit bij sommige browsers gebeurt, maar nog niet waarom. Meld ons deze fout alstublieft <b>niet</b>, want we zijn al bezig met dit probleem!',
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
            console.log("Verbandsverwaltung: Wir ham nen Error!", err);
        }
    }

    function drawGUI(storage, lastKey) {
        let lastArr = storage[lastKey];
        if (lastArr.finance_active) {
            $("#verbandsverwaltungAllianceFunds").html(
                '<a href="/verband/kasse" class="lightbox-open">' +
                '' + I18n.t('lssm.verbandsverwaltung.allianceFunds') + ': ' +
                '' + lastArr.credits.toLocaleString() + ' Credits' +
                '</a>'
            );
        }
        // Write total earned credits
        $('#verbandsverwaltungAllianceCredits').html(
            I18n.t('lssm.verbandsverwaltung.allianceCredits') + ': ' + lastArr.total.toLocaleString() + ' Credits'
        );

        // And display the latest values
        $('#verbandsverwaltungAllianceRank').html(
            '<a href="/alliances?page=' + lastArr.page + '" class="lightbox-open">' +
            '' + I18n.t('lssm.verbandsverwaltung.allianceRank') + ': ' +
            '' + lastArr.rank.toLocaleString() + ' (' +
            '' + I18n.t('lssm.verbandsverwaltung.page') + ' ' + lastArr.page.toLocaleString() + ')' +
            '</a>'
        );

        // Display current member statistic
        $('#verbandsverwaltungUsers').html(
            '<a href="/verband/mitglieder" class="lightbox-open">' +
            '' + I18n.t('lssm.verbandsverwaltung.onlineUsers') + ': ' +
            '' + lastArr.online.toLocaleString() + '/' + lastArr.users.toLocaleString() + ' ' +
            '(' + Math.round((100 / lastArr.users) * lastArr.online) + '%)' +
            '</a>'
        );
        // Write History into Tables and output the stats
        let userData = [];
        let userOnlineData = [];
        let allianceRankData = [];
        let allianceRankPageData = [];
        let allianceFundsData = [];
        let allianceCreditsData = [];

        // prepare data for charts
        for (let key in storage) {
            let timestamp = parseInt(key)*1000
            allianceCreditsData.push([timestamp, storage[key].total]);
            allianceFundsData.push([timestamp, storage[key].credits]);
            allianceRankData.push([timestamp, storage[key].rank]);
            allianceRankPageData.push([timestamp, storage[key].page]);
            userData.push([timestamp, storage[key].users]);
            userOnlineData.push([timestamp, storage[key].online]);
        }
        // Load the charts
        if (lastArr.finance_active) {
            loadChart($('#allianceFundsChart'), I18n.t('lssm.verbandsverwaltung.allianceFunds'), allianceFundsData);
        }
        loadChart($('#allianceCreditsChart'), I18n.t('lssm.verbandsverwaltung.allianceCredits'), allianceCreditsData);
        loadChart($('#allianceRankChart'), I18n.t('lssm.verbandsverwaltung.allianceRank'), allianceRankData);
        loadChart($('#allianceRankPageChart'), I18n.t('lssm.verbandsverwaltung.page'), allianceRankPageData);
        loadChart($('#allianceUserChart'), I18n.t('lssm.verbandsverwaltung.users'), userData);
        loadChart($('#allianceUserOnlineChart'), I18n.t('lssm.verbandsverwaltung.onlineUsers'), userOnlineData);
    }

    function updateValues() {
        // Only update if we're in a alliance
        if (!alliance_id)
            return;
        let date = new Date();
        date.setMilliseconds(0);

        let time = Math.floor(date.getTime()/1000) - (date.getTimezoneOffset()*60);

        if (!localStorage[lsName])
            localStorage[lsName] = "{}";

        let storage = JSON.parse(localStorage[lsName]);

        // Only update if last update has been 10 minutes ago
        let lastEntry;

        // Remove entries that are older than 24 hours
        // While we are there, let's check when the last update has been made
        for (let key in storage) {
            if (storage.hasOwnProperty(key)) {
                let keyTime = parseInt(key);
                if (keyTime <= time - 86400) {
                    delete storage[key];
                } else {
                    lastEntry = keyTime > (lastEntry || 0) ? keyTime : lastEntry;
                }
            }
        }
        // localStorage updaten
        localStorage[lsName] = JSON.stringify(storage);

        if (lastEntry <= time-(updateMin*60) || !lastEntry) {
            $.get("/api/allianceinfo")
                .then(response => {

                    // Write up-to-date values into localstorage
                    storage[time] = {
                        "credits": response.credits_current,
                        "total": parseInt(response.credits_total),
                        "rank": response.rank,
                        "page": parseInt(response.rank / 20) + (response.rank%20 ? 1 : 0),
                        "users": response.user_count,
                        "online": response.user_online_count
                    };



                    if (!response.finance_active) {
                        if ($("#verbandsverwaltungAllianceFunds")) {
                            $("#verbandsverwaltungAllianceFunds").remove();
                        }
                        if ($("#allianceFundsChart")) {
                            $("#allianceFundsChart").remove();
                        }
                    } else {
                        storage[time].finance_active = true;
                    }

                    // Write the new json into the localstorage
                    localStorage[lsName] = JSON.stringify(storage);
                    drawGUI(storage, time);
                });

        } else {
            drawGUI(storage, lastEntry);
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

    // Alte Verbandsverwaltungs-Einsträge löschen
    for (let localStorageItem in localStorage) {
        if (localStorageItem.match(/^lssmverbandsverwaltung_\d+$/g)) {
            localStorage.removeItem(localStorageItem);
        }
    }

    // Wir versuchen erstmal zu updaten.
    updateValues();
    // Danach setzen wir einen 10-minuten-interval
    setInterval(function() {
        updateValues()
    }, updateMin*60000);
})($, window, I18n);
