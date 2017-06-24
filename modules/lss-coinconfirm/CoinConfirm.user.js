(function(I18n, $) {
	'use strict';
	
	I18n.translations.de['lssm']['coinconfirm'] = {
		message : "Möchtest du wirklich mit Coins bezahlen?"
	};

	I18n.translations.en['lssm']['coinconfirm'] = {
		message : "Möchtest du wirklich mit Coins bezahlen?"
	};

	function protectCoins() {
		console.log("hi");
		$('a[href*="coins"]').attr('onclick', 'return confirm("' + I18n.t('lssm.coinconfirm.message') + '")');
		$('a[href*="Coins"]').attr('onclick', 'return confirm("' + I18n.t('lssm.coinconfirm.message') + '")');
	}
	
	protectCoins();

})(I18n, jQuery);