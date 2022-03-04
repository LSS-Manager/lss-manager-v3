(function (I18n, $) {
    const LSS_RENAMEFZ_STORAGE = 'LSS_RENAMEFZ_STORAGE';

    I18n.translations.de_DE.lssm.renameFz = {
        name: 'Fahrzeuge Umbenennen',
        rename: 'Umbenennen',
        id: '{id} FahrzeugId ',
        old: '{old} Alten Namen ein',
        vehicleType: '{vehicleType} Typen des Fahrzeugs',
        stationName: '{stationName} Wachennamen',
        tagging: '{tagging} Kennzeichnung des Fahrzeugtyps',
        number: '{number} Typ-Zähler',
        numberRoman: '{numberRoman} Typ-Zähler (römische Zahlen)',
        dispatch: '{dispatch} Leitstellenname',
        dispatchAlias: '{dispatchAlias} Leitstellen-Alias',
        stationAlias: '{stationAlias} Wachen-Alias',
        saveAll: 'Alle speichern',
        statusWaiting: 'Warte auf Eingabe',
        statusError:
            '<b>Fehler bei der Generierung!</b> Sollte dieser Fehler ein weiteres mal auftreten, bitte melde ihn. Bitte teile dann folgendes mit:',
        statusWorking:
            'Generiere Namen und Formulare. Dies kann, abhängig von System und Anzahl der Fahrzeuge, eine gewisse Zeit in Anspruch nehmen.',
        statusSuccess: 'Namen und Formulare erfolgreich generiert!',
        nameAlreadyCorrect: 'Name entspricht bereits der Vorlage!',
        nameToLong: 'Für folgende Fahrzeuge ist der Name zu lang:',
        nameToLongOriginalName: 'Ursprünglicher Name',
        nameToLongGeneratedName: 'Generierter Name',
        nameToLongShortenedName: 'Neuer/gekürzter Name',
        startNum: 'Zähler-Start',
        counterOverride:
            'Bei mehreren Fahrzeugen eines Typs trotzdem bei 1 anfangen',
        startNumHelp:
            'Hier kann man einen Startwert für den Typzähler angeben. Setzt man da 0 und legt den Hebel nebendran um, so werden Fahrzeuge, die nur einen Typ auf der Wache haben keine durchnummerierung bekommen, sollten sich aber mehrere Fahrzeuge eines Typs auf der Wache befinden, wird der Typ, bei 1 beginnend, durchnummeriert. Man kann dann aber auch den Zähler bei 5 starten lassen (warum auch immer man das wollen sollte, aber es ist möglich ;) )',
        helpTitle: 'Eine kleine Anleitung findest du unter diesem Link: ',
        helpLink: 'https://docs.lss-manager.de/modules/renameFz',
        toggleNameCorrect: 'Fahrzeuge mit richtigem Namen ein-/ausblenden',
        settings: {
            show: 'Ein-/Ausblenden',
            names: {
                vehicleTypes: 'Fahrzeugtypen',
                stations: 'Wachen-Aliase',
            },
            descriptions: {
                vehicleTypes:
                    'Da die folgenden Textfelder vielleicht verwirrend erscheinen: Man kann hier für jeden Fahrzeugtyp eine alternative Bezeichnung eingeben und diese dann einfügen lassen, in der Leitstelle.',
                stations:
                    'Du kannst hier für jede Wache einen alternativen Namen eingeben und diesen dann beim Umbenennen in der Leitstelle verwenden.',
            },
            validStationTypes: {
                0: 'Feuerwache',
                2: 'Rettungswache',
                5: 'Rettungshubschrauber-Station',
                6: 'Polizeiwache',
                7: 'Leitstelle',
                9: 'THW',
                11: 'Bereitschaftspolizei',
                12: 'Schnelleinsatzgruppe (SEG)',
                13: 'Polizeihubschrauberstation',
                15: 'Wasserrettung',
                17: 'Polizei-Sondereinheiten',
                18: 'Feuerwache (Kleinwache)',
                19: 'Polizeiwache (Kleinwache)',
                20: 'Rettungswache (Kleinwache)',
                21: 'Rettungshundestaffel',
            },
            vehicleTypes: {
                0: 'LF 20',
                1: 'LF 10',
                2: 'DLK 23',
                3: 'ELW 1',
                4: 'RW',
                5: 'GW-A',
                6: 'LF 8/6',
                7: 'LF 20/16',
                8: 'LF 10/6',
                9: 'LF 16-TS',
                10: 'GW-Öl',
                11: 'GW-L2-Wasser',
                12: 'GW-Messtechnik',
                13: 'SW 1000',
                14: 'SW 2000',
                15: 'SW 2000-Tr',
                16: 'SW Kats',
                17: 'TLF 2000',
                18: 'TLF 3000',
                19: 'TLF 8/8',
                20: 'TLF 8/18',
                21: 'TLF 16/24-Tr',
                22: 'TLF 16/25',
                23: 'TLF 16/45',
                24: 'TLF 20/40',
                25: 'TLF 20/40-SL',
                26: 'TLF 16',
                27: 'GW-Gefahrgut',
                28: 'RTW',
                29: 'NEF',
                30: 'HLF 20',
                31: 'RTH',
                32: 'FuStW',
                33: 'GW-Höhenrettung',
                34: 'ELW 2',
                35: 'leBefKw',
                36: 'MTW',
                37: 'TSF-W',
                38: 'KTW',
                39: 'GKW',
                40: 'MTW-TZ',
                41: 'MzKW',
                42: 'LKW K 9',
                43: 'BRmG R',
                44: 'Anh DLE',
                45: 'MLW 5',
                46: 'WLF',
                47: 'AB-Rüst',
                48: 'AB-Atemschutz',
                49: 'AB-Öl',
                50: 'GruKw',
                51: 'FüKw',
                52: 'GefKw',
                53: 'Dekon-P',
                54: 'AB-Dekon-P',
                55: 'KdoW-LNA',
                56: 'KdoW-OrgL',
                57: 'FwK',
                58: 'KTW Typ B',
                59: 'ELW 1 (SEG)',
                60: 'GW-San',
                61: 'Polizeihubschrauber',
                62: 'AB-Schlauch',
                63: 'GW-Taucher',
                64: 'GW-Wasserrettung',
                65: 'LKW 7 Lkr 19 tm',
                66: 'Anh MzB',
                67: 'Anh SchlB',
                68: 'Anh MzAB',
                69: 'Tauchkraftwagen',
                70: 'MZB',
                71: 'AB-MZB',
                72: 'WaWe 10',
                73: 'GRTW',
                74: 'NAW',
                75: 'FLF',
                76: 'Rettungstreppe',
                77: 'AB-Gefahrgut',
                78: 'AB-Einsatzleitung',
                79: 'SEK - ZF',
                80: 'SEK - MTF',
                81: 'MEK - ZF',
                82: 'MEK - MTF',
                83: 'GW-Werkfeuerwehr',
                84: 'ULF mit Löscharm',
                85: 'TM 50',
                86: 'Turbolöscher',
                87: 'TLF 4000',
                88: 'KLF',
                89: 'MLF',
                90: 'HLF 10',
                91: 'Rettungshundefahrzeug',
                92: 'Anh Hund',
                93: 'MTW-OV',
                94: 'DHuFüKw',
                95: 'Polizeimotorrad',
                96: 'Außenlastbehälter (allgemein)',
                97: 'ITW',
                98: 'Zivilstreifenwagen',
                99: 'LKW 7 Lbw',
                100: 'MLW 4',
                101: 'Anh SwPu',
                102: 'Anh 7',
                103: 'FuStW (DGL)',
            },
        },
    };

    I18n.translations.en_US.lssm.renameFz = {
        name: 'Rename vehicles',
        rename: 'rename',
        id: '{id} Id of Vehicle',
        old: '{old} Current name',
        vehicleType: '{vehicleType} Type of Vehicle',
        stationName: '{stationName} Name of building',
        tagging: '{tagging} Marking of the vehicle type',
        number: '{number} Type-counter',
        numberRoman: '{numberRoman} Type-counter (Roman numerals)',
        dispatch: '{dispatch} Name of Dispatchcenter',
        dispatchAlias: '{dispatchAlias} Alias of Dispatchcenter',
        stationAlias: '{stationAlias} Building-Alias',
        saveAll: 'save All',
        statusWaiting: 'Wait for input',
        statusError:
            '<b>Error during generation!</b> If this error occurs again, please report it. Please provide the following information:',
        statusWorking:
            'Generate names and forms. This can take a certain amount of time, depending on the system and number of vehicles.',
        statusSuccess: 'Names and Forms successfully generated!',
        nameAlreadyCorrect: 'Name already corresponds to the template!',
        nameToLong: 'The name is too long for the following vehicles:',
        nameToLongOriginalName: 'Original Name',
        nameToLongGeneratedName: 'Generated Name',
        nameToLongShortenedName: 'New/shortened name',
        helpTitle: 'You can find a small instruction under this link: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Counter start',
        counterOverride:
            'If there are several vehicles of the same type, start with 1 anyway.',
        startNumHelp:
            'Here you can enter a start value for the type counter. If you set 0 as the start value, the first vehicle of a type will not get the numbering, this is very practical if you have only one vehicle of a type on a guard and do not want to number it. But you can also start the counter at 5 (for whatever reason you want, but it is possible ;) )',
        toggleNameCorrect: 'Show/Hide Vehicles with correct names',
        settings: {
            show: 'Show/Hide',
            names: {
                vehicleTypes: 'vehicle Types',
                stations: 'Building alias',
            },
            descriptions: {
                vehicleTypes:
                    'Here you can set alternative names for each vehicle Type. You can use them when renaming you vehicles via dispatch center.',
                stations:
                    'Here you can set alternative names for each building. You can use them when renaming you vehicles via dispatch center.',
            },
            validStationTypes: {
                0: 'Fire Station',
                1: 'Dispatch Center',
                3: 'Ambulance Station',
                5: 'Police Station',
                6: 'Helicopter station',
                8: 'Police Aviation',
                11: 'Fire boat dock',
                12: 'Rescue boat dock',
                13: 'Fire Station (Small)',
                14: 'Urgent Care Center',
                15: 'Police Station (Small station)',
                16: 'Ambulance station (Small station)',
                17: 'Firefighting plane station',
                18: 'Federal Police Station',
                22: "Fire Marshal's Office"
            },
            vehicleTypes: {
                0: 'Type 1 fire engine',
                1: 'Type 2 fire engine',
                2: 'Platform truck',
                3: 'Battalion chief unit',
                4: 'Heavy rescue vehicle',
                5: 'ALS Ambulance',
                6: 'Mobile air',
                7: 'Water Tanker',
                8: 'Utility unit',
                9: 'HazMat',
                10: 'Patrol car',
                11: 'HEMS',
                12: 'mcv',
                13: 'Quint',
                14: 'Police helicopter',
                15: 'Fly-Car',
                16: 'SWAT Armoured Vehicle',
                17: 'ARFF Crash Tender',
                18: 'Rescue Engine',
                19: 'K-9 Unit',
                20: 'Mass Casualty Unit',
                21: 'Heavy Rescue + Boat',
                22: 'Boat Trailer',
                23: 'Police Motorcycle',
                24: 'Large Fireboat',
                25: 'Large Rescue Boat',
                26: 'SWAT SUV',
                27: 'BLS Ambulance',
                28: 'EMS Rescue',
                29: 'EMS Chief',
                30: 'Type 3 engine',
                31: 'Type 5 engine',
                32: 'Type 7 engine',
                33: 'Pumper Tanker',
                34: 'Crew Carrier',
                35: 'Water drop helicopter',
                36: 'Air tanker',
                37: 'Heavy air tanker',
                38: 'Type 4 engine',
                39: 'Type 6 engine',
                40: 'Dozer Trailer',
                41: 'Crew cap semi',
                42: 'FBI Unit',
                43: 'FBI Investigation Wagon',
                44: 'FBI Mobile Command Center',
                45: 'FBI Bomb Technician Vehicle',
                46: 'FBI Surveillance Drone',
                47: 'Sheriff Unit',
                48: 'EMS Fire Engine/Ambulance',
                49: 'Tactical Ambulance',
                50: 'Hazmat Ambulance',
                51: 'DEA Unit',
                52: 'DEA Clan Lab',
                53: 'ATF Unit',
                54: 'ATF Lab Vehicle',
                55: 'Patrol Boat',
                56: "Warden's Truck",
                57: 'EMS Mass Casualty Trailer (large)',
                58: 'EMS Mass Casualty Trailer (small)',
                59: 'EMS Operations Support',
                60: 'EMS Mobile Command Unit',
                61: 'ALS Rescue Ambulance',
                62: 'Fire Investigator Unit',
                63: 'Fire Prevention Unit',
                64: 'Foam Tender',
                65: 'Foam Trailer',
            },
        },
    };

    I18n.translations.en_GB.lssm.renameFz = {
        name: 'Rename vehicles',
        settings: {
            show: 'Show/Hide',
            names: {
                vehicleTypes: 'vehicle Types',
                stations: 'Building alias',
            },
            descriptions: {
                vehicleTypes:
                    'Here you can set alternative names for each vehicle Type. You can use them when renaming you vehicles via dispatch center.',
                stations:
                    'Here you can set alternative names for each building. You can use them when renaming you vehicles via dispatch center.',
            },
            validStationTypes: {
                0: 'Fire Station',
                2: 'Ambulance Station',
                5: 'Medical Helicopter station',
                6: 'Police Station',
                7: 'Dispatch Center',
                13: 'Police Aviation',
                18: 'Fire Station (Small)',
                19: 'Police Station (Small station)',
                20: 'Ambulance station (Small station)',
                21: 'Clinic',
                22: 'Home Response Location',
                25: 'HART Base',
            },
            vehicleTypes: {
                0: 'Water Ladder',
                1: 'Light 4X4 Pump (L4P)',
                2: 'Aerial Appliance',
                3: 'Fire Officer',
                4: 'Rescue Support Unit (RSU)',
                5: 'Ambulance',
                6: 'Water Carrier',
                7: 'HazMat Unit',
                8: 'Incident response vehicle (IRV)',
                9: 'HEMS',
                10: 'Rapid Response Vehicle',
                11: 'Police helicopter',
                12: 'Dog Support Unit (DSU)',
                13: 'Armed Response Vehicle (ARV)',
                14: 'Breathing Apparatus Support Unit (BASU)',
                15: 'Incident Command and Control Unit (ICCU)',
                16: 'Rescue Pump',
                17: 'CARP',
                18: 'Co-Responder Vehicle',
                19: 'Joint Response Unit',
                20: 'Operational Team Leader',
                21: 'General Practitioner',
                22: 'Community First Responder',
                23: 'Crew Carrier',
                24: 'Traffic Car',
                25: 'Armed Traffic Car',
                26: 'Heavy 4x4 Tanker',
                27: 'PRV',
                28: 'SRV',
                29: 'Welfare Vehicle',
                30: 'ATV Carrier',
                31: 'Ambulance Control Unit',
                32: 'CBRN Vehicle',
                33: 'Mass Casualty Equipment',
                34: 'Ambulance Officer',
                35: 'BFU',
                36: 'F/WrC',
                37: 'WrL CAFS',
                38: 'RP CAFS',
                39: 'OSU',
                40: 'PM',
                41: 'Water Pod',
                42: 'Bulk Foam Pod',
                43: 'Rescue Pod',
                44: 'Command Pod',
                45: 'Welfare Pod',
                46: 'BASU Pod',
                47: 'Misting Pod',
                48: 'Hazardous Materials Pod',
                49: 'OSU Pod',
                50: 'HVP',
            },
        },
    };

    I18n.translations.en_AU.lssm.renameFz = {
        name: 'Rename vehicles',
        settings: {
            show: 'Show/Hide',
            names: {
                vehicleTypes: 'vehicle Types',
                stations: 'Building alias',
            },
            descriptions: {
                vehicleTypes:
                    'Here you can set alternative names for each vehicle Type. You can use them when renaming you vehicles via dispatch center.',
                stations:
                    'Here you can set alternative names for each building. You can use them when renaming you vehicles via dispatch center.',
            },
            validStationTypes: {
                0: 'Fire Station',
                2: 'Ambulance Station',
                5: 'Air Ambulance Station',
                6: 'Police Station',
                7: 'Dispatch Center',
                13: 'Police Air Wing',
                15: 'SES unit',
                18: 'Fire Station (Small)',
                19: 'Police Station (Small station)',
                20: 'Ambulance station (Small station)',
                23: 'Fire Airbase',
            },
            vehicleTypes: {
                0: 'Pumper',
                1: 'Medium Tanker',
                2: 'Turntable Ladder',
                3: 'Support Vehicle',
                4: 'Major Rescue Vehicle',
                5: 'Ambulance',
                6: 'Bulk Water Tanker',
                7: 'HAZMAT',
                8: 'Police car',
                9: 'Air Ambulance',
                10: 'BASU',
                11: 'MCV',
                12: 'Rescue Pumper',
                13: 'Aerial Pumper',
                14: 'Police helicopter',
                15: 'TOG Armoured Bearcat',
                16: 'K-9 Unit',
                17: 'Police Motorcycle',
                18: 'TOG SUV',
                19: 'Heavy Tanker',
                20: 'SES Vehicle',
                21: 'Rescue Boat',
                22: 'Mounted Police',
                23: 'Paramedic Supervisor',
                24: 'ICP',
                25: 'ICS',
                26: 'Ambulance Rescue',
                27: 'Mass Casualty Unit',
                28: 'Ultra-Light Tanker',
                29: 'Light Tanker',
                30: 'Pumper Tanker',
                31: 'Fire Helicopter',
                32: 'Bomber',
                33: 'Large Air Tanker',
            },
        },
    };

    I18n.translations.cs_CZ.lssm.renameFz = {
        name: 'Přejmenovat vozidla',
        rename: 'přejmenovat',
        id: '{id} Id vozidla',
        old: '{old} Aktuální jméno',
        vehicleType: '{vehicleType} Typ vozidla',
        stationName: '{stationName} Jméno Budovy',
        tagging: '{tagging} Označení typu vozidla',
        number: '{number} Počitadlo typů',
        numberRoman: '{numberRoman} Počitadlo typů (římské číslice)',
        dispatch: '{dispatch} Jméno dispečera',
        dispatchAlias: '{dispatchAlias} Alias of Dispatchcenter',
        stationAlias: '{stationAlias} Budova-Alias',
        saveAll: 'uložit vše',
        statusWaiting: 'Počkejte na zadání',
        statusError:
            '<b>Chyba při generování!</b> Pokud se tato chyba objeví znovu, nahlaste ji. Uveďte následující informace:',
        statusWorking:
            'Generujte jména a formuláře. To může trvat určitou dobu v závislosti na systému a počtu vozidel.',
        statusSuccess: 'Jména a fórum byly úspěšně vygenerovány!',
        nameAlreadyCorrect: 'Název již odpovídá šabloně!',
        nameToLong: 'Název je příliš dlouhý pro následující vozidla:',
        nameToLongOriginalName: 'Původní jméno',
        nameToLongGeneratedName: 'Generované jméno',
        nameToLongShortenedName: 'Nové / zkrácené jméno',
        helpTitle: 'Pod tímto odkazem naleznete malou instrukci: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Začátek počítadla',
        counterOverride:
            'Pokud existuje více vozidel stejného typu, začněte přesto s 1.',
        startNumHelp:
            'Zde můžete zadat počáteční hodnotu pro počítadlo typů. Pokud nastavíte 0 jako počáteční hodnotu, první vozidlo typu nedostane číslování, je to velmi praktické, pokud máte na stráži pouze jedno vozidlo typu a nechcete jej číslovat. Počítadlo však můžete také spustit na 5 (z jakéhokoli důvodu chcete, ale je to možné;))',
        toggleNameCorrect: 'Zobrazit / skrýt vozidla se správnými názvy',
        settings: {
            show: 'Zobrazit / skrýt',
            names: {
                vehicleTypes: 'typy vozidel',
                stations: 'Budování aliasu',
            },
            descriptions: {
                vehicleTypes:
                    'Zde můžete nastavit alternativní názvy pro každý typ vozidla. Můžete je použít při přejmenování vozidel přes dispečink.',
                stations:
                    'Zde můžete nastavit alternativní názvy pro každou budovu. Můžete je použít při přejmenování vozidel přes dispečink.',
            },
            validStationTypes: {
                0: 'Požární stanice',
                2: 'Výjezdová základna záchranné služby',
                5: 'Základna Letecké záchranné služby',
                6: 'Obvodní oddělení Policie',
                7: 'Dispečink',
                13: 'Letecká služba PČR',
                15: 'Vodní záchranná služba ČČK',
                18: 'Požární stanice (malá)',
                19: 'Obvodní oddělení Policie (malá)',
                20: 'Výjezdová základna záchranné služby (malé)',
                21: 'Pyrotechnická služba PČR',
            },
            vehicleTypes: {
                0: 'CAS 20',
                1: 'CAS 30',
                2: 'AZ',
                3: 'VEA',
                4: 'TA',
                5: 'RZP',
                6: 'KHA',
                7: 'TACH',
                8: 'Policejní automobil',
                9: 'Vrtulník LZS',
                10: 'AP',
                11: 'Policejní vrtulník',
                12: 'Obrněné vozidlo URNA',
                13: 'Vozidlo Kynologů PČR',
                14: 'Policejní motocykl',
                15: 'URNA SUV',
                16: 'Protiplynový automobil',
                17: 'MOS',
                18: 'Vozidlo vyšetřovatelů DN',
                19: 'Vozidlo pyrotechika PČR',
                20: 'Přívěs se člunem',
                21: 'Přívěs se člunem VZS ČČK',
                22: 'Potápěčský automobil',
                23: 'SUV VZS ČČK',
                24: 'Dodávka VZS ČČK',
                25: 'RV',
                26: 'IP',
                27: 'RLP',
                28: 'VYA',
                29: 'AJ',
                30: 'DA',
                31: 'RZA',
            },
        },
    };

    I18n.translations.pl_PL.lssm.renameFz = {
        name: 'Zmiana nazwy pojazdów',
        rename: 'zmiana nazwy',
        id: '{id} Id pojazdu',
        old: '{old} Aktualna nazwa',
        vehicleType: '{vehicleType} Typ pojazdu',
        stationName: '{stationName} Nazwa budynku',
        tagging: '{tagging} Oznakowanie typu pojazdu',
        number: '{number} Licznik typów',
        numberRoman: '{numberRoman} Licznik typów (cyfry rzymskie)',
        dispatch: '{dispatch} Nazwa dyspozytora',
        dispatchAlias:
            '{dispatchAlias} Alias od Dispatchcenter (Dyspozytornia)',
        stationAlias: '{stationAlias} Aliasy budowlane',
        saveAll: 'ocalić wszystko.',
        statusWaiting: 'Poczekaj na wejście.',
        statusError:
            '<b>Błąd podczas generowania!</b> Jeśli ten błąd wystąpi ponownie, należy go zgłosić. Proszę podać następujące informacje:',
        statusWorking:
            'Generowanie nazwisk i formularzy. Może to zająć pewną ilość czasu, w zależności od systemu i liczby pojazdów.',
        statusSuccess: 'Nazwy i Forumlare zostały wygenerowane z powodzeniem!',
        nameAlreadyCorrect: 'Nazwa już odpowiada szablonowi!',
        nameToLong: 'Nazwa jest zbyt długa dla następujących pojazdów:',
        nameToLongOriginalName: 'Oryginalna nazwa',
        nameToLongGeneratedName: 'Generowana nazwa',
        nameToLongShortenedName: 'Nowa/skrócona nazwa',
        helpTitle: 'Mała instrukcja znajduje się pod tym linkiem: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Start licznika',
        counterOverride:
            'Jeżeli istnieje kilka pojazdów tego samego typu, należy rozpocząć od 1.',
        startNumHelp:
            'W tym miejscu można wprowadzić wartość początkową dla licznika typów. Jeśli ustawisz 0 jako wartość początkową, pierwszy pojazd danego typu nie otrzyma numeracji, jest to bardzo praktyczne, jeśli masz tylko jeden pojazd danego typu na straży i nie chcesz go ponumerować. Ale możesz również uruchomić licznik o 5 (z dowolnego powodu, ale jest to możliwe ;) )',
        toggleNameCorrect: 'Pokaż/Ukryj pojazdy z prawidłowymi nazwami',
        settings: {
            show: 'Pokaż/Ukryj się',
            names: {
                vehicleTypes: 'Typy pojazdów',
                stations: 'Pseudonim budynku',
            },
            descriptions: {
                vehicleTypes:
                    'Tutaj można ustawić alternatywne nazwy dla każdego typu pojazdu. Można ich używać przy zmianie nazwy pojazdu za pośrednictwem dyspozytorni.',
                stations:
                    'Tutaj możesz ustawić alternatywne nazwy dla każdego budynku. Można ich używać przy zmianie nazwy pojazdu za pośrednictwem dyspozytorni.',
            },
            validStationTypes: {
                0: 'Jednostka Ratowniczo-Gaśnicza',
                2: 'Stacja Pogotowia Ratunkowego',
                5: 'Stacja helikopterów',
                6: 'Komenda Policji',
                7: 'Centrum Powiadamiania Ratunkowego',
                13: 'Stacja Helikopterów Policji',
                15: 'Stacja WOPR',
                18: 'Remiza',
                19: 'Posterunek Policji',
                20: 'Podstacja Pogotowia Ratunkowego',
            },
            vehicleTypes: {
                0: 'Ciężki samochód gaśniczy',
                1: 'Średni samochód gaśniczy',
                2: 'Drabina mechaniczna',
                3: 'Samochód Oficera Operacyjnego',
                4: 'Samochód ratownictwa technicznego',
                5: 'Ambulans P',
                6: 'Cysterna gaśnicza',
                7: 'Samochód ratownictwa chemicznego',
                8: 'Radiowóz',
                9: 'Śmigłowiec LPR',
                10: 'SPGaz',
                11: 'Samochód Dowodzenia i Łączności',
                12: 'GBARt',
                13: 'Podnośnik hydrauliczny',
                14: 'Helikopter Policyjny',
                15: 'Opancerzony Pojazd SPKP',
                16: 'Jednostka K-9',
                17: 'Motocykl Policyjny',
                18: 'SUV SPKP',
                19: 'S.WOPR',
                20: 'Quad',
                21: 'L.Ratownicza',
                22: 'Ponton',
                23: 'Skuter',
                24: 'Samochód SLRw',
                25: 'Dźwig SP',
                26: 'Łódź SP',
                27: 'SRWys',
                28: 'SLRr',
                29: 'GLBA',
                30: 'Radiowóz WRD',
                31: 'Ambulans S',
                32: 'Samochód Lekarza',
                33: 'Motoambulans',
                34: 'Ambulans T',
                35: 'SRMed',
                36: 'Kontenerowiec',
                37: 'SCRd',
                38: 'GCBARt',
                39: 'GLBARt',
                40: 'Kontener inżynieryjno - techniczny',
                41: 'Kontener dekontaminacyjny',
                42: 'Kontener z AODO',
                43: 'Kontener dowodzeniowy',
                44: 'Kontener do przewozu środków gaśniczych',
                45: 'Kontener socjalno - sanitarny',
                46: 'Kontener powodziowo - pompowy',
                47: 'Kontener - cysterna',
                48: 'Przyczepa pompowa',
                49: 'Przyczepa chemiczno - ekologiczna',
                50: 'Przyczepa dekontaminacyjna',
                51: 'Przyczepa przeciwpowodziowa',
                52: 'Przyczepa ze sprzętem AODO',
                53: 'Przyczepa ze sprzętem medycznym',
                54: 'Przyczepa z łódką strażacką',
                55: 'GCBAPr',
                56: 'GBAPr',
                57: 'GCPr',
                58: 'GPr',
                59: 'GLPr',
                60: 'Przyczepa ze środkiem pianotwórczym',
                61: 'SW',
                62: 'Przyczepa wężowa',
                63: 'Przyczepa wielofunkcyjna',
                64: 'Kontener wężowy',
            },
        },
    };

    I18n.translations.sv_SE.lssm.renameFz = {
        name: 'Byt namn på fordon',
        rename: 'döpa om',
        id: '{id} Id för fordon',
        old: '{old} Nuvarande namn',
        vehicleType: '{vehicleType} Typ av fordon',
        stationName: '{stationName} Byggnadens namn',
        tagging: '{tagging} Marking of the vehicle type',
        number: '{number} Typ-counter',
        numberRoman: '{numberRoman} Typ-counter (romerska siffror)',
        dispatch: '{dispatch} Namn på Dispatchcenter',
        dispatchAlias: '{dispatchAlias} Alias of Dispatch Center',
        stationAlias: '{stationAlias} Bygga-Alias',
        saveAll: 'rädda alla',
        statusWaiting: 'Vänta på inmatning',
        statusError:
            '<b>Fel under generationen!</b> Om det här felet uppstår igen, rapportera det. Ange följande information:',
        statusWorking:
            'Generera namn och former. Det kan ta en viss tid beroende på system och antal fordon.',
        statusSuccess: 'Namn och Forumlare framgångsrikt genererade!',
        nameAlreadyCorrect: 'Namnet motsvarar redan mallen!',
        nameToLong: 'Namnet är för långt för följande fordon:',
        nameToLongOriginalName: 'Originalnamn',
        nameToLongGeneratedName: 'Genererat namn',
        nameToLongShortenedName: 'Nytt / förkortat namn',
        helpTitle: 'Du hittar en liten instruktion under denna länk: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Motstart',
        counterOverride:
            'Om det finns flera fordon av samma typ börjar du ändå med 1.',
        startNumHelp:
            'Här kan du ange ett startvärde för typräknaren. Om du ställer in 0 som startvärde, kommer det första fordonet av en typ inte att få numrering, detta är mycket praktiskt om du bara har ett fordon av en typ på en skydd och inte vill numrera det. Men du kan också starta räknaren vid 5 (oavsett anledning du vill, men det är möjligt;))',
        toggleNameCorrect: 'Visa / dölj fordon med korrekta namn',
        settings: {
            show: 'Visa gömma',
            names: {
                vehicleTypes: 'fordonstyper',
                stations: 'Bygga alias',
            },
            descriptions: {
                vehicleTypes:
                    'Här kan du ange alternativa namn för varje fordonstyp. Du kan använda dem när du byter namn på dina fordon via avsändningscentret.',
                stations:
                    'Här kan du ange alternativa namn för varje byggnad. Du kan använda dem när du byter namn på dina fordon via avsändningscentret.',
            },
            validStationTypes: {
                0: 'Brandstation',
                2: 'Ambulansstation',
                5: 'Ambulanshelikopterstation',
                6: 'Polisstation',
                7: 'Larmcentral',
                13: 'Polisflyg',
                18: 'Brandstation (liten)',
                19: 'Polisstation (liten)',
                20: 'Ambulansstation (liten)',
                21: 'Brandflygsstation',
            },
            vehicleTypes: {
                0: 'BAS 1 - Släckbil',
                1: 'BAS 2 - Släckbil',
                2: 'Stegbil',
                3: 'Befälsfordon',
                4: 'Lastväxlare',
                5: 'Ambulans',
                6: 'Tankbil',
                7: 'Kemskyddsenhet',
                8: 'Radiobil',
                9: 'Ambulanshelikopter',
                10: 'Luftfordon',
                11: 'Mobilt ledningsfordon',
                12: 'Räddningsfordon',
                13: 'Polishelikopter',
                14: 'Bepansrat insatsfordon',
                15: 'Hundenhet',
                16: 'Polismotorcykel',
                17: 'Insatsfordon',
                18: 'Dykbil',
                19: 'Tryckkammarbil',
                20: 'Liten räddningsbåt',
                21: 'Terrängbil',
                22: 'Bandvagn',
                23: 'ATV',
                24: 'Polishäst',
                25: 'Brandhelikopter',
                26: 'Vattenbombare',
                27: 'Stor Vattenbombare',
                28: 'Akutläkarbil',
                29: 'FIP',
                30: 'Lättvårdsambulans',
                31: 'Ledningsfordon',
                32: 'Jourläkare',
                33: 'IVPA',
                34: 'MC-Ambulans',
                35: 'Slangbil',
                36: 'Slangbil med pump',
                37: 'Skumenhet',
                38: 'Motorspruta',
            },
        },
    };

    I18n.translations.da_DK.lssm.renameFz = {
        name: 'Omdøb køretøjer',
        rename: 'omdøb',
        id: '{id} Id for køretøj',
        old: '{old} Nuværende navn',
        vehicleType: '{vehicleType} Type køretøj',
        stationName: '{stationName} Bygningens navn',
        tagging: '{tagging} Mærkning af køretøjstypen',
        number: '{number} Type tæller',
        numberRoman: '{numberRoman} Type tæller (romertal)',
        dispatch: '{dispatch} Navn på dispatchcenter',
        dispatchAlias: '{dispatchAlias} Alias of Dispatchcenter',
        stationAlias: '{stationAlias} Bygning-Alias',
        saveAll: 'Gem alle',
        statusWaiting: 'Vent på input',
        statusError:
            '<b>Fejl under generation!</b> Hvis denne fejl opstår igen, skal du rapportere den. Angiv følgende oplysninger:',
        statusWorking:
            'Generer navne og formularer. Dette kan tage en vis tid, afhængigt af systemet og antallet af køretøjer.',
        statusSuccess: 'Navne og Forumlare er genereret!',
        nameAlreadyCorrect: 'Navn svarer allerede til skabelonen!',
        nameToLong: 'Navnet er for langt til følgende køretøjer:',
        nameToLongOriginalName: 'Originalt navn',
        nameToLongGeneratedName: 'Genereret navn',
        nameToLongShortenedName: 'Nyt / forkortet navn',
        helpTitle: 'Du kan finde en lille instruktion under dette link: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Counter start',
        counterOverride:
            'Hvis der er flere køretøjer af samme type, start alligevel med 1.',
        startNumHelp:
            'Her kan du indtaste en startværdi for typetælleren. Hvis du indstiller 0 som startværdi, får det første køretøj af en type ikke nummereringen, dette er meget praktisk, hvis du kun har et køretøj af en type på en vagt og ikke ønsker at nummerere det. Men du kan også starte tælleren kl. 5 (uanset hvad du vil, men det er muligt;) )',
        toggleNameCorrect: 'Vis / skjul køretøjer med korrekte navne',
        settings: {
            show: 'Vis / Skjul',
            names: {
                vehicleTypes: 'køretøjstyper',
                stations: 'Bygning alias',
            },
            descriptions: {
                vehicleTypes:
                    'Her kan du indstille alternative navne for hver køretøjstype. Du kan bruge dem, når du omdøber dine køretøjer via ekspeditionscentret.',
                stations:
                    'Her kan du indstille alternative navne for hver bygning. Du kan bruge dem, når du omdøber dine køretøjer via ekspeditionscentret.',
            },
            validStationTypes: {
                0: 'Brandstation',
                2: 'Ambulancestation',
                5: 'Helikopterstation',
                6: 'Politistation',
                7: 'Alarmcentral',
                13: 'Politihelikopterstation',
                15: 'Vandredningsstation',
                18: 'Brandstation (lille station)',
                19: 'Politistation (lille station)',
                20: 'Ambulancestation (lille station)',
            },
            vehicleTypes: {
                0: 'Autosprøjte',
                1: 'Slangetender',
                2: 'Stigevogn',
                3: 'Indsatsleder',
                4: 'Pionertjenesten',
                5: 'Ambulance',
                6: 'Tankvogn',
                7: 'CBRN',
                8: 'Patruljevogn',
                9: 'Rednings Helikopter',
                10: 'Højtrykskompressor',
                11: 'LKM',
                12: 'Specialsprøjte',
                13: 'Politihelikopter',
                14: 'AKS Pansret mandskabsvogn',
                15: 'Hundepatrulje',
                16: 'Politimotorcykel',
                17: 'AKS Patruljevogn',
                18: 'Dykkerbil',
                19: 'Kystlivredderbil',
                20: 'Bådtrailer',
                21: 'Indsatsleder Politi',
                22: 'Nødbehlandler',
                23: 'Akutlæge',
                24: 'Indsatsleder Akutlæge',
                25: 'Mobil Behandlingsplads',
                26: 'Crash Tender',
                27: 'Rednings trappe'
            },
        },
    };

    I18n.translations.nb_NO.lssm.renameFz = {
        name: 'Gi kjøretøy nytt navn',
        rename: 'Gi nytt navn',
        id: '{id} ID for kjøretøy',
        old: '{old} Gjeldende navn',
        vehicleType: '{vehicleType} Type kjøretøy',
        stationName: '{stationName} Navn på bygning',
        tagging: '{tagging} Merking av kjøretøytypen',
        number: '{number} Type-teller',
        numberRoman: '{numberRoman} Type-teller (romertall)',
        dispatch: '{dispatch} Navn på Dispatchcenter',
        dispatchAlias: '{dispatchAlias} Alias for Dispatchcenter',
        stationAlias: '{stationAlias} Bygning-alias',
        saveAll: 'lagre alt',
        statusWaiting: 'Vent på innspill',
        statusError:
            '<b> Feil under generering! </b> Hvis denne feilen oppstår igjen, kan du rapportere den. Oppgi følgende informasjon:',
        statusWorking:
            'Generer navn og skjemaer. Dette kan ta en viss tid, avhengig av system og antall kjøretøy.',
        statusSuccess: 'Navn og Forumlare er generert!',
        nameAlreadyCorrect: 'Navn tilsvarer allerede malen!',
        nameToLong: 'Navnet er for langt på følgende kjøretøy:',
        nameToLongOriginalName: 'Originalt navn',
        nameToLongGeneratedName: 'Generert navn',
        nameToLongShortenedName: 'Nytt / forkortet navn',
        helpTitle: 'Du finner en liten instruksjon under denne lenken: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Teller Start',
        counterOverride:
            'Hvis det er flere kjøretøyer av samme type, start uansett med 1.',
        startNumHelp:
            'Her kan du legge inn en startverdi for typetelleren. Hvis du setter 0 som startverdi, vil ikke det første kjøretøyet av en type få nummereringen, dette er veldig praktisk hvis du bare har ett kjøretøy av en type på en vakt og ikke vil nummerere det. Men du kan også starte skranken på 5 (uansett grunn du vil, men det er mulig;) )',
        toggleNameCorrect: 'Vis / skjul kjøretøy med riktige navn',
        settings: {
            show: 'Vis / skjul',
            names: {
                vehicleTypes: 'kjøretøystyper',
                stations: 'Bygge alias',
            },
            descriptions: {
                vehicleTypes:
                    'Her kan du angi alternative navn for hver biltype. Du kan bruke dem når du gir nytt navn til kjøretøyene via utsendelsessenteret.',
                stations:
                    'Her kan du angi alternative navn for hver bygning. Du kan bruke dem når du gir nytt navn til kjøretøyene via utsendelsessenteret.',
            },
            validStationTypes: {
                0: 'Brannstasjon',
                2: 'Ambulansestasjon',
                5: 'Helikopterstasjon',
                6: 'Politistasjon',
                7: 'Nødetatssenter',
                13: 'Politiheliport',
                15: 'Vannredning',
                18: 'Brannstasjon (liten)',
                19: 'Politistasjon (liten)',
                20: 'Ambulansestasjon (liten)',
                21: 'Legevakt',
                25: 'Brannheliport',
            },
            vehicleTypes: {
                0: 'Mannskapsbil',
                1: 'Lett mannskapsbil',
                2: 'Stigebil',
                3: 'Innsatslederbil',
                4: 'Tungredningsbil',
                5: 'Ambulanse',
                6: 'Tankbil',
                7: 'CBRNe enhet',
                8: 'Patruljebil',
                9: 'Luftambulanse',
                10: 'Snorkelbil',
                11: 'Politihelikopter',
                12: 'Pansret kjøretøy',
                13: 'Hundepatrulje',
                14: 'Politimotorsykkel',
                15: 'Delta kjøretøy',
                16: 'Røykdykkerbil',
                17: 'Innsatsstøttebil',
                18: 'Redningsbil',
                19: 'Dykkerbil',
                20: 'Lett redningsbåt',
                21: 'Branntankbil',
                22: 'Utrykningspolitibil',
                23: 'Utrykningsenhetbil',
                24: 'Legebil',
                25: 'Innsatslederbil helse',
                26: 'Akuttbil',
                27: 'Ambulansemotorsykkel',
                28: 'Syketransport',
                29: 'First responder bil',
                30: 'Akutthjelper',
                31: 'Intensivambulanse',
                32: 'Akuttbil',
                33: 'Skogbrannhelikopter',
                34: 'ATV',
                35: 'Skum Tankbil',
                36: 'Tilhengerpumpe',
                37: 'Slangebil',
                38: 'Slangebil med pumpe',
                39: 'Slangetilhenger',
            },
        },
    };

    I18n.translations.it_IT.lssm.renameFz = {
        name: 'Rinominare i veicoli',
        rename: 'rinominare',
        id: '{id} Id del veicolo',
        old: '{old} Nome corrente',
        vehicleType: '{vehicleType} Tipo di veicolo',
        stationName: "{stationName} Nome dell'edificio",
        tagging: '{tagging} Marcatura del tipo di veicolo',
        number: '{number} Tipo di contatore',
        numberRoman: '{numberRoman} Contatore di tipo (numeri romani)',
        dispatch: '{dispatch} Nome del Dispatchcenter',
        dispatchAlias: '{dispatchAlias} Alias di Dispatchcenter',
        stationAlias: '{stationAlias} Edificio-Alias',
        saveAll: 'salva tutti',
        statusWaiting: 'Attendere l input',
        statusError:
            '<b>Errore durante la generazione!</b> Se questo errore si verifica di nuovo, si prega di segnalarlo. Si prega di fornire le seguenti informazioni:',
        statusWorking:
            'Generare nomi e moduli. Questo può richiedere un certo tempo, a seconda del sistema e del numero di veicoli.',
        statusSuccess: 'Nomi e Forumlare generati con successo!',
        nameAlreadyCorrect: 'Il nome corrisponde già al modello!',
        nameToLong: 'Il nome è troppo lungo per i seguenti veicoli:',
        nameToLongOriginalName: 'Nome originale',
        nameToLongGeneratedName: 'Nome Generato',
        nameToLongShortenedName: 'Nome nuovo / abbreviato',
        helpTitle: 'Potete trovare una piccola istruzione sotto questo link: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Avvio del contatore',
        counterOverride:
            'Se ci sono più veicoli dello stesso tipo, iniziare comunque con 1.',
        startNumHelp:
            'Qui è possibile immettere un valore iniziale per il contatore di tipo. Se si imposta 0 come valore iniziale, il primo veicolo di un tipo non otterrà la numerazione, questo è molto pratico se si ha un solo veicolo di un tipo su una guardia e non si desidera numerarlo. Ma si può anche avviare il contatore a 5 (per qualsiasi motivo si desidera, ma è possibile ;) ).',
        toggleNameCorrect: 'Mostra/Nascondi Veicoli con i nomi corretti',
        settings: {
            show: 'Mostra/Nascondi',
            names: {
                vehicleTypes: 'Tipi di veicoli',
                stations: 'Edificio alias',
            },
            descriptions: {
                vehicleTypes:
                    'Qui è possibile impostare nomi alternativi per ogni tipo di veicolo. È possibile utilizzarli per rinominare i veicoli tramite il centro di spedizione.',
                stations:
                    'Qui è possibile impostare nomi alternativi per ogni edificio. È possibile utilizzarli per rinominare i veicoli tramite il centro di spedizione.',
            },
            validStationTypes: {
                0: 'Caserma dei vigili del fuoco',
                2: 'Stazione ambulanze',
                5: 'Base elisoccorso',
                6: 'Stazione di polizia',
                7: 'Centrale operativa',
                13: 'Elibase polizia',
                15: 'Caserma soccorso acquatico VVF',
                18: 'Caserma dei vigili del fuoco (piccola)',
                19: 'Stazione di polizia (stazione piccola)',
                20: 'Stazione ambulanze (stazione piccola)',
                21: 'Caserma della Finanza',
                24: 'Base Aerea Antincendio',
            },
            vehicleTypes: {
                0: 'ABP',
                1: 'AS',
                2: 'AV/FNZ',
                3: 'CA/POLI',
                4: 'Ambulanza BLSA',
                5: 'KILO',
                6: 'AF/NBCR',
                7: 'Volante',
                8: 'Elisoccorso',
                9: 'APS',
                10: 'AF/ARIA',
                11: 'UCL',
                12: 'Autogrù',
                13: 'Elicottero della Polizia',
                14: 'Furgone Antisommossa',
                15: 'Unità cinofila antidroga',
                16: 'Moto della Polizia',
                17: 'UOPI Suv',
                18: 'VLV',
                19: 'MSA',
                20: 'Ambulanza Ordinaria',
                21: 'Volante Finanza',
                22: 'Furgone artificieri',
                23: 'Camion NSSA',
                24: 'Pickup SAF',
                25: 'Barca',
                26: 'AF/BUS',
                27: 'DTS',
                28: 'Pickup con Modulo Boschivo',
                29: 'Autocarro AIB - AF/BOS',
                30: 'Autobotte AIB',
                31: 'Funzionario AIB - DOS',
                32: 'Camion con Rimorchio',
                33: 'Scavatore su Rimorchio',
                34: 'Elicottero Antincendio',
                35: 'Canadair',
                36: 'P.M.A.',
                37: 'ACT/SCHIUMA',
            },
        },
    };

    I18n.translations.fr_FR.lssm.renameFz = {
        name: 'Renommer les véhicules',
        rename: 'renommer',
        id: '{id} Identité du véhicule',
        old: '{old} Nom actuel',
        vehicleType: '{vehicleType} Type de véhicule',
        stationName: '{stationName} Nom du bâtiment',
        tagging: '{tagging} Marquage du type de véhicule',
        number: '{number} Compteur de type',
        numberRoman: '{numberRoman} Compteur de caractères (chiffres romains)',
        dispatch: "{dispatch} Nom du centre d'expédition",
        dispatchAlias: "{dispatchAlias} Alias du centre d'expédition",
        stationAlias: '{stationAlias} Bâtiment-Alias',
        saveAll: 'Tout sauvegarder',
        statusWaiting: "Attendre l'entrée",
        statusError:
            '<b>Erreur pendant la génération!</b> Si cette erreur se reproduit, veuillez le signaler. Veuillez fournir les renseignements suivants :',
        statusWorking:
            'Générer des noms et des formulaires. Cela peut prendre un certain temps, selon le système et le nombre de véhicules.',
        statusSuccess: 'Noms et Forumlare générés avec succès !',
        nameAlreadyCorrect: 'Le nom correspond déjà au modèle !',
        nameToLong: 'Le nom est trop long pour les véhicules suivants :',
        nameToLongOriginalName: "Nom d'origine",
        nameToLongGeneratedName: 'Nom généré',
        nameToLongShortenedName: 'Nom nouveau ou abrégé',
        helpTitle: 'Vous trouverez une petite instruction sous ce lien : ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Démarrage par compteur',
        counterOverride:
            "S'il y a plusieurs véhicules du même type, commencez quand même par 1.",
        startNumHelp:
            "Vous pouvez saisir ici une valeur de départ pour le compteur de type. Si vous mettez 0 comme valeur de départ, le premier véhicule d'un type n'aura pas la numérotation, c'est très pratique si vous n'avez qu'un seul véhicule d'un type sur un garde et que vous ne voulez pas le numéroter. Mais vous pouvez aussi démarrer le compteur à 5 (pour n'importe quelle raison, mais c'est possible ;) ) )",
        toggleNameCorrect:
            'Afficher/masquer les véhicules avec les noms corrects',
        settings: {
            show: 'Afficher/Masquer',
            names: {
                vehicleTypes: 'Types de véhicules',
                stations: "Création d'un alias",
            },
            descriptions: {
                vehicleTypes:
                    'Ici, vous pouvez définir des noms alternatifs pour chaque type de véhicule. Vous pouvez les utiliser pour renommer vos véhicules via le centre de répartition.',
                stations:
                    'Ici, vous pouvez définir des noms alternatifs pour chaque bâtiment. Vous pouvez les utiliser pour renommer vos véhicules via le centre de répartition.',
            },
            validStationTypes: {
                0: 'Centre de secours',
                2: 'Poste ambulancier',
                5: 'Station d’hélicoptère',
                6: 'Poste de police',
                7: 'Centre de Traitement des Appels',
                11: 'Compagnie de CRS',
                13: 'Forces aériennes de la Gendarmerie nationale',
                18: 'Centre de Première Intervention',
                19: 'Commissariat (police)',
                20: 'Poste ambulancier (petit)',
            },
            vehicleTypes: {
                0: 'FPT',
                1: 'FPTL',
                2: 'EPA',
                3: 'VLCG',
                4: 'VSR',
                5: 'ASSU',
                6: 'CCGC',
                7: 'VIRT',
                8: 'Véhicule de patrouille',
                9: 'Dragon',
                10: 'VAR',
                11: 'VPC',
                12: 'FPTSR',
                13: 'VTU',
                14: 'VGRIMP',
                15: 'BEA',
                16: 'VPL',
                17: 'BLS',
                18: 'Choucas',
                19: 'Equipe cynophile',
                20: 'Unité motocycliste',
                21: 'CCFS',
                22: 'CCFM',
                23: 'CCFL',
                24: 'VLHR',
                25: 'VSAV',
                26: 'VL SSSM',
                27: 'VLM',
                28: 'AR',
                29: 'PC DSM',
                30: 'Ambulance Type A',
                31: 'VTP',
                32: 'CCRL',
                33: 'CCRM',
                34: 'CCRSR',
                35: 'FMOGP',
                36: 'CDHR',
                37: 'FDGP',
                38: 'MPR',
                39: 'VR',
                40: 'VCT',
                41: 'RAM',
                42: 'VTP',
                43: 'ELE',
                44: 'ReBP',
                45: 'VAT',
            },
        },
    };

    I18n.translations.pt_PT.lssm.renameFz = {
        name: 'Renomear veículos',
        rename: 'mudar de nome',
        id: '{id} Id do veículo',
        old: '{old} Nome atual',
        vehicleType: '{vehicleType} Tipo de veículo',
        stationName: '{stationName} Nome do edifício',
        tagging: '{tagging} Marcação do tipo de veículo',
        number: '{number} Contador de tipo',
        numberRoman: '{numberRoman} Contador de tipo (algarismos romanos)',
        dispatch: '{dispatch} Nome do centro de despacho',
        dispatchAlias: '{dispatchAlias} Pseudónimos do centro de despacho',
        stationAlias: '{stationAlias} Edifício-Alias',
        saveAll: 'Salvar Todos',
        statusWaiting: 'À espera de entrada',
        statusError:
            '<b>Erro durante a geração!</b> Se este erro ocorrer novamente, por favor, informe-o. Por favor, forneça as seguintes informações:',
        statusWorking:
            'Gerar nomes e formas. Isto pode levar algum tempo, dependendo do sistema e do número de veículos.',
        statusSuccess: 'Nomes e Forumlare gerados com sucesso!',
        nameAlreadyCorrect: 'O nome já corresponde ao modelo!',
        nameToLong: 'O nome é demasiado longo para os seguintes veículos:',
        nameToLongOriginalName: 'Nome original',
        nameToLongGeneratedName: 'Nome gerado',
        nameToLongShortenedName: 'Nome novo ou abreviado',
        helpTitle: 'Pode encontrar uma pequena instrução neste link: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Contra-início',
        counterOverride:
            'Se houver vários veículos do mesmo tipo, comece com 1 de qualquer maneira.',
        startNumHelp:
            'Aqui pode introduzir um valor inicial para o contra-tipo. Se definir 0 como o valor de partida, o primeiro veículo de um tipo não obterá a numeração, isto é muito prático se tiver apenas um veículo de um tipo num guarda e não quiser numerar. Mas também pode começar o balcão às 5 (por qualquer razão que queira, mas é possível ;))',
        toggleNameCorrect: 'Mostrar/esconder veículos com nomes corretos',
        settings: {
            show: 'Mostrar / Ocultar',
            names: {
                vehicleTypes: 'Tipos de veículos',
                stations: 'Edifício Alias',
            },
            descriptions: {
                vehicleTypes:
                    'Aquí puede establecer nombres alternativos para cada tipo de vehículo. Puede utilizarlos al cambiar el nombre de sus vehículos a través del centro de envío..',
                stations:
                    'Aquí puede establecer nombres alternativos para cada edificio. Puede utilizarlos al cambiar el nombre de sus vehículos a través del centro de envío.',
            },
            validStationTypes: {
                0: 'Corpo de Bombeiros',
                2: 'Estação de ambulância',
                5: 'Centro de meios aéreos',
                6: 'Esquadra de Polícia',
                7: 'Centro de Comando',
                18: 'Corpo de Bombeiros (Pequeno)',
                19: 'Esquadra de Polícia (Pequena)',
                20: 'Estação de Ambulâncias (Pequena)',
                21: 'Centro de Saúde',
                24: 'Centro de Meios Aéreos Florestais',
            },
            vehicleTypes: {
                0: 'VFCI',
                1: 'VLCI',
                2: 'VE',
                3: 'VCOT',
                4: 'VSAT',
                5: 'ABSC',
                6: 'VTTU',
                7: 'VPMA',
                8: 'CP',
                9: 'Heli INEM',
                10: 'VCOC',
                11: 'VUCI',
                12: 'UEP/UI - CIEXSS',
                13: 'EPRI',
                14: 'VP',
                15: 'UAAR',
                16: 'VSAE',
                17: 'VMER',
                18: 'SIV',
                19: 'Mota INEM',
                20: 'VIC',
                21: 'ERAS',
                22: 'Semi-Reboque',
                23: 'MR',
                24: 'VTTF',
                25: 'HEBL',
                26: 'AVBM',
                27: 'AVBP',
                28: 'VECI',
                29: 'Moto Bomba',
                30: 'VTTP',
            },
        },
    };

    I18n.translations.es_ES.lssm.renameFz = {
        name: 'Renombrar vehículos',
        rename: 'cambiar de nombre',
        id: '{id} Id del Vehículo',
        old: '{old} Nombre actual',
        vehicleType: '{vehicleType} Tipo de vehículo',
        stationName: '{stationName} Nombre del edificio',
        tagging: '{tagging} Marcado del tipo de vehículo',
        number: '{number} Contador de tipos',
        numberRoman: '{numberRoman} Contador de tipos (Roman numerals)',
        dispatch: '{dispatch} Nombre del centro de despacho',
        dispatchAlias: '{dispatchAlias} Alias de Dispatchcenter',
        stationAlias: '{stationAlias} Edificio-Alias',
        saveAll: 'guardar Todo',
        statusWaiting: 'Esperar a la entrada',
        statusError:
            '<b>Error durante la generación!</b> Si este error ocurre de nuevo, por favor repórtelo. Por favor, proporcione la siguiente información:',
        statusWorking:
            'Generar nombres y formularios. Esto puede llevar cierto tiempo, dependiendo del sistema y del número de vehículos.s.',
        statusSuccess: 'Nombres y Forumlare generados con éxito!',
        nameAlreadyCorrect: 'El nombre ya corresponde a la plantilla!',
        nameToLong:
            'El nombre es demasiado largo para los siguientes vehículos:',
        nameToLongOriginalName: 'Nombre original',
        nameToLongGeneratedName: 'Nombre generado',
        nameToLongShortenedName: 'Nombre nuevo o abreviado',
        helpTitle: 'Puede encontrar una pequeña instrucción en este enlace: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Inicio de contador',
        counterOverride:
            'Si hay varios vehículos del mismo tipo, comience con 1 de todos modos.',
        startNumHelp:
            'Aquí puede introducir un valor inicial para el tipo de contador. Si establece 0 como valor de inicio, el primer vehículo de un tipo no obtendrá la numeración, esto es muy práctico si sólo tiene un vehículo de un tipo en un resguardo y no quiere numerarlo. Pero también puede iniciar el contador a las 5 (por la razón que quiera, pero es posible ;) )',
        toggleNameCorrect: 'Mostrar/ocultar vehículos con nombres correctos',
        settings: {
            show: 'Visualizar/Ocultar',
            names: {
                vehicleTypes: 'Tipos de vehículos',
                stations: 'Edificio alias',
            },
            descriptions: {
                vehicleTypes:
                    'Aquí puede establecer nombres alternativos para cada tipo de vehículo. Puede utilizarlos al cambiar el nombre de sus vehículos a través del centro de envío..',
                stations:
                    'Aquí puede establecer nombres alternativos para cada edificio. Puede utilizarlos al cambiar el nombre de sus vehículos a través del centro de envío.',
            },
            validStationTypes: {
                0: 'Parque de bomberos',
                2: 'Parque de ambulancias',
                5: 'Helipuerto médico',
                6: 'Comisaría de policía',
                7: 'Centralita',
                18: 'Parque de bomberos (pequeño)',
                19: 'Comisaría de policía (pequeño)',
                20: 'Parque de ambulancias (pequeño)',
            },
            vehicleTypes: {
                0: 'Camión BUP',
                1: 'Camión BUL',
                2: 'Camión AE',
                3: 'Vehículo UMC',
                4: 'FUV',
                5: 'Ambulancia',
                6: 'Camión BNP',
                7: 'Camión TPP',
                8: 'Coche patrulla',
                9: 'HEMS',
                10: 'Vehículo aéreo',
                11: 'Vehículo de mando móvil',
                12: 'Vehículo de rescate',
                13: 'Helicóptero de Policía',
                14: 'Unidad Antidisturbios',
                15: 'Unidad GEO',
                16: 'Unidad Canina',
                17: 'Moto de Policía',
                18: 'VIR',
                19: 'Unidad logística de AMV',
                20: 'Médico de cabecera',
                21: 'Motocicleta de intervención rápida',
                22: 'Ambulancia SVB',
                23: 'Vehículo de extinción por espuma',
                24: 'Remolque con bomba accionada por motor',
            },
        },
    };

    I18n.translations.ko_KR.lssm.renameFz = {
        name: '차량 이름 바꾸기',
        rename: '이름 바꾸기',
        id: '{id} 차량의 ID',
        old: '{old} 현재 이름',
        vehicleType: '{vehicleType} 차량 종류',
        stationName: '{stationName} 건물의 이름',
        tagging: '{tagging} 차량 유형의 표시',
        number: '{number} 타입 카운터',
        numberRoman: '{numberRoman} 타입 카운터 (로마 숫자)',
        dispatch: '{dispatch} 파견 센터 이름',
        dispatchAlias: '{dispatchAlias} 파견 센터의 별명',
        stationAlias: '{stationAlias} 건물-앨리 아',
        saveAll: '모두 저장',
        statusWaiting: '입력을 기다립니다',
        statusError:
            '<b>생성 중 오류가 발생했습니다!</b> 이 오류가 다시 발생하면보고하십시오. 다음 정보를 제공하십시오 :',
        statusWorking:
            '이름과 양식을 생성하십시오. 시스템과 차량 수에 따라 일정 시간이 걸릴 수 있습니다.',
        statusSuccess: '이름과 양식이 성공적으로 생성되었습니다!',
        nameAlreadyCorrect: '이름은 이미 템플릿에 해당합니다!',
        nameToLong: '다음 차량에는 이름이 너무 깁니다.',
        nameToLongOriginalName: '원래 이름',
        nameToLongGeneratedName: '생성 된 이름',
        nameToLongShortenedName: '새로운 / 축소 된 이름',
        helpTitle: '이 링크에서 작은 지침을 찾을 수 있습니다. ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: '카운터 시작',
        counterOverride:
            '같은 종류의 차량이 여러 대 있다면 어쨌든 1부터 시작하십시오.',
        startNumHelp:
            '여기에서 유형 카운터의 시작 값을 입력 할 수 있습니다. 0을 시작 값으로 설정하면 유형의 첫 번째 차량에 번호가 부여되지 않습니다. 가드에 유형의 차량이 하나만 있고 번호를 지정하지 않으려는 경우 매우 실용적입니다. 그러나 카운터를 5에서 시작할 수도 있습니다 (원하는 이유는 가능하지만 가능합니다).',
        toggleNameCorrect: '올바른 이름의 차량 표시 / 숨기기',
        settings: {
            show: '표시 / 숨기기',
            names: {
                vehicleTypes: '차량 종류',
                stations: '건물 별명',
            },
            descriptions: {
                vehicleTypes:
                    '여기서 각 차량 유형에 대한 대체 이름을 설정할 수 있습니다. 디스패치 센터를 통해 차량 이름을 바꿀 때 사용할 수 있습니다.',
                stations:
                    '여기서 각 건물의 대체 이름을 설정할 수 있습니다. 디스패치 센터를 통해 차량 이름을 바꿀 때 사용할 수 있습니다.',
            },
            validStationTypes: {
                0: '소방서',
                2: '응급실',
                5: '구급 헬리콥터 스테이션',
                6: '경찰서',
                7: '지휘센터',
                18: '>소방서(소형)',
                19: '경찰서(소형 관할서)',
                20: '응급실(소형 관할서)',
            },
            vehicleTypes: {
                0: '구조사다리',
                1: '전술 대응 차량(TRV)',
                2: '고가 사다리(TL)',
                3: '지휘차',
                4: '구조공작차(MRU)',
                5: '구급차',
                6: '물탱크차',
                7: '생화학 인명구조차',
                8: '사고 대응차량(IRV)',
                9: '구급 헬리콥터',
                10: '이동식 호흡 장비',
                11: '구조 공작차',
                12: '사다리차',
                13: '긴급 이송차',
                14: '구급 지휘차',
                15: '일반의',
                16: '긴급 이송용 오토바이',
                17: '기본 인명 지원(BLS) 구급차',
            },
        },
    };

    I18n.translations.ro_RO.lssm.renameFz = {
        name: 'Redenumirea vehiculelor',
        rename: 'Redenumiţi',
        id: '{id} Id-ul vehiculului',
        old: '{old} Nume curent',
        vehicleType: '{vehicleType} Tipul vehiculului',
        stationName: '{stationName} Denumirea clădirii',
        tagging: '{tagging} Marcarea tipului de vehicul',
        number: '{number} Contor de tip',
        numberRoman: '{numberRoman} Contor de tip (cifre romane)',
        dispatch: '{dispatch} Numele Centrului de expediere',
        dispatchAlias: '{dispatchAlias} Alias de Centrul de expediere',
        stationAlias: '{stationAlias} Clădire-Alias',
        saveAll: 'salvare toate',
        statusWaiting: 'Așteptați intrarea',
        statusError:
            '<b>Eroare în timpul generației!</b> Dacă această eroare apare din nou, vă rugăm să-l raportați. Vă rugăm să furnizați următoarele informații:',
        statusWorking:
            'Generați nume și formulare. Acest lucru poate dura o anumită perioadă de timp, în funcție de sistem și numărul de vehicule.',
        statusSuccess: 'Nume și formulare generate cu succes!',
        nameAlreadyCorrect: 'Numele corespunde deja șablonului!',
        nameToLong: 'Numele este prea lung pentru următoarele vehicule:',
        nameToLongOriginalName: 'Nume original',
        nameToLongGeneratedName: 'Nume generat',
        nameToLongShortenedName: 'Nume nou/scurtat',
        helpTitle: 'Puteți găsi o mică instrucțiune sub acest link: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Pornire contor',
        counterOverride:
            'Dacă există mai multe vehicule de același tip, începe cu 1 oricum.',
        startNumHelp:
            'Aici aveți posibilitatea să introduceți o valoare de început pentru contorul de tip. Dacă setați 0 ca valoare de pornire, primul vehicul de un tip nu va primi numerotare, acest lucru este foarte practic, dacă aveți doar un singur vehicul de un tip pe o apărătoare și nu doriți să-l numerotare. Dar puteți începe, de asemenea, contra la 5 (indiferent de motiv pe care doriți, dar este posibil ;))',
        toggleNameCorrect: 'Afișați/Ascundeți vehiculele cu numele corecte',
        settings: {
            show: 'Afișare/Ascundere',
            names: {
                vehicleTypes: 'tipuri de vehicule',
                stations: 'Alias de construcție',
            },
            descriptions: {
                vehicleTypes:
                    'Aici aveți posibilitatea să setați nume alternative pentru fiecare tip de vehicul. Le puteți utiliza atunci când vă redenumiți vehiculele prin intermediul centrului de expediere.',
                stations:
                    'Aici aveți posibilitatea să setați nume alternative pentru fiecare clădire. Le puteți utiliza atunci când vă redenumiți vehiculele prin intermediul centrului de expediere.',
            },
            validStationTypes: {
                0: 'Stație de pompieri',
                2: 'Stație de ambulanță',
                5: 'Stație de elicopter medical',
                6: 'Secție de poliție',
                7: 'Dispecerat',
                18: 'Stație de pompieri (mică)',
                19: 'Secție de poliţie (secție mică)',
                20: 'Stație de ambulanță (stație mică)',
            },
            vehicleTypes: {
                0: 'Pompă de incendiu tip 1',
                1: 'Pompă de incendiu tip 2',
                2: 'Camion cu platformă',
                3: 'Unitate șef batalion',
                4: 'Vehicul greu de salvare',
                5: 'Ambulanță ALS',
                6: 'Cisternă de apă',
                7: 'Materiale periculoase',
                8: 'Mașină de patrulare',
                9: 'Elicopter SMURD',
                10: 'Mașină de suport logistic',
                11: 'Mașină de comanda și control',
                12: 'Mașină de intervenții accidente colective',
                13: 'Platforma Autoutilitara',
                14: 'Vehicul EMS netransportant',
                15: 'Unitate transport Supervizor',
                16: 'Medic generalist',
                17: 'Motocicletă-ambulanță',
                18: 'Ambulanță tip B (BLS)',
            },
        },
    };

    I18n.translations.nl_NL.lssm.renameFz = {
        name: 'Voertuigen herbenoemen',
        rename: 'Naam aanpassen',
        id: '{id} Voertuignaam ',
        old: '{old} Oude naam',
        vehicleType: '{vehicleType} Voertuigtype',
        stationName: '{stationName} Gebouwnaam',
        tagging: '{tagging} Markering van het voertuigtype',
        number: '{number} typeteller',
        numberRoman: '{numberRoman} typeteller (Romeinse cijfers)',
        dispatch: '{dispatch} meldkamernaam',
        dispatchAlias: '{dispatchAlias} Alias de meldkamer',
        stationAlias: '{stationAlias} Gebouw-Alias',
        saveAll: ' Alles opslaan',
        statusWaiting: 'Wachten op invoer',
        statusError:
            '<b>Error tijdens generatie!</b> Als deze fout zich opnieuw voordoet, gelieve dit te melden. Gelieve de volgende informatie te verstrekken:',
        statusWorking:
            'Genereer namen en vormen. Afhankelijk van het systeem en het aantal voertuigen kan dit enige tijd in beslag nemen.',
        statusSuccess: 'Namen en Forumlare succesvol gegenereerd!',
        nameAlreadyCorrect: 'Naam komt al overeen met het sjabloon',
        nameToLong: 'De naam is te lang voor de volgende voertuigen:',
        nameToLongOriginalName: 'Oorspronkelijke naam',
        nameToLongGeneratedName: 'Gegenereerde naam',
        nameToLongShortenedName: 'Nieuw/verkorte naam',
        helpTitle: 'Een kleine instructie vindt u onder deze link: ',
        helpLink: 'https://github.com/LSS-Manager/lss-manager-v3/wiki/RenameFZ',
        startNum: 'Begin van de balie',
        counterOverride:
            'Als er meerdere voertuigen van hetzelfde type zijn, begin dan toch al met 1.',
        startNumHelp:
            'Hier kunt u een startwaarde voor de typeteller invoeren. Als je 0 als startwaarde instelt, krijgt het eerste voertuig van een type niet de nummering, dit is erg praktisch, als je maar één voertuig van een type op een horloge hebt, en je wilt het niet nummeren. Maar je kunt ook beginnen met de teller op 5 (om wat voor reden dan ook, maar het is mogelijk ;) )',
        toggleNameCorrect: 'Toon/verberg voertuigen met overeenkomstige naam',
        settings: {
            show: 'Verberg/Toon',
            names: {
                vehicleTypes: 'Alternatieve voertuigtype-namen',
                stations: 'Alternatieve geboude namen',
            },
            descriptions: {
                vehicleTypes:
                    'Hier kunt u alternatieve namen instellen voor elk voertuigtype. U kunt ze gebruiken bij het hernoemen van uw voertuigen via dispatch center.',
                stations:
                    'Hier kunt u alternatieve namen instellen voor elk geboude. U kunt ze gebruiken bij het hernoemen van uw voertuigen via dispatch center.',
            },
            validStationTypes: {
                0: 'Brandweer, Kazerne',
                1: 'Meldkamer',
                3: 'Ambulance, standplaats',
                5: 'Politie, Opkomstbureau',
                6: 'MMT Standplaats',
                9: 'Politiehelikopter standplaats',
                11: 'Politie, Hoofdbureau',
                13: 'Ambulance, VWS-post',
                14: 'Groot gebouwencomplex',
                15: 'Klein gebouwencomplex',
                16: 'Waterreddingspost',
                17: 'Brandweer, Kazerne (klein)',
            },
            vehicleTypes: {
                0: 'SI-2',
                1: 'TS 8/9',
                2: 'AL',
                3: 'DA-OVD',
                4: 'HV',
                5: 'AB',
                6: 'TST 8/9',
                7: 'TST 6/7',
                8: 'TST 4/5',
                9: 'TS 4/5',
                10: 'SL',
                11: 'DB-VEB',
                12: 'TST-NB 8/9',
                13: 'TS8 (4x4)',
                14: 'TST-NB 6/7',
                15: 'TST-NB 4/5',
                16: 'Ambulance',
                17: 'TS 6/7',
                18: 'HW',
                19: 'DA-HOD',
                20: 'DA',
                21: 'DB-K',
                22: 'DA Noodhulp',
                23: 'Lifeliner',
                24: 'DA-AGS',
                25: 'DB Noodhulp',
                26: 'HA',
                27: 'ABH',
                28: 'Politiehelikopter',
                29: 'WTH',
                30: 'Zorgambulance',
                31: 'CO',
                32: 'COH',
                33: 'WO',
                34: 'WT',
                35: 'OVD-P',
                36: 'WOA',
                37: 'MMT-Auto',
                38: 'OvD-G',
                39: 'ME Commandovoertuig',
                40: 'ME Flexbus',
                41: 'CT (8x8)',
                42: 'CT (6x6)',
                43: 'CT (4x4)',
                44: 'AFO/OSC',
                45: 'DPH',
                46: 'DM Noodhulp',
                47: 'DA Hondengeleider',
                48: 'DB Hondengeleider',
                49: 'PM-OR',
                50: 'TS-OR',
                51: 'HVH',
                52: 'RR',
                53: 'AT-C',
                54: 'AT-O',
                55: 'AT-M',
                56: 'DA-VL',
                57: 'DA OVDG-RR',
                58: 'DB-AV',
                59: 'NH-O',
                60: 'DB-Bike',
                61: 'SLH',
                62: 'TS-HV',
                63: 'DM-RR',
                64: 'ME-AE',
                65: 'DAT-RB',
                66: 'KHV',
                67: 'BA-RB',
                68: 'SB',
                69: 'SBH',
                70: 'SBA',
                71: 'MSA',
                72: 'DPA',
            },
        },
    };

    function setSettings() {
        let managedSettings = {
            id: LSS_RENAMEFZ_STORAGE,
            title: I18n.t('lssm.renameFz.name'),
            settings: {
                renameFzVehicleShowHideButton: {
                    name: I18n.t('lssm.renameFz.settings.names.vehicleTypes'),
                    id: 'renameFzVehicleShowHideButton',
                    info_text: I18n.t(
                        'lssm.renameFz.settings.descriptions.vehicleTypes'
                    ),
                    ui: {
                        label: `${I18n.t(
                            'lssm.renameFz.settings.names.vehicleTypes'
                        )}&nbsp${I18n.t('lssm.renameFz.settings.show')}`,
                        type: 'button',
                        custom_function_event: 'click',
                        custom_function: function () {
                            $(
                                `[id^=${LSS_RENAMEFZ_STORAGE}_renameFz_vehicleTypes-].lssm_setting_line`
                            ).toggle();
                        },
                    },
                },
            },
        };

        let defaultTypeShortings = I18n.t(
            'lssm.renameFz.settings.vehicleTypes'
        );

        $.each(defaultTypeShortings, function (key, val) {
            let tmpObject = {
                ['renameFz_vehicleTypes-' + key]: {
                    default: val,
                    ui: {
                        label: `${I18n.t(
                            `lssm.renameFz.settings.vehicleTypes.${key}`
                        )}:&nbsp;`,
                        type: 'text',
                        description: '',
                        hidden: true,
                    },
                },
            };

            $.extend(managedSettings.settings, tmpObject);
        });

        $.extend(managedSettings.settings, {
            renameFzStationsShowHideButton: {
                name: I18n.t('lssm.renameFz.settings.names.stations'),
                id: 'renameFzStationsShowHideButton',
                info_text: I18n.t(
                    'lssm.renameFz.settings.descriptions.stations'
                ),
                ui: {
                    label: `${I18n.t(
                        'lssm.renameFz.settings.names.stations'
                    )}&nbsp${I18n.t('lssm.renameFz.settings.show')}`,
                    type: 'button',
                    custom_function_event: 'click',
                    custom_function: function () {
                        $(
                            `[id^=${LSS_RENAMEFZ_STORAGE}_renameFz_stations-].lssm_setting_line`
                        ).toggle();
                    },
                },
            },
        });

        let buildings = lssm.buildings;
        buildings.sort((a, b) =>
            a.caption > b.caption ? 1 : b.caption > a.caption ? -1 : 0
        );
        $.each(lssm.buildings, function (key, station) {
            if (
                I18n.t('lssm.renameFz.settings.validStationTypes')[
                    station.building_type
                ]
            ) {
                let tmpObject = {
                    ['renameFz_stations-' + station.id]: {
                        default: station.caption,
                        ui: {
                            label: `${station.caption} (${
                                I18n.t(
                                    'lssm.renameFz.settings.validStationTypes'
                                )[station.building_type]
                            }:&nbsp;`,
                            type: 'text',
                            description: '',
                            hidden: true,
                        },
                    },
                };
                $.extend(managedSettings.settings, tmpObject);
            }
        });

        lssm.managedSettings.register(managedSettings);
    }

    setSettings();

    if (
        document.querySelector('img.online_icon') ||
        document.querySelector('.aao')
    )
        return;

    let vehiclesTypesByBuilding = {};
    let buildings = {};

    let set = {
        rename: false,
        options: {
            id: '',
            old: '',
            vehicleType: '',
            tagging: '',
            stationName: '',
            stationAlias: '',
            number: '',
            numberRoman: '',
            dispatch: '',
            dispatchAlias: '',
        },
        vehicles: {},
        str: {
            default: '{old}',
            str: '',
        },
    };
    const prefix = `${lssm.config.prefix}_renameFzSettings`;
    $('#tab_vehicle').on('DOMNodeInserted', 'script', createSettings);
    if ('#vehicle_table') createSettings();

    let executionFailed = false;
    const mode = $('#tab_vehicle')[0] ? 'leitstelle' : 'wache';

    function printError(err) {
        $(`#${prefix}_status`).html(
            `Status: ${I18n.t('lssm.renameFz.statusError')}<br><b>${
                err.name
            }</b><br><i>${err.message}</i><pre>${err.stack}</pre>`
        );
        executionFailed = true;
    }

    function arabicToRoman(arabicNumber) {
        try {
            let roman = [
                'M',
                'CM',
                'D',
                'CD',
                'C',
                'XC',
                'L',
                'XL',
                'X',
                'IX',
                'V',
                'IV',
                'I',
            ];
            let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
            arabicNumber = parseInt(arabicNumber);
            let romanNumber = '';

            if (isNaN(arabicNumber) || arabicNumber <= 0) {
                return '0';
            }

            for (let Nr = 0; Nr < arabic.length; Nr++)
                while (arabicNumber >= arabic[Nr]) {
                    romanNumber += roman[Nr];
                    arabicNumber -= arabic[Nr];
                }

            return romanNumber;
        } catch (err) {
            printError(err);
        }
    }

    function getVehicleNumberAtStation(vehicleID) {
        try {
            let vehicle = lssm.vehicles[vehicleID];
            let typeAtStation =
                vehiclesTypesByBuilding[vehicle.building][vehicle.type];
            let startNum = parseInt($(`#${prefix}_startNum`).val());
            return (
                typeAtStation.indexOf(vehicleID) +
                startNum +
                (startNum === 0 &&
                $('#lssm-inline-counterOverride').prop('checked') &&
                typeAtStation.length > 1
                    ? 1
                    : 0)
            );
        } catch (err) {
            printError(err);
        }
    }

    function rename() {
        try {
            localStorage[`${prefix}_input`] = JSON.stringify({
                str: set.str.str,
                counter: $(`#${prefix}_startNum`).val(),
                counterOverride: $('#lssm-inline-counterOverride').prop(
                    'checked'
                ),
            });
            let vehicles = $('#vehicle_table tbody tr:visible');
            let vehiclesNum = vehicles.length;
            let status = $(`#${prefix}_status`);
            status.html(
                `Status: ${I18n.t(
                    'lssm.renameFz.statusWorking'
                )} (0/${vehiclesNum})`
            );
            indexVehicles();
            indexBuildings();
            $(`.${prefix}_name_correct`).remove();
            $(`#${prefix}_nameToLongDiv`).hide();
            set.vehicles = {};
            let vars = set.str.str.match(/{.+?}/g);
            let usedOptions = [];
            let needType = false;
            let needTagging = false;
            let needStationAlias = false;
            let needDispatchAlias = false;
            let needNumber = false;
            let needNumberRoman = false;
            set.options.dispatch =
                mode === 'leitstelle'
                    ? $('h1').text()
                    : $(
                          '.btn-group.pull-right:first-of-type .btn:nth-of-type(2)'
                      ).text();
            let settings = lssm.settings.get(LSS_RENAMEFZ_STORAGE, {});
            for (let variable in vars) {
                variable = vars[variable].replace(/[{}]/g, '');
                if (set.options.hasOwnProperty(variable)) {
                    usedOptions.push(variable);
                }
            }
            if (usedOptions.indexOf('vehicleType') !== -1) {
                needType = true;
            }
            if (usedOptions.indexOf('tagging') !== -1) {
                needType = true;
                needTagging = true;
            }
            if (usedOptions.indexOf('stationAlias') !== -1) {
                needStationAlias = true;
            }
            if (usedOptions.indexOf('dispatchAlias') !== -1) {
                needDispatchAlias = true;
            }
            if (usedOptions.indexOf('number') !== -1) {
                needNumber = true;
            }
            if (usedOptions.indexOf('numberRoman') !== -1) {
                needNumber = true;
                needNumberRoman = true;
            }
            let numNewNames = 0;
            for (let i = 0; i < vehiclesNum; i++) {
                status.html(
                    `Status: ${I18n.t('lssm.renameFz.statusWorking')} (${
                        i + 1
                    }/${vehiclesNum})`
                );
                let vehicleRow = $(vehicles[i]);
                let vehicleCaption =
                    mode === 'leitstelle'
                        ? vehicleRow.find('[id^=vehicle_caption_]')
                        : vehicleRow.find('td[sortvalue]');
                let vehicleID =
                    mode === 'leitstelle'
                        ? vehicleCaption.attr('id').replace(/\D/g, '')
                        : vehicleCaption
                              .find('a')
                              .attr('href')
                              .replace(/\D/g, '');
                if (
                    mode === 'wache' &&
                    !$(`#vehicle_form_holder_${vehicleID}`)[0]
                )
                    vehicleCaption.append(
                        `<div id="vehicle_form_holder_${vehicleID}"></div>`
                    ) &&
                        vehicleCaption
                            .find('a')
                            .attr('id', `vehicle_link_${vehicleID}`);
                let vehicle = lssm.vehicles[vehicleID];
                let building = buildings[vehicle.building];
                set.vehicles[vehicleID] = {};
                set.vehicles[vehicleID].dispatch = set.options.dispatch;
                set.vehicles[vehicleID].id = vehicleID;
                set.vehicles[vehicleID].old = vehicle.name;
                set.vehicles[vehicleID].stationName = building.caption;
                if (needType) {
                    set.vehicles[vehicleID].vehicleType =
                        lssm.carsById[vehicle.type][0];
                }
                if (needTagging) {
                    set.vehicles[vehicleID].tagging =
                        settings[`renameFz_vehicleTypes-${vehicle.type}`] ||
                        set.vehicles[vehicleID].vehicleType;
                }
                if (needStationAlias) {
                    set.vehicles[vehicleID].stationAlias =
                        settings[`renameFz_stations-${vehicle.building}`];
                }
                if (needDispatchAlias) {
                    set.vehicles[vehicleID].dispatchAlias =
                        settings[
                            `renameFz_stations-${(mode === 'leitstelle'
                                ? window.location.href
                                : $(
                                      '.btn-group.pull-right:first-of-type .btn:nth-of-type(2)'
                                  ).attr('href')
                            ).replace(/\D/g, '')}`
                        ];
                }
                if (needNumber) {
                    set.vehicles[vehicleID].number =
                        getVehicleNumberAtStation(vehicleID) || '';
                }
                if (needNumberRoman) {
                    set.vehicles[vehicleID].numberRoman = arabicToRoman(
                        set.vehicles[vehicleID].number || 0
                    );
                    set.vehicles[vehicleID].numberRoman =
                        set.vehicles[vehicleID].numberRoman === '0'
                            ? ''
                            : set.vehicles[vehicleID].numberRoman;
                }
                set.vehicles[vehicleID].newName = set.str.str.replace(
                    /{(.*?)}/g,
                    (match, p1) =>
                        typeof set.vehicles[vehicleID][p1] !== void 0
                            ? set.vehicles[vehicleID][p1]
                            : match
                );
                set.vehicles[vehicleID].newName =
                    set.vehicles[vehicleID].newName.trim();
                if (
                    set.vehicles[vehicleID].newName ===
                    set.vehicles[vehicleID].old
                ) {
                    vehicleCaption.append(
                        `<span class="${prefix}_name_correct"><br>${I18n.t(
                            'lssm.renameFz.nameAlreadyCorrect'
                        )}</span>`
                    );
                    $(`#vehicle_form_holder_${vehicleID}`).empty().hide();
                    if (i + 1 === vehiclesNum && executionFailed !== true) {
                        status.html(
                            'Status: ' + I18n.t('lssm.renameFz.statusSuccess')
                        );
                    }
                } else {
                    numNewNames++;
                    window.setTimeout(function () {
                        applyNewName(vehicleID, i + 1 === vehiclesNum);
                    }, numNewNames * 100);
                }
            }
        } catch (e) {
            printError(e);
        }
    }

    function applyNewName(vehicleID, last = false) {
        if (set.vehicles[vehicleID].newName.length > 150) {
            $(`#${prefix}_nameToLongDiv`).show();
            $(`#${prefix}_nameToLongTableBody`).append(
                '<tr><td>' +
                    set.vehicles[vehicleID].old +
                    '</td><td>' +
                    set.vehicles[vehicleID].newName +
                    '</td><td>' +
                    set.vehicles[vehicleID].newName.substr(0, 150) +
                    '</td></tr>'
            );
        }
        if (!$(`#vehicle_new_name_${vehicleID}`)[0]) {
            $(`#vehicle_form_holder_${vehicleID}`)
                .show()
                .html(I18n.t('common.loading'));

            $.ajax({
                url: `/vehicles/${vehicleID}/editName`,
                headers: {
                    'X-LSS-Manager': lssm.headerVersion(),
                },
                success: function (data) {
                    $(`#vehicle_form_holder_${vehicleID}`).html(data);
                    $(`#vehicle_new_name_${vehicleID}`).val(
                        set.vehicles[vehicleID].newName.substr(0, 150)
                    );
                    if (last && executionFailed !== true) {
                        $(`#${prefix}_status`).html(
                            `Status: ${I18n.t('lssm.renameFz.statusSuccess')}`
                        );
                    }
                },
                error: function (error) {
                    $(`#vehicle_form_holder_${vehicleID}`).html('error');
                    printError(error);
                },
            });
        } else {
            $(`#vehicle_new_name_${vehicleID}`).val(
                set.vehicles[vehicleID].newName.substr(0, 150)
            );
        }
    }

    function indexVehicles() {
        vehiclesTypesByBuilding = {};
        lssm.get_vehicles(false, true);
        for (let vehicleId in lssm.vehicles) {
            let vehicle = lssm.vehicles[vehicleId];
            if (lssm.vehicles.hasOwnProperty(vehicleId)) {
                if (!vehiclesTypesByBuilding.hasOwnProperty(vehicle.building)) {
                    vehiclesTypesByBuilding[vehicle.building] = {};
                }
                if (
                    !vehiclesTypesByBuilding[vehicle.building].hasOwnProperty(
                        vehicle.type
                    )
                ) {
                    vehiclesTypesByBuilding[vehicle.building][vehicle.type] =
                        [];
                }
                vehiclesTypesByBuilding[vehicle.building][vehicle.type].push(
                    vehicleId
                );
            }
        }
    }

    function indexBuildings() {
        buildings = {};
        lssm.get_buildings(false, true);
        for (let building in lssm.buildings) {
            buildings[lssm.buildings[building].id] = lssm.buildings[building];
        }
    }

    function createSettings() {
        if ($(`#${prefix}`).length) return;
        $('#vehicle_table').before(`\
<a id="toggleRename" state="${
            localStorage['lssm_renameFz_visibility'] || 'open'
        }"><i class="glyphicon glyphicon-eye-close"></i></a><br>
<div id="${prefix}">
    <p><strong>${I18n.t(
        'lssm.renameFz.helpTitle'
    )}<a target="_blank" href="${I18n.t('lssm.renameFz.helpLink')}">${I18n.t(
            'lssm.renameFz.helpLink'
        )}</a></strong></p>
    <div id="${prefix}_buttons"></div>
    <div>
        <input class="form-control" id="${prefix}_string" type="text" value=""/>
        &nbsp;${I18n.t('lssm.renameFz.startNum')}
        &nbsp;<span class="glyphicon glyphicon-question-sign helpButton" aria-hidden="true" helpBox="startNum"></span>
        <div class="alert alert-info" id="startNum" style="display: none; position: absolute; z-index=9999">${I18n.t(
            'lssm.renameFz.startNumHelp'
        )}</div> :
        <input id="${prefix}_startNum" type="number" value="1" min="0"/>
        <div>
            <span class="pull-left"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="lssm-inline-counterOverride" value="true" name="onoffswitch" type="checkbox"/><label class="onoffswitch-label" for="lssm-inline-counterOverride"></label></div></span>
            ${I18n.t('lssm.renameFz.counterOverride')}
        </div>
    </div>
    <div>
        <a href="#" class="btn btn-default btn-xs disabled" id="${prefix}_rename">${I18n.t(
            'lssm.renameFz.rename'
        )}</a>
        &nbsp;<span id="${prefix}_status">Status: ${I18n.t(
            'lssm.renameFz.statusWaiting'
        )}</span>
    </div>
    <div class="alert fade in alert-danger" id="${prefix}_nameToLongDiv">
        <button class="close" type="button" id="${prefix}_HideNameToLongDiv">×</button>
        <b>${I18n.t('lssm.renameFz.nameToLong')}</b>
        <table class="table table-striped" role="grid" id="${prefix}_nameToLongTable">
            <thead><tr>
                <th>${I18n.t('lssm.renameFz.nameToLongOriginalName')}</th>
                <th>${I18n.t('lssm.renameFz.nameToLongGeneratedName')}</th>
                <th>${I18n.t('lssm.renameFz.nameToLongShortenedName')}</th>
            </tr></thead>
            <tbody id="${prefix}_nameToLongTableBody"></tbody>
        </table>
    </div>
    <input type="button" class="btn btn-success" id="${prefix}_saveAll" value="${I18n.t(
            'lssm.renameFz.saveAll'
        )}"/>
    <input type="button" class="btn btn-primary" id="${prefix}_toggle_name_correct" mode="hide" value="${I18n.t(
            'lssm.renameFz.toggleNameCorrect'
        )}"/>
</div>`);
        $(`#${prefix}`)[
            (localStorage['lssm_renameFz_visibility'] || 'open') === 'close'
                ? 'hide'
                : 'show'
        ]();
        let buttons = '';
        for (let i in set.options) {
            buttons += `<a href="#" class="btn btn-default btn-xs" data-str="{${i}}">${I18n.t(
                `lssm.renameFz.${i}`
            )}</a>`;
        }
        $(`#${prefix}_buttons`).append(buttons);

        $('.helpButton')
            .on('mouseenter', function () {
                $(`#${$(this).attr('helpBox')}`).show();
            })
            .on('mouseleave', function () {
                $(`#${$(this).attr('helpBox')}`).hide();
            });

        $(`#${prefix}_HideNameToLongDiv`).click(function () {
            $(`#${prefix}_nameToLongDiv`).hide();
            $(`#${prefix}_nameToLongTableBody`).html('');
        });
        $(`#${prefix}_nameToLongDiv`).hide();
        $(`#${prefix}_buttons`).click(function (e) {
            let input = $(`#${prefix}_string`)[0],
                start = input.selectionStart,
                end = input.selectionEnd;
            input.value =
                input.value.substr(0, start) +
                $(e.target).data('str') +
                input.value.substr(end);
            let pos = start + $(e.target).data('str').length;
            input.selectionStart = pos;
            input.selectionEnd = pos;
            changeInput({ target: input });
            input.focus();
            return false;
        });

        function changeInput(e) {
            set.str.str = (e.target && e.target.value.trim()) || e.value.trim();
            $(`#${prefix}_rename`)[
                set.str.str.length > 0 ? 'removeClass' : 'addClass'
            ]('disabled');
        }

        $(`#${prefix}_string`).change(changeInput).on('keyup', changeInput);
        $(`#${prefix}_rename`).click(rename);
        $(`#${prefix}_saveAll`).click(function () {
            for (
                let i = 0;
                i < $('.vehicle_form input.btn.btn-success').length;
                i++
            ) {
                setTimeout(function () {
                    $($('.vehicle_form input.btn.btn-success')[i]).click();
                }, 100 * i);
            }
            $(`.${prefix}_name_correct`).remove();
        });

        $(`#${prefix}_toggle_name_correct`).click(function () {
            let rows = $(`.${prefix}_name_correct`).parent().parent().parent();
            $(this).attr('mode') === 'hide'
                ? rows.hide() && $(this).attr('mode', 'show')
                : rows.show() && $(this).attr('mode', 'hide');
        });

        $('#toggleRename').click(function () {
            let state_new = $(this).attr('state') === 'open' ? 'close' : 'open';
            localStorage['lssm_renameFz_visibility'] = state_new;
            $(`#${prefix}`)[state_new === 'close' ? 'hide' : 'show']();
            $(this).attr('state', state_new);
        });

        let input_saved = localStorage[`${prefix}_input`];

        if (input_saved) {
            input_saved = JSON.parse(input_saved);
            $(`#${prefix}_startNum`).val(input_saved.counter || 1);
            $('#lssm-inline-counterOverride').prop(
                'checked',
                input_saved.counterOverride || 0
            );
            $(`#${prefix}_string`)
                .val(input_saved.str || '')
                .trigger('change');
        }
    }
})(I18n, jQuery);
