((I18n) => {
    I18n.translations.de.lssm.extendedBuilding = {
        title: 'Erweiterte Gebäudeansicht',
        crew: 'Besatzung (Maximal)',
        fms: 'FMS',
        assignment: 'Personalzuweisung',
        neededPersonnel: 'Personal benötigt',
        expansionFinished: 'Fertig',
        expansionNotStarted: 'Nicht gestartet',
        personnelOverview: 'Personalübersicht',
        schooling: 'Ausbildung',
        schoolingsMulti: 'Alle Ausbildungs-Kombinationen',
        schoolingsSingle: 'Ausbildungen einzeln',
        amount: 'Anzahl',
        expansionName: 'Bezeichnung',
        vehicleType: 'Typ',
        settings: {
            neededPersonnel: {
                label: 'Benötigtes Personal',
                description: 'Zeigt das benötigte Personal an, wenn alle Fahrzeuge voll besetzt sein sollen.'
            },
            switchStatus: {
                label: 'Schneller Status Wechsel',
                description: 'Der Status eines Fahrzeuges kann über die Status-Anzeige direkt zwischen S2 und S6 gewechselt werden.'
            },
            assignmentBtn: {
                label: 'Schnelle Zuweisung',
                description: 'Fügt einen Knopf hinzu, über den man schnell in das Fenster "Personal zuweisen" kommt.'
            },
            assignedWorkers: {
                label: 'Zugewiesenes Personal',
                description: 'Zeigt für jedes Fahrzeug an, wie viel Personal zugewiesen ist.'
            },
            currentCrew: {
                label: 'Aktuelle Besatzung',
                description: 'Zeigt für jedes Fahrzeug an, wie viel Personal gerade auf dem Fahrzeug sitzt.'
            },
            expansions: {
                label: 'Ausbauten anzeigen',
                description: 'Zeigt den Status der jeweiligen Ausbauten an.'
            },
            personnelOverview: {
                label: 'Erweiterte Personalübersicht',
                description: 'Zeigt in der Personalübersicht an, wie viel Personal welche Ausbildung hat.'
            },
            vehicleType: {
                label: 'Fahrzeugtyp anzeigen',
                description: 'Zeigt den Fahrzeugtyp (ggf. auch die eigene Fahrzeugklasse) im Gebäude und der Leitstelle an.'
            }
        }
    };
    I18n.translations.en.lssm.extendedBuilding = {
        title: 'Extended Building View',
        crew: 'Crew (Max)',
        fms: 'Status',
        assignment: 'Assign Personnel',
        neededPersonnel: 'Needed Personnel',
        expansionFinished: 'Finished',
        expansionNotStarted: 'Not started',
        personnelOverview: 'Personnel Overview',
        schooling: 'Education',
        schoolingsMulti: 'All Combinations of Educations',
        schoolingsSingle: 'Single Educations',
        amount: 'Amount',
        vehicleType: 'Type',
        settings: {
            neededPersonnel: {
                label: 'Required personnel',
                description: 'Shows the required personnel if all vehicles are to be fully occupied',
            },
            switchStatus: {
                label: 'Fast status change',
                description: 'The status of a vehicle can be changed directly between S2 and S6 via the status display',
            },
            assignmentBtn: {
                label: 'Quick assignment',
                description: 'Adds a button to quickly get to the "Assign personnel" window',
            },
            assignedWorkers: {
                label: 'Assigned personnel',
                description: 'Shows for each vehicle how much personnel is assigned',
            },
            currentCrew: {
                label: 'Current Crew',
                description: 'Indicates for each vehicle how many personnel are currently sitting on the vehicle',
            },
            expansions: {
                label: 'Show expansions',
                description: 'Show the current status of the expansions',
            },
            personnelOverview: {
                label: 'Extended personnel overview',
                description: 'Shows in the personnel overview how much personnel has which training',
            },
            vehicleType: {
                label: 'Show vehicle type',
                description: 'Shows the type of the vehicle in the vehicle list.',
            },
        }
    };
    I18n.translations.nl.lssm.extendedBuilding = {
        title: 'Uitgebreide bouwweergave',
        crew: "Bezetting (Maximaal)",
        fms: 'Status',
        assignment: 'Personeel toewijzen',
        neededPersonnel: 'Personeel benodigd',
        expansionFinished: 'Klaar',
        expansionNotStarted: 'Niet gestart',
        personnelOverview: 'Personeelsoverzicht',
        schooling: 'Opleiding',
        schoolingsMulti: 'Alle trainingscombinaties',
        schoolingsSingle: 'Individuele opleiding',
        amount: 'Aantal',
        vehicleType: 'Type',
        settings: {
            neededPersonnel: {
                label: "Benodigd personeel",
                description: "Toont het vereiste personeel om alle voertuigen volledig bezet te houden",
            },
            switchStatus: {
                label: 'Snelle statuswijziging',
                description: "De status van een voertuig kan rechtstreeks tussen S2 en S6 worden gewijzigd via de statusweergave",
            },
            assignmentBtn: {
                label: 'Snelle toewijzing',
                Omschrijving: 'Voegt een knop toe om snel bij het venster "Personeel toewijzen" te komen',
            },
            assignedWorkers: {
                label: "toegewezen personeel",
                description: "Toont voor elk voertuig het aantal personeelsleden dat is toegewezen",
            },
            currentCrew: {
                label: 'Current Crew',
                description: 'Geeft per voertuig aan hoeveel personeel er momenteel op het voertuig zit',
            },
            expansions: {
                label: 'Toon uitbreidingen',
                description: 'De huidige status van de uitbreidingen weergeven',
            },
            personnelOverview: {
                label: 'Uitgebreid personeelsoverzicht',
                description: 'Toont in het personeelsoverzicht hoeveel personeel welke opleiding heeft gevolgd',
            },
            vehicleType: {
                label: 'Toon voertuigtype',
                description: "Toont het type voertuig in de voertuiglijst.",
            },
        }
    };

    const LSSM_EB_PREFIX = `extendedBuilding`;
    const SETTINGS_STORAGE = `${LSSM_EB_PREFIX}_STORAGE`;

    const managed_settings = {
        id: SETTINGS_STORAGE,
        title: I18n.t('lssm.extendedBuilding.title'),
        settings: {
            neededPersonnel: {
                default: true,
                ui: {
                    label: I18n.t('lssm.extendedBuilding.settings.neededPersonnel.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.extendedBuilding.settings.neededPersonnel.description')
                }
            },
            switchStatus: {
                default: true,
                ui: {
                    label: I18n.t('lssm.extendedBuilding.settings.switchStatus.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.extendedBuilding.settings.switchStatus.description')
                }
            },
            assignmentBtn: {
                default: true,
                ui: {
                    label: I18n.t('lssm.extendedBuilding.settings.assignmentBtn.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.extendedBuilding.settings.assignmentBtn.description')
                }
            },
            assignedWorkers: {
                default: true,
                ui: {
                    label: I18n.t('lssm.extendedBuilding.settings.assignedWorkers.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.extendedBuilding.settings.assignedWorkers.description')
                }
            },
            currentCrew: {
                default: true,
                ui: {
                    label: I18n.t('lssm.extendedBuilding.settings.currentCrew.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.extendedBuilding.settings.currentCrew.description')
                }
            },
            expansions: {
                default: true,
                ui: {
                    label: I18n.t('lssm.extendedBuilding.settings.expansions.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.extendedBuilding.settings.expansions.description')
                }
            },
            personnelOverview: {
                default: true,
                ui: {
                    label: I18n.t('lssm.extendedBuilding.settings.personnelOverview.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.extendedBuilding.settings.personnelOverview.description')
                }
            },
            vehicleType: {
                default: true,
                ui: {
                    label: I18n.t('lssm.extendedBuilding.settings.vehicleType.label'),
                    type: 'toggle',
                    description: I18n.t('lssm.extendedBuilding.settings.vehicleType.description')
                }
            },
        }
    };

    lssm.managedSettings.register(managed_settings);

    if (!window.location.href.match(/(buildings\/\d+(\/personals)?$)/g) || document.querySelector('.aao') || document.querySelector('img.online_icon') || document.querySelector('form[action*="education"]')) return;

    const get_setting = key => lssm.managedSettings.getSetting(SETTINGS_STORAGE, key);
    const add_style = style => document.querySelector('head').innerHTML += `<style>${style}</style>`;

    const SETTINGS = Object.keys(managed_settings.settings).reduce((result, key) => {
        result[key] = get_setting(key);
        return result;
    }, {});

    const render_default = () => {
        const VEHICLE_TABLE_HEADS = Array.from(document.querySelectorAll('#vehicle_table thead tr th'));
        const get_vehicle_table_column_position = key => VEHICLE_TABLE_HEADS.map(x => x.innerText).indexOf(I18n.t(`lssm.extendedBuilding.${key}`));
        const get_vehicle_table_column_values = column => Array.from(document.querySelectorAll(`#vehicle_table tbody tr td:nth-child(${column + 1})`));

        if (document.querySelector('#vehicle_table')) {
            if (SETTINGS.neededPersonnel || SETTINGS.assignedWorkers || SETTINGS.currentCrew) {
                let personnel_position = get_vehicle_table_column_position('crew');
                let personnels = get_vehicle_table_column_values(personnel_position).map(x => parseInt(x.innerText));
                SETTINGS.neededPersonnel && (document.querySelector('dl').innerHTML += `<dt><strong>${I18n.t('lssm.extendedBuilding.neededPersonnel')}:</strong></dt><dd>${personnels.reduce((a, b) => a + b, 0)}</dd>`);
                if (!SETTINGS.assignedWorkers && !SETTINGS.currentCrew) return;
                add_style(`
.personnel_values,
.personnel_values li {
    display: inline;
    padding: 0;
}
.personnel_values::before {
    content: "(";
}

.personnel_values::after {
    content: ")";
}
.personnel_values li + li::before {
    padding: 0.3em;
    color: black;
    content: "/";
}
#vehicle_table thead th:nth-of-type(${personnel_position + 1}),
#vehicle_table tbody td:nth-of-type(${personnel_position + 1}) {
    text-align: center;
}
`);
                let personnel_head = VEHICLE_TABLE_HEADS[personnel_position];
                let maximum_text = personnel_head.innerHTML.match(/\((.*?)\)/)[1];
                personnel_head.innerHTML = personnel_head.innerHTML.replace(/\(.*?\)/, '');
                let list = document.createElement('ul');
                if (SETTINGS.currentCrew) {
                    let crew_el = document.createElement('li');
                    crew_el.innerText = I18n.t('lssm.extendedBuilding.settings.currentCrew.label');
                    list.appendChild(crew_el);
                }
                let maximum_el = document.createElement('li');
                maximum_el.innerText = maximum_text;
                list.appendChild(maximum_el);
                if (SETTINGS.assignedWorkers) {
                    let workers_el = document.createElement('li');
                    workers_el.innerText = I18n.t('lssm.extendedBuilding.settings.assignedWorkers.label');
                    list.appendChild(workers_el);
                }
                list.classList.add('personnel_values');
                personnel_head.appendChild(list);
                let personnel_nodes = get_vehicle_table_column_values(personnel_position);
                personnel_nodes.forEach((node, index) => {
                    let vehicle_id = node.parentNode.querySelector('a[href*="/vehicles/"]').getAttribute('href').match(/\d+$/)[0]
                    node.setAttribute('vehicle_id', vehicle_id);
                    let maximum = node.innerText.trim();
                    let list = document.createElement('ul');
                    list.classList.add('personnel_values');
                    node.innerHTML = '';
                    node.appendChild(list);
                    if (SETTINGS.currentCrew) {
                        let crew_el = document.createElement('li');
                        crew_el.innerText = '0';
                        crew_el.id = `crew_${vehicle_id}`;
                        list.appendChild(crew_el);
                        if (!document.querySelector(`#vehicle_table tbody tr:nth-of-type(${index + 1}) .building_list_fms_2, #vehicle_table tbody tr:nth-of-type(${index + 1}) .building_list_fms_6`)) {
                            window.setTimeout(() => {
                                fetch(`/vehicles/${vehicle_id}`)
                                  .then(response => response.text())
                                  .then(response => {
                                      let frag = document.createRange().createContextualFragment(response);
                                      document.querySelector(`#crew_${vehicle_id}`).innerText = frag.querySelectorAll('#vehicle_details table tbody tr').length;
                                  });
                            }, 100 * index);
                        }
                    }
                    let maximum_el = document.createElement('li');
                    maximum_el.innerText = maximum;
                    list.appendChild(maximum_el);
                    if (SETTINGS.assignedWorkers) {
                        let workers_el = document.createElement('li');
                        workers_el.innerText = '0';
                        workers_el.id = `workers_${vehicle_id}`;
                        list.appendChild(workers_el);
                        window.setTimeout(() => {
                            fetch(`/vehicles/${vehicle_id}/zuweisung`)
                              .then(response => response.text())
                              .then(response => {
                                  document.querySelector(`#workers_${vehicle_id}`).innerText = (response.match(/class="btn btn-default btn-assigned"/g) || []).length
                              });
                        }, 100 * index);
                    }
                });
            }

            if (SETTINGS.switchStatus) {
                add_style(`
#vehicle_table .building_list_fms_2,
#vehicle_table .building_list_fms_6 {
    cursor: pointer;
}
#vehicle_table .building_list_fms_2::before {
    content: "${I18n.locale === 'nl' ? 5 : 2}";
}
#vehicle_table .building_list_fms_6::before {
    content: "6";
}
`);
                let statusNodes = get_vehicle_table_column_values(get_vehicle_table_column_position('fms'));
                statusNodes.forEach(node => {
                    node = node.querySelector('.building_list_fms_2') || node.querySelector('.building_list_fms_6');
                    if (!node) return;
                    node.innerText = '';
                    node.setAttribute('vehicle_id', node.parentNode.parentNode.querySelector('a[href*="/vehicles/"]').getAttribute('href').match(/\d+$/)[0]);
                    node.addEventListener('click', e => {
                        e = e.currentTarget;
                        let target_fms = e.classList.contains('building_list_fms_2') && 6 || 2;
                        fetch(`/vehicles/${e.getAttribute('vehicle_id')}/set_fms/${target_fms}`)
                          .then(response => {
                              if (response.ok) {
                                  e.classList.toggle('building_list_fms_2');
                                  e.classList.toggle('building_list_fms_6');
                              }
                          });
                    });
                });
            }

            if (SETTINGS.assignmentBtn) {
                document.querySelectorAll('#vehicle_table a.btn[href^="/vehicles/"][href$="/edit"]').forEach(node => {
                    let wrapper = document.createElement('div');
                    wrapper.classList.add('btn-group');
                    node.parentNode.appendChild(wrapper);
                    wrapper.appendChild(node);
                    node.insertAdjacentHTML('afterend', `<a class="btn btn-default btn-xs" href="${node.getAttribute('href').replace('edit', 'zuweisung')}">${I18n.t('lssm.extendedBuilding.assignment')}</a>`);
                });
            }
        }

        if (SETTINGS.expansions && document.querySelector('#ausbauten')) {
            const EXPANSIONS_TABLE_HEADS = Array.from(document.querySelectorAll('#ausbauten thead tr th'));
            const get_expansions_table_column_position = key => EXPANSIONS_TABLE_HEADS.map(x => x.innerText).indexOf(I18n.t(`lssm.extendedBuilding.${key}`));
            const get_expansions_table_column_values = column => Array.from(document.querySelectorAll(`#ausbauten tbody tr td:nth-child(${column + 1})`));
            let wrapper = document.createElement('div');
            wrapper.classList.add('row');
            let dl = document.querySelector('dl');
            dl.parentNode.querySelector('h1').after(wrapper);
            wrapper.appendChild(dl);
            dl.classList.add('col-lg-4');
            let expansionWrapper = document.createElement('table');
            expansionWrapper.classList.add('col-lg-4');
            wrapper.appendChild(expansionWrapper);
            let expansions = get_expansions_table_column_values(get_expansions_table_column_position('expansionName'));
            let expansion_index = {};
            expansions.forEach(expansion => {
                let expansion_name = expansion.parentNode.querySelector('td:first-of-type b').innerText.trim();
                if (!expansion_index.hasOwnProperty(expansion_name)) expansion_index[expansion_name] = [];
                let expansionState = document.createElement('span');
                expansionState.classList.add('label');
                let countdown = expansion.parentNode.querySelector('span[id^=extension_countdown]');
                if (countdown) {
                    countdown.classList.add(countdown.id);
                    expansionState.classList.add(countdown.id);
                    expansionState.appendChild(countdown.cloneNode(true));
                    expansionState.classList.add(expansion.parentNode.querySelector('a[href*="extension_finish"]') ? 'label-warning' : 'label-info');
                } else if (expansion.parentNode.querySelector('a[href*="extension_ready"]') || expansion.parentNode.querySelector('.label-success')) {
                    expansionState.classList.add('label-success');
                    expansionState.innerText = I18n.t('lssm.extendedBuilding.expansionFinished');
                    expansionState.innerText += ' ';
                    expansionState.appendChild(expansion.parentNode.querySelector('.label').cloneNode(true));
                } else {
                    expansionState.classList.add('label-danger');
                    expansionState.innerText = I18n.t('lssm.extendedBuilding.expansionNotStarted');
                }
                expansion_index[expansion_name].push(expansionState);
            });
            for (let expansion in expansion_index) {
                if (!expansion_index.hasOwnProperty(expansion)) continue;
                let row = document.createElement('tr');
                row.style.backgroundColor= "unset";
                let expansionName = document.createElement('th');
                expansionName.innerText = `${expansion}:`;
                expansionName.style.textAlign = 'right';
                expansionName.style.paddingRight = '1em';
                row.appendChild(expansionName);
                let expansionStateWrapper = document.createElement('td');
                let expansionStates = document.createElement('table');
                expansionStates.style.display = 'inline';
                expansionStates.style.textAlign = 'center';
                let add_break = true;
                for (let state in expansion_index[expansion]) {
                    if (!expansion_index[expansion].hasOwnProperty(state)) continue;
                    add_break && expansionStates.appendChild(document.createElement('tr'));
                    let td = document.createElement('td');
                    td.style.paddingRight = '1em';
                    expansionStates.querySelector('tr:last-of-type').appendChild(td);
                    td.appendChild(expansion_index[expansion][state]);
                    td.parentNode.style.backgroundColor = "unset";
                    add_break = !add_break;
                }
                expansionStateWrapper.appendChild(expansionStates);
                row.appendChild(expansionStateWrapper);
                expansionWrapper.appendChild(row);
            }
            extensionCountdown = (e, t) => {
                0 > e || ($('.extension_countdown_' + t).html(formatTime(e, !1)), e -= 1, setTimeout(function () {
                    extensionCountdown(e, t)
                }, 1000))
            }
        }
    };
    const apply_types = () => {
        fetch('/api/vehicles')
          .then(response => response.json())
          .then(vehicle_list => {
              let vehicles = {};
              let building_vehicles = document.querySelectorAll('#vehicle_table tbody tr');
              let building_vehicle_ids = Array.from(building_vehicles).map(x => parseInt(x.querySelector('a[href^="/vehicles/"]:not(.btn)').href.replace(/\D+/g, '')));
              for (let vehicle in vehicle_list) {
                  if (!vehicle_list.hasOwnProperty(vehicle)) continue;
                  if (building_vehicle_ids.indexOf(vehicle_list[vehicle].id) === -1) continue;
                  vehicles[vehicle_list[vehicle].id] = vehicle_list[vehicle];
              }
              let title_node = document.createElement('th');
              title_node.innerText = I18n.t('lssm.extendedBuilding.vehicleType');
              document.querySelector('#vehicle_table thead tr th:first-of-type').insertAdjacentElement('afterend', title_node);
              for (let index in building_vehicles) {
                  if (!building_vehicles.hasOwnProperty(index)) continue;
                  let type_node = document.createElement('td');
                  building_vehicles[index].querySelector('td:first-of-type').insertAdjacentElement('afterend', type_node);
                  let vehicle = vehicles[building_vehicle_ids[index]];
                  let vehicle_type = lssm.carsById[vehicle.vehicle_type][0];
                  type_node.insertAdjacentHTML('beforeend', `<a class="btn btn-default btn-xs disabled">${vehicle_type}</a>`);
                  vehicle.vehicle_type_caption && type_node.insertAdjacentHTML('beforeend', `<a class="btn btn-default btn-xs disabled">${vehicle.vehicle_type_caption}</a>`);
              }
              if(!document.querySelector('#map')) render_default();
          });
    };

    if (SETTINGS.vehicleType && document.querySelector('#vehicle_table')) {
        if(document.querySelector('#map')) {
            document.querySelector('#tab_vehicle').addEventListener('DOMNodeInserted', e => {
                if (e.target.tagName !== "SCRIPT") return;
                apply_types();
            });
            return
        }
        apply_types();
    } else {
        render_default();
    }

    if (SETTINGS.personnelOverview && window.location.href.match(/(buildings\/\d+\/personals$)/g)) {
        const PERSONNEL_TABLE_HEADS = Array.from(document.querySelectorAll('#personal_table thead tr th'));
        const get_personnel_table_column_position = key => PERSONNEL_TABLE_HEADS.map(x => x.innerText).indexOf(I18n.t(`lssm.extendedBuilding.${key}`));
        const get_personnel_table_column_values = column => Array.from(document.querySelectorAll(`#personal_table tbody tr td:nth-child(${column + 1})`));
        let dl = document.querySelector('dl:last-of-type');
        dl.innerHTML += `<dt><strong>${I18n.t('lssm.extendedBuilding.personnelOverview')}</strong></dt><dd><i class="glyphicon glyphicon-info-sign personnelOverviewBtn"></i></dd>`;
        add_style(`
.personnelOverviewBtn {
    cursor: pointer;
}
        `);
        let overview = document.createElement('div');
        overview.classList.add('hidden', 'alert', 'alert-info', 'row');
        overview.id = 'personnelOverview';
        overview.innerHTML = '<button class="close personnelOverviewBtn" type="button">×</button>';
        overview.innerHTML += `<h3>${I18n.t('lssm.extendedBuilding.personnelOverview')}</h3>`;
        dl.insertAdjacentElement('afterend', overview);
        document.querySelectorAll('.personnelOverviewBtn').forEach(el => el.addEventListener('click', () => document.querySelector('#personnelOverview').classList.toggle('hidden')));
        let persons = get_personnel_table_column_values(get_personnel_table_column_position('schooling'));
        let schoolings = {};
        let schoolings_single = {};
        persons.forEach(person => {
            let schooling = person.innerText.trim();
            if (!schoolings.hasOwnProperty(schooling)) schoolings[schooling] = 0;
            schoolings[schooling]++;
            let single_schooling = schooling.split(',');
            for (let schooling_single in single_schooling) {
                if (!single_schooling.hasOwnProperty(schooling_single)) continue;
                schooling_single = single_schooling[schooling_single].trim();
                if (!schoolings_single.hasOwnProperty(schooling_single)) schoolings_single[schooling_single] = 0;
                schoolings_single[schooling_single]++;
            }
        });
        let schoolings_el = document.createElement('div');
        schoolings_el.classList.add('col-lg-6');
        schoolings_el.innerHTML += `<h4>${I18n.t('lssm.extendedBuilding.schoolingsMulti')}</h4>`;
        let schoolings_table = document.createElement('table');
        schoolings_table.classList.add('table', 'table-striped');
        schoolings_table.innerHTML += `<thead><th>${I18n.t('lssm.extendedBuilding.schooling')}</th><th>${I18n.t('lssm.extendedBuilding.amount')}</th></thead>`;
        schoolings_table.id = 'multi_schoolings';
        let schoolings_tbody = document.createElement('tbody');
        for (let schooling in schoolings) {
            if (!schoolings.hasOwnProperty(schooling)) continue;
            schoolings_tbody.innerHTML += `<tr><td>${schooling}</td><td>${schoolings[schooling]}</td></tr>`;
        }
        let schoolings_single_el = document.createElement('div');
        schoolings_single_el.classList.add('col-lg-6');
        schoolings_single_el.innerHTML += `<h4>${I18n.t('lssm.extendedBuilding.schoolingsSingle')}</h4>`;
        let schoolings_single_table = document.createElement('table');
        schoolings_single_table.id = 'single_schoolings';
        schoolings_single_table.classList.add('table', 'table-striped');
        schoolings_single_table.innerHTML += `<thead><th>${I18n.t('lssm.extendedBuilding.schooling')}</th><th>${I18n.t('lssm.extendedBuilding.amount')}</th></thead>`;
        let schoolings_single_tbody = document.createElement('tbody');
        for (let schooling in schoolings_single) {
            if (!schoolings_single.hasOwnProperty(schooling)) continue;
            schoolings_single_tbody.innerHTML += `<tr><td>${schooling}</td><td>${schoolings_single[schooling]}</td></tr>`;
        }
        schoolings_table.appendChild(schoolings_tbody);
        schoolings_el.appendChild(schoolings_table);
        overview.appendChild(schoolings_el);
        schoolings_single_table.appendChild(schoolings_single_tbody);
        schoolings_single_el.appendChild(schoolings_single_table);
        overview.appendChild(schoolings_single_el);
        $('#multi_schoolings').tablesorter({
            sortList: [[1,1]],
        });
        $('#single_schoolings').tablesorter({
            sortList: [[1,1]],
        });
    }
})(I18n);
