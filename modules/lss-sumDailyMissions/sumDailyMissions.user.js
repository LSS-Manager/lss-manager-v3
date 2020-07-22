(function () {
    let site_location = window.location.href;
    if(site_location.match('daily'))
    {
        I18n.translations.de_DE.lssm.sumDailyMissions = {
            patient_treatment: 'Patienten Behandlung',
            patient_treatment1: 'Patienten Behandlung und Transport',
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
            num_missions: 'Anzahl / Credits Einsätze',
            num_patients: 'Anzahl / Credits Patienten',
            num_prisoners: 'Anzahl / Credits Gefangene',
            num_team: 'Anzahl / Credits Verbandseinsätze',
            num_teame: 'Anzahl / Credits Verbandseinlieferungen'
        };

        I18n.translations.en_US.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment and Transport',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
			cancelled2: 'Refund',
			cancelled3: 'demolished',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'constructed',
            teame: ' Alliance',
            team: '\\[Alliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Sum / Credits Missions',
            num_patients: 'Sum / Credits Patients',
            num_prisoners: 'Sum / Credits Prisoners',
            num_team: 'Sum / Credits Alliance Missions',
            num_teame: 'Sum / Credits Alliance Treatment'
        };

        I18n.translations.es_ES.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'comprado',
            cancelled: 'Cancelled',
            extended: 'construida',
            extended2: 'Extended',
            built: 'construido',
            teame: ' Alianza',
            team: '\\[Alianza\\]',
            prisoner: 'Prisionero transportado',
            num_missions: 'Suma / créditos Misiones',
            num_patients: 'Suma / créditos pacientes',
            num_prisoners: 'Suma / créditos de prisioneros',
            num_team: 'Suma / créditos de misiones de alianza',
            num_teame: 'Tratamiento de alianza suma / créditos'
        };

        I18n.translations.pt_PT.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'comprado',
            cancelled: 'Cancelled',
            extended: 'construida',
            extended2: 'Extended',
            built: 'construído',
            team: '\\[Aliança\\]',
            teame: ' Aliança',
            prisoner: 'A transportar detido',
            num_missions: 'Soma / Créditos missões',
            num_patients: 'Soma / Créditos pacientes',
            num_prisoners: 'Soma / Créditos prisioneiros',
            num_team: 'Soma / Créditos missões da aliança',
            num_teame: 'Soma / Créditos aliança tratamento'
        };

        I18n.translations.pl_PL.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Zwrot',
            extended: 'Postawiono',
            extended2: 'Extended',
            built: 'Postawiono',
            teame: ' Sojusz',
            team: '\\[Sojusz\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Suma / Kredyty misji',
            num_patients: 'Suma / Kredyty pacjentów',
            num_prisoners: 'Suma / Kredyty więźniów',
            num_team: 'Suma / Kredyty misji sojuszu',
            num_teame: 'Suma / Kredyty traktowania sojuszu'
        };

        I18n.translations.sv_SE.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Återlämna',
            extended: 'uppförd',
            extended2: 'Extended',
            built: 'uppförd',
            teame: ' Allians',
            team: '\\[Allians\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Summa / Krediter uppdrag',
            num_patients: 'Summa / Krediter patienter',
            num_prisoners: 'Summa / Krediter fångar',
            num_team: 'Summa / Krediter alliansuppdrag',
            num_teame: 'Summa / Krediter alliansbehandling'
        };

        I18n.translations.da_DK.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'Uddannelse',
            purchase: 'købt',
            cancelled: 'Återlämna',
            extended: 'uppförd',
            extended2: 'bygget',
            built: 'bygget',
            teame: ' Alliance',
            team: '\\[Alliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Sum / Kreditter missioner',
            num_patients: 'Sum / Kreditter patienten',
            num_prisoners: 'Sum / Kreditter fanger',
            num_team: 'Sum / Kreditter alliance missioner',
            num_teame: 'Sum / Kreditter alliansebehandling'
        };

        I18n.translations.nb_NO.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Återlämna',
            extended: 'uppförd',
            extended2: 'Extended',
            built: 'uppförd',
            teame: ' Allianse',
            team: '\\[Allianse\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Sum / Kreditter oppdrag',
            num_patients: 'Sum / Kreditter pasienter',
            num_prisoners: 'Sum / Kreditter fanger',
            num_team: 'Sum / Kreditter allianse oppdrag',
            num_teame: 'Sum / Kreditter alliansebehandling'
        };

        I18n.translations.it_IT.lssm.sumDailyMissions = {
            patient_treatment: 'Trattamento e trasporto pazienti',
            patient_treatment1: 'Trattamento pazienti',
            education: 'educazione',
            purchase: 'acquistato',
            cancelled: 'Annullato',
			cancelled2: 'Rimborsa',
            extended: 'estesa',
            extended2: 'aggiornata',
            built: 'costruito',
            teame: ' Alleanza',
            team: '\\[Alleanza\\]',
            prisoner: 'Detenuto trasportato',
            num_missions: 'Somma / Crediti missioni',
            num_patients: 'Somma / Crediti pazienti',
            num_prisoners: 'Somma / Crediti i prigionieri',
            num_team: 'Somma / Crediti le missioni dell\'alleanza',
            num_teame: 'Somma / Crediti trattamento dell\'alleanza'
        };

        I18n.translations.tr_TR.lssm.sumDailyMissions = {
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

        I18n.translations.fr_FR.lssm.sumDailyMissions = {
            patient_treatment: 'Traitement de patient',
            patient_treatment1: 'Traitement de patient et transport',
            education: 'education',
            purchase: 'acheté',
            cancelled: 'Cancelled',
            cancelled2: 'bâtiment',
            extended: 'construit',
            extended2: 'prolongée',
            built: 'construit',
            teame: ' Alliance',
            team: '\\[Alliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Somme / Crédits des missions',
            num_patients: 'Somme / Crédits des patients',
            num_prisoners: 'Somme / Crédits des prisonniers',
            num_team: 'Missions de l\'alliance Sum / Crédits',
            num_teame: 'Traitement Sum / Crédits Alliance'
        };

        I18n.translations.ru_RU.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'возведено',
            teame: ' Альянс',
            team: '\\[Альянс\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Сумма / кредитов миссий',
            num_patients: 'Сумма / кредитов пациентов',
            num_prisoners: 'Сумма / кредитов заключенных',
            num_team: 'Сумма / кредитов миссий альянса',
            num_teame: 'Сумма / кредитов альянса лечения'
        };

        I18n.translations.uk_UA.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'збудовано',
            teame: ' Альянс',
            team: '\\[Альянс\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Сумові / кредитів місії',
            num_patients: 'Сума / кредитів пацієнтів',
            num_prisoners: 'Суми / кредитів в\'язнів',
            num_team: 'Сума / кредитів місій альянсу',
            num_teame: 'Сума / кредитів лікування альянсу'
        };

        I18n.translations.cs_CZ.lssm.sumDailyMissions = {
            patient_treatment: 'šetření pacienta',
            patient_treatment1: 'šetření pacienta',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'constructed',
            teame: ' aliance',
            team: '\\[Aliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Součet / kreditů misí',
            num_patients: 'Součet / kreditů pacientů',
            num_prisoners: 'Součet / kreditů vězňů',
            num_team: 'Sečtěte / kreditů alianční mise',
            num_teame: 'Součet / kreditů alianční léčby'
        };

        I18n.translations.ja_JP.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: '建築され',
            teame: ' アライアンス',
            team: '\\[アライアンス\\]',
            prisoner: 'Prisoner Transported',
            num_missions: '合計/クレジットミッション',
            num_patients: '患者合計/クレジット',
            num_prisoners: '合計/クレジットの囚人',
            num_team: 'アライアンスミッション合計/クレジット',
            num_teame: '合計/クレジット同盟の扱い'
        };

        I18n.translations.ko_KR.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: '건설한',
            teame: ' 동맹',
            team: '\\[동맹\\]',
            prisoner: 'Prisoner Transported',
            num_missions: '총 / 크레딧 미션',
            num_patients: '환자 총 / 크레딧',
            num_prisoners: '총 / 크레딧 죄수',
            num_team: '얼라이언스 미션 총계 / 크레딧',
            num_teame: '총 / 크레딧 제휴 처리'
        };

        I18n.translations.ro_RO.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'construită',
            teame: ' Alianță',
            team: '\\[Alianță\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Sume / credite misiuni',
            num_patients: 'Sumați / credite pacienți',
            num_prisoners: 'Suma / credite prizonieri',
            num_team: 'Sume / credite misiuni de alianță',
            num_teame: 'Suma / credite tratamentului alianței'
        };

        I18n.translations.fi_FI.lssm.sumDailyMissions = {
            patient_treatment: 'Patient Treatment',
            patient_treatment1: 'Patient Treatment',
            education: 'education',
            purchase: 'bought',
            cancelled: 'Cancelled',
            extended: 'constructed',
            extended2: 'Extended',
            built: 'constructed',
            teame: ' Alliance',
            team: '\\[Alliance\\]',
            prisoner: 'Prisoner Transported',
            num_missions: 'Summa / Luotot virkamatkat',
            num_patients: 'Summa / Luotot potilaille',
            num_prisoners: 'Summa / Luotot vankeille',
            num_team: 'Sumna / Luotot liittouman tehtävät',
            num_teame: 'Summa / hyvitys allianssikäsittelyyn'
        };

        I18n.translations.nl_NL.lssm.sumDailyMissions = {
            patient_treatment: 'Patiënten behandeling',
            patient_treatment1: 'Patiënten behandeling en transport',
            education: 'Opleiding',
            purchase: 'gekocht',
            cancelled: 'Afgebroken',
            cancelled2: 'Terugbetaald',
            cancelled3: 'gesloopt',
            extended: 'uitgebreid',
            extended2: 'uitgebreid',
            built: 'gebouwd',
            teame: 'Teamopname',
            team: '\\[Team\\]',
            prisoner: 'Arrestanten getransporteerd',
            num_missions: 'Aantal / Credits meldingen',
            num_patients: 'Aantal / Credits patiënten',
            num_prisoners: 'Aantal / Credits gevangenen',
            num_team: 'Aantal / Credits Teammeldingen',
            num_teame: 'Aantal / Credits Teamopnames'
        };

        let anzahl_pro_einsatz = document.querySelectorAll("#iframe-inside-container > table > tbody > tr > td:nth-child(3)");
        let credit_pro_einsatz = document.querySelectorAll("#iframe-inside-container > table > tbody > tr > td:nth-child(1)");
        let einsatz_titel = document.querySelectorAll("#iframe-inside-container > table > tbody > tr > td:nth-child(4)");
        let sum_einsaetze = 0;
        let cre_einsaetze = 0;
        let sum_patienten = 0;
        let cre_patienten = 0;
        let sum_gefangene = 0;
        let cre_gefangene = 0;
        let sum_verband = 0;
        let cre_verband = 0;
        let sum_verbande = 0;
        let cre_verbande = 0;

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

        if(anzahl_pro_einsatz !== null && credit_pro_einsatz !==null && einsatz_titel !== null)
        {
            for(let i=0;i<anzahl_pro_einsatz.length;i++)
            {
                //Zähle Anzahl behandelter Patienten
                if(einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.patient_treatment')) ||
                    einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.patient_treatment1')))
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
                        einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.cancelled2')) ||
						einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.cancelled3')))
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
            for (let i = 0; i < credit_pro_einsatz.length; i++) {
                //Zähle Anzahl behandelter Patienten
                if (einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.patient_treatment')) ||
                    einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.patient_treatment1'))) {
                    anzahl = credit_pro_einsatz[i].innerHTML;
                    cre_patienten = cre_patienten + Number(anzahl.replace(/[,.]/g, '').replace(/\D/g, ''));
                }
                //Zähle Ausbauten, abgebrochene Einsätze, Verbandseinlieferungen und Ausbildung nicht dazu
                else if (einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.extended')) ||
                    einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.purchase')) ||
                    einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.cancelled')) ||
                    einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.education')) ||
                    einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.extended2')) ||
                    einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.built')) ||
                    einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.cancelled2')) ||
                    einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.cancelled3'))) {
                }
                else if (einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.prisoner'))) {
                    anzahl = credit_pro_einsatz[i].innerHTML;
                    cre_gefangene = cre_gefangene + Number(anzahl.replace(/[,.]/g, '').replace(/\D/g, ''));
                }
                else if (einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.teame'))) {
                    anzahl = credit_pro_einsatz[i].innerHTML;
                    cre_verbande = cre_verbande + Number(anzahl.replace(/[,.]/g, '').replace(/\D/g, ''));
                }
                else if (einsatz_titel[i].innerText.match(I18n.t('lssm.sumDailyMissions.team'))) {
                    anzahl = credit_pro_einsatz[i].innerHTML;
                    cre_verband = cre_verband + Number(anzahl.replace(/[,.]/g, '').replace(/\D/g, ''));
                }
                //Alles andere sind normale Einsätze und können gezählt werden
                else {
                    anzahl = credit_pro_einsatz[i].innerHTML;
                    cre_einsaetze = cre_einsaetze + Number(anzahl.replace(/[,.]/g, '').replace(/\D/g, ''));
                }
            }
            let tables = document.querySelectorAll("#iframe-inside-container > table");
            let table = tables[0];
            if(typeof table !== 'undefined' && table !== null)
                table.insertAdjacentHTML('beforebegin',
                    '<div class="label label-danger" id="num_label"><i class="glyphicon glyphicon-fire" id="num_icon"></i>'+
                    I18n.t('lssm.sumDailyMissions.num_missions') + '<span id="num_anzahl">' + sum_einsaetze + ' / ' + cre_einsaetze.toLocaleString() +'</span></div>'+

                    '<div class="label label-warning" id="num_label"><i class="glyphicon glyphicon-plus" id="num_icon"></i>'+
                    I18n.t('lssm.sumDailyMissions.num_patients') + '<span id="num_anzahl">' + sum_patienten + ' / ' + cre_patienten.toLocaleString() +'</span></div>'+

                    '<div class="label label-success" id="num_label"><i class="glyphicon glyphicon-plus" id="num_icon"></i>'+
                    I18n.t('lssm.sumDailyMissions.num_prisoners') + '<span id="num_anzahl">' + sum_gefangene + ' / ' + cre_gefangene.toLocaleString() +'</span></div>'+

                    '<div class="label label-danger" id="num_label"><i class="glyphicon glyphicon-fire" id="num_icon"></i>' +
                    I18n.t('lssm.sumDailyMissions.num_team') + '<span id="num_anzahl">' + sum_verband + ' / ' + cre_verband.toLocaleString()+'</span></div>' +

                    '<div class="label label-info" id="num_label"><i class="glyphicon glyphicon-plus" id="num_icon"></i>'+
                    I18n.t('lssm.sumDailyMissions.num_teame') + '<span id="num_anzahl">' + sum_verbande + ' / ' + cre_verbande.toLocaleString() +'</span></div><br><br>');
        }
    }
})();
