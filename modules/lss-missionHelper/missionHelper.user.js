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
            }
        },
        transport: 'Transport',
        tragehilfe: 'Tragehilfe',
        vehicles: {
            lf: 'Löschfahrzeuge',
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
            flf: 'Flugfeldlöschfahrzeug',
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
            policeHeli: "Police Helicopter"
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

    I18n.translations.nl.lssm.missionhelper = {
        diy_mission: 'Deze missie lijkt een grootschalige alliantiemissie te zijn.',
        siwa: 'Geplande missie',
        vge: 'Grootschalige alliantiemissie',
        patients: 'Patiënten',
        prisoners: 'Gevangenen',
        to: 'tot',
        title: 'Meldinghelper',
        transport: 'Transport',
        settings: {
            name: {
                label: 'Name',
                description: 'Toont de naam van de missie in de helper.'
            },
            id: {
                label: 'ID',
                description: 'Toont de ID van de missie in de helper.'
            },
            type: {
                label: 'TYP-ID',
                description: 'Toont de ID van het missietype in de helper.'
            },
            poi: {
                label: 'POI',
                description: 'Geeft in de helper aan op welke POI de bewerking betrekking heeft.'
            },
            live_patients: {
                label: 'Aantal patiënten',
                description: 'Laat live zien hoeveel patiënten er momenteel in gebruik zijn.'
            },
            vehicles: {
                label: 'voertuigen',
                description: 'Geeft de benodigde voertuigen weer.'
            },
            patients: {
                label: 'patiënteninformatie',
                description: 'Toont informatie over (potentiële) patiënten.'
            },
            prisoners: {
                label: 'gevangeneninformatie',
                description: 'Toont informatie over (potentiële) gevangenen'
            },
            special: {
                label: 'Overige informatie',
                description: 'Toont speciale informatie, zoals het gemiddelde minimum aantal personeelsleden dat nodig is.'
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
            megroep: "ME Groepsvoertuig",
            mecommando: "ME Commandovoertuigen",
            polHeli: "Politie Helikopter",
            watervoertuig: "Waterongevallenvoertuigen / Oppervlaktereddingsteams",
            wateraanhanger: "Waterongevallenaanhangers",
            hond: "Hondengeleider",
            crashtender: "Crashtender",
            afoosc: "AFO/OSC"
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

    if (!window.location.href.match(/missions|(einsaetze\/\d+)/g)) return;

    const clone = a => JSON.parse(JSON.stringify(a));
    const get_setting = key => lssm.managedSettings.getSetting(SETTINGS_STORAGE, key);

    const MISSIONS_FILE = lssm.getlink(`/modules/lss-missionHelper/missions.${I18n.locale}.json`);
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

            if (!MISSION && MISSION_TYPE && !MISSION_WINDOW) return lssm.loadScript(MISSION_WRITE_FILE);
            if (!MISSION_WINDOW) return;

            let markup = document.createElement('div');
            markup.id = LSSM_MH_PREFIX;
            markup.classList.add('alert', 'alert-warning', localStorage[`${LSSM_MH_PREFIX}_state`] || 'pinned');
            markup.innerHTML =
                `<div class="handle"></div>
<a class="pull-right" id="${LSSM_MH_PREFIX}_pin">
    <i class="glyphicon glyphicon-pushpin"></i>
</a>
<article class="content"></article>
<br class="unpinned">
<span id="${LSSM_MH_PREFIX}_toggle"><span class="up"></span></span>`;

            MISSION_WINDOW && localStorage[`${LSSM_MH_PREFIX}_state`] === 'pinned' ? pin_missionhelper(markup) : unpin_missionhelper(markup);

            if (!MISSION && MISSION_TYPE) return lssm.loadScript(MISSION_WRITE_FILE);

            let content = document.querySelector(`#${LSSM_MH_PREFIX} .content`);

            if (!MISSION_TYPE) {
                content.innerText = I18n.t('lssm.missionhelper.diy_mission');
                return lssm_missionhelper_adjustPosition();
            }

            if (SETTINGS.name || SETTINGS.id || SETTINGS.type || SETTINGS.poi) {
                content.innerHTML += `<h3>${(SETTINGS.name && MISSION.name) || ''}<sub>${(SETTINGS.id && `&nbsp;<sub>ID: ${MISSION_ID}</sub>`) || ''}${(SETTINGS.type && `&nbsp;<sub>Type: ${MISSION_TYPE}</sub>`) || ''}${(MISSION.poi && SETTINGS.poi && `&nbsp;<sub>POI: ${I18n.t(`lssm.missionhelper.pois.${MISSION.poi}`)} <sub>[${MISSION.poi}]</sub></sub>`) || ''}</sub></h3><br>`;
            }

            if (MISSION.onlyRd) {
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

                patients >= 5 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.lna')} (100%)`);
                patients >= 10 && (content.innerHTML += `<br>1x ${I18n.t('lssm.missionhelper.vehicles.lna')} (100%)`);
                content.innerHTML += '<br>';
            }

            SETTINGS.prisoners && MISSION.prisoners && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.prisoners')}: ${(MISSION.prisoners.min !== MISSION.prisoners.max) && (`${MISSION.prisoners.min || 0} ${I18n.t('lssm.missionhelper.to')}`)} ${MISSION.prisoners.max}<br>`);

            SETTINGS.special && MISSION.special && MISSION.special.averageMinimumEmployeesFire && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.averageMinimumEmployeesFire')}: ${MISSION.special.averageMinimumEmployeesFire}<br>`);
            SETTINGS.special && MISSION.special && MISSION.special.averageMinimumEmployeesPolice && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.averageMinimumEmployeesPolice')}: ${MISSION.special.averageMinimumEmployeesPolice}<br>`);
            SETTINGS.special && MISSION.special && MISSION.special.SWATPersonnel && (content.innerHTML += `<br>${I18n.t('lssm.missionhelper.SWATPersonnel')}: ${MISSION.special.SWATPersonnel}<br>`);

            if (SETTINGS.water && MISSION.water || SETTINGS.credits && MISSION.credits) {
                content.innerHTML += '<br>';
                SETTINGS.credits && MISSION.credits && (content.innerHTML += `<span class="badge badge-secondary">~ ${MISSION.credits.toLocaleString()} Credits</span>`);
                SETTINGS.water && MISSION.water && (content.innerHTML += `<span class="badge badge-secondary">${I18n.t('lssm.missionhelper.water')}: ${MISSION.water.toLocaleString()} Liter</span>`);
                content.innerHTML += '<br>';
            }

            if (SETTINGS.expansions && MISSION.expansions) {
                content.innerHTML += '<br>';
                for (let i = 0; i < MISSION.expansions.length; i++) {
                    let id = MISSION.expansions[i];
                    content.innerHTML += `<a href="../einsaetze/${id}?mission_id=${MISSION_ID}"><span class="badge">${MISSIONS[id] ? MISSIONS[id].name : id}</span></a>`;
                }
            }

            lssm_missionhelper_adjustPosition();
        });

    document.querySelectorAll('.aao, .vehicle_group').forEach(el => {
        el.addEventListener('mouseenter', aao => {
            let missionhelp = document.querySelector(`#${LSSM_MH_PREFIX}`);
            if (!missionhelp.classList.contains('unpinned')) return;
            aao = aao.currentTarget;
            let aao_bounding = aao.getBoundingClientRect();
            let missionhelp_bounding = missionhelp.getBoundingClientRect();
            missionhelp.style.opacity = (aao_bounding.right > missionhelp_bounding.left &&
                aao_bounding.left < missionhelp_bounding.right &&
                aao_bounding.bottom > missionhelp_bounding.top &&
                aao_bounding.top < missionhelp_bounding.bottom) ? 0.1 : null;
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
    };
    localStorage[`${LSSM_MH_PREFIX}_state`] = 'unpinned';
};
