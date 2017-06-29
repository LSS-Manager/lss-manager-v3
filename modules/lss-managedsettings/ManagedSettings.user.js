(function(I18n, $) {
	'use strict';
	
	I18n.translations.de['lssm']['managedsettings'] = {
			title: "LSSM Einstellungen",
			text1: "Hier kannst du Einstellungen für deine aktivierten Plugins vornehmen",
			text2: "",
			save : "Speichern & Schließen",
			settings_tab: "Einstellungen"
	};

	I18n.translations.en['lssm']['managedsettings'] = {
			title: "LSSM Settings",
			text1: "Here you can change the settings of your activated plugins.",
			text2: "",
			save : "Save & Close",
			settings_tab: "Settings"
	};
	
	function renderSettings() {
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
		
		for(var moduleKey in lssm.managedSettings.registeredModules) {
			var module = lssm.managedSettings.registeredModules[moduleKey];
			markup = "";
			markup += '<div id="' + moduleKey + '_wrap">';
			markup += '<h4>' + module.title + '</h4>';
			markup += '</div>';
			$('#module_settings').append(markup);
			for(var settingsKey in module.settings) {
				if(module.settings[settingsKey].ui.parent){
					$('#' + module.settings[settingsKey].ui.parent + '_wrap').append(renderUIElement(moduleKey, settingsKey, module.settings[settingsKey]));
				} else {					
					$('#' + moduleKey + '_wrap').append(renderUIElement(moduleKey, settingsKey, module.settings[settingsKey]));
				}
			}
		};
	

		
		// Save & Close function
		$('#' + lssm.config.prefix + '_appstore_ManagedSettings_close').click(function() {
			saveSettings();
			$('#' + lssm.config.prefix + '_appstore_ManagedSettings').remove();
		});
	}
	
	function applyFunctions() {
		for(var moduleKey in lssm.managedSettings.registeredModules) {
			var module = lssm.managedSettings.registeredModules[moduleKey];
			for(var settingsKey in module.settings) {
				var setting = module.settings[settingsKey];
				if(setting.ui.custom_function){
					$('#' + moduleKey + '_' + settingsKey).click(setting.ui.custom_function);	
				}
			}
		};
	}
	
	function renderUIElement(moduleKey, settingsKey, element){
		var elementName = moduleKey + '_' + settingsKey;
		var response = '<div id="' + elementName + '_wrap">';
		if(element.ui.type == "radio"){
			var optionCount = 0;
			$.each(element.ui.options, function(){
				var prop_checked = "";
				if(this.value == element.value) prop_checked = " checked ";
				response += '<div id="' + elementName + '_' + optionCount +'_wrap">';
				response += '<input type="radio" name="' + elementName + '" id="' + elementName + '_' + optionCount +'" ' + prop_checked + ' value="' + this.value + '">';
				response += '<label style="margin-left: 4px;" for="radio-1">' + this.title + '</label>';
				response += '<div style="margin-left: 16px;">' + this.description + '</div>';
				response += '</div>';
				optionCount ++;
			});
		} else if(element.ui.type == "boolean"){
			var checked = element.value == true ? " checked " : "";
			response += '<div style="margin-left: 16px;"><input type="checkbox" ' + checked + ' style="margin-right: 4px;" name="' + elementName + '" id="' + elementName + '">' + element.ui.label + '</div>';
		} else if(element.ui.type == "hidden"){
			response += '<input type="hidden" value="' + element.value + '" id="' + elementName + '" name="' + elementName + '">';
		} else if(element.ui.type == "button"){
			response += '<button type="button" class="btn btn-grey btn-sm" id="' + elementName +'" style="margin-left: 16px;">';
			response += '<span>' + element.ui.label + '</span>';
			response += '</button>';
		} else {
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
				if(setting.ui.type == 'boolean'){
	                if (formElement.is(':checked')) {
	                    setting.value = true;
	                } else {
	                    setting.value = false;
	                }
				} else if(setting.ui.type == 'radio'){
	                setting.value = $("input[name='" + elementName + "']:checked").val()
	            } else if(setting.ui.type == 'int'){
	            	setting.value = parseInt(formElement.val());
	            } else if(setting.ui.type == 'float'){
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