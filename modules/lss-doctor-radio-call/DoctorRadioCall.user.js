(function(I18n, $) {
	'use strict';

	// Hook-in Patient Marker function to retrieve event
	var patientMarkerAddOrig = patientMarkerAdd;
	// NOSONAR: Variable is declared globally in the main game.
	patientMarkerAdd = function(t) {
		if (t.missing_text && t.missing_text.indexOf('NEF') >= 0) {
			var fakeMissionUrl = "/../missions/" + t.mission_id;
			radioMessage({
				"mission_id" : t.mission_id,
				"additionalText" : "",
				"user_id" : user_id,
				"type" : "vehicle_fms",
				"id" : "",
				"fms_real" : 5,
				"fms" : 5,
				"fms_text" : t.missing_text,
				"caption" : ""
			});

			// Due we do not get a calling vehicle_id we have to remove the
			// corresponding button manually.
			$('#radio_messages_important').find('a[href="/vehicles/"]')
					.remove();
		}
		patientMarkerAddOrig(t);
	};

})(I18n, jQuery);
