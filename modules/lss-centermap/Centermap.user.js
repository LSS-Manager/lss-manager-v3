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
    	map.fitBounds([[lat_min, lng_min],[lat_max, lng_max]]);
    }
    
    function renderCenterButton(){
        $('.leaflet-control-container .leaflet-top.leaflet-left').append('<div id="lss-centermap" class="leaflet-bar leaflet-control" style="background-color: white;"><img id="lss-centermap-img" style="height: 24px; width: 24px; cursor: pointer;" src="' + lssm.getlink("/modules/lss-centermap/img/lss-centermap.png") + '" alt="' + I18n.t('lssm.centermap.center') + '"></div>');
        $('#lss-centermap-img').on('click', function(){
        	$(map).trigger('lssm-map-reload');
        });
    }
    
    $(map).on('lssm-map-reload', function(){
    	centerMap();
    });
    
    renderCenterButton();
    centerMap();
})(I18n, jQuery);