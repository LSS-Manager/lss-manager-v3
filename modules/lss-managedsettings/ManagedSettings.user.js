(function(I18n, $) {
	'use strict';

	I18n.translations.de.lssm.managedsettings = {
			title: "LSSM Einstellungen",
			text1: "Hier kannst du Einstellungen für deine aktivierten Plugins vornehmen",
			text2: "",
			save : "Speichern & Schließen",
			settings_tab: "Einstellungen"
	};

	I18n.translations.en.lssm.managedsettings = {
			title: "LSSM Settings",
			text1: "Here you can change the settings of your activated plugins.",
			text2: "",
			save : "Save & Close",
			settings_tab: "Settings"
	};
	I18n.translations.nl.lssm.managedsettings = {
			title: "LSSM instellingen",
            text1: "Hier kun je de instellingen van je geïnstalleerde plugins aanpassen.",
            text2: "",
            save : "Opslaan & sluiten",
            settings_tab: "Instellingen"
	};

	function renderSettings() {
		if($('#' + lssm.config.prefix + '_appstore_ManagedSettings').length > 0) return false;
		var markup = '<div class="jumbotron" id="' + lssm.config.prefix + '_appstore_ManagedSettings">';
		markup += '<h1>' + I18n.t('lssm.managedsettings.title') + '</h1>';
		markup += '<p>' + I18n.t('lssm.managedsettings.text1') + '</p>';
		markup += '<div><fieldset id="module_settings" style="margin-bottom: 10px;">';
		markup += '<legend>' + I18n.t('lssm.managedsettings.text2') + '</legend>';
		markup += '</fieldset></div>';
		markup += '<p>';
		markup += '<button type="button" class="btn btn-success btn-sm" id="' + lssm.config.prefix + '_appstore_ManagedSettings_close" aria-label="Close">';
		markup += '<span aria-hidden="true">' + I18n.t('lssm.managedsettings.save') + '</span>';
		markup += '</button>';
		markup += '</p>';
		markup += '<span class="pull-right">';
		markup += '<span class="label label-danger">Version 1.0</span>';
		markup += '</span>';
		markup += '</div>';
		$('#map_outer').before(markup);

		var sortable = [];
		for (var module in lssm.managedSettings.registeredModules) {
		    sortable.push(lssm.managedSettings.registeredModules[module]);
		}

		sortable.sort(function(a,b){
		    if(a.title < b.title) return -1;
		    if(a.title > b.title) return 1;
		    return 0;
		});

		$.each(sortable, function(){
			var module = this;
			var moduleKey = module.id;
			markup = "";
			markup += '<div id="' + moduleKey + '_wrap">';
			markup += '<h3>' + module.title + '</h3>';
			markup += '</div>';
			$('#module_settings').append(markup);
			for(var settingsKey in module.settings) {
				if(module.settings[settingsKey].ui.parent){
					$('#' + module.settings[settingsKey].ui.parent + '_wrap').append(renderUIElement(moduleKey, settingsKey, module.settings[settingsKey]));
				} else {
					$('#' + moduleKey + '_wrap').append(renderUIElement(moduleKey, settingsKey, module.settings[settingsKey]));
				}
			}
		});



		// Save & Close function
		$('#' + lssm.config.prefix + '_appstore_ManagedSettings_close').click(function() {
			saveSettings();
			location.reload();
		});
	}

	function applyFunctions() {
        for(var moduleKey in lssm.managedSettings.registeredModules) {
            var module = lssm.managedSettings.registeredModules[moduleKey];
            for(var settingsKey in module.settings) {
                var setting = module.settings[settingsKey];
                if(setting.ui.custom_function && setting.ui.custom_function_event){
                    $('#' + moduleKey + '_' + settingsKey).on(setting.ui.custom_function_event,setting.ui.custom_function);
                }
            }
        }
    }

	function renderUIElement(moduleKey, settingsKey, element){
		var elementName = moduleKey + '_' + settingsKey;
		var response = '<div id="' + elementName + '_wrap">';
		if(element.ui.type === "radio"){
			var optionCount = 0;
			$.each(element.ui.options, function(){
				var prop_checked = "";
				if(this.value === element.value) prop_checked = " checked ";
				response += '<div id="' + elementName + '_' + optionCount +'_wrap">';
				response += '<input type="radio" name="' + elementName + '" id="' + elementName + '_' + optionCount +'" ' + prop_checked;
				response += ' value="' + this.value + '">';
				response += '<label style="margin-left: 4px;" for="radio-1">' + this.title + '</label>';
				response += '<div style="margin-left: 16px;">' + this.description + '</div>';
				response += '</div>';
				optionCount ++;
			});
		} else if(element.ui.type === "checkbox"){
			var checked = element.value === true ? " checked " : "";
			response += '<div style="margin-left: 16px;"><input type="checkbox" ' + checked + ' style="margin-right: 4px;" name="' + elementName + '" id="' + elementName + '">' + element.ui.label + '</div>';
			if(element.ui.description) response += '<div style="margin-left: 16px;">' + element.ui.description + '</div>';
		} else if(element.ui.type === "hidden"){
			response += '<input type="hidden" value="' + element.value + '" id="' + elementName + '" name="' + elementName + '">';
		} else if(element.ui.type === "button"){
			response += '<button type="button" class="btn btn-grey btn-sm" id="' + elementName +'" style="margin-left: 16px;">';
			response += '<span>' + element.ui.label + '</span>';
			response += '</button>';
		} else if(element.ui.type === "text" || element.ui.type === "int" || element.ui.type === "float"){
			response += '<div id="' + elementName + '_wrap" ' + (element.ui.class ?  'class="' + element.ui.class + '"' : "") + '>';
			response += '<label style="margin-left: 4px;" for="' + elementName + '">' + element.ui.label + '</label>';
			response += '<input type="text" name="' + elementName + '" id="' + elementName + '" value="' + element.value + '">';
			if(element.ui.description) response += '<div style="margin-left: 16px;">' + element.ui.description + '</div>';
			response += '</div>';
		} else if(element.ui.type === "toggle"){
			response += '<div class="col-md-3"><div class="panel panel-default" style="display: inline-block;width:100%;" id="' + elementName + '_toggle_wrap">';
			response += '<div class="panel-body"><span class="pull-right"><div class="onoffswitch">';
			response += '<input class="onoffswitch-checkbox" '+ (element.value ? 'checked="true"':'')+' id="' + elementName + '" value="true" name="onoffswitch" type="checkbox">';
			response += '<label class="onoffswitch-label" for="' + elementName + '"></label>';
			response += '</div></span>';
			response += '<h4>' + element.ui.label + '</h4><small>' + element.ui.description + '</small></div>'
			response += '</div></div>';
		}else {
			console.log(elementName + ' has unknown ui type: ' + element.ui.type);
		}
		return response;
	}

	function saveSettings(){
		for(var moduleKey in lssm.managedSettings.registeredModules) {
			var module = lssm.managedSettings.registeredModules[moduleKey];
			for(var settingsKey in module.settings) {
				var setting = module.settings[settingsKey];
				var elementName = moduleKey + '_' + settingsKey;
				var formElement = $('#' + elementName);
				if(setting.ui.type === 'checkbox' || setting.ui.type === 'toggle'){
	                if (formElement.is(':checked')) {
	                    setting.value = true;
	                } else {
	                    setting.value = false;
	                }
				} else if(setting.ui.type === 'radio'){
	                setting.value = $("input[name='" + elementName + "']:checked").val()
	            } else if(setting.ui.type === 'int'){
	            	setting.value = parseInt(formElement.val());
	            } else if(setting.ui.type === 'float'){
	            	setting.value = parseFloat(formElement.val());
	            } else {
	                setting.value = formElement.val();
	            }

			}
			lssm.managedSettings.update(module);
		}
	}

	var li = $('<li role="presentation"><a href="#">'+ I18n.t('lssm.managedsettings.settings_tab') +'</a></li>').click(function() {
				renderSettings();
				applyFunctions();
			})

	$('#lssm_menu').append(li);

})(I18n, jQuery);
