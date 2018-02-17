(function(I18n, $) {
	'use strict';

	function replaceInit(){
        $('a[id*="mission_caption_"]').each(function(){
            $(this).html(replaceevMissionCaption($(this).html()));
        });
    }

    function replaceevMissionCaption(text){
        if(text !== undefined && text !== ""){
	//Fatherday
	text = text.replace('Brennender Bollerwagen', '[Vatertag] Brennender Bollerwagen');
	//Eastern
	text = text.replace('Ostereier-Dieb', '[OSTERN]	Ostereier-Dieb');
	text = text.replace('Pinsel aus Werkstatt entwendet', '[OSTERN] Pinsel aus Werkstatt entwendet');
	text = text.replace('Eingestürzter Hasenbau', '[OSTERN] Eingestürzter Hasenbau');
	text = text.replace('Angefahrener Osterhase', '[OSTERN] Angefahrener Osterhase');
	text = text.replace('Brennendes Osternest', '[OSTERN] Brennendes Osternest');
	text = text.replace('Schokoladenspur auf Strasse', '[OSTERN] Schokoladenspur auf Strasse');
	text = text.replace('Eierkocherbrand', '[OSTERN] Eierkocherbrand');
	text = text.replace('Hasentreffen in Ostereistedt', '[OSTERN] Hasentreffen in Ostereistedt');
	//Sommer Missions
	text = text.replace('Sonnenstich', '[SOMMER] Sonnenstich');
	text = text.replace('Hitzschlag', '[SOMMER] Hitzschlag');
	text = text.replace('Hitzekrampf', '[SOMMER] Hitzekrampf');
	//Halloween Missions
	text = text.replace('Brennende Vogelscheuche', '[HALLOWEEN] Brennende Vogelscheuche');
	text = text.replace('Brennendes Kürbisfeld', '[HALLOWEEN] Brennendes Kürbisfeld');
	text = text.replace('Kürbissuppe übergekocht', '[HALLOWEEN] Kürbissuppe übergekocht');
	text = text.replace('Hexe hängt in Baum', '[HALLOWEEN] Hexe hängt in Baum');
	text = text.replace('Monster ausgebrochen', '[HALLOWEEN] Monster ausgebrochen');
	text = text.replace('Kürbisse geklaut', '[HALLOWEEN] Kürbisse geklaut');
	text = text.replace('Frankenstein gesichtet', '[HALLOWEEN] Frankenstein gesichtet');
	text = text.replace('Süßigkeitendiebstahl', '[HALLOWEEN] Süßigkeitendiebstahl');

	text = text.replace('Brandende vogelverschrikker', '[HALLOWEEN] Brandende vogelverschrikker');
	text = text.replace('Brandend pompoenveld', '[HALLOWEEN] Brandend pompoenveld');
	text = text.replace('Overkookte pompoensoep', '[HALLOWEEN] Overkookte pompoensoep');
	text = text.replace('Heks vast in boom', '[HALLOWEEN] Heks vast in boom');
	text = text.replace('Monster uitgebroken', '[HALLOWEEN] Monster uitgebroken');
	text = text.replace('Gestolen pompoenen', '[HALLOWEEN] Gestolen pompoenen');
	text = text.replace('Frankenstein gespot', '[HALLOWEEN] Frankenstein gespot');
	text = text.replace('Snoep diefstal', '[HALLOWEEN] Snoep diefstal');
	text = text.replace('Horrorclown gespot', '[HALLOWEEN] Horrorclown gespot');

	text = text.replace('Burning bogle', '[HALLOWEEN] Burning bogle');
	text = text.replace('Burning pumpkin field', '[HALLOWEEN] Burning pumpkin field');
	text = text.replace('Pumpkin soup overcooked', '[HALLOWEEN] Pumpkin soup overcooked');
	text = text.replace('Witch in tree', '[HALLOWEEN] Witch in tree');
	text = text.replace('Erupted Monster', '[HALLOWEEN] Erupted Monster');
	text = text.replace('Pumpkin stolen', '[HALLOWEEN] Pumpkin stolen');
	text = text.replace('Frankenstein sighted', '[HALLOWEEN] Frankenstein sighted');
	text = text.replace('candy theft', '[HALLOWEEN] candy theft');
	//Christmas/Winter Missions
	text = text.replace('Brennender Adventskranz', '[X-MAS] Brennender Adventskranz');
        text = text.replace('Rangelei auf Weihnachtsmarkt', '[X-MAS] Rangelei auf Weihnachtsmarkt');
        text = text.replace('Diebstahl auf Weihnachtsmarkt', '[X-MAS] Diebstahl auf Weihnachtsmarkt');
        text = text.replace('Brennende Weihnachtsmarktbude', '[X-MAS] Brennende Weihnachtsmarktbude');
	text = text.replace('Brand auf Weihnachtsmarkt', '[X-MAS] Brand auf Weihnachtsmarkt');
	text = text.replace('Verkehrsunfall durch Glatteis', '[X-MAS] Verkehrsunfall durch Glatteis');
	text = text.replace('Personenschaden durch Verbrennung', '[X-MAS] Personenschaden durch Verbrennung');
	text = text.replace('Brennender Tannenbaum', '[X-MAS] Brennender Tannenbaum');
	text = text.replace('Betrunkene Person auf Weihnachtsmarkt', '[X-MAS] Betrunkene Person auf Weihnachtsmarkt');

        text = text.replace('Brandende cadeautjes', '[X-MAS] Brandende cadeautjes');
        text = text.replace('Sinterklaas van dak gegleden', '[X-MAS] Sinterklaas van dak gegleden');
        text = text.replace('Pepernoot op hoofd', '[X-MAS] Pepernoot op hoofd');
        text = text.replace('Piet bestolen', '[X-MAS] Piet bestolen');
        text = text.replace('Kind geschrokken', '[X-MAS] Kind geschrokken');
        text = text.replace('Piet klem in schoorsteen', '[X-MAS] Piet klem in schoorsteen');
        text = text.replace('Demonstratie zwarte piet', '[X-MAS] Demonstratie zwarte piet');
        text = text.replace('Schoenen dief','[X-MAS] Schoenen dief');
	text = text.replace('Verstikking in pepernoot', '[X-MAS] Verstikking in pepernoot');
	text = text.replace('Verkeersongeval door gladheid', '[X-MAS] Verkeersongeval door gladheid');
	text = text.replace('Brandende kerstboom', '[X-MAS] Brandende kerstboom');
	text = text.replace('Gevallen kerstman', '[X-MAS] Gevallen kerstman');
	text = text.replace('Ruzie op de kerstmarkt', '[X-MAS] Ruzie op de kerstmarkt');
	text = text.replace('Diefstal op de kerstmarkt', '[X-MAS] Diefstal op de kerstmarkt');
	text = text.replace('Brandende kerstmarktkraam', '[X-MAS] Brandende kerstmarktkraam');
	text = text.replace('Gevallen schaatser','[X-MAS] Gevallen schaatser');
	text = text.replace('Gevallen persoon door gladheid', '[X-MAS] Gevallen persoon door gladheid');
	text = text.replace('Donkere dagen offensief', '[X-MAS] Donkere dagen offensief');
	text = text.replace('Snijwond door gebroken kerstbal', '[X-MAS] Snijwond door gebroken kerstbal');
	text = text.replace('Grote boek van Sinterklaas aangespoeld', '[X-MAS] Grote boek van Sinterklaas aangespoeld');

	text = text.replace('Theft at christmas market', '[X-MAS] Theft at christmas market');
	text = text.replace('Burning christmas market stall', '[X-MAS] Burning christmas market stall');
	text = text.replace('Fire at christmas market', '[X-MAS] Fire at christmas market');
	text = text.replace('Traffic accident - ice', '[X-MAS] Traffic accident - ice');
	text = text.replace('Burning christmas tree', '[X-MAS] Burning christmas tree');
	text = text.replace('Burning advent wreath', '[X-MAS] Burning advent wreath');
	text = text.replace('Brawl at christmas market', '[X-MAS] Brawl at christmas market');
	//SILVESTER Missions
        text = text.replace('Brennender PKW durch Feuerwerkskörper', '[SILVESTER] Brennender PKW durch Feuerwerkskörper ');
        text = text.replace('Sperrmüllbrand durch Feuerwerkskörper', '[SILVESTER] Sperrmüllbrand durch Feuerwerkskörper');
        text = text.replace('Kleiner Feldbrand durch Feuerwerkskörper', '[SILVESTER] Kleiner Feldbrand durch Feuerwerkskörper');
        text = text.replace('Kellerbrand durch Feuerwerkskörper', '[SILVESTER] Kellerbrand durch Feuerwerkskörper');
        text = text.replace('Brennendes Bus-Häuschen durch Feuerwerkskörper', '[SILVESTER] Brennendes Bus-Häuschen durch Feuerwerkskörper');
        text = text.replace('Feuer auf Balkon durch Feuerwerkskörper', '[SILVESTER] Feuer auf Balkon durch Feuerwerkskörper');
        text = text.replace('Brennende Papiercontainer durch Feuerwerkskörper', '[SILVESTER] Brennende Papiercontainer durch Feuerwerkskörper');
        text = text.replace('Brennende Hecke durch Feuerwerkskörper', '[SILVESTER] Brennende Hecke durch Feuerwerkskörper');
        text = text.replace('Trunkenheitsfahrt nach Silvesterparty', '[SILVESTER] Trunkenheitsfahrt nach Silvesterparty');
        text = text.replace('Brennendes Reetdachhaus durch Feuerwerkskörper', '[SILVESTER] Brennendes Reetdachhaus durch Feuerwerkskörper');
        text = text.replace('Kfz durch Feuerwerkskörper beschädigt', '[SILVESTER] Kfz durch Feuerwerkskörper beschädigt');
        text = text.replace('Verstoß gegen Sprengstoffverordnung','[SILVESTER] Verstoß gegen Sprengstoffverordnung');
	text = text.replace('Handverletzung durch Feuerwerkskörper','[SILVESTER] Handverletzung durch Feuerwerkskörper');
        }
        return text;
    }

    replaceInit();

    // Mission Marker
    var evmissionMarkerAddOrig = missionMarkerAdd;
    missionMarkerAdd = function(t){ // NOSONAR: Global game variable
        t.caption = replaceevMissionCaption(t.caption);
        evmissionMarkerAddOrig(t);
    };
})(I18n, jQuery);
