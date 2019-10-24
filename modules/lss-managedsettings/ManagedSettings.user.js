(function (I18n, $) {
    'use strict';

    let VERSION = 1.2;
    let EXPORT_COMPATIBILITY = 1.2;
    let EXPORT_FILE_NAME = "settings.lssm";

    I18n.translations.de.lssm.managedsettings = {
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

    I18n.translations.en.lssm.managedsettings = {
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
        export_success: "Sucsessfully exported settings",
        export_hint: "Please note that only previously saved settings of currently activated modules can be exported.",
        import_success: "The settings were successfully imported. You need to reload the page to make them work.",
        import_missmatch: "The read-in file is unfortunately no longer compatible with the current version of LSSM.",
        import_fail: "Error: An error occurred while importing the file: <strong> {0} </strong>. Please inform a developer."
    };

    I18n.translations.es.lssm.managedsettings = {
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

    I18n.translations.nl.lssm.managedsettings = {
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
        reset_success: "Stel de instellingen succesvol terug. Je moet de pagina opnieuw laden om ze te laten werken.",
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
