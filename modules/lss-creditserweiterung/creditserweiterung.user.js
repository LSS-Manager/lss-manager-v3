(($, win, I18n) => {
    if (!document.URL.match(/(leitstellenspiel|missionchief|missionchief-australia|centro-de-mando|meldkamerspel|larmcentralen-spelet|operatorratunkowy|operatore112|operateur112|dispetcher112|alarmcentral-spil|nodsentralspillet|operacni-stredisko|112-merkez|operador193|jogo-operador112|dyspetcher101-game)(\.de|\.com|\.co\.uk|\.dk|\.cz|\.es|\.mx|\.se|\.pl|\.it|\.fr|\.ru|.pt)\/#?$/)) return;

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
            updateMessage: 'Werte aktualisieren sich<br>automatisch alle 5 Minuten.<br>Credits und Coins sind<br>ständig aktuell.',
            allianceFunds: 'Verbandskasse',
            noFurtherRank: 'Keine Höheren Ränge'
        }
    };
    I18n.translations.en_US.lssm.creditserweiterung = {
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
            updateMessage: 'Values update automatically<br>every 5 minutes.<br>Credits and Coins are<br>continuously up to date.',
            allianceFunds: 'Alliance Funds',
            noFurtherRank: 'There are no further ranks'
        }
    };
    I18n.translations.en_GB.lssm.creditserweiterung = {
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
        texts: {
            reloadMessage: 'Please open your profile<br>and reload the website!',
            dropdownName: 'Creditsextension',
            creditsOverview: 'Overview',
            coinsProtokoll: 'Coins List',
            earnedCredits: 'Totally earned Credits',
            creditsToNextRank: 'Credits to next rank',
            updateMessage: 'Values update automatically<br>every 5 minutes.<br>Credits and Coins are<br>continuously up to date.',
            allianceFunds: 'Alliance Funds',
            noFurtherRank: 'There are no further ranks'
        }
    };
    I18n.translations.en_AU.lssm.creditserweiterung = {
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
        texts: {
            reloadMessage: 'Please open your profile<br>and reload the website!',
            dropdownName: 'Creditsextension',
            creditsOverview: 'Overview',
            coinsProtokoll: 'Coins List',
            earnedCredits: 'Totally earned Credits',
            creditsToNextRank: 'Credits to next rank',
            updateMessage: 'Values update automatically<br>every 5 minutes.<br>Credits and Coins are<br>continuously up to date.',
            allianceFunds: 'Alliance Funds',
            noFurtherRank: 'There are no further ranks'
        }
    };
    I18n.translations.cs_CZ.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? vydělaných kreditů.*/i,
        ranks: {
            0: 'Zelenáč',
            200: 'Hasič',
            10000: 'Zkušený hasič',
            100000: 'Operační důstojník',
            1000000: 'Poručík',
            5000000: 'Kapitán',
            20000000: 'Štábní kapitán',
            50000000: 'Velitel jednotky',
            1000000000: 'Velitel divize',
            2000000000: 'Zástupce velitele',
            5000000000: 'Velitel hasičů'
        },
        texts: {
            reloadMessage: 'Otevřete prosím svůj profil <br> a znovu načtěte web!',
            dropdownName: 'Creditsextension',
            creditsOverview: 'Přehled',
            coinsProtokoll: 'Seznam mincí',
            earnedCredits: 'Úplně vydělané Kredity',
            creditsToNextRank: 'Kredity do dalšího pořadí',
            updateMessage: 'Hodnoty se aktualizují automaticky<br>každých 5 minut.<br>Kredity a mince jsou<br>průběžně aktuální.',
            allianceFunds: 'Alianční fondy',
            noFurtherRank: 'Nejsou žádné další hodnosti'
        }
    };
    I18n.translations.pl_PL.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? Otrzymane kredyty.*/i,
        ranks: {
            0: 'Nowy',
            200: 'Strażak',
            10000: 'Starszy strażak',
            100000: 'Ogniomistrz',
            1000000: 'Aspirant',
            5000000: 'Kapitan',
            20000000: 'Starszy kapitan',
            50000000: 'Szef brygady',
            1000000000: 'Nadbrygadier',
            2000000000: 'Zastępca komendanta głównego',
            5000000000: 'Komendant główny'
        },
        texts: {
            reloadMessage: 'Proszę otworzyć swój profil<br>i przeładować stronę internetową!',
            dropdownName: 'Przedłużenie kredytu',
            creditsOverview: 'Przegląd',
            coinsProtokoll: 'Coins List',
            earnedCredits: 'Całkowicie zarobione Kredyty',
            creditsToNextRank: 'Kredyty do następnej rangi',
            updateMessage: 'Automatyczna aktualizacja wartości<br>co 5 minut.<br>Kredyty i monety są stale aktualizowane.',
            allianceFunds: 'Fundusze sojusznicze',
            noFurtherRank: 'Nie ma dalszych szeregów.'
        }
    };
    I18n.translations.sv_SE.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? intjänade krediter.*/i,
        ranks: {
            0: 'Nybörjare',
            200: 'Brandman',
            10000: 'Brandveteran',
            100000: 'Brandoperatör',
            1000000: 'Inspektör',
            5000000: 'Kommissarie',
            20000000: 'Gruppchef',
            50000000: 'Bataljonschef',
            1000000000: 'Divisionschef',
            2000000000: 'Vicechef',
            5000000000: 'Brandchef'
        },
        texts: {
            reloadMessage: 'Öppna din profil och ladda om webbplatsen!',
            dropdownName: 'Creditsextension',
            creditsOverview: 'Översikt',
            coinsProtokoll: 'Myntlista',
            earnedCredits: 'Totalt intjänade krediter',
            creditsToNextRank: 'Krediter till nästa rang',
            updateMessage: 'Värden uppdateras automatiskt <br> var femte minut.<br>Krediter och mynt är<br>kontinuerligt uppdaterat.',
            allianceFunds: 'Alliansfonder',
            noFurtherRank: 'Det finns inga ytterligare rangordningar'
        }
    };
    I18n.translations.da_DK.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? tjente kreditter.*/i,
        ranks: {
            0: 'Lærling',
            200: 'Brandmand',
            10000: 'Seniorbrandmand',
            100000: 'Brandoperatør',
            1000000: 'Løjtnant',
            5000000: 'Kaptajn',
            20000000: 'Stabskaptajn',
            50000000: 'Holdleder',
            1000000000: 'Indsatsleder',
            2000000000: 'Vicebrandchef',
            5000000000: 'Brandchef'
        },
        texts: {
            reloadMessage: 'Åbn din profil <br> og genindlæs webstedet!',
            dropdownName: 'Creditsextension',
            creditsOverview: 'Oversigt',
            coinsProtokoll: 'Liste over mønter',
            earnedCredits: 'Totalt optjente kredit',
            creditsToNextRank: 'Kreditter til næste rang',
            updateMessage: 'Værdier opdateres automatisk <br> hvert 5. minut. <br> Kreditter og mønter er løbende ajour.',
            allianceFunds: 'Alliance fonde',
            noFurtherRank: 'Der er ingen yderligere rækker'
        }
    };
    I18n.translations.nb_NO.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? tjente kreditter.*/i,
        ranks: {
            0: 'Fersking',
            200: 'Brannmann',
            10000: 'Erfaren brannmann',
            100000: 'Brannslukkingsoperatør',
            1000000: 'Løytnant',
            5000000: 'Kaptein',
            20000000: 'Personalleder',
            50000000: 'Bataljonsjef',
            1000000000: 'Avdelingsleder',
            2000000000: 'Politiinspektør',
            5000000000: 'Brannsjef'
        },
        texts: {
            reloadMessage: 'Åpne profilen din,<br> og last inn nettstedet på nytt!',
            dropdownName: 'Creditsextension',
            creditsOverview: 'Oversikt',
            coinsProtokoll: 'Myntliste',
            earnedCredits: 'Helt opptjente studiepoeng',
            creditsToNextRank: 'Kreditter til neste rangering',
            updateMessage: 'Verdiene oppdateres automatisk <br> hvert 5. minutt. <br> Kreditter og mynter er kontinuerlig oppdatert.',
            allianceFunds: 'Alliansefond',
            noFurtherRank: 'Det er ingen ytterligere rekker'
        }
    };
    I18n.translations.es_ES.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? créditos conseguidos.*/i,
        ranks: {
            0: 'Novato',
            200: 'Bombero',
            10000: 'Bombero sénior',
            100000: 'Operador de vehículos antiincendios',
            1000000: 'Teniente',
            5000000: 'Capitán',
            20000000: 'Capitán de personal',
            50000000: 'Jefe de batallón',
            1000000000: 'Jefe de división',
            2000000000: 'Subjefe',
            5000000000: 'Jefe de bomberos'
        },
        texts: {
            reloadMessage: 'Por favor, abra su perfil <br>y vuelva a cargar el sitio web!',
            dropdownName: 'Extensión de crédito',
            creditsOverview: 'Panorama general',
            coinsProtokoll: 'Lista de monedas',
            earnedCredits: 'Créditos Totalmente Obtenidos',
            creditsToNextRank: 'Créditos al siguiente rango',
            updateMessage: 'Los valores se actualizan automáticamente<br>cada 5 minutos.<brLos Créditos y Monedas son <br>continuamente actualizados.',
            allianceFunds: 'Fondos de la Alianza',
            noFurtherRank: 'No hay más rangos'
        }
    };
    I18n.translations.es_MX.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? créditos conseguidos.*/i,
        ranks: {
            0: 'Novato',
            200: 'Bombero',
            10000: 'Bombero sénior',
            100000: 'Operador de vehículos antiincendios',
            1000000: 'Teniente',
            5000000: 'Capitán',
            20000000: 'Capitán de personal',
            50000000: 'Jefe de batallón',
            1000000000: 'Jefe de división',
            2000000000: 'Subjefe',
            5000000000: 'Jefe de bomberos'
        },
        texts: {
            reloadMessage: 'Por favor, abra su perfil <br>y vuelva a cargar el sitio web!',
            dropdownName: 'Extensión de crédito',
            creditsOverview: 'Panorama general',
            coinsProtokoll: 'Lista de monedas',
            earnedCredits: 'Créditos Totalmente Obtenidos',
            creditsToNextRank: 'Créditos al siguiente rango',
            updateMessage: 'Los valores se actualizan automáticamente<br>cada 5 minutos.<brLos Créditos y Monedas son <br>continuamente actualizados.',
            allianceFunds: 'Fondos de la Alianza',
            noFurtherRank: 'No hay más rangos'
        }
    };
    I18n.translations.pt_PT.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? créditos ganhos.*/i,
        ranks: {
            0: 'Recruta',
            200: 'Bombeiro',
            10000: 'Bombeiro sênior',
            100000: 'Operador de aparelhos de combate a incêndio',
            1000000: 'Tenente',
            5000000: 'Capitão',
            20000000: 'Primeiro Capitão',
            50000000: 'Chefe de batalhão',
            1000000000: 'Chefe de divisão',
            2000000000: 'Vice-chefe',
            5000000000: 'Chefe dos bombeiros'
        },
        texts: {
            reloadMessage: 'Por favor, abra o seu perfil <br>e recarregue o site!',
            dropdownName: 'Extensão de crédito',
            creditsOverview: 'Visão geral',
            coinsProtokoll: 'Lista de moedas',
            earnedCredits: 'Créditos totalmente ganhos',
            creditsToNextRank: 'Créditos para o próximo posto',
            updateMessage: 'Os valores são atualizados automaticamente<br>5 minutos.<bCredits e Moedas são<br> continuamente atualizado.',
            allianceFunds: 'Fundos da Aliança',
            noFurtherRank: 'Chega de fileiras'
        }
    };
    I18n.translations.pt_BR.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? créditos ganhos.*/i,
        ranks: {
            0: 'Recruta',
            200: 'Bombeiro',
            10000: 'Bombeiro sênior',
            100000: 'Operador de aparelhos de combate a incêndio',
            1000000: 'Tenente',
            5000000: 'Capitão',
            20000000: 'Primeiro Capitão',
            50000000: 'Chefe de batalhão',
            1000000000: 'Chefe de divisão',
            2000000000: 'Vice-chefe',
            5000000000: 'Chefe dos bombeiros'
        },
        texts: {
            reloadMessage: 'Por favor, abra o seu perfil <br>e recarregue o site!',
            dropdownName: 'Extensão de crédito',
            creditsOverview: 'Visão geral',
            coinsProtokoll: 'Lista de moedas',
            earnedCredits: 'Créditos totalmente ganhos',
            creditsToNextRank: 'Créditos para o próximo posto',
            updateMessage: 'Os valores são atualizados automaticamente<br>5 minutos.<bCredits e Moedas são<br> continuamente atualizado.',
            allianceFunds: 'Fundos da Aliança',
            noFurtherRank: 'Chega de fileiras'
        }
    };
    I18n.translations.it_IT.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? crediti guadagnati.*/i,
        ranks: {
            0: 'Recluta',
            200: 'Vigile del fuoco',
            10000: 'Vigile del fuoco senior',
            100000: 'Operatore di apparecchi antincendio',
            1000000: 'Tenente',
            5000000: 'Capitano',
            20000000: 'Stato maggiore',
            50000000: 'Capo-pattuglia',
            1000000000: 'Capo divisione',
            2000000000: 'Vice capo',
            5000000000: 'Capo dei pompieri'
        },
        texts: {
            reloadMessage: 'Apri il tuo profilo<br>e ricarica il sito web!',
            dropdownName: 'Estensione del credito',
            creditsOverview: 'Panoramica',
            coinsProtokoll: 'Elenco monete',
            earnedCredits: 'Crediti Totalmente guadagnati',
            creditsToNextRank: 'Crediti al rango successivo',
            updateMessage: 'Aggiornamento automatico dei valori<br>ogni 5 minuti.<br>Crediti e Monete sono costantemente aggiornati.',
            allianceFunds: 'Fondi dell\'Alleanza',
            noFurtherRank: 'Non ci sono altre classifiche'
        }
    };
    I18n.translations.tr_TR.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? Kredi kazanıldı.*/i,
        ranks: {
            0: 'Acemi',
            200: 'İtfaiyeci',
            10000: 'Kıdemli İtfaiyeci',
            100000: 'İtfaiye Aracı Operatörü',
            1000000: 'Teğmen',
            5000000: 'Yüzbaşı',
            20000000: 'Kurmay Yüzbaşı',
            50000000: 'Tabur Amiri',
            1000000000: 'Birim Amiri',
            2000000000: 'Yardımcı Amir',
            5000000000: 'İtfaiye Amiri'
        },
        texts: {
            reloadMessage: 'Lütfen profilinizi açın <br> ve web sitesini yeniden yükleyin!',
            dropdownName: 'Creditsextension',
            creditsOverview: 'genel bakış',
            coinsProtokoll: 'Sikke Listesi',
            earnedCredits: 'Toplam Kazanılan Krediler',
            creditsToNextRank: 'Sonraki rütbe krediler',
            updateMessage: 'Değerler otomatik olarak güncellenir<br>her 5 dakikada bir.<br>Krediler ve Madeni <br>Paralar sürekli güncellenmektedir.',
            allianceFunds: 'İttifak Fonları',
            noFurtherRank: 'Başka rütbe yok'
        }
    };
    I18n.translations.fr_FR.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? crédits obtenus.*/i,
        ranks: {
            0: 'Bleusaille',
            200: 'Pompier',
            10000: 'Pompier vétéran',
            100000: 'Opérateur d’équipement de pompier',
            1000000: 'Sergent',
            5000000: 'Adjudant',
            20000000: 'Adjudant-chef',
            50000000: 'Lieutenant',
            1000000000: 'Capitaine',
            2000000000: 'Commandant',
            5000000000: 'Lieutenant-colonel'
        },
        texts: {
            reloadMessage: 'Veuillez ouvrir votre profil <br>et recharger le site !',
            dropdownName: 'Extension de crédit',
            creditsOverview: 'Vue d\'ensemble',
            coinsProtokoll: 'Liste des pièces',
            earnedCredits: 'Total des crédits accumulés',
            creditsToNextRank: 'Crédits au rang suivant',
            updateMessage: 'Mise à jour automatique des valeurs <br>toutes les 5 minutes.<br>Les crédits et les pièces de monnaie sont <br>continuellement mis à jour.',
            allianceFunds: 'Fonds Alliance',
            noFurtherRank: 'Il n\'y a pas d\'autres grades'
        }
    };
    I18n.translations.ru_RU.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? Получено кредитов.*/i,
        ranks: {
            0: 'Новичок',
            200: 'Пожарный',
            10000: 'Старший пожарный',
            100000: 'Начальник караула',
            1000000: 'Лейтенант',
            5000000: 'Капитан',
            20000000: 'Начальник отдела',
            50000000: 'Командир батальона',
            1000000000: 'Командир дивизиона',
            2000000000: 'Заместитель главы',
            5000000000: 'Глава пожарной службы'
        },
        texts: {
            reloadMessage: 'Пожалуйста, откройте свой профиль<br> и перезагрузите сайт!',
            dropdownName: 'Продление кредита',
            creditsOverview: 'Обзор',
            coinsProtokoll: 'Список монет',
            earnedCredits: 'Полностью заработанные Кредиты',
            creditsToNextRank: 'Кредиты на следующий уровень',
            updateMessage: 'Обновление значений автоматически<br> каждые 5 минут.<br>Кредиты и монеты постоянно обновляются.',
            allianceFunds: 'Альянс Фонды',
            noFurtherRank: 'Больше нет никаких званий.'
        }
    };
    I18n.translations.uk_UA.lssm.creditserweiterung = {
        earnedCreditsRegEx: /(.*)([0-9],)? Зароблених кредитів:*/i,
        ranks: {
            0: 'Новачок',
            200: 'Пожежний',
            10000: 'Старший пожежний',
            100000: 'Водій пожежного автомобіля',
            1000000: 'Лейтенант',
            5000000: 'Капітан',
            20000000: 'Начальник відділу',
            50000000: 'Командир батальйону',
            1000000000: 'Командир дивізіону',
            2000000000: 'Замісник начальника',
            5000000000: 'Начальник пожежної служби'
        },
        texts: {
            reloadMessage: 'Відкрийте свій профіль <br> та перезавантажте веб-сайт!',
            dropdownName: 'Кредитнасексція',
            creditsOverview: 'Огляд',
            coinsProtokoll: 'Список монет',
            earnedCredits: 'Загально зароблені кредити',
            creditsToNextRank: 'Кредити до наступного рангу',
            updateMessage: 'Значення автоматично оновлюються через кожні 5 хвилин. <br> Кредити та монети <br>постійно оновлюються.',
            allianceFunds: 'Фонди Альянсу',
            noFurtherRank: 'Подальших рангів немає'
        }
    };
    I18n.translations.nl_NL.lssm.creditserweiterung = {
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
            reloadMessage: 'Open uw profiel<br>en herlaad de website!',
            dropdownName: 'Credits-uitbreiding',
            creditsOverview: 'Overzicht statistiek',
            coinsProtokoll: 'Coin protocol',
            earnedCredits: 'Totaal verdiende credits',
            creditsToNextRank: 'Credits tot volgende rang',
            updateMessage: 'Waarden worden elke<br>5 minuten automatisch bijgewerkt.<br>Credits en coins zijn<br>continu up to date.',
            allianceFunds: 'Teamkas',
            noFurtherRank: 'Geen verdere rangen meer'
        }
    };

    let updateable = false;

    function getCreditsOfNextRank(earnedCredits){
        let ranks = I18n.t('lssm.creditserweiterung.ranks');
        for (let key in ranks) { if(earnedCredits <= key){ return key; } }
        return null;
    }

    function createExtension() {
        $.get("/api/credits")
            .then(response => {
                let earnedCredits = response.credits_user_total;
                let creditsOfNextRank = getCreditsOfNextRank(earnedCredits);
                if (creditsOfNextRank === null) {
                    nextRank = I18n.t('lssm.creditserweiterung.texts.noFurtherRank');
                    creditsToNextRank = "&infin;";
                } else {
                    nextRank = I18n.t('lssm.creditserweiterung.ranks')[creditsOfNextRank];
                    creditsToNextRank = creditsOfNextRank - earnedCredits;
                }
                let allianceFundsCredits = response.credits_alliance_current;

                let markup = '<li><a id="menu_creditsverwaltung" class="dropdown_toggle href="#" role="button" data-toggle="dropdown" aria-expanded="false">';
                markup += '<img id="ls-credits-money-img" style="height: 19px; width: 19px; cursor: pointer;" src="';
                markup += lssm.getlink("/modules/lss-creditserweiterung/img/icons8-money-box-150.png") + '">';
                markup += '<span class="visible-xs">' + I18n.t('lssm.creditserweiterung.texts.dropdownName') + '</span>';
                markup += '<b class="caret"></b></a><ul class="dropdown-menu" role="menu" aria-labelledby="menu_Creditsverwaltung">';
                markup += '<li role="presentation" id="creditserweiterungCredits"></li>';
                markup += '<li id="creditsOverview" role="presentation"><a href="/credits/overview" class="lightbox-open" target="blank">' + I18n.t('lssm.creditserweiterung.texts.creditsOverview') + '</a></li>';
                markup += '<li role="presentation" id="creditserweiterungCoins"></li>';
                markup += '<li role="presentation"><a href="/coins/list" class="lightbox-open" target="blank">' + I18n.t('lssm.creditserweiterung.texts.coinsProtokoll') + '</a></li>';
                markup += '<li class="divider" role="presentation"></li><li role="presentation"><a id="creditsextensionEarnedCredits">' + I18n.t('lssm.creditserweiterung.texts.earnedCredits') + ': ' + earnedCredits.toLocaleString() + '</a>';
                markup += '<a id="creditsextensionNextRank">' + I18n.t('lssm.creditserweiterung.texts.creditsToNextRank') + '<br>(' + nextRank + '):<br>' + creditsToNextRank.toLocaleString() + '</a></li>';
                if (response.credits_alliance_active) {
                    markup += '<li class="divider" role="presentation"></li><li><a href="./verband/kasse" class="lightbox-open" id="creditsextensionAllianceFunds">';
                    markup += I18n.t('lssm.creditserweiterung.texts.allianceFunds') + ': ' + allianceFundsCredits.toLocaleString() + ' Credits' + '</a></li>';
                }
                markup += '<li class="divider" role="presentation"></li><li role="presentation"><a>' + I18n.t('lssm.creditserweiterung.texts.updateMessage') + '</a></li></ul></li>';

                $('#menu_creditsverwaltung').remove();
                $('#lssm_dropdown').before(markup);

                $('#creditserweiterungCredits').append($('#navigation_top'));
                $('#creditserweiterungCoins').append($('#coins_top'));

                $('#menu_creditsverwaltung').attr('title', 'Credits: ' + $('#navigation_top').text().replace(/[\D.]*/, '') + '\nCoins: ' + $('#coins_top').text().replace(/[\D.]*/, ''));

                $('#menu_creditsverwaltung').click(function() {
                    updateValues();
                });
            });
    }

    function updateValues() {
        if (updateable) {
            $.get("/api/credits")
                .then(response => {
                    let earnedCredits = response.credits_user_total;
                    let creditsOfNextRank = getCreditsOfNextRank(earnedCredits);
                    if (creditsOfNextRank === null) {
                        nextRank = I18n.t('lssm.creditserweiterung.texts.noFurtherRank');
                        creditsToNextRank = "&infin;";
                    } else {
                        nextRank = I18n.t('lssm.creditserweiterung.ranks')[creditsOfNextRank];
                        creditsToNextRank = creditsOfNextRank - earnedCredits;
                    }
                    let allianceFundsCredits = response.credits_alliance_current;

                    $("#creditsextensionEarnedCredits").html(I18n.t('lssm.creditserweiterung.texts.earnedCredits') + ': ' + earnedCredits.toLocaleString());

                    $("#creditsextensionNextRank").html(I18n.t('lssm.creditserweiterung.texts.creditsToNextRank') + '<br>(' + nextRank + '):<br>' + creditsToNextRank.toLocaleString());

                    if (allianceFundsCredits) {
                        $("#creditsextensionAllianceFunds").html(I18n.t('lssm.creditserweiterung.texts.allianceFunds') + ': ' + allianceFundsCredits.toLocaleString() + ' Credits');
                    }
                    updateable = false;
                    setTimeout(function() {
                        updateable = true;
                    }, 300000);
                });
        }
    }

    let creditsUpdateOrigin = creditsUpdate;

    creditsUpdate = function(a) {
        creditsUpdateOrigin(a);
        $('#menu_creditsverwaltung').attr('title', 'Credits: ' + $('#navigation_top').text().replace(/[\D.]*/, '') + '\nCoins: ' + $('#coins_top').text().replace(/[\D.]*/, ''));
    };

    let coinsUpdateOrigin = coinsUpdate;

    coinsUpdate = function(a) {
        coinsUpdateOrigin(a);
        $('#menu_creditsverwaltung').attr('title', 'Credits: ' + $('#navigation_top').text().replace(/[\D.]*/, '') + '\nCoins: ' + $('#coins_top').text().replace(/[\D.]*/, ''));
    };

    if (location.pathname.match(/\/missions\/\d+/)) return;
    if (location.pathname.match(/\/profile\/\d+/)) return;
    if (location.pathname.match(/\/vehicles\/\d+/)) return;
    if (location.pathname.match(/\/buildings\/\d+/)) return;
    if (location.pathname.match(/\/alliances\/\d+/)) return;
    if (location.pathname.match(/\/verband\/\d+/)) return;

    createExtension();
    setTimeout(function() {
        updateable = true;
    }, 300000);
})($, window, I18n);
