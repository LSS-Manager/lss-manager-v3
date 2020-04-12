(function (I18n, $) {
	'use strict';

	function replaceInit() {
		$('a[id*="mission_caption_"]').each(function () {
			$(this).html(replaceevMissionCaption($(this).html()));
		});
	}

	function replaceevMissionCaption(text) {
		if (text !== undefined && text !== "") {
			//Valentinsday
			text = text.replace('Hart gestolen', '🥰 Hart gestolen');
			text = text.replace('Hart gebroken', '🥰 Hart gebroken');
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
			text = text.replace('Schwerpunkteinsatz Ostereiersuche', '🥚 Schwerpunkteinsatz Ostereiersuche');
			text = text.replace('Ei rollt in Schlangenlinien', '🥚 Ei rollt in Schlangenlinien');
			text = text.replace('Osterhase auf Kran', '🥚 Osterhase auf Kran');

			text = text.replace('Paasei dief', '🥚 Paasei dief');
			text = text.replace('Kwast gestolen uit werkplaats', '🥚 Kwast gestolen uit werkplaats');
			text = text.replace('Ingestort konijnenhol', '🥚 Ingestort konijnenhol');
			text = text.replace('Aangevallen Paashaas', '🥚 Aangevallen Paashaas');
			text = text.replace('Brandende paasmand', '🥚 Brandende paasmand');
			text = text.replace('Lekkende chocoladevrachtwagen', '🥚 Lekkende chocoladevrachtwagen');
			text = text.replace('Brandende eierkoker', '🥚 Brandende eierkoker');
			text = text.replace('Hazenbijeenkomst in Paaseistad', '🥚 Hazenbijeenkomst in Paaseistad');
			text = text.replace('Gekantelde paaseivrachtwagen', '🥚 Gekantelde paaseivrachtwagen');
			text = text.replace('Prioriteit: paasei-jacht', '🥚 Prioriteit: paasei-jacht');
			text = text.replace('Paashaas in een kraan', '🥚 Paashaas in een kraan');

			text = text.replace('Easter egg stolen from basket', '🥚 Easter egg stolen from basket');
			text = text.replace('Chocolate Egg heist', '🥚 Chocolate Egg heist');
			text = text.replace('Collapsed rabbit hole', '🥚 Collapsed rabbit hole');
			text = text.replace('Easter bunny hit by car', '🥚 Easter bunny hit by car');
			text = text.replace('Bulk Easter Egg pile fire', '🥚 Bulk Easter Egg pile fire');
			text = text.replace('Chocolate Tanker Spill', '🥚 Chocolate Tanker Spill');
			text = text.replace('Flashover when boiling eggs', '🥚 Flashover when boiling eggs');
			text = text.replace('Easter market fair', '🥚 Easter market fair');
			text = text.replace('Easter Egg lorry crash', '🥚 Easter Egg lorry crash');
			text = text.replace('Easter egg hunt', '🥚 Easter egg hunt');
			text = text.replace('Easter bunny on crane', '🥚 Easter bunny on crane');
			text = text.replace('Stolen easter eggs', '🥚 Stolen easter eggs');
			text = text.replace('Burning easter basket', '🥚 Burning easter basket');
			text = text.replace('Burning egg boiler', '🥚 Burning egg boiler');
			text = text.replace('Easter community fair', '🥚 Easter community fair');
			text = text.replace('Easter egg truck crash', '🥚 Easter egg truck crash');

			text = text.replace('Ladrón de huevos de Pascua', '🥚 Ladrón de huevos de Pascua');
			text = text.replace('Robo de pincel del taller', '🥚 Robo de pincel del taller');
			text = text.replace('Derrumbe de conejera', '🥚 Derrumbe de conejera');
			text = text.replace('Conejo de Pascua atropellado', '🥚 Conejo de Pascua atropellado');
			text = text.replace('Cesta de Pascua en llamas', '🥚 Cesta de Pascua en llamas');
			text = text.replace('Vuelco de camión cisterna con chocolate', '🥚 Vuelco de camión cisterna con chocolate');
			text = text.replace('Hervidor de huevos en llamas', '🥚 Hervidor de huevos en llamas');
			text = text.replace('Encuentro de conejos en ciudad de Pascua', '🥚 Encuentro de conejos en ciudad de Pascua');
			text = text.replace('Vuelco de camión con huevos de Pascua', '🥚 Vuelco de camión con huevos de Pascua');
			text = text.replace('Misión prioritaria: Caza de huevos de Pascua', '🥚 Misión prioritaria: Caza de huevos de Pascua');
			text = text.replace('Conejo de Pascua en grúa', '🥚 Conejo de Pascua en grúa');

			text = text.replace('Kradzież Jaj Wielkanocnych', '🥚 Kradzież Jaj Wielkanocnych');
			text = text.replace('Skradziony pędzel z warsztatu', '🥚 Skradziony pędzel z warsztatu');
			text = text.replace('Tąpnięcie zajęczej nory', '🥚 Tąpnięcie zajęczej nory');
			text = text.replace('Potrącony Zajączek Wielkanocny', '🥚 Potrącony Zajączek Wielkanocny');
			text = text.replace('Płonący koszyk wielkanocny', '🥚 Płonący koszyk wielkanocny');
			text = text.replace('Wyciek gorącej czekolady', '🥚 Wyciek gorącej czekolady');
			text = text.replace('Pożar podgrzewacza do Jaj', '🥚 Pożar podgrzewacza do Jaj');
			text = text.replace('Jarmark Wielkanocny', '🥚 Jarmark Wielkanocny');
			text = text.replace('Wypadek ciężarówki z Jajami Wielkanocnymi', '🥚 Wypadek ciężarówki z Jajami Wielkanocnymi');
			text = text.replace('Poszukiwanie Jaj Wielkanocnych', '🥚 Poszukiwanie Jaj Wielkanocnych');
			text = text.replace('Powieszony Zajączek Wielkanocny na dźwigu', '🥚 Powieszony Zajączek Wielkanocny na dźwigu');

			text = text.replace('Påskägg tjuv', '🥚 Påskägg tjuv');
			text = text.replace('Pensel stulen från verkstad', '🥚 Pensel stulen från verkstad');
			text = text.replace('Kollapsat kaninhål', '🥚 Kollapsat kaninhål');
			text = text.replace('Påkörd påskhare', '🥚 Påkörd påskhare');
			text = text.replace('Bränning påskkorg', '🥚 Bränning påskkorg');
			text = text.replace('Chokladutsläpp', '🥚 Chokladutsläpp');
			text = text.replace('Brinnande äggkokare', '🥚 Brinnande äggkokare');
			text = text.replace('Harmöte i påskäggsstaden', '🥚 Harmöte i påskäggsstaden');
			text = text.replace('Vält påskäggsbil', '🥚 Vält påskäggsbil');
			text = text.replace('Prioriterat uppdrag: Påskäggsjakt', '🥚 Prioriterat uppdrag: Påskäggsjakt');
			text = text.replace('Påskhare i lyftkran', '🥚 Påskhare i lyftkran');

			text = text.replace('Ladro di uova di Pasqua', '🥚 Ladro di uova di Pasqua');
			text = text.replace('Spazzola rubata dall\'officina', '🥚 Spazzola rubata dall\'officina');
			text = text.replace('Tana del coniglio collassata', '🥚 Tana del coniglio collassata');
			text = text.replace('Coniglietto di Pasqua colpito', '🥚 Coniglietto di Pasqua colpito');
			text = text.replace('Cesto di Pasqua in fiamme', '🥚 Cesto di Pasqua in fiamme');
			text = text.replace('Fuoriuscita dalla cisterna di cioccolato', '🥚 Fuoriuscita dalla cisterna di cioccolato');
			text = text.replace('Caldaia per uova in fiamme', '🥚 Caldaia per uova in fiamme');
			text = text.replace('Incontro della lepre nella città delle uova di Pasqua', '🥚 Incontro della lepre nella città delle uova di Pasqua');
			text = text.replace('Camion delle uova di Pasqua rovesciato', '🥚 Camion delle uova di Pasqua rovesciato');
			text = text.replace('Missione prioritaria: caccia alle uova di Pasqua', '🥚 Missione prioritaria: caccia alle uova di Pasqua');
			text = text.replace('Coniglietto di Pasqua sulla gru', '🥚 Coniglietto di Pasqua sulla gru');

			text = text.replace('Vol d\'œufs de Pâques', '🥚 Vol d\'œufs de Pâques');
			text = text.replace('Aggression de cloche de Pâques', '🥚 Aggression de cloche de Pâques');
			text = text.replace('Collision de cloches de Pâques', '🥚 Collision de cloches de Pâques');
			text = text.replace('Lapin de Pâques renversé', '🥚 Lapin de Pâques renversé');
			text = text.replace('Feu de reserve d\'œufs de Pâques', '🥚 Feu de reserve d\'œufs de Pâques');
			text = text.replace('Fuite de citerne de chocolat', '🥚 Fuite de citerne de chocolat');
			text = text.replace('Feu de chocolaterie', '🥚 Feu de chocolaterie');
			text = text.replace('Convention des cloches de Pâques', '🥚 Convention des cloches de Pâques');
			text = text.replace('Camion d\'œufs de Pâques renversé', '🥚 Camion d\'œufs de Pâques renversé');
			text = text.replace('Convention des cloches de Pâques', '🥚 Convention des cloches de Pâques');
			text = text.replace('Cloche de Pâques dans une grue', '🥚 Cloche de Pâques dans une grue');

			text = text.replace('Кража пасхального яйца', '🥚 Кража пасхального яйца');
			text = text.replace('Кража кисти для пасхальных яиц', '🥚 Кража кисти для пасхальных яиц');
			text = text.replace('Обвал кроличьей норы', '🥚 Обвал кроличьей норы');
			text = text.replace('Спасти пасхального кролика', '🥚 Спасти пасхального кролика');
			text = text.replace('Возгорание пасхальной корзины', '🥚 Возгорание пасхальной корзины');
			text = text.replace('Разлив шоколадной цистерны', '🥚 Разлив шоколадной цистерны');
			text = text.replace('Задымление при варке пасхальных яиц', '🥚 Задымление при варке пасхальных яиц');
			text = text.replace('Сходка кроликов в поселке Пасхальном', '🥚 Сходка кроликов в поселке Пасхальном');
			text = text.replace('Опрокинулся пасхальный грузовик', '🥚 Опрокинулся пасхальный грузовик');
			text = text.replace('Срочно! Охота за пасхальными яйцами', '🥚 Срочно! Охота за пасхальными яйцами');
			text = text.replace('Кролик на подъёмном кране', '🥚 Кролик на подъёмном кране');

			text = text.replace('Påskeægs tyv', '🥚 Påskeægs tyv');
			text = text.replace('Børste stjålet fra værksted', '🥚 Børste stjålet fra værksted');
			text = text.replace('Sammenfaldet kaninhul', '🥚 Sammenfaldet kaninhul');
			text = text.replace('Påkørt påskehare', '🥚 Påkørt påskehare');
			text = text.replace('Brændende påskekurv', '🥚 Brændende påskekurv');
			text = text.replace('Chokolade Tankvogns Spillage', '🥚 Chokolade Tankvogns Spillage');
			text = text.replace('Brændende æggekoger', '🥚 Brændende æggekoger');
			text = text.replace('Harekongres i Påske Æg Byen', '🥚 Harekongres i Påske Æg Byen');
			text = text.replace('Påskeægs-lastbil væltet', '🥚 Påskeægs-lastbil væltet');
			text = text.replace('Prioritetsmission: Påskeægs jagt', '🥚 Prioritetsmission: Påskeægs jagt');
			text = text.replace('Påskehare på kran', '🥚 Påskehare på kran');

			text = text.replace('Påskeegg tyv', '🥚 Påskeegg tyv');
			text = text.replace('Børste tjålet fra påskeverksted', '🥚 Børste tjålet fra påskeverksted');
			text = text.replace('Kollapset kanin hull', '🥚 Kollapset kanin hull');
			text = text.replace('Påkjørt påskehare', '🥚 Påkjørt påskehare');
			text = text.replace('Brennende påskekurv', '🥚 Brennende påskekurv');
			text = text.replace('Sjokolate tankvogn lekkasje', '🥚 Sjokolate tankvogn lekkasje');
			text = text.replace('Brennende eggkoker', '🥚 Brennende eggkoker');
			text = text.replace('Hare møte i Påskeegg byen', '🥚 Hare møte i Påskeegg byen');
			text = text.replace('Veltet påskeegg lastebil', '🥚 Veltet påskeegg lastebil');
			text = text.replace('Prioritert oppdrag: Påskeegg jakt', '🥚 Prioritert oppdrag: Påskeegg jakt');
			text = text.replace('Påskehare på en kran', '🥚 Påskehare på en kran');

			text = text.replace('Krádež velikonočního vajíčka', '🥚 Krádež velikonočního vajíčka');
			text = text.replace('Krádež štětce z dílny', '🥚 Krádež štětce z dílny');
			text = text.replace('Zavalení králičí díry', '🥚 Zavalení králičí díry');
			text = text.replace('Napadení velikonočního zajíce', '🥚 Napadení velikonočního zajíce');
			text = text.replace('Požár velikonočního košíku', '🥚 Požár velikonočního košíku');
			text = text.replace('Únik čokolády z nádrže', '🥚 Únik čokolády z nádrže');
			text = text.replace('Vaření vajec v kotli', '🥚 Vaření vajec v kotli');
			text = text.replace('Setkání zajíců ve městě Velikonoční vajíčko', '🥚 Setkání zajíců ve městě Velikonoční vajíčko');
			text = text.replace('Nehoda kamionu převážející velikonoční vejce', '🥚 Nehoda kamionu převážející velikonoční vejce');
			text = text.replace('Hon na velikonoční vejce', '🥚 Hon na velikonoční vejce');
			text = text.replace('Velikonoční zajíc na jeřábu', '🥚 Velikonoční zajíc na jeřábu');

			text = text.replace('Paskalya yumurtası hırsızı', '🥚 Paskalya yumurtası hırsızı');
			text = text.replace('Atölyeden fırça çalındı', '🥚 Atölyeden fırça çalındı');
			text = text.replace('Tavşan evi yıkılmış', '🥚 Tavşan evi yıkılmış');
			text = text.replace('Paskalya tavşanı vuruldu', '🥚 Paskalya tavşanı vuruldu');
			text = text.replace('Paskalya sepeti yaniyor', '🥚 Paskalya sepeti yaniyor');
			text = text.replace('Çikolata Tankeri devrildi', '🥚 Çikolata Tankeri devrildi');
			text = text.replace('Yumurta kazanı yanıyor', '🥚 Yumurta kazanı yanıyor');
			text = text.replace('Paskalya yumurtası kasabasında tavşan toplantısı', '🥚 Paskalya yumurtası kasabasında tavşan toplantısı');
			text = text.replace('Paskalya yumurtası kamyonu devrildi', '🥚 Paskalya yumurtası kamyonu devrildi');
			text = text.replace('Öncelikli görev: Paskalya yumurtası avı', '🥚 Öncelikli görev: Paskalya yumurtası avı');
			text = text.replace('Paskalya tavşanı üzerine vinç düştü', '🥚 Paskalya tavşanı üzerine vinç düştü');

			text = text.replace('Ladrão dos Ovos da Páscoa', '🥚 Ladrão dos Ovos da Páscoa');
			text = text.replace('Escova roubada da Oficina', '🥚 Escova roubada da Oficina');
			text = text.replace('Toca do Coelho Colapsou', '🥚 Toca do Coelho Colapsou');
			text = text.replace('Coelhinho da Páscoa Atingido', '🥚 Coelhinho da Páscoa Atingido');
			text = text.replace('Cesto da Páscoa a Arder', '🥚 Cesto da Páscoa a Arder');
			text = text.replace('Tanque de Chocolate Derramado', '🥚 Tanque de Chocolate Derramado');
			text = text.replace('Caldeira de Ovo a Arder', '🥚 Caldeira de Ovo a Arder');
			text = text.replace('Encontro de Coelhos na cidade da páscoa', '🥚 Encontro de Coelhos na cidade da páscoa');
			text = text.replace('Camião dos Ovos caputado', '🥚 Camião dos Ovos caputado');
			text = text.replace('Missão Prioritária: Caça aos Ovos da Páscoa', '🥚 Missão Prioritária: Caça aos Ovos da Páscoa');
			text = text.replace('Coelhinho da Páscoa numa grua', '🥚 Coelhinho da Páscoa numa grua');

			text = text.replace('Крадіжка пасхальних яєць', '🥚 Крадіжка пасхальних яєць');
			text = text.replace('Крадіжка пензлів з Майстерні', '🥚 Крадіжка пензлів з Майстерні');
			text = text.replace('Обвал Кролячої нори', '🥚 Обвал Кролячої нори');
			text = text.replace('Хто збив Пасхального кролика', '🥚 Хто збив Пасхального кролика');
			text = text.replace('Палаючий Пасхальний кошик', '🥚 Палаючий Пасхальний кошик');
			text = text.replace('Протікання цистерни з шоколадом', '🥚 Протікання цистерни з шоколадом');
			text = text.replace('Загоряння при варці яєць', '🥚 Загоряння при варці яєць');
			text = text.replace('Зібрання зайців в містечку Пасхальних яєць', '🥚 Зібрання зайців в містечку Пасхальних яєць');
			text = text.replace('Перекидання вантажівки з пасхальними яйцями', '🥚 Перекидання вантажівки з пасхальними яйцями');
			text = text.replace('Пріорітетне завдання: Полювання на Пасхальні яйця', '🥚 Пріорітетне завдання: Полювання на Пасхальні яйця');
			text = text.replace('Пасхальний кролик на підйомному крані', '🥚 Пасхальний кролик на підйомному крані');

			text = text.replace('이스터 에그 도둑', '🥚 이스터 에그 도둑');
			text = text.replace('작업장에서 브러시 도난', '🥚 작업장에서 브러시 도난');
			text = text.replace('무너진 토끼굴', '🥚 무너진 토끼굴');
			text = text.replace('이스터 버니 교통사고', '🥚 이스터 버니 교통사고');
			text = text.replace('이스터 바구니 화재', '🥚 이스터 바구니 화재');
			text = text.replace('초콜릿 탱크 유출', '🥚 초콜릿 탱크 유출');
			text = text.replace('에그 보일러 화재', '🥚 에그 보일러 화재');
			text = text.replace('이스터 에그 마을의 토끼 회의', '🥚 이스터 에그 마을의 토끼 회의');
			text = text.replace('이스터 에그 트럭 전복', '🥚 이스터 에그 트럭 전복');
			text = text.replace('우선 순위 임무: 이스터 에그 헌트', '🥚 우선 순위 임무: 이스터 에그 헌트');
			text = text.replace('크레인 위의 이스터 버니', '🥚 크레인 위의 이스터 버니');

			text = text.replace('イースターエッグ泥棒', '🥚 イースターエッグ泥棒');
			text = text.replace('工房から盗まれたブラシ', '🥚 工房から盗まれたブラシ');
			text = text.replace('崩れたウサギの巣穴', '🥚 崩れたウサギの巣穴');
			text = text.replace('事故ったイースターバニー', '🥚 事故ったイースターバニー');
			text = text.replace('燃えるイースターバスケット', '🥚 燃えるイースターバスケット');
			text = text.replace('チョコレートタンカー流出', '🥚 チョコレートタンカー流出');
			text = text.replace('燃えるエッグボイラー', '🥚 燃えるエッグボイラー');
			text = text.replace('イースターエッグタウンの野ウサギ会議', '🥚 イースターエッグタウンの野ウサギ会議');
			text = text.replace('横転したイースターエッグのトラック', '🥚 横転したイースターエッグのトラック');
			text = text.replace('優先ミッション：イースターエッグハント', '🥚 優先ミッション：イースターエッグハント');
			text = text.replace('クレーンに乗ったイースターバニー', '🥚 クレーンに乗ったイースターバニー');

			text = text.replace('Hoț de ouă de Paște', '🥚 Hoț de ouă de Paște');
			text = text.replace('Perie furată din Atelier', '🥚 Perie furată din Atelier');
			text = text.replace('Gaură de iepure prăbușită', '🥚 Gaură de iepure prăbușită');
			text = text.replace('Iepuraș de paște lovit', '🥚 Iepuraș de paște lovit');
			text = text.replace('Coșuleț de Paște în flăcări', '🥚 Coșuleț de Paște în flăcări');
			text = text.replace('Scurgere dintr-o cisternă de ciocolată', '🥚 Scurgere dintr-o cisternă de ciocolată');
			text = text.replace('Fierbător de ouă în flăcări', '🥚 Fierbător de ouă în flăcări');
			text = text.replace('Întrunirea iepurașilor în orașul ouălor de Paște', '🥚 Întrunirea iepurașilor în orașul ouălor de Paște');
			text = text.replace('Camion cu ouă de Paște răsturnat', '🥚 Camion cu ouă de Paște răsturnat');
			text = text.replace('Misiune prioritară: vânătoarea ouălor de Paște', '🥚 Misiune prioritară: vânătoarea ouălor de Paște');
			text = text.replace('Iepuraș de Paște pe macara', '🥚 Iepuraș de Paște pe macara');
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