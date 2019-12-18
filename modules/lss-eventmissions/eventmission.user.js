(function (I18n, $) {
	'use strict';

	function replaceInit() {
		$('a[id*="mission_caption_"]').each(function () {
			$(this).html(replaceevMissionCaption($(this).html()));
		});
	}

	function replaceevMissionCaption(text) {
		if (text !== undefined && text !== "") {
			//Fatherday
			text = text.replace('Brennender Bollerwagen', '🍺 Brennender Bollerwagen');
			//Motherday
			text = text.replace('Brennender Blumenstrauß', '🌹 Brennender Blumenstrauß');
			//Eastern
			text = text.replace('Ostereier-Dieb', '🥚 Ostereier-Dieb');
			text = text.replace('Pinsel aus Werkstatt entwendet', '🥚 Pinsel aus Werkstatt entwendet');
			text = text.replace('Eingestürzter Hasenbau', '🥚 Eingestürzter Hasenbau');
			text = text.replace('Angefahrener Osterhase', '🥚 Angefahrener Osterhase');
			text = text.replace('Brennendes Osternest', '🥚 Brennendes Osternest');
			text = text.replace('Schokoladenspur auf Strasse', '🥚 Schokoladenspur auf Strasse');
			text = text.replace('Eierkocherbrand', '🥚 Eierkocherbrand');
			text = text.replace('Hasentreffen in Ostereistedt', '🥚 Hasentreffen in Ostereistedt');
			text = text.replace('Osterei in Wasser', '🥚 Osterei in Wasser');
			text = text.replace('Osterei-LKW umgestürzt', '🥚 Osterei-LKW umgestürzt');
			text = text.replace('Schwerpunkteinsatz Osterei suche', '🥚 Schwerpunkteinsatz Osterei suche');
			text = text.replace('Ei rollt in Schlangenlinien', '🥚 Ei rollt in Schlangenlinien');
			text = text.replace('Osterhase auf Kran', '🥚 Osterhase auf Kran');

			//WM Missions
			text = text.replace('Fußball aufpumpen', '🥅 Fußball aufpumpen');
			text = text.replace('Mannschaftsbus in Halteverbot abgestellt', '🥅 Mannschaftsbus in Halteverbot abgestellt');
			text = text.replace('Behandlung nach Schwalbe', '🥅 Behandlung nach Schwalbe');
			text = text.replace('Prellung nach Lattenpraller', '🥅 Prellung nach Lattenpraller');
			text = text.replace('Tor gefallen', '🥅 Tor gefallen');
			text = text.replace('Pokal geklaut', '🥅 Pokal geklaut');
			//Sommer Missions
			text = text.replace('Sonnenstich', '🌞 Sonnenstich');
			text = text.replace('Hitzschlag', '🌞 Hitzschlag');
			text = text.replace('Hitzekrampf', '🌞 Hitzekrampf');
			text = text.replace('Dehydrierte Person', '🌞 Dehydrierte Person');
			//Halloween Missions
			text = text.replace('Brennende Vogelscheuche', '🎃 Brennende Vogelscheuche');
			text = text.replace('Brennendes Kürbisfeld', '🎃 Brennendes Kürbisfeld');
			text = text.replace('Kürbissuppe übergekocht', '🎃 Kürbissuppe übergekocht');
			text = text.replace('Hexe hängt in Baum', '🎃 Hexe hängt in Baum');
			text = text.replace('Monster ausgebrochen', '🎃 Monster ausgebrochen');
			text = text.replace('Kürbisse geklaut', '🎃 Kürbisse geklaut');
			text = text.replace('Frankenstein gesichtet', '🎃 Frankenstein gesichtet');
			text = text.replace('Süßigkeitendiebstahl', '🎃 Süßigkeitendiebstahl');

			text = text.replace('Brandende vogelverschrikker', '🎃 Brandende vogelverschrikker');
			text = text.replace('Brandend pompoenveld', '🎃 Brandend pompoenveld');
			text = text.replace('Overkookte pompoensoep', '🎃 Overkookte pompoensoep');
			text = text.replace('Heks vast in boom', '🎃 Heks vast in boom');
			text = text.replace('Monster uitgebroken', '🎃 Monster uitgebroken');
			text = text.replace('Gestolen pompoenen', '🎃 Gestolen pompoenen');
			text = text.replace('Frankenstein gespot', '🎃 Frankenstein gespot');
			text = text.replace('Snoep diefstal', '🎃 Snoep diefstal');
			text = text.replace('Horrorclown gespot', '🎃 Horrorclown gespot');

			text = text.replace('Burning bogle', '🎃 Burning bogle');
			text = text.replace('Burning pumpkin field', '🎃 Burning pumpkin field');
			text = text.replace('Pumpkin soup overcooked', '🎃 Pumpkin soup overcooked');
			text = text.replace('Witch in tree', '🎃 Witch in tree');
			text = text.replace('Pumpkin stolen', '🎃 Pumpkin stolen');
			text = text.replace('Frankenstein sighted', '🎃 Frankenstein sighted');
			text = text.replace('Candy theft', '🎃 Candy theft');
			text = text.replace('Monster broke loose', '🎃 Monster broke loose');
			//Christmas/Winter Missions
			text = text.replace('Brennender Adventskranz', '🎅 Brennender Adventskranz');
			text = text.replace('Rangelei auf Weihnachtsmarkt', '🎅 Rangelei auf Weihnachtsmarkt');
			text = text.replace('Diebstahl auf Weihnachtsmarkt', '🎅 Diebstahl auf Weihnachtsmarkt');
			text = text.replace('Brennende Weihnachtsmarktbude', '🎅 Brennende Weihnachtsmarktbude');
			text = text.replace('Brand auf Weihnachtsmarkt', '🎅 Brand auf Weihnachtsmarkt');
			text = text.replace('Verkehrsunfall durch Glatteis', '🎅 Verkehrsunfall durch Glatteis');
			text = text.replace('Personenschaden durch Verbrennung', '🎅 Personenschaden durch Verbrennung');
			text = text.replace('Brennender Tannenbaum', '🎅 Brennender Tannenbaum');
			text = text.replace('Betrunkene Person auf Weihnachtsmarkt', '🎅 Betrunkene Person auf Weihnachtsmarkt');

			text = text.replace('Brandende cadeautjes', '🎅 Brandende cadeautjes');
			text = text.replace('Sinterklaas van dak gegleden', '🎅 Sinterklaas van dak gegleden');
			text = text.replace('Pepernoot op hoofd', '🎅 Pepernoot op hoofd');
			text = text.replace('Piet bestolen', '🎅 Piet bestolen');
			text = text.replace('Kind geschrokken', '🎅 Kind geschrokken');
			text = text.replace('Piet klem in schoorsteen', '🎅 Piet klem in schoorsteen');
			text = text.replace('Demonstratie zwarte piet', '🎅 Demonstratie zwarte piet');
			text = text.replace('Schoenen dief', '🎅 Schoenen dief');
			text = text.replace('Verstikking in pepernoot', '🎅 Verstikking in pepernoot');
			text = text.replace('Verkeersongeval door gladheid', '🎅 Verkeersongeval door gladheid');
			text = text.replace('Brandende kerstboom', '🎅 Brandende kerstboom');
			text = text.replace('Gevallen kerstman', '🎅 Gevallen kerstman');
			text = text.replace('Ruzie op de kerstmarkt', '🎅 Ruzie op de kerstmarkt');
			text = text.replace('Diefstal op de kerstmarkt', '🎅 Diefstal op de kerstmarkt');
			text = text.replace('Brandende kerstmarktkraam', '🎅 Brandende kerstmarktkraam');
			text = text.replace('Gevallen schaatser', '🎅 Gevallen schaatser');
			text = text.replace('Gevallen persoon door gladheid', '🎅 Gevallen persoon door gladheid');
			text = text.replace('Donkere dagen offensief', '🎅 Donkere dagen offensief');
			text = text.replace('Snijwond door gebroken kerstbal', '🎅 Snijwond door gebroken kerstbal');
			text = text.replace('Grote boek van Sinterklaas aangespoeld', '🎅 Grote boek van Sinterklaas aangespoeld');
			text = text.replace('Verlaten slee langs waterkant', '🎅 Verlaten slee langs waterkant');
			text = text.replace('Brandende kerststal', '🎅 Brandende kerststal');
			text = text.replace('Brandwonden door gourmetstel', '🎅 Brandwonden door gourmetstel');
			text = text.replace('Geluidsoverlast door kerstmuziek', '🎅 Geluidsoverlast door kerstmuziek');
			text = text.replace('Persoon bekneld onder kerstpakketten', '🎅 Persoon bekneld onder kerstpakketten');

			text = text.replace('Theft at christmas market', '🎅 Theft at christmas market');
			text = text.replace('Burning christmas market stall', '🎅 Burning christmas market stall');
			text = text.replace('Fire at christmas market', '🎅 Fire at christmas market');
			text = text.replace('Drunken person at christmas market', '🎅 Drunken person at christmas market')
			text = text.replace('Traffic accident - ice', '🎅 Traffic accident - ice');
			text = text.replace('Burning christmas tree', '🎅 Burning christmas tree');
			text = text.replace('Burning advent wreath', '🎅 Burning advent wreath');
			text = text.replace('Brawl at christmas market', '🎅 Brawl at christmas market');

			text = text.replace('Robo en el mercado navideño', '🎅 Robo en el mercado navideño');
			text = text.replace('Puesto del mercado de Navidad en llamas', '🎅 Puesto del mercado de Navidad en llamas');
			text = text.replace('Incendio en el mercado navideño', '🎅 Incendio en el mercado navideño');
			text = text.replace('Accidente de tráfico debido a hielo', '🎅 Accidente de tráfico debido a hielo');
			text = text.replace('Árbol de navidad en llamas', '🎅 Árbol de navidad en llamas');
			text = text.replace('Corona de Adviento en llamas', '🎅 Corona de Adviento en llamas');
			text = text.replace('Pelea en mercado navideño', '🎅 Pelea en mercado navideño');

			text = text.replace('Kradzież na jarmarku bożonarodzeniowym', '🎅 Kradzież na jarmarku bożonarodzeniowym');
			text = text.replace('Płonący stragan bożonarodzeniowy', '🎅 Płonący stragan bożonarodzeniowy');
			text = text.replace('Pożar na jarmarku bożonarodzeniowym', '🎅 Pożar na jarmarku bożonarodzeniowym');
			text = text.replace('Wypadek drogowy - lód', '🎅 Wypadek drogowy - lód');
			text = text.replace('Płonąca choinka', '🎅 Płonąca choinka');
			text = text.replace('Płonący wieniec adwentowy', '🎅 Płonący wieniec adwentowy');
			text = text.replace('Bójka na jarmarku bożonarodzeniowym', '🎅 Bójka na jarmarku bożonarodzeniowym');

			text = text.replace('Stöld på julmarknad', '🎅 Stöld på julmarknad');
			text = text.replace('Brinnande julstånd', '🎅 Brinnande julstånd	');
			text = text.replace('Brand på julmarknad', '🎅 Brand på julmarknad');
			text = text.replace('Trafikolycka - is', '🎅 Trafikolycka - is');
			text = text.replace('Brinnande julgran', '🎅 Brinnande julgran');
			text = text.replace('Brinnande julkrans', '🎅 Brinnande julkrans');
			text = text.replace('Bråk på julmarknad', '🎅 Bråk på julmarknad');

			text = text.replace('Кража на рождественском рынке', '🎅 Кража на рождественском рынке');
			text = text.replace('Горит палатка на рождественском рынке', '🎅 Горит палатка на рождественском рынке');
			text = text.replace('Пожар на рождественском рынке', '🎅 Пожар на рождественском рынке');
			text = text.replace('Дорожное происшествие - лед', '🎅 Дорожное происшествие - лед');
			text = text.replace('Горит рождественская елка', '🎅 Горит рождественская елка');
			text = text.replace('Горит рождественский венок', '🎅 Горит рождественский венок');
			text = text.replace('Драка на рождественском рынке', '🎅 Драка на рождественском рынке');

			text = text.replace('Furto al mercatino di Natale', '🎅 Furto al mercatino di Natale');
			text = text.replace('Bancarella del mercatino di Natale in fiamme', '🎅 Bancarella del mercatino di Natale in fiamme');
			text = text.replace('Fuoco al mercatino di Natale', '🎅 Fuoco al mercatino di Natale');
			text = text.replace('Incidente stradale - ghiaccio', '🎅 Incidente stradale - ghiaccio');
			text = text.replace('Albero di Natale in fiamme', '🎅 Albero di Natale in fiamme');
			text = text.replace('Corona dell\'avvento in fiamme', '🎅 Corona dell\'avvento in fiamme');
			text = text.replace('Rissa al mercatino di Natale', '🎅 Rissa al mercatino di Natale');

			text = text.replace('Vol au marché de Noël', '🎅 Vol au marché de Noël');
			text = text.replace('Stand en feu sur le marché de noël', '🎅 Stand en feu sur le marché de noël');
			text = text.replace('Feu sur le marché de noël', '🎅 Feu sur le marché de noël');
			text = text.replace('Accident de la circulation - glace', '🎅 Accident de la circulation - glace');
			text = text.replace('l\'Arbre de noël en feu', '🎅 l\'Arbre de noël en feu');
			text = text.replace('La couronne de l\'avent en feu', '🎅 La couronne de l\'avent en feu');
			text = text.replace('Bagarre au marché de Noël', '🎅 Bagarre au marché de Noël');

			//SILVESTER Missions
			text = text.replace('Brennender PKW durch Feuerwerkskörper', '🧨 Brennender PKW durch Feuerwerkskörper ');
			text = text.replace('Sperrmüllbrand durch Feuerwerkskörper', '🧨 Sperrmüllbrand durch Feuerwerkskörper');
			text = text.replace('Kleiner Feldbrand durch Feuerwerkskörper', '🧨 Kleiner Feldbrand durch Feuerwerkskörper');
			text = text.replace('Kellerbrand durch Feuerwerkskörper', '🧨 Kellerbrand durch Feuerwerkskörper');
			text = text.replace('Brennendes Bus-Häuschen durch Feuerwerkskörper', '🧨 Brennendes Bus-Häuschen durch Feuerwerkskörper');
			text = text.replace('Feuer auf Balkon durch Feuerwerkskörper', '🧨 Feuer auf Balkon durch Feuerwerkskörper');
			text = text.replace('Brennende Papiercontainer durch Feuerwerkskörper', '🧨 Brennende Papiercontainer durch Feuerwerkskörper');
			text = text.replace('Brennende Hecke durch Feuerwerkskörper', '🧨 Brennende Hecke durch Feuerwerkskörper');
			text = text.replace('Trunkenheitsfahrt nach Silvesterparty', '🧨 Trunkenheitsfahrt nach Silvesterparty');
			text = text.replace('Brennendes Reetdachhaus durch Feuerwerkskörper', '🧨 Brennendes Reetdachhaus durch Feuerwerkskörper');
			text = text.replace('Kfz durch Feuerwerkskörper beschädigt', '🧨 Kfz durch Feuerwerkskörper beschädigt');
			text = text.replace('Verstoß gegen Sprengstoffverordnung', '🧨 Verstoß gegen Sprengstoffverordnung');
			text = text.replace('Handverletzung durch Feuerwerkskörper', '🧨 Handverletzung durch Feuerwerkskörper');

			text = text.replace('Car ignited by fireworks', '🧨 Car ignited by fireworks');
			text = text.replace('Bulky waste ignited by fireworks', '🧨 Bulky waste ignited by fireworks');
			text = text.replace('Small field fire caused by fireworks', '🧨 Small field fire caused by fireworks');
			text = text.replace('Basement fire caused by fireworks', '🧨 Basement fire caused by fireworks');
			text = text.replace('Burning Bus shelter ignited by fireworks', '🧨 Burning Bus shelter ignited by fireworks');
			text = text.replace('Fire on balcony caused by fireworks', '🧨 Fire on balcony caused by fireworks');
			text = text.replace('Burning paper containers ignited by fireworks', '🧨 Burning paper containers ignited by fireworks');
			text = text.replace('Burning hedge ignited by firecracker', '🧨 Burning hedge ignited by firecracker');
			text = text.replace('Drunk driver after New Year\'s Eve party', '🧨 Drunk driver after New Year\'s Eve party');
			text = text.replace('Burning thatched roof house ignited by fireworks', '🧨 Burning thatched roof house ignited by fireworks');
			text = text.replace('Car damaged by fireworks', '🧨 Car damaged by fireworks');
			text = text.replace('Violation of Explosive Act 1875', '🧨 Violation of Explosive Act 1875');
			text = text.replace('Violation of Explosives Act (1999)', '🧨 Violation of Explosives Act (1999)');
			text = text.replace('Violation of Explosives Law', '🧨 Violation of Explosives Law');
			text = text.replace('Hand injury caused by fireworks', '🧨 Hand injury caused by fireworks');

			text = text.replace('Auto in brand door vuurwerk', '🧨 Auto in brand door vuurwerk');
			text = text.replace('Afval in brand door vuurwerk', '🧨 Afval in brand door vuurwerk');
			text = text.replace('Grasbrand door vuurwerk', '🧨 Grasbrand door vuurwerk');
			text = text.replace('Kelderbrand door vuurwerk', '🧨 Kelderbrand door vuurwerk');
			text = text.replace('Brandend bushokje door vuurwerk', '🧨 Brandend bushokje door vuurwerk');
			text = text.replace('Brandend balkon door vuurwerk', '🧨 Brandend balkon door vuurwerk');
			text = text.replace('Brandende papiercontainer door vuurwerk', '🧨 Brandende papiercontainer door vuurwerk');
			text = text.replace('Brandende heg door vuurwerk', '🧨 Brandende heg door vuurwerk');
			text = text.replace('Beschonken bestuurder na Oud en Nieuw feest', '🧨 Beschonken bestuurder na Oud en Nieuw feest');
			text = text.replace('Auto beschadigd door vuurwerk', '🧨 Auto beschadigd door vuurwerk');
			text = text.replace('Overtreding op vuurwerkbesluit', '🧨 Overtreding op vuurwerkbesluit');
			text = text.replace('Handletsel door vuurwerk', '🧨 Handletsel door vuurwerk');
			text = text.replace('Rieten kap woning in brand door vuurwerk', '🧨 Rieten kap woning in brand door vuurwerk');

			text = text.replace('Coche en llamas a causa de los fuegos artificiales', '🧨 Coche en llamas a causa de los fuegos artificiales');
			text = text.replace('Montón de basura en llamas a causa de los fuegos artificiales', '🧨 Montón de basura en llamas a causa de los fuegos artificiales');
			text = text.replace('Solar en llamas a causa de los fuegos artificiales', '🧨 Solar en llamas a causa de los fuegos artificiales');
			text = text.replace('Sótano en llamas a causa de los fuegos artificiales', '🧨 Sótano en llamas a causa de los fuegos artificiales');
			text = text.replace('Marquesina en llamas a causa de los fuegos artificiales', '🧨 Marquesina en llamas a causa de los fuegos artificiales');
			text = text.replace('Balcón en llamas a causa de los fuegos artificiales', '🧨 Balcón en llamas a causa de los fuegos artificiales');
			text = text.replace('Contenedores de papel en llamas a causa de los fuegos artificiales', '🧨 Contenedores de papel en llamas a causa de los fuegos artificiales');
			text = text.replace('Seto en llamas a causa de un petardo', '🧨 Seto en llamas a causa de un petardo');
			text = text.replace('Conductor borracho tras la fiesta de Nochevieja', '🧨 Conductor borracho tras la fiesta de Nochevieja');
			text = text.replace('Casa con tejado de paja en llamas a causa de los fuegos artificiales', '🧨 Casa con tejado de paja en llamas a causa de los fuegos artificiales');
			text = text.replace('Coche dañado por los fuegos artificiales', '🧨 Coche dañado por los fuegos artificiales');
			text = text.replace('Infracción del Reglamento de explosivos', '🧨 Infracción del Reglamento de explosivos');
			text = text.replace('Lesión en la mano a causa de los fuegos artificiales', '🧨 Lesión en la mano a causa de los fuegos artificiales');

			text = text.replace('Pożar pojazdu wywołany fajerwerkami', '🧨 Pożar pojazdu wywołany fajerwerkami');
			text = text.replace('Pożar gabarytów wywołany fajerwerkami', '🧨 Pożar gabarytów wywołany fajerwerkami');
			text = text.replace('Pożar małego pola wywołany fajerwerkami', '🧨 Pożar małego pola wywołany fajerwerkami');
			text = text.replace('Pożar piwnicy wywołany fajerwerkami', '🧨 Pożar piwnicy wywołany fajerwerkami');
			text = text.replace('Pożar wiaty przystankowej wywołany fajerwerkami', '🧨 Pożar wiaty przystankowej wywołany fajerwerkami');
			text = text.replace('Pożar balkonu wywołany fajerwerkami', '🧨 Pożar balkonu wywołany fajerwerkami');
			text = text.replace('Płonące kontenery z papierem podpalone przez fajerwerki', '🧨 Płonące kontenery z papierem podpalone przez fajerwerki');
			text = text.replace('Pożar żywopłotu podpalonego przez petardę', '🧨 Pożar żywopłotu podpalonego przez petardę');
			text = text.replace('Kierowca pijany po imprezie sylwestrowej', '🧨 Kierowca pijany po imprezie sylwestrowej');
			text = text.replace('Pożar dachu krytego strzechą wywołany fajerwerkami', '🧨 Pożar dachu krytego strzechą wywołany fajerwerkami');
			text = text.replace('Uszkodzenie pojazdu wywołane fajerwerkami', '🧨 Uszkodzenie pojazdu wywołane fajerwerkami');
			text = text.replace('Naruszenie przepisów ustawy o materiałach wybuchowych przeznaczonych do użytku cywilnego', '🧨 Naruszenie przepisów ustawy o materiałach wybuchowych przeznaczonych do użytku cywilnego');
			text = text.replace('Uraz ręki w wyniku użycia fajerwerków', '🧨 Uraz ręki w wyniku użycia fajerwerków');

			text = text.replace('Bilbrand orsakad av fyrverkerier', '🧨 Bilbrand orsakad av fyrverkerier');
			text = text.replace('Grovavfallsbrand orsakad av fyrverkerier', '🧨 Grovavfallsbrand orsakad av fyrverkerier');
			text = text.replace('Liten fältbrand orsakad av fyrverkerier', '🧨 Liten fältbrand orsakad av fyrverkerier');
			text = text.replace('Brand i källare orsakad av fyrverkerier', '🧨 Brand i källare orsakad av fyrverkerier');
			text = text.replace('Busshållplatsbrand orsakad av fyrverkerier', '🧨 Busshållplatsbrand orsakad av fyrverkerier');
			text = text.replace('Balkongbrand orsakad av fyrverkerier', '🧨 Balkongbrand orsakad av fyrverkerier');
			text = text.replace('Bränder i papperscontainrar orsakade av fyrverkerier', '🧨 Bränder i papperscontainrar orsakade av fyrverkerier');
			text = text.replace('Buskbrand orsakad av smällare', '🧨 Buskbrand orsakad av smällare');
			text = text.replace('Alkoholpåverkad förare efter nyårsfest', '🧨 Alkoholpåverkad förare efter nyårsfest');
			text = text.replace('Brand i stråtakshus orsakad av fyrverkerier', '🧨 Brand i stråtakshus orsakad av fyrverkerier');
			text = text.replace('Bil skadad av fyrverkerier', '🧨 Bil skadad av fyrverkerier');
			text = text.replace('Brott mot förordningen om explosiva varor', '🧨 Brott mot förordningen om explosiva varor');
			text = text.replace('Handskada orsakad av fyrverkerier', '🧨 Handskada orsakad av fyrverkerier');

			text = text.replace('Auto in fiamme a causa di fuochi d\'artificio', '🧨 Auto in fiamme a causa di fuochi d\'artificio');
			text = text.replace('Rifiuti ingombranti in fiamme a causa di fuochi d\'artificio', '🧨 Rifiuti ingombranti in fiamme a causa di fuochi d\'artificio');
			text = text.replace('Piccolo campo in fiamme a causa di fuochi d\'artificio', '🧨 Piccolo campo in fiamme a causa di fuochi d\'artificio');
			text = text.replace('Seminterrato in fiamme a causa di fuochi d\'artificio', '🧨 Seminterrato in fiamme a causa di fuochi d\'artificio');
			text = text.replace('Fermata dell\'autobus in fiamme a causa di fuochi d\'artificio', '🧨 Fermata dell\'autobus in fiamme a causa di fuochi d\'artificio');
			text = text.replace('Balcone in fiamme a causa di fuochi d\'artificio', '🧨 Balcone in fiamme a causa di fuochi d\'artificio');
			text = text.replace('Container di carta in fiamme a causa di fuochi d\'artificio', '🧨 Container di carta in fiamme a causa di fuochi d\'artificio');
			text = text.replace('Siepe in fiamme a causa di un petardo', '🧨 Siepe in fiamme a causa di un petardo');
			text = text.replace('Conducente ubriaco dopo la festa di Capodanno', '🧨 Conducente ubriaco dopo la festa di Capodanno');
			text = text.replace('Casa con tetto di paglia in fiamme a causa di fuochi d\'artificio', '🧨 Casa con tetto di paglia in fiamme a causa di fuochi d\'artificio');
			text = text.replace('Auto danneggiata da fuochi d\'artificio', '🧨 Auto danneggiata da fuochi d\'artificio');
			text = text.replace('Violazione delle Norme sugli esplosivi', '🧨 Violazione delle Norme sugli esplosivi');
			text = text.replace('Ferita alla mano provocata da fuochi d\'artificio', '🧨 Ferita alla mano provocata da fuochi d\'artificio');

			text = text.replace('Feu de voiture causé par des feux d\'artifice', '🧨 Feu de voiture causé par des feux d\'artifice');
			text = text.replace('Feu d\'encombrants causé par des feux d\'artifice', '🧨 Feu d\'encombrants causé par des feux d\'artifice');
			text = text.replace('Petit feu de champ causé par des feux d\'artifice', '🧨 Petit feu de champ causé par des feux d\'artifice');
			text = text.replace('Sous-sol en feu causé par des feux d\'artifice', '🧨 Sous-sol en feu causé par des feux d\'artifice');
			text = text.replace('Abribus en feu causé par des feux d\'artifice', '🧨 Abribus en feu causé par des feux d\'artifice');
			text = text.replace('Feu de balcon causé par des feux d\'artifice', '🧨 Feu de balcon causé par des feux d\'artifice');
			text = text.replace('Feu de container papier causé par des feux d\'artifice', '🧨 Feu de container papier causé par des feux d\'artifice');
			text = text.replace('Feu de haie causé par des feux d\'artifice', '🧨 Feu de haie causé par des feux d\'artifice');
			text = text.replace('Conduite en état d\'ivresse après le Réveillon', '🧨 Conduite en état d\'ivresse après le Réveillon');
			text = text.replace('Feu de chaumière causé par des feux d\'artifice', '🧨 Feu de chaumière causé par des feux d\'artifice');
			text = text.replace('Voiture endommagée par des feux d\'artifice', '🧨 Voiture endommagée par des feux d\'artifice');
			text = text.replace('Infraction au décret n° 90-897 sur les artifices de divertissement', '🧨 Infraction au décret n° 90-897 sur les artifices de divertissement');
			text = text.replace('Blessure à la main causée par des feux d\'artifice', '🧨 Blessure à la main causée par des feux d\'artifice');

			text = text.replace('Возгорание автомобиля из-за фейерверка', '🧨 Возгорание автомобиля из-за фейерверка');
			text = text.replace('Возгорание кучи мусора из-за фейерверка', '🧨 Возгорание кучи мусора из-за фейерверка');
			text = text.replace('Небольшое возгорание травы, вызванное фейерверком', '🧨 Небольшое возгорание травы, вызванное фейерверком');
			text = text.replace('Пожар в подвале, вызванный фейерверком', '🧨 Пожар в подвале, вызванный фейерверком');
			text = text.replace('Возгорание автобусной остановки, вызванное фейерверком', '🧨 Возгорание автобусной остановки, вызванное фейерверком');
			text = text.replace('Пожар на балконе, вызванный фейерверком', '🧨 Пожар на балконе, вызванный фейерверком');
			text = text.replace('Возгорание контейнера для макулатуры, вызванное фейерверком', '🧨 Возгорание контейнера для макулатуры, вызванное фейерверком');
			text = text.replace('Возгорание живой изгороди, вызванное петардой', '🧨 Возгорание живой изгороди, вызванное петардой');
			text = text.replace('Пьяный водитель после новогоднего застолья', '🧨 Пьяный водитель после новогоднего застолья');
			text = text.replace('Возгорание соломенной кровли, вызванное фейерверком', '🧨 Возгорание соломенной кровли, вызванное фейерверком');
			text = text.replace('Автомобиль, повреждённый фейерверком', '🧨 Автомобиль, повреждённый фейерверком');
			text = text.replace('Нарушение закона об обращении со взрывчатыми веществами', '🧨 Нарушение закона об обращении со взрывчатыми веществами');
			text = text.replace('Травма руки, вызванная фейерверком', '🧨 Травма руки, вызванная фейерверком');

		}
		return text;
	}

	replaceInit();

	// Mission Marker
	let evmissionMarkerAddOrig = missionMarkerAdd;
	missionMarkerAdd = function (t) { // NOSONAR: Global game variable
		t.caption = replaceevMissionCaption(t.caption);
		evmissionMarkerAddOrig(t);
	};
})(I18n, jQuery);