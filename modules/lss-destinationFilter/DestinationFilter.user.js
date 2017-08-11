(function(I18n, $) {
	'use strict';

	var LSS_DESTFILTER_STORAGE = "LSS_DESTFILTER_STORAGE";

	I18n.translations.de.lssm.destfilter = {
		title: "Zielort Filter",
		beds: "Belegte KH ausblenden",
		elegible: "KH ohne Fachabteilung ausblenden",
		hospital: "Krankenhaus",
		yes: "Ja"
	};

	I18n.translations.en.lssm.destfilter = {
		title: "Destination Filter",
		beds: "Hide full hospitals",
		elegible: "Hide unelegible hospitals",
		hospital: "Hospital",
		yes: "Yes"
	};

	I18n.translations.nl.lssm.destfilter = {
		title: "Bestemmingsfilter",
		beds: "Verberg volle ziekenhuizen",
		elegible: "Verberg ziekenhuizen die niet de juiste afdeling hebben.",
		hospital: "ziekenhuis",
		yes: "Ja"
	};

	var managedSettings = {
		"id": LSS_DESTFILTER_STORAGE,
		"title": I18n.t('lssm.destfilter.title'),
		"settings": {
			"destfilter-beds": {
				"default": true,
				"ui": {
					"label": I18n.t('lssm.destfilter.beds'),
					"type": "checkbox"
				}
			},
			"destfilter-elegible": {
				"default": true,
				"ui": {
					"label": I18n.t('lssm.destfilter.elegible'),
					"type": "checkbox"
				}
			}

		}
	};

	lssm.managedSettings.register(managedSettings);

	function setUi() {
		var markup = "<div>";
		markup +=
			'<div><span class="pull-left"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="lssm-inline-destfilter-beds" ' +
			(getSetting('destfilter-beds') ? 'checked="checked"' : '') +
			'" value="true" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="lssm-inline-destfilter-beds"></label></div></span>' +
			I18n.t('lssm.destfilter.beds') + '</div>';
		markup +=
			'<div><span class="pull-left"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="lssm-inline-destfilter-elegible" ' +
			(getSetting('destfilter-elegible') ? 'checked="checked' : '') +
			'" value="true" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="lssm-inline-destfilter-elegible"></label></div></span>' +
			I18n.t('lssm.destfilter.elegible') + '</div>';
		markup += "</div>";
		$('.alert-info').after(markup);

		$('.onoffswitch-checkbox').click(
			function() {
				managedSettings.settings['destfilter-beds'].value = $('#lssm-inline-destfilter-beds').is(':checked');
				managedSettings.settings['destfilter-elegible'].value = $('#lssm-inline-destfilter-elegible').is(':checked');
				lssm.managedSettings.update(managedSettings);
				filter();
			});
	}

	function filter() {
		$('.col-md-9 tbody > tr').each(function() {
			var el = $(this);
			var beds = parseInt(el.find('td:nth-child(3)').text().trim());
			// The column differs in owned and alliance table
			var elegible = ((el.find(':nth-child(4)').text()
					.trim().indexOf('%') === -1) ? el.find(
					'td:nth-child(4)').text() : el.find(
					':nth-child(5)').text()).trim() === I18n
				.t('lssm.destfilter.yes');
			if ((beds === 0 && getSetting('destfilter-beds')) ||
				(!elegible && getSetting('destfilter-elegible'))) {
				el.fadeOut();
			} else {
				el.show();
			}
		});
	}

	var sprechwunsch = $('#h2_sprechwunsch');
	if (sprechwunsch.length > 0 && sprechwunsch.parent().text().indexOf(I18n.t('lssm.destfilter.hospital')) >= 0) {
		setUi();
		filter();
	}

	function getSetting(setting) {
		return lssm.managedSettings.getSetting(LSS_DESTFILTER_STORAGE, setting);
	}

})(I18n, jQuery);
