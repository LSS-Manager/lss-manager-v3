(function () {
	var site_location = window.location.href;
    if(site_location.match('daily'))
    {
		I18n.translations.de['lssm']['sumDailyMissions'] = {
			patient_treatment: 'Patienten Behandlung',
			education: 'Ausbildung',
			purchase: 'gekauft',
			cancelled: 'Abgebrochen',
			extended: 'ausgebaut',
			extended2: 'erweitert',
			built: 'gebaut',
			team: 'Verband',
			prisoner: 'Gefangenen transportiert',
			num_missions: 'Anzahl Einsätze',
			num_patients: 'Anzahl Patienten',
			num_prisoners: 'Anzahl Gefangene',
			num_team: 'Anzahl Verbandseinlieferungen'
		};

		I18n.translations.en['lssm']['sumDailyMissions'] = {
			patient_treatment: 'Patient Treatment',
			education: 'education',
			purchase: 'bought',
			cancelled: 'Cancelled',
			extended: 'constructed',
			extended2: 'Extended',
			built: 'constructed',
			team: 'Alliance',
			prisoner: 'Prisoner Transported',
			num_missions: 'Sum missions',
			num_patients: 'Sum patients',
			num_prisoners: 'Sum prisoners',
			num_team: 'Sum alliance'
		};
		
		I18n.translations.nl['lssm']['sumDailyMissions'] = {
			patient_treatment: 'Patiënten behandeling',
			education: 'Opleiding',
			purchase: 'gekocht',
			cancelled: 'Afgebroken',
			extended: 'uitgebreid',
			extended2: 'uitgebreid',
			built: 'gebouwd',
			team: 'Team',
			prisoner: 'Arrestanten getransporteerd',
			num_missions: 'Aantal meldingen',
			num_patients: 'Aantal patiënten',
			num_prisoners: 'Aantal gevangenen',
			num_team: 'Aantal Teamopnames'
		};
	
        var anzahl_pro_einsatz = document.querySelectorAll("#iframe-inside-container > table > tbody > tr > td:nth-child(2)");
        var einsatz_titel = document.querySelectorAll("#iframe-inside-container > table > tbody > tr > td:nth-child(3)");
        var sum_einsaetze = 0;
        var sum_patienten = 0;
        var sum_gefangene = 0;
        var sum_verband = 0;

        var css = ''+
            '#num_label {margin-right: 5px;padding: 5px 0px 5px 5px;border: 1.5px solid black;font-size: inherit;border-radius: 5px;}'+
            '#num_anzahl {background: #333;padding: 4.5px;margin-left: 5px;margin-right: 1px;}'+
            '#num_icon {margin-right: 5px;}',

            head = document.head || document.getElementsByTagName('head')[0],
            style=document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) style.styleSheet.cssText = css;
        else style.appendChild(document.createTextNode(css));
        head.appendChild(style);

        if(anzahl_pro_einsatz !== null && einsatz_titel !== null)
        {
            for(var i=0;i<anzahl_pro_einsatz.length;i++)
            {
                //Zähle Anzahl behandelter Patienten
                if(einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.patient_treatment')))
                {
                    anzahl = anzahl_pro_einsatz[i].innerHTML;
                    sum_patienten = sum_patienten + Number(anzahl.replace(" x",""));
                }
                //Zähle Ausbauten, abgebrochene Einsätze, Verbandseinlieferungen und Ausbildung nicht dazu
                else if(einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.extended')) ||
                        einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.purchase')) ||
                        einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.cancelled')) ||
                        einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.education')) ||
                        einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.extended2')) ||
                        einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.built')))
                {
                }
                else if (einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.prisoner')))
                {
                    anzahl = anzahl_pro_einsatz[i].innerHTML;
                    sum_gefangene = sum_gefangene + Number(anzahl.replace(" x",""));
                }
                else if(einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.team')))
                {
                    anzahl = anzahl_pro_einsatz[i].innerHTML;
                    sum_verband = sum_verband + Number(anzahl.replace(" x",""));
                }
                //Alles andere sind normale Einsätze und können gezählt werden
                else
                {
                    anzahl = anzahl_pro_einsatz[i].innerHTML;
                    sum_einsaetze = sum_einsaetze + Number(anzahl.replace(" x",""));
                }
            }
            var tables = document.querySelectorAll("#iframe-inside-container > table");
            var table = tables[0];
			if(typeof table !== 'undefined' && table !== null)
				table.insertAdjacentHTML('beforebegin',
										 '<div class="label label-danger" id="num_label"><i class="glyphicon glyphicon-fire" id="num_icon"></i>'+
										 I18n.t('lssm.sumDailyMissions.num_missions')+'<span id="num_anzahl">'+sum_einsaetze+'</span></div>'+

										 '<div class="label label-warning" id="num_label"><i class="glyphicon glyphicon-plus" id="num_icon"></i>'+
										 I18n.t('lssm.sumDailyMissions.num_patients')+'<span id="num_anzahl">'+sum_patienten+'</span></div>'+

										 '<div class="label label-success" id="num_label"><i class="glyphicon glyphicon-plus" id="num_icon"></i>'+
										 I18n.t('lssm.sumDailyMissions.num_prisoners')+'<span id="num_anzahl">'+sum_gefangene+'</span></div>'+

										 '<div class="label label-info" id="num_label"><i class="glyphicon glyphicon-plus" id="num_icon"></i>'+
										 I18n.t('lssm.sumDailyMissions.num_team')+'<span id="num_anzahl">'+sum_verband+'</span></div><br><br>');
        }
    }
})();
