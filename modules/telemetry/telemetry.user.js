(function (I18n, $) {
    const v4Modules = ['aaoZaehler', 'AaoSearch', 'ShareAlliancePost', /*'centermap,*/ 'Clock', 'creditserweiterung', /*'dashboard',*/ 'missionKeyword', /*'missionHelper',*/ 'allianceMissionlistShare', 'extendedBuilding', 'iconFilter', /*'keyboardAlert',*/ /*'heatmap',*/ 'Eventsmission', 'tailoredTabs', 'missionDate', 'MissionOut', 'Notification_Alert', /*'statusCount',*/, 'sumDailyMissions', 'displayUserId', 'WachenHoverStati', 'overview'].filter(module => lssm.Module[module].active);
    const v4ModulesList = v4Modules.map(module => I18n.t(`lssm.apps.${module}.name`)).sort().map(module => `<li style="list-style: unset !important;">${module}</li>`).join('');
    
    I18n.translations.de_DE.lssm.telemetry = {
        question:
            'Der LSS-Manager sendet Nicht-Personenbezogene Daten an die Entwickler zur Verbesserung des Skriptes und zum finden von Fehlern.\r\n' +
            'Zu diesen Daten gehören: Deine ID, dein Nutzername, die Anzahl der Wachen, der genutzte Browser und aktivierte Module.\r\n\r\n' +
            'Stimmst zu diesem zu?',
        v4ModulesNote: {
            title: 'Hinweis für Nutzer des LSS-Manager V.3',
            content: `Hallo ${window.user_name}, <br>
Vielen Dank für dein treues Nutzen des LSS-Manager V.3!<br>
Mit diesem kleinen Popup möchten wir dir einen kurzen Zwischenstand geben, welche der derzeit von dir genutzten Module bereits im LSS-Manager V.4 vorhanden sind: <br>
<ul>
    ${v4ModulesList}
</ul>
Natürlich musst du dich nicht von deiner gewohnten Umgebung verabschieden, allerdings lohnt es sich, mal ein Blick in die V4 zu werfen 😉. Eine Übersicht, welche Module der V3 wo in der V4 zu finden sind, findest du in unserem <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Möchtest du bei bestimmten Modulen ganz bewusst nicht auf die V4 umsteigen? Erzähl uns gerne davon, warum dir die V3 an diesem Punkt besser gefällt, vielleicht findet sich ja eine Lösung in der V4.<br><br>
Viele Grüße<br>
Dein LSSM-Team`,
            button: 'Hinweis schließen',
        }
    };
    I18n.translations.en_US.lssm.telemetry = {
        question:
            'The LSS Manager sends non-personal data to the developers to improve the script and find errors.\r\n' +
            'These data include: your ID, username, the number of guards, the browser used, and enabled modules.\r\n\r\n' +
            'Do you agree with this?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.pt_PT.lssm.telemetry = {
        question:
            'O LSS Manager envia dados não pessoais aos desenvolvedores para melhorar o script e encontrar erros.\r\n' +
            'Esses dados incluem: seu ID, nome de usuário, número de guardas, navegador usado e módulos ativados.\r\n\r\n' +
            'Você concorda com isso?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.cs_CZ.lssm.telemetry = {
        question:
            'Správce LSS odesílá vývojářům jiné než osobní údaje, aby vylepšil skript a zjistil chyby.\r\n' +
            'Tyto údaje zahrnují: vaše ID, uživatelské jméno, počet strážců, použitý prohlížeč a povolené moduly.\r\n\r\n' +
            'Souhlasíte s tím?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.pl_PL.lssm.telemetry = {
        question:
            'LSS Manager wysyła dane nieosobowe do programistów w celu ulepszenia skryptu i znalezienia błędów.\r\n' +
            'Dane te obejmują: Twój identyfikator, nazwę użytkownika, liczbę strażników, używaną przeglądarkę i włączone moduły.\r\n\r\n' +
            'Zgadzasz się z tym?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.es_ES.lssm.telemetry = {
        question:
            'El Administrador LSS envía datos no personales a los desarrolladores para mejorar el script y encontrar errores.\r\n' +
            'Estos datos incluyen: su ID, nombre de usuario, el número de guardias, el navegador utilizado y los módulos habilitados.\r\n\r\n' +
            '¿Está de acuerdo con esto?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.sv_SE.lssm.telemetry = {
        question:
            'LSS Manager skickar icke-personlig information till utvecklarna för att förbättra skriptet och hitta fel.\r\n' +
            'Dessa data inkluderar: ditt ID, användarnamn, antalet vakter, den webbläsare som används och aktiverade moduler.\r\n\r\n' +
            'Håller du med om detta?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.da_DK.lssm.telemetry = {
        question:
            'LSS Manager sender ikke-personlige data til udviklerne for at forbedre scriptet og finde fejl.\r\n' +
            'Disse data inkluderer: dit ID, brugernavn, antallet af vagter, den anvendte browser og aktiverede moduler.\r\n\r\n' +
            'Er du enig i dette?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.nb_NO.lssm.telemetry = {
        question:
            'LSS Manager sender ikke-personlige data til utviklerne for å forbedre skriptet og finne feil.\r\n' +
            'Disse dataene inkluderer: IDen din, brukernavnet, antall vakter, nettleseren som er brukt og aktiverte moduler.\r\n\r\n' +
            'Er du enig i dette?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.it_IT.lssm.telemetry = {
        question:
            'LSS Manager invia dati non personali agli sviluppatori per migliorare lo script e trovare gli errori.\r\n' +
            'Questi dati includono: il tuo ID, il tuo nome utente, il numero di guardie, il browser utilizzato e i moduli abilitati.\r\n\r\n' +
            "Sei d'accordo con questo?",
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.fr_FR.lssm.telemetry = {
        question:
            'Le gestionnaire LSS envoie des données non personnelles aux développeurs pour améliorer le script et trouver des erreurs.\r\n' +
            "Ces données comprennent : votre identifiant, votre nom d'utilisateur, le nombre de gardes, le navigateur utilisé et les modules activés.\r\n\r\n" +
            "Êtes-vous d'accord avec cela ?",
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.ko_KR.lssm.telemetry = {
        question:
            'LSS Manager는 비 개인 데이터를 개발자에게 보내서 스크립트를 개선하고 오류를 찾습니다.\r\n' +
            '이러한 데이터에는 ID, 사용자 이름, 가드 수, 사용 된 브라우저 및 활성화 된 모듈이 포함됩니다.\r\n\r\n' +
            '이것에 동의하십니까?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.ro_RO.lssm.telemetry = {
        question:
            'LSS Manager trimite date non-personale dezvoltatorilor pentru a îmbunătăți script-ul și pentru a găsi erori.\r\n' +
            'Aceste date includ: ID-ul dvs., numele de utilizator, numărul de gărzi, browserul utilizat și modulele activate.\r\n\r\n' +
            'Ești de acord cu asta?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };
    I18n.translations.nl_NL.lssm.telemetry = {
        question:
            'De LSS Manager stuurt niet-persoonlijke gegevens naar de ontwikkelaars om het script te verbeteren en fouten te vinden.\r\n' +
            'Deze gegevens omvatten: uw ID, gebruikersnaam, het aantal posten, de gebruikte browser en ingeschakelde modules.\r\n\r\n' +
            'Bent u het hiermee eens?',
        v4ModulesNote: {
            title: 'Note for users of LSS-Manager V.3',
            content: `Dear ${window.user_name}, <br>
Thank you for your loyal use of the LSS-Manager V.3!<br>
With this small pop-up we would like to give you a brief interim status of which of the modules you are currently using are already available in the LSS Manager V.4: <br>
<ul>
    ${v4ModulesList}
</ul>
Of course, you don't have to say goodbye to your familiar environment, but it's worth taking a look at the V4 😉 . You can find an overview of which V3 modules can be found where in the V4 in our <a href="https://proxy.lss-manager.de/v4/docs/de_DE/apps.html#lssm-v-3-vs-lssm-v-4" target="_blank">Wiki</a>.<br>
Do you prefer not to switch to V4 for certain modules? Tell us why you like the V3 better at this point, maybe there will be a solution in the V4.<br><br>
Best regards<br>
Your LSSM-Team`,
            button: 'Close',
        }
    };

    const V4_MODULES_HINT_STORAGE = 'LSSM_V3_Modules_V4_Hint';
    
    const v4ModulesHint = JSON.parse(localStorage.getItem(V4_MODULES_HINT_STORAGE) || '[]');
    if (window.location.pathname === '/' && v4Modules.length && v4Modules.filter(module => !v4ModulesHint.includes(module)).length) {
        const modalStyle = document.createElement('style');
        modalStyle.textContent = `
.lssm-modal-container {
  z-index: 5001 !important;
}
.lssm-modal-container .lssm-modal-overlay[data-modal=dialog] {
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
}
.lssm-modal-container .lssm-modal-modal {
  padding: 1rem;
  overflow: auto !important;
  max-height: 100vh !important;
}
.lssm-modal-block-scroll {
  overflow: hidden;
  width: 100vw;
}
.lssm-modal-container {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}
.lssm-modal-overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  /* z-index: 999; */
  opacity: 1;
}
.lssm-modal-container.scrollable {
  height: 100%;
  min-height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.lssm-modal-modal {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
}
.lssm-modal-container.scrollable .lssm-modal-modal {
  margin-bottom: 2px;
}
.lssm-modal-top-right-slot {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}
.vue-dialog div {
  box-sizing: border-box;
}
.vue-dialog .dialog-flex {
  width: 100%;
  height: 100%;
}
.vue-dialog .dialog-content {
  flex: 1 0 auto;
  width: 100%;
  padding: 15px;
  font-size: 14px;
}
.vue-dialog .dialog-c-title {
  font-weight: 600;
  padding-bottom: 15px;
}
.vue-dialog .vue-dialog-buttons {
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  border-top: 1px solid #eee;
}
.vue-dialog .vue-dialog-buttons-none {
  width: 100%;
  padding-bottom: 15px;
}
.vue-dialog-button {
  font-size: 12px !important;
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 40px;
  height: 40px;
  color: inherit;
  font: inherit;
  outline: none;
}
.vue-dialog-button:hover {
  background: rgba(0, 0, 0, 0.01);
}
.vue-dialog-button:active {
  background: rgba(0, 0, 0, 0.025);
}
.vue-dialog-button:not(:first-of-type) {
  border-left: 1px solid #eee;
}
body.dark .lssm-modal-modal {
  background-color: #505050;
  color: white;
}`;
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('lssm-modal-container');
        modalContainer.id = 'lssm-v3-modal-modules-v4-container';
        modalContainer.innerHTML = `
        <div data-modal="dialog" aria-expanded="true" class="lssm-modal-overlay">
            <div class="lssm-modal-top-right-slot"></div>
        </div>
        <div aria-expanded="true" role="dialog" aria-modal="true" class="lssm-modal-modal v--modal vue-dialog" style="width: 500px; height: auto; transform: translate(calc(50vw - 250px), 50px); position: absolute;">
            <div class="dialog-content">
                <div class="dialog-c-title">${I18n.t('lssm.telemetry.v4ModulesNote.title')}</div>
                <div class="dialog-c-text">
                    ${I18n.t('lssm.telemetry.v4ModulesNote.content')}
                </div>
            </div>
            <div class="vue-dialog-buttons">
                <button type="button" class="vue-dialog-button" style="flex: 1 1 100%;" id="lssm-v3-modal-modules-v4-hint-close">${I18n.t('lssm.telemetry.v4ModulesNote.button')}</button>
            </div>
        </div>`;
        document.body.append(modalStyle, modalContainer);
        $('#lssm-v3-modal-modules-v4-hint-close').click(() => {
            localStorage[V4_MODULES_HINT_STORAGE] = JSON.stringify(v4Modules);
            modalContainer.remove();
            modalStyle.remove();
        });
    }
    
    function getModules() {
        let active = [];
        for (let m in lssm.Module) {
            if (lssm.Module[m].active) {
                active.push(m);
            }
        }
        return active;
    }
    function getUserAgent() {
        let ua = navigator.userAgent,
            tem,
            M =
                ua.match(
                    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
                ) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem !== null)
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2]
            ? [M[1], M[2]]
            : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) !== null)
            M.splice(1, 1, tem[1]);
        return M.join(' ');
    }

    let active = false;
    if (!lssm.settings.exists('telemetry')) {
        let con = confirm(I18n.t('lssm.telemetry.question'));
        active = con;
        lssm.settings.set('telemetry', con ? 1 : 0);
    } else {
        if (lssm.settings.get('telemetry', '0') == '1') active = true;
    }
    if (
        active &&
        typeof user_id !== 'undefined' &&
        typeof user_premium !== 'undefined'
    ) {
        let data = {};
        // Lets grab the users key
        $.ajax({
            url: lssm.config.key_link + user_id,
            headers: {
                'X-LSS-Manager': lssm.headerVersion(),
            },
            success(data) {
                try {
                    // Try to parse the answer as JSON
                    data = JSON.parse(data);
                    lssm.key = data.code;
                    let name = $.trim($('#navbar_profile_link').text());
                    data.bro = getUserAgent();
                    data.pro = user_premium;
                    data.bui = lssm.buildings.length;
                    data.version = lssm.config.version;
                    data.mods = getModules();
                    data = JSON.stringify(data);
                    $.post(lssm.config.stats_uri, {
                        uid: user_id,
                        key: lssm.key,
                        game: lssm.config.game,
                        uname: name,
                        data: data,
                    });
                } catch (e) {
                    lssm.key = null;
                }
            },
        });
    }
})(I18n, $);
