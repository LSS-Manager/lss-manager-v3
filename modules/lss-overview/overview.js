(($, win, I18n) => {
    if (document.URL.match(/(leitstellenspiel|missionchief|meldkamerspel)(.de|.com)\/#?$/)) {
        let overviewBtn = $(
            '<a id="lssm_overview" href="/note?lssm_overview" class="leaflet-bar leaflet-control leaflet-control-custom hidden-xs lssm_overview lightbox-open">' +
            '<i class="glyphicon glyphicon-info-sign" style="font-size: 15px;padding: 5px;"></i>' +
            '</a>'
        );
        $('.leaflet-control-container .leaflet-top.leaflet-left').append(overviewBtn);
    }

    if ((new URL(document.URL)).searchParams.get("lssm_overview") === null || !document.URL.match(/(leitstellenspiel|missionchief|meldkamerspel)(.de|.com)\/note.*$/)) {
        return;
    }
    $('body').html('');

    I18n.translations.de.lssm.overview = {
        vehicleType: 'Fahrzeugtyp',
        min: 'mindest Personal',
        max: 'maximal Personal',
        cost: 'Preis',
        schooling: 'Ausbildung',
        special: 'Besonderes',
        none: 'Keine'
    };

    I18n.translations.de.lssm.overview.hiorgs = {
        fw: 'Feuerwehr',
        fwspecial: 'Werk-/Flughafenfeuerwehr',
        rd: 'Rettungsdienst',
        pol: 'Polizei',
        bepol: 'Bereitschaftspolizei',
        polspecial: 'Polizei Sondereinheiten',
        thw: 'THW',
        wr: 'Wasserrettung',
        heli: 'Helikopter'
    };

    I18n.translations.de.lssm.overview.vehicles = {
        fw: {
            lf20: {
                name: 'LF 20',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            lf10: {
                name: 'LF 10',
                min: 1,
                max: 9,
                credits: 5000,
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
                coins: 25
            },
            lf2016: {
                name: 'LF 20/16',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            lf106: {
                name: 'LF 106',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            lf16ts: {
                name: 'LF 16-TS',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
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
                coins: 25
            },
            tlf3000: {
                name: 'TLF 3000',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            tlf88: {
                name: 'TLF 8/8',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            tlf818: {
                name: 'TLF 8/18',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            tlf1624tr: {
                name: 'TLF 16/24-Tr',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            tlf1625: {
                name: 'TLF 16/25',
                min: 1,
                max: 6,
                credits: 5000,
                coins: 25
            },
            tlf1645: {
                name: 'TLF 16/45',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            tlf2040: {
                name: 'TLF 20/40',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            tlf2040sl: {
                name: 'TLF 20/40-SL',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
            },
            tlf16: {
                name: 'TLF 16',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 25
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
                special: 'Ein HLF vor Ort zählt wie ein LF/TLF und ein RW gleichzeitig.<br>Es wird mindestens der Rang "Gruppenführer(in)" benötigt, um ein HLF kaufen zu können.'
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
                coins: 25
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
            dekonp: {
                name: 'Dekon-P',
                min: 1,
                max: 6,
                credits: 23100,
                coins: 25,
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
                min: 3,
                max: 3,
                credits: 80000,
                coins: 25,
                schooling: 'Flugfeldlöschfahrzeug',
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
                special: 'Kann nur an Feuerwachen mit der Ausbaute "Werkfeuerwehr" stationiert werden'
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
                special: 'Der GRTW kann in zwei verschiedenen Modi alarmiert werden:<br>1.Für leichtverletzte Personen, die keinen Notarzt benötigen. Dann können in dem GRTW 7 Patienten gleichzeitig behandelt und abtransportiert werden.<br>2.Für schwerverletzte Personen, die einen Notarzt benötigen. Dann können in dem GRTW 3 Patienten gleichzeitig benadelt werden.'
            }
        },
        pol: {
            fustw: {
                name: 'FuStW',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
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
                schooling: 'SEK'
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
                name: 'MzKw',
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
                name: 'LKW K9',
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
                special: 'Muss von einem GKW, MzKw, MTW-TZ oder MLW 5 zum Einsatz gezogen werden.'
            },
            mlw5: {
                name: 'MLW 5',
                min: 1,
                max: 6,
                credits: 2500,
                coins: 12,
                schooling: 'Fachgruppe Räumen'
            },
            lkw7: {
                name: 'LKW 7Lkr 19tm',
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
                special: 'Pro Boot müssen 4 Leute mit Wasserrettungs-Ausbildung (Organisation egal) vor Ort sein.<br>Muss vom LKW 7Lkr 19tm zum Einsatz gebracht werden.'
            },
            mzab: {
                name: 'Anh MzAB',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Pro Boot müssen 4 Leute mit Wasserrettungs-Ausbildung (Organisation egal) vor Ort sein.<br>Muss vom LKW 7Lkr 19tm zum Einsatz gebracht werden.'
            },
            schlb: {
                name: 'Anh SchlB',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Pro Boot müssen 4 Leute mit Wasserrettungs-Ausbildung (Organisation egal) vor Ort sein.<br>Muss vom LKW 7Lkr 19tm zum Einsatz gebracht werden.'
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
                min: 1,
                max: 2,
                credits: 10000,
                coins: 25,
                schooling: 'Taucher'
            },
            mzb: {
                name: 'Anh MzB',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Pro Boot müssen 4 Leute mit Wasserrettungs-Ausbildung (Organisation egal) vor Ort sein.<br>Muss von einem GW-Wasserrettung oder GW-Taucher zum Einsatz gebracht werden.'
            },
            schlb: {
                name: 'Anh SchlB',
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
                min: 3,
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
        }
    };

    I18n.translations.en.lssm.overview = {
        vehicleType: 'Vehicle Type',
        min: 'minimum staff',
        max: 'maximum staff',
        cost: 'Price',
        schooling: 'Education',
        special: 'Special',
        none: 'None'
    };

    I18n.translations.en.lssm.overview.hiorgs = {
        fd: 'Fire Department',
        rd: 'Rescue Department',
        pol: 'Police',
        heli: 'Helicopter'
    };

    I18n.translations.en.lssm.overview.vehicles = {
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
                special: 'Required from x fire stations'
            },
        },
        rd: {
            rtw: {
                name: 'Ambulance',
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
            grtw: {
                name: 'Mass Casualty Unit',
                min: 6,
                max: 6,
                schooling: 'Well, no information avaiable yet.',
                special: 'Please help us find these information'
            },
            rdboat: {
                name: 'Large Rescue Boat',
                special: 'Required from x fire stations'
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
            k9: {
                name: 'K-9',
                min: 1,
                max: 2,
                credits: 7000,
                coins: 25,
                schooling: 'K-9'
            },
            polmc: {
                name: 'Police Motorcycle',
                min: 1,
                max: 1,
                credits: 2500,
                coins: 25,
                schooling: '??'
            },
            swatarmoured: {
                name: 'SWAT Armoured Vehicle',
                min: 1,
                max: 6,
                credits: 10000,
                coins: 25,
                schooling: 'SWAT'
            },
            swatsuv: {
                name: 'SWAT SUV',
                min: 1,
                max: 6,
                credits: 10000,
                coins: 25,
                schooling: 'SWAT'
            },
        }
    };

    I18n.translations.nl.lssm.overview = {
        vehicleType: "Type voertuig",
        min: "minimum personeel",
        max: "maximaal personeel",
        cost: "Prijs",
        schooling: 'opleiding',
        special: "speciaal",
        none: "Geen"
    };

    I18n.translations.nl.lssm.overview.hiorgs = {
        brand: 'Brandweer',
        ambulance: 'Ambulance',
        pol: 'Politie',
        hoofd: 'Politie hoofdbureau',
        heli: 'Helikopter'
    };

    I18n.translations.nl.lssm.overview.vehicles = {
        brand: {
            siv: {
                name: 'SIV',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            ts4: {
                name: 'TS 4',
                min: 1,
                max: 4,
                credits: 5000,
                coins: 25
            },
            tst4: {
                name: 'TST 4',
                min: 1,
                max: 4,
                credits: 5000,
                coins: 25
            },
            tstnbb4: {
                name: 'TST-NBB 4',
                min: 1,
                max: 4,
                credits: 5000,
                coins: 25
            },
            ts67: {
                name: 'TS 6/7',
                min: 1,
                max: 7,
                credits: 5000,
                coins: 25
            },
            tst67: {
                name: 'TST 6/7',
                min: 1,
                max: 7,
                credits: 5000,
                coins: 25
            },
            tstnbb67: {
                name: 'TST-NBB 6/7',
                min: 1,
                max: 7,
                credits: 5000,
                coins: 25
            },
            ts89: {
                name: 'TS 8/9',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            tst89: {
                name: 'TST 8/9',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            tstnbb89: {
                name: 'TST-NBB 8/9',
                min: 1,
                max: 9,
                credits: 5000,
                coins: 25
            },
            ab: {
                name: 'AB',
                min: 1,
                max: 3,
                credits: 11680,
                coins: 25,
                special: 'Benodigd vanaf 5 brandweerposten.'
            },
            daags: {
                name: 'DA-AGS',
                min: 1,
                max: 2,
                credits: 19200,
                coins: 25,
                schooling: 'Advieseur gevaarlijke stoffen',
                special: 'Benodigd vanaf 11 brandweerposten.'
            },
            al: {
                name: 'AL',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 30,
                special: 'Benodigd vanaf 3 brandweerposten.'
            },
            co: {
                name: 'CO',
                min: 1,
                max: 3,
                credits: 27500,
                coins: 25,
                schooling: 'Brandweerchauffeur zwaar',
                special: 'Benodigd vanaf 14 brandweerposten.'
            },
            da: {
                name: 'DA',
                min: 1,
                max: 4,
                credits: 2000,
                coins: 10
            },
            dahod: {
                name: 'DA-HOD',
                min: 1,
                max: 1,
                credits: 25500,
                coins: 25,
                schooling: 'Hoofd Officier van Dienst',
                special: 'Benodigd vanaf 13 brandweerposten.'
            },
            daovd: {
                name: 'DA-OVD',
                min: 1,
                max: 1,
                credits: 10000,
                coins: 25,
                special: 'Benodigd vanaf 6 brandweerposten.'
            },
            dbk: {
                name: 'DB-K',
                min: 1,
                max: 9,
                credits: 2500,
                coins: 12
            },
            ha: {
                name: 'Haakarmvoertuig',
                min: 1,
                max: 3,
                credits: 5000,
                coins: 12,
                schooling: 'brandweerchauffeur zwaar',
            },
            hv: {
                name: 'Hulpverleningsvoertuig',
                min: 1,
                max: 3,
                credits: 12180,
                coins: 25,
                special: 'Benodigd vanaf 4 brandweerposten.'
            },
            hw: {
                name: 'Hoogwerker',
                min: 1,
                max: 3,
                credits: 10000,
                coins: 30,
                special: 'Benodigd vanaf 3 brandweerposten.'

            },
            sl: {
                name: 'Slangenwagen',
                min: 1,
                max: 3,
                credits: 17300,
                coins: 25,
                special: 'Benodigd vanaf 7 brandweerposten.'
            },
            tw: {
                name: 'Tankwagen',
                min: 1,
                max: 3,
                credits: 17000,
                coins: 25
            },
            wvd: {
                name: 'Waarschuwings- en Verkenningsdienst',
                min: 1,
                max: 4,
                credits: 18300,
                coins: 25,
                schooling: 'Waarschuwings- en Verkenningsdienst',
                special: 'Benodigd vanaf 10 brandweerposten.'
            },
            abh: {
                name: 'Adembeschermingshaakarmbak',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Haakarmvoertuig benodigd'
            },
            coh: {
                name: 'Commandohaakarmbak',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Haakarmvoertuig benodigd'
            },
            wth: {
                name: 'Watertransporthaakarmbak',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Haakarmvoertuig benodigd'
            },
            dph: {
                name: 'Dompelpomphaakarmbak',
                min: 0,
                max: 0,
                credits: 6000,
                coins: 12,
                special: 'Haakarmvoertuig benodigd'
            },
            wo: {
                name: 'Waterongevallenvoertuig',
                min: 4,
                max: 6,
                credits: 10000,
                coins: 25,
                schooling: 'duiker / duikploegleider'
            },
            woa: {
                name: 'Waterongevallen aanhanger',
                min: 0,
                max: 0,
                credits: 9000,
                coins: 12,
                special: 'TS, TST, TST-NBB, SIV, WO, HV, DA/DB benodigd'
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
                schooling: 'MMT-Bemanningslid'
            },
            bambulance: {
                name: 'B-ambulance',
                min: 1,
                max: 2,
                credits: 5000,
                coins: 25
            },
            ovdg: {
                name: 'Officier van Dienst Geneeskunde',
                min: 1,
                max: 1,
                credits: 25000,
                coins: 25,
                schooling: 'Officier van Dienst Geneeskunde',
                special: 'Kan optreden vanaf de 8e bewaker of extensie'
            },
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
                name: 'Officier van Dienst - Politie',
                min: 1,
                max: 1,
                credits: 10000,
                coins: 25,
                schooling: 'officier van dienst - politie'
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
                schooling: 'Hondengeleider'
            },
            dbhg: {
                name: 'Dienstbus Hondengeleider',
                min: 1,
                max: 2,
                schooling: 'Hondengeleider'
            }
        },
        heli: {
            rth: {
                name: 'Lifeliner',
                min: 1,
                max: 4,
                credits: 300000,
                coins: 30,
                schooling: 'MMT-Bemanningslid'
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

    $('body').css('margin', '10px');

    $('body').append('<ul class="nav nav-tabs" id="tabs" role="tablist"></ul>');
    $('body').append('<div class="tab-content" id="overviewContent"></div>');

    for (let hiorg in I18n.t('lssm.overview.hiorgs')) {
        $('#tabs').append('<li role="presentation"><a class="nav-link" id="' + hiorg + '-tab" data-toggle="tab" href="#' + hiorg + '" role="tab" aria-controls="' + hiorg + '" aria-selected="false">' + I18n.t('lssm.overview.hiorgs')[hiorg] + '</a></li>');

        $('#overviewContent').append('<div class="tab-pane' + ($('.tab-pane').length == 0 ? ' show active' : '') + '" id="' + hiorg + '" role="tabpanel"></div>');

        $('#' + hiorg).append('<table id="table-' + hiorg + '" class="table table-striped tablesorter tablesorter-default" role="grid"><thead><th>' + I18n.t('lssm.overview.vehicleType') + '</th><th>' + I18n.t('lssm.overview.min') + '</th><th>' + I18n.t('lssm.overview.max') + '</th><th>' + I18n.t('lssm.overview.cost') + '</th><th>' + I18n.t('lssm.overview.schooling') + '</th><th>' + I18n.t('lssm.overview.special') + '</th></thead><tbody id="table-' + hiorg + '-body"></tbody></table>');

        for (let vehicle in I18n.t('lssm.overview.vehicles')[hiorg]) {
            vehicle = I18n.t('lssm.overview.vehicles')[hiorg][vehicle];
            $('#table-' + hiorg + '-body').append('<tr><td>' + vehicle.name + '</td><td>' + (vehicle.min || vehicle.min === 0 ? vehicle.min : "undefined") + '</td><td>' + (vehicle.max || vehicle.max === 0 ? vehicle.max : "undefined") + '</td><td>' + (vehicle.credits ? vehicle.credits.toLocaleString() : "undefined") + ' Credits / ' + (vehicle.coins ? vehicle.coins.toLocaleString() : "undefined") + ' Coins</td><td>' + (vehicle.schooling ? vehicle.schooling : I18n.t('lssm.overview.none')) + '</td><td>' + (vehicle.special ? vehicle.special : "") + '</td></tr>');
        }
    }

    $('.nav-link').click(function() {
        $('.tab-pane[id!=' + $(this).attr('href').replace('#', '') + ']').removeClass('show');
        $('.tab-pane[id!=' + $(this).attr('href').replace('#', '') + ']').removeClass('active');
    });

})($, window, I18n);
