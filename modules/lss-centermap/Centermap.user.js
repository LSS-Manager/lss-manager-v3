(function(I18n, $) {
	'use strict';

	var VERSION = "2.3";

	var LSS_CENTERMAP_STORAGE = "LSS_CENTERMAP_STORAGE";

	I18n.translations.de['lssm']['centermap'] = {
		center : "Zentrieren",
		settings : {
			title : "Center-Map",
			choose : "Bitte auswählen",
			option1 : "Standard",
			option1desc : "Vorgegebenes Zoom-Level und Zentrierung der Leitstelle.",
			option2 : "Dynamisch",
			alliance : "Verbandseinsätze berücksichtigen",
			option2desc : "Karte zentriert sich so, dass alle Wachen und Einsätze sichtbar sind.",
			option3 : "Voreingestellt",
			option3desc : "Karte initialisiert sich auf vorgegebene Position und Zoom-Level.",
			set : "Jetzige Position speichern"
		}
	};

	I18n.translations.en['lssm']['centermap'] = {
		center : "Center",
		settings : {
			title : "Center-Map",
			choose : "Please select",
			option1 : "Default",
			option1desc : "Default zoom level and centering on control center ",
			option2 : "Dynamic",
			alliance : "Take alliance into account",
			option2desc : "Center map that all missions and stations are visible.",
			option3 : "Custom",
			option3desc : "Set custom position and zoom-level.",
			set : "Save current position"
		}
	};
	I18n.translations.nl['lssm']['centermap'] = {
		        center : "Centreren",
        settings : {
            title : "Kaart centreren",
            choose : "Selecteer een plaats",
            option1 : "Standaard-instellingen",
            option1desc : "Standaard zoom-niveau en gecentreerd op meldkamer",
            option2 : "Dynamisch",
            alliance : "Houdt rekening met gebouwen van teamleden",
            option2desc : "Schaal de kaart zodat alle gebouwen en meldingen zichtbaar zijn.",
            option3 : "Aangepast",
            option3desc : "Kies een aangepaste locatie en zoom-niveau.",
            set : "Sla huidige positie op"
		}
	};
	var managedSettings = {
		"id" : LSS_CENTERMAP_STORAGE,
		"title" : I18n.t('lssm.centermap.settings.title'),
		"version" : VERSION,
		"settings" : {
			"centermap-option" : {
				"default" : "2",
				"ui" : {
					"label" : I18n.t('lssm.centermap.settings.choose'),
					"type" : "radio",
					"options" : [
							{
								"title" : I18n
										.t('lssm.centermap.settings.option1'),
								"value" : "1",
								"description" : I18n
										.t('lssm.centermap.settings.option1desc')
							},
							{
								"title" : I18n
										.t('lssm.centermap.settings.option2'),
								"value" : "2",
								"description" : I18n
										.t('lssm.centermap.settings.option2desc')
							},
							{
								"title" : I18n
										.t('lssm.centermap.settings.option3'),
								"value" : "3",
								"description" : I18n
										.t('lssm.centermap.settings.option3desc')
							} ]
				}
			},
			"centermap-alliance" : {
				"default" : false,
				"ui" : {
					"label" : I18n.t('lssm.centermap.settings.alliance'),
					"type" : "checkbox",
					"parent" : "LSS_CENTERMAP_STORAGE_centermap-option_1"
				}
			},
			"centermap-center-lat" : {
				"default" : "",
				"ui" : {
					"label" : "",
					"type" : "hidden"
				}
			},
			"centermap-center-lng" : {
				"default" : "",
				"ui" : {
					"label" : "",
					"type" : "hidden"
				}
			},
			"centermap-zoom" : {
				"default" : "",
				"ui" : {
					"label" : "",
					"type" : "hidden"
				}
			},
			"centermap-button" : {
				"default" : "",
				"ui" : {
					"label" : I18n.t('lssm.centermap.settings.set'),
					"type" : "button",
					"custom_function_event" : "click",
					"custom_function" : function() {
						var prefix = "LSS_CENTERMAP_STORAGE_";
						$('#' + prefix + 'centermap-center-lat').val(map.getCenter().lat);
						$('#' + prefix + 'centermap-center-lng').val(map.getCenter().lng);
						$('#' + prefix + 'centermap-zoom').val(map.getZoom());
					},
					"parent" : "LSS_CENTERMAP_STORAGE_centermap-option_2"
				}
			}
		}
	};

	lssm.managedSettings.register(managedSettings);

	function centerMap() {
		if (getSetting('centermap-option') === "2") {
			var lat_min;
			var lat_max;
			var lng_min;
			var lng_max;
			$(mission_markers).each(function() {
				if (getSetting('centermap-alliance') || this.involved) {
					var position = this._latlng;
					if (position.lat < lat_min || lat_min === undefined)
						lat_min = position.lat;
					if (position.lat > lat_max || lat_max === undefined)
						lat_max = position.lat;
					if (position.lng < lng_min || lng_min === undefined)
						lng_min = position.lng;
					if (position.lng > lng_max || lng_max === undefined)
						lng_max = position.lng;
				}
			});

			$(lssm.get_buildings()).each(function() {
				if (this.stationLat < lat_min || lat_min === undefined)
					lat_min = this.stationLat;
				if (this.stationLat > lat_max || lat_max === undefined)
					lat_max = this.stationLat;
				if (this.stationLng < lng_min || lng_min === undefined)
					lng_min = this.stationLng;
				if (this.stationLng > lng_max || lng_max === undefined)
					lng_max = this.stationLng;
			});

			map.fitBounds([ [ lat_min, lng_min ], [ lat_max, lng_max ] ]);
		} else if (getSetting('centermap-option') === "3") {
			map.setView([ getSetting('centermap-center-lat'),
					getSetting('centermap-center-lng') ],
					getSetting('centermap-zoom'));
		}

	}

	function getSetting(setting) {
		return lssm.managedSettings.getSetting(LSS_CENTERMAP_STORAGE, setting);
	}

	$(map).on('lssm-map-reload', function() {
		centerMap();
	});

	centerMap();
})(I18n, jQuery);
