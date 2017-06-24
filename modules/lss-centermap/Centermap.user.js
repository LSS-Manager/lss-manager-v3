(function(I18n, $) {
    'use strict';
    
    I18n.translations.de['lssm']['centermap'] = {
            center: "Zentrieren"
    };
    
    I18n.translations.en['lssm']['centermap'] = {
            center: "Center"
    };

    function centerMap(){
    	var lat_min;
    	var lat_max;
    	var lng_min;
    	var lng_max;
    	$(mission_markers).each(function(){
    	    var position = this._latlng;
    	    if(position.lat < lat_min || lat_min === undefined) lat_min = position.lat;
    	    if(position.lat > lat_max || lat_max === undefined) lat_max = position.lat;
    	    if(position.lng < lng_min || lng_min === undefined) lng_min = position.lng;
    	    if(position.lng > lng_max || lng_max === undefined) lng_max = position.lng;
    	});
    	
		$(lssm.get_buildings()).each(function(){
    	    if(this.stationLat < lat_min || lat_min === undefined) lat_min = this.stationLat;
    	    if(this.stationLat > lat_max || lat_max === undefined) lat_max = this.stationLat;
    	    if(this.stationLng < lng_min || lng_min === undefined) lng_min = this.stationLng;
    	    if(this.stationLng > lng_max || lng_max === undefined) lng_max = this.stationLng;
		});
    	
    	map.fitBounds([[lat_min, lng_min],[lat_max, lng_max]]);
    }
    
    $(map).on('lssm-map-reload', function(){
    	centerMap();
    });
   
    centerMap();
})(I18n, jQuery);