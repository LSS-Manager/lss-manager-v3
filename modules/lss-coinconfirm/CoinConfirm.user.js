(function(I18n, $) {
	'use strict';

	I18n.translations.de['lssm']['coinconfirm'] = {
		message : "Möchtest du wirklich mit Coins bezahlen?"
	};

	I18n.translations.en['lssm']['coinconfirm'] = {
		message : "Please confirm the payment with coins."
	};
	I18n.translations.nl['lssm']['coinconfirm'] = {
		message : "Bevestig alsjeblieft de betaling met coins."
	};
	function protectCoins() {

		// Gebäude bauen
		$(document).ajaxComplete(function() {
			$('.coins_activate').each(function() {
				preventProcessing($(this));
			});
		});

		// Ausbau starten, Personal einstellen
		$('a[href*="coins"]').each(function() {
			preventProcessing($(this));
		});
		$('a[href*="Coins"]').each(function() {
			preventProcessing($(this));
		});

		// Ausbau fertigstellen
		$('a[href*="extension_finish"]').each(function() {
			preventProcessing($(this));
		});

		// Gebäude verschieben
		$('input[value*="Coins"]').each(function() {
			preventProcessing($(this));
		});

		// Lehrgang
		$('a[href*="education/finish"]').each(function() {
			preventProcessing($(this));
		});

	}

	function preventProcessing(element) {
		if (element.data('bound') !== 'true') {
			element.click(function(ev) {
				var response = confirm(I18n.t('lssm.coinconfirm.message'));
				if (!response) {
					ev.stopPropagation();
				}
				return response;
			});
			element.data('bound', 'true');
		}

	}

	protectCoins();

})(I18n, jQuery);
