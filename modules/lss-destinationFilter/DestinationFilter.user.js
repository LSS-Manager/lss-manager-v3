(function(I18n, $) {
	'use strict';

	var VERSION = "1";

	var LSS_DESTFILTER_STORAGE = "LSS_DESTFILTER_STORAGE";

	I18n.translations.de['lssm']['destfilter'] = {
		title : "Zielort Filter",
		beds : "Belegte KH ausblenden",
		elegible : "KH ohne Fachabteilung"
	};

	I18n.translations.en['lssm']['destfilter'] = {
		title : "Destination Filter",
		beds : "Hide full hospitals",
		elegible : "Hide unelegible hospitals"
	};

	var managedSettings = {
		"id" : LSS_DESTFILTER_STORAGE,
		"title" : I18n.t('lssm.destfilter.title'),
		"version" : VERSION,
		"settings" : {
			"destfilter-beds" : {
				"default" : true,
				"ui" : {
					"label" : I18n.t('lssm.destfilter.beds'),
					"type" : "boolean"
				}
			},
			"destfilter-elegible" : {
				"default" : true,
				"ui" : {
					"label" : I18n.t('lssm.destfilter.elegible'),
					"type" : "boolean"
				}
			}

		}
	};

	lssm.managedSettings.register(managedSettings);
	
	

	function setUi() {
		var markup = "<div>";
		markup +='<div><span class="pull-left"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="lssm-inline-destfilter-beds" ' + (getSetting('destfilter-beds') ? 'checked="checked"': '' ) + '" value="true" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="lssm-inline-destfilter-beds"></label></div></span>'+ I18n.t('lssm.destfilter.beds') + '</div>';
		markup +='<div><span class="pull-left"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="lssm-inline-destfilter-elegible" checked="' + (getSetting('destfilter-elegible') ? 'checked="checked': '' )  + '" value="true" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="lssm-inline-destfilter-elegible"></label></div></span>'+ I18n.t('lssm.destfilter.elegible') + '</div>';
		markup += "</div>";
		$('.alert-info').after(markup);
		
		$('.onoffswitch-checkbox').click(function(){
			managedSettings.settings['destfilter-beds'].value = $('#lssm-inline-destfilter-beds').is(':checked');
			managedSettings.settings['destfilter-elegible'].value = $('#lssm-inline-destfilter-elegible').is(':checked');
			console.log(managedSettings);
			lssm.managedSettings.update(managedSettings);
			filter();
		});
	}

	function filter() {
		$('.col-md-9 tbody > tr').each(
				function() {
					var name = $(this).find('td:nth-child(1)').text().trim();
					var beds = $(this).find('td:nth-child(3)').text().trim();
					var elegible = (($(this).find(':nth-child(4)').text()
							.trim().indexOf('%') === -1) ? $(this).find(
							'td:nth-child(4)').text() : $(this).find(
							':nth-child(5)').text()).trim() == "Ja";
					if (beds == 0 && getSetting('destfilter-beds')) {
						$(this).fadeOut();
					} else {
						$(this).show();
					}
					if (!elegible && getSetting('destfilter-elegible')) {
						$(this).fadeOut();
					} else {
						$(this).show();
					}
				});

	}
	
	var sprechwunsch = $('#h2_sprechwunsch');
	if (sprechwunsch && sprechwunsch.parent().text().indexOf('Krankenhaus') >= 0) {
		setUi();
		filter();
	}
	
	function getSetting(setting){
		return lssm.managedSettings.getSetting(LSS_DESTFILTER_STORAGE, setting);
	}
	
})(I18n, jQuery);