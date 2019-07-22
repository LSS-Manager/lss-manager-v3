// Einsatzhelfer
(($, win, I18n) => {
    if (!window.location.href.match(/missions|(einsaetze\/\d+)/g)) return;

    if (window.location.href.match(/einsaetze/)) {
        let id = window.location.href.match(/\d+([^?]|$)/)[0];
        $.getJSON(`${lssm.config.server}/modules/lss-missionHelper/missions.${I18n.locale}.json`, {_: new Date().getTime()}) // simple way to "disable" cache
            .done(missions => {
                if (!missions[id]) {
                    $.getScript(`${lssm.config.server}/modules/lss-missionHelper/loadMissionData.${I18n.locale}.js`, {_: new Date().getTime()});
                }
            });
        return;
    }

    I18n.translations.de['lssm']['missionHelper'] = {
        diyMission: 'Dieser Einsatz scheint ein selbst erstellter Verbandsgroßeinsatz zu sein.',
        vge: 'Verbandsgroßeinsatz',
        siwa: 'Sicherheitswache',
        missionNotDefined: 'Dieser Einsatz ist noch nicht aufgelistet.',
        patients: 'Patienten',
        transport: 'Transport',
        tragehilfe: 'Tragehilfe',
        prisoners: 'Gefangene',
        averageMinimumEmployeesFire: 'Durchschnittlich mindestens benötigte Feuerwehrleute',
        averageMinimumEmployeesPolice: 'Durchschnittlich mindestens benötigte Polizisten/Polizistinnen',
        to: 'bis zu',
        water: 'Wasserbedarf',
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

    I18n.translations.en['lssm']['missionHelper'] = {
        diyMission: 'This mission seems to be a large scale alliance mission.',
        vge: 'Large scale alliance mission',
        siwa: 'Planned mission',
        missionNotDefined: 'This mission is not listed yet.',
        patients: 'Patients',
        transport: 'Transport',
        prisoners: 'Prisoners',
        to: 'up to',
        SWATPersonnel: "Needed SWAT Personnel",
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

    I18n.translations.nl['lssm']['missionHelper'] = {
        diyMission: 'Deze missie lijkt een grootschalige alliantiemissie te zijn.',
        vge: 'Grootschalige alliantiemissie',
        siwa: 'Geplande missie',
        missionNotDefined: 'Deze missie staat nog niet op de lijst.',
        patients: 'Patiënten',
        transport: 'Transport',
        prisoners: 'Gevangenen',
        to: 'tot',
        vehicles: {
            tankauto: "Tankautospuiten",
            noodhulpeen: "Noodhulpeenheden",
            ovdb: "OvD-B",
            redvoertuig: "Redvoertuigen",
            hoogwerker: "Hoogwerker",
            slangenwagen: "Slangenwagen",
            hulpverlening: "Hulpverleningsvoertuigen",
            Adembescherming: "Adembeschermingsvoertuigen",
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

    let missionHelp = $('#mission_help');

    let aaoText = '';
    let markup = '<div class="alert alert-warning" id="missionHelper"><div class="handle"></div><a class="pull-right" id="pinMissionHelper"><i class="glyphicon glyphicon-pushpin"></i></a>';

    if (missionHelp.length > 0) {
        $.getJSON(`${lssm.config.server}/modules/lss-missionHelper/missions.${I18n.locale}.json`, {_: new Date().getTime()}) // simple way to "disable" cache
            .done(missions => {
                let missionId = missionHelp.attr('href').split("/").pop().replace(/\?.*/, '');
                let mission = missions[missionId];
                if (mission) {
                    aaoText += `<h3>${mission['name']}&nbsp;<sub><sub>ID: ${window.location.href.replace(/\D/g, "")}</sub>&nbsp;<sub>Type: ${missionId}</sub>&nbsp;<sub>${mission.poi ? `POI: ${I18n.t(`lssm.missionHelper.pois.${mission.poi}`)} <sub>[${mission.poi}]</sub>` : ""}</sub></sub></h3><br>`;
                    if (mission.onlyRd) {
                        // Ambulance-only Missions
                        if (mission.transport || mission.specialisation) {
                            aaoText += `${I18n.t('lssm.missionHelper.transport')}: ${(mission.transport && `${mission.transport}%`)||""}${void 0 !== typeof mission.specialisation && ` (${mission.specialisation})`}`;
                        }
                        mission.nef && (aaoText += `<br>${I18n.t('lssm.missionHelper.vehicles.nef')}: ${mission.nef}%`);
                        mission.mmtarts && (aaoText += `<br>${I18n.t('lssm.missionHelper.vehicles.mmtarts')}: ${mission.mmtarts}%`);
                        mission.rth && (aaoText += `<br>${I18n.t('lssm.missionHelper.vehicles.rth')}: ${mission.rth}%`);
                        mission.tragehilfe && (aaoText += `<br>${I18n.t('lssm.missionHelper.tragehilfe')}: ${mission.tragehilfe}%`);
                        aaoText += '<br>';
                    } else {
                        // not Ambulance-only Missions
                        // If VGE
                        mission.vge && (aaoText += `<h4>${I18n.t('lssm.missionHelper.vge')}</h4>`);

                        // If Sicherheitswache
                        if (mission['siwa'] === true) {
                            aaoText += `<h4>${I18n.t('lssm.missionHelper.siwa')}</h4>`;
                        } else {
                            // Number of patients
                            let patients = $(".mission_patient").length;
                            patients > 0 && (aaoText += `<span class="badge">${I18n.t('lssm.missionHelper.patients')}: ${patients}</span><br><br>`);

                            // Add Wasserbedarf
                            mission.water && (aaoText += `${I18n.t('lssm.missionHelper.water')}: ${mission['water'].toLocaleString()} Liter<br>`);

                            // Add vehicles
                            let vehicles = mission.vehicles;
                            $.each(vehicles, function (key, val) {
                                aaoText += `${val}x ${I18n.t(`lssm.missionHelper.vehicles.${key}`)} ${(mission.percentages && mission.percentages[key] && `(${mission.percentages[key]}%)`)||`(100%)`}<br>`;
                            });
                            // Add patients
                            if (mission.patients) {
                                aaoText += `<br>${I18n.t('lssm.missionHelper.patients')}: ${(mission.patients.min !== mission.patients.max) && (`${mission.patients.min||0} ${I18n.t('lssm.missionHelper.to')}`)||''} ${mission.patients.max}<br>`;

                                if (mission.patients.transport || mission.patients.specialisation) {
                                    aaoText += `${I18n.t('lssm.missionHelper.transport')}: ${(mission.patients.transport && `${mission.patients.transport}%`)||""}${void 0 !== typeof mission.patients.specialisation && ` (${mission.patients.specialisation})`}`;
                                }

                                mission.patients.nef && (aaoText += `<br>${I18n.t('lssm.missionHelper.vehicles.nef')}: ${mission.patients.nef}%`);
                                mission.patients.mmtarts && (aaoText += `<br>${I18n.t('lssm.missionHelper.vehicles.mmtarts')}: ${mission.patients.mmtarts}%`);
                                mission.patients.rth && (aaoText += `<br>${I18n.t('lssm.missionHelper.vehicles.rth')}: ${mission.patients.rth}%`);
                                mission.patients.tragehilfe && (aaoText += `<br>${I18n.t('lssm.missionHelper.tragehilfe')}: ${mission.patients.tragehilfe}%`);

                                patients >= 5 && (aaoText += `<br>1x ${I18n.t('lssm.missionHelper.vehicles.lna')} (100%)`);
                                patients >= 10 && (aaoText += `<br>1x ${I18n.t('lssm.missionHelper.vehicles.lna')} (100%)`);
                                aaoText += '<br>';
                            }
                            // Add prisoners
                            if (mission.prisoners) {
                                aaoText += `<br>${I18n.t('lssm.missionHelper.prisoners')}: ${(mission.prisoners.min !== mission.prisoners.max) && (`${mission.prisoners.min||0} ${I18n.t('lssm.missionHelper.to')}`)} ${mission.prisoners.max}<br>`;
                            }
                            // Add minuimum needed averageMinimumEmployees
                            mission.special && mission.special.averageMinimumEmployeesFire && (aaoText += `<br>${I18n.t('lssm.missionHelper.averageMinimumEmployeesFire')}: ${mission.special.averageMinimumEmployeesFire}<br>`);
                            mission.special && mission.special.averageMinimumEmployeesPolice && (aaoText += `<br>${I18n.t('lssm.missionHelper.averageMinimumEmployeesPolice')}: ${mission.special.averageMinimumEmployeesPolice}<br>`);
                            mission.special && mission.special.SWATPersonnel && (aaoText += `<br>${I18n.t('lssm.missionHelper.SWATPersonnel')}: ${mission.special.SWATPersonnel}<br>`);

                            // Add Credits
                            mission.credits && (aaoText += `<br><span class="badge badge-secondary"> ~ ${parseInt(mission.credits).toLocaleString()} Credits</span>`);
                            if (mission.expansions) {
                                aaoText += '<br>';
                                $.each(mission.expansions, function () {
                                    aaoText += `<a href="../einsaetze/${this}"><span class="badge">${missions[this] ? missions[this].name : this}</span></a>`;
                                });
                            }
                        }
                    }
                } else {
                    aaoText += `${I18n.t('lssm.missionHelper.missionNotDefined')}<sub>ID: ${window.location.href.replace(/\D/g, "")}</sub>&nbsp;<sub>Type: ${missionId}</sub>`;
                    $.getScript(`${lssm.config.server}/modules/lss-missionHelper/loadMissionData.${I18n.locale}.js`, {_: new Date().getTime()});
                }
                $('#missionHelper .content').append(`${aaoText}<br>`);
                $("#missionHelper").css("left", $('#iframe-inside-container').width() * 0.97 - $("#missionHelper").width());

            })
            .fail((jqxhr, textStatus, error) => {
                $('#missionHelper .content').append(`<pre>${error}</pre>`);
                $("#missionHelper").css("left", $('#iframe-inside-container').width() * 0.97 - $("#missionHelper").width());
            });
    } else {
        aaoText += I18n.t('lssm.missionHelper.diyMission');
    }
    // Set markup
    markup += `<article class="content">${aaoText}</article><span id="toggle-mission-helper"><span class="up"></span></span></div>`;

    localStorage["lssm_missionHelper_state"] === "unpin" ? unpin(markup) : pin(markup);

    $('head').append(`<style>
#missionHelper .content {
    height: auto;
    margin-bottom: 0.625em;
}
#missionHelper .content.hidden {
    height: 0;
}
#toggle-mission-helper {
    min-width: 100px;
    cursor: pointer;
    width: 100%;
    height: 0.625em;
    position: absolute;
    bottom: 5%;
    left: 0;
}
#toggle-mission-helper span {
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
#toggle-mission-helper span.up {
    transform: rotate(135deg);
}
#toggle-mission-helper span.down {
    transform: rotate(-45deg);
}
</style>`);

    $('#toggle-mission-helper').click(function() {
        $('#missionHelper .content').toggleClass("hidden");
        $('#toggle-mission-helper span').toggleClass("up")
            .toggleClass("down");
    });

    $('#missionHelper')
        .css("transition", "100ms linear")
        .css("min-width", "100px");

    $('#pinMissionHelper').css("cursor", "pointer");

    $('.alert-missing-vehicles')
        .mouseover(function() {
            localStorage["lssm_missionHelper_state"] === "unpin" && $('#missionHelper').css("opacity", "0.1");
        })
        .mouseout(function() {
            localStorage["lssm_missionHelper_state"] === "unpin" && $('#missionHelper').css("opacity", "1");
        });

})($, window, I18n);

function pin(markup) {
    $('#mission-form').prepend(markup||$('#missionHelper'));
    $('#missionHelper .handle').css("display", "none");
    $('#missionHelper').css("position", "unset")
        .css("max-width", "unset");
    $('#pinMissionHelper').attr("onclick", "unpin(null)");
    localStorage["lssm_missionHelper_state"] = "pin";
    if ($('#toggle-mission-helper span').hasClass('down')) {
        $('#toggle-mission-helper').click();
    }
}

function unpin(markup) {
    $('#iframe-inside-container').append(markup||$('#missionHelper'));
    $('#missionHelper .handle').css("width", "100%")
        .css("height", "5px")
        .css("cursor", "move")
        .css("display", "block")
        .css("background", "repeating-linear-gradient(\n" +
            "-45deg,\n" +
            "transparent,\n" +
            "transparent 10px,\n" +
            "#ccc 10px,\n" +
            "#ccc 20px\n" +
            ")");
    $('#missionHelper').draggable({
        handle: ".handle",
        containment: "#iframe-inside-container",
        scroll: true,
        stack: "#iframe-inside-container"
    })
        .css("position", "absolute")
        .css("top", "3%")
        .css("max-width", "33.3333%");
    $('#pinMissionHelper').attr("onclick", "pin(null)");
    localStorage["lssm_missionHelper_state"] = "unpin";
}
