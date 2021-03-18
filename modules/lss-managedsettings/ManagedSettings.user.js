(function (I18n, $) {
    'use strict';

    let VERSION = 1.2;
    let EXPORT_COMPATIBILITY = 1.2;
    let EXPORT_FILE_NAME = "settings.lssm";

    I18n.translations.de_DE.lssm.managedsettings = {
        title: "LSSM Einstellungen",
        text1: "Hier kannst du Einstellungen für deine aktivierten Plugins vornehmen",
        text2: "",
        save: "Speichern & Schließen",
        settings_tab: "Einstellungen",
        addField_btn: "Hinzufügen",
        export_btn: "Einstellungen exportieren",
        import_btn: "Einstellungen importieren",
        reset_btn: "Zurücksetzen",
        reset_hint: "Möchtest du die Einstellungen dieses Moduls wirklich auf die Standardwerte zurücksetzen?",
        reset_success: "Reset der Einstellungen erfolgreich. Bitte lade die Seite neu, damit diese wirksam sind.",
        export_success: "Einstellungen erfolgreich exportiert",
        export_hint: "Bitte beachte, dass nur bereits gespeicherte Einstellungen von momentan aktivierten Module exportiert werden können.",
        import_success: "Die Einstellungen wurden erfolgreich importiert. Du musst die Seite neu laden, damit diese wirksam sind.",
        import_missmatch: "Die eingelesene Datei ist mit der aktuellen Version von LSSM leider nicht mehr kompatibel.",
        import_fail: "Fehler: Beim Import der Datei ist ein Fehler aufgetreten: <strong>{0}</strong>. Bitte informiere einen Entwickler."
    };

    I18n.translations.en_US.lssm.managedsettings = {
        title: "LSSM Settings",
        text1: "Here you can change the settings of your activated plugins.",
        text2: "",
        save: "Save & Close",
        settings_tab: "Settings",
        addField_btn: "Add",
        export_btn: "Export settings",
        import_btn: "Import settings",
        reset_btn: "Reset settings",
        reset_hint: "Are you sure you want to reset the settings of this module to the default values?",
        reset_success: "Successfully reset the settings. You need to reload the page to make them work.",
        export_success: "Successfully exported settings",
        export_hint: "Please note that only previously saved settings of currently activated modules can be exported.",
        import_success: "The settings were successfully imported. You need to reload the page to make them work.",
        import_missmatch: "The read-in file is unfortunately no longer compatible with the current version of LSSM.",
        import_fail: "Error: An error occurred while importing the file: <strong> {0} </strong>. Please inform a developer."
    };

    I18n.translations.cs_CZ.lssm.managedsettings = {
        title: "Nastavení LSSM",
        text1: "Zde můžete změnit nastavení aktivovaných pluginů.",
        text2: "",
        save: "Uložit a zavřít",
        settings_tab: "Nastavení",
        addField_btn: "Přidat",
        export_btn: "Export nastavení",
        import_btn: "Import nastavení",
        reset_btn: "Resetovat nastavení",
        reset_hint: "Opravdu chcete obnovit nastavení tohoto modulu na výchozí hodnoty?",
        reset_success: "Nastavení úspěšně obnovte. Chcete-li, aby fungovaly, je třeba stránku znovu načíst.",
        export_success: "Nastavení bylo úspěšně exportováno",
        export_hint: "Upozorňujeme, že lze exportovat pouze dříve uložená nastavení aktuálně aktivovaných modulů.",
        import_success: "Nastavení byla úspěšně importována. Chcete-li, aby fungovaly, je třeba stránku znovu načíst.",
        import_missmatch: "Soubor pro čtení již bohužel již není kompatibilní s aktuální verzí LSSM.",
        import_fail: "Chyba: Při importu souboru došlo k chybě: <strong> {0} </strong>. Prosím informujte vývojáře."
    };

    I18n.translations.es_ES.lssm.managedsettings = {
        title: "Ajustes de LSSM",
        text1: "Aquí puede cambiar la configuración de los plugins activados.",
        text2: "",
        save: "Guardar y Cerrar",
        settings_tab: "Ajustes",
        addField_btn: "Añadir",
        export_btn: "Ajustes de exportación",
        import_btn: "Configuración de importación",
        reset_btn: "Restablecer la configuración",
        reset_hint: "¿Está seguro de que desea restablecer la configuración de este módulo a los valores predeterminados?",
        reset_success: "Reajuste con éxito los ajustes. Necesitas recargar la página para que funcione.",
        export_success: "Configuraciones exportadas con éxito",
        export_hint: "Tenga en cuenta que sólo se pueden exportar los ajustes guardados anteriormente de los módulos actualmente activados.",
        import_success: "La configuración se ha importado correctamente. Necesitas recargar la página para que funcione.",
        import_missmatch: "Lamentablemente, el archivo de lectura ya no es compatible con la versión actual de LSSM.",
        import_fail: "Error: Se ha producido un error al importar el archivo: <strong> {0} </strong>. Por favor, informe a un promotor."
    };

    I18n.translations.pt_PT.lssm.managedsettings = {
        title: "Definições de LSSM",
        text1: "Aqui pode alterar as definições dos seus plugins ativados.",
        text2: "",
        save: "Salvar e Fechar",
        settings_tab: "Configurações",
        addField_btn: "Adicionar",
        export_btn: "Definições de exportação",
        import_btn: "Definições de importação",
        reset_btn: "Redefinir definições",
        reset_hint: "Tem a certeza de que pretende redefinir as definições deste módulo para os valores predefinidos?",
        reset_success: "Redefinir com sucesso as definições. Tens de recarregar a página para que funcionem.",
        export_success: "Configurações exportadas com sucesso",
        export_hint: "Por favor, note que apenas configurações previamente guardadas de módulos atualmente ativados podem ser exportadas.",
        import_success: "As configurações foram importadas com sucesso. Tens de recarregar a página para que funcionem.",
        import_missmatch: "Infelizmente, o ficheiro de leitura já não é compatível com a versão atual do LSSM.",
        import_fail: "Erro: Ocorreu um erro ao importar o ficheiro:<strong> {0} </strong>. Por favor, informe um desenvolvedor."
    };

    I18n.translations.pl_PL.lssm.managedsettings = {
        title: "Ustawienia LSSM",
        text1: "Tutaj można zmienić ustawienia aktywowanych wtyczek.",
        text2: "",
        save: "Zapisz i zamknij",
        settings_tab: "Ustawienia",
        addField_btn: "Dodaj",
        export_btn: "Ustawienia eksportu",
        import_btn: "Ustawienia importu",
        reset_btn: "Resetowanie ustawień",
        reset_hint: "Czy na pewno chcesz przywrócić ustawienia tego modułu do wartości domyślnych?",
        reset_success: "Pomyślnie zresetuj ustawienia. Aby strona działała, należy ją ponownie załadować.",
        export_success: "Sukcesywnie eksportowane ustawienia",
        export_hint: "Należy pamiętać, że tylko wcześniej zapisane ustawienia aktualnie aktywowanych modułów mogą być eksportowane.",
        import_success: "Ustawienia zostały pomyślnie zaimportowane. Aby strona działała, należy ją ponownie załadować.",
        import_missmatch: "Plik do odczytu nie jest już niestety kompatybilny z aktualną wersją LSSM.",
        import_fail: "Błąd: Wystąpił błąd podczas importowania pliku: <strong> {0} </strong>. Proszę poinformować dewelopera."
    };

    I18n.translations.sv_SE.lssm.managedsettings = {
        title: "LSSM-inställningar",
        text1: "Här kan du ändra inställningarna för dina aktiverade plugins.",
        text2: "",
        save: "Spara & stäng",
        settings_tab: "inställningar",
        addField_btn: "tillägga",
        export_btn: "Exportera inställningar",
        import_btn: "Importera inställningar",
        reset_btn: "Återställ inställningar",
        reset_hint: "Är du säker på att du vill återställa inställningarna för den här modulen till standardvärdena?",
        reset_success: "Återställ inställningarna. Du måste ladda om sidan för att få dem att fungera.",
        export_success: "Exporterade inställningar lyckades",
        export_hint: "Observera att endast tidigare sparade inställningar för för närvarande aktiverade moduler kan exporteras.",
        import_success: "Inställningarna importerades framgångsrikt. Du måste ladda om sidan för att få dem att fungera.",
        import_missmatch: "Den inlästa filen är tyvärr inte längre kompatibel med den aktuella versionen av LSSM.",
        import_fail: "Fel: Ett fel inträffade vid import av filen: <strong> {0} </strong>. Informera en utvecklare."
    };

    I18n.translations.da_DK.lssm.managedsettings = {
        title: "LSSM-indstillinger",
        text1: "Her kan du ændre indstillingerne for dine aktiverede plugins.",
        text2: "",
        save: "Gem og luk",
        settings_tab: "Indstillinger",
        addField_btn: "Tilføje",
        export_btn: "Eksporter indstillinger",
        import_btn: "Importer indstillinger",
        reset_btn: "Nulstil indstillingerne",
        reset_hint: "Er du sikker på, at du vil nulstille indstillingerne for dette modul til standardværdier?",
        reset_success: "Nulstil indstillingerne. Du skal genindlæse siden for at få dem til at fungere.",
        export_success: "Eksporterede indstillinger",
        export_hint: "Bemærk, at kun tidligere gemte indstillinger af aktuelt aktiverede moduler kan eksporteres.",
        import_success: "Indstillingerne blev importeret med succes. Du skal genindlæse siden for at få dem til at fungere.",
        import_missmatch: "Den indlæste fil er desværre ikke længere kompatibel med den aktuelle version af LSSM.",
        import_fail: "Fejl: Der opstod en fejl under import af filen:<strong> {0} </strong>. Fortæl en udvikler."
    };

    I18n.translations.nb_NO.lssm.managedsettings = {
        title: "LSSM-innstillinger",
        text1: "Her kan du endre innstillingene for dine aktiverte plugins.",
        text2: "",
        save: "Lagre og lukk",
        settings_tab: "innstillinger",
        addField_btn: "Legg til",
        export_btn: "Eksporter innstillinger",
        import_btn: "Importer innstillinger",
        reset_btn: "Tilbakestill innstillinger",
        reset_hint: "Er du sikker på at du vil tilbakestille innstillingene for denne modulen til standardverdiene?",
        reset_success: "Tilbakestill innstillingene. Du må laste inn siden på nytt for å få dem til å fungere.",
        export_success: "Eksporterte innstillinger",
        export_hint: "Vær oppmerksom på at bare tidligere lagrede innstillinger for aktuelt aktiverte moduler kan eksporteres.",
        import_success: "Innstillingene ble importert. Du må laste inn siden på nytt for å få dem til å fungere.",
        import_missmatch: "Innlesningsfilen er dessverre ikke lenger kompatibel med den nåværende versjonen av LSSM.",
        import_fail: "Feil: Det oppsto en feil under import av filen: <strong> {0} </strong>. Informer en utvikler."
    };

    I18n.translations.it_IT.lssm.managedsettings = {
        title: "Impostazioni LSSM",
        text1: "Qui è possibile modificare le impostazioni dei plugin attivati.",
        text2: "",
        save: "Salva & Chiudi",
        settings_tab: "Impostazioni",
        addField_btn: "Aggiungi",
        export_btn: "Impostazioni di esportazione",
        import_btn: "Importare le impostazioni",
        reset_btn: "Ripristina le impostazioni",
        reset_hint: "Sei sicuro di voler resettare le impostazioni di questo modulo ai valori predefiniti?",
        reset_success: "Ripristinare con successo le impostazioni. È necessario ricaricare la pagina per farle funzionare.",
        export_success: "Impostazioni esportate con successo",
        export_hint: "Si prega di notare che solo le impostazioni salvate in precedenza dei moduli attualmente attivati possono essere esportate.",
        import_success: "Le impostazioni sono state importate con successo. È necessario ricaricare la pagina per farle funzionare.",
        import_missmatch: "Il file letto non è purtroppo più compatibile con la versione corrente di LSSM.",
        import_fail: "Errore: Si è verificato un errore durante l'importazione del file: <strong> {0} </strong>. Si prega di informare uno sviluppatore."
    };

    I18n.translations.fr_FR.lssm.managedsettings = {
        title: "Paramètres LSSM",
        text1: "Ici, vous pouvez modifier les paramètres de vos plugins activés.",
        text2: "",
        save: "Enregistrer et fermer",
        settings_tab: "Réglages",
        addField_btn: "Ajouter",
        export_btn: "Paramètres d'exportation",
        import_btn: "Paramètres d'importation",
        reset_btn: "Réinitialiser les paramètres",
        reset_hint: "Êtes-vous sûr de vouloir réinitialiser les paramètres de ce module aux valeurs par défaut ?",
        reset_success: "Réinitialiser les réglages avec succès. Vous devez recharger la page pour qu'elle fonctionne.",
        export_success: "Paramètres exportés avec succès",
        export_hint: "Veuillez noter que seuls les paramètres précédemment enregistrés des modules actuellement activés peuvent être exportés.",
        import_success: "Les réglages ont été importés avec succès. Vous devez recharger la page pour qu'elle fonctionne.",
        import_missmatch: "Le fichier lu n'est malheureusement plus compatible avec la version actuelle de LSSM.",
        import_fail: "Erreur : Une erreur s'est produite lors de l'importation du fichier : <strong> {0} </strong>. Veuillez en informer un développeur."
    };

    I18n.translations.ko_KR.lssm.managedsettings = {
        title: "LSSM 설정",
        text1: "여기에서 활성화 된 플러그인의 설정을 변경할 수 있습니다.",
        text2: "",
        save: "저장 후 닫기",
        settings_tab: "설정",
        addField_btn: "더하다",
        export_btn: "설정 내보내기",
        import_btn: "가져 오기 설정",
        reset_btn: "설정 초기화",
        reset_hint: "이 모듈의 설정을 기본값으로 재설정 하시겠습니까?",
        reset_success: "설정을 성공적으로 재설정했습니다. 작동하려면 페이지를 새로 고침해야합니다.",
        export_success: "성공적으로 내 보낸 설정",
        export_hint: "현재 활성화 된 모듈의 이전에 저장된 설정 만 내보낼 수 있습니다.",
        import_success: "설정을 성공적으로 가져 왔습니다. 작동하려면 페이지를 새로 고침해야합니다.",
        import_missmatch: "불행히도 읽기 파일은 더 이상 현재 LSSM 버전과 호환되지 않습니다.",
        import_fail: "오류 : 파일을 가져 오는 중 오류가 발생했습니다 : <strong> {0} </strong>. 개발자에게 알려주십시오."
    };

    I18n.translations.ro_RO.lssm.managedsettings = {
        title: "Setări LSSM",
        text1: "Aici puteți modifica setările plugin-urilor activate.",
        text2: "",
        save: "Salvare & Închidere",
        settings_tab: "Setări",
        addField_btn: "Adăugare",
        export_btn: "Setări export",
        import_btn: "Importsetări",
        reset_btn: "Resetarea setărilor",
        reset_hint: "Sigur reinițializați setările acestui modul la valorile implicite?",
        reset_success: "Reinițializați cu succes setările. Trebuie să reîncărcați pagina pentru a le face să funcționeze.",
        export_success: "Setări exportate cu succes",
        export_hint: "Rețineți că numai setările salvate anterior ale modulelor activate în prezent pot fi exportate.",
        import_success: "Setările au fost importate cu succes. Trebuie să reîncărcați pagina pentru a le face să funcționeze.",
        import_missmatch: "Fișierul de citire nu mai este, din păcate, compatibil cu versiunea curentă de LSSM.",
        import_fail: "Eroare: Eroare la importul fișierului: <strong> {0} </strong>. Vă rugăm să informați un dezvoltator."
    };

    I18n.translations.nl_NL.lssm.managedsettings = {
        title: "LSSM instellingen",
        text1: "Hier kun je de instellingen van je geïnstalleerde plugins aanpassen.",
        text2: "",
        save: "Opslaan & sluiten",
        settings_tab: "Instellingen",
        addField_btn: "Toevoegen",
        export_btn: "Instellingen exporteren",
        import_btn: "Instellingen importeren",
        reset_btn: "Reset",
        reset_hint: "Weet u zeker dat u de instellingen van deze module wilt resetten naar de standaardwaarden?",
        reset_success: "De instellingen zijn succesvol gereset. Je moet de pagina opnieuw laden om ze te laten werken.",
        export_success: "Instellingen succesvol geëxporteerd",
        export_hint: "Houdt er rekening mee dat alleen eerder opgeslagen instellingen van momenteel geactiveerde modules kunnen worden geëxporteerd.",
        import_success: "De instellingen zijn succesvol geïmporteerd. Ververs de pagina om ze te gebruiken.",
        import_missmatch: "Het te openen bestand werkt helaas niet meer met de huidige versie van LSSM.",
        import_fail: "Foutmelding: Er is een fout opgetreden bij het importeren van het volgende bestand: <strong> {0} </ strong>." +
            "Informeer AUB een ontwikkelaar van deze melding."
    };
    function closeManagedSettings() {
        $(document).unbind(lssm.hook.prename("lightboxClose"), closeManagedSettings);
        $("#lightbox_iframe_" + iframe_lightbox_number).remove();
    }

    function renderSettings() {
        $(document).bind(lssm.hook.prename("lightboxClose"), closeManagedSettings);
        let markup = '<div class="col-md-12" id="' + lssm.config.prefix + '_appstore_ManagedSettings">';
        markup += '<h1>' + I18n.t('lssm.managedsettings.title') + '</h1>';
        markup += '<p>' + I18n.t('lssm.managedsettings.text1') + '</p>';
        markup += '<span class="pull-right">';
        markup += '<button type="button" class="btn btn-success btn-sm ';
        markup += lssm.config.prefix + '_appstore_ManagedSettings_close" aria-label="Close">';
        markup += '<span aria-hidden="true">' + I18n.t('lssm.managedsettings.save') + '</span>';
        markup += '</button>';
        markup += '<a id="lssm-export-settings" class="btn btn-warning btn-xs" style="margin-right: 5px;">';
        markup += '<span aria-hidden="true"><span class="glyphicon glyphicon-floppy-save"></span>' + I18n.t(
            'lssm.managedsettings.export_btn') + '</span>';
        markup += '</a>';
        markup += '<input type="file" accept=".lssm" id="lssm-import-file" style="display:none">';
        markup += '<a id="lssm-import-settings" class="btn btn-success btn-xs" style="margin-right: 5px;">';
        markup += '<span aria-hidden="true"><span class="glyphicon glyphicon-floppy-open"></span>' + I18n.t(
            'lssm.managedsettings.import_btn') + '</span>';
        markup += '</a>';
        markup += '<span class="label label-danger">Version: ' + VERSION + '</span>';
        markup += '</span>';
        markup += '</div>';
        markup += '<div class="col-md-12">';
        markup += '<fieldset id="module_settings" style="margin-bottom: 10px;">';
        markup += '<div id="managedsettings_tab_button"></div>';
        markup += '<legend>' + I18n.t('lssm.managedsettings.text2') + '</legend>';
        markup += '<div id="managedsettings_tabs">';
        markup += '</div>';
        markup += '</fieldset>';
        markup += '</div>';
        markup += '<p>';
        markup += '<button type="button" class="btn btn-success btn-sm ';
        markup += lssm.config.prefix + '_appstore_ManagedSettings_close" aria-label="Close">';
        markup += '<span aria-hidden="true">' + I18n.t('lssm.managedsettings.save') + '</span>';
        markup += '</button>';
        markup += '</p>';
        markup += '</div>';
        //$('#map_outer').before(markup);
        let dom = lssm.modal.show(markup);

        let sortable = [];
        for (let module in lssm.managedSettings.registeredModules) {
            sortable.push(lssm.managedSettings.registeredModules[module]);
        }

        sortable.sort(function (a, b) {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        });
        let first = true;
        $.each(sortable, function () {
            let module = this;
            let moduleKey = module.id;
            $("#managedsettings_tab_button").append('<button id="' + moduleKey + '" class="btn btn-sm btn-primary">' + module.title + '</button>');
            markup = "";
            if (first) {
                markup += '<div id="' + moduleKey + '_wrap">';
                first = false;
            }
            else
                markup += '<div id="' + moduleKey + '_wrap" style="display:none">';
            markup += '<h3>' + module.title +
                '<button class="btn btn-default settings-reset" data-module="' + moduleKey +
                '" style="margin-left: 5px;" type="reset"><span class="glyphicon glyphicon-floppy-remove" title="' + I18n.t(
                    'lssm.managedsettings.reset_btn') + '"></span></button ></h3>';
            if (module.info_text) {
                markup += '<h5 id="' + moduleKey + '_description">' + module.info_text + '</h5>';
            }
            markup += '</div>';
            $('#managedsettings_tabs').append(markup);
            for (let settingsKey in module.settings) {
                if (module.settings[settingsKey].ui.parent) {
                    $('#' + module.settings[settingsKey].ui.parent + '_wrap').append(renderUIElement(moduleKey, settingsKey, module
                        .settings[settingsKey]));
                } else {
                    $('#' + moduleKey + '_wrap').append(renderUIElement(moduleKey, settingsKey, module.settings[settingsKey]));
                }
            }
        });
        $('#managedsettings_tab_button button').on("click", function (e) {
            let tab = e.target.getAttribute('id');
            $('#managedsettings_tabs').children(':visible').fadeOut('fast', function () {
                $('#managedsettings_tabs #' + tab + '_wrap').fadeIn();
            });
        });


        // Save & Close function
        $('.' + lssm.config.prefix + '_appstore_ManagedSettings_close').click(function () {
            saveSettings();
            location.reload();
        });

        $('.flexListExpander').click(function () {
            let container = $(this).parent().find('.flexListContainer');
            let clonedElement = $(container).find('div:last').clone();
            clonedElement.val(' ');
            clonedElement.find('span').click(function () {
                $(this).parent().remove();
            });
            container.append(clonedElement);
        });

        $('.flexListRemove').click(function () {
            let container = $(this).parent().remove();
        });
    }


    function applySettingsFunctions() {
        for (let moduleKey in lssm.managedSettings.registeredModules) {
            let module = lssm.managedSettings.registeredModules[moduleKey];
            for (let settingsKey in module.settings) {
                let setting = module.settings[settingsKey];
                if (setting.ui.custom_function && setting.ui.custom_function_event) {
                    $('#' + moduleKey + '_' + settingsKey).on(setting.ui.custom_function_event, setting.ui.custom_function);
                }
            }
        }
    }

    function applyModuleFunctions() {

        // Reset Settings
        $('.settings-reset').click(function () {
            if (!confirm(I18n.t('lssm.managedsettings.reset_hint'))) {
                return;
            }
            let moduleId = $(this).data('module');
            lssm.managedSettings.reset(moduleId);
            $('#' + lssm.config.prefix + '_appstore_ManagedSettings').remove();
            renderSettings();
            applySettingsFunctions();
            applyModuleFunctions();
            lssm.notification(I18n.t('lssm.managedsettings.reset_success'), null, 15000);
        });

        // Export Settings
        $('#lssm-export-settings').click(function () {
            if (!confirm(I18n.t('lssm.managedsettings.export_hint'))) {
                return;
            }
            // Initialize Datamodel 1.1
            let exportData = {
                version: VERSION,
                activeModules: {},
                moduleSettings: {}
            };

            // Add active Modules
            exportData['activeModules'] = lssm.settings.get("Modules");

            // Add managedSettings
            for (let moduleKey in lssm.managedSettings.registeredModules) {
                // Export only if there is data
                if (lssm.settings.get(moduleKey)) {
                    exportData.moduleSettings[moduleKey] = lssm.settings.get(moduleKey);
                }
            }
            // Export as file
            let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData));
            this.setAttribute("href", "data:" + data);
            this.setAttribute("download", EXPORT_FILE_NAME);

            // Push notification
            lssm.notification(I18n.t('lssm.managedsettings.export_success'));
        });

        // Simulate click on file selection when clicking "import"-btn
        $('#lssm-import-settings').click(function () {
            $('#lssm-import-file').click();
        });

        // File import Eventhandler -> process import
        $("#lssm-import-file:file").change(function () {
            let file = document.getElementById('lssm-import-file').files[0];
            if (file) {
                // create reader
                let reader = new FileReader();
                reader.readAsText(file);
                reader.onload = function (e) {
                    try {
                        let importedJson = jQuery.parseJSON(e.target.result);
                        // Verfify version compatibility
                        if (importedJson.version < EXPORT_COMPATIBILITY) {
                            lssm.notification(I18n.t('lssm.managedsettings.import_missmatch'), 'alert-danger', 15000);
                            return;
                        }

                        // Store active Modules
                        lssm.settings.set("Modules", importedJson.activeModules);

                        // Store module settings
                        for (let moduleKey in importedJson.moduleSettings) {
                            let module = importedJson.moduleSettings[moduleKey];
                            lssm.settings.set(moduleKey, module);
                        }
                        // Push notification
                        lssm.notification(I18n.t('lssm.managedsettings.import_success'), null, 10000);
                        $('#' + lssm.config.prefix + '_appstore_ManagedSettings').remove();
                    } catch (e) {
                        // Oh no :-(
                        lssm.notification(String.format(I18n.t('lssm.managedsettings.import_fail'), e), 'alert-danger', 15000);
                    }
                };
            }
        });
    }

    function renderUIElement(moduleKey, settingsKey, element) {
        try {
            let elementName = moduleKey + '_' + settingsKey;
            let response = '<div id="' + elementName + '_wrap"' + (element.ui.hidden ? 'style="display: none;"' : '') + ' class="lssm_setting_line">';
            if (element.ui.type === "radio") {
                let optionCount = 0;
                $.each(element.ui.options, function () {
                    let prop_checked = "";
                    if (this.value === element.value) prop_checked = " checked ";
                    response += '<div id="' + elementName + '_' + optionCount + '_wrap" class="col-md-12" style="border-bottom:1px solid black">';
                    response += '<div style="margin-left: 4px;" class="col-md-6">' + this.title + '<br />';
                    response += '<small>' + this.description + '</small></div>';
                    response += '<div class="col-md-4">';
                    response += '<input type="radio" name="' + elementName + '" id="' + elementName + '_' + optionCount + '" ' +
                        prop_checked;
                    response += ' value="' + this.value + '">';
                    response += '</div></div>';
                    optionCount++;
                });
            } else if (element.ui.type === "checkbox") {
                let checked = element.value === true ? " checked " : "";
                response += '<div class="col-md-12">';
                response += '<div class="col-md-4">' + element.ui.label;
                if (element.ui.description) response += '<br /><small>' + element.ui.description + '</small>';
                response += '</div>';
                response += '<div class="col-md-4"><input type="checkbox" ' + checked +
                    ' style="margin-right: 4px;" name="' + elementName + '" id="' + elementName + '"></div>';
                response += '</div>';
            } else if (element.ui.type === "hidden") {
                response += '<input type="hidden" value="' + element.value + '" id="' + elementName + '" name="' + elementName +
                    '">';
            } else if (element.ui.type === "button") {
                response += '<div class="col-md-3">';
                response += '<button type="button" class="btn btn-grey btn-sm" id="' + elementName +
                    '" style="margin-left: 16px;">' + element.ui.label + '</button></div>';
            } else if (element.ui.type === "text" || element.ui.type === "int" || element.ui.type === "float") {
                response += '<div class="col-md-12 ' + (element.ui.class ? element.ui.class : "") + '" id="' + elementName + '_wrap">';
                response += '<span class="col-md-4">' + element.ui.label + '</span>';
                response += '<input type="text" class="col-md-4" name="' + elementName + '" id="' + elementName + '" value="' + element.value +
                    '">';
                if (element.ui.description) response += '<div style="margin-left: 16px;">' + element.ui.description + '</div>';
                response += '</div>';
            } else if (element.ui.type === "number") {
                response += '<div class="col-md-12" id="' + elementName + '_wrap" ' + (element.ui.class ? 'class="' + element.ui.class + '"' : "") +
                    '>';
                response += '<span class="col-md-4" >' + element.ui.label + '</span>';
                response += '<input type="number" class="col-md-4" name="' + elementName + '" id="' + elementName + '" value="' + element.value +
                    '" ' + (element.ui.min ? ' min=' + element.ui.min : "") + (element.ui.max ? ' max=' + element.ui.max : "") + '>';
                if (element.ui.description) response += '<div style="margin-left: 16px;">' + element.ui.description + '</div>';
                response += '</div>';
            } else if (element.ui.type === "toggle") {
                response +=
                    '<div class="col-md-3"><div class="panel panel-default" style="display: inline-block;width:100%;" id="' +
                    elementName + '_toggle_wrap">';
                response += '<div class="panel-body"><span class="pull-right"><div class="onoffswitch">';
                response += '<input class="onoffswitch-checkbox" ' + (element.value ? 'checked="true"' : '') + ' id="' +
                    elementName + '" value="true" name="onoffswitch" type="checkbox">';
                response += '<label class="onoffswitch-label" for="' + elementName + '"></label>';
                response += '</div></span>';
                response += '<h4>' + element.ui.label + '</h4><small>' + element.ui.description + '</small></div>'
                response += '</div></div>';
            } else if (element.ui.type === "flexList") {
                response += '<div class="col-md-12 ' + (element.ui.class ? element.ui.class : "") + '" id="' + elementName + '_wrap">';
                response += '<div class="col-md-4">' + element.ui.label + '</div>';
                response += '<div class="col-md-4 flexListContainer">';
                if (element.ui.description) response += '<div style="margin-left: 16px;">' + element.ui.description + '</div>';

                element.value.forEach((entry, index) => {
                    response += '<div class="flexListEntry"><input type="text" name="' + elementName + '_entry' + '" value="' + entry +
                        '"><span class="flexListRemove glyphicon glyphicon-minus"></span></div>';
                });
                response += '</div>';
                if (element.ui.allowSizeChange) {
                    console.log('render');
                    response += '<div style="cursor: pointer" class="flexListExpander col-md-2"><span aria-hidden="true"><span class="glyphicon glyphicon-plus"></span>' + I18n.t(
                        'lssm.managedsettings.addField_btn') + '</span></div>';
                }
                response += '</div>';

            } else {
                console.error(elementName + ' has unknown ui type: ' + element.ui.type);
            }
            response += '</div>';
            return response;
        } catch (e) {
            console.log('Error rendering ', element, e);
            return '';
        }
    }

    function saveSettings() {
        for (let moduleKey in lssm.managedSettings.registeredModules) {
            let module = lssm.managedSettings.registeredModules[moduleKey];
            for (let settingsKey in module.settings) {
                let setting = module.settings[settingsKey];
                let elementName = moduleKey + '_' + settingsKey;
                let formElement = $('#' + elementName);
                if (setting.ui.type === 'checkbox' || setting.ui.type === 'toggle') {
                    if (formElement.is(':checked')) {
                        setting.value = true;
                    } else {
                        setting.value = false;
                    }
                } else if (setting.ui.type === 'radio') {
                    setting.value = $("input[name='" + elementName + "']:checked").val()
                } else if (setting.ui.type === 'int') {
                    setting.value = parseInt(formElement.val());
                } else if (setting.ui.type === 'float') {
                    setting.value = parseFloat(formElement.val());
                } else if (setting.ui.type === 'flexList') {
                    let values = [];
                    $('input[name^=' + moduleKey + '_' + settingsKey + '_]').each((key, entry) => {
                        values.push($(entry).val());
                    });
                    setting.value = values;
                } else {
                    setting.value = formElement.val();
                }

            }
            lssm.managedSettings.update(module);
        }
    }

    let li = $('<li role="presentation"><a href="#">' + I18n.t('lssm.managedsettings.settings_tab') + '</a></li>').click(
        function () {
            renderSettings();
            applySettingsFunctions();
            applyModuleFunctions();
        })

    $('#lssm_menu').append(li);

})(I18n, jQuery);
