((I18n) => {
    const LSS_DESTFILTER_STORAGE = 'LSS_DESTFILTER_STORAGE';

    I18n.translations.de.lssm.destfilter = {
        title: 'Zielort Filter',
        freeBeds: 'Freie Betten',
        tax: 'Abgabe',
        cellTax: 'Abgabe an Besitzer',
        settings: {
            beds: 'Volle KH ausblenden',
            department: 'KH ohne korrekte Fachabteilung ausblenden',
            distance: 'Ziele über x km Entfernung ausblenden (0 deaktiviert)',
            tax: 'Ziele mit einer Abgabe von mehr als x% ausblenden',
            cells: 'Volle Polizeistationen/Zellen ausblenden'
        }
    };
    I18n.translations.en.lssm.destfilter = {
        title: 'Destination Filter',
        freeBeds: 'Free beds',
        tax: 'TAX',
        cellTax: 'owner\'s tax',
        settings: {
            beds: 'Hide full hospitals',
            department: 'Hide hospitals without needed department',
            distance: 'Hide destinations above x km distance (0 deactivates)',
            tax: 'Hide destinations with a TAX higher than x%',
            cells: 'Hide full cells'
        }
    };
    I18n.translations.nl.lssm.destfilter = {
        title: 'Bestemming Filter',
        freeBeds: 'Vrije bedden',
        tax: 'Kosten',
        cellTax: 'Afdrachtpercentage',
        settings: {
            beds: 'Verberg volledig ziekenhuis',
            department: 'Verberg ziekenhuizen zonder benodigde afdeling',
            distance: 'Verberg bestemmingen boven x km afstand (0 wordt gedeactiveerd)',
            tax: 'Verberg bestemmingen met een Kosten hoger dan x%.',
            cells: 'Verberg volle cellen'
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
            distance: {
                default: 0,
                ui: {
                    label: I18n.t('lssm.destfilter.settings.distance'),
                    type: 'number',
                    min: 0,
                }
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
            }
        }
    };

    lssm.managedSettings.register(managedSettings);

    if (!document.querySelector('#h2_sprechwunsch')) return;

    const mode = document.querySelector('a.btn[href*="/patient/"]') ? 'hospital' : 'prison';

    const getSetting = key => lssm.managedSettings.getSetting(LSS_DESTFILTER_STORAGE, key);
    const filter = () => {
        if (mode === 'hospital') {
            document.querySelectorAll('.col-md-9 tbody > tr .visible-xs').forEach(el => {
                const hide = () => el.parentNode.parentNode.classList.add('hidden');
                el.parentNode.parentNode.classList.remove('hidden');
                let info = el.innerHTML.trim();
                let distance = parseFloat(info.match(/\d+[.,]\d+ km/)[0].replace(/,/, '.').replace(/[^\d.]/g, ''));
                let freeBeds = parseInt(info.match(new RegExp(`${I18n.t('lssm.destfilter.freeBeds')}: \\d+`))[0].replace(/\D+/g, ''));
                let department = info.indexOf('label-success') > -1;
                let tax = 0;
                let taxMatch = info.match(new RegExp(`${I18n.t('lssm.destfilter.tax')}: \\d+ %`));
                if (taxMatch) tax = parseInt(taxMatch[0].replace(/\D+/g, ''));
                if (getSetting('distance') > 0) distance > getSetting('distance') && hide();
                getSetting('beds') && freeBeds === 0 && hide();
                getSetting('department') && !department && hide();
                tax > getSetting('tax') && hide();
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

    mode === 'hospital' && settingsNode.appendChild(settingNode('beds', 'checkbox'));
    mode === 'hospital' && settingsNode.appendChild(settingNode('department', 'checkbox'));
    mode === 'prison' && settingsNode.appendChild(settingNode('cells', 'checkbox'));
    settingsNode.appendChild(settingNode('distance', 'number', {
        min: 0
    }));
    settingsNode.appendChild(settingNode('tax', 'number', {
        min: 0,
        max: 50,
        step: 10
    }));

    document.querySelector('.alert-info').insertAdjacentElement('afterend', settingsNode);
    filter();
})(I18n);
