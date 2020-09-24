(($, win, I18n) => {
    const prefix = lssm.config.prefix + "_overview";
    I18n.translations.de_DE.lssm.overview = {
        vehicleType: 'Fahrzeugtyp',
        min: 'mindest Personal',
        max: 'maximal Personal',
        cost: 'Preis',
        schooling: 'Ausbildung',
        special: 'Besonderes',
        none: 'Keine',
        vehiclesName: 'Fahrzeuge',
        buildingsName: 'Gebäude',
        buildingType: 'Gebäudename',
        maxlevel: 'maximale Ausbaustufe',
        levelcost: 'Kosten der Ausbaustufen',
        startPersonell: 'Start Personal',
        startVehicle: 'Start Fahrzeug',
        extensions: 'Ausbauten',
        maxBuildins: 'Baugrenze',
        wtank: 'Wassertank'
    };

    I18n.translations.en_US.lssm.overview = {
        vehicleType: 'Vehicle Type',
        min: 'minimum staff',
        max: 'maximum staff',
        cost: 'Price',
        schooling: 'Education',
        special: 'Special',
        none: 'None',
        vehiclesName: 'Vehicles',
        buildingsName: 'Buildings',
        buildingType: 'building name',
        maxlevel: 'maximum expansion level',
        levelcost: 'Costs of the expansion stages',
        startPersonell: 'Start Personnel',
        startVehicle: 'Start vehicle',
        extensions: 'extensions',
        maxBuildins: 'building boundary',
        wtank: 'Watertank'
    };
    I18n.translations.en_AU.lssm.overview = {};
    I18n.translations.en_GB.lssm.overview = {};

    I18n.translations.sv_SE.lssm.overview = {
        vehicleType: 'fordonstyp',
        min: 'lägsta personal',
        max: 'maximal personal',
        cost: 'Pris',
        schooling: 'Utbildning',
        special: 'Särskild',
        none: 'Ingen',
        vehiclesName: 'Fordon',
        buildingsName: 'Byggnader',
        buildingType: 'Byggnads namn',
        maxlevel: 'maximal expansionsnivå',
        levelcost: 'Kostnader för utvidgningsstegen',
        startPersonell: 'Starta personal',
        startVehicle: 'Starta fordonet',
        extensions: 'förlängningar',
        maxBuildins: 'bygggräns'
    };

    I18n.translations.nl_NL.lssm.overview = {
        vehicleType: 'Type voertuig',
        min: 'Minimum personeel',
        max: 'Maximaal personeel',
        cost: 'Prijs',
        schooling: 'Opleiding',
        special: 'Bijzonderheden',
        none: 'Geen',
        vehiclesName: 'Voertuigen',
        buildingsName: 'Gebouwen',
        buildingType: 'Gebouwnaam',
        maxlevel: 'Maximaal uitbreidingsniveau',
        levelcost: 'Kosten van de uitbreidingsfasen',
        startPersonell: 'Start Personeel',
        startVehicle: 'Start voertuig',
        extensions: 'Uitbreidingen',
        maxBuildins: 'Gebouwgrens'
    };
    if (document.URL.match(/(leitstellenspiel|missionchief|missionchief-australia|meldkamerspel|larmcentralen-spelet|operatorratunkowy|operatore112|operateur112|nodsentralspillet|operacni-stredisko|operador193|jogo-operador112|missionchief-korea|jocdispecerat112)(\.de|\.com|\.co\.uk|\.cz|\.se|\.pl|\.it|\.fr|.gr)\/#?$/)) {

        let overviewBtn = $(
            '<a id="' + prefix + '_button" class="leaflet-bar leaflet-control leaflet-control-custom hidden-xs lssm_overview lightbox-open">' +
            '<i class="glyphicon glyphicon-info-sign" style="font-size: 15px;padding: 5px;"></i>' +
            '</a>'
        );
        $('.leaflet-control-container .leaflet-top.leaflet-left').append(overviewBtn);
    } else {
        return;
    }

    I18n.translations.de_DE.lssm.overview.buildings = {
        lst: {
            name: 'Leitstelle',
            credits: 0,
            coins: 0,
            maxlevel: 0,
            levelcost: 'Keine Ausbaustufen möglich',
            startPersonell: 0,
            startVehicle: 'Keine Fahrzeuge stationierbar',
            extensions: 'Keine Ausbauten möglich',
            maxBuildings: 'Alle 25 Gebäude eine Leitstelle',
            special: 'Die Leitstelle ist die Verwaltungszentrale.'
        },
        fw: {
            name: 'Feuerwache',
            credits: 100000,
            coins: 30,
            maxlevel: 16,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-16. 100.000',
            startPersonell: 10,
            startVehicle: 'LF 20 oder LF 10 oder LF 8/6 oder LF 20/16 oder LF 10/6 oder LF 16-TS oder KLF oder MLF oder TSF-W. Ab Dienstgrad Gruppenführer(in) auch HLF 20/HLF 10 (dann Baukosten 20.000 mehr).',
            extensions: 'Rettungsdienst (7 Tage, 100.000 Credits/20 Coins)<br>Wasserrettung (7 Tage, 400.000 Credits/25 Coins)<br>Flughafen (7 Tage, 300.000 Credits/25 Coins)<br>Großwache (7 Tage, 1.000.000 Credits/50 Coins)<br>Werkfeuerwehr (7 Tage, 100.000 Credits/20 Coins)<br>9*Abrollbehälter-Stellplatz (jeweils 7 Tage, 100.000 Credits/20 Coins)',
            maxBuildings: '4.000',
            special: 'Ab der 24. Feuerwache steigen die Kosten für den Neubau einer Wache nach folgender Formel: <code>100.000+200.000*LOG<sub>2</sub>(Anzahl der vorhandenen Feuerwachen − 22)</code>. Der Coins-Preis bleibt konstant!'
        },
        fwklein: {
            name: 'Feuerwache (Kleinwache)',
            credits: 50000,
            coins: 25,
            maxlevel: 5,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000<br>Umbau zur Normalen Wache: Differenz-Preis zur Normalen Wache',
            startPersonell: 9,
            startVehicle: 'LF 20 oder LF 10 oder LF 8/6 oder LF 20/16 oder LF 10/6 oder LF 16-TS oder KLF oder MLF oder TSF-W. Ab Dienstgrad Gruppenführer(in) auch HLF 20/HLF 10 (dann Baukosten 15.000 mehr).',
            extensions: '2*Abrollbehälter-Stellplatz (jeweils 7 Tage, 100.000 Credits/20 Coins)',
            maxBuildings: '4.000',
            special: 'Ab der 24. Feuerwache steigen die Kosten für den Neubau einer Wache nach folgender Formel: <code>50.000+200.000*LOG<sub>2</sub>(Anzahl der vorhandenen Feuerwachen − 22)</code>. Max. 1 Million Credits. Der Coins-Preis bleibt konstant!'
        },
        fwschule: {
            name: 'Feuerwehrschule',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'Keine Ausbaustufen möglich',
            startPersonell: 0,
            startVehicle: 'Keine Fahrzeuge stationierbar',
            extensions: 'Bis zu 3 weitere Klassenzimmer (jeweils 7 Tage, 400.000 Credits/40 Coins)',
            maxBuildings: 'Keine Grenze',
            special: 'Finanzminister und Admins können Verbands-Feuerwehrschulen mit Hilfe von Credits aus der Verbandskasse (aus-)bauen.'
        },
        rw: {
            name: 'Rettungswache',
            credits: 200000,
            coins: 35,
            maxlevel: 14,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-14. 100.000',
            startPersonell: 2,
            startVehicle: 'RTW',
            extensions: 'Keine Ausbauten möglich',
            maxBuildings: 'Keine Grenze'
        },
        rwklein: {
            name: 'Rettungswache (Kleinwache)',
            credits: 100000,
            coins: 25,
            maxlevel: 5,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000<br>Umbau zur Normalen Wache: Differenz-Preis zur Normalen Wache',
            startPersonell: 3,
            startVehicle: 'RTW',
            extensions: 'Keine Ausbauten möglich',
            maxBuildings: 'Keine Grenze'
        },
        rwschule: {
            name: 'Rettungsschule',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'Keine Ausbaustufen möglich',
            startPersonell: 0,
            startVehicle: 'Keine Fahrzeuge stationierbar',
            extensions: 'Bis zu 3 weitere Klassenzimmer (jeweils 7 Tage, 400.000 Credits/40 Coins)',
            maxBuildings: 'Keine Grenze',
            special: 'Finanzminister und Admins können Verbands-Rettungsschulen mit Hilfe von Credits aus der Verbandskasse (aus-)bauen.'
        },
        kh: {
            name: 'Krankenhaus',
            credits: 200000,
            coins: 35,
            maxlevel: 20,
            levelcost: 'jeweils 19.000 Credits/11 Coins',
            startPersonell: 0,
            startVehicle: 'Keine Fahrzeuge stationierbar, dafür aber 10 Betten von Beginn an',
            extensions: 'Mehrere Fachrichtungen (jeweils 7 Tage, 70.000 Credits/15 Coins, allgemeine Innere und allgemeine Chirurgie nur 10.000 Credits/)',
            maxBuildings: 'Keine Grenze',
            special: 'Finanzminister und Admins können Verbands-Krankenhäuser mit Hilfe von Credits aus der Verbandskasse (aus-)bauen.'
        },
        rth: {
            name: 'Rettungshubschrauber-Station',
            credits: 1000000,
            coins: 50,
            maxlevel: 6,
            levelcost: 'jeweils 1.000.000 Credits/50 Coins',
            startPersonell: 0,
            startVehicle: 'Kein Startfahrzeug',
            maxBuildings: 'siehe Besonderheiten',
            extensions: 'Keine Ausbauten möglich',
            special: 'Pro Station können bis zu 7 Landeplätze gebaut werden (Ausbaustufen). Bis zum 125. Gebäude (aller Art) können insgesamt max. 4 Landeplätze gebaut werden. Danach wächst die Zahl alle 25 Geäude um 1 (Beginnend beim 125.).'
        },
        seg: {
            name: 'Schnelleinsatzgruppe (SEG)',
            credits: 100000,
            coins: 30,
            maxlevel: 0,
            levelcost: 'Keine Ausbaustufen möglich',
            startPersonell: 10,
            startVehicle: 'KTW Typ B',
            extensions: 'Führung (3 Tage, 25.000 Credits/5 Coins)<br>Sanitätsdienst (3 Tage, 25.000 Credits/5 Coins)<br>Wasserrettung (7 Tage, 500.000 Credits/25 Coins)<br>Rettungshundestaffel (7 Tage, 350.000 Credits/25 Coins)',
            maxBuildings: 'Keine Grenze'
        },
        pol: {
            name: 'Polizeiwache',
            credits: 100000,
            coins: 35,
            maxlevel: 14,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-14. 100.000',
            startPersonell: 2,
            startVehicle: 'FuStW',
            extensions: 'Zelle (25.000 Credits)<br>Max. 10 können gebaut werden<br>Diensthundestaffel (5 Tage, 100.000 Credits/10 Coins)',
            maxBuildings: '1.500',
            special: 'Ab der 24. Polizeiwache steigen die Kosten für den Neubau einer Wache nach folgender Formel: <code>100.000+200.000*LOG<sub>2</sub>(Anzahl der vorhandenen Polizeiache − 22)</code>. Der Coins-Preis bleibt konstant!'
        },
        polklein: {
            name: 'Polizeiwache (Kleinwache)',
            credits: 50000,
            coins: 25,
            maxlevel: 4,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-4. 100.000<br>Umbau zur Normalen Wache: Differenz-Preis zur Normalen Wache',
            startPersonell: 2,
            startVehicle: 'FuStW',
            extensions: 'Zelle (25.000 Credits)<br>Max. 2 können gebaut werden',
            maxBuildings: '1.500',
            special: 'Ab der 24. Polizeiwache steigen die Kosten für den Neubau einer Wache nach folgender Formel: <code>100.000+200.000*LOG<sub>2</sub>(Anzahl der vorhandenen Polizeiache − 22)</code>. Der Coins-Preis bleibt konstant!'
        },
        polschule: {
            name: 'Polizeisschule',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'Keine Ausbaustufen möglich',
            startPersonell: 0,
            startVehicle: 'Keine Fahrzeuge stationierbar',
            extensions: 'Bis zu 3 weitere Klassenzimmer (jeweils 7 Tage, 400.000 Credits/40 Coins)',
            maxBuildings: 'Keine Grenze',
            special: 'Finanzminister und Admins können Verbands-Polizeischulen mit Hilfe von Credits aus der Verbandskasse (aus-)bauen.'
        },
        polheli: {
            name: 'Polizeihubschrauber-Station',
            credits: 1000000,
            coins: 50,
            maxlevel: 6,
            levelcost: 'jeweils 1.000.000 Credits/50 Coins',
            startPersonell: 0,
            startVehicle: 'Kein Startfahrzeug',
            maxBuildings: 'siehe Besonderheiten',
            extensions: 'Keine Ausbauten möglich',
            special: 'Pro Station können bis zu 7 Landeplätze gebaut werden (Ausbaustufen). Bis zum 125. Gebäude (aller Art) können insgesamt max. 4 Landeplätze gebaut werden. Danach wächst die Zahl alle 25 Geäude um 1 (Beginnend beim 125.).'
        },
        bpol: {
            name: 'Bereitschaftspolizei',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'Keine Ausbaustufen möglich',
            startPersonell: 0,
            startVehicle: 'Kein Startfahrzeug',
            extensions: '2. Zug Hundertschaft (3 Tage, 25.000 Credits/5 Coins)<br>3. Zug Hundertschaftt (3 Tage, 25.000 Credits/5 Coins)<br>Sonderfahrzeug: Gefangenenkraftwagen (3 Tage, 25.000 Credits/5 Coins)<br>Technischer Zug: Wasserwerfer (7 Tage, 25.000 Credits/5 Coins)<br>SEK 1. Zug (7 Tage, 100.000 Credits/10 Coins)<br>SEK 2. Zug(7 Tage, 100.000 Credits/10 Coins)<br>MEK 1. Zug (7 Tage, 100.000 Credits/10 Coins)<br>MEK 2. Zug (7 Tage, 100.000 Credits/10 Coins)<br>Diensthundestaffel (5 Tage, 100.000 Credits/10 Coins)',
            maxBuildings: 'Keine Grenze',
            special: 'Mit dem Bau einer Bereitschaftspolizei bekommt man automatisch 4 Stellplätze für einen Zug (3 GruKw & 1 leBefKw) geschenkt. Die Wache generiert noch keine Einsätze. Um Einsätze zu erhalten muss man die erste Ausbaustufe bauen.'
        },
        psonder: {
            name: 'Polizei-Sondereinheiten',
            credits: 400000,
            coins: 40,
            maxlevel: 0,
            levelcost: 'Keine Ausbaustufen möglich',
            startPersonell: 0,
            startVehicle: 'Kein Startfahrzeug',
            extensions: 'SEK 1. Zug (7 Tage, 100.000 Credits/10 Coins)<br>SEK 2. Zug(7 Tage, 100.000 Credits/10 Coins)<br>MEK 1. Zug (7 Tage, 100.000 Credits/10 Coins)<br>MEK 2. Zug (7 Tage, 100.000 Credits/10 Coins)<br>Diensthundestaffel (5 Tage, 100.000 Credits/10 Coins)',
            maxBuildings: 'Keine Grenze',
        },
        wr: {
            name: 'Wasserrettung',
            credits: 500000,
            coins: 30,
            maxlevel: 5,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000',
            startPersonell: 6,
            startVehicle: 'GW-Wasserrettung',
            extensions: 'Keine Ausbauten möglich',
            maxBuildings: 'Keine Grenze',
            special: 'Beim Bau bekommst du 10 Leute sowie ein GW-Wasserrettung geschenkt'
        },
        rhs: {
            name: 'Rettungshundestaffel',
            credits: 450000,
            coins: 30,
            maxlevel: 5,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000',
            startPersonell: 6,
            startVehicle: 'Rettungshundefahrzeug',
            extensions: 'Keine Ausbauten möglich',
            maxBuildings: 'Keine Grenze',
            special: 'Beim Bau bekommst du 10 Leute sowie ein Rettungshundefahrzeug geschenkt'
        },
        thw: {
            name: 'THW Ortsverband',
            credits: 200000,
            coins: 35,
            maxlevel: 0,
            levelcost: 'Keine Ausbaustufen möglich',
            startPersonell: 9,
            startVehicle: 'GKW',
            extensions: 'Bergungsgruppe (7 Tage, 25.000 Credits/5 Coins)<br>Zugtrupp (7 Tage, 25.000 Credits/5 Coins)<br>Fachgruppe Räumen (7 Tage, 25.000 Credits/5 Coins)<br>Fachgruppe Wassergefahren (7 Tage, 500.000 Credits/25 Coins)<br>2. TZ (7 Tage, 25.000 Credits/5 Coins)<br>2. TZ Bergungsgruppe 2 (7 Tage, 25.000 Credits/5 Coins)<br>2. TZ Zugtrupp (7 Tage, 25.000 Credits/5 Coins)<br>Fachgruppe Ortung (7 Tage, 450.000 Credits/25 Coins)',
            maxBuildings: 'z.Zt nicht bekannt',
            special: 'Mit dem Bau eines THW-Ortsverbands bekommt man einen GKW geschenkt. Mit dem Bau eines THW-Ortsverbands bekommt man 9 Mitglieder dazu. Baukosten für weitere THW-Liegenschaften: 2. Ortsverband 300.000 Credits/ 35 Coins, 3. Ortsverband 358.496 Credits/ 35 Coins, 4. Ortsverband 432.193 Credits/ 35 Coins, 5. Ortsverband 458.496 Credits/ 35 Coins. Formel: <code>200.000+100.000*LOG<sub>2</sub>(Anzahl der vorhandenen Wachen + 1)</code>'
        },
        thwschule: {
            name: 'THW Bundeschule',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'Keine Ausbaustufen möglich',
            startPersonell: 0,
            startVehicle: 'Keine Fahrzeuge stationierbar',
            extensions: 'Bis zu 3 weitere Klassenzimmer (jeweils 7 Tage, 400.000 Credits/40 Coins)',
            maxBuildings: 'Keine Grenze',
            special: 'Finanzminister und Admins können Verbands-THW-Schulen mit Hilfe von Credits aus der Verbandskasse (aus-)bauen.'
        }
    };

    I18n.translations.de_DE.lssm.overview.hiorgs = {
        fw: 'Feuerwehr',
        fwspecial: 'Werk-/Flughafenfeuerwehr',
        rd: 'Rettungsdienst',
        pol: 'Polizei',
        bepol: 'Bereitschaftspolizei',
        polspecial: 'Polizei Sondereinheiten',
        thw: 'THW',
        wr: 'Wasserrettung',
        heli: 'Helikopter',
        seg: 'SEG',
        rhs: 'RHS'
    };

    I18n.translations.de_DE.lssm.overview.vehicles = {
        fw: {
            lf20: {
                name: 'LF 20',
                min: 1,
                max: 9,
                credits: 5000,
                wtank: 2000,
                coins: 25
            },
            lf10: {
                name: 'LF 10',
                min: 1,
                max: 9,
                credits: 5000,
                wtank: 1200,
                coins: 25
            },
            dlk23: {
                name: 'DLK 23',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 30,
                special: 'Wird ab 3 Feuerwachen benötigt.'
            },
            elw1: {
                name: 'ELW 1',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 25,
                special: 'Wird ab 6 Feuerwachen benötigt.'
            },
            rw: {
                name: 'RW',
                min: 1,
                max: 3,
                credits: 12180,
                coins: 25,
                special: 'Wird ab 4 Feuerwachen benötigt.'
            },
            gwa: {
                name: 'GW-A',
                min: 1,
                max: 3,
                credits: 11680,
                coins: 25,
                special: 'Wird ab 5 Feuerwachen benötigt.'
            },
            lf86: {
                name: 'LF 8/6',
                min: 1,
                max: 9,
                credits: 5000,
                wtank: 600,
                coins: 25
            },
            lf2016: {
                name: 'LF 20/16',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25,
                wtank: 1600
            },
            lf106: {
                name: 'LF 106',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25,
                wtank: 600
            },
            lf16ts: {
                name: 'LF 16-TS',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25,
                wtank: 0
            },
            klf: {
                name: 'KLF',
                min: 1,
                max: 6,
                credits: 5000,
                coins: 25,
                wtank: 500
            },
            mlf: {
                name: 'MLF',
                min: 1,
                max: 6,
                credits: 5000,
                coins: 25,
                wtank: 1000
            },
            gwoel: {
                name: 'GW-Öl',
                min: 1,
                max: 3,
                credits: 12000,
                coins: 25,
                special: 'Wird ab 6 Feuerwachen benötigt.'
            },
            gwl2: {
                name: 'GW-L2-Wasser',
                min: 1,
                max: 3,
                credits: 17300,
                coins: 25,
                special: 'Ein Schlauchwagen wird ab 7 Feuerwachen benötigt.'
            },
            gwmess: {
                name: 'GW-Messtechnik',
                min: 1,
                max: 3,
                credits: 18300,
                coins: 25,
                schooling: 'GW-Messtechnik',
                special: 'Wird ab 10 Feuerwachen benötigt.'
            },
            sw1000: {
                name: 'SW 1000',
                min: 1,
                max: 3,
                credits: 17300,
                coins: 25,
                special: 'Ein Schlauchwagen wird ab 7 Feuerwachen benötigt.'
            },
            sw2000: {
                name: 'SW 2000',
                min: 1,
                max: 6,
                credits: 17300,
                coins: 25,
                special: 'Ein Schlauchwagen wird ab 7 Feuerwachen benötigt.'
            },
            sw2000tr: {
                name: 'SW 2000-Tr',
                min: 1,
                max: 3,
                credits: 17300,
                coins: 25,
                special: 'Ein Schlauchwagen wird ab 7 Feuerwachen benötigt.'
            },
            swkats: {
                name: 'SW Kats',
                min: 1,
                max: 3,
                credits: 17300,
                coins: 25,
                special: 'Ein Schlauchwagen wird ab 7 Feuerwachen benötigt.'
            },
            tlf2000: {
                name: 'TLF 2000',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 2000
            },
            tlf3000: {
                name: 'TLF 3000',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 3000
            },
            tlf4000: {
                name: 'TLF 4000',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 4000
            },
            tlf88: {
                name: 'TLF 8/8',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 800
            },
            tlf818: {
                name: 'TLF 8/18',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 1800
            },
            tlf1624tr: {
                name: 'TLF 16/24-Tr',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 2400
            },
            tlf1625: {
                name: 'TLF 16/25',
                min: 1,
                max: 6,
                credits: 5000,
                coins: 25,
                wtank: 2500
            },
            tlf1645: {
                name: 'TLF 16/45',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 4500
            },
            tlf2040: {
                name: 'TLF 20/40',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 4000
            },
            tlf2040sl: {
                name: 'TLF 20/40-SL',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 4000
            },
            tlf16: {
                name: 'TLF 16',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25,
                wtank: 1800
            },
            gwgefahr: {
                name: 'GW-Gefahrgut',
                min: 1,
                max: 3,
                credits: 19200,
                coins: 25,
                schooling: 'GW-Gefahrgut',
                special: 'Wird ab 11 Feuerwachen benötigt.'
            },
            hlf20: {
                name: 'HLF 20',
                min: 1,
                max: 9,
                credits: 20000,
                coins: 25,
                special: 'Ein HLF vor Ort zählt wie ein LF/TLF und ein RW gleichzeitig.<br>Es wird mindestens der Rang "Gruppenführer(in)" benötigt, um ein HLF kaufen zu können.',
                wtank: 1600
            },
            hlf10: {
                name: 'HLF 10',
                min: 1,
                max: 9,
                credits: 20000,
                coins: 25,
                special: 'Ein HLF vor Ort zählt wie ein LF/TLF und ein RW gleichzeitig.<br>Es wird mindestens der Rang "Gruppenführer(in)" benötigt, um ein HLF kaufen zu können.',
                wtank: 1000
            },
            gwhoehen: {
                name: 'GW-Höhenrettung',
                min: 1,
                max: 9,
                credits: 19500,
                coins: 25,
                schooling: 'GW-Höhenrettung',
                special: 'Wird ab 12 Feuerwachen benötigt.'
            },
            elw2: {
                name: 'ELW 2',
                min: 1,
                max: 6,
                credits: 25500,
                coins: 25,
                schooling: 'ELW 2',
                special: 'Ein ELW 2 vor Ort zählt wie ein ELW 1 und ein ELW 2 gleichzeitig.<br>Wird ab 13 Feuerwachen benötigt.'
            },
            mtw: {
                name: 'MTW',
                min: 1,
                max: 9,
                credits: 2500,
                coins: 12,
                special: 'Wird nie angefordert. Dient lediglich dazu, Personal zum Einsatz zu bringen.'
            },
            tsfw: {
                name: 'TSF-W',
                min: 1,
                max: 6,
                credits: 5000,
                coins: 25,
                wtank: 500
            },
            wlf: {
                name: 'WLF',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 12,
                schooling: 'Wechsellader',
                special: 'Wird nie angefordert. Dient zum Transport von Abrollbehältern (können bestimmte Gerätewagen ersetzten).'
            },
            abruest: {
                name: 'AB-Rüst',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Dient als Ersatz eines RW. Muss von einem WLF zum Einsatz gebracht werden.'
            },
            abatem: {
                name: 'AB-Atemschutz',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Dient als Ersatz eines GW-A. Muss von einem WLF zum Einsatz gebracht werden.'
            },
            aboel: {
                name: 'AB-Öl',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Dient als Ersatz eines GW-Öl. Muss von einem WLF zum Einsatz gebracht werden.'
            },
            absw: {
                name: 'AB-Schlauch',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Dient als Ersatz eines Schlauchwagens. Muss von einem WLF zum Einsatz gebracht werden.'
            },
            dekonp: {
                name: 'Dekon-P',
                min: 1,
                max: 6,
                credits: 23100,
                coins: 25,
                schooling: 'Dekon-P',
                special: 'Pro Dekon-P müssen 6 Personen mit Dekon-P-Ausbildung vor Ort sein.<br>Wird ab 14 Feuerwachen benötigt.'
            },
            abdekonp: {
                name: 'AB-Dekon-P',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Pro AB-Dekon-P müssen 6 Personen mit Dekon-P-Ausbildung vor Ort sein.<br>Dient als Ersatz eines Dekon-P. Muss von einem WLF zum Einsatz gebracht werden.'
            },
            fwk: {
                name: 'FwK',
                min: 1,
                max: 2,
                credits: 30000,
                coins: 25,
                schooling: 'Feuerwehrkran',
                special: 'Wird ab 14 Feuerwachen benötigt.'
            },
            abmzb: {
                name: 'AB-MzB',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Pro Boot müssen 4 Leute mit Wasserrettungs-Ausbildung (Organisation egal) vor Ort sein.<br>Muss von einem WLF zum Einsatz gebracht werden.'
            },
            abgefahr: {
                name: 'AB-Gefahrgut',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Es muss mindestens eine Person mit Gefahrgut-Ausbildung vor Ort sein.<br>Dient als Ersatz von einem GW-Gefahrgut. Muss von einem WLF zum Einsatz gebracht werden.'
            },
            abelw: {
                name: 'AB-Einsatzleitung',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Es muss mindestens eine Person mit ELW2-Ausbildung vor Ort sein.<br>Dient als Ersatz von einem ELW 2. Muss von einem WLF zum Einsatz gebracht werden.'
            },
        },
        fwspecial: {
            flf: {
                name: 'FLF',
                min: 2,
                max: 3,
                credits: 80000,
                coins: 25,
                schooling: 'Flugfeldlöschfahrzeug',
                wtank: 12000,
                special: 'Kann nur an Feuerwachen mit der Ausbaute "Flughafenfeuerwehr" stationiert werden'
            },
            rtf: {
                name: 'Rettungstreppe',
                min: 2,
                max: 2,
                credits: 20000,
                coins: 25,
                schooling: 'Rettungstreppe',
                special: 'Kann nur an Feuerwachen mit der Ausbaute "Flughafenfeuerwehr" stationiert werden'
            },
            turbo: {
                name: 'Turbolöscher',
                min: 1,
                max: 3,
                credits: 12500,
                coins: 30,
                schooling: 'Werkfeuerwehr',
                special: 'Kann nur an Feuerwachen mit der Ausbaute "Werkfeuerwehr" stationiert werden'
            },
            tm50: {
                name: 'TM 50',
                min: 1,
                max: 3,
                credits: 20000,
                coins: 30,
                schooling: 'Werkfeuerwehr',
                special: 'Kann nur an Feuerwachen mit der Ausbaute "Werkfeuerwehr" stationiert werden'
            },
            ulf: {
                name: 'ULF mit Löscharm',
                min: 1,
                max: 3,
                credits: 20000,
                coins: 25,
                schooling: 'Werkfeuerwehr',
                special: 'Kann nur an Feuerwachen mit der Ausbaute "Werkfeuerwehr" stationiert werden',
                wtank: 5000
            },
            gwwerk: {
                name: 'GW-Werkfeuerwehr',
                min: 1,
                max: 9,
                credits: 15000,
                coins: 30,
                schooling: 'Werkfeuerwehr',
                special: 'Kann nur an Feuerwachen mit der Ausbaute "Werkfeuerwehr" stationiert werden'
            }
        },
        rd: {
            rtw: {
                name: 'RTW',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            nef: {
                name: 'NEF',
                min: 1,
                max: 2,
                credits: 20000,
                coins: 25,
                schooling: 'Notarzt',
                special: 'Benötigt ab 3 Rettungswachen (bzw. Rettungsdienst-Erweiterungen).'
            },
            ktw: {
                name: 'KTW',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            naw: {
                name: 'NAW',
                min: 3,
                max: 3,
                credits: 25000,
                coins: 25,
                schooling: 'Notarzt (mind. 1 Person)',
                special: 'Insgesamt so viele NAW kaufbar wie Rettungswachen (und auf einsatzbereit gestellte Rettungsdienst-Erweiterungen) vorhanden. Alle auch auf einer Wache patzierbar.'
            },
            lna: {
                name: 'KdoW-LNA',
                min: 1,
                max: 1,
                credits: 20000,
                coins: 25,
                schooling: 'Leitender Notarzt',
                special: 'Wird ab 5 Patienten am Einsatzort benötigt (Kann ab der 5. Wache bzw. Erweiterung auftreten).<br>Nicht an Rettungsdienst-Erweiterungen stationierbar.'
            },
            orgl: {
                name: 'KdoW-OrgL',
                min: 1,
                max: 1,
                credits: 20000,
                coins: 25,
                schooling: 'Organisatorischer Leiter',
                special: 'Wird ab 10 Patienten am Einsatzort benötigt (Kann ab der 10. Wache bzw. Erweiterung auftreten).<br>Nicht an Rettungsdienst-Erweiterungen stationierbar.'
            },
            grtw: {
                name: 'GRTW',
                min: 6,
                max: 6,
                credits: 25000,
                coins: 25,
                schooling: 'Modus 1: Keine<br>Modus 2: Notarzt (mind. 1 Person)',
                special: 'Der GRTW kann in zwei verschiedenen Modi alarmiert werden:<br>1.Für leichtverletzte Personen, die keinen Notarzt benötigen. Dann können in dem GRTW 7 Patienten gleichzeitig behandelt und abtransportiert werden.<br>2.Für schwerverletzte Personen, die einen Notarzt benötigen. Dann können in dem GRTW 3 Patienten gleichzeitig behandelt werden.' +
                    '<br>Pro 20 Rettungswachen (bzw. 15 Rettungswachen mit Premium Account) kann ein GRTW gekauft werden. '
            }
        },
        pol: {
            fustw: {
                name: 'FuStW',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            dhufukw: {
                name: 'DHuFüKw',
                min: 1,
                max: 2,
                credits: 15000,
                coins: 25,
                schooling: 'Hundeführer (Schutzhund)'
            }
        },
        bepol: {
            grukw: {
                name: 'GruKw',
                min: 1,
                max: 9,
                credits: 10000,
                coins: 25
            },
            lebefkw: {
                name: 'leBefKw',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 25,
                schooling: 'leBefKw',
            },
            fukw: {
                name: 'FüKw',
                min: 1,
                max: 3,
                credits: 17500,
                coins: 25,
                schooling: 'FüKw'
            },
            gefkw: {
                name: 'GefKw',
                min: 1,
                max: 2,
                credits: 13000,
                coins: 25
            },
            wawe: {
                name: 'WaWe 10000',
                min: 5,
                max: 5,
                credits: 32000,
                coins: 25,
                schooling: 'Wasserwerfer'
            }
        },
        polspecial: {
            sekzf: {
                name: 'SEK-ZF',
                min: 3,
                max: 4,
                credits: 10000,
                coins: 25,
                schooling: 'SEK'
            },
            sekmtf: {
                name: 'SEK-MTF',
                min: 9,
                max: 9,
                credits: 10000,
                coins: 25,
                schooling: 'SEK'
            },
            mekzf: {
                name: 'MEK-ZF',
                min: 3,
                max: 4,
                credits: 10000,
                coins: 25,
                schooling: 'MEK'
            },
            mekmtf: {
                name: 'MEK-MTF',
                min: 9,
                max: 9,
                credits: 10000,
                coins: 25,
                schooling: 'MEK'
            },
            fukw: {
                name: 'FüKw',
                min: 1,
                max: 3,
                credits: 17500,
                coins: 25,
                schooling: 'FüKw'
            },
            dhufukw: {
                name: 'DHuFüKw',
                min: 1,
                max: 2,
                credits: 15000,
                coins: 25,
                schooling: 'Hundeführer (Schutzhund)'
            }
        },
        thw: {
            gkw: {
                name: 'GKW',
                min: 1,
                max: 9,
                credits: 13000,
                coins: 25
            },
            mzkw: {
                name: 'MzKW',
                min: 1,
                max: 9,
                credits: 15000,
                coins: 25,
            },
            mtwtz: {
                name: 'MTW-TZ',
                min: 1,
                max: 4,
                credits: 2500,
                coins: 12,
                schooling: 'Zugtrupp'
            },
            lkwk9: {
                name: 'LKW K 9',
                min: 1,
                max: 3,
                credits: 15000,
                coins: 25,
                schooling: 'Fachgruppe Räumen'
            },
            brmgr: {
                name: 'BRmG R',
                min: 0,
                max: 0,
                credits: 15000,
                coins: 25,
                special: 'Muss vom LKW K9 zum Einsatz gezogen werden.'
            },
            anhdle: {
                name: 'Anh DLE',
                min: 0,
                max: 0,
                credits: 15000,
                coins: 25,
                special: 'Muss von einem GKW, MzKW, MTW-TZ oder MLW 5 zum Einsatz gezogen werden.'
            },
            mlw5: {
                name: 'MLW 5',
                min: 1,
                max: 6,
                credits: 2500,
                coins: 12,
                schooling: 'Fachgruppe Räumen'
            },
            mtwov: {
                name: 'MTW-OV',
                min: 4,
                max: 5,
                credits: 19000,
                coins: x,
                schooling: 'Rettungshundeführer (THW)'
            },
            anhhund: {
                name: 'Anh Hund',
                min: 0,
                max: 0,
                credits: 6000,
                coins: x,
                special: 'Am Einsatzort sind ein "Rettungshundefahrzeug" und ein "Anh Hund" vom THW gleichwertig!'
            },
            lkw7: {
                name: 'LKW 7 Lkr 19tm',
                min: 1,
                max: 2,
                credits: 10000,
                coins: 25
            },
            tauch: {
                name: 'Tauchkraftwagen',
                min: 1,
                max: 2,
                credits: 10000,
                coins: 25
            },
            mzb: {
                name: 'Anh MzB',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Pro Boot müssen 4 Leute mit Wasserrettungs-Ausbildung (Organisation egal) vor Ort sein.<br>Muss vom LKW 7 Lkr 19tm zum Einsatz gebracht werden.'
            },
            mzab: {
                name: 'Anh MzAB',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Pro Boot müssen 4 Leute mit Wasserrettungs-Ausbildung (Organisation egal) vor Ort sein.<br>Muss vom LKW 7 Lkr 19tm zum Einsatz gebracht werden.'
            },
            schlb: {
                name: 'Anh SchlB',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Pro Boot müssen 4 Leute mit Wasserrettungs-Ausbildung (Organisation egal) vor Ort sein.<br>Muss vom LKW 7 Lkr 19tm zum Einsatz gebracht werden.'
            }
        },
        wr: {
            gwwasser: {
                name: 'GW-Wasserrettung',
                min: 1,
                max: 6,
                credits: 10000,
                coins: 25
            },
            gwtaucher: {
                name: 'GW-Taucher',
                min: 2,
                max: 2,
                credits: 10000,
                coins: 25,
                schooling: 'Taucher'
            },
            mzb: {
                name: 'MzB',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Pro Boot müssen 4 Leute mit Wasserrettungs-Ausbildung (Organisation egal) vor Ort sein.<br>Muss von einem GW-Wasserrettung oder GW-Taucher zum Einsatz gebracht werden.'
            }
        },
        heli: {
            polheli: {
                name: 'Polizeihubschrauber',
                min: 1,
                max: 3,
                credits: 300000,
                coins: 30,
                schooling: 'Polizeihubschrauber'
            },
            rth: {
                name: 'RTH',
                min: 1,
                max: 1,
                credits: 300000,
                coins: 30,
                schooling: 'Notarzt',
                special: 'Kann anstelle eines NEF eingesetzt werden. Transportiert seine Patienten selbst.'
            }
        },
        seg: {
            rtw: {
                name: 'RTW',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            ktwb: {
                name: 'KTW Typ B',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25,
                special: 'Kann, wenn ein GW-San vor Ort ist, behandelte Patienten vom Einsatzort abtransportieren. Ein Transport mit Notarztbegleitung durch ein NEF ist auch möglich.'
            },
            elw: {
                name: 'ELW 1 (SEG)',
                min: 1,
                max: 2,
                credits: 25500,
                coins: 25,
                schooling: 'SEG-Einsatzleitung',
                special: 'Kann automatisch eingehende Sprechwünsche der eigenen Rettungsmittel bearbeiten und ihnen im Transportfall ein geeignetes Krankenhaus zuweisen. Die automatische Zuweisungsfunktion kann in dessen Einstellungen verändert werden.'
            },
            rhf: {
                name: 'Rettungshundefahrzeug',
                min: 4,
                max: 5,
                credits: 25000,
                coins: 25,
                schooling: 'Rettungshundeführer (SEG)',
                special: 'Am Einsatzort sind ein "Rettungshundefahrzeug" und ein "Anh Hund" vom THW gleichwertig!'
            },
            gwsan: {
                name: 'GW-San',
                min: 6,
                max: 6,
                credits: 10000,
                coins: 25,
                schooling: 'SEG-GW-SAN',
                special: 'Pro GW-San können 5 KTW Typ B wie ein RTW arbeiten. Er behandelt die Patienten zwar größtenteils, aber für die letzten paar Prozente braucht man dann einen RTW, KTW Typ B oder ähnliches'
            }
        },
        rhs: {
            rhf: {
                name: 'Rettungshundefahrzeug',
                min: 4,
                max: 5,
                credits: 25000,
                coins: 25,
                schooling: 'Rettungshundeführer (SEG)',
                special: 'Am Einsatzort sind ein "Rettungshundefahrzeug" und ein "Anh Hund" vom THW gleichwertig!'
            }
        }
    };

    I18n.translations.en_US.lssm.overview.hiorgs = {
        fd: 'Fire Department',
        rd: 'Rescue Department',
        pol: 'Police',
        heli: 'Helicopter',
        brush: 'Brush',
        fbi: 'FBI'
    };

    I18n.translations.en_US.lssm.overview.buildings = {
        lst: {
            name: 'Dispatch Center',
            credits: 0,
            coins: 0,
            maxlevel: 0,
            levelcost: 'No expansion stages possible',
            startPersonell: 0,
            startVehicle: 'No vehicles stationable',
            extensions: 'No extensions possible',
            maxBuildings: 'All 25 buildings one Dispatch Center',
            special: 'The control centre is the administrative centre.'
        },
        fw: {
            name: 'Fire Station',
            credits: 100000,
            coins: 30,
            maxlevel: 40,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-40. 100.000',
            startPersonell: 10,
            startVehicle: 'Type 1 fire engine, Type 2 fire engine',
            extensions: 'Ambulance (7 Days, 100.000 Credits/20 Coins)<br>Water Rescue (7 Days, 100.000 Credits/20 Coins)<br>Airport (7 Days, 100.000 Credits/20 Coins)<br>Forestry (7 Days, 50.000 Credits/13 Coins)',
            maxBuildings: '2.400',
            special: 'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!'
        },
        fwklein: {
            name: 'Fire Station (Small)',
            credits: 50000,
            coins: 25,
            maxlevel: 5,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000<br>Conversion to Normal Guard: Difference Price to Normal Guard',
            startPersonell: 10,
            startVehicle: 'Type 1 fire engine, Type 2 fire engine',
            maxBuildings: '2.400',
            special: 'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>50.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. Max. 1 Million Credits. The Coins price remains constant!'
        },
        fwschule: {
            name: 'Fire Academy',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'No expansion stages possible',
            startPersonell: 0,
            startVehicle: 'No vehicles stationable',
            extensions: 'Up to 3 more Classrooms (in each case 7 Days, 400.000 Credits/40 Coins)',
            maxBuildings: 'No limit',
            special: 'Minister of Finance and Admins can be Allianz Fire Academys with the help of credits from the Allianz treasury (Expand) build.'
        },
        rw: {
            name: 'Ambulance Station',
            credits: 200000,
            coins: 35,
            maxlevel: 40,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-40. 100.000',
            startPersonell: 2,
            startVehicle: 'ALS Ambulance',
            extensions: 'No extensions possible',
            maxBuildings: 'No Limit'
        },
        rwklein: {
            name: 'Ambulance station (Small station)',
            credits: 100000,
            coins: 25,
            maxlevel: 6,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000',
            startPersonell: 3,
            startVehicle: 'ALS Ambulance',
            extensions: 'No extensions possible',
            maxBuildings: 'No Limit'
        },
        kh: {
            name: 'Hospital',
            credits: 200000,
            coins: 35,
            maxlevel: 20,
            levelcost: 'in each case 19.000 Credits/11 Coins',
            startPersonell: 0,
            startVehicle: 'No vehicles can be stationed, but 10 beds from the start',
            extensions: 'Several specialisations (in each case 7 Days, 70.000 Credits/15 Coins,  General Internal and General Surgeon only 10.000 Credits/10 Coins)',
            maxBuildings: 'No Limit',
            special: 'Minister of Finance and Admins can be Allianz Hospital with the help of credits from the Allianz treasury (Expand) build.'
        },
        khklein: {
            name: 'Clinic',
            credits: 100000,
            coins: 25,
            maxlevel: 5,
            levelcost: 'in each case 20.000 Credits/11 Coins',
            startPersonell: 0,
            startVehicle: 'Non. You can buy max. 2 Vehicles',
            extensions: 'General Internal (10.000 Credits/10 Coins)',
            maxBuildings: 'No Limit'
        },
        rth: {
            name: 'Helicopter Station',
            credits: 1000000,
            coins: 50,
            maxlevel: 0,
            levelcost: '1,000,000 Credits/50 Coins each',
            startPersonell: 0,
            startVehicle: 'No starting vehicle',
            maxBuildings: 'see column "special"',
            extensions: 'No extensions possible',
            special: 'Up to 4 landing sites can be built per station (expansion stages). Up to the 125th building (of all kinds) a maximum of 4 landing sites can be built. After that the number of all 25 buildings grows by 1 (starting with 125.).'
        },
        pol: {
            name: 'Police Station',
            credits: 100000,
            coins: 35,
            maxlevel: 14,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-14. 100.000',
            startPersonell: 2,
            startVehicle: 'Patrol Car',
            extensions: 'Cell (25.000 Credits)<br>Max. 10 can be built',
            maxBuildings: '1.100',
        },
        polklein: {
            name: 'Police Station (small station)',
            credits: 50000,
            coins: 25,
            maxlevel: 4,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-4. 100.000',
            startPersonell: 2,
            startVehicle: 'Patrol Car',
            maxBuildings: '1.100',
        },
        fbi: {
            name: 'Federal Police Station',
            credits: 5000000,
            coins: 50,
            maxlevel: 20,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-20. 100.000',
            startPersonell: 10,
            startVehicle: 'FBI Unit',
            maxBuildings: 'x',
        },
        polschule: {
            name: 'Police Academy',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'No expansion stages possible',
            startPersonell: 0,
            startVehicle: 'No vehicles stationable',
            extensions: 'Up to 3 more Classrooms (in each case 7 Days, 400.000 Credits/40 Coins)',
            maxBuildings: 'No limit',
            special: 'Minister of Finance and Admins can be Allianz Police Academys with the help of credits from the Allianz treasury (Expand) build.'
        },
        polheli: {
            name: 'Police Aviation',
            credits: 1000000,
            coins: 50,
            maxlevel: 4,
            levelcost: '1,000,000 Credits/50 Coins each',
            startPersonell: 0,
            startVehicle: 'No starting vehicle',
            maxBuildings: 'see column "special"',
            extensions: 'No extensions possible',
            special: 'Up to 4 landing sites can be built per station (expansion stages). Up to the 125th building (of all kinds) a maximum of 4 landing sites can be built. After that the number of all 25 buildings grows by 1 (starting with 125.).'
        },
        rbd: {
            name: 'Rescue Boat Dock',
            credits: 500000,
            coins: 35,
            maxlevel: 16,
            levelcost: 'I Dont know',
            startPersonell: 2,
            startVehicle: '',
            extensions: '',
            maxBuildings: 'No Limit'
        },
        fbd: {
            name: 'Fire Boat Dock',
            credits: 500000,
            coins: 35,
            maxlevel: 16,
            levelcost: 'I Dont know',
            startPersonell: 2,
            startVehicle: '',
            extensions: '',
            maxBuildings: 'No Limit'
        },
        fps: {
            name: 'Firefighting plane station',
            credits: 1500000,
            coins: 50,
            maxlevel: x,
            levelcost: 1500000,
            startPersonell: 2,
            startVehicle: 'Water drop helicopter',
            extensions: '',
            maxBuildins: 'No Limit'
        }
    };

    I18n.translations.en_US.lssm.overview.vehicles = {
        fd: {
            t1fe: {
                name: 'Type 1 Fire Engine',
                min: 1,
                max: 6,
                credits: 5000,
                coins: 25
            },
            t2fe: {
                name: 'Type 2 Fire Engine',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            quint: {
                name: 'Quint',
                min: 1,
                max: 6,
                credits: 19000,
                coins: 25,
                special: 'To purchase with credits it requires the rank: Captain, <br>Lower ranked members can purchase the vehicle for 25 Coins. <br>Quint acts as a Platform Truck and a Fire Truck.'
            },
            reseng: {
                name: 'Rescue Engine',
                min: 1,
                max: 6,
                credits: 19000,
                coins: 25,
                special: 'To purchase with credits it requires the rank: Captain, <br>Lower ranked members can purchase the vehicle for 25 Coins.<br> The Rescue Engine acts as a Heavy Rescue and a Fire Engine.'
            },
            dlk: {
                name: 'Platform truck',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 30,
                special: 'Required from 3 fire stations'
            },
            rw: {
                name: 'Heavy rescue vehicle',
                min: 1,
                max: 4,
                credits: 12180,
                coins: 25,
                special: 'Required from 4 fire stations'
            },
            rw1: {
                name: 'Heavy Rescue + Boat',
                min: 1,
                max: 4,
                credits: 19000,
                coins: 25,
                schooling: 'Swift water rescue',
                special: 'Combines the Heavy Rescue Vehicle/Utility Vehicle with an integrated boat.<br> No need for a boat trailer.'
            },
            utun: {
                name: 'Utility unit',
                min: 1,
                max: 4,
                credits: 12180,
                coins: 25,
                special: 'Required from 4 fire stations, can be used in place of a Heavy Rescue Vehicle. <br>Utility units can be used to tow Boat Trailers.'
            },
            boatt: {
                name: 'Boat Trailer',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Accessory boat that can be towed with the Utility Unit. Requires Swift Water Rescue trained personnel to operate.<br> The boat trailer cannot be assigned personnel, <br>either assign your trained personnel to the towing vehicle, or assign them to a separate unit en route.'
            },
            air: {
                name: 'Mobile air',
                min: 1,
                max: 3,
                credits: 11680,
                coins: 25,
                special: 'Required from 5 fire stations'
            },
            elw1: {
                name: 'Bataillon chief unit',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 25,
                special: 'Required from 6 fire stations'
            },
            watertanker: {
                name: 'Water Tanker',
                min: 1,
                max: 3,
                credits: 17300,
                coins: 25,
                wtank: 3000,
                special: 'Required from 7 fire stations'
            },
            hazm: {
                name: 'HazMat',
                min: 1,
                max: 6,
                credits: 19200,
                coins: 25,
                schooling: 'Hazmat',
                special: 'Required from 11 fire stations'
            },
            mcv: {
                name: 'Mobile command vehicle',
                min: 1,
                max: 6,
                credits: 25500,
                coins: 25,
                schooling: 'Mobile Command',
                special: 'Required from 13 fire stations'
            },
            arff: {
                name: 'ARFF',
                min: 1,
                max: 3,
                credits: 20000,
                coins: 25,
                schooling: 'ARFF',
                special: 'Requires airport extension on fire station'
            },
            fdboat: {
                name: 'Large Fireboat',
                min: 2,
                max: 7,
                credits: 35000,
                coins: 35,
                schooling: 'Ocean Navigation',
                special: 'Required from x fire stations'
            },
        },
        rd: {
            als: {
                name: 'ALS Ambulance',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            bls: {
                name: 'BLS Ambulance',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            flyc: {
                name: 'Fly-Car',
                min: 1,
                max: 1,
                credits: 4000,
                coins: 20,
                special: 'No missions require a Fly Car at this time, however it is able to treat patients.'
            },
            emsrescue: {
                name: 'EMS Rescue',
                min: 1,
                max: 5,
                credits: 12180,
                coins: 25,
                special: 'No missions require a Fly Car at this time, however it is able to treat patients.'
            },
            grtw: {
                name: 'Mass Casualty Unit',
                min: 6,
                max: 6,
                credits: 25000,
                coins: 25,
                schooling: 'Well, no information avaiable yet.',
                special: 'The MCU can be alarmed in two different modes:<br>1. for lightly injured persons who do not need an emergency physician. Then 7 patients can be treated and removed simultaneously in the MCU.<br>2.For severely injured persons who need an emergency physician. Then 3 patients can be needled simultaneously in the MCU.'
            },
            rdboat: {
                name: 'Large Rescue Boat',
                min: 2,
                max: 6,
                credits: 35000,
                coins: 35,
                schooling: 'Ocean Navigation',
                special: 'Required from x fire stations'
            },
            emschief: {
                name: 'EMS Chief',
                min: 1,
                max: 2,
                credits: 10000,
                coins: 20,
                special: 'Required once you have built 10 Rescue stations'
            },
        },
        heli: {
            hems: {
                name: 'HEMS',
                min: 1,
                max: 1,
                credits: 300000,
                coins: 30
            },
            polh: {
                name: 'Police helicopter',
                min: 1,
                max: 2,
                credits: 300000,
                coins: 30
            },
        },
        pol: {
            fustw: {
                name: 'Police Car',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            sheriff: {
                name: 'Sheriff Unit',
                min: 1,
                max: 2,
                credits: 15000,
                coins: 20,
                schooling: 'Sheriff'
            },
            k9: {
                name: 'K-9',
                min: 1,
                max: 2,
                credits: 7000,
                coins: 25,
                schooling: 'K-9',
                special: 'Required from 6 Police stations'
            },
            polmc: {
                name: 'Police Motorcycle',
                min: 1,
                max: 1,
                credits: 2500,
                coins: 18,
                schooling: 'Motor Officer'
            },
            swatarmoured: {
                name: 'SWAT Armoured Vehicle',
                min: 1,
                max: 6,
                credits: 10000,
                coins: 25,
                schooling: 'SWAT',
                special: 'Required from 8 Police stations'
            },
            swatsuv: {
                name: 'SWAT SUV',
                min: 1,
                max: 4,
                credits: 7000,
                coins: 23,
                schooling: 'SWAT',
                special: 'Required from 8 Police stations'

            },
        },
        fbi: {
            fbiu: {
                name: 'FBI Unit',
                min: 2,
                max: 4,
                credits: 10000,
                coins: 15
            },
            fbiiw: {
                name: 'FBI Investigation Wagon',
                min: 2,
                max: 4,
                credits: 10000,
                coins: 15
            },
            fbimcc: {
                name: 'FBI Mobile Command Center',
                min: 1,
                max: 4,
                credits: 25000,
                coins: 25,
                schooling: 'FBI Mobile Center Commmander'
            },
            fbibomb: {
                name: 'FBI Bomb Technician Vehicle',
                min: 1,
                max: 2,
                credits: 35000,
                coins: 35,
                schooling: 'FBI Bomb Technician'
            },
            fbidrone: {
                name: 'FBI Surveillance Drone',
                min: 1,
                max: 1,
                credits: 25000,
                coins: 25,
                schooling: 'FBI Drone Operator'
            },
        },
        brush: {
            t3fe: {
                name: 'Type 3 Fire Engine',
                min: 3,
                max: 5,
                credits: 19000,
                coins: 19,
                wtank: 500
            },
            t4fe: {
                name: 'Type 4 Fire Engine',
                min: 3,
                max: 5,
                credits: 10000,
                coins: 10,
                wtank: 750
            },
            t5fe: {
                name: 'Type 5 Fire Engine',
                min: 1,
                max: 3,
                credits: 8000,
                coins: 8,
                wtank: 400
            },
            t6fe: {
                name: 'Type 6 Fire Engine',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 5
            },
            t7fe: {
                name: 'Type 7 Fire Engine',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            pumpert: {
                name: 'Pumper Tanker',
                min: 1,
                max: 6,
                credits: 19000,
                coins: 19,
                wtank: 1500
            },
            crewc: {
                name: 'Crew Carrier',
                min: 1,
                max: 12,
                credits: 10000,
                coins: 10
            },
            wdh: {
                name: 'Water drop helicopter',
                min: 2,
                max: 5,
                credits: 300000,
                coins: 130,
                wtank: 2000,
                schooling: 'Airborne firefighting'
            },
            att: {
                name: 'Air tanker',
                min: 2,
                max: 5,
                credits: 1000000,
                coins: 50,
                wtank: 7200,
                schooling: 'Airborne firefighting'
            },
            hat: {
                name: 'Heavy air tanker',
                min: 2,
                max: 5,
                credits: 1500000,
                coins: 65,
                wtank: 12000,
                schooling: 'Airborne firefighting'
            },
            dozer: {
                name: 'Dozer Trailer',
                min: 0,
                max: 0,
                credits: 20000,
                coins: 15,
                schooling: 'Heavy Machinery Operating',
                special: 'Dozer Trailer that can be towed with the Crew cap semi. Requires Heavy Machinery Operating and Truck Driver\'s License trained personnel to operate.<br> The dozer trailer cannot be assigned personnel, <br>either assign your trained personnel to the towing vehicle, or assign them to a separate unit en route.'
            },
            crewcs: {
                name: 'Crew cap semi',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 12,
                schooling: 'Truck Driver\'s License'
            }
        },
    };

    I18n.translations.en_GB.lssm.overview.hiorgs = {
        fd: 'Fire Department',
        rd: 'Rescue Department',
        pol: 'Police',
        heli: 'Helicopter'
    };

    I18n.translations.en_GB.lssm.overview.buildings = {
        lst: {
            name: 'Dispatch Center',
            credits: 0,
            coins: 0,
            maxlevel: 0,
            levelcost: 'No expansion stages possible',
            startPersonell: 0,
            startVehicle: 'No vehicles stationable',
            extensions: 'No extensions possible',
            maxBuildings: 'All 25 buildings one Dispatch Center',
            special: 'The control centre is the administrative centre.'
        },
        pol: {
            name: 'Police Station',
            credits: 100000,
            coins: 35,
            maxlevel: 14,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-14. 100.000',
            startPersonell: 2,
            startVehicle: 'Incident response vehicle (IRV)',
            extensions: 'Cell (25.000 Credits)<br>Max. 10 can be built',
            maxBuildings: '1.100',
        },
        polklein: {
            name: 'Police Station (small station)',
            credits: 50000,
            coins: 25,
            maxlevel: 4,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-4. 100.000',
            startPersonell: 2,
            startVehicle: 'Incident response vehicle (IRV)',
            extensions: 'Cell (25.000 Credits)<br>Max. 2 can be built',
            maxBuildings: '1.100',
        },
        polschule: {
            name: 'Police training centre',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'No expansion stages possible',
            startPersonell: 0,
            startVehicle: 'No vehicles stationable',
            extensions: 'Up to 3 more Classrooms (in each case 7 Days, 400.000 Credits/40 Coins)',
            maxBuildings: 'No limit',
            special: 'Minister of Finance and Admins can be Allianz Police Academys with the help of credits from the Allianz treasury (Expand) build.'
        },
        polheli: {
            name: 'Police Aviation Station',
            credits: 1000000,
            coins: 50,
            maxlevel: 4,
            levelcost: '1,000,000 Credits/50 Coins each',
            startPersonell: 0,
            startVehicle: 'No starting vehicle',
            maxBuildings: 'see column "special"',
            extensions: 'No extensions possible',
            special: 'Up to 4 landing sites can be built per station (expansion stages). Up to the 125th building (of all kinds) a maximum of 4 landing sites can be built. After that the number of all 25 buildings grows by 1 (starting with 125.).'
        },
        fw: {
            name: 'Fire Department',
            credits: 100000,
            coins: 30,
            maxlevel: 40,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-40. 100.000',
            startPersonell: 10,
            startVehicle: 'Water Ladder, Light 4X4 Pump (L4P)',
            extensions: 'Ambulance (7 Days, 100.000 Credits/20 Coins)<br>Water Rescue (7 Days, 100.000 Credits/20 Coins)<br>Airport (7 Days, 100.000 Credits/20 Coins)',
            maxBuildings: '2.400',
            special: 'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!'
        },
        fwklein: {
            name: 'Fire Station (Small)',
            credits: 50000,
            coins: 25,
            maxlevel: 5,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000<br>Conversion to Normal Guard: Difference Price to Normal Guard',
            startPersonell: 10,
            startVehicle: 'Water Ladder, Light 4X4 Pump (L4P)',
            maxBuildings: '2.400',
            extensions: 'No extensions possible',
            special: 'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>50.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. Max. 1 Million Credits. The Coins price remains constant!'
        },
        fwschule: {
            name: 'Fire Academy',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'No expansion stages possible',
            startPersonell: 0,
            startVehicle: 'No vehicles stationable',
            extensions: 'Up to 3 more Classrooms (in each case 7 Days, 400.000 Credits/40 Coins)',
            maxBuildings: 'No limit',
            special: 'Minister of Finance and Admins can be Allianz Fire Academys with the help of credits from the Allianz treasury (Expand) build.'
        },
        rw: {
            name: 'Ambulance Station',
            credits: 200000,
            coins: 35,
            maxlevel: 40,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-40. 100.000',
            startPersonell: 3,
            startVehicle: 'Ambulance',
            extensions: 'No extensions possible',
            maxBuildings: 'No Limit'
        },
        rwklein: {
            name: 'Ambulance station (Small station)',
            credits: 100000,
            coins: 25,
            maxlevel: 6,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000',
            startPersonell: 3,
            startVehicle: 'Ambulance',
            extensions: 'No extensions possible',
            maxBuildings: 'No Limit'
        },
        rth: {
            name: 'Medical Helicopter Station',
            credits: 1000000,
            coins: 50,
            maxlevel: 0,
            levelcost: '1,000,000 Credits/50 Coins each',
            startPersonell: 1,
            startVehicle: 'No starting vehicle',
            maxBuildings: 'see column "special"',
            extensions: 'No extensions possible',
            special: 'Up to 4 landing sites can be built per station (expansion stages). Up to the 125th building (of all kinds) a maximum of 4 landing sites can be built. After that the number of all 25 buildings grows by 1 (starting with 125.).You can also put Rapid Response Vehicle.'
        },
        kh: {
            name: 'Hospital',
            credits: 200000,
            coins: 35,
            maxlevel: 20,
            levelcost: 'in each case 19.000 Credits/11 Coins',
            startPersonell: 0,
            startVehicle: 'No vehicles can be stationed, but 10 beds from the start',
            extensions: 'Several specialisations (in each case 7 Days, 70.000 Credits/15 Coins,  General Internal and General Surgeon only 10.000 Credits/10 Coins)',
            maxBuildings: 'No Limit',
            special: 'Minister of Finance and Admins can be Allianz Hospital with the help of credits from the Allianz treasury (Expand) build.'
        },
        khklein: {
            name: 'Clinic',
            credits: 100000,
            coins: 25,
            maxlevel: 5,
            levelcost: 'in each case 20.000 Credits/11 Coins',
            startPersonell: 0,
            startVehicle: 'Non. You can buy max. 2 Vehicles',
            extensions: 'General Internal (10.000 Credits/10 Coins)',
            maxBuildings: 'No Limit'
        },
        homeb: {
            name: 'Home Response Location',
            credits: 10000,
            coins: 10,
            maxlevel: 0,
            levelcost: 'not expandeble',
            startPersonell: 1,
            startVehicle: 'Non.',
            extensions: 'non',
            maxBuildings: 'No Limit',
            special: 'It can only: Fire Officer, Rapid Response Vehicle, Operational Team Leader, General Practitioner, Community First Responder, Dog Support Unit (DSU) be stationed'
        }
    };

    I18n.translations.en_GB.lssm.overview.vehicles = {
        fd: {
            rl: {
                name: 'Water Ladder',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            trv: {
                name: 'Light 4X4 Pump (L4P)',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            dlk: {
                name: 'Aerial Appliance',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 30,
                special: 'Required from 3 fire stations'
            },
            elw: {
                name: 'Fire Officer',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 25,
                special: 'Required from 6 fire stations'
            },
            mru: {
                name: 'Rescue Support Unit (RSU)',
                min: 1,
                max: 5,
                credits: 12180,
                coins: 25,
                special: 'Required from 4 fire stations'
            },
            sw: {
                name: 'Water Carrier',
                min: 1,
                max: 3,
                credits: 17300,
                coins: 25,
                special: 'Required from 7 fire stations'
            },
            hazm: {
                name: 'HazMat Unit',
                min: 1,
                max: 6,
                credits: 19200,
                coins: 25,
                schooling: 'Hazmat',
                special: 'Required from 11 fire stations'
            },
            carp: {
                name: 'CARP',
                min: 1,
                max: 6,
                credits: 19000,
                coins: 25
            },
            resp: {
                name: 'Rescue Pump',
                min: 1,
                max: 9,
                credits: 19000,
                coins: 25
            },
            basu: {
                name: 'BASU',
                min: 1,
                max: 3,
                credits: 11680,
                coins: 25,
                special: 'Required from 5 fire stations'
            },
            iccu: {
                name: 'ICCU',
                min: 1,
                max: 6,
                credits: 25500,
                coins: 25,
                schooling: 'Mobile Command',
                special: 'Required from 13 fire stations'
            },
            cores: {
                name: 'Co-Responder Vehicle',
                min: 1,
                max: 1,
                credits: 4000,
                coins: 25,
                schooling: 'Co-Responder Training'
            },
            crewc: {
                name: 'Crew Carrier',
                min: 1,
                max: 12,
                credits: 8000,
                coins: 10,
            }
        },
        rd: {
            rtw: {
                name: 'Ambulance',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            rr: {
                name: 'Rapid Response Vehicle',
                min: 1,
                max: 1,
                credits: 4000,
                coins: 20
            },
            jores: {
                name: 'Joint Response Unit',
                min: 1,
                max: 3,
                credits: 6000,
                coins: 30
            },
            otl: {
                name: 'Operational Team Leader',
                min: 1,
                max: 1,
                credits: 20000,
                coins: 25,
                special: 'Required from 6 ambulance stations'
            },
            genp: {
                name: 'General Practitioner',
                min: 1,
                max: 1,
                credits: 4000,
                coins: 20,
                schooling: 'Critical Care',
                special: 'Can only be placed at the home response location'
            },
            comfr: {
                name: 'Community First Responder',
                min: 1,
                max: 1,
                credits: 2500,
                coins: 12,
                special: 'Can only be placed at the home response location'
            },
            crewc: {
                name: 'Crew Carrier',
                min: 1,
                max: 12,
                credits: 8000,
                coins: 10,
            }
        },
        pol: {
            fustw: {
                name: 'Incident response vehicle (IRV)',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            k9: {
                name: 'Dog Support Unit (DSU)',
                min: 1,
                max: 2,
                credits: 7000,
                coins: 25,
                schooling: 'Dog handling',
                special: 'Required from 6 Police stations'
            },
            swatsuv: {
                name: 'Armed Response Vehicle (ARV)',
                min: 1,
                max: 4,
                credits: 7000,
                coins: 23,
                schooling: 'Firearms Training',
                special: 'Required from 8 Police stations'
            },
            jores: {
                name: 'Joint Response Unit',
                min: 1,
                max: 3,
                credits: 6000,
                coins: 30
            },
            trafc: {
                name: 'Traffic Car',
                min: 1,
                max: 2,
                credits: 10000,
                coins: 10,
                schooling: 'Roads Policing Officer Training'
            },
            atrafc: {
                name: 'Armed Traffic Car',
                min: 1,
                max: 2,
                credits: 19000,
                coins: 10,
                schooling: 'Roads Policing Officer Training and Firearms Training'
            },
        },
        heli: {
            hems: {
                name: 'HEMS',
                min: 1,
                max: 1,
                credits: 300000,
                coins: 30
            },
            polh: {
                name: 'Police helicopter',
                min: 1,
                max: 2,
                credits: 300000,
                coins: 30,
                schooling: 'Police aviation'

            }
        }
    };

    I18n.translations.en_AU.lssm.overview.hiorgs = {
        fd: 'Fire Department',
        rd: 'Rescue Department',
        pol: 'Police',
        heli: 'Helicopter'
    };

    I18n.translations.en_AU.lssm.overview.buildings = {
        lst: {
            name: 'Dispatch Center',
            credits: 0,
            coins: 0,
            maxlevel: 0,
            levelcost: 'No expansion stages possible',
            startPersonell: 0,
            startVehicle: 'No vehicles stationable',
            extensions: 'No extensions possible',
            maxBuildings: 'All 25 buildings one Dispatch Center',
            special: 'The control centre is the administrative centre.'
        },
        pol: {
            name: 'Police Station',
            credits: 100000,
            coins: 35,
            maxlevel: 14,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-14. 100.000',
            startPersonell: 2,
            startVehicle: 'Police Car',
            extensions: 'Cell (25.000 Credits)<br>Max. 10 can be built',
            maxBuildings: '1.100',
        },
        polklein: {
            name: 'Police Station (small station)',
            credits: 50000,
            coins: 25,
            maxlevel: 4,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-4. 100.000',
            startPersonell: 2,
            startVehicle: 'Police Car',
            extensions: 'Cell (25.000 Credits)<br>Max. 2 can be built',
            maxBuildings: '1.100',
        },
        fw: {
            name: 'Fire Department',
            credits: 100000,
            coins: 30,
            maxlevel: 40,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-40. 100.000',
            startPersonell: 10,
            startVehicle: 'Class 2 Pumper, Class 1 Tanker',
            extensions: 'Ambulance (7 Days, 100.000 Credits/20 Coins)<br>Water Rescue (7 Days, 100.000 Credits/20 Coins)<br>Airport (7 Days, 100.000 Credits/20 Coins)',
            maxBuildings: '2.400',
            special: 'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!'
        },
        fwklein: {
            name: 'Fire Station (Small)',
            credits: 50000,
            coins: 25,
            maxlevel: 5,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000<br>Conversion to Normal Guard: Difference Price to Normal Guard',
            startPersonell: 10,
            startVehicle: 'Class 2 Pumper, Class 1 Tanker',
            maxBuildings: '2.400',
            extensions: 'No extensions possible',
            special: 'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>50.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. Max. 1 Million Credits. The Coins price remains constant!'
        },
        fwschule: {
            name: 'Fire Academy',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'No expansion stages possible',
            startPersonell: 0,
            startVehicle: 'No vehicles stationable',
            extensions: 'Up to 3 more Classrooms (in each case 7 Days, 400.000 Credits/40 Coins)',
            maxBuildings: 'No limit',
            special: 'Minister of Finance and Admins can be Allianz Fire Academys with the help of credits from the Allianz treasury (Expand) build.'
        },
        rw: {
            name: 'Ambulance Station',
            credits: 200000,
            coins: 35,
            maxlevel: 40,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-40. 100.000',
            startPersonell: 3,
            startVehicle: 'Ambulance',
            extensions: 'No extensions possible',
            maxBuildings: 'No Limit'
        },
        rwklein: {
            name: 'Ambulance station (Small station)',
            credits: 100000,
            coins: 25,
            maxlevel: 6,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000',
            startPersonell: 3,
            startVehicle: 'Ambulance',
            extensions: 'No extensions possible',
            maxBuildings: 'No Limit'
        },
        kh: {
            name: 'Hospital',
            credits: 200000,
            coins: 35,
            maxlevel: 20,
            levelcost: 'in each case 19.000 Credits/11 Coins',
            startPersonell: 0,
            startVehicle: 'No vehicles can be stationed, but 10 beds from the start',
            extensions: 'Several specialisations (in each case 7 Days, 70.000 Credits/15 Coins,  General Internal and General Surgeon only 10.000 Credits/10 Coins)',
            maxBuildings: 'No Limit',
            special: 'Minister of Finance and Admins can be Allianz Hospital with the help of credits from the Allianz treasury (Expand) build.'
        }
    };

    I18n.translations.en_AU.lssm.overview.vehicles = {
        fd: {
            t1fe: {
                name: 'Class 2 Pumper',
                min: 1,
                max: 6,
                credits: 5000,
                coins: 25
            },
            t2fe: {
                name: 'Class 1 Tanker',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            dlk: {
                name: 'Turntable Ladder',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 30,
                special: 'Required from 3 fire stations'
            },
            rw: {
                name: 'Heavy Rescue',
                min: 1,
                max: 4,
                credits: 12180,
                coins: 25,
                special: 'Required from 4 fire stations'
            },
            elw1: {
                name: 'Rapid Response Vehicle',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 25,
                special: 'Required from 6 fire stations'
            },
            watertanker: {
                name: 'Water Tanker',
                min: 1,
                max: 3,
                credits: 17300,
                coins: 25,
                special: 'Required from 7 fire stations'
            },
            hazm: {
                name: 'HAZMAT Truck',
                min: 1,
                max: 6,
                credits: 19200,
                coins: 25,
                schooling: 'Hazmat',
                special: 'Required from 11 fire stations'
            }
        },
        rd: {
            rtw: {
                name: 'Ambulance',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            }
        },
        pol: {
            fustw: {
                name: 'Police Car',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            }
        },
        heli: {
            hems: {
                name: 'helitak',
                min: x,
                max: x,
                credits: x,
                coins: x,
                schooling: x,
                special: 'x'
            }
        }
    };

    I18n.translations.sv_SE.lssm.overview.hiorgs = {
        fd: 'Brandstation',
        rd: 'Rädda',
        pol: 'Polis',
        heli: 'Helicopter'
    };

    I18n.translations.sv_SE.lssm.overview.buildings = {
        lst: {
            name: 'Larmcentral',
            credits: 0,
            coins: 0,
            maxlevel: 0,
            levelcost: 'Inga utvidgningssteg möjliga',
            startPersonell: 0,
            startVehicle: 'Inga fordon stationära',
            extensions: 'Inga förlängningar möjliga',
            maxBuildings: 'Alla 25 byggnader ett utsändningscenter',
            special: 'Kontrollcentret är det administrativa centret.'
        },
        fw: {
            name: 'Brandstation',
            credits: 100000,
            coins: 30,
            maxlevel: 40,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-40. 100.000',
            startPersonell: 10,
            startVehicle: 'BAS 1 - Släckbil, BAS 2 - Släckbil',
            extensions: 'Ambulans (7 Days, 100.000 Credits/20 Coins)<br>Vattenräddning (7 Days, 100.000 Credits/20 Coins)<br>Flygplats (7 Days, 100.000 Credits/20 Coins)',
            maxBuildings: '2.400',
            special: 'Från den 24: e brandstationen och framåt ökar kostnaden för att bygga en ny brandstation enligt följande formel: <code>100.000+200.000*LOG<sub>2</sub>(Antal befintliga brandstationer − 22)</code>. Myntpriset förblir konstant!'
        },
        fwklein: {
            name: 'Brandstation (liten)',
            credits: 50000,
            coins: 25,
            maxlevel: 5,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000<br>Konvertering till Normal Guard: Skillnadspris till Normal Guard',
            startPersonell: 10,
            startVehicle: 'BAS 1 - Släckbil, BAS 2 - Släckbil',
            maxBuildings: '2.400',
            special: 'Från den 24: e brandstationen och framåt ökar kostnaden för att bygga en ny brandstation enligt följande formel: <code>50.000+200.000*LOG<sub>2</sub>(Antal befintliga brandstationer − 22)</code>. Max. 1 miljon krediter. Myntpriset förblir konstant!'
        },
        fwschule: {
            name: 'Brandskola',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'Inga utvidgningssteg möjliga',
            startPersonell: 0,
            startVehicle: 'Inga fordon stationära',
            extensions: 'Upp till 3 klassrum till (i båda fallen 7 dagar, 400 000 krediter / 40 mynt)',
            maxBuildings: 'Ingen gräns',
            special: 'Finansminister och förvaltare kan vara Allianz Fire Academies med hjälp av krediter från Allianz Treasury (Expand).'
        },
        rw: {
            name: 'Ambulansstation',
            credits: 200000,
            coins: 35,
            maxlevel: 40,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-40. 100.000',
            startPersonell: 3,
            startVehicle: 'Ambulance',
            extensions: 'Inga förlängningar möjliga',
            maxBuildings: 'Ingen gräns'
        },
        rwklein: {
            name: 'Ambulansstation (liten)',
            credits: 100000,
            coins: 25,
            maxlevel: 6,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-5. 100.000',
            startPersonell: 3,
            startVehicle: 'Ambulance',
            extensions: 'Inga förlängningar möjliga',
            maxBuildings: 'Ingen gräns'
        },
        kh: {
            name: 'Sjukhus',
            credits: 200000,
            coins: 35,
            maxlevel: 20,
            levelcost: 'i båda fallen 19.000 krediter / 11 mynt',
            startPersonell: 0,
            startVehicle: 'Inga fordon kan stationeras utan 10 bäddar från början',
            extensions: 'Flera specialiseringar (i båda fallen 7 dagar, 70.000 krediter / 15 mynt,  General Internal and General Surgeon only 10.000 Credits/10 Coins)',
            maxBuildings: 'Ingen gräns',
            special: 'Finansminister och administratörer kan vara Allianz Hospital med hjälp av krediter från Allianz Treasury (Expand).'
        },
        pol: {
            name: 'Polisstation',
            credits: 100000,
            coins: 35,
            maxlevel: 14,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-14. 100.000',
            startPersonell: 2,
            startVehicle: 'Radiobil',
            extensions: 'Cell (25.000 krediter) <br> Max. 10 kan byggas',
            maxBuildings: '1.100',
        },
        polklein: {
            name: 'Polisstation (liten) ',
            credits: 50000,
            coins: 25,
            maxlevel: 4,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-4. 100.000',
            startPersonell: 2,
            startVehicle: 'Radiobill',
            maxBuildings: '1.100',
        }
    };

    I18n.translations.sv_SE.lssm.overview.vehicles = {
        fd: {
            t1fe: {
                name: 'BAS 1 - Släckbil',
                min: 1,
                max: 6,
                credits: 5000,
                coins: 25
            },
            t2fe: {
                name: 'BAS 2 - Släckbil',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            dlk: {
                name: 'M32L - Stegbil',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 30,
                special: 'Krävs när du har byggt 3 brandstationer'
            },
            rw: {
                name: 'Lastväxlare',
                min: 1,
                max: 4,
                credits: 12180,
                coins: 25,
                special: 'Krävs när du har byggt 4 brandstationer'
            },
            elw1: {
                name: 'Befälsfordon',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 25,
                special: 'Krävs när du har byggt 6 brandstationer'
            },
            watertanker: {
                name: 'BAS 4 - Tankbil',
                min: 1,
                max: 3,
                credits: 17300,
                coins: 25,
                special: 'Krävs när du har byggt 7 brandstationer'
            },
            hazm: {
                name: 'Industribrandbi',
                min: 1,
                max: 6,
                credits: 19200,
                coins: 25,
                schooling: 'Hazmat',
                special: 'Krävs när du har byggt 11 brandstationer'
            },
        },
        rd: {
            rtw: {
                name: 'Ambulans',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
        },
        heli: {
            hems: {
                name: 'Räddningshelikopter',
                min: 1,
                max: 1,
                credits: 300000,
                coins: 30
            },
        },
        pol: {
            fustw: {
                name: 'Radiobil',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
        }
    };

    I18n.translations.nl_NL.lssm.overview.hiorgs = {
        brand: 'Brandweer',
        waterongeval: 'Waterongevallen',
        vbb: 'Vliegtuigbrandbestrijding',
        ambulance: 'Ambulance',
        pol: 'Politie',
        hoofd: 'Politie hoofdbureau',
        heli: 'Helikopter'
    };

    I18n.translations.nl_NL.lssm.overview.buildings = {
        lst: {
            name: 'Meldkamer',
            credits: 0,
            coins: 0,
            maxlevel: 0,
            levelcost: 'Geen uitbreidingsstappen mogelijk',
            startPersonell: 0,
            startVehicle: 'Geen voertuigen stationeerbaar',
            extensions: 'Geen uitbreidingen mogelijk',
            maxBuildings: 'Voor iedere 25 gebouwen één meldkamer',
            special: 'De meldkamer is het administratief centrum.'
        },
        fw: {
            name: 'Brandweer, Kazerne',
            credits: 100000,
            coins: 30,
            maxlevel: 24,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-24. 100.000',
            startPersonell: 10,
            startVehicle: 'SI-2,TS 8/9,TST 8/9,TST 6/7,TST 4/5,TS 4/5,TST-NB 8/9,TST-NB 6/7,TST-NB 4/5,TS 6/7',
            extensions: 'Ambulance (7 dagen, 100.000 Credits/20 Coins)<br>Waterongevallenbestrijding (7 dagen, 400.000 Credits/25 Coins)<br>Vliegtuigbrandbestrijding (7 dagen, 100.000 Credits/20 Coins)<br>10*Haakarmbak parkeerplaats (in alle gevallen 7 dagen, 100.000 Credits/20 Coins)',
            maxBuildings: '2.400',
            special: 'Vanaf de 25e brandweerkazerne stijgen de kosten voor de bouw van een nieuwe brandweerkazerne volgens de volgende formule: <code>100.000+200.000*LOG<sub>2</sub>(Aantal brandweerposten − 22)</code>. De Coins prijs blijft constant!'
        },
        fwschule: {
            name: 'Brandweer, Academie',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'Geen uitbreidingsstappen mogelijk',
            startPersonell: 0,
            startVehicle: 'Geen voertuigen stationeerbaar',
            extensions: 'Tot 3 extra klaslokalen (in alle gevallen 7 dagen, 400.000 Credits/40 Coins)',
            maxBuildings: 'Geen limiet',
            special: 'Penningmeesters en Admins kunnen de Team Brandweeracademie met behulp van de credits van de Teamkas uitbreiden.'
        },
        rw: {
            name: 'Ambulance, standplaats',
            credits: 200000,
            coins: 35,
            maxlevel: 19,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-19. 100.000',
            startPersonell: 2,
            startVehicle: 'Ambulance',
            extensions: 'Geen uitbreidingen mogelijk',
            maxBuildings: 'Geen limiet'
        },
        rwklein: {
            name: 'Ambulance, VWS-post',
            credits: 100000,
            coins: 25,
            maxlevel: 1,
            levelcost: '1. 10.000',
            startPersonell: 3,
            startVehicle: 'Ambulance',
            extensions: 'Geen uitbreidingen mogelijk',
            maxBuildings: 'Geen limiet',
            special: 'Kan worden omgebouwd tot Ambulance standplaats voor 100.000 credits. Het ombouwen duurt 24 uur.'
        },
        rwschule: {
            name: 'Universiteit Faculteit Geneeskunde',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'Geen uitbreidingsstappen mogelijk',
            startPersonell: 0,
            startVehicle: 'Geen voertuigen stationeerbaar',
            extensions: 'Tot 3 extra klaslokalen (in alle gevallen 7 dagen, 400.000 Credits/40 Coins)',
            maxBuildings: 'Geen limiet',
            special: 'Penningmeesters en Admins kunnen de Team Universiteit Faculteit Geneeskunde met behulp van de credits van de Teamkas uitbreiden.'
        },
        kh: {
            name: 'Ziekenhuis',
            credits: 200000,
            coins: 35,
            maxlevel: 20,
            levelcost: 'in elk geval 19.000 Credits/11 Coins',
            startPersonell: 0,
            startVehicle: 'Geen voertuigen kunnen worden gestationeerd, maar 10 bedden vanaf het begin',
            extensions: 'Diverse specialisaties (in alle gevallen 7 Dagen, 70.000 Credits/15 Coins,  Interne Geneeskunde en Algemene Heelkunde slechts 10.000 Credits/10 Coins)',
            maxBuildings: 'Geen limiet',
            special: 'Penningmeesters en Admins kunnen het Team Ziekenhuis met behulp van de credits van de Teamkas uitbreiden.'
        },
        rth: {
            name: 'MMT Standplaats',
            credits: 800000,
            coins: 50,
            maxlevel: 3,
            levelcost: '1. 10.000<br>2. 50.000<br>3. 100.000',
            startPersonell: 1,
            startVehicle: 'Geen startend voertuig',
            maxBuildings: 'Maximaal 1 gebouw per 10 ambulance gebouwen',
            extensions: 'Geen uitbreidingen mogelijk'
        },
        pol: {
            name: 'Politie, Opkomstbureau',
            credits: 100000,
            coins: 35,
            maxlevel: 19,
            levelcost: '1. 10.000<br>2. 50.000<br>3.-19. 100.000',
            startPersonell: 2,
            startVehicle: 'DA Noodhulp',
            extensions: 'cel (25.000 Credits)<br>Max. 10 kunnen worden gebouwd',
            maxBuildings: '1.100',
            special: 'Vanaf het 25e opkomstbureau stijgen de kosten voor de bouw van een nieuw opkomstbureau volgens de volgende formule: <code>100.000+200.000*LOG<sub>2</sub>(Aantal opkomstbureaus − 22)</code>. De Coins prijs blijft constant!'
        },
        polschule: {
            name: 'Politie, Academie',
            credits: 500000,
            coins: 50,
            maxlevel: 0,
            levelcost: 'Geen uitbreidingsstappen mogelijk',
            startPersonell: 0,
            startVehicle: 'Geen voertuigen stationeerbaar',
            extensions: 'Tot 3 extra klaslokalen (in elk geval 7 dagen, 400.000 Credits/40 Coins)',
            maxBuildings: 'Geen limiet',
            special: 'Penningmeesters en Admins kunnen de Team Politie Academie met behulp van de credits van de Teamkas uitbreiden.'
        },
        polheli: {
            name: 'Politiehelikopter standplaats',
            credits: 1000000,
            coins: 50,
            maxlevel: 4,
            levelcost: '1.000.000.000 Credits/50 Coins per stuk',
            startPersonell: 3,
            startVehicle: 'Geen startend voertuig',
            maxBuildings: 'Zie speciale kenmerken',
            extensions: 'Geen uitbreidingen mogelijk',
            special: 'Er kunnen maximaal 4 landingsplaatsen per gebouw worden gebouwd. Tot het 125ste gebouw (van alle soorten) kunnen maximaal 4 landingsplaatsen worden gebouwd. Dan groeit het aantal met 1 per 25 gebouwen (vanaf 125.).'
        },
        psonder: {
            name: 'Politie, Hoofdbureau',
            credits: 400000,
            coins: 40,
            maxlevel: 0,
            levelcost: 'Geen uitbreidingsstappen mogelijk',
            startPersonell: 1,
            startVehicle: 'OvD-P',
            extensions: '2de OvD-P (3 Dagen, 40.000 Credits/5 Coins)<br>Mobiele Eenheid, Sectie (5 Dagen, 100.000 Credits/20 Coins)<br>Levende Have (7 Dagen, 100.000 Credits/20Coins)<br>Arrestatieteam (5 Dagen, 200.000 Credits/20 Coins)',
            maxBuildings: 'Geen limiet'
        }
    };

    I18n.translations.nl_NL.lssm.overview.vehicles = {
        brand: {
            abh: {
                name: 'ABH | Adembeschermingshaakarmbak',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Haakarmvoertuig benodigd'
            },
            ab: {
                name: 'AB | Adembeschermingsvoertuig',
                min: 1,
                max: 3,
                credits: 11680,
                coins: 25,
                special: 'Benodigd vanaf 5 brandweerposten.'
            },
            daags: {
                name: 'DA-AGS | Adviseur Gevaarlijke Stoffen',
                min: 1,
                max: 2,
                credits: 19200,
                coins: 25,
                schooling: 'Adviseur Gevaarlijke Stoffen',
                special: 'Benodigd vanaf 11 brandweerposten.'
            },
            al: {
                name: 'AL | Autoladder ',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 30,
                special: 'Benodigd vanaf 3 brandweerposten.'
            },
            coh: {
                name: 'COH | Commandohaakarmbak',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Haakarmvoertuig benodigd'
            },
            co: {
                name: 'CO | Commandovoertuig',
                min: 1,
                max: 3,
                credits: 27500,
                coins: 25,
                schooling: 'Brandweerchauffeur-zwaar',
                special: 'Benodigd vanaf 14 brandweerposten.'
            },
            da: {
                name: 'DA | Dienstauto',
                min: 1,
                max: 4,
                credits: 2000,
                coins: 10
            },
            dbk: {
                name: 'DB-K | Dienstbus Klein',
                min: 1,
                max: 9,
                credits: 2500,
                coins: 12
            },
            dph: {
                name: 'DPH | Dompelpomphaakarmbak',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Haakarmvoertuig benodigd'
            },
            ha: {
                name: 'HA | Haakarmvoertuig',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 12,
                schooling: 'Brandweerchauffeur-zwaar',
            },
            dahod: {
                name: 'DA-HOD | Hoofd Officier van Dienst Brandweer',
                min: 1,
                max: 1,
                credits: 25500,
                coins: 25,
                schooling: 'Hoofd Officier van Dienst',
                special: 'Benodigd vanaf 13 brandweerposten.'
            },
            hw: {
                name: 'HW | Hoogwerker',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 30,
                special: 'Benodigd vanaf 3 brandweerposten.'

            },
            hvh: {
                name: 'HVH | Hulpverleningshaakarmbak',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Haakarmvoertuig benodigd'
            },       
            hv: {
                name: 'HV | Hulpverleningsvoertuig',
                min: 1,
                max: 3,
                credits: 12180,
                coins: 25,
                special: 'Benodigd vanaf 4 brandweerposten.'
            },
            daovd: {
                name: 'DA-OVD | Officier van Dienst Brandweer',
                min: 1,
                max: 1,
                credits: 10000,
                coins: 25,
                special: 'Benodigd vanaf 6 brandweerposten.'
            },
            sl: {
                name: 'SL | Slangenwagen',
                min: 1,
                max: 9,
                credits: 17300,
                coins: 25,
                special: 'Benodigd vanaf 7 brandweerposten.'
            },
            si2: {
                name: 'SI-2 | Snel Inzetbare Eenheid (2 pers.)',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            ts45: {
                name: 'TS 4/5 | Tankautospuit (4/5 pers.)',
                min: 1,
                max: 5,
                credits: 5000,
                coins: 25
            },
            tst45: {
                name: 'TST 4/5 | Tankautospuit Terreinvaardig (4/5 pers.)',
                min: 1,
                max: 5,
                credits: 5000,
                coins: 25
            },
            tstnb45: {
                name: 'TST-NB 4/5 | Tankautospuit Natuurbrandbestrijding (4/5 pers.)',
                min: 1,
                max: 5,
                credits: 5000,
                coins: 25
            },
            ts67: {
                name: 'TS 6/7 | Tankautospuit (6/7 pers.)',
                min: 1,
                max: 7,
                credits: 5000,
                coins: 25
            },
            tst67: {
                name: 'TST 6/7 | Tankautospuit Terreinvaardig (6/7 pers.)',
                min: 1,
                max: 7,
                credits: 5000,
                coins: 25
            },
            tstnb67: {
                name: 'TST-NB 6/7 | Tankautospuit Natuurbrandbestrijding (6/7 pers.)',
                min: 1,
                max: 7,
                credits: 5000,
                coins: 25
            },
            ts89: {
                name: 'TS 8/9 | Tankautospuit (8/9 pers.)',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            tst89: {
                name: 'TST 8/9 | Tankautospuit Terreinvaardig (8/9 pers.)',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            tstnb89: {
                name: 'TST-NB 8/9 | Tankautospuit Natuurbrandbestrijding (8/9 pers.)',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            daveb: {
                name: 'DA-VEB | Verkenningseenheid Brandweer',
                min: 1,
                max: 4,
                credits: 18300,
                coins: 25,
                schooling: 'Verkenningseenheid Brandweer',
                special: 'Benodigd vanaf 10 brandweerposten.'
            },     
            davl: {
                name: 'DA-VL | Dienstauto Voorlichter',
                min: 1,
                max: 1,
                credits: 15000,
                coins: 25,
                schooling: 'Voorlichter',
                special: 'Benodigd vanaf 14 brandweerposten.'
            },
            wth: {
                name: 'WTH | Watertankhaakarmbak',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Haakarmvoertuig benodigd'
            },
            wt: {
                name: 'WT | Watertankwagen',
                min: 1,
                max: 3,
                credits: 17000,
                coins: 25,
                special: 'Benodigd vanaf 7 brandweerposten.'
            }
        },
        waterongeval: {
            pmor: {
                name: 'PM-OR | Materieelvoertuig - Oppervlakteredding',
                min: 4,
                max: 9,
                credits: 10000,
                coins: 25,
                schooling: 'Oppervlakteredder'
            },
            tsor: {
                name: 'TS-OR | Tankautospuit - Oppervlakteredding',
                min: 4,
                max: 9,
                credits: 10000,
                coins: 25,
                schooling: 'Oppervlakteredder'
            },
            wo: {
                name: 'WO | Waterongevallenvoertuig',
                min: 4,
                max: 6,
                credits: 10000,
                coins: 25,
                schooling: 'Duiker / Duikploegleider'
            },
            woa: {
				name: 'WOA | Waterongevallen aanhanger',
                min: 0,
                max: 0,
                credits: 9000,
                coins: 12,
                special: 'TS, TST, TST-NB, SI-2, WO, PM-OR, HV, DB benodigd'
            }
        },
        vbb: {
            afo: {
                name: 'AFO/OSC | Airport Fire Officer / On Scene Commander',
                min: 1,
                max: 2,
                credits: 12000,
                coins: 25,
                schooling: 'Airport Fire Officer / On Scene Commander'
            },
            ct4: {
                name: 'CT (4x4) | Crashtender',
                min: 2,
                max: 3,
                credits: 15000,
                coins: 25,
                schooling: 'Vliegtuigbrandbestrijding'
            },
           ct6: {
                name: 'CT (6x6) | Crashtender',
                min: 2,
                max: 3,
                credits: 40000,
                coins: 25,
                schooling: 'Vliegtuigbrandbestrijding'
            },
            ct8: {
                name: 'CT (8x8) | Crashtender',
                min: 2,
                max: 3,
                credits: 60000,
                coins: 25,
                schooling: 'Vliegtuigbrandbestrijding'
            }
        },
        ambulance: {
            ambulance: {
                name: 'Ambulance',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            mmta: {
                name: 'MMT-Auto',
                min: 1,
                max: 4,
                credits: 30000,
                coins: 12,
                schooling: 'MMT-Bemanningslid',
                special: 'Per 10 Ambulanceposten (Standplaatsen, VWS-posten en uitbreidingen) kan één MMT-Auto gekocht worden'
            },
            ovdg: {
                name: 'OvD-G | Officier van Dienst Geneeskunde',
                min: 1,
                max: 1,
                credits: 25000,
                coins: 25,
                schooling: 'Officier van Dienst Geneeskunde',
                special: 'Benodigd vanaf de 8 gebouwen en/of uitbreiding'
            },
            ovdgrr: {
                name: 'DA OvD-G/RR | Dienstvoertuig Officier van Dienst-Geneeskundig/Rapid Responder',
                min: 1,
                max: 1,
                credits: 25000,
                coins: 25,
                schooling: 'Officier van Dienst Geneeskunde',
                special: 'Per 10 Ambulanceposten (Standplaatsen, VWS-posten en uitbreidingen) kan één OVDG-RR gekocht worden'
            },
            rr: {
                name: 'RR | Rapid Responder',
                min: 1,
                max: 1,
                credits: 2500,
                coins: 18
            },
            bambulance: {
                name: 'Zorgambulance',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            }
        },
        pol: {
            fustw: {
                name: 'Dienstauto Noodhulp',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            dbnh: {
                name: 'Dienstbus Noodhulp',
                min: 1,
                max: 2,
                credits: 6000,
                coins: 25
            },
            dmnh: {
                name: 'Dienstmotor Noodhulp',
                min: 1,
                max: 1,
                credits: 2500,
                coins: 18
            }
        },
        hoofd: {
            ovdp: {
                name: 'OvD-P | Officier van Dienst - Politie',
                min: 1,
                max: 1,
                credits: 10000,
                coins: 25,
                schooling: 'Officier van Dienst - politie'
            },
            mefl: {
                name: 'ME Flexbus',
                min: 4,
                max: 8,
                credits: 10000,
                coins: 25,
                schooling: 'Mobiele eenheid'
            },
            meco: {
                name: 'ME Commandovoertuig',
                min: 2,
                max: 4,
                credits: 10000,
                coins: 25,
                schooling: 'Mobiele eenheid'
            },
            dahg: {
                name: 'Dienstauto Hondengeleider',
                min: 1,
                max: 2,
                credits: 8000,
                coins: 25,
                schooling: 'Hondengeleider'
            },
            dbhg: {
                name: 'Dienstbus Hondengeleider',
                min: 1,
                max: 2,
                credits: 10000,
                coins: 25,
                schooling: 'Hondengeleider'
            },
            ATO: {
                name: 'AT-O | AT-Operator',
                min: 2,
                max: 4,
                credits: 10000,
                coins: 25,
                schooling: 'Operator AT'
            },
            ATC: {
                name: 'AT-C | AT-Commandant',
                min: 1,
                max: 2,
                credits: 10000,
                coins: 25,
                schooling: 'Operator AT'
            },
            ATM: {
                name: 'AT-M | AT-Materiaalwagen',
                min: 1,
                max: 2,
                credits: 15000,
                coins: 25,
                schooling: 'Operator AT'
            }                
        },
        heli: {
            rth: {
                name: 'Lifeliner',
                min: 1,
                max: 4,
                credits: 500000,
                coins: 30,
                schooling: 'MMT-Bemanningslid',
                special: 'Per 25 gebouwen (alle gebouwen) kan één Lifeliner gekocht worden'
            },
            polheli: {
                name: 'Politiehelikopter',
                min: 1,
                max: 3,
                credits: 300000,
                coins: 30,
                schooling: 'Politiehelikopter'
            }
        }
    };

    $('#' + prefix + '_button').click(function () {
        lssm.modal.show('<div id="' + prefix + '" class="container-fluid"></div>');


        let overview_container = $('#' + prefix);

        overview_container.css('margin', '10px');

        overview_container.append('<div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" id="typeDropdownBtn">' + I18n.t('lssm.overview.vehiclesName') + '&nbsp;<span class="caret"></span></button><ul class="dropdown-menu" id="typeDropdown"><li><a target="vehicles">' + I18n.t('lssm.overview.vehiclesName') + '</a></li><li><a target="buildings">' + I18n.t('lssm.overview.buildingsName') + '</a></li></ul></div>');

        overview_container.append('<div id="' + prefix + '_vehicles" class="overviewCategory"></div>');
        overview_container.append('<div id="' + prefix + '_buildings" class="overviewCategory"></div>');

        $('.overviewCategory:not(:first)').hide();

        $('#' + prefix + '_vehicles')
            .append('<ul class="nav nav-tabs" id="vehicleTabs" role="tablist"></ul>')
            .append('<div class="tab-content" id="vehicleContent"></div>');

        for (let hiorg in I18n.t('lssm.overview.hiorgs')) {
            $('#vehicleTabs').append('<li role="presentation"><a class="nav-link" id="' + hiorg + '-tab" data-toggle="tab" href="#' + hiorg + '" role="tab" aria-controls="' + hiorg + '" aria-selected="false">' + I18n.t('lssm.overview.hiorgs')[hiorg] + '</a></li>');

            $('#vehicleContent').append('<div class="tab-pane' + ($('.tab-pane').length === 0 ? ' show active' : '') + '" id="' + hiorg + '" role="tabpanel"></div>');

            $('#' + hiorg).append('<input type="text" class="search_input_field pull-right" id="search_' + hiorg + '">');

            if (I18n.locale === "de_DE") {
                $('#' + hiorg).append('<table id="table-' + hiorg + '" class="table table-striped" role="grid"><thead><th>' + I18n.t('lssm.overview.vehicleType') + '</th><th>' + I18n.t('lssm.overview.min') + '</th><th>' + I18n.t('lssm.overview.max') + '</th><th>' + I18n.t('lssm.overview.cost') + '</th><th>' + I18n.t('lssm.overview.schooling') + '</th><th>' + I18n.t('lssm.overview.wtank') + '</th><th>' + I18n.t('lssm.overview.special') + '</th></thead><tbody id="table-' + hiorg + '-body"></tbody></table>')
            } else if (I18n.locale === "en_US") {
                $('#' + hiorg).append('<table id="table-' + hiorg + '" class="table table-striped" role="grid"><thead><th>' + I18n.t('lssm.overview.vehicleType') + '</th><th>' + I18n.t('lssm.overview.min') + '</th><th>' + I18n.t('lssm.overview.max') + '</th><th>' + I18n.t('lssm.overview.cost') + '</th><th>' + I18n.t('lssm.overview.schooling') + '</th><th>' + I18n.t('lssm.overview.wtank') + '</th><th>' + I18n.t('lssm.overview.special') + '</th></thead><tbody id="table-' + hiorg + '-body"></tbody></table>')
            } else if (I18n.locale === "en_GB") {
                $('#' + hiorg).append('<table id="table-' + hiorg + '" class="table table-striped" role="grid"><thead><th>' + I18n.t('lssm.overview.vehicleType') + '</th><th>' + I18n.t('lssm.overview.min') + '</th><th>' + I18n.t('lssm.overview.max') + '</th><th>' + I18n.t('lssm.overview.cost') + '</th><th>' + I18n.t('lssm.overview.schooling') + '</th><th>' + I18n.t('lssm.overview.special') + '</th></thead><tbody id="table-' + hiorg + '-body"></tbody></table>');
            } else if (I18n.locale === "nl_NL") {
                $('#' + hiorg).append('<table id="table-' + hiorg + '" class="table table-striped" role="grid"><thead><th>' + I18n.t('lssm.overview.vehicleType') + '</th><th>' + I18n.t('lssm.overview.min') + '</th><th>' + I18n.t('lssm.overview.max') + '</th><th>' + I18n.t('lssm.overview.cost') + '</th><th>' + I18n.t('lssm.overview.schooling') + '</th><th>' + I18n.t('lssm.overview.special') + '</th></thead><tbody id="table-' + hiorg + '-body"></tbody></table>');
            }

            for (let vehicle in I18n.t('lssm.overview.vehicles')[hiorg]) {
                vehicle = I18n.t('lssm.overview.vehicles')[hiorg][vehicle];
                if (I18n.locale === "de_DE") {
                    $('#table-' + hiorg + '-body').append('<tr><td>' + vehicle.name + '</td><td>' + (vehicle.min || vehicle.min === 0 ? vehicle.min : "undefined") + '</td><td>' + (vehicle.max || vehicle.max === 0 ? vehicle.max : "undefined") + '</td><td>' + (vehicle.credits ? vehicle.credits.toLocaleString() : "undefined") + ' Credits / ' + (vehicle.coins ? vehicle.coins.toLocaleString() : "undefined") + ' Coins</td><td>' + (vehicle.schooling ? vehicle.schooling : I18n.t('lssm.overview.none')) + '</td><td>' + (vehicle.wtank ? vehicle.wtank.toLocaleString() : 0) + ' L</td><td>' + (vehicle.special ? vehicle.special : "") + '</td></tr>');
                } else if (I18n.locale === "en_US") {
                    $('#table-' + hiorg + '-body').append('<tr><td>' + vehicle.name + '</td><td>' + (vehicle.min || vehicle.min === 0 ? vehicle.min : "undefined") + '</td><td>' + (vehicle.max || vehicle.max === 0 ? vehicle.max : "undefined") + '</td><td>' + (vehicle.credits ? vehicle.credits.toLocaleString() : "undefined") + ' Credits / ' + (vehicle.coins ? vehicle.coins.toLocaleString() : "undefined") + ' Coins</td><td>' + (vehicle.schooling ? vehicle.schooling : I18n.t('lssm.overview.none')) + '</td><td>' + (vehicle.wtank ? vehicle.wtank.toLocaleString() : 0) + ' gal</td><td>' + (vehicle.special ? vehicle.special : "") + '</td></tr>');
                } else if (I18n.locale === "en_GB") {
                    $('#table-' + hiorg + '-body').append('<tr><td>' + vehicle.name + '</td><td>' + (vehicle.min || vehicle.min === 0 ? vehicle.min : "undefined") + '</td><td>' + (vehicle.max || vehicle.max === 0 ? vehicle.max : "undefined") + '</td><td>' + (vehicle.credits ? vehicle.credits.toLocaleString() : "undefined") + ' Credits / ' + (vehicle.coins ? vehicle.coins.toLocaleString() : "undefined") + ' Coins</td><td>' + (vehicle.schooling ? vehicle.schooling : I18n.t('lssm.overview.none')) + '</td><td>' + (vehicle.special ? vehicle.special : "") + '</td></tr>');
                } else if (I18n.locale === "nl_NL") {
                    $('#table-' + hiorg + '-body').append('<tr><td>' + vehicle.name + '</td><td>' + (vehicle.min || vehicle.min === 0 ? vehicle.min : "undefined") + '</td><td>' + (vehicle.max || vehicle.max === 0 ? vehicle.max : "undefined") + '</td><td>' + (vehicle.credits ? vehicle.credits.toLocaleString() : "undefined") + ' Credits / ' + (vehicle.coins ? vehicle.coins.toLocaleString() : "undefined") + ' Coins</td><td>' + (vehicle.schooling ? vehicle.schooling : I18n.t('lssm.overview.none')) + '</td><td>' + (vehicle.special ? vehicle.special : "") + '</td></tr>');
                }
            }
            $('#table-' + hiorg).tablesorter();
            $('#search_' + hiorg).on("keyup", function () {
                searchInTable('table-' + hiorg, 'search_' + hiorg);
            });
        }

        $('#vehicleTabs li a.nav-link').click(function () {
            $('#vehicleContent .tab-pane[id!=' + $(this).attr('href').replace('#', '') + ']')
                .removeClass('show')
                .removeClass('active');
        });

        $('#' + prefix + '_buildings')
            .append('<input type="text" class="search_input_field pull-right" id="search_building">')
            .append('<table id="table-buildings" class="table table-striped" role="grid"><thead><th>' + I18n.t('lssm.overview.buildingType') + '</th><th>' + I18n.t('lssm.overview.cost') + '</th><th>' + I18n.t('lssm.overview.maxlevel') + '</th><th>' + I18n.t('lssm.overview.levelcost') + '</th><th>' + I18n.t('lssm.overview.startPersonell') + '</th><th>' + I18n.t('lssm.overview.startVehicle') + '</th><th>' + I18n.t('lssm.overview.maxBuildins') + '</th><th>' + I18n.t('lssm.overview.extensions') + '</th><th>' + I18n.t('lssm.overview.special') + '</th></thead><tbody id="table-buildings-body"></tbody></table>');

        for (let building in I18n.t('lssm.overview.buildings')) {
            building = I18n.t('lssm.overview.buildings')[building];
            $('#table-buildings-body').append('<tr><td>' + building.name + '</td><td>' + (building.credits || building.credits === 0 ? building.credits.toLocaleString() : "undefined") + ' Credits / ' + (building.coins || building.coins === 0 ? building.coins.toLocaleString() : "undefined") + ' Coins</td><td>' + building.maxlevel + '</td><td>' + building.levelcost + '</td><td>' + building.startPersonell + '</td><td>' + building.startVehicle + '</td><td>' + building.maxBuildings + '</td><td>' + building.extensions + '</td><td>' + (building.special ? building.special : "") + '</td></tr>');
        }
        $('#table-buildings').tablesorter();
        $('#search_building').on("keyup", function () {
            searchInTable('table-buildings', 'search_building');
        });

        $('#typeDropdown a').click(function () {
            $('#typeDropdownBtn').html(I18n.t('lssm.overview.' + $(this).attr('target') + 'Name') + '&nbsp;<span class="caret"></span>');
            $('.overviewCategory').hide();
            $('#' + prefix + '_' + $(this).attr('target')).show();
        });
    });

    function searchInTable(tableID, searchWordID) {
        let searchWord = new RegExp($('#' + searchWordID).val().toLowerCase());
        $('#' + tableID).find('tr').each(function () {
            // zunächst die Zeile wieder sichtbar machen
            $(this).show();

            // nun die Zelle prüfen, ob der Suchbegriff vorhanden ist
            if (!$(this).html().toLowerCase().match(searchWord)) {
                $(this).hide();
            }
        });
    }

})($, window, I18n);
