((I18n) => {
    const LSS_DESTFILTER_STORAGE = 'LSS_DESTFILTER_STORAGE';
    
    const gefkwCountries = ['de_DE'];

    I18n.translations.de_DE.lssm.destfilter = {
        title: 'Zielort Filter',
        freeBeds: 'Freie Betten',
        tax: 'Abgabe',
        cellTax: 'Abgabe an Besitzer',
        settings: {
            beds: 'Volle KH ausblenden',
            beds1: 'Blende Krankenhäuser unter x Betten aus',
            department: 'KH ohne korrekte Fachabteilung ausblenden',
            distance: 'Ziele über x km Entfernung ausblenden (0 deaktiviert)',
            tax: 'Ziele mit einer Abgabe von mehr als x% ausblenden',
            cells: 'Volle Polizeistationen/Zellen ausblenden',
            cellsYellow: 'Polizeistationen/Zellen mit weniger freien Zellen als benötigt ausblenden',
            firstOwn: 'Erste x eigene Krankenhäuser',
            seeInfos: 'Einstellungen im Requestwindow'
        }
    };
    I18n.translations.en_US.lssm.destfilter = {
        title: 'Destination Filter',
        freeBeds: 'Free beds',
        tax: 'TAX',
        cellTax: 'owner\'s tax',
        settings: {
            beds: 'Hide full hospitals',
            beds1: 'Hide hospitals under x beds',
            department: 'Hide hospitals without needed department',
            distance: 'Hide destinations above x km distance (0 deactivates)',
            tax: 'Hide destinations with a TAX higher than x%',
            cells: 'Hide full cells',
            cellsYellow: 'Hide police stations/cells with fewer free cells than required',
            firstOwn: 'first x own hospitals',
            seeInfos: 'see infos in request window'
        }
    };
    I18n.translations.cs_CZ.lssm.destfilter = {
        title: 'Cílový filtr',
        freeBeds: 'Free beds',
        tax: 'TAX',
        cellTax: 'owner\'s tax',
        settings: {
            beds: 'Skrýt plné nemocnice',
            beds1: 'Nevidomé nemocnice pod x lůžka off',
            department: 'Skrýt nemocnice bez potřebného oddělení',
            distance: 'Skrýt cíle nad x km vzdálenost (0 deaktivuje)',
            tax: 'Skrýt cíle s DPH vyšší než x%',
            cells: 'Skrýt celé buňky',
            cellsYellow: 'Skrytí policejních stanic/buněk s menším počtem volných buněk, než je požadováno'
        }
    };
    I18n.translations.pt_PT.lssm.destfilter = {
        title: 'Filtro destino',
        freeBeds: 'Free beds',
        tax: 'TAX',
        cellTax: 'owner\'s tax',
        settings: {
            beds: 'Esconder hospitais completos',
            beds1: 'Hospitais cegos sob x camas fora',
            department: 'Esconder hospitais sem o departamento necessário',
            distance: 'Esconder destinos acima de x km distância (0 desativa)',
            tax: 'Esconder destinos com um IMPOSTO superior a x%',
            cells: 'Esconder células completas',
            cellsYellow: 'Esconder esquadras/células com menos células livres do que o necessário'
        }
    };
    I18n.translations.pl_PL.lssm.destfilter = {
        title: 'Filtr docelowy',
        freeBeds: 'Wolne łóżka',
        tax: 'PODATEK',
        cellTax: 'owner\'s tax',
        settings: {
            beds: 'Ukrywać pełne szpitale',
            beds1: 'Ukryj szpitale pod x łóżkami',
            department: 'Ukrywać szpitale bez potrzebnego oddziału',
            distance: 'Ukrywać cele podróży powyżej x km (0 dezaktywuje się)',
            tax: 'Ukrycie miejsc przeznaczenia z podatkiem podatkowym wyższym niż x%',
            cells: 'Ukrywać pełne komórki',
            cellsYellow: 'Ukrywanie posterunków policji/komórek z mniejszą ilością wolnych komórek niż jest to wymagane'
        }
    };
    I18n.translations.sv_SE.lssm.destfilter = {
        title: 'Målfilter',
        freeBeds: 'Free beds',
        tax: 'TAX',
        cellTax: 'owner\'s tax',
        settings: {
            beds: 'Dölj hela sjukhus',
            beds1: 'Blinda sjukhus under x bäddar av',
            department: 'Göm sjukhus utan nödvändig avdelning',
            distance: 'Dölj destinationer över x km avstånd (0 inaktiverar)',
            tax: 'Dölj mål med en moms som är högre än x%',
            cells: 'Dölja fullständiga celler',
            cellsYellow: 'Dölj polisstationer/celler med färre lediga celler än vad som krävs'
        }
    };
    I18n.translations.da_DK.lssm.destfilter = {
        title: 'Destinationsfilter',
        freeBeds: 'Free beds',
        tax: 'TAX',
        cellTax: 'owner\'s tax',
        settings: {
            beds: 'Skjul fulde hospitaler',
            beds1: 'Blinde hospitaler under x senge off',
            department: 'Skjul hospitaler uden behov afdeling',
            distance: 'Skjul destinationer over x km afstand (0 deaktiverer)',
            tax: 'Skjul destinationer med en moms, der er højere end x%',
            cells: 'Skjul hele celler',
            cellsYellow: 'Skjul politistationer/celler med færre ledige celler end påkrævet'
        }
    };
    I18n.translations.nb_NO.lssm.destfilter = {
        title: 'Destinasjonsfilter',
        freeBeds: 'Ledige sengeposter',
        tax: 'SKATT',
        cellTax: 'eierskatt',
        settings: {
            beds: 'Skjul hele sykehus',
            beds1: 'Blind sykehus under x senger av',
            department: 'Skjul sykehus uten nødvendig avdeling',
            distance: 'Skjul destinasjoner over x km avstand (0 deaktiverer)',
            tax: 'Skjul destinasjoner med en avgift som er høyere enn x %',
            cells: 'Skjul hele celler',
            cellsYellow: 'Skjul politistasjoner/celler med færre frie celler enn nødvendig'
        }
    };
    I18n.translations.it_IT.lssm.destfilter = {
        title: 'Filtro di destinazione',
        freeBeds: 'Posti letto disponibili',
        tax: 'TASSA',
        cellTax: 'owner\'s tax',
        settings: {
            beds: 'Nascondi ospedali completi',
            beds1: 'Nascondi ospedal sotto x posti disponibili',
            department: 'Nascondi ospedali senza reparto necessario',
            distance: 'Nascondi destinazioni oltre la distanza di x km (0 disattiva)',
            tax: 'Nascondi destinazioni con una TASSA superiore a x%',
            cells: 'Nascondi celle piene',
            cellsYellow: 'Nascondere le stazioni di polizia/celle con meno celle libere del necessario'
        }
    };
    I18n.translations.fr_FR.lssm.destfilter = {
        title: 'Filtre de destination',
        freeBeds: 'Lits libres',
        tax: 'TAXE',
        cellTax: 'owner\'s TAXE',
        settings: {
            beds: 'Cacher les hôpitaux complets',
            beds1: 'Hôpitaux pour aveugles de moins de x lits',
            department: 'Cacher les hôpitaux sans service nécessaire',
            distance: 'Cacher les destinations situées à plus de x km de distance (0 désactive)',
            tax: 'Cacher les destinations dont la TAXE est supérieure à x%',
            cells: 'Masquer les cellules pleines',
            cellsYellow: 'Cachez les commissariats de police / cellules avec moins de cellules libres que nécessaire'
        }
    };
    I18n.translations.ko_KR.lssm.destfilter = {
        title: '대상 필터',
        freeBeds: 'Free beds',
        tax: 'TAX',
        cellTax: 'owner\'s tax',
        settings: {
            beds: '전체 병원 숨기기',
            beds1: 'X 베드 오프 아래 블라인드 병원',
            department: '필요한 부서없이 병원 숨기기',
            distance: 'xkm 거리 이상의 목적지 숨기기 (0 비활성화)',
            tax: '세금이 x %보다 높은 목적지 숨기기',
            cells: '전체 세포 숨기기',
            cellsYellow: '필요한 것보다 적은 무료 셀로 경찰서 / 셀 숨기기'
        }
    };
    I18n.translations.ro_RO.lssm.destfilter = {
        title: 'Filtru destinație',
        freeBeds: 'Free beds',
        tax: 'TAX',
        cellTax: 'owner\'s tax',
        settings: {
            beds: 'Ascunde spitale complete',
            beds1: 'Spitale oarbe sub x paturi off',
            department: 'Ascunde spitale lefarsina fara departamentul necesar',
            distance: 'Ascundedestinațiile peste x km distanță (0 dezactivează)',
            tax: 'Ascundeți destinațiile cu o TAXĂ mai mare de x%',
            cells: 'Ascunderea celulelor complete',
            cellsYellow: 'Ascunderea secțiilor/celulelor de poliție cu mai puține celule libere decât este necesar'
        }
    };
    I18n.translations.nl_NL.lssm.destfilter = {
        title: 'Bestemming Filter',
        freeBeds: 'Vrije bedden',
        tax: 'Kosten',
        cellTax: 'Afdrachtpercentage',
        settings: {
            beds: 'Verberg volle ziekenhuizen',
            beds1: 'Verberg ziekenhuizen met minder dan x vrije bedden',
            department: 'Verberg ziekenhuizen zonder benodigde afdeling',
            distance: 'Verberg bestemmingen boven x km afstand (0 wordt gedeactiveerd)',
            tax: 'Verberg bestemmingen met een Kosten hoger dan x%.',
            cells: 'Verberg volle cellen',
            cellsYellow: 'Verberg politiebureaus/cellencomplexen met minder vrije cellen dan nodig zijn',
            firstOwn: 'first x own hospitals',
            seeInfos: 'see infos in request window'
        }
    };


    const managedSettings = {
        id: LSS_DESTFILTER_STORAGE,
        title: I18n.t('lssm.destfilter.title'),
        settings: {
            beds: {
                default: true,
                ui: {
                    label: I18n.t('lssm.destfilter.settings.beds'),
                    type: 'checkbox'
                }
            },
            beds1: {
                default: 0,
                ui: {
                    label: I18n.t('lssm.destfilter.settings.beds1'),
                    type: 'number',
                    min:0,
                    max:30
                }
            },
            department: {
                default: true,
                ui: {
                    label: I18n.t('lssm.destfilter.settings.department'),
                    type: 'checkbox'
                }
            },
            cells: {
                default: true,
                ui: {
                    label: I18n.t('lssm.destfilter.settings.cells'),
                    type: 'checkbox'
                }
            },
            firstOwn: {
                default: 50,
                ui: {
                    label: I18n.t('lssm.destfilter.settings.firstOwn'),
                    type: 'number',
                    min: 0,
                },
            },
            ...gefkwCountries.includes(I18n.locale) && {
                cellsYellow: {
                    default: false,
                    ui: {
                        label: I18n.t('lssm.destfilter.settings.cellsYellow'),
                        type: 'checkbox'
                    }
                }
            },
            distance: {
                default: 0,
                ui: {
                    label: I18n.t('lssm.destfilter.settings.distance'),
                    type: 'number',
                    min: 0,
                },
            },
            tax: {
                default: 50,
                ui: {
                    label: I18n.t('lssm.destfilter.settings.tax'),
                    type: 'number',
                    min: 0,
                    max: 50,
                    step: 10
                }
            },
            seeInfos: {
                default: false,
                ui: {
                    label: I18n.t('lssm.destfilter.settings.seeInfos'),
                    type: 'checkbox',
                }
            }
        }
    };

    lssm.managedSettings.register(managedSettings);

    if (!document.querySelector('#h2_sprechwunsch')) return;

    const mode = document.querySelector('a.btn[href*="/patient/"]') ? 'hospital' : 'prison';

    const getSetting = key => lssm.managedSettings.getSetting(LSS_DESTFILTER_STORAGE, key);
    const filter = () => {
        if (mode === 'hospital') {
            let counter = 1;
            document.querySelectorAll('.col-md-9 tbody > tr .visible-xs').forEach(el => {
                const hide = () => el.parentNode.parentNode.classList.add('hidden');
                el.parentNode.parentNode.classList.remove('hidden');
                let info = el.innerHTML.trim();
                let distance = parseFloat(info.match(/\d+[.,]\d+ km/)[0].replace(/,/, '.').replace(/[^\d.]/g, ''));
                let freeBeds = parseInt(info.match(new RegExp(`${I18n.t('lssm.destfilter.freeBeds')}: -?\\d+`))[0].replace(/[^-0-9]*/g, ''));
                let department = info.indexOf('label-success') > -1;
                let tax = 0;
                let taxMatch = info.match(new RegExp(`${I18n.t('lssm.destfilter.tax')}: \\d+ %`));
                if (taxMatch) tax = parseInt(taxMatch[0].replace(/\D+/g, ''));
                if (getSetting('distance') > 0) distance > getSetting('distance') && counter-- && hide();
                getSetting('beds') && freeBeds === 0 && counter-- && hide();
                getSetting('beds1') > 0 && freeBeds < getSetting('beds1')  && counter-- && hide();
                getSetting('department') && !department && counter-- && hide();
                getSetting('firstOwn') > 0 && !tax && counter > getSetting('firstOwn') && hide();
                tax > getSetting('tax') && hide();
                counter++;
            });
        } else {
            document.querySelectorAll('.alert-info a.btn[href*="/gefangener/"]').forEach(el => {
                const hide = () => el.classList.add('hidden');
                el.classList.remove('hidden');
                let distance = parseFloat(el.innerText.match(/\d+[.,]\d+ km/)[0].replace(/,/, '.').replace(/[^\d.]/g, ''));
                let tax = 0;
                let taxMatch = el.innerText.match(new RegExp(`${I18n.t('lssm.destfilter.cellTax')}: \\d+%`));
                if (taxMatch) tax = parseInt(taxMatch[0].replace(/\D+/g, ''));
                getSetting('cells') && el.classList.contains('btn-danger') && hide();
                getSetting('cellsYellow') && el.classList.contains('btn-warning') && hide();
                if (taxMatch) tax = parseInt(taxMatch[0].replace(/\D+/g, ''));
                if (getSetting('distance') > 0) distance > getSetting('distance') && hide();
                tax > getSetting('tax') && hide();
            });
        }
    };
    const settingNode = (key, type, attributes) => {
        const setting = getSetting(key);
        const id = `lssm_destfilter_${key}`;

        let wrapper = document.createElement('div');
        wrapper.classList.add('col-md-3');

        let spanNode = document.createElement('span');
        spanNode.classList.add('pull-left');

        let inputNode = document.createElement('input');
        inputNode.type = type;
        inputNode.value = setting;
        inputNode.id = id;
        spanNode.style.paddingRight = '0.5em';

        for (let attribute in attributes) {
            if (!attributes.hasOwnProperty(attribute)) continue;
            inputNode.setAttribute(attribute, attributes[attribute]);
        }

        spanNode.appendChild(inputNode);

        if (type === 'checkbox') {
            inputNode.classList.add('onoffswitch-checkbox');
            inputNode.checked = setting;
            let labelNode = document.createElement('label');
            labelNode.classList.add('onoffswitch-label');
            labelNode.htmlFor = id;
            let inputWrapper = document.createElement('div');
            inputWrapper.classList.add('onoffswitch');
            spanNode.appendChild(inputWrapper);
            inputWrapper.appendChild(inputNode);
            inputWrapper.appendChild(labelNode);
        }

        inputNode.addEventListener('change', e => {
            managedSettings.settings[key].value = type === 'checkbox' ? e.currentTarget.checked : e.currentTarget.value;
            lssm.managedSettings.update(managedSettings);
            filter();
        });

        wrapper.appendChild(spanNode);
        wrapper.insertAdjacentText('beforeend', I18n.t(`lssm.destfilter.settings.${key}`));
        return wrapper;
    };

    let settingsNode = document.createElement('div');
    settingsNode.classList.add('row');
    settingsNode.id = 'destfilterSettings';

    let settingViewButton = document.createElement('a');
    settingViewButton.innerHTML = '<i class="glyphicon glyphicon-eye-close"></i>';
    settingViewButton.id = 'destfilterSettingsViewToggle';
    settingViewButton.addEventListener('click', e => {
        if(getSetting('seeInfos')) {
            settingsNode.classList.add('hidden');
            managedSettings.settings['seeInfos'].value = false;
            lssm.managedSettings.update(managedSettings);
        } else {
            settingsNode.classList.remove('hidden');
            managedSettings.settings['seeInfos'].value = true;
            lssm.managedSettings.update(managedSettings);
        }
    })

    mode === 'hospital' && settingsNode.appendChild(settingNode('beds', 'checkbox'));
    mode === 'hospital' && settingsNode.appendChild(settingNode('department', 'checkbox'));
    mode === 'prison' && settingsNode.appendChild(settingNode('cells', 'checkbox'));
    mode === 'prison' && gefkwCountries.includes(I18n.locale) && settingsNode.appendChild(settingNode('cellsYellow', 'checkbox'));
    settingsNode.appendChild(settingNode('distance', 'number', {
        min: 0
    }));
    settingsNode.appendChild(settingNode('tax', 'number', {
        min: 0,
        max: 50,
        step: 10
    }));
    mode === 'hospital' && settingsNode.appendChild(settingNode('firstOwn', 'number', {
        min: 0
    }));
    mode === 'hospital' && settingsNode.appendChild(settingNode('beds1', 'number', {
        min: 0,
        max: 30
    }));

    document.querySelector('.alert-info').insertAdjacentElement('afterend', settingsNode);
    document.querySelector('.alert-info').insertAdjacentElement('afterend', settingViewButton);
    getSetting('seeInfos') ? settingsNode.classList.remove('hidden') : settingsNode.classList.add('hidden');
    filter();
})(I18n);
