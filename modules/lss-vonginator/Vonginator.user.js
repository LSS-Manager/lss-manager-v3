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
        $('#missions strong').text('1 Sätze');
    }

    function replaceMissingText(text){
        if(text !== null && text !== ""){
            text = text.replace('Ein Fahrzeug hat einen Sprechwunsch!', 'Hallo i bims. 1 Sprechwumsch.');
            text = text.replace('Ein', '1');
            text = text.replace('ein', '1');
            text = text.replace('Zusätzlich benötigte Fahrzeuge', 'Wir brauchem weitere 1satzfahrzeuge');
        }
        return text;
    }

        function replacePatientMarker(text){
        if(text !== null && text !== ""){
            text = text.replace('Wir benötigen ein NEF.', 'Wir brauchen 1 NEF vong Dringlichkeit her.');
            text = text.replace('Wir benötigen einen RTW.', 'lol. Chique mal 1 RTW.');

        }
        return text;
    }

    function replaceMissionCaption(text){
        if(text !== undefined && text !== ""){
            text = text.replace('Ein', '1');
            text = text.replace('ein', '1');
            text = text.replace('Gestürzte Person', 'Gestürzter Lauch');
            text = text.replace('nfall', 'mfall');
            text = text.replace('Fassadenteile drohen zu fallen', 'Fassadenteile weak vong Festigkeit her');
            text = text.replace('Akuter Harnstau', 'Akuter Harnstau. lol');
            text = text.replace('Vaginale Blutung', 'Bl00dy Mary');
            text = text.replace('Baum auf PKW', 'Baum auf PKW gebimst');
            text = text.replace('Hilflose Person', 'Hilfloser Lauch');
            text = text.replace('Wohnwagenbrand', 'Caravan am burnen');
            text = text.replace('Feuerprobealarm an Schule', 'Probealarm in Schule.lol');

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
        t.missing_text = replacePatientMarker(t.missing_text);
        patientMarkerAddOrig(t);
    };
})(I18n, jQuery);
