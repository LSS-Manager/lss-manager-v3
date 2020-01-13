const LSSM_MH_PREFIX = `missionhelper`;
const lssm_missionhelper_adjustPosition = () => {
    let missionhelper = document.querySelector(`#${LSSM_MH_PREFIX}`);
    missionhelper.style.left = `${document.querySelector('#iframe-inside-container').clientWidth * 0.97 - missionhelper.clientWidth}px`;
};

(I18n => {

    I18n.translations.de.lssm.missionhelper = {
        diy_mission: 'Dieser Einsatz scheint ein selbst erstellter Verbandsgroßeinsatz zu sein.',
        siwa: 'Sicherheitswache',
        vge: 'VerbandsGroßEinsatz',
        patients: 'Patienten',
        prisoners: 'Gefangene',
        water: 'Wasserbedarf',
        to: 'bis zu',
        averageMinimumEmployeesFire: 'Durchschnittlich mindestens benötigte Feuerwehrleute',
        averageMinimumEmployeesPolice: 'Durchschnittlich mindestens benötigte Polizisten/Polizistinnen',
        ambulance_only: 'Dieser Einsatz ist ein reiner Rettungsdienst-Einsatz!',
        title: 'Einsatzhelfer',
        settings: {
            name: {
                label: 'Name',
                description: 'Zeigt den Namen des Einsatzes im Helfer an.'
            },
            id: {
                label: 'ID',
                description: 'Zeigt die ID des Einsatzes im Helfer an.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Zeigt die ID des Einsatz-Typs im Helfer an.'
            },
            poi: {
                label: 'POI',
                description: 'Zeigt im Helfer an, an welchem POI der Einsatz ist.'
            },
            live_patients: {
                label: 'Zahl der Patienten',
                description: 'Zeigt live an, wie viele Patienten der Einsatz aktuell hat.'
            },
            water: {
                label: 'Wasserbedarf',
                description: 'Zeigt die insgesamt benötigte Wassermenge an.'
            },
            vehicles: {
                label: 'Fahrzeuge',
                description: 'Zeigt die benötigten Fahrzeuge an.'
            },
            hide_elw1: {
                label: 'ELW 1 einfach werten',
                description: 'Zieht die Zahl der benötigten ELW 2 von den ELW 1 ab und blendet ELW 1 aus, falls die Anzahl unter 0 sinkt.'
            },
            hide_rw: {
                label: 'Rüstwagen einfach werten',
                description: 'Zieht die Zahl der benötigten LF von den RW ab und blendet RW aus, falls die Anzahl unter 0 sinkt. Diese Funktion ist für Leute gedacht, die ein reines HLF-System fahren.'
            },
            patients: {
                label: 'Patienteninformationen',
                description: 'Zeigt Informationen über (potentielle) Patienten.'
            },
            prisoners: {
                label: 'Gefangeneninformationen',
                description: 'Zeigt Informationen über (potentielle) Gefangene'
            },
            special: {
                label: 'Sonstige Informationen',
                description: 'Zeigt Spezielle Informationen, wie z.B. das durchschnittlich mindestens benötige Personal, an.'
            },
            expansions: {
                label: 'Ausbreitungen',
                description: 'Zeigt, zu was sich der Einsatz ausbreiten kann. (Zeigt nur einfache Ausbreitung)'
            },
            show_100: {
                label: 'Zeige 100% Wahrscheinlichkeit',
                description: 'Zeigt die Wahrscheinlichkeit für ein Fahrzeug auch an, wenn diese 100% beträgt.'
            },
            credits: {
                label: 'Durchschnittlicher Verdienst',
                description: 'Zeigt den durchschnittlichen Verdienst, den man für diesen Einsatz bekommt an.'
            },
            show_siwa: {
                label: 'Anforderungen von Sicherheitswachen',
                description: 'Zeigt die Anforderungen bei Sicherheitswachen auch im Helfer an.'
            },
            mission_time: {
                label: 'Generierungszeit',
                description: 'Zeigt die Zeit der Generierung des Einsatzes an.'
            }
        },
        transport: 'Transport',
        tragehilfe: 'Tragehilfe',
        vehicles: {
            truck: 'Löschfahrzeuge',
            dlk: 'Drehleitern',
            rw: 'Rüstwagen/AB-Rüst',
            elw1: 'ELW 1',
            elw2: 'ELW 2',
            atem: 'GW-Atemschutz',
            oel: 'GW-Öl',
            mess: 'GW-Messtechnik',
            gefahr: 'GW-Gefahrgut',
            gwl2: 'Schlauchwagen',
            dekon: 'Dekon-P',
            fwk: 'Feuerwehrkran',
            hoehen: 'GW-Höhenrettung',
            fustw: 'Funkstreifenwagen',
            boot: 'Boot',
            lebefkw: 'Leichter Befehlskraftwagen',
            fukw: 'Führungskraftwagen',
            grukw: 'Gruppenkraftwagen',
            gefkw: 'Gefangenenkraftwagen',
            wawe: 'Wasserwerfer',
            nef: 'NEF',
            rth: 'RTH',
            lna: 'KdoW-LNA',
            orgl: 'KdoW-OrgL',
            rtw: 'RTW',
            ktw: 'KTW oder RTW',
            lfogkworw: 'LF oder GKW oder RW',
            gkw: 'Gerätekraftwagen',
            mzkw: 'Mehrzweckkraftwagen',
            mtwtz: 'MTW-TZ',
            radlader: 'Radlader (BRmG R) mit LKW K 9',
            anhdle: 'Anhänger Drucklufterzeugung',
            polheli: 'Polizeihubschrauber',
            arff: 'Flugfeldlöschfahrzeug',
            rtf: 'Rettungstreppenfahrzeug',
            taucher: 'Taucher',
            mek: 'MEK-Fahrzeuge',
            sek: 'SEK-Fahrzeuge',
            gwwerk: 'GW-Werkfeuerwehr',
            ulf: 'ULF mit Löscharm',
            tm: 'Teleskopmasten',
            turbo: 'Turbolöscher',
            gwsan: 'GW-San'
        },
        pois: [
            "Park",
            "See",
            "Krankenhaus",
            "Wald",
            "Bushaltestelle",
            "Straßenbahnhaltestelle",
            "Bahnhof (Regionalverkehr)",
            "Bahnhof (Regional und Fernverkehr)",
            "Güterbahnhof",
            "Supermarkt (Klein)",
            "Supermarkt (Goß)",
            "Tankstelle",
            "Schule",
            "Museum",
            "Einkaufszentrum",
            "Auto-Werkstatt",
            "Autobahnauf.- / abfahrt",
            "Weihnachtsmarkt",
            "Lagerhalle",
            "Diskothek",
            "Stadion",
            "Bauernhof",
            "Bürokomplex",
            "Schwimmbad",
            "Bahnübergang",
            "Theater",
            "Festplatz",
            "Fluss",
            "Baumarkt",
            "Flughafen (klein): Start-/Landebahn",
            "Flughafen (klein): Gebäude",
            "Flughafen (klein): Flugzeug Standplatz",
            "Flughafen (groß): Start-/Landebahn",
            "Flughafen (groß): Terminal",
            "Flughafen (groß): Vorfeld / Standplätze",
            "Flughafen (groß): Parkhaus",
            "Biogasanlage",
            "Bank",
            "Kirche",
            "Chemiepark",
            "Industire-Allgemein",
            "Automobilindustrie",
            "Müllverbrennungsanlage",
            "Eishalle"
        ]
    };

    I18n.translations.en.lssm.missionhelper = {
        diy_mission: 'This mission seems to be a large scale alliance mission.',
        siwa: 'Planned mission',
        vge: 'Large scale alliance mission',
        patients: 'Patients',
        prisoners: 'Prisoners',
        water: 'Wasserbedarf',
        to: 'up to',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'This mission is ambulance-only!',
        title: 'Missionhelper',
        transport: 'Transport',
        settings: {
            name: {
                label: 'Name',
                description: 'Shows the name of the mission in the helper.'
            },
            id: {
                label: 'ID',
                description: 'Displays the ID of the mission in the helper.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Displays the ID of the mission type in the helper.'
            },
            poi: {
                label: 'POI',
                description: 'Indicates in the helper which POI the operation is at.'
            },
            live_patients: {
                label: 'Number of patients',
                description: 'Shows live how many patients are currently in use.'
            },
            vehicles: {
                label: 'Vehicles',
                description: 'Displays the required vehicles.'
            },
            patients: {
                label: 'patient information',
                description: 'Shows information about (potential) patients.'
            },
            prisoners: {
                label: 'prisoner information',
                description: 'Shows information about (potential) prisoners.'
            },
            special: {
                label: 'Other information',
                description: 'Displays special information, such as the average minimum number of personnel required.'
            },
            expansions: {
                label: 'distributions',
                description: 'Shows what the bet can spread to. (Shows only simple spread)'
            },
            show_100: {
                label: 'Show 100% probability',
                description: 'Shows the probability for a vehicle even if it is 100%.'
            },
            credits: {
                label: 'Average earnings',
                description: 'Shows the average earnings you get for this assignment.'
            },
            show_siwa: {
                label: 'Requirements of security guards',
                description: 'Shows the requirements for security guards in the helper as well.'
            },
            mission_time: {
                label: 'Creation Time',
                description: 'Shows the date and time when the mission was created.'
            }
        },
        vehicles: {
            truck: "Firetrucks",
            platform: "Platform truck",
            heavyRescue: "Heavy Rescue vehicles or Utility unit",
            boat: "Boat",
            air: "Mobile Air",
            bchief: "Battalion Chief Unit",
            tanker: "Water Tanker",
            hazmat: "HazMat",
            mcv: "Mobile Command Vehicle",
            arff: "ARFF",
            largeFireboat: "Large Fireboat",
            als: "ALS Ambulance",
            bls: "BLS Ambulance",
            fly: "Fly-Car",
            ems: "EMS Rescue",
            mcu: "Mass Casualty Unit",
            largeRescueboat: "Large Rescueboat",
            police: "Police Car",
            k9: "K-9",
            pmotorcycle: "Police Motorcycle",
            swatArmoured: "SWAT Armoured Vehicle",
            swatSuv: "SWAT SUV",
            hems: "HEMS",
            policeHeli: "Police Helicopter",
            emschief: "EMS Chief"
        },
        pois: [
            "Park",
            "Lake",
            "Hospital",
            "Forest",
            "Bus stop",
            "Tram stop",
            "Train station (regional traffic)",
            "Train station (regional traffic and long-distance travel)",
            "Goods station",
            "Supermarket (small)",
            "Supermarket (big)",
            "Gas station",
            "School",
            "Museum",
            "Mall",
            "Car workshop",
            "Highway exit",
            "Christmas market",
            "Storehouse",
            "Discotheque",
            "Stadium",
            "Farm",
            "Office building",
            "Swimming bath",
            "Railroad Crossing",
            "Theater",
            "Fairground",
            "River",
            "Small Airport (Runway)",
            "Large Airport (Runway)",
            "Airport Terminal",
            "Bank",
            "Warehouse",
            "Bridge",
            "Fast Food Restaurant",
            "Cargo Port",
            "Recycling Centre",
            "High rise",
            "Cruise ship dock",
            "Marina",
            "Rail Crossing",
            "Tunnel",
            "Cold Storage Warehouse",
            "Power Plant",
            "Factory",
            "Scrap yard",
            "Subway station",
            "Small chemical storage tank",
            "Large chemical storage tank",
            "Hotel",
            "Bar",
            "Landfill site",
        ]
    };

    I18n.translations.en_GB.lssm.missionhelper = {
        diy_mission: 'This mission seems to be a large scale alliance mission.',
        SWATPersonnel: "Needed Armed Response Personnel",
        settings: {
            name: {
                label: 'Name',
                description: 'Shows the name of the mission in the helper.'
            },
            id: {
                label: 'ID',
                description: 'Displays the ID of the mission in the helper.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Displays the ID of the mission type in the helper.'
            },
            poi: {
                label: 'POI',
                description: 'Indicates in the helper which POI the operation is at.'
            },
            live_patients: {
                label: 'Number of patients',
                description: 'Shows live how many patients are currently in use.'
            },
            vehicles: {
                label: 'Vehicles',
                description: 'Displays the required vehicles.'
            },
            patients: {
                label: 'patient information',
                description: 'Shows information about (potential) patients.'
            },
            prisoners: {
                label: 'prisoner information',
                description: 'Shows information about (potential) prisoners.'
            },
            special: {
                label: 'Other information',
                description: 'Displays special information, such as the average minimum number of personnel required.'
            },
            expansions: {
                label: 'distributions',
                description: 'Shows what the bet can spread to. (Shows only simple spread)'
            },
            show_100: {
                label: 'Show 100% probability',
                description: 'Shows the probability for a vehicle even if it is 100%.'
            },
            credits: {
                label: 'Average earnings',
                description: 'Shows the average earnings you get for this assignment.'
            },
            show_siwa: {
                label: 'Requirements of security guards',
                description: 'Shows the requirements for security guards in the helper as well.'
            },
            mission_time: {
                label: 'Creation Time',
                description: 'Shows the date and time when the mission was created.'
            }
        },
        vehicles: {
            truck: "Fire engines",
            platform: "Aerial Appliance",
            heavyRescue: "Rescue Support Unit or Rescue Pump",
            air: "Breathing Apparatus Support Unit",
            bchief: "Fire Officer",
            tanker: "Water Carrier",
            hazmat: "HazMat",
            mcv: "Incident Command and Control Unit",
            police: "Police Car",
            arff: "ARFF",
            k9: "Dog Support Unit",
            swatSuv: "Armed Response Vehicle (ARV)",
            hems: "SAR Helicopter",
            policeHeli: "Police helicopter",
        },
        pois: [
            "Park",
            "Lake",
            "Hospital",
            "Forest",
            "Bus stop",
            "Tram stop",
            "Train station (regional traffic)",
            "Train station (regional traffic and long-distance travel)",
            "Goods station",
            "Supermarket (small)",
            "Supermarket (big)",
            "Gas station",
            "School",
            "Museum",
            "Mall",
            "Car workshop",
            "Highway exit",
            "Christmas market",
            "Storehouse",
            "Discotheque",
            "Stadium",
            "Farm",
            "Office building",
            "Swimming bath",
            "Railroad Crossing",
            "Theater",
            "Fairground",
            "River",
            "Small Airport (Runway)",
            "Large Airport (Runway)",
            "Airport Terminal",
            "Bank",
            "Warehouse",
            "Bridge",
            "Fast Food Restaurant",
            "Cargo Port",
            "Recycling Centre",
            "High rise",
            "Cruise ship dock",
            "Marina",
            "Rail Crossing",
            "Tunnel",
            "Cold Storage Warehouse",
            "Power Plant",
            "Factory",
            "Scrap yard",
            "Subway station",
            "Small chemical storage tank",
            "Large chemical storage tank",
            "Hotel",
            "Bar",
            "Landfill site",
        ]
    };

    I18n.translations.eu.lssm.missionhelper = {
        diy_mission: 'This mission seems to be a large scale alliance mission.',
        settings: {
            name: {
                label: 'Name',
                description: 'Shows the name of the mission in the helper.'
            },
            id: {
                label: 'ID',
                description: 'Displays the ID of the mission in the helper.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Displays the ID of the mission type in the helper.'
            },
            poi: {
                label: 'POI',
                description: 'Indicates in the helper which POI the operation is at.'
            },
            live_patients: {
                label: 'Number of patients',
                description: 'Shows live how many patients are currently in use.'
            },
            vehicles: {
                label: 'Vehicles',
                description: 'Displays the required vehicles.'
            },
            patients: {
                label: 'patient information',
                description: 'Shows information about (potential) patients.'
            },
            prisoners: {
                label: 'prisoner information',
                description: 'Shows information about (potential) prisoners.'
            },
            special: {
                label: 'Other information',
                description: 'Displays special information, such as the average minimum number of personnel required.'
            },
            expansions: {
                label: 'distributions',
                description: 'Shows what the bet can spread to. (Shows only simple spread)'
            },
            show_100: {
                label: 'Show 100% probability',
                description: 'Shows the probability for a vehicle even if it is 100%.'
            },
            credits: {
                label: 'Average earnings',
                description: 'Shows the average earnings you get for this assignment.'
            },
            show_siwa: {
                label: 'Requirements of security guards',
                description: 'Shows the requirements for security guards in the helper as well.'
            },
            mission_time: {
                label: 'Creation Time',
                description: 'Shows the date and time when the mission was created.'
            }
        },
        vehicles: {
            truck: "Fire engines",
            platform: "Turntable Ladder",
            heavyRescue: "Heavy Rescue",
            air: "Mobile Air",
            bchief: "Rapid Response Vehicles",
            tanker: "Water Tanker",
            hazmat: "HazMat",
            mcv: "Mobile Command Vehicle",
            police: "Police Car",
            arff: "ARFF"
        },
        pois: [
            "Park",
            "Lake",
            "Hospital",
            "Forest",
            "Bus stop",
            "Tram stop",
            "Train station (regional traffic)",
            "Train station (regional traffic and long-distance travel)",
            "Goods station",
            "Supermarket (small)",
            "Supermarket (big)",
            "Gas station",
            "School",
            "Museum",
            "Mall",
            "Car workshop",
            "Highway exit",
            "Christmas market",
            "Storehouse",
            "Discotheque",
            "Stadium",
            "Farm",
            "Office building",
            "Swimming bath",
            "Railroad Crossing",
            "Theater",
            "Fairground",
            "River",
            "Small Airport (Runway)",
            "Large Airport (Runway)",
            "Airport Terminal",
            "Bank",
            "Warehouse",
            "Bridge",
            "Fast Food Restaurant",
            "Cargo Port",
            "Recycling Centre",
            "High rise",
            "Cruise ship dock",
            "Marina",
            "Rail Crossing",
            "Tunnel",
            "Cold Storage Warehouse",
            "Power Plant",
            "Factory",
            "Scrap yard",
            "Subway station",
            "Small chemical storage tank",
            "Large chemical storage tank",
            "Hotel",
            "Bar",
            "Landfill site",
        ]
    };

    I18n.translations.es.lssm.missionhelper = {
        diy_mission: 'Esta misión parece ser una misión de alianza a gran escala.',
        siwa: 'Misión planificada',
        vge: 'misión de alianza a gran escala',
        patients: 'pacientes',
        prisoners: 'presos',
        water: 'Wasserbedarf',
        to: 'up to',
        ambulance_only: 'Esta misión es sólo de ambulancias.!',
        title: 'Missionhelper',
        transport: 'transportar',
        settings: {
            name: {
                label: 'Nombre',
                description: 'Muestra el nombre de la misión en el ayudante.'
            },
            id: {
                label: 'ID',
                description: 'Muestra el ID de la misión en el asistente.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Muestra el ID del tipo de misión en el asistente.'
            },
            poi: {
                label: 'POI',
                description: 'Indica en el asistente en qué PDI se encuentra la operación.'
            },
            live_patients: {
                label: 'Número de pacientes',
                description: 'Muestra en vivo cuántos pacientes están actualmente en uso.'
            },
            vehicles: {
                label: 'Vehículos',
                description: 'Muestra los vehículos necesarios.'
            },
            patients: {
                label: 'información del paciente',
                description: 'Muestra información sobre pacientes (potenciales).'
            },
            prisoners: {
                label: 'información sobre los presos',
                description: 'Muestra información sobre prisioneros (potenciales).'
            },
            special: {
                label: 'Otra información',
                description: 'Muestra información especial, como el promedio mínimo de personal necesario.'
            },
            expansions: {
                label: 'distribuciones',
                description: 'Muestra a qué puede llegar la apuesta. (Muestra sólo la dispersión simple)'
            },
            show_100: {
                label: 'Mostrar 100% de probabilidad',
                description: 'Muestra la probabilidad de un vehículo incluso si es 100%.'
            },
            credits: {
                label: 'Ganancias medias',
                description: 'Muestra el promedio de ganancias que usted obtiene por esta asignación.'
            },
            show_siwa: {
                label: 'Requisitos de los guardias de seguridad',
                description: 'También muestra los requisitos para los guardias de seguridad en el ayudante.'
            },
            mission_time: {
                label: 'Hora de creación',
                description: 'Muestra la fecha y la hora en que se creó la misión.'
            }
        },
        vehicles: {
            truck: "camiones de bomberos",
            platform: "camiones con plataforma",
            heavyRescue: "Furgones de Útiles Vario",
            air: "Mobile Air",
            bchief: "unidades de Mando y Comunicaciones",
            mcv: "vehículos de mando",
            tanker: "camiones cisterna",
            hazmat: "vehículos de materiales peligrosos",
            police: "coches patrulla",
            hems: "Helicóptero HSR",
            arff: "CBA",
            policeHeli: "Police Helicopter",
            rtw: "Ambulancia"
        },
        pois: [
            "Parque",
            "Lago",
            "Hospital",
            "Bosque",
            "Parada de autobús",
            "Parada de tranvía",
            "Parada de tren \\(cercanías\\)",
            "Parada de tren \\(cercanías y larga distancia\\)",
            "Estación de mercancías",
            "Supermercado \\(pequeño\\)",
            "Supermercado \\(grande\\)",
            "Gasolinera",
            "Escuela",
            "Museo",
            "Centro comercial",
            "Taller",
            "Salida de autopista",
            "Mercado navideño",
            "Depósito",
            "Discoteca",
            "Estadio",
            "Granja",
            "Edificio de oficinas",
            "Piscina",
            "Railroad Crossing",
            "Cine",
            "Feria",
            "Río",
            "Aeropuerto pequeño \\(pista\\)",
            "Aeropuerto grande \\(pista\\)",
            "Terminal de aeropuerto",
            "Banco",
            "Almacén",
            "Puente",
            "Restaurante de comida rápida",
            "Puerto de mercancías",
            "Centro de reciclaje",
            "Rascacielos",
            "Cubierta de yate",
            "Puerto deportivo",
            "Paso a nivel",
            "Túnel",
            "Almacén frigorífico",
            "Central eléctrica",
            "Fábrica",
            "Chatarrería",
            "Estación de metro",
            "Almacén químico pequeño",
            "Almacén químico grande",
            "Hotel",
            "Bar",
            "Vertedero",
            "Aparcamiento",
        ]
    };

    I18n.translations.sv_SE.lssm.missionhelper = {
        diy_mission: 'Detta uppdrag verkar vara ett alliansuppdrag i stor skala.',
        siwa: 'Planerat uppdrag',
        vge: 'Stora alliansuppdrag',
        patients: 'patienter',
        prisoners: 'fångar',
        to: 'upp till',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Detta uppdrag är endast ambulans!',
        title: 'Missionhelper',
        transport: 'Transport',
        settings: {
            name: {
                label: 'namn',
                description: 'Visar uppdragets namn i hjälparen.'
            },
            id: {
                label: 'ID',
                description: 'Visar uppdragets ID i hjälpen.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Visar ID för uppdragstypen i hjälparen.'
            },
            poi: {
                label: 'POI',
                description: 'Anger i hjälpen vilken POI operationen är på.'
            },
            live_patients: {
                label: 'Antal patienter',
                description: 'Visar hur många patienter som för närvarande används.'
            },
            vehicles: {
                label: 'fordon',
                description: 'Visar nödvändiga fordon.'
            },
            patients: {
                label: 'patientinformation',
                description: 'Visar information om (potentiella) patienter.'
            },
            prisoners: {
                label: 'fångsinformation',
                description: 'Visar information om (potentiella) fångar.'
            },
            special: {
                label: 'Annan information',
                description: 'Visar speciell information, till exempel det genomsnittliga minsta antal personal som krävs.'
            },
            expansions: {
                label: 'distributioner',
                description: 'Visar vad insatsen kan spridas till. (Visar bara enkel spridning)'
            },
            show_100: {
                label: 'Visa 100% sannolikhet ',
                description: 'Visar sannolikheten för ett fordon även om det är 100%.'
            },
            credits: {
                label: 'Genomsnittlig inkomst',
                description: 'Visar den genomsnittliga vinsten du får för den här uppgiften.'
            },
            show_siwa: {
                label: 'Krav på säkerhetsvakter',
                description: 'Visar också kraven för säkerhetsvakter i hjälpen.'
            },
            mission_time: {
                label: 'Skapningstid',
                description: 'Visar datum och tid då uppdraget skapades.'
            }
        },
        vehicles: {
            truck: "släckbilar",
            platform: "stegbilar",
            heavyRescue: "Lastväxlare",
            air: "Mobile Air",
            bchief: "brandchefsbilar",
            tanker: "tankbilar",
            hazmat: "farligt gods-fordon",
            mcv: "utryckningsfordon",
            police: "polisbilar",
            hems: "HEMS",
            rtw: "Ambulans",
            arff: "ARFF",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            hems: "Räddningshelikopter",
            policeHeli: "Police Helicopter",
        },
        pois: [
            "Park",
            "Sjö",
            "Sjukhus",
            "Skog",
            "Busshållplats",
            "Spårvagnshållplats",
            "Tågstation \\(regionaltåg\\)",
            "Tågstation \\(regional- och fjärrtåg\\)",
            "Varustation",
            "Mataffär",
            "Stormarknad",
            "Bensinmack",
            "Skola",
            "Museum",
            "Köpcentrum",
            "Bilverkstad",
            "Avfart",
            "Julmarknad",
            "Lagerbyggnad",
            "Nattklubb",
            "Arena",
            "Bondgård",
            "Kontorsbyggnad",
            "Badhus",
            "Järnvägsövergång",
            "Teater",
            "Nöjesfält",
            "Flod",
            "Liten startbana",
            "Stor startbana",
            "Flygplatsterminal",
            "Bank",
            "Magasin",
            "Bro",
            "Snabbmatsrestaurang",
            "Fraktgodshamn",
            "Återvinningscentral",
            "Höghus",
            "Kryssningshamn",
            "Småbåtshamn",
            "Järnvägskorsning",
            "Tunnel",
            "Fryshus",
            "Kraftverk",
            "Fabrik",
            "Skrotupplag",
            "Tunnelbanestation",
            "Liten kemikalietank",
            "Stor kemikalietank",
            "Hotell",
            "Bar",
            "Soptipp",
            "Parkeringshus"
        ]
    };

    I18n.translations.da_DK.lssm.missionhelper = {
        diy_mission: 'Denne mission synes at være en alliansemission i stor skala.',
        siwa: 'Planlagt mission',
        vge: 'Stor skala alliance mission',
        patients: 'Patienter',
        prisoners: 'Fanger',
        to: 'op til',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Denne mission er kun ambulance!',
        title: 'Missionhelper',
        transport: 'Transportere',
        settings: {
            name: {
                label: 'Navn',
                description: 'Viser missionens navn i hjælperen.'
            },
            id: {
                label: 'ID',
                description: 'Viser ID for missionen i hjælperen.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Viser ID for missionstypen i hjælperen.'
            },
            poi: {
                label: 'POI',
                description: 'Angiver i hjælperen, hvilket POI operationen er ved.'
            },
            live_patients: {
                label: 'Antal patienter',
                description: 'Viser live, hvor mange patienter der i øjeblikket er i brug.'
            },
            vehicles: {
                label: 'Køretøjer',
                description: 'Viser de nødvendige køretøjer.'
            },
            patients: {
                label: 'patientinformation',
                description: 'Viser oplysninger om (potentielle) patienter.'
            },
            prisoners: {
                label: 'fangeoplysninger',
                description: 'Viser oplysninger om (potentielle) fanger.'
            },
            special: {
                label: 'Andre oplysninger',
                description: 'Viser speciel information, såsom det gennemsnitlige minimalt antal krævede medarbejdere.'
            },
            expansions: {
                label: 'distributioner',
                description: 'Viser, hvad indsatsen kan sprede sig til. (Viser kun enkel spredning)'
            },
            show_100: {
                label: 'Vis 100% sandsynlighed',
                description: 'Viser sandsynligheden for et køretøj, selvom det er 100%.'
            },
            credits: {
                label: 'Gennemsnitlig indtjeningGennemsnitlig indtjening',
                description: 'Viser den gennemsnitlige indtjening, du får for denne opgave.'
            },
            show_siwa: {
                label: 'Krav til sikkerhedsvagter',
                description: 'Viser også kravene til sikkerhedsvagter i hjælperen.'
            },
            mission_time: {
                label: 'Oprettelsestid',
                description: 'Viser dato og klokkeslæt, hvor missionen blev oprettet.'
            }
        },
        vehicles: {
            truck: "Brandbiler",
            platform: "Platformvogne",
            heavyRescue: "Redningskøretøjer",
            air: "Mobile Air",
            bchief: "Holdleder-køretøjer",
            tanker: "vandtankvogne",
            hazmat: "gift- og kemikaliekøretøjer",
            mcv: "utryckningsfordon",
            police: "politibiler",
            hems: "HEMS",
            rtw: "Ambulans",
            arff: "ARFF",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            hems: "Räddningshelikopter",
            policeHeli: "Police Helicopter",
        },
        pois: [
            "Park",
            "Sø",
            "Hostpital",
            "Skov",
            "Busstoppested",
            "Sporvognstoppested",
            "Togstation \\(lokal trafik\\)",
            "Togstation \\(lokal og national /international trafik\\)",
            "Godsstation",
            "Supermarked \\(lille\\)",
            "Supermarked \\(stort\\)",
            "Benzinstation",
            "Skole",
            "Museum",
            "Indkøbscenter",
            "Bilværksted",
            "Motervejsfrakørsel",
            "Julemarked",
            "Pakhus",
            "Diskotek",
            "Stadion",
            "Gård",
            "Kontorbygning",
            "Svømmehal",
            "Jernbaneovergang",
            "Teater",
            "Markedsplads",
            "Flod",
            "Lille lufthavn \\(landingsbane\\)",
            "Stor lufthavn \\(landingsbane\\)",
            "Lufthavnsterminal",
            "Bank",
            "Varehus",
            "Bro",
            "Fast Food-restaurant",
            "Containerhavnn",
            "Genbrugscenter",
            "Skyskraber",
            "Krydstogthavn",
            "Lystbådehavn",
            "Skinnekrydsning",
            "Tunnel",
            "Kølehus",
            "Kraftværk",
            "Fabrik",
            "Skrotplads",
            "Metrostation",
            "Lille kemikalietank",
            "Stor kemikalietank",
            "Hotel",
            "Bar",
            "Losseplads",
                "Parkeringshus"
        ]
    };

    I18n.translations.nb_NO.lssm.missionhelper = {
        diy_mission: 'Dette oppdraget ser ut til å være et allianseoppdrag i stor skala.',
        siwa: 'Planlagt oppdrag',
        vge: 'Alliansemisjon i stor skala',
        patients: 'Pasienter',
        prisoners: 'innsatte',
        to: 'opp til',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Dette oppdraget er kun ambulanse!',
        title: 'Missionhelper',
        transport: 'Transportere',
        settings: {
            name: {
                label: 'Navn',
                description: 'Viser navnet på oppdraget i hjelperen.'
            },
            id: {
                label: 'ID',
                description: 'Viser IDen til oppdraget i hjelperen.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Viser ID for oppdragstypen i hjelperen.'
            },
            poi: {
                label: 'POI',
                description: 'Indikerer i hjelperen hvilken POI operasjonen er på.'
            },
            live_patients: {
                label: 'Antall pasienter',
                description: 'Viser hvor mange pasienter som er i bruk.'
            },
            vehicles: {
                label: 'kjøretøy',
                description: 'Viser de nødvendige kjøretøyene.'
            },
            patients: {
                label: 'pasientinformasjon',
                description: 'Viser informasjon om (potensielle) pasienter.'
            },
            prisoners: {
                label: 'fangeinformasjon',
                description: 'Viser informasjon om (potensielle) fanger.'
            },
            special: {
                label: 'Annen informasjon',
                description: 'Viser spesiell informasjon, for eksempel gjennomsnittlig minimum antall ansatte som kreves.'
            },
            expansions: {
                label: 'distribusjoner',
                description: 'Viser hva innsatsen kan spre seg til. (Viser bare enkel oppslag)'
            },
            show_100: {
                label: 'Vis 100% sannsynlighet',
                description: 'Viser sannsynligheten for et kjøretøy selv om det er 100%.'
            },
            credits: {
                label: 'Gjennomsnittlig inntjening',
                description: 'Viser gjennomsnittlig inntjening du får for denne oppgaven.'
            },
            show_siwa: {
                label: 'Krav til sikkerhetsvakter',
                description: 'Viser også kravene til sikkerhetsvakter i hjelperen.'
            },
            mission_time: {
                label: 'Opprettingstid',
                description: 'Viser dato og klokkeslett da oppdraget ble opprettet.'
            }
        },
        vehicles: {
            truck: "Brannbiler",
            platform: "lastebiler med sidelemmer",
            heavyRescue: "store utryknings",
            air: "Mobile Air",
            bchief: "Bataljonsjefbil",
            tanker: "tankbiler",
            hazmat: "HazMat-kjøretøy",
            mcv: "utryckningsfordon",
            police: "politibiler",
            hems: "HEMS",
            rtw: "Ambulans",
            arff: "brann- og redningstjeneste for fly",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            hems: "Räddningshelikopter",
            policeHeli: "Police Helicopter",
        },
        pois: [
            "Park",
            "Innsjø",
            "Sykehus",
            "Skog",
            "Busstopp",
            "Trikkestopp",
            "Togstasjon \\(regional\\)",
            "Togstasjon \\(regional og langdistanse\\)",
            "Godsstasjon",
            "Matvarebutikk \\(liten\\)",
            "Matvarebutikk \\(stor\\)",
            "Bensinstasjon",
            "Skole",
            "Museum",
            "Kjøpesenter",
            "Bilverksted",
            "Motorveiavkjøring",
            "Julemarked",
            "Lagerbygning",
            "Nattklubb",
            "Stadion",
            "Gård",
            "Kontorbygning",
            "Basseng",
            "Järnvägsövergång",
            "Teater",
            "Tivoli",
            "Elv",
            "Liten flyplass \\(flystripe\\)",
            "Stor flyplass \\(flystripe\\)",
            "Flyplassterminal",
            "Bank",
            "Varehus",
            "Bro",
            "Gatekjøkken",
            "Cargohavn",
            "Gjenvinningssenter",
            "Skyskraper",
            "Cruisehavn",
            "Marina",
            "Planovergang",
            "Tunnel",
            "Kaldt varehus",
            "Kraftverk",
            "Fabrikk",
            "Skrotplass",
            "Metrostasjon",
            "Liten kjemisk lagringstank",
            "Stor kjemisk lagringstank",
            "Hotell",
            "Bar",
            "Avfallsdeponi",
            "Parkeringshus"
        ]
    };

    I18n.translations.pl_PL.lssm.missionhelper = {
        diy_mission: 'Ta misja wydaje się być misją sojuszników na dużą skalę.',
        siwa: 'Planowana misja',
        vge: 'Misja sojuszu na dużą skalę',
        patients: 'Pacjenci',
        prisoners: 'Więźniowie',
        to: 'aż do',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Ta misja to tylko ambulans!',
        title: 'Pomocnik misjonarza',
        transport: 'Transport',
        settings: {
            name: {
                label: 'Nazwa',
                description: 'Pokazuje nazwę misji w pomocniku.'
            },
            id: {
                label: 'ID',
                description: 'Wyświetla ID misji w helperze.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Wyświetla ID typu misji w helperze.'
            },
            poi: {
                label: 'POI',
                description: 'Wskazuje w pomocniku, na którym punkcie POI znajduje się dana operacja.'
            },
            live_patients: {
                label: 'Liczba pacjentów',
                description: 'Pokazuje na żywo, ilu pacjentów jest obecnie w użyciu.'
            },
            vehicles: {
                label: 'Pojazdy',
                description: 'Wyświetla wymagane pojazdy.'
            },
            patients: {
                label: 'patient information',
                description: 'Pokazuje informacje o (potencjalnych) pacjentach.'
            },
            prisoners: {
                label: 'informacje o więźniach',
                description: 'Pokazuje informacje o (potencjalnych) więźniach.'
            },
            special: {
                label: 'Inne informacje',
                description: 'Displays special information, such as the average minimum number of personnel required.'
            },
            expansions: {
                label: 'dystrybucje',
                description: 'Pokazuje, do czego może rozprzestrzeniać się zakład. (Pokazuje tylko prosty spread)'
            },
            show_100: {
                label: 'Pokaż 100% prawdopodobieństwo',
                description: 'Pokazuje prawdopodobieństwo dla pojazdu, nawet jeśli jest to 100%.'
            },
            credits: {
                label: 'Średni wynik finansowy',
                description: 'Pokazuje średnie zarobki, które otrzymujesz za to zadanie.'
            },
            show_siwa: {
                label: 'Wymogi strażników bezpieczeństwa',
                description: 'Pokazuje również wymagania strażników bezpieczeństwa w pomocniku.'
            },
            mission_time: {
                label: 'Czas tworzenia',
                description: 'Pokazuje datę i godzinę utworzenia misji.'
            }
        },
        vehicles: {
            truck: "samochody pożarnicze",
            platform: "SP wysokościowe",
            heavyRescue: "ciężkie samochody ratowniczo-gaśnicze",
            air: "SPGaz",
            bchief: "samochody szefa brygady",
            tanker: "cysterny z wodą",
            hazmat: "SP Rchem",
            mcv: "samochody dowodzenia i łączności",
            police: "radiowozy",
            hems: "HEMS",
            rtw: "Ambulans P",
            arff: "SP LSP",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            hems: "SAR Helicopter",
            policeHeli: "Police Helicopter",
        },
        pois: [
            "Park",
            "Jezioro",
            "Szpital",
            "Las",
            "Przystanek autobusowy",
            "Przystanek tramwajowy",
            "Dworzec kolejowy \\(ruch podmiejski\\)",
            "Dworzec kolejowy \\(ruch podmiejski i dalekobieżny\\)",
            "Stacja towarowa",
            "Supermarket \\(mały\\)",
            "Supermarket \\(duży\\)",
            "Stacja paliw",
            "Szkoła",
            "Muzeum",
            "Centrum handlowe",
            "Warsztat samochodowy",
            "Zjazd z autostrady",
            "Jarmark Bożonarodzeniowy",
            "Storehouse",
            "Dyskoteka",
            "Stadion",
            "Gospodarstwo rolne",
            "Biurowiec",
            "Basen",
            "Przejazd kolejowy",
            "Teatr",
            "Teren wystawowy",
            "Rzeka",
            "Mały port lotniczy \\(pas startowy\\)",
            "Duży port lotniczy \\(pas startowy\\)",
            "Terminal portu lotniczego",
            "Bank",
            "Magazyn",
            "Most",
            "Bar szybkiej obsługi",
            "Cargo-port",
            "Centrum segregacji odpadów",
            "Wieżowiec",
            "Dok dla wycieczkowców",
            "Marina",
            "Przejazd kolejowo-drogowy",
            "Tunel",
            "Chłodnia składowa",
            "Elektrownia",
            "Fabryka",
            "Składowisko złomu",
            "Stacja metra",
            "Mały zbiornik na substancje chemiczne",
            "Duży zbiornik na substancje chemiczne",
            "Hotel",
            "Bar",
            "Składowisko odpadów",
            "Parking"
        ]
    };

    I18n.translations.it_IT.lssm.missionhelper = {
        diy_mission: 'Questa missione sembra essere una missione su larga scala dell\'alleanza..',
        siwa: 'Missione pianificata',
        vge: 'Missione dell\'alleanza su larga scala',
        patients: 'Pazienti',
        prisoners: 'Prigionieri',
        to: 'fino',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Questa missione e\' riservata alle ambulanze.!',
        title: 'Missionhelper',
        transport: 'Trasporto',
        settings: {
            name: {
                label: 'Nome',
                description: 'Mostra il nome della missione nell\'aiutante.'
            },
            id: {
                label: 'ID',
                description: 'Visualizza l\'ID della missione nell\'helper.'
            },
            type: {
                label: 'TIPO-ID',
                description: 'Visualizza l\'ID del tipo di missione nell\'helper.'
            },
            poi: {
                label: 'POI',
                description: 'Indica nell\'helper a quale PDI si trova l\'operazione.'
            },
            live_patients: {
                label: 'Numero di pazienti',
                description: 'Mostra dal vivo quanti pazienti sono attualmente in uso.'
            },
            vehicles: {
                label: 'Veicoli',
                description: 'Visualizza i veicoli necessari.'
            },
            patients: {
                label: 'informazioni sul paziente',
                description: 'Mostra informazioni sui (potenziali) pazienti.'
            },
            prisoners: {
                label: 'prisoner information',
                description: 'Mostra informazioni sui (potenziali) prigionieri.'
            },
            special: {
                label: 'Altre informazioni',
                description: 'Visualizza informazioni speciali, come ad esempio il numero medio minimo di persone richieste.'
            },
            expansions: {
                label: 'erogazioni',
                description: 'Mostra a cosa può diffondersi la scommessa. (Mostra solo spread semplice)'
            },
            show_100: {
                label: 'Mostra il 100% di probabilità',
                description: 'Mostra la probabilità per un veicolo anche se è al 100%.'
            },
            credits: {
                label: 'Guadagno medio',
                description: 'Mostra i guadagni medi che si ottengono per questo incarico.'
            },
            show_siwa: {
                label: 'Requisiti delle guardie di sicurezza',
                description: 'Mostra i requisiti per le guardie di sicurezza anche nell\'helper.'
            },
            mission_time: {
                label: 'Tempo di creazione',
                description: 'Mostra la data e l\'ora in cui la missione è stata creata.'
            }
        },
        vehicles: {
            truck: "Autopompe",
            platform: "Autoscale",
            heavyRescue: "Veicoli di soccorso pesante",
            air: "Mobile Air",
            bchief: "Funzionario",
            tanker: "Autobotti",
            hazmat: "Mezzi N.B.C.R.",
            mcv: "Mobile Command Vehicle",
            police: "Volanti della polizia",
            hems: "HEMS",
            rtw: "Ambulanza Medicalizzata",
            arff: "Flotta aerea antincendio AIB",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            hems: "SAR Helicopter",
            policeHeli: "Police Helicopter"
        },
        pois: [
            "Parco",
            "Lago",
            "Ospedale",
            "Bosco",
            "Fermata dell'autobus",
            "Fermata del tram",
            "Stazione ferroviaria \\(traffico regionale\\)",
            "Stazione ferroviaria \\(traffico regionale e viaggi a lunga distanza\\)",
            "Stazione merci",
            "Supermercato \\(piccolo\\)",
            "Supermercato \\(grande\\)",
            "Stazione di servizio",
            "Scuola",
            "Museo",
            "Centro commercial",
            "Officina meccanica",
            "Uscita autostradale",
            "Mercatino di Natale",
            "Storehouse",
            "Discoteca",
            "Stadio",
            "Azienda agricola",
            "Edificio adibito a uffici",
            "Piscina",
            "Railroad Crossing",
            "Teatro",
            "Luna park",
            "Fiume",
            "Piccolo aeroporto \\(pista\\)",
            "Grande aeroporto \\(pista\\)",
            "Terminal aeroporto",
            "Banca",
            "Magazzino",
            "Ponte",
            "Tavola calda",
            "Porto mercantile",
            "Piattaforma ecologica",
            "Grattacielo",
            "Molo navi da crociera",
            "Porticciolo",
            "Passaggio a livello",
            "Galleria",
            "Magazzino a celle frigorifere",
            "Centrale elettrica",
            "Fabbrica",
            "Deposito rottami",
            "Stazione metropolitana",
            "Piccolo serbatoio di accumulo sostanze chimiche",
            "Grande serbatoio di accumulo sostanze chimiche",
            "Hotel",
            "Bar",
            "Discarica",
            "Parcheggio coperto"
        ]
    };

    I18n.translations.fr_FR.lssm.missionhelper = {
        diy_mission: 'Cette mission semble être une mission d\'alliance à grande échelle.',
        siwa: 'Mission prévue',
        vge: 'Mission d\'alliance à grande échelle',
        patients: 'Patients',
        prisoners: 'prisonniers',
        to: 'jusqu\'à',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Cette mission est réservée aux ambulances !',
        title: 'Aide à la mission',
        transport: 'transport',
        settings: {
            name: {
                label: 'Nom',
                description: 'Affiche le nom de la mission dans l\'assistant.'
            },
            id: {
                label: 'ID',
                description: 'Affiche l\'ID de la mission dans l\'aide.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Affiche l\'ID du type de mission dans l\'aide.'
            },
            poi: {
                label: 'POI',
                description: 'Indique dans l\'aide à quel POI se trouve l\'opération.'
            },
            live_patients: {
                label: 'Nombre de patients',
                description: 'Affiche en temps réel le nombre de patients en cours d\'utilisation.'
            },
            vehicles: {
                label: 'Véhicules',
                description: 'Affiche les véhicules requis.'
            },
            patients: {
                label: 'renseignements sur le patient',
                description: 'Affiche des informations sur les patients (potentiels).'
            },
            prisoners: {
                label: 'renseignements sur le détenu',
                description: 'Affiche des informations sur les détenus (potentiels).'
            },
            special: {
                label: 'Autres informations',
                description: 'Affiche des informations spéciales, telles que le nombre minimum moyen d\'employés requis.'
            },
            expansions: {
                label: 'répartitions',
                description: 'Montre à quoi le pari peut s\'étendre. (N\'affiche que la propagation simple)'
            },
            show_100: {
                label: 'Montrer 100% de probabilité',
                description: 'Indique la probabilité pour un véhicule même s\'il est à 100%.'
            },
            credits: {
                label: 'Salaire moyen',
                description: 'Indique le salaire moyen que vous touchez pour cette affectation.'
            },
            show_siwa: {
                label: 'Exigences applicables aux agents de sécurité',
                description: 'Affiche également les exigences pour les agents de sécurité de l\'assistant.'
            },
            mission_time: {
                label: 'Heure de création',
                description: 'Affiche la date et l\'heure de création de la mission.'
            }
        },
        vehicles: {
            truck: "Fourgons d’incendie",
            platform: "Chariots à plateforme",
            heavyRescue: "Véhicule de secours routier",
            air: "Mobile Air",
            bchief: "Véhicules de lieutenant",
            tanker: "Camions-citernes",
            hazmat: "Véhicules risques chimiques",
            mcv: "Mobile Command Vehicle",
            police: "Voitures de police",
            arff: "ARFF"
        },
        pois: [
            "Parc",
            "Lac",
            "Hôpital",
            "Forêt",
            "Arrêt de bus",
            "Arrêt de tram",
            "Gare ferroviaire \\(trajets régionaux\\)",
            "Gare ferroviaire \\(trajets régionaux et grandes lignes\\)",
            "Supérette",
            "Supermarché \\(petit\\)",
            "Supermarché \\(grand\\)",
            "Station-service",
            "École",
            "Musée",
            "Centre commercial",
            "Garage automobile",
            "Sortie d’autoroute",
            "Marché de Noël",
            "Hangar",
            "Discothèque",
            "Stade",
            "Ferme",
            "Bureaux",
            "Piscine",
            "Passage à niveau",
            "Théâtre",
            "Fête foraine",
            "Rivière",
            "Petit aéroport \\(piste\\)",
            "Grand aéroport \\(piste\\)",
            "Terminal d’aéroport",
            "Banque",
            "Entrepôt",
            "Pont",
            "Restauration rapide",
            "Port de fret",
            "Centre de recyclage",
            "Tour",
            "Quai de navire de croisière",
            "Marina",
            "Croisement de voie ferrée",
            "Tunnel",
            "Entrepôt frigorifique",
            "Centrale électrique",
            "Usine",
            "Casse",
            "Station de métro",
            "Petite citerne de produits chimiques",
            "Grande citerne de produits chimiques",
            "Hôtel",
            "Bar",
            "Décharge",
            "Parking couvert"
        ]
    };

    I18n.translations.ru_RU.lssm.missionhelper = {
        diy_mission: 'Эта миссия, похоже, является широкомасштабной миссией альянса.',
        siwa: 'Запланированная миссия',
        vge: 'Запланированная миссия',
        patients: 'Пациенты',
        prisoners: 'Заключенные',
        to: 'вплоть до',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Это задание только для скорой помощи!',
        title: 'Миссионер',
        transport: 'Транспорт',
        settings: {
            name: {
                label: 'Имя',
                description: 'Показывает имя миссии в помощнике..'
            },
            id: {
                label: 'УДОСТОВЕРЕНИЕ ЛИЧНОСТИ',
                description: 'Отображает идентификатор задания в помощнике..'
            },
            type: {
                label: 'ТИП-ID',
                description: 'Отображает идентификатор типа миссии в помощнике..'
            },
            poi: {
                label: 'POI',
                description: 'Указывает в помощнике, в какой Точке интереса выполняется операция.'
            },
            live_patients: {
                label: 'Количество пациентов',
                description: 'Показывает вживую, сколько пациентов в данный момент находятся в эксплуатации.'
            },
            vehicles: {
                label: 'Автомобили',
                description: 'Отображает требуемые транспортные средства.'
            },
            patients: {
                label: 'информация о пациенте',
                description: 'Показывает информацию о (потенциальных) пациентах.'
            },
            prisoners: {
                label: 'информация о заключенных',
                description: 'Показывает информацию о (потенциальных) заключенных.'
            },
            special: {
                label: 'Другая информация',
                description: 'Отображает специальную информацию, например, среднее минимальное требуемое количество персонала.'
            },
            expansions: {
                label: 'рассылки',
                description: 'Показывает, на что может распространяться ставка. (Показывает только простое распространение)'
            },
            show_100: {
                label: 'Показать 100% вероятность',
                description: 'Показывает вероятность для транспортного средства, даже если она составляет 100%.'
            },
            credits: {
                label: 'Средний заработок',
                description: 'Показывает средний заработок, который вы получаете за это задание.'
            },
            show_siwa: {
                label: 'Требования к охранникам',
                description: 'Также показывает требования к охранникам в помощнике.'
            },
            mission_time: {
                label: 'Время создания',
                description: 'Показывает дату и время создания миссии.'
            }
        },
        vehicles: {
            truck: "пожарные машины",
            platform: "платформы",
            heavyRescue: "машины для спасательных работ в тяжёлых условиях",
            air: "респираторной поддержки",
            bchief: "командира батальона",
            tanker: "цистерны с водой",
            hazmat: "автомобили обезвреживания",
            mcv: "мобильные командные пункты",
            police: "полицейские автомобили",
            arff: "АПСР"
        },
        pois: [
            "Парк",
            "Озеро",
            "Больница",
            "Лес",
            "Автобусная остановка",
            "Трамвайная остановка",
            "Железнодорожная станция",
            "Железнодорожный вокзал",
            "Товарная станция",
            "Супермаркет \\(небольшой\\)",
            "Супермаркет \\(большой\\)",
            "Автозаправка",
            "Школа",
            "Музей",
            "Торговый центр",
            "Автомастерская",
            "Съезд с трассы",
            "Рождественский рынок",
            "Storehouse",
            "Дискотека",
            "Стадион",
            "Ферма",
            "Офисное здание",
            "Бассейн",
            "Railroad Crossing",
            "Театр",
            "Ярмарка",
            "Река",
            "Малый аэропорт \\(ВПП\\)",
            "Большой аэропорт \\(ВПП\\)",
            "Терминал аэропорта",
            "Банк",
            "Склад",
            "Мост",
            "Ресторан быстрого питания",
            "Грузовой порт",
            "Центр переработки ВО",
            "Высотка",
            "Причал круизных лайнеров",
            "Гавань",
            "Железнодорожный переезд",
            "Тоннель",
            "Холодный склад",
            "Электростанция",
            "Фабрика",
            "Утилизационный склад",
            "Станция метро",
            "Малое хранилище химикатов",
            "Большое хранилище химикатов",
            "Гостиница",
            "Бар",
            "Мусорный полигон",
            "Паркинг"
        ]
    };

    I18n.translations.nl.lssm.missionhelper = {
        diy_mission: 'Deze inzet lijkt een grootschalige team inzet te zijn.',
        siwa: 'Geplande inzet',
        vge: 'Grootschalige team inzet',
        patients: 'Patiënten',
        prisoners: 'Gevangenen',
        to: 'tot',
        ambulance_only: 'Deze inzet is alleen voor de ambulance!',
        title: 'Meldinghelper',
        transport: 'Transport',
        settings: {
            name: {
                label: 'Naam',
                description: 'Toont de naam van de inzet in de helper.'
            },
            id: {
                label: 'ID',
                description: 'Toont de ID van de inzet in de helper.'
            },
            type: {
                label: 'TYPE-ID',
                description: 'Toont de ID van het inzettype in de helper.'
            },
            poi: {
                label: 'POI',
                description: 'Geeft in de helper aan op welke POI de inzet betrekking heeft.'
            },
            live_patients: {
                label: 'Aantal patiënten',
                description: 'Laat live zien hoeveel patiënten er momenteel zijn.'
            },
            vehicles: {
                label: 'Voertuigen',
                description: 'Geeft de benodigde voertuigen weer.'
            },
            patients: {
                label: 'Patiënteninformatie',
                description: 'Toont informatie over (potentiële) patiënten.'
            },
            prisoners: {
                label: 'Gevangeneninformatie',
                description: 'Toont informatie over (potentiële) gevangenen'
            },
            special: {
                label: 'Overige informatie',
                description: 'Toont speciale informatie, zoals het minimum aantal personeelsleden dat nodig is.'
            },
            expansions: {
                label: 'Incidentuitbreiding',
                description: 'Toont, of en hoe deze melding zich uitbreiden kan (Laat alleen de eerste uitbreiding zien)'
            },
            show_100: {
                label: 'Toon 100% waarschijnlijkheid',
                description: 'Toont de waarschijnlijkheid van een voertuig, ook al is het 100%.'
            },
            credits: {
                label: 'Gemiddelde verdiensten',
                description: 'Toont de gemiddelde verdiensten die je krijgt voor deze opdracht.'
            },
            show_siwa: {
                label: 'Helper bij geplande inzetten',
                description: 'Toont de meldinghelper ook bij geplande inzetten.'
            },
            mission_time: {
                label: 'Aanmaak tijd',
                description: 'Toont de datum en tijd waarop de inzet is gemaakt.'
            }
        },
        vehicles: {
            tankauto: "Tankautospuiten",
            noodhulpeen: "Noodhulpeenheden",
            ovdb: "OvD-B",
            redvoertuig: "Redvoertuigen",
            hoogwerker: "Hoogwerker",
            slangenwagen: "Slangenwagen",
            hulpverlening: "Hulpverleningsvoertuigen",
            adembescherming: "Adembeschermingsvoertuigen",
            hovd: "HOVD",
            waarschuwing: "Waarschuwings- en Verkenningsdienst voertuigen",
            gevaar: "Adviseurs Gevaarlijke Stoffen",
            ovdp: "Officiers van Dienst Politie",
            commando: "Commandowagen",
            ambulance: "Ambulances",
            mmtarts: "MMT-arts",
            megroep: "ME Groepsvoertuig",
            mecommando: "ME Commandovoertuigen",
            polHeli: "Politiehelikopter",
            watervoertuig: "Waterongevallenvoertuigen / Oppervlaktereddingsteams",
            wateraanhanger: "Waterongevallenaanhangers",
            hond: "Hondengeleider",
            crashtender: "Crashtender",
            afoosc: "AFO/OSC",
            ovdg: "OvD-Geneeskunde"
        },
        pois: [
            "Park",
            "Meer",
            "Ziekenhuis",
            "Bos",
            "Bushalte",
            "Tramhalte",
            "Station",
            "Centraal Station",
            "Rangeeremplacement",
            "Buurtsuper",
            "Supermarkt",
            "Tankstation",
            "School",
            "Museum",
            "Winkelcentrum",
            "Garage",
            "Snelweg oprit / afrit",
            "Kerstmarkt",
            "Magazijn",
            "Café/Club",
            "Stadion",
            "Boerderij",
            "Kantoorgebouw",
            "Zwembad",
            "Spoorwegovergang",
            "Theater",
            "Marktplein",
            "Rivier",
            "Sloot",
            "Vliegveld \\(klein\\): Start-/Landingsbaan",
            "Vliegveld \\(klein\\): Gebouw",
            "Vliegveld \\(klein\\): Vliegtuig parkeerplaats",
            "Vliegveld \\(groot\\): Start-/Landingsbaan",
            "Vliegveld \\(groot\\): Terminal",
            "Vliegveld \\(groot\\): Platform / Gate",
            "Vliegveld \\(groot\\): Parkeergarage",
            "Parkeergarage",
            "Verzorgingshuis",
            "Manege",
            "Hotel",
            "Restaurant",
            "Bankkantoor",
            "Sporthal",
            "Camping",
            "Gevangenis",
            "Asielzoekerscentrum",
            "Afvalverwerker",
            "Kerkgebouw",
            "Bouwmarkt",
            "Transformatorhuisje",
            "Industrieterrein",
            "Bedrijventerrein",
            "Haventerrein",
            "Bouwterrein"
        ]
    };

    const SETTINGS_STORAGE = `${LSSM_MH_PREFIX}_STORAGE`;

    const managed_settings = {
        id: SETTINGS_STORAGE,
        title: I18n.t('lssm.missionhelper.title'),
        settings: {
            name: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.name.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.name.description')
                }
            },
            id: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.id.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.id.description')
                }
            },
            type: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.type.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.type.description')
                }
            },
            poi: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.poi.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.poi.description')
                }
            },
            live_patients: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.live_patients.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.live_patients.description')
                }
            },
            vehicles: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.vehicles.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.vehicles.description')
                }
            },
            patients: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.patients.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.patients.description')
                }
            },
            prisoners: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.prisoners.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.prisoners.description')
                }
            },
            special: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.special.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.special.description')
                }
            },
            expansions: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.expansions.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.expansions.description')
                }
            },
            show_100: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.show_100.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.show_100.description')
                }
            },
            credits: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.credits.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.credits.description')
                }
            },
            show_siwa: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.show_siwa.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.show_siwa.description')
                }
            },
            mission_time: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.mission_time.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.mission_time.description'),
                }
            }
        }
    };

    switch (I18n.locale) {
        case 'de':
            managed_settings.settings.water = {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.water.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.water.description')
                }
            };
            managed_settings.settings.hide_elw1 = {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.hide_elw1.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.hide_elw1.description')
                }
            };
            managed_settings.settings.hide_rw = {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.hide_rw.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.hide_rw.description')
                }
            };
            break;
        case 'en':
            break;
    }

    lssm.managedSettings.register(managed_settings);

    if (!window.location.href.match(/(missions\/\d+$)|(einsaetze\/\d+$)/g)) return;

    const clone = a => JSON.parse(JSON.stringify(a));
    const get_setting = key => lssm.managedSettings.getSetting(SETTINGS_STORAGE, key);

    const MISSIONS_FILE = lssm.getlink(`/modules/lss-missionHelper/missions.${I18n.locale}.json`, true);
    const MISSION_WRITE_FILE = `/modules/lss-missionHelper/loadMissionData.${I18n.locale}.js`;
    const MISSION_WINDOW = null === window.location.href.match(/einsaetze\/\d+/);
    let mission_help = $('#mission_help');
    const MISSION_TYPE = MISSION_WINDOW?mission_help[0]?mission_help.attr("href").split("/").pop().replace(/\?.*/,""):null:window.location.href.match(/\d+([^?]|$)/)[0];
    const MISSION_ID = window.location.href.replace(/\D/g, '');
    const SETTINGS = Object.keys(managed_settings.settings).reduce((result, key) => {
        result[key] = get_setting(key);
        return result;
    }, {});

    fetch(MISSIONS_FILE)
      .then(missions => missions.json())
      .then(missions => {
          const MISSIONS = clone(missions);
          const MISSION = MISSIONS[MISSION_TYPE];

          if (!MISSION && MISSION_TYPE && !MISSION_WINDOW) return lssm.loadScript(MISSION_WRITE_FILE, true);
          if (!MISSION_WINDOW) return;

          let markup = document.createElement('div');
          markup.id = LSSM_MH_PREFIX;
          markup.classList.add('alert', 'alert-warning', localStorage[`${LSSM_MH_PREFIX}_state`] || 'pinned');
          markup.innerHTML =
            `<div class="handle"></div>
<a class="pull-right" id="${LSSM_MH_PREFIX}_pin">
    <i class="glyphicon glyphicon-pushpin"></i>
</a>
<article class="content ${localStorage[`${LSSM_MH_PREFIX}_toggle`] === 'true' ? '' : 'hidden'}"></article>
<br class="unpinned">
<span id="${LSSM_MH_PREFIX}_toggle"><span class="${localStorage[`${LSSM_MH_PREFIX}_toggle`] === 'true' ? 'up' : 'down'}"></span></span>`;

          MISSION_WINDOW && localStorage[`${LSSM_MH_PREFIX}_state`] === 'pinned' ? pin_missionhelper(markup) : unpin_missionhelper(markup);

          if (!MISSION && MISSION_TYPE) return lssm.loadScript(MISSION_WRITE_FILE);

          let content = document.querySelector(`#${LSSM_MH_PREFIX} .content`);

          if (!MISSION_TYPE) {
              content.innerText = I18n.t('lssm.missionhelper.diy_mission');
              SETTINGS.mission_time && (content.innerHTML += `<span class="badge badge-secondary">${document.querySelector('#missionH1').attributes['data-original-title'].value}</span>&nbsp;`);
              return lssm_missionhelper_adjustPosition();
          }

          if (SETTINGS.name || SETTINGS.id || SETTINGS.type || SETTINGS.poi) {
              content.innerHTML += `<h3>${(SETTINGS.name && MISSION.name) || ''}<sub>${(SETTINGS.id && `&nbsp;<sub>ID: ${MISSION_ID}</sub>`) || ''}${(SETTINGS.type && `&nbsp;<sub>Type: ${MISSION_TYPE}</sub>`) || ''}${(MISSION.poi && SETTINGS.poi && `&nbsp;<sub>POI: ${I18n.t(`lssm.missionhelper.pois.${MISSION.poi}`)} <sub>[${MISSION.poi}]</sub></sub>`) || ''}</sub></h3><br>`;
          }

          if (MISSION.onlyRd) {
              content.innerHTML += `<small>${I18n.t('lssm.missionhelper.ambulance_only')}</small><br>`;
              (MISSION.transport || MISSION.specialisation) && (content.innerHTML += `${I18n.t('lssm.missionhelper.transport')}: ${(MISSION.transport && `${MISSION.transport}%`) || ""}${void 0 !== typeof MISSION.specialisation && ` (${MISSION.specialisation})`}`);
              MISSION.nef && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.vehicles.nef')}: ${MISSION.nef}%`);
              MISSION.mmtarts && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.vehicles.mmtarts')}: ${MISSION.mmtarts}%`);
              MISSION.rth && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.vehicles.rth')}: ${MISSION.rth}%`);
              MISSION.tragehilfe && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.tragehilfe')}: ${MISSION.tragehilfe}%`);
              return lssm_missionhelper_adjustPosition();
          }

          if (MISSION.siwa) {
              content.innerHTML += `<h4>${I18n.t('lssm.missionhelper.siwa')}</h4>`;
              if (!SETTINGS.show_siwa) return lssm_missionhelper_adjustPosition();
          }

          MISSION.vge && (content.innerHTML += `<h4>${I18n.t('lssm.missionhelper.vge')}</h4>`);

          let patients = document.querySelectorAll('.mission_patient').length;
          SETTINGS.live_patients && patients > 0 && (content.innerHTML += `<span class="badge" id="${LSSM_MH_PREFIX}_live_patients">${I18n.t('lssm.missionhelper.patients')}: ${patients}</span><br><br>`);

          if (SETTINGS.vehicles) {
              if (SETTINGS.hide_elw1 && MISSION.vehicles.elw1 && MISSION.vehicles.elw2) {
                  MISSION.vehicles.elw1 -= MISSION.vehicles.elw2;
                  if (MISSION.vehicles.elw1 <= 0) delete MISSION.vehicles.elw1;
              }
              if (SETTINGS.hide_rw && MISSION.vehicles.rw && MISSION.vehicles.lf) {
                  MISSION.vehicles.rw -= MISSION.vehicles.lf;
                  if (MISSION.vehicles.rw <= 0) delete MISSION.vehicles.rw;
              }
              for (let vehicle in MISSION.vehicles) {
                  if (!MISSION.vehicles.hasOwnProperty(vehicle)) continue;
                  content.innerHTML += `${MISSION.vehicles[vehicle]}x ${I18n.t(`lssm.missionhelper.vehicles.${vehicle}`)} ${(MISSION.percentages && MISSION.percentages[vehicle] && `(${MISSION.percentages[vehicle]}%)`) || (SETTINGS.show_100 && `(100%)`) || ''}<br>`;
              }
          }

          if (MISSION.patients && SETTINGS.patients) {
              content.innerHTML += `<br>${I18n.t('lssm.missionhelper.patients')}: ${(MISSION.patients.min !== MISSION.patients.max) && (`${MISSION.patients.min || 0} ${I18n.t('lssm.missionhelper.to')}`) || ''} ${MISSION.patients.max}<br>`;

              if (MISSION.patients.transport || MISSION.patients.specialisation) {
                  content.innerHTML += `${I18n.t('lssm.missionhelper.transport')}: ${(MISSION.patients.transport && `${MISSION.patients.transport}%`) || ""}${void 0 !== typeof MISSION.patients.specialisation && ` (${MISSION.patients.specialisation})`}`;
              }

              MISSION.patients.nef && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.vehicles.nef')}: ${MISSION.patients.nef}%`);
              MISSION.patients.mmtarts && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.vehicles.mmtarts')}: ${MISSION.patients.mmtarts}%`);
              MISSION.patients.rth && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.vehicles.rth')}: ${MISSION.patients.rth}%`);
              MISSION.patients.tragehilfe && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.tragehilfe')}: ${MISSION.patients.tragehilfe}%`);

              I18n.locale === 'de' && patients >= 5 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.lna')} (100%)`);
              I18n.locale === 'de' && patients >= 10 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.orgl')} (100%)`);
              I18n.locale === 'en' && patients >= 10 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.emschief')} (100%)`);
              I18n.locale === 'nl' && patients >= 3 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.ovdg')} (100%)`);
              content.innerHTML += '<br>';
          }

          SETTINGS.prisoners && MISSION.prisoners && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.prisoners')}: ${(MISSION.prisoners.min !== MISSION.prisoners.max) && (`${MISSION.prisoners.min || 0} ${I18n.t('lssm.missionhelper.to')}`)} ${MISSION.prisoners.max}<br>`);

          SETTINGS.special && MISSION.special && MISSION.special.averageMinimumEmployeesFire && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.averageMinimumEmployeesFire')}: ${MISSION.special.averageMinimumEmployeesFire}<br>`);
          SETTINGS.special && MISSION.special && MISSION.special.averageMinimumEmployeesPolice && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.averageMinimumEmployeesPolice')}: ${MISSION.special.averageMinimumEmployeesPolice}<br>`);
          SETTINGS.special && MISSION.special && MISSION.special.SWATPersonnel && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.SWATPersonnel')}: ${MISSION.special.SWATPersonnel}<br>`);

          if (SETTINGS.water && MISSION.water || SETTINGS.credits && MISSION.credits || SETTINGS.mission_time) {
              content.innerHTML += '<br>';
              SETTINGS.credits && MISSION.credits && (content.innerHTML += `<span class="badge badge-secondary">~ ${MISSION.credits.toLocaleString()} Credits</span>&nbsp;`);
              SETTINGS.water && MISSION.water && (content.innerHTML += `<span class="badge badge-secondary">${I18n.t('lssm.missionhelper.water')}: ${MISSION.water.toLocaleString()} Liter</span>&nbsp;`);
              SETTINGS.mission_time && (content.innerHTML += `<span class="badge badge-secondary">${document.querySelector('#missionH1').attributes['data-original-title'].value}</span>&nbsp;`);
              content.innerHTML += '<br>';
          }

          if (SETTINGS.expansions && MISSION.expansions) {
              content.innerHTML += '<br>';
              for (let i of Object.keys(MISSION.expansions)) {
                  let id = MISSION.expansions[i];
                  content.innerHTML += `<a href="../einsaetze/${id}?mission_id=${MISSION_ID}"><span class="badge">${MISSIONS[id] ? MISSIONS[id].name : id}</span></a>`;
              }
          }

          lssm_missionhelper_adjustPosition();
      });

    let handle_overlap = element => {
        let missionhelp = document.querySelector(`#${LSSM_MH_PREFIX}`);
        if (!missionhelp||!missionhelp.classList.contains('unpinned')) return;
        let element_bounding = element.getBoundingClientRect();
        let missionhelp_bounding = missionhelp.getBoundingClientRect();
        missionhelp.style.opacity = (element_bounding.right > missionhelp_bounding.left &&
          element_bounding.left < missionhelp_bounding.right &&
          element_bounding.bottom > missionhelp_bounding.top &&
          element_bounding.top < missionhelp_bounding.bottom) ? 0.1 : null;
    };

    document.querySelectorAll('.aao, .vehicle_group').forEach(el => {
        el.addEventListener('mouseenter', aao => {
            handle_overlap(aao.currentTarget);
        });
        el.addEventListener('mouseleave', () => {
            let missionhelp = document.querySelector(`#${LSSM_MH_PREFIX}`);
            missionhelp.style.opacity = null;
        });
    });
    document.querySelectorAll('#new_mission_reply, #mission_replies').forEach(el => {
        el.addEventListener('mouseenter', element => {
            handle_overlap(element.currentTarget);
        });
        el.addEventListener('mouseleave', () => {
            let missionhelp = document.querySelector(`#${LSSM_MH_PREFIX}`);
            missionhelp.style.opacity = null;
        });
    });

    $('head').append(
      `<style>
#${LSSM_MH_PREFIX} {
    transition: 100ms linear;
    min-width: 100px;
}
#${LSSM_MH_PREFIX} .content {
    height: auto;
    margin-bottom: 0.625em;
}
#${LSSM_MH_PREFIX} .content.hidden {
    height: 0;
}
#${LSSM_MH_PREFIX}.pinned {
    position: unset;
    max-width: unset;
}
#${LSSM_MH_PREFIX}.pinned .handle {
    display: none;
}
#${LSSM_MH_PREFIX}.pinned br.unpinned {
    display: none;
}
#${LSSM_MH_PREFIX}.unpinned {
    position: fixed;
    top: 3%;
    max-width: calc(100%/3);
}
#${LSSM_MH_PREFIX}.unpinned .handle {
    width: 100%;
    height: 5px;
    cursor: move;
    display: block;
    background: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 10px,
        #ccc 10px,
        #ccc 20px
    )
}
#${LSSM_MH_PREFIX}_toggle {
    min-width: 100px;
    cursor: pointer;
    width: 100%;
    height: 0.625em;
    position: absolute;
    bottom: 5%;
    left: 0;
}
#${LSSM_MH_PREFIX}_toggle span {
    border: 3px solid #4a4a4a;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    transform-origin: center;
    left: 50%;
    width: 0.625em;
    position: relative;
}
#${LSSM_MH_PREFIX}_toggle span.up {
    transform: rotate(135deg);
}
#${LSSM_MH_PREFIX}_toggle span.down {
    transform: rotate(-45deg);
}
#${LSSM_MH_PREFIX}_pin {
    cursor: pointer;
}

.alert-missing-vehicles:hover ~ #${LSSM_MH_PREFIX} {
    opacity: 0.1;
}

#mission_reply_content {
    position: unset;
}
</style>`
    );
})(I18n);

let pin_missionhelper = (markup) => {
    let missionhelper = document.querySelector(`#${LSSM_MH_PREFIX}`) || markup;
    document.querySelector('#mission-form').prepend(missionhelper);
    missionhelper.classList.replace('unpinned', 'pinned');
    let toggle_btn = document.querySelector(`#${LSSM_MH_PREFIX}_toggle span.down`);
    toggle_btn && toggle_btn.click();
    document.querySelector(`#${LSSM_MH_PREFIX}_pin`).onclick = () => unpin_missionhelper(null);
    localStorage[`${LSSM_MH_PREFIX}_state`] = 'pinned';
};

let unpin_missionhelper = (markup) => {
    let missionhelper = document.querySelector(`#${LSSM_MH_PREFIX}`) || markup;
    document.querySelector('#iframe-inside-container').append(missionhelper);
    missionhelper.classList.replace('pinned', 'unpinned');
    document.querySelector(`#${LSSM_MH_PREFIX}_pin`).onclick = () => pin_missionhelper(null);
    $(`#${LSSM_MH_PREFIX}`).draggable({
        handle: '.handle',
        containment: '#iframe-inside-container',
        scroll: true,
        stack: '#iframe-inside-container'
    });
    document.querySelector(`#${LSSM_MH_PREFIX}_toggle`).onclick = () => {
        document.querySelector(`#${LSSM_MH_PREFIX} .content`).classList.toggle('hidden');
        let span = document.querySelector(`#${LSSM_MH_PREFIX}_toggle span`);
        span.classList.toggle('up');
        span.classList.toggle('down');
        localStorage[`${LSSM_MH_PREFIX}_toggle`] = span.classList.contains('up');
        lssm_missionhelper_adjustPosition();
    };
    localStorage[`${LSSM_MH_PREFIX}_state`] = 'unpinned';
};
