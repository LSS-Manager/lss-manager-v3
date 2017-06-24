(function(I18n, $) {
	'use strict';
	
	I18n.translations.de['lssm']['coinconfirm'] = {
		message : "Möchtest du wirklich mit Coins bezahlen?"
	};

	I18n.translations.en['lssm']['coinconfirm'] = {
		message : "Please confirm the payment with coins."
	};

	function protectCoins() {
		
		// Gebäude bauen
		$(document).ajaxComplete(function() {
			 $('.coins_activate').attr('onclick', 'return confirm("' + I18n.t('lssm.coinconfirm.message') + '")');
		});
		
		// Ausbau starten, Personal einstellen
		$('a[href*="coins"]').attr('onclick', 'return confirm("' + I18n.t('lssm.coinconfirm.message') + '")');
		$('a[href*="Coins"]').attr('onclick', 'return confirm("' + I18n.t('lssm.coinconfirm.message') + '")');
		// Ausbau fertigstellen
		$('a[href*="extension_finish"]').attr('onclick', 'return confirm("' + I18n.t('lssm.coinconfirm.message') + '")');
	}
	
	protectCoins();

})(I18n, jQuery);