const LSSM_MH_PREFIX = `missionhelper`;
const lssm_missionhelper_adjustPosition = () => {
    let missionhelper = document.querySelector(`#${LSSM_MH_PREFIX}`);
    missionhelper.style.left = `${document.querySelector('#iframe-inside-container').clientWidth * 0.97 - missionhelper.clientWidth}px`;
};

(I18n => {

    I18n.translations.de_DE.lssm.missionhelper = {
        diy_mission: 'Dieser Einsatz scheint ein selbst erstellter Verbandsgroßeinsatz zu sein.',
        siwa: 'Sicherheitswache',
        vge: 'VerbandsGroßEinsatz',
        patients: 'Patienten',
        prisoners: 'Gefangene',
        water: 'Wasserbedarf',
        to: 'bis zu',
        exp: 'Ausbreitungen',
        fwm: 'Folgeeinsätze',
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
            followup: {
                label: 'Folgeeinsätze',
                description: 'Zeigt, was der Einsatz für Folgeinsätze generieren kann'
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
            ambulance: 'RTW',
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
            gwsan: 'GW-San',
            gwwa: 'GW-Wasserrettung'
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
            "Eishalle",
            "Holzverarbeitung"
        ]
    };

    I18n.translations.en_US.lssm.missionhelper = {
        diy_mission: 'This mission seems to be a large scale alliance mission.',
        siwa: 'Planned mission',
        vge: 'Large scale alliance mission',
        patients: 'Patients',
        prisoners: 'Prisoners',
        to: 'up to',
        exp: 'Spreads',
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
            ambulance: "Ambulances",
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
            rth: "HEMS",
            policeHeli: "Police Helicopter",
            emschief: "EMS Chief",
            brushtruck: "Wildland fire engines"
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
            "Parking Garage",
            "Propane depot"
        ]
    };

    I18n.translations.en_GB.lssm.missionhelper = {
        diy_mission: 'This mission seems to be a large scale alliance mission.',
        exp: 'Spreads',
        fwm: 'Follow-up missions',
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
            followup: {
                label: 'Follow-up missions',
                description: 'Shows what the insert can generate for follow-up missions'
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
            rth: "HEMS",
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
            "Parking Garage",
            "Silo",
            "Heathland"
        ]
    };

    I18n.translations.en_AU.lssm.missionhelper = {
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
            heavyRescue: "Rescue",
            air: "Breathing Apparatus Support Unit",
            bchief: "Support Vehicle",
            tanker: "Water Tanker",
            hazmat: "HazMat",
            mcv: "Mobile Command Vehicle",
            police: "Police Car",
            arff: "ARFF",
            rth: "Air Ambulance",
            k9: "K-9 Unit",
            pmotorcycle: "Police Motorcycle",
            swatArmoured: "SWAT Armoured Vehicle",
            swatSuv: "SWAT SUV",
            policeHeli: "Police Helicopter",
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

    I18n.translations.es_ES.lssm.missionhelper = {
        diy_mission: 'Esta misión parece ser una misión de alianza a gran escala.',
        siwa: 'Misión planificada',
        vge: 'misión de alianza a gran escala',
        patients: 'pacientes',
        prisoners: 'presos',
        water: 'Wasserbedarf',
        to: 'hasta',
        exp: 'Diferenciales',
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
            mcv: "unidades de mando",
            tanker: "camiones cisterna",
            hazmat: "vehículos de materiales peligrosos",
            police: "coches patrulla",
            rth: "Helicóptero HSR",
            arff: "CBA",
            policeHeli: "Police Helicopter",
            ambulance: "Ambulancia"
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
			"Granero"
        ]
    };

    I18n.translations.es_MX.lssm.missionhelper = {
        diy_mission: 'Esta misión parece ser una misión de alianza a gran escala.',
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
            rth: "Helicóptero HSR",
            arff: "CBA",
            policeHeli: "Police Helicopter",
            ambulance: "Ambulancia"
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
			"Granero"
        ]
    };

    I18n.translations.pt_PT.lssm.missionhelper = {
        diy_mission: 'Esta missão parece ser uma missão de aliança em larga escala.',
        siwa: 'Missão planeada',
        vge: 'missão de aliança em larga escala',
        patients: 'pacientes',
        prisoners: 'detentos',
        to: 'até',
        exp: 'Divulgação',
        ambulance_only: 'Esta misión es sólo de ambulancias.!',
        title: 'Missionhelper',
        transport: 'levar',
        settings: {
            name: {
                label: 'Primeiro nome',
                description: 'Mostre o nome da missão no ajudante.'
            },
            id: {
                label: 'ID',
                description: 'Exiba o ID da missão no assistente.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Exiba o ID do tipo de missão no assistente.'
            },
            poi: {
                label: 'POI',
                description: 'Indique no assistente em que POI está a operação.'
            },
            live_patients: {
                label: 'Número de pacientes',
                description: 'Mostra ao vivo quantos pacientes estão em uso no momento.'
            },
            vehicles: {
                label: 'Veículos',
                description: 'Mostre os veículos necessários.'
            },
            patients: {
                label: 'informação do paciente',
                description: 'Mostrar informações sobre pacientes (potenciais).'
            },
            prisoners: {
                label: 'informações sobre detentos',
                description: 'Exibe informações sobre (potenciais) detentos.'
            },
            special: {
                label: 'Outra informação',
                description: 'Exibe informações especiais, como o número médio mínimo de pessoal necessário.'
            },
            expansions: {
                label: 'distribuições',
                description: 'Mostre o que a aposta pode alcançar. (Mostrar apenas dispersão simples)'
            },
            show_100: {
                label: 'Mostrar 100% de chance',
                description: 'Mostra a probabilidade de um veículo, mesmo que seja 100%.'
            },
            credits: {
                label: 'Ganho médio',
                description: 'Mostra os ganhos médios que você ganha com esta tarefa.'
            },
            show_siwa: {
                label: 'Requisitos dos guardas de segurança',
                description: 'Ele também mostra os requisitos para guardas de segurança no assistente.'
            },
            mission_time: {
                label: 'Tempo de criação',
                description: 'Mostra a data e hora em que a missão foi criada.'
            }
        },
        vehicles: {
            truck: "Caminhões de bombeiro",
            platform: "Caminhões plataforma",
            heavyRescue: "Veículos de resgate pesado",
            air: "Mobile Air",
            bchief: "Viaturas de batalhão",
            mcv: "vehículos de mando",
            tanker: "Caminhões pipa",
            hazmat: "Viaturas de produtos perigosos",
            police: "Viaturas de polícia",
            rth: "Heli INEM",
            arff: "Defesa Civil",
            policeHeli: "Police Helicopter",
            ambulance: "Ambulancia"
        },
        pois: [
            "Parque",
            "Lago",
            "Hospital",
            "Floresta",
            "Ponto de ônibus",
            "Ponto de bonde",
            "Estação de trem \\(tráfego regional\\)",
            "Estação de trem \\(tráfego regional e viagem de longa distância\\)",
            "Estação de mercadorias",
            "Supermercado \\(pequeno\\)",
            "Supermercado \\(grande\\)",
            "Posto de combustível",
            "Escola",
            "Museu",
            "Shopping",
            "Oficina mecânica",
            "Saída de rodovia",
            "Mercado de natal",
            "Armazém",
            "Discoteca",
            "Estádio",
            "Fazenda",
            "Edifício comercial",
            "Piscina",
            "Railroad Crossing",
            "Teatro",
            "Feira",
            "Rio",
            "Aeroporto pequeno \\(pista\\)",
            "Aeroporto grande \\(pista\\)",
            "Terminal de aeroporto",
            "Banco",
            "Depósito",
            "Ponte",
            "Lanchonete de fast food",
            "Porto de carga",
            "Centro de reciclagem",
            "Arrancha-céus",
            "Doca de cruzeiro",
            "Marina",
            "Passagem de nível",
            "Túnel",
            "Armazém refrigerado",
            "Usina elétrica",
            "Fábrica",
            "Ferro velho",
            "Estação de metrô",
            "Tanque de armazenamento químico pequeno",
            "Tanque de armazenamento químico grande",
            "Hotel",
            "Bar",
            "Aterro sanitário",
            "Garagem de estacionamento",
			"Silo"
        ]
    };

    I18n.translations.pt_BR.lssm.missionhelper = {
        diy_mission: 'Esta missão parece ser uma missão de aliança em larga escala.',
        settings: {
            name: {
                label: 'Primeiro nome',
                description: 'Mostre o nome da missão no ajudante.'
            },
            id: {
                label: 'ID',
                description: 'Exiba o ID da missão no assistente.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Exiba o ID do tipo de missão no assistente.'
            },
            poi: {
                label: 'POI',
                description: 'Indique no assistente em que POI está a operação.'
            },
            live_patients: {
                label: 'Número de pacientes',
                description: 'Mostra ao vivo quantos pacientes estão em uso no momento.'
            },
            vehicles: {
                label: 'Veículos',
                description: 'Mostre os veículos necessários.'
            },
            patients: {
                label: 'informação do paciente',
                description: 'Mostrar informações sobre pacientes (potenciais).'
            },
            prisoners: {
                label: 'informações sobre detentos',
                description: 'Exibe informações sobre (potenciais) detentos.'
            },
            special: {
                label: 'Outra informação',
                description: 'Exibe informações especiais, como o número médio mínimo de pessoal necessário.'
            },
            expansions: {
                label: 'distribuições',
                description: 'Mostre o que a aposta pode alcançar. (Mostrar apenas dispersão simples)'
            },
            show_100: {
                label: 'Mostrar 100% de chance',
                description: 'Mostra a probabilidade de um veículo, mesmo que seja 100%.'
            },
            credits: {
                label: 'Ganho médio',
                description: 'Mostra os ganhos médios que você ganha com esta tarefa.'
            },
            show_siwa: {
                label: 'Requisitos dos guardas de segurança',
                description: 'Ele também mostra os requisitos para guardas de segurança no assistente.'
            },
            mission_time: {
                label: 'Tempo de criação',
                description: 'Mostra a data e hora em que a missão foi criada.'
            }
        },
        vehicles: {
            truck: "Caminhões de bombeiro",
            platform: "Caminhões plataforma",
            heavyRescue: "Veículos de resgate pesado",
            air: "Mobile Air",
            bchief: "Viaturas de batalhão",
            mcv: "vehículos de mando",
            tanker: "Caminhões pipa",
            hazmat: "Viaturas de produtos perigosos",
            police: "Viaturas de polícia",
            rth: "Helicóptero HSR",
            arff: "Defesa Civil",
            policeHeli: "Police Helicopter",
            ambulance: "Ambulancia"
        },
        pois: [
            "Parque",
            "Lago",
            "Hospital",
            "Floresta",
            "Ponto de ônibus",
            "Ponto de bonde",
            "Estação de trem \\(tráfego regional\\)",
            "Estação de trem \\(tráfego regional e viagem de longa distância\\)",
            "Estação de mercadorias",
            "Supermercado \\(pequeno\\)",
            "Supermercado \\(grande\\)",
            "Posto de combustível",
            "Escola",
            "Museu",
            "Shopping",
            "Oficina mecânica",
            "Saída de rodovia",
            "Mercado de natal",
            "Armazém",
            "Discoteca",
            "Estádio",
            "Fazenda",
            "Edifício comercial",
            "Piscina",
            "Railroad Crossing",
            "Teatro",
            "Feira",
            "Rio",
            "Aeroporto pequeno \\(pista\\)",
            "Aeroporto grande \\(pista\\)",
            "Terminal de aeroporto",
            "Banco",
            "Depósito",
            "Ponte",
            "Lanchonete de fast food",
            "Porto de carga",
            "Centro de reciclagem",
            "Arrancha-céus",
            "Doca de cruzeiro",
            "Marina",
            "Passagem de nível",
            "Túnel",
            "Armazém refrigerado",
            "Usina elétrica",
            "Fábrica",
            "Ferro velho",
            "Estação de metrô",
            "Tanque de armazenamento químico pequeno",
            "Tanque de armazenamento químico grande",
            "Hotel",
            "Bar",
            "Aterro sanitário",
            "Garagem de estacionamento",
			"Silo"
        ]
    };

    I18n.translations.sv_SE.lssm.missionhelper = {
        diy_mission: 'Detta uppdrag verkar vara ett alliansuppdrag i stor skala.',
        siwa: 'Planerat uppdrag',
        vge: 'Stora alliansuppdrag',
        patients: 'patienter',
        prisoners: 'fångar',
        to: 'upp till',
        exp: 'bredbara',
        SWATPersonnel: "Nödvändig insatsstyrka",
        averageMinimumEmployeesPolice: 'i genomsnitt Polispersonal',
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
            air: "Fordon",
            bchief: "brandchefsbilar",
            tanker: "tankbilar",
            hazmat: "farligt gods-fordon",
            mcv: "Ledningsfordon",
            police: "polisbilar",
            ambulance: "Ambulans",
            arff: "ARFF",
            rth: "Ambulanshelikopter",
            k9: "Hundenhet",
            pmotorcycle: "Polismotorcykel",
            swatArmoured: "Bepansrat insatsfordon",
            swatSuv: "Insatsfordon",
            policeHeli: "Polishelikopter"
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
            "Parkeringshus",
			"Silo"
        ]
    };

    I18n.translations.da_DK.lssm.missionhelper = {
        diy_mission: 'Denne mission synes at være en alliansemission i stor skala.',
        siwa: 'Planlagt mission',
        vge: 'Stor skala alliance mission',
        patients: 'Patienter',
        prisoners: 'Fanger',
        to: 'op til',
        exp: 'Sprede',
        SWATPersonnel: "Nødvendige AKS personel",
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
            platform: "Stigevogn",
            heavyRescue: "pionertjenesten",
            air: "højtrykskompressor",
            bchief: "Holdleder-køretøjer",
            tanker: "vandtankvogne",
            hazmat: "gift- og kemikaliekøretøjer",
            mcv: "ledelses- og kommunikationsmoduler",
            police: "politibiler",
            ambulance: "Ambulans",
            arff: "ARFF",
            k9: "Hundepatrulje",
            pmotorcycle: "Politimotorcykel",
            swatArmoured: "AKS Pansret mandskabsvogn",
            swatSuv: "AKS Patruljevogn",
            policeHeli: "Politihelikopter",
            rth: "Rednings Helikopter",
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
            "Parkeringshus",
			"Silo"
        ]
    };

    I18n.translations.cs_CZ.lssm.missionhelper = {
        diy_mission: 'Tato mise se jeví jako rozsáhlá alianční mise.',
        siwa: 'Plánovaná mise',
        vge: 'Velká alianční mise',
        patients: 'Pacienti',
        prisoners: 'Vězni',
        to: 'až do',
        exp: 'Šíření',
        SWATPersonnel: "Potřebný personál URNY",
        ambulance_only: 'Tato mise je pouze sanitka!',
        title: 'Pomocník mise',
        transport: 'Doprava',
        settings: {
            name: {
                label: 'název',
                description: 'Zobrazuje název mise v pomocníkovi.'
            },
            id: {
                label: 'ID',
                description: 'Zobrazuje ID mise v pomocníkovi.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Zobrazuje ID typu mise v pomocníkovi.'
            },
            poi: {
                label: 'POI',
                description: 'Označuje v pomocníkovi, na kterém POI je operace.'
            },
            live_patients: {
                label: 'Počet pacientů',
                description: 'Ukazuje živě, kolik pacientů se v současné době používá.'
            },
            vehicles: {
                label: 'Vozidla',
                description: 'Zobrazí požadovaná vozidla.'
            },
            patients: {
                label: 'informace o pacientovi',
                description: 'Zobrazuje informace o (potenciálních) pacientech.'
            },
            prisoners: {
                label: 'informace vězně',
                description: 'Zobrazuje informace o (potenciálních) vězňech.'
            },
            special: {
                label: 'Jiná informace',
                description: 'Zobrazuje speciální informace, například průměrný minimální požadovaný počet zaměstnanců.'
            },
            expansions: {
                label: 'distribuce',
                description: 'Ukazuje, na co se může sázka rozšířit. (Zobrazuje pouze jednoduché šíření)'
            },
            show_100: {
                label: 'Zobrazit 100% pravděpodobnost',
                description: 'Zobrazuje pravděpodobnost pro vozidlo, i když je to 100%.'
            },
            credits: {
                label: 'Průměrné příjmy',
                description: 'Zobrazuje průměrné příjmy, které získáte za tuto úlohu.'
            },
            show_siwa: {
                label: 'Požadavky na bezpečnostní strážce',
                description: 'Ukazuje také požadavky na bezpečnostní strážce v pomocníkovi.'
            },
            mission_time: {
                label: 'Čas vytvoření',
                description: 'Zobrazuje datum a čas, kdy byla mise vytvořena.'
            }
        },
        vehicles: {
            truck: "hasičské vozy",
            platform: "automobilové žebříky",
            heavyRescue: "těžká technická vozidla",
            air: "Mobile Air",
            bchief: "velitelské automobily",
            tanker: "kombinované hasící automobily",
            hazmat: "vozidla pro práci s nebezpečnými látkami",
            mcv: "velitelská vozidla",
            police: "policejní automobily",
            rth: "Vrtulník LZS",
            ambulance: "Sanitkat",
            arff: "letištní speciály",
            k9: "Vozidlo Kynologů PČR",
            pmotorcycle: "Policejní motocykl",
            swatArmoured: "Obrněné vozidlo URNA",
            swatSuv: "URNA SUV",
            policeHeli: "Policejní vrtulník",
            rth: "vrtulník"
        },
        pois: [
            "Park",
            "Jezero",
            "Nemocnice",
            "Les",
            "Zastávka autobusu",
            "Zastávka tramvaje",
            "Železniční stanice \\(regionální doprava\\)",
            "Železniční stanice \\(regionální a dálková doprava\\)",
            "Nákladové nádraží",
            "Supermarket \\(malý\\)",
            "Supermarket \\(velký\\)",
            "Čerpací stanice",
            "Škola",
            "Muzeum",
            "Nákupní centrum",
            "Autoservis",
            "Dálniční sjezd",
            "Vánoční trh",
            "Skladiště",
            "Diskotéka",
            "Stadion",
            "Farma",
            "Kancelářská budova",
            "Plovárna",
            "Järnvägsövergång",
            "Divadlo",
            "Zábavní park",
            "Řeka",
            "Malé letiště \\(ranvej\\)",
            "Velké letiště \\(ranvej\\)",
            "Letištní terminál",
            "Banka",
            "Velkosklad",
            "Most",
            "Rychlé občerstvení",
            "Nákladní přístav",
            "Sběrný dvůr",
            "Výšková budova",
            "Přístaviště výletních lodí",
            "Malý přístav",
            "Železniční přejezd",
            "Tunel",
            "Chladírenský sklad",
            "Elektrárna",
            "Továrna",
            "Šrotiště",
            "Stanice metra",
            "Malá chemická skladovací nádrž",
            "Velká chemická skladovací nádrž",
            "Hotel",
            "Bar",
            "Skládka",
            "Kryté parkoviště",
			"Silo"
        ]
    };

    I18n.translations.tr_TR.lssm.missionhelper = {
        diy_mission: 'Bu misyon büyük ölçekli bir ittifak görevi gibi görünüyor.',
        siwa: 'Planlanan görev',
        vge: 'Büyük ölçekli ittifak misyonu',
        patients: 'hastalar',
        prisoners: 'Mahkumlar',
        to: 'kadar',
        exp: 'Yayıldı',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Bu görev sadece ambulanstır!',
        title: 'Misyonhelper',
        transport: 'Taşıma',
        settings: {
            name: {
                label: 'isim',
                description: 'Yardımcıdaki görevin adını gösterir.'
            },
            id: {
                label: 'İD',
                description: 'Yardımcıdaki görevin kimliğini görüntüler.'
            },
            type: {
                label: 'TYP kimliği',
                description: 'Yardımcıdaki görev türünün kimliğini görüntüler.'
            },
            poi: {
                label: 'POI',
                description: 'Yardımcıda işlemin hangi İÇN olduğunu gösterir.'
            },
            live_patients: {
                label: 'Hasta sayısı',
                description: 'Şu anda kaç hastanın kullanımda olduğunu canlı gösterir.'
            },
            vehicles: {
                label: 'Araçlar',
                description: 'Gerekli araçları görüntüler.'
            },
            patients: {
                label: 'hasta bilgisi',
                description: '(Potansiyel) hastalar hakkında bilgi gösterir.'
            },
            prisoners: {
                label: 'mahkum bilgisi',
                description: '(Potansiyel) mahkumlar hakkında bilgi gösterir.'
            },
            special: {
                label: 'Diğer bilgiler',
                description: 'Gerekli ortalama asgari personel sayısı gibi özel bilgileri görüntüler.'
            },
            expansions: {
                label: 'dağılımları',
                description: 'Bahsin neye yayılabileceğini gösterir. (Yalnızca basit yayılımı gösterir)'
            },
            show_100: {
                label: '% 100 olasılığı göster',
                description: 'Bir aracın% 100 olsa bile olasılığını gösterir.'
            },
            credits: {
                label: 'Ortalama kazanç',
                description: 'Bu ödev için aldığınız ortalama kazançları gösterir.'
            },
            show_siwa: {
                label: 'Güvenlik görevlilerinin gereksinimleri',
                description: 'Yardımcıdaki güvenlik görevlilerinin gereksinimlerini de gösterir.'
            },
            mission_time: {
                label: 'Yaratılış Zamanı',
                description: 'Görevin oluşturulduğu tarih ve saati gösterir.'
            }
        },
        vehicles: {
            truck: "itfaiye aracı",
            platform: "Platformlu Kamyon",
            heavyRescue: "Büyük Kurtarma",
            air: "Mobile Air",
            bchief: "Tabur Amiri",
            tanker: "Su Tankerleri",
            hazmat: "Tehlikeli Madde",
            mcv: "Mobil Komuta",
            police: "Polis Arabaları",
            rth: "HEMS",
            ambulance: "Sanitkat",
            arff: "ARFF",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            policeHeli: "Police Helicopter",
        },
        pois: [
            "Park",
            "Göl",
            "Hastane",
            "Orman",
            "Otobüs durağı",
            "Tramvay durağı",
            "Tren istasyonu \\(bölgesel trafik\\)",
            "Tren istasyonu \\(bölgesel trafik ve uzun mesafeli yolculuk\\)",
            "Yük istasyonu",
            "Süpermarket \\(küçük\\)",
            "Süpermarket \\(büyük\\)",
            "Akaryakıt istasyonu",
            "Okul",
            "Müze",
            "Alışveriş Merkezi",
            "Oto tamirhanesi",
            "Otoyol çıkışı",
            "Noel pazarı",
            "Depo",
            "Diskotek",
            "Stadyum",
            "Çiftlik",
            "Ofis binası",
            "Yüzme havuzu",
            "Järnvägsövergång",
            "Tiyatro",
            "Lunapark",
            "Nehir",
            "Küçük Havalimanı \\(Uçak Pisti\\)",
            "Büyük Havalimanı \\(Uçak Pisti\\)",
            "Havalimanı Terminali",
            "Banka",
            "Ambar",
            "Köprü",
            "Fast Food Restoranı",
            "Kargo limanı",
            "Geri Dönüşüm Merkezi",
            "Gökdelen",
            "Yolcu gemisi limanı",
            "Marina",
            "Demiryolu Geçidi",
            "Tünel",
            "Soğuk Hava Ambarı",
            "Enerji Santrali",
            "Fabrika",
            "Hurdalık",
            "Metro istasyonu",
            "Küçük kimyasal depo tankı",
            "Büyük kimyasal depo tankı",
            "Otel",
            "Bar",
            "Çöplük",
            "Katlı Otopark",
			"Ambar"
        ]
    };

    I18n.translations.nb_NO.lssm.missionhelper = {
        diy_mission: 'Dette oppdraget ser ut til å være et allianseoppdrag i stor skala.',
        siwa: 'Planlagt oppdrag',
        vge: 'Alliansemisjon i stor skala',
        patients: 'Pasienter',
        prisoners: 'innsatte',
        to: 'opp til',
        exp: 'Spre',
        SWATPersonnel: "Nødvendig delta-personell",
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
            platform: "høyderedskap",
            heavyRescue: "redningsbiler",
            air: "røykdykkere",
            bchief: "Bataljonsjefbil",
            tanker: "tankbiler",
            hazmat: "CBRN",
            mcv: "utryckningsfordon",
            police: "politibiler",
            ambulance: "Ambulans",
            arff: "brann- og redningstjeneste for fly",
            k9: "Hundepatrulje",
            pmotorcycle: "Politimotorsykkel",
            swatArmoured: "Pansret kjøretøy",
            swatSuv: "Delta kjøretøy",
            policeHeli: "Politihelikopter",
            rth: "Räddningshelikopter"
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
            "Parkeringshus",
			"Silo"
        ]
    };

    I18n.translations.pl_PL.lssm.missionhelper = {
        diy_mission: 'Ta misja wydaje się być misją sojuszników na dużą skalę.',
        siwa: 'Planowana misja',
        vge: 'Misja sojuszu na dużą skalę',
        patients: 'Pacjenci',
        prisoners: 'Więźniowie',
        to: 'aż do',
        exp: 'Rozprzestrzeniania',
        SWATPersonnel: "Wymagani policjanci SPKP",
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
            bchief: "Oficera Operacyjnego",
            tanker: "cysterny z wodą",
            hazmat: "SP Rchem",
            mcv: "samochody dowodzenia i łączności",
            police: "radiowozy",
            rth: "śmigłowiec LPR",
            ambulance: "Ambulans P",
            arff: "SP LSP",
            k9: "Jednostki K-9",
            pmotorcycle: "Motocykl Policyjny",
            swatArmoured: "Opancerzony Pojazd SPKP",
            swatSuv: "SUV SPKP",
            policeHeli: "Helikopter Policyjny",
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
            "Parking",
			"Silos"
        ]
    };

    I18n.translations.it_IT.lssm.missionhelper = {
        diy_mission: 'Questa missione sembra essere una missione su larga scala dell\'alleanza..',
        siwa: 'Missione pianificata',
        vge: 'Missione dell\'alleanza su larga scala',
        patients: 'Pazienti',
        prisoners: 'Prigionieri',
        to: 'fino',
        exp: 'Espansione',
        SWATPersonnel: "Needed SWAT Personnel",
		averageMinimumEmployeesFire: 'Vigili del Fuoco richiesti',
        ambulance_only: 'Questa missione e\' riservata alle ambulanze.!',
        title: 'Missionhelper',
        transport: 'Trasporto',
        settings: {
            name: {
                label: 'Nome',
                description: 'Mostra il nome della missione nell\'aiuto.'
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
            air: "Carro aria",
            bchief: "Funzionario",
            tanker: "Autobotti",
            hazmat: "Mezzi N.B.C.R.",
            mcv: "Mobile Command Vehicle",
            police: "Volanti della polizia",
            rth: "elisoccorso",
            ambulance: "Ambulanza Medicalizzata",
            arff: "Flotta aerea antincendio AIB",
            k9: "unitò cinofila antidroga",
            pmotorcycle: "Moto della Polizia",
            swatArmoured: "furgone Antisommossa",
            swatSuv: "Suv UOPI",
            policeHeli: "elicottero della polizia"
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
            "Parcheggio coperto",
			"Silos"
        ]
    };

    I18n.translations.fr_FR.lssm.missionhelper = {
        diy_mission: 'Cette mission semble être une mission d\'alliance à grande échelle.',
        siwa: 'Mission prévue',
        vge: 'Mission d\'alliance à grande échelle',
        patients: 'Patients',
        prisoners: 'prisonniers',
        to: 'jusqu\'à',
        exp: 'Propagation',
        SWATPersonnel: "Needed SWAT Personnel",
        averageMinimumEmployeesFire: 'Moyenne minimale Pompiers',
        averageMinimumEmployeesHoehen: 'Spécialistes IMP requis',
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
            platform: "Moyen Elévateur Aérien",
            heavyRescue: "Véhicule de secours routier",
            air: "Assistance respiratoire",
            bchief: "Chefs de groupe",
            tanker: "Camions-citernes",
            hazmat: "risques technologiques",
            mcv: "poste de commandement",
            police: "Voitures de police",
            rth: "Dragon",
            ambulance: "Ambulances",
            gkw: 'Véhicule Tout Usage',
            arff: "ARFF",
            hoehen: "VGRIMP"
        },
        pois: [
            "Parc",
            "Lac",
            "Hôpital",
            "Forêt",
            "Arrêt de bus",
            "Arrêt de tram",
            "Gare ferroviaire (trajets régionaux)",
            "Gare ferroviaire (trajets régionaux et grandes lignes)",
            "Supérette",
            "Supermarché (petit)",
            "Supermarché (grand)",
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
            "Petit aéroport (piste)",
            "Grand aéroport (piste)",
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
            "Parking couvert",
            "Silo"
        ]
    };

    I18n.translations.ru_RU.lssm.missionhelper = {
        diy_mission: 'Эта миссия, похоже, является широкомасштабной миссией альянса.',
        siwa: 'Запланированная миссия',
        vge: 'Запланированная миссия',
        patients: 'Пациенты',
        prisoners: 'Заключенные',
        to: 'вплоть до',
        exp: 'Распространяться',
        SWATPersonnel: "Требуемый личный состав спецназа",
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
            arff: "АПСР",
            rth: "вертолёта",
            k9: "Автомобиль с полицейской собакой",
            pmotorcycle: "Полицейский мотоцикл",
            swatArmoured: "Бронемашина спецназа",
            swatSuv: "Внедорожник спецназа",
            policeHeli: "Полицейский вертолет",
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
            "Паркинг",
			"Силос"
        ]
    };

    I18n.translations.uk_UA.lssm.missionhelper = {
        diy_mission: 'Ця місія, здається, є масштабною місією альянсу.',
        siwa: 'Запланована місія',
        vge: 'Велика місія альянсу',
        patients: 'Пацієнти',
        prisoners: 'В\'язні',
        to: 'аж до',
        exp: 'Поширення',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Ця місія є лише швидкою допомогою!',
        title: 'Місіонер',
        transport: 'Транспорт',
        settings: {
            name: {
                label: 'Ім\'я',
                description: 'Показує ім\'я місії у помічнику.'
            },
            id: {
                label: 'Посвідчення особи',
                description: 'Відображає ідентифікатор місії у помічнику.'
            },
            type: {
                label: 'ІДЕНТИФІКАТОР ТИПУ',
                description: 'Відображає ідентифікатор типу місії у помічнику.'
            },
            poi: {
                label: 'Потім',
                description: 'Вказує в помічнику, на якій POI знаходиться операція.'
            },
            live_patients: {
                label: 'Кількість пацієнтів',
                description: 'Показує в прямому ефірі, скільки пацієнтів зараз використовуються.'
            },
            vehicles: {
                label: 'Транспортні засоби',
                description: 'Відображає необхідні транспортні засоби.'
            },
            patients: {
                label: 'інформація про пацієнта',
                description: 'Показує інформацію про (потенційних) пацієнтів.'
            },
            prisoners: {
                label: 'інформація про в\'язнів',
                description: 'Показує інформацію про (потенційних) ув\'язнених.'
            },
            special: {
                label: 'Інша інформація',
                description: 'Відображає спеціальну інформацію, таку як середня мінімальна кількість необхідного персоналу.'
            },
            expansions: {
                label: 'дистрибуції',
                description: 'Показує, на що може поширюватися ставка. (Показує лише просте поширення)'
            },
            show_100: {
                label: 'Показати 100% вірогідність',
                description: 'Показує ймовірність для транспортного засобу, навіть якщо він 100%.'
            },
            credits: {
                label: 'Середній заробіток',
                description: 'Показує середній заробіток, який ви отримуєте за це завдання.'
            },
            show_siwa: {
                label: 'Вимоги охоронців',
                description: 'Показує вимоги до охоронців і в помічнику.'
            },
            mission_time: {
                label: 'Час створення',
                description: 'Показує дату та час створення місії.'
            }
        },
        vehicles: {
            truck: "пожежні машини",
            platform: "вантажні платформи",
            heavyRescue: "важкі рятувальні машини",
            air: "Carro aria",
            bchief: "машини командира батальйону",
            tanker: "автоцистерн",
            hazmat: "машини знезараження",
            mcv: "Mobile Command Vehicle",
            police: "поліцейські машини",
            rth: "elisoccorso",
            ambulance: "Ambulanza Medicalizzata",
            arff: "Flotta aerea antincendio AIB",
            k9: "Dog Support Units",
            swatSuv: "Armed Response Vehicle (ARV)",
            policeHeli: "Police Helicopter"
        },
        pois: [
            "Парк",
            "Озеро",
            "Лікарня",
            "Ліс",
            "Автобусна зупинка",
            "Трамвайна зупинка",
            "Залізнична станція",
            "Залізничний вокзал",
            "Товарна станція",
            "Супермаркет \\(малий\\)",
            "Супермаркет \\(великий\\)",
            "Заправна станція",
            "Школа",
            "Музей",
            "Торгівельний центр",
            "Автомайстерня",
            "З'їзд із траси",
            "Різдвяний ринок",
            "Storehouse",
            "Дискотека",
            "Стадіон",
            "Ферма",
            "Офісна будівля",
            "Басейн",
            "Railroad Crossing",
            "Театр",
            "Ярмарок",
            "Річка",
            "Малий аеропорт \\(ЗПС\\)",
            "Великий аеропорт \\(ЗПС\\)",
            "Термінал аеропорту",
            "Банк",
            "Склад",
            "Міст",
            "Ресторан швидкого харчування",
            "Вантажний порт",
            "Центр переробки відходів",
            "Висотка",
            "Причал круїзних лайнерів",
            "Гавань",
            "Залізничний переїзд",
            "Тунель",
            "Холодний склад",
            "Електростанція",
            "Фабрика",
            "Утилізаційний склад",
            "Станція метро",
            "Мале сховище хімікатів",
            "Велике сховище хімікатів",
            "Готель",
            "Бар",
            "Сміттєзвалище",
            "Гараж",
			"Силос"
        ]
    };

    I18n.translations.ja_JP.lssm.missionhelper = {
        diy_mission: 'このミッションは大規模な同盟ミッションのようです。',
        siwa: '計画ミッション',
        vge: '大規模同盟ミッション',
        patients: '患者さん',
        prisoners: '囚人',
        to: 'まで',
        exp: '普及',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'このミッションは救急車のみです！',
        title: 'ミッションヘルパー',
        transport: '輸送',
        settings: {
            name: {
                label: '名前',
                description: 'ヘルパーのミッションの名前を表示します。'
            },
            id: {
                label: 'Id',
                description: 'ヘルパー内のミッションの ID を表示します。'
            },
            type: {
                label: 'タイプ ID',
                description: 'ヘルパーのミッションタイプの ID を表示します。'
            },
            poi: {
                label: 'ポイ',
                description: '操作がどの POI にあるかをヘルパーで示します。'
            },
            live_patients: {
                label: '患者数',
                description: '現在使用中の患者数をライブで表示します。'
            },
            vehicles: {
                label: '乗り物',
                description: '必要な車両を表示します。'
            },
            patients: {
                label: '患者情報',
                description: '（潜在的な）患者に関する情報を表示します。'
            },
            prisoners: {
                label: '囚人情報',
                description: '（潜在的な）囚人に関する情報を表示します。'
            },
            special: {
                label: 'その他の情報',
                description: '必要な要員の平均最小人数などの特別な情報を表示します。'
            },
            expansions: {
                label: '分布',
                description: 'ベットが何に広がるかを示します。 （単純なスプレッドのみを表示）'
            },
            show_100: {
                label: '100％の確率を表示',
                description: '車両が100％であっても、車両の確率を示します。'
            },
            credits: {
                label: '平均収益',
                description: 'この割り当てで得られる平均収益を表示します。'
            },
            show_siwa: {
                label: '警備員の要件',
                description: 'ヘルパーのセキュリティガードの要件も示します。'
            },
            mission_time: {
                label: '作成時間',
                description: 'ミッションが作成された日時を表示します。'
            }
        },
        vehicles: {
            truck: "消防車が    ",
            platform: "プラットフォームトラック",
            heavyRescue: "大型救助車",
            air: "Breathing Apparatus Support Unit",
            bchief: "消防隊",
            tanker: "ウォータータンカー",
            hazmat: "危険物取扱車両が",
            mcv: "Incident Command and Control Unit",
            police: "警察車両が",
            arff: "空港用消防車",
            k9: "Dog Support Unit",
            swatSuv: "Armed Response Vehicle (ARV)",
            rth: "HEMS",
            policeHeli: "Police helicopter",
        },
        pois: [
            "公園",
            "湖",
            "病院",
            "森",
            "バス停",
            "電車停留所",
            "駅\\（普通車両\\）",
            "駅\\（普通車両と長距離路線\\）",
            "雑貨屋",
            "スーパーマーケット\\（小型\\）",
            "スーパーマーケット\\（大型\\）",
            "ガソリンスタンド",
            "学校",
            "博物館",
            "ショッピングモール",
            "車整備店",
            "高速インター",
            "高速道路出口",
            "Storehouse",
            "ディスコ",
            "スタジアム",
            "牧場",
            "オフィスビル",
            "プール",
            "Railroad Crossing",
            "映画館",
            "イベント会場",
            "河川",
            "小型空港\\（滑走路\\）",
            "大型空港\\（滑走路\\）",
            "空港ターミナル",
            "銀行",
            "倉庫",
            "橋",
            "ファストフードレストラン",
            "貨物港",
            "リサイクルセンター",
            "高層ビル",
            "クルーズ船ドック",
            "マリーナ",
            "踏切",
            "トンネル",
            "低温倉庫",
            "発電所",
            "工場",
            "ゴミ処分場",
            "地下鉄駅",
            "化学薬品タンク\\（小型\\）",
            "化学薬品タンク\\（大型\\）",
            "ホテル",
            "バー",
            "埋立地",
            "駐車ガレージ",
			"サイロ"
        ]
    };

    I18n.translations.ko_KR.lssm.missionhelper = {
        diy_mission: '이 임무는 대규모 동맹 임무 인 것 같습니다.',
        siwa: '계획된 임무',
        vge: '대규모 동맹 임무',
        patients: '환자',
        prisoners: '죄수',
        to: '까지',
        exp: '확산',
        ambulance_only: '이 임무는 구급차 전용입니다!',
        title: '선교사',
        transport: '수송',
        settings: {
            name: {
                label: '이름',
                description: '도우미의 임무 이름을 표시합니다.'
            },
            id: {
                label: '신분증',
                description: '헬퍼에서 미션의 ID를 표시합니다.'
            },
            type: {
                label: '유형 ID',
                description: '헬퍼에서 미션 유형의 ID를 표시합니다.'
            },
            poi: {
                label: '다음',
                description: '도우미에서 작업이 있는 POI를 나타냅니다.'
            },
            live_patients: {
                label: '환자 수',
                description: '현재 사용중인 환자 수를 실시간으로 보여줍니다.'
            },
            vehicles: {
                label: '차량',
                description: '필요한 차량을 표시합니다.'
            },
            patients: {
                label: '환자 정보',
                description: '(잠재적) 환자에 대한 정보를 표시합니다.'
            },
            prisoners: {
                label: '죄수 정보',
                description: '(잠재적 인) 포로에 대한 정보를 표시합니다.'
            },
            special: {
                label: '기타 정보',
                description: '필요한 평균 최소 인원 수와 같은 특수 정보를 표시합니다.'
            },
            expansions: {
                label: '분포',
                description: '베팅이 퍼질 수있는 것을 보여줍니다. (간단한 스프레드 만 표시)'
            },
            show_100: {
                label: '100 % 확률 표시',
                description: '차량이 100 % 인 경우에도 차량의 확률을 표시합니다.'
            },
            credits: {
                label: '평균 수입',
                description: '이 과제에서 얻은 평균 수입을 보여줍니다.'
            },
            show_siwa: {
                label: '경비원의 요구 사항',
                description: '도우미의 보안 요원에 대한 요구 사항도 표시합니다.'
            },
            mission_time: {
                label: '창조 시간',
                description: '미션이 생성 된 날짜와 시간을 보여줍니다.'
            }
        },
        vehicles: {
            truck: "소방차",
            platform: "플랫폼 트럭",
            heavyRescue: "중장비 구조 차량",
            air: "Breathing Apparatus Support Unit",
            bchief: "소방대장",
            tanker: "수상 탱커",
            hazmat: "생화학 차량",
            mcv: "Incident Command and Control Unit",
            police: "경찰차",
            arff: "ARFF",
            k9: "Dog Support Unit",
            swatSuv: "Armed Response Vehicle (ARV)",
            rth: "HEMS",
            policeHeli: "Police helicopter",
        },
        pois: [
            "공원",
            "호수",
            "병원",
            "숲",
            "버스 정류장",
            "전차 정류장",
            "기차역\\(지역 교통\\)",
            "기차역\\(지역 교통 및 장거리 여행역\\)",
            "화물역",
            "슈퍼마켓\\(소형\\)",
            "슈퍼마켓\\(대형\\)",
            "주유소",
            "학교",
            "박물관",
            "쇼핑몰",
            "차량 정비소",
            "고속도로 출구",
            "크리스마스 마켓",
            "저장소",
            "디스코텍",
            "경기장",
            "농장",
            "사무용 건물",
            "수영장",
            "철길 건널목",
            "극장",
            "박람회장",
            "강",
            "소형 공항\\(활주로\\)",
            "대형 공항\\(활주로\\)",
            "공항 터미널",
            "은행",
            "창고",
            "다리",
            "패스트푸드 레스토랑",
            "적하구",
            "재활용 센터",
            "고층 건물",
            "유람선 부두",
            "정박지",
            "철도 건널목",
            "터널",
            "냉동 창고",
            "발전소",
            "공장",
            "고철 처리장",
            "지하철역",
            "소형 화학물질 저장 탱크",
            "대형 화학물질 저장 탱크",
            "호텔",
            "술집",
            "매립지",
            "주차장",
            "Silo"
        ]
    };

    I18n.translations.ro_RO.lssm.missionhelper = {
        diy_mission: 'Această misiune pare a fi o misiune de alianță la scară largă.',
        siwa: 'Misiune planificată',
        vge: 'Misiune a alianței la scară largă',
        patients: 'Pacienţii',
        prisoners: 'Prizonieri',
        to: 'până la',
        exp: 'Se răspândeşte',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Misiunea asta e doar pentru ambulanță!',
        title: 'Ajutor de misiune',
        transport: 'Transport',
        settings: {
            name: {
                label: 'Numele',
                description: 'Afișează numele misiunii în ajutor.'
            },
            id: {
                label: 'Id',
                description: 'Afișează ID-ul misiunii în ajutor.'
            },
            type: {
                label: 'ID DE TIP',
                description: 'Afișează ID-ul tipului de misiune în ajutor.'
            },
            poi: {
                label: 'Apoi',
                description: 'Indică în ajutor la ce punct de interes se află operațiunea.'
            },
            live_patients: {
                label: 'Numărul de pacienți',
                description: 'Arată live cât de mulți pacienți sunt în prezent în uz.'
            },
            vehicles: {
                label: 'Vehicule',
                description: 'Afișează vehiculele necesare.'
            },
            patients: {
                label: 'informații despre pacient',
                description: 'Afișează informații despre (potențialii) pacienți.'
            },
            prisoners: {
                label: 'informații prizonier',
                description: 'Afișează informații despre (potențialii) deținuți.'
            },
            special: {
                label: 'Alte informații',
                description: 'Afișează informații speciale, ar fi numărul minim mediu de personal necesar.'
            },
            expansions: {
                label: 'Distribuţii',
                description: 'Arată la ce se poate răspândi pariul. (Afișează numai o simplă răspândire)'
            },
            show_100: {
                label: 'Arată probabilitatea 100%',
                description: 'Afișează probabilitatea pentru un vehicul, chiar dacă este 100%.'
            },
            credits: {
                label: 'Câștigul salarial mediu',
                description: 'Afișează câștigurile medii pe care le obțineți pentru această atribuire.'
            },
            show_siwa: {
                label: 'Cerințe ale agenților de securitate',
                description: 'Arată cerințele pentru agenții de pază în ajutor, de asemenea.'
            },
            mission_time: {
                label: 'Timp de creare',
                description: 'Afișează data și ora la care a fost creată misiunea.'
            }
        },
        vehicles: {
            truck: "Mașini de pompieri",
            platform: "Camioane cu platformă",
            heavyRescue: "grele de salvare",
            air: "Breathing Apparatus Support Unit",
            bchief: "Șeful de batalion",
            tanker: "Cisterne de apă",
            hazmat: "pentru transportul mărfurilor periculoase",
            mcv: "comandă forțe mobile",
            police: "Mașini de poliție",
            arff: "Serviciu aeronautic de salvare și luptă împotriva incendiilor",
            rth: "Air Ambulance"
        },
        pois: [
            "Parc",
            "Lac",
            "Spital",
            "Pădure",
            "Stație de autobuz",
            "Stație de tramvai",
            "Gară (trafic regional)",
            "Gară (trafic regional și deplasări pe distanțe lungi)",
            "Stație de marfă",
            "Supermarket (mic)",
            "Supermarket (mare)",
            "Stație de benzină",
            "Școală",
            "Muzeu",
            "Centru comercial",
            "Atelier auto",
            "Ieșire pe autostradă",
            "Târg de Crăciun",
            "Depozit",
            "Discotecă",
            "Stadion",
            "Fermă",
            "Clădire de birouri",
            "Bazin de înot",
            "Trecere de cale ferată",
            "Teatru",
            "Bâlci",
            "Râu",
            "Aeroport mic (pistă)",
            "Aeroport mare (pistă)",
            "Terminal aeroport",
            "Bancă",
            "Magazie",
            "Pod",
            "Restaurant fast-food",
            "Port pentru mărfuri",
            "Centru de reciclare",
            "Bloc cu multe etaje",
            "Doc pentru nave de croazieră",
            "Debarcader",
            "Trecere de nivel",
            "Tunel",
            "Depozit frigorific",
            "Centrală electrică",
            "Fabrică",
            "Depozit de fier vechi",
            "Stație de metrou",
            "Rezervor mic pentru stocarea de substanțe chimice",
            "Rezervor mare pentru stocarea de substanțe chimice",
            "Hotel",
            "Bar",
            "Depozit de deșeuri",
            "Parcare",
            "Silo"
        ]
    };

    I18n.translations.fi_FI.lssm.missionhelper = {
        diy_mission: 'Tämä tehtävä näyttää olevan laaja-alainen liittoutumatehtävä.',
        siwa: 'Suunniteltu tehtävä',
        vge: 'Laajamittainen liittoutumatehtävä',
        patients: 'potilaat',
        prisoners: 'vangit',
        to: 'aikeissa',
        exp: 'levitteet',
        SWATPersonnel: "Needed SWAT Personnel",
        ambulance_only: 'Tämä tehtävä on vain ambulanssi!',
        title: 'Tehtävän auttaja',
        transport: 'Kuljetus',
        settings: {
            name: {
                label: 'Nimi',
                description: 'Näyttää avustajan operaation nimen.'
            },
            id: {
                label: 'ID',
                description: 'Näyttää operaattorin tunnuksen auttajassa.'
            },
            type: {
                label: 'TYP-tunnus',
                description: 'Näyttää avustajan operaatiotyypin tunnuksen.'
            },
            poi: {
                label: 'KP',
                description: 'Ilmaisee auttajassa, missä KP: ssä toiminta on.'
            },
            live_patients: {
                label: 'Potilaiden lukumäärä',
                description: 'Näyttää live-tilassa kuinka monta potilasta on tällä hetkellä käytössä.'
            },
            vehicles: {
                label: 'ajoneuvot',
                description: 'Näyttää vaadittavat ajoneuvot.'
            },
            patients: {
                label: 'potilastiedot',
                description: 'Näyttää tiedot (potentiaalisista) potilaista.'
            },
            prisoners: {
                label: 'vangin tiedot',
                description: 'Näyttää (potentiaalisista) vankeista.'
            },
            special: {
                label: 'Muita tietoja',
                description: 'Näyttää erityistietoja, kuten tarvittavan henkilöstön keskimääräisen vähimmäismäärän.'
            },
            expansions: {
                label: 'jakaumat',
                description: 'Näyttää, mihin veto voi levitä. (Näyttää vain yksinkertaisen levityksen)'
            },
            show_100: {
                label: 'Näytä 100% todennäköisyys',
                description: 'Näyttää todennäköisyyden ajoneuvolle, vaikka se olisi 100%.'
            },
            credits: {
                label: 'Keskimääräiset ansiot',
                description: 'Näyttää keskimäärin ansaitsemasi tämän toimeksiannon.'
            },
            show_siwa: {
                label: 'Turvallisuusvaatimukset',
                description: 'Näyttää myös auttajassa oleville vartijoille asetetut vaatimukset.'
            },
            mission_time: {
                label: 'Luomisaika',
                description: 'Näyttää päivämäärän ja kellonajan, jolloin operaatio luotiin.'
            }
        },
        vehicles: {
            truck: "paloautot",
            platform: "nostolava-auto",
            heavyRescue: "raskaat pelastusautot",
            air: "Breathing Apparatus Support Unit",
            bchief: "johtoauto",
            tanker: "säiliöauto",
            hazmat: "kemikaalitorjunta-auto",
            mcv: "johtokeskusauto",
            police: "poliisiauto",
            arff: "lentokenttäpaloauto",
            rth: "Air Ambulance"
        },
        pois: [
            "Puisto",
            "Järvi",
            "Sairaala",
            "Metsä",
            "Linja-autopysäkki",
            "Raitiovaunupysäkki",
            "Rautatieasema (paikallisliikenne)",
            "Rautatieasema (paikallis- ja pitkän matkan liikenne)",
            "Tavara-asema",
            "Valintamyymälä (pieni)",
            "Valintamyymälä (iso)",
            "Huoltoasema",
            "Koulu",
            "Museo",
            "Ostoskeskus",
            "Autokorjaamo",
            "Moottoritien poistumisliittymä",
            "Joulumarkkinat",
            "Varastorakennus",
            "Disko",
            "Stadion",
            "Maatila",
            "Toimistorakennus",
            "Uima-allas",
            "Trecere de cale ferată",
            "Teatteri",
            "Messukenttä",
            "Joki",
            "Pieni lentoasema (kiitorata)",
            "Suuri lentokenttä (kiitorata)",
            "Lentokenttäterminaali",
            "Pankki",
            "Varasto",
            "Silta",
            "Pikaruokaravintola",
            "Rahtisatama",
            "Kierrätyskeskus",
            "Pilvenpiirtäjä",
            "Risteilyaluslaituri",
            "Venesatama",
            "Rautatieristeys",
            "Tunneli",
            "Kylmävarasto",
            "Voimalaitos",
            "Tehdas",
            "Romuttamo",
            "Metroasema",
            "Pieni kemikaalisäiliö",
            "Iso kemikaalisäiliö",
            "Hotelli",
            "Baari",
            "Kaatopaikka",
            "Pysäköintihalli",
            "Silo"
        ]
    };

    I18n.translations.nl_NL.lssm.missionhelper = {
        diy_mission: 'Deze inzet lijkt een grootschalige team inzet te zijn.',
        siwa: 'Geplande inzet',
        vge: 'Grootschalige team inzet',
        patients: 'Patiënten',
        prisoners: 'Gevangenen',
        to: 'tot',
        exp: 'Verspreidingen',
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
            truck: "Tankautospuiten",
            police: "Noodhulpeenheden",
            bchief: "OvD-B",
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
            ovdg: "OvD-Geneeskunde",
            atc: "AT Commandant",
            ato: "AT Operator",
            atm: "AT Materiaalwagen",
            press: "Voorlichter"
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
            followup: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.followup.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.missionhelper.settings.followup.description')
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
        case 'de_DE':
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
        case 'en_US':
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
              if (SETTINGS.hide_rw && MISSION.vehicles.rw && MISSION.vehicles.truck) {
                  MISSION.vehicles.rw -= MISSION.vehicles.truck;
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

              I18n.locale === 'de_DE' && patients >= 5 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.lna')} (100%)`);
              I18n.locale === 'de_DE' && patients >= 10 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.orgl')} (100%)`);
              I18n.locale === 'en_US' && patients >= 10 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.emschief')} (100%)`);
              I18n.locale === 'nl_NL' && patients >= 3 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.ovdg')} (100%)`);
              content.innerHTML += '<br>';
          }

          SETTINGS.prisoners && MISSION.prisoners && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.prisoners')}: ${(MISSION.prisoners.min !== MISSION.prisoners.max) && (`${MISSION.prisoners.min || 0} ${I18n.t('lssm.missionhelper.to')}`)} ${MISSION.prisoners.max}<br>`);

          SETTINGS.special && MISSION.special && MISSION.special.averageMinimumEmployeesFire && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.averageMinimumEmployeesFire')}: ${MISSION.special.averageMinimumEmployeesFire}<br>`);
          SETTINGS.special && MISSION.special && MISSION.special.averageMinimumEmployeesHoehen && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.averageMinimumEmployeesHoehen')}: ${MISSION.special.averageMinimumEmployeesHoehen}<br>`);
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
              content.innerHTML += `<br>${I18n.t('lssm.missionhelper.exp')}:<br>`;
              for (let i of Object.keys(MISSION.expansions)) {
                  let id = MISSION.expansions[i];
                  content.innerHTML += `<a href="../einsaetze/${id}"><span class="badge">${MISSIONS[id] ? MISSIONS[id].name : id}</span></a>`;
              }
          }

          if (SETTINGS.followup && MISSION.followup) {
              content.innerHTML += `<br>${I18n.t('lssm.missionhelper.fwm')}:<br> `;
              for (let i of Object.keys(MISSION.followup)) {
                  let id = MISSION.followup[i];
                  content.innerHTML += `<a href="../einsaetze/${id}"><span class="badge">${MISSIONS[id] ? MISSIONS[id].name : id}</span></a>`;
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
