(function(I18n, $) {
	'use strict';

	var VERSION = "2.0";
	
	var LSS_CENTERMAP_STORAGE = "LSS_CENTERMAP_STORAGE";

	I18n.translations.de['lssm']['centermap'] = {
		center : "Zentrieren",
		settings : {
			title : "Center-Map",
			autor: "Ein Plugin von",
			text1 : "Zentriert die Karte beim Aufruf des Spiels. So wie du es möchtest.",
			save : "Speichern",
			version : "Version",
			choose : "Bitte auswählen",
			option1 : "Standard",
			option1desc : "Vorgegebenes Zoom-Level und Zentrierung der Leitstelle.",
			option2 : "Dynamisch",
			alliance : "Verbandseinsätze berücksichtigen",
			option2desc : "Karte zentriert sich so, dass alle Wachen und Einsätze sichtbar sind.",
			option3 : "Voreingestellt",
			option3desc : "Karte initialisiert sich auf vorgegebene Position und Zoom-Level.",
			set : "Jetzige Position speichern",
			error1 : "Feher: Bitte Position speichern!"
		}
	};

	I18n.translations.en['lssm']['centermap'] = {
		center : "Center",
		settings : {
			title : "Center-Map",
			autor: "A plugin made by",
			text1 : "Centers map. Just as you prefer.",
			save : "Save",
			version : "Version",
			choose : "Please select",
			option1 : "Default",
			option1desc : "Default zoom level and centering on control center ",
			option2 : "Dynamic",
			alliance : "Take alliance into account",
			option2desc : "Center map that all missions and stations are visible.",
			option3 : "Custom",
			option3desc : "Set custom position and zoom-level.",
			set : "Save current position",
			error1 : "Error! Please set a position first."
		}
	};
	
	   function getSettings(){
	        var settings = {
	            'centermap-option': {'type': 'radio', 'default': 2},
	            'centermap-alliance': {'type': 'boolean','default': true},
	            'centermap-center-lat': {'float': 'int','default': null},
	            'centermap-center-lng': {'float': 'int','default': null},
	            'centermap-zoom': {'type': 'int', 'default': null}
	        };

	        if (!lssm.settings.get(LSS_CENTERMAP_STORAGE) || Object.keys(lssm.settings.get("LSS_CENTERMAP_STORAGE")).length !== Object.keys(settings).length) {
	            for (var key in settings) {
	                settings[key].value = settings[key].default;
	            }
	        } else {
	            settings = lssm.settings.get(LSS_CENTERMAP_STORAGE);
	        }
	        return settings;
	    }

	    function getSetting(name){
	        var settings = getSettings();
	        return settings[name].value;
	    }

	    function setSettings(){
	        var settings = getSettings();
	        for (var key in settings) {
	            var formElement = $('#' + key);
	            if(settings[key].type == 'boolean'){
	                if (formElement.is(':checked')) {
	                    settings[key].value = true;
	                } else {
	                    settings[key].value = false;
	                }
	            } else if(settings[key].type == 'range'){
	                settings[key].value = formElement.slider("value");
	            } else if(settings[key].type == 'radio'){
	                settings[key].value = $("input[name='" + key + "']:checked").val()
	            } else if(settings[key].type == 'int'){
	            	settings[key].value = parseInt(formElement.val());
	            } else if(settings[key].type == 'float'){
	            	settings[key].value = parseFloat(formElement.val());
	            } else {
	                settings[key].value = formElement.val();
	            }
	        }

	        lssm.settings.remove(LSS_CENTERMAP_STORAGE);
	        lssm.settings.set(LSS_CENTERMAP_STORAGE, settings);
	    }

	function centerMap() {
		if(getSetting('centermap-option') == 2){
			var lat_min;
			var lat_max;
			var lng_min;
			var lng_max;
			$(mission_markers).each(function() {
				if(getSetting('centermap-alliance') || this.involved){
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
		} else if(getSetting('centermap-option') == 3) {
			map.setView([getSetting('centermap-center-lat'), getSetting('centermap-center-lng')], getSetting('centermap-zoom'));
		}
		
	}

	function createSettings() {

		var markup = '<div class="jumbotron" style="display: none" id="' + lssm.config.prefix + '_appstore_CentermapSettings">';
		markup += '<h1>' + I18n.t('lssm.centermap.settings.title') + '</h1>';
		markup += '<p>' + I18n.t('lssm.centermap.settings.text1') + '</p>';
		markup += '<div><fieldset style="margin-bottom: 10px;">';
		markup += '<legend>' + I18n.t('lssm.centermap.settings.choose') + '</legend>';

		// 1st option
		markup += '<div>';
		markup += '<input type="radio" name="centermap-option" id="centermap-option1" value="1">';
		markup += '<label style="margin-left: 4px;" for="radio-1">' + I18n.t('lssm.centermap.settings.option1') + '</label>';
		markup += '<div style="margin-left: 16px;">' + I18n.t('lssm.centermap.settings.option1desc') + '</div>';
		markup += '</div>';
		
		// 2nd option
		markup += '<div>';
		markup += '<input type="radio" name="centermap-option" id="centermap-option2" value="2">';
		markup += '<label style="margin-left: 4px;" for="radio-2">' + I18n.t('lssm.centermap.settings.option2') + '</label>';
		markup += '<div style="margin-left: 16px;">' + I18n.t('lssm.centermap.settings.option2desc') + '</div>';
		markup += '<div style="margin-left: 16px;"><input type="checkbox" style="margin-right: 4px;" name="centermap-aliance" id="centermap-alliance">' + I18n.t('lssm.centermap.settings.alliance') + '</div>';
		markup += '</div>';
		
		// 3rd option
		markup += '<div>';
		markup += '<input type="radio" name="centermap-option" id="centermap-option3" value="3">';
		markup += '<label style="margin-left: 4px;" for="radio-3">' + I18n.t('lssm.centermap.settings.option3') + '</label>';
		markup += '<div style="margin-left: 16px;">' + I18n.t('lssm.centermap.settings.option3desc') + '</div>';
		markup += '<button type="button" class="btn btn-grey btn-sm" id="' + lssm.config.prefix + '_appstore_CentermapSettings_setPosition" style="margin-left: 16px;">';
		markup += '<span>' + I18n.t('lssm.centermap.settings.set') + '</span>';
		markup += '</button>';
		markup += '<input type="hidden" value="' + getSetting('centermap-center-lat') + '" id="centermap-center-lat">';
		markup += '<input type="hidden" value="' + getSetting('centermap-center-lng') + '" id="centermap-center-lng">';
		markup += '<input type="hidden" value="' + getSetting('centermap-zoom') + '" id="centermap-zoom">';
		markup += '</div>';
		
		markup += '</fieldset></div>';
		markup += '<p>';
		markup += '<button type="button" class="btn btn-success btn-sm" id="' + lssm.config.prefix + '_appstore_CentermapSettings_close" aria-label="Close">';
		markup += '<span aria-hidden="true">' + I18n.t('lssm.centermap.settings.save') + '</span>';
		markup += '</button>';
		markup += '</p>';
		markup += '<span class="pull-right">';
		markup += '<span class="label label-primary">' + I18n.t('lssm.centermap.settings.autor') + ' Jalibu</span>&nbsp;';
		markup += '<span class="label label-danger">' + I18n.t('lssm.centermap.settings.version') + ' ' + VERSION + '</span>';
		markup += '</span>';
		markup += '</div>';

		$('#map_outer').before(markup);
		
		$('#centermap-option' + getSetting('centermap-option')).prop('checked', true);
		
		if(getSetting('centermap-alliance')){
			$('#centermap-alliance').prop('checked', true);
		}
		
		$('#centermap-alliance').click(function(){
			$('#centermap-option2').prop('checked', true);
		});
		
		$('#' + lssm.config.prefix + '_appstore_CentermapSettings_close').click(function() {
			if($("input[name='centermap-option']:checked").val() == 3 && (isNaN($('#centermap-center-lat').val()) || isNaN($('#centermap-center-lng').val())|| isNaN($('#centermap-zoom').val()))){
				alert(I18n.t('lssm.centermap.settings.error1'));
			} else {
				setSettings();
				$('#' + lssm.config.prefix + '_appstore_CentermapSettings').hide();
				centerMap();
			}
			return false;
		});
		
		$('#' + lssm.config.prefix + '_appstore_CentermapSettings_setPosition').click(function() {
			$('#centermap-zoom').val(map.getZoom());
			$('#centermap-center-lat').val(map.getCenter().lat);
			$('#centermap-center-lng').val(map.getCenter().lng);
			$('#centermap-option3').prop('checked', true);
			
			setSettings();
		});
	}
	createSettings();

	function CenterMap_show_settings() {
		$('#' + lssm.config.prefix + '_appstore_CentermapSettings').show();
	}

	var li = $('<li role="presentation"><a href="#">Center-Map</a></li>').click(function() {
				CenterMap_show_settings();
				return false;
			})

	$('#lssm_menu').append(li);

	$(map).on('lssm-map-reload', function() {
		centerMap();
	});

	centerMap();
})(I18n, jQuery);