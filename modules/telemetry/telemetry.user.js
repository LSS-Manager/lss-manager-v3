(function (I18n, $) {
    I18n.translations.de_DE.lssm.telemetry = {
        question: "Der LSS-Manager sendet Nicht-Personenbezogene Daten an die Entwickler zur Verbesserung des Skriptes und zum finden von Fehlern.\r\n"+
          "Zu diesen Daten gehören: Deine ID, dein Nutzername, die Anzahl der Wachen, der genutzte Browser und aktivierte Module.\r\n\r\n"+
          "Stimmst zu diesem zu?"
    };
    I18n.translations.en_US.lssm.telemetry = {
        question: "The LSS Manager sends non-personal data to the developers to improve the script and find errors.\r\n" +
          "These data include: your ID, username, the number of guards, the browser used, and enabled modules.\r\n\r\n" +
          "Do you agree with this?"
    };
    I18n.translations.pt_PT.lssm.telemetry = {
        question: "O LSS Manager envia dados não pessoais aos desenvolvedores para melhorar o script e encontrar erros.\r\n" +
          "Esses dados incluem: seu ID, nome de usuário, número de guardas, navegador usado e módulos ativados.\r\n\r\n" +
          "Você concorda com isso?"
    };
    I18n.translations.cs_CZ.lssm.telemetry = {
        question: "Správce LSS odesílá vývojářům jiné než osobní údaje, aby vylepšil skript a zjistil chyby.\r\n" +
          "Tyto údaje zahrnují: vaše ID, uživatelské jméno, počet strážců, použitý prohlížeč a povolené moduly.\r\n\r\n" +
          "Souhlasíte s tím?"
    };
    I18n.translations.pl_PL.lssm.telemetry = {
        question: "LSS Manager wysyła dane nieosobowe do programistów w celu ulepszenia skryptu i znalezienia błędów.\r\n" +
          "Dane te obejmują: Twój identyfikator, nazwę użytkownika, liczbę strażników, używaną przeglądarkę i włączone moduły.\r\n\r\n" +
          "Zgadzasz się z tym?"
    };
    I18n.translations.sv_SE.lssm.telemetry = {
        question: "LSS Manager skickar icke-personlig information till utvecklarna för att förbättra skriptet och hitta fel.\r\n" +
          "Dessa data inkluderar: ditt ID, användarnamn, antalet vakter, den webbläsare som används och aktiverade moduler.\r\n\r\n" +
          "Håller du med om detta?"
    };
    I18n.translations.da_DK.lssm.telemetry = {
        question: "LSS Manager sender ikke-personlige data til udviklerne for at forbedre scriptet og finde fejl.\r\n" +
          "Disse data inkluderer: dit ID, brugernavn, antallet af vagter, den anvendte browser og aktiverede moduler.\r\n\r\n" +
          "Er du enig i dette?"
    };
    I18n.translations.nb_NO.lssm.telemetry = {
        question: "LSS Manager sender ikke-personlige data til utviklerne for å forbedre skriptet og finne feil.\r\n" +
          "Disse dataene inkluderer: IDen din, brukernavnet, antall vakter, nettleseren som er brukt og aktiverte moduler.\r\n\r\n" +
          "Er du enig i dette?"
    };
    I18n.translations.it_IT.lssm.telemetry = {
        question: "LSS Manager invia dati non personali agli sviluppatori per migliorare lo script e trovare gli errori.\r\n" +
          "Questi dati includono: il tuo ID, il tuo nome utente, il numero di guardie, il browser utilizzato e i moduli abilitati.\r\n\r\n" +
          "Sei d'accordo con questo?"
    };
    I18n.translations.fr_FR.lssm.telemetry = {
        question: "Le gestionnaire LSS envoie des données non personnelles aux développeurs pour améliorer le script et trouver des erreurs.\r\n" +
          "Ces données comprennent : votre identifiant, votre nom d'utilisateur, le nombre de gardes, le navigateur utilisé et les modules activés.\r\n\r\n" +
          "Êtes-vous d'accord avec cela ?"
    };
    I18n.translations.ko_KR.lssm.telemetry = {
        question: "LSS Manager는 비 개인 데이터를 개발자에게 보내서 스크립트를 개선하고 오류를 찾습니다.\r\n" +
          "이러한 데이터에는 ID, 사용자 이름, 가드 수, 사용 된 브라우저 및 활성화 된 모듈이 포함됩니다.\r\n\r\n" +
          "이것에 동의하십니까?"
    };
    I18n.translations.ro_RO.lssm.telemetry = {
        question: "LSS Manager trimite date non-personale dezvoltatorilor pentru a îmbunătăți script-ul și pentru a găsi erori.\r\n" +
          "Aceste date includ: ID-ul dvs., numele de utilizator, numărul de gărzi, browserul utilizat și modulele activate.\r\n\r\n" +
          "Ești de acord cu asta?"
    };
    I18n.translations.nl_NL.lssm.telemetry = {
        question: "De LSS Manager stuurt niet-persoonlijke gegevens naar de ontwikkelaars om het script te verbeteren en fouten te vinden.\r\n" +
          "Deze gegevens omvatten: uw ID, gebruikersnaam, het aantal posten, de gebruikte browser en ingeschakelde modules.\r\n\r\n" +
          "Bent u het hiermee eens?"
    };

    function getModules()
    {
        let active = [];
        for (let m in lssm.Module){
            if (lssm.Module[m].active)
            {
                active.push(m);
            }
        }
        return active;
    }
    function getUserAgent()
    {
        let ua = navigator.userAgent, tem,
          M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem !== null)
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) !== null)
            M.splice(1, 1, tem[1]);
        return M.join(' ');
    }


    let active = false;
    if(!lssm.settings.exists("telemetry"))
    {
        let con = confirm(I18n.t('lssm.telemetry.question'))
        active = con;
        lssm.settings.set("telemetry", (con ? 1 : 0));
    }
    else
    {
        if(lssm.settings.get("telemetry", "0") == "1")
            active = true;
    }
    if (active && typeof user_id !== "undefined" && typeof user_premium !== "undefined")
    {
        let data = {};
        // Lets grab the users key
        $.ajax({
            url: lssm.config.key_link + user_id,
            headers: {
                'X-LSS-Manager': lssm.headerVersion()
            },
            success(data) {
                try {
                    // Try to parse the answer as JSON
                    data = JSON.parse(data);
                    lssm.key = data.code;
                    let name = $.trim($("#navbar_profile_link").text());
                    data.bro = getUserAgent();
                    data.pro = user_premium;
                    data.bui = lssm.buildings.length;
                    data.version = lssm.config.version;
                    data.mods = getModules();
                    data = JSON.stringify(data);
                    $.post(lssm.config.stats_uri, {
                        uid: user_id, key: lssm.key, game: lssm.config.game, uname: name, data: data
                    });
                } catch (e) {
                    lssm.key = null;
                }
            }
        });
    }
})(I18n, $);
