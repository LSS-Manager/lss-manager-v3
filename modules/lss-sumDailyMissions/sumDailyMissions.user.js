(function () {
    let site_location = window.location.href;
    if(site_location.match('daily'))
    {
        I18n.translations.de_DE['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patienten Behandlung',
            education: 'Ausbildung',
            purchase: 'gekauft',
            cancelled: 'Abgebrochen',
            cancelled2: 'Rückerstattung',
            extended: 'ausgebaut',
            extended2: 'erweitert',
            built: 'gebaut',
            teame: 'Verbandse',
            team: '\\[Verband\\]',
            prisoner: 'Gefangenen transportiert',
            num_missions: 'Anzahl Einsätze',
            num_patients: 'Anzahl Patienten',
            num_prisoners: 'Anzahl Gefangene',
            num_team: 'Anzahl Verbandseinsätze',
            num_teame: 'Anzahl Verbandseinlieferungen'
        };

        I18n.translations.en_US['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'constructed',
            teame: ' Alliance',
            team: '\\[Alliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Sum missions',
            num_patients: 'Sum patients',
            num_prisoners: 'Sum prisoners',
            num_team: 'Sum alliance missions',
            num_teame: 'Sum alliance treatment'
        };

        I18n.translations.es_ES['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'comprado',
            cancelled: 'Cancelled',
            extended: 'construida',
            extended2: 'Extended',
            built: 'construido',
            teame: ' Alianza',
            team: '\\[Alianza\\]',
            prisoner: 'Prisionero transportado',
            num_missions: 'Suma Misiones',
            num_patients: 'Suma pacientes',
            num_prisoners: 'Suma de prisioneros',
            num_team: 'Suma de misiones de alianza',
            num_teame: 'Tratamiento de alianza suma'
        };

        I18n.translations.pt_PT['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'comprado',
            cancelled: 'Cancelled',
            extended: 'construida',
            extended2: 'Extended',
            built: 'construído',
            team: '\\[Aliança\\]',
            teame: ' Aliança',
            prisoner: 'Prisoner Transported',
            num_missions: 'Soma missões',
            num_patients: 'Soma pacientes',
            num_prisoners: 'Soma prisioneiros',
            num_team: 'Soma missões da aliança',
            num_teame: 'Soma aliança tratamento'
        };

        I18n.translations.pl_PL['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Zwrot',
            extended: 'Postawiono',
            extended2: 'Extended',
            built: 'Postawiono',
            teame: ' Sojusz',
            team: '\\[Sojusz\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Suma misji',
            num_patients: 'Suma pacjentów',
            num_prisoners: 'Suma więźniów',
            num_team: 'Suma misji sojuszu',
            num_teame: 'Suma traktowania sojuszu'
        };

        I18n.translations.sv_SE['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Återlämna',
            extended: 'uppförd',
            extended2: 'Extended',
            built: 'uppförd',
            teame: ' Allians',
            team: '\\[Allians\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Summa uppdrag',
            num_patients: 'Summa patienter',
            num_prisoners: 'Summa fångar',
            num_team: 'Summa alliansuppdrag',
            num_teame: 'Summa alliansbehandling'
        };

        I18n.translations.da_DK['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Återlämna',
            extended: 'uppförd',
            extended2: 'Extended',
            built: 'uppförd',
            teame: ' Alliance',
            team: '\\[Alliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Sum missioner',
            num_patients: 'Sum patienten',
            num_prisoners: 'Sum fanger',
            num_team: 'Sum alliance missioner',
            num_teame: 'Sum alliansebehandling'
        };

        I18n.translations.nb_NO['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Återlämna',
            extended: 'uppförd',
            extended2: 'Extended',
            built: 'uppförd',
            teame: ' Allianse',
            team: '\\[Allianse\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Sum oppdrag',
            num_patients: 'Sum pasienter',
            num_prisoners: 'Sum fanger',
            num_team: 'Sum allianse oppdrag',
            num_teame: 'Sum alliansebehandling'
        };

        I18n.translations.it_IT['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Trattamento e trasporto paziente',
            education: 'educazione',
            purchase: 'acquisito',
            cancelled: 'Annullato',
            extended: 'edificata',
            extended2: 'Extended',
            built: 'edificata',
            teame: ' Alleanza',
            team: '\\[Alleanza\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Somma missioni',
            num_patients: 'Somma pazienti',
            num_prisoners: 'Somma i prigionieri',
            num_team: 'Somma le missioni dell\'alleanza',
            num_teame: 'Somma trattamento dell\'alleanza'
        };

        I18n.translations.tr_TR['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'İnşa edilen',
            teame: ' Birlik',
            team: '\\[Birlik\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Toplam görevler',
            num_patients: 'Toplam hastalar',
            num_prisoners: 'Toplam mahkumlar',
            num_team: 'Toplam ittifak misyonları',
            num_teame: 'Toplam ittifak tedavisi'
        };

        I18n.translations.fr_FR['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'constructed',
            teame: ' Alliance',
            team: '\\[Alliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Somme des missions',
            num_patients: 'Somme des patients',
            num_prisoners: 'Somme des prisonniers',
            num_team: 'Missions de l\'alliance Sum',
            num_teame: 'Traitement Sum Alliance'
        };

        I18n.translations.ru_RU['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'возведено',
            teame: ' Альянс',
            team: '\\[Альянс\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Сумма миссий',
            num_patients: 'Сумма пациентов',
            num_prisoners: 'Сумма заключенных',
            num_team: 'Сумма миссий альянса',
            num_teame: 'Сумма альянса лечения'
        };

        I18n.translations.uk_UA['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'збудовано',
            teame: ' Альянс',
            team: '\\[Альянс\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Сумові місії',
            num_patients: 'Сума пацієнтів',
            num_prisoners: 'Суми в\'язнів',
            num_team: 'Сума місій альянсу',
            num_teame: 'Сума лікування альянсу'
        };

        I18n.translations.cs_CZ['lssm']['sumDailyMissions'] = {
            patient_treatment: 'šetření pacienta',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'constructed',
            teame: ' aliance',
            team: '\\[Aliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Součet misí',
            num_patients: 'Součet pacientů',
            num_prisoners: 'Součet vězňů',
            num_team: 'Sečtěte alianční mise',
            num_teame: 'Součet alianční léčby'
        };

        I18n.translations.ja_JP['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: '建築され',
            teame: ' アライアンス',
            team: '\\[アライアンス\\]',
            prisoner: 'Prisoner Transported',
            num_missions: '合計ミッション',
            num_patients: '患者の合計',
            num_prisoners: '合計囚人',
            num_team: 'アライアンスミッションの合計',
            num_teame: '和同盟待遇'
        };

        I18n.translations.ko_KR['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: '건설한',
            teame: ' 동맹',
            team: '\\[동맹\\]',
            prisoner: 'Prisoner Transported',
            num_missions: '合計ミッション',
            num_patients: '患者の合計',
            num_prisoners: '合計囚人',
            num_team: 'アライアンスミッションの合計',
            num_teame: '和同盟待遇'
        };

        I18n.translations.ro_RO['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'construită',
            teame: ' Alianță',
            team: '\\[Alianță\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Sume misiuni',
            num_patients: 'Sumați pacienți',
            num_prisoners: 'Suma prizonieri',
            num_team: 'Sume misiuni de alianță',
            num_teame: 'Suma tratamentului alianței'
        };

        I18n.translations.fi_FI['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'constructed',
            teame: ' Alliance',
            team: '\\[Alliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Sum missions',
            num_patients: 'Sum patients',
            num_prisoners: 'Sum prisoners',
            num_team: 'Sum alliance missions',
            num_teame: 'Sum alliance treatment'
        };

        I18n.translations.nl_NL['lssm']['sumDailyMissions'] = {
            patient_treatment: 'Patiënten behandeling',
            education: 'Opleiding',
            purchase: 'gekocht',
            cancelled: 'Afgebroken',
            extended: 'uitgebreid',
            extended2: 'uitgebreid',
            built: 'gebouwd',
            teame: 'Teamopname',
            team: '\\[Team\\]',
            prisoner: 'Arrestanten getransporteerd',
            num_missions: 'Aantal meldingen',
            num_patients: 'Aantal patiënten',
            num_prisoners: 'Aantal gevangenen',
            num_team: 'Aantal Teammeldingen',
            num_teame: 'Aantal Teamopnames'
        };

        let anzahl_pro_einsatz = document.querySelectorAll("#iframe-inside-container > table > tbody > tr > td:nth-child(3)");
        let einsatz_titel = document.querySelectorAll("#iframe-inside-container > table > tbody > tr > td:nth-child(4)");
        let sum_einsaetze = 0;
        let sum_patienten = 0;
        let sum_gefangene = 0;
        let sum_verband = 0;
        let sum_verbande = 0;

        let css = ''+
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
            for(let i=0;i<anzahl_pro_einsatz.length;i++)
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
                        einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.built')) ||
                        einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.cancelled2')))
                {
                }
                else if(einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.prisoner')))
                {
                    anzahl = anzahl_pro_einsatz[i].innerHTML;
                    sum_gefangene = sum_gefangene + Number(anzahl.replace(" x",""));
                }
                else if(einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.teame')))
                {
                    anzahl = anzahl_pro_einsatz[i].innerHTML;
                    sum_verbande = sum_verbande + Number(anzahl.replace(" x",""));
                }
                else if (einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.team'))) 
                {
                    anzahl = anzahl_pro_einsatz[i].innerHTML;
                    sum_verband = sum_verband + Number(anzahl.replace(" x", ""));
                }
                //Alles andere sind normale Einsätze und können gezählt werden
                else
                {
                    anzahl = anzahl_pro_einsatz[i].innerHTML;
                    sum_einsaetze = sum_einsaetze + Number(anzahl.replace(" x",""));
                }
            }
            let tables = document.querySelectorAll("#iframe-inside-container > table");
            let table = tables[0];
            if(typeof table !== 'undefined' && table !== null)
                table.insertAdjacentHTML('beforebegin',
                    '<div class="label label-danger" id="num_label"><i class="glyphicon glyphicon-fire" id="num_icon"></i>'+
                    I18n.t('lssm.sumDailyMissions.num_missions')+'<span id="num_anzahl">'+sum_einsaetze+'</span></div>'+

                    '<div class="label label-warning" id="num_label"><i class="glyphicon glyphicon-plus" id="num_icon"></i>'+
                    I18n.t('lssm.sumDailyMissions.num_patients')+'<span id="num_anzahl">'+sum_patienten+'</span></div>'+

                    '<div class="label label-success" id="num_label"><i class="glyphicon glyphicon-plus" id="num_icon"></i>'+
                    I18n.t('lssm.sumDailyMissions.num_prisoners')+'<span id="num_anzahl">'+sum_gefangene+'</span></div>'+

                    '<div class="label label-danger" id="num_label"><i class="glyphicon glyphicon-fire" id="num_icon"></i>' +
                    I18n.t('lssm.sumDailyMissions.num_team') + '<span id="num_anzahl">' +sum_verband+ '</span></div>' +

                    '<div class="label label-info" id="num_label"><i class="glyphicon glyphicon-plus" id="num_icon"></i>'+
                    I18n.t('lssm.sumDailyMissions.num_teame')+'<span id="num_anzahl">'+sum_verbande+'</span></div><br><br>');
        }
    }
})();
