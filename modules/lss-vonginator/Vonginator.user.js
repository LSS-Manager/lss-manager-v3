(function(I18n, $) {
	'use strict';

	function replaceInit(){
        $('div[id*="mission_missing_"]').each(function(){
            $(this).text(replaceMissingText($(this).text()));
        });
        $('a[id*="mission_caption_"]').each(function(){
            $(this).text(replaceMissionCaption($(this).text()));
        });


        $('div[id*="patients_missing_"]').each(function(){
            $(this).text(replacePatientMarker($(this).text()));
        });
    }

    function replaceMissingText(text){
        if(text !== null && text !== ""){
            text = text.replace('Ein Fahrzeug hat einen Sprechwunsch!', 'Hallo i bims. 1 Sprechwumsch.');
            text = text.replace('Ein', '1');
            text = text.replace('ein', '1');
        }
        return text;
    }
    
        function replacePatientMarker(text){
        if(text !== null && text !== ""){
            text = text.replace('Wir benötigen ein NEF.', 'Wir brauchen 1 NEF vong Dringlichkeit her.');
        }
        return text;
    }

    function replaceMissionCaption(text){
        if(text !== undefined && text !== ""){
            text = text.replace('Ein', '1');
            text = text.replace('ein', '1');
        }
        return text;
    }

    replaceInit();

    // Mission Marker
    var missionMarkerAddOrig = missionMarkerAdd;
    missionMarkerAdd = function(t){
        t.missing_text = replaceMissingText(t.missing_text);
        t.caption = replaceMissionCaption(t.caption);
        missionMarkerAddOrig(t);
    };
    
    // Mission Marker
    var patientMarkerAddOrig = patientMarkerAdd;
    patientMarkerAdd = function(t){
        console.log(t);
        patientMarkerAddOrig(t);
    };
})(I18n, jQuery);