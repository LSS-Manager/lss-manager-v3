/* global lssm, $, I18n */

const LSSM_MH_PREFIX = `missionhelper`;
const lssm_missionhelper_adjustPosition = () => {
    let missionhelper = document.querySelector(`#${LSSM_MH_PREFIX}`);
    missionhelper.style.left = `${document.querySelector(
        '#iframe-inside-container'
    ).clientWidth *
        0.97 -
        missionhelper.clientWidth}px`;
};

(async I18n => {
    await Promise.all(I18n.locales[I18n.locale].map(async locale => 
        I18n.translations[locale].lssm.missionhelper = await fetch(I18n.translations[locale].lssm.missionhelper = lssm.getlink(
            `/modules/lss-missionHelper/i18n/${locale}.json`,
            false
        )).then(res => res.json())
    ));

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
                    description: I18n.t(
                        'lssm.missionhelper.settings.name.description'
                    ),
                },
            },
            id: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.id.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.id.description'
                    ),
                },
            },
            type: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.type.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.type.description'
                    ),
                },
            },
            poi: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.poi.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.poi.description'
                    ),
                },
            },
            live_patients: {
                default: true,
                ui: {
                    label: I18n.t(
                        'lssm.missionhelper.settings.live_patients.label'
                    ),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.live_patients.description'
                    ),
                },
            },
            vehicles: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.vehicles.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.vehicles.description'
                    ),
                },
            },
            patients: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.patients.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.patients.description'
                    ),
                },
            },
            prisoners: {
                default: true,
                ui: {
                    label: I18n.t(
                        'lssm.missionhelper.settings.prisoners.label'
                    ),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.prisoners.description'
                    ),
                },
            },
            special: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.special.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.special.description'
                    ),
                },
            },
            expansions: {
                default: true,
                ui: {
                    label: I18n.t(
                        'lssm.missionhelper.settings.expansions.label'
                    ),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.expansions.description'
                    ),
                },
            },
            followup: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.followup.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.followup.description'
                    ),
                },
            },
            show_100: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.show_100.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.show_100.description'
                    ),
                },
            },
            lfrw: {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.lfrw.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.lfrw.description'
                    ),
                },
            },
            credits: {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.credits.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.credits.description'
                    ),
                },
            },
            show_siwa: {
                default: false,
                ui: {
                    label: I18n.t(
                        'lssm.missionhelper.settings.show_siwa.label'
                    ),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.show_siwa.description'
                    ),
                },
            },
            mission_time: {
                default: false,
                ui: {
                    label: I18n.t(
                        'lssm.missionhelper.settings.mission_time.label'
                    ),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.mission_time.description'
                    ),
                },
            },
        },
    };

    switch (I18n.locale) {
        case 'de_DE':
            managed_settings.settings.water = {
                default: true,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.water.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.water.description'
                    ),
                },
            };
            managed_settings.settings.hide_elw1 = {
                default: false,
                ui: {
                    label: I18n.t(
                        'lssm.missionhelper.settings.hide_elw1.label'
                    ),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.hide_elw1.description'
                    ),
                },
            };
            managed_settings.settings.hide_rw = {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.hide_rw.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.hide_rw.description'
                    ),
                },
            };
            managed_settings.settings.show_rdu = {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.show_rdu.label'),
                    type: 'toggle',
                    description: I18n.t(
                        'lssm.missionhelper.settings.show_rdu.description'
                    ),
                },
            };
            managed_settings.settings.show_rdu1 = {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.show_rdu1.label'),
                    type: 'checkbox',
                    parent: SETTINGS_STORAGE + "_show_rdu_toggle",
                },
            };
            break;
        case 'fr_FR':
            managed_settings.settings.education = {
                default: false,
                ui: {
                    label: I18n.t('lssm.missionhelper.settings.education.label'),
                    type: 'checkbox',
                    parent: SETTINGS_STORAGE + "_special_toggle",
                },
            };
            break;
        case 'en_US':
            break;
    }

    lssm.managedSettings.register(managed_settings);

    if (!window.location.href.match(/(missions\/\d+$)|(einsaetze\/\d+$)/g))
        return;

    const clone = a => JSON.parse(JSON.stringify(a));
    const get_setting = key =>
        lssm.managedSettings.getSetting(SETTINGS_STORAGE, key);

    const MISSIONS_FILE = lssm.getlink(
        `/modules/lss-missionHelper/missions.${I18n.locale}.json`,
        true
    );
    const MISSION_WINDOW =
        null === window.location.href.match(/einsaetze\/\d+/);
    let mission_help = $('#mission_help');
    const MISSION_TYPE = MISSION_WINDOW
        ? mission_help[0]
            ? mission_help
                  .attr('href')
                  .split('/')
                  .pop()
                  .replace(/\?.*/, '')
            : null
        : window.location.href.match(/\d+([^?]|$)/)[0];
    const MISSION_ID = window.location.href.replace(/\D/g, '');
    const SETTINGS = Object.keys(managed_settings.settings).reduce(
        (result, key) => {
            result[key] = get_setting(key);
            return result;
        },
        {}
    );

    fetch(MISSIONS_FILE)
        .then(missions => missions.json())
        .then(missions => {
            const MISSIONS = clone(missions);
            const MISSION = MISSIONS[MISSION_TYPE];

            if (!MISSION_WINDOW) return;

            let markup = document.createElement('div');
            markup.id = LSSM_MH_PREFIX;
            markup.classList.add(
                'alert',
                'alert-warning',
                localStorage[`${LSSM_MH_PREFIX}_state`] || 'pinned'
            );
            markup.innerHTML = `<div class="handle"></div>
<a class="pull-right" id="${LSSM_MH_PREFIX}_pin">
    <i class="glyphicon glyphicon-pushpin"></i>
</a>
<article class="content ${
                localStorage[`${LSSM_MH_PREFIX}_toggle`] === 'true'
                    ? ''
                    : 'hidden'
            }"></article>
<br class="unpinned">
<span id="${LSSM_MH_PREFIX}_toggle"><span class="${
                localStorage[`${LSSM_MH_PREFIX}_toggle`] === 'true'
                    ? 'up'
                    : 'down'
            }"></span></span>`;

            MISSION_WINDOW &&
            localStorage[`${LSSM_MH_PREFIX}_state`] === 'pinned'
                ? pin_missionhelper(markup)
                : unpin_missionhelper(markup);

            let content = document.querySelector(`#${LSSM_MH_PREFIX} .content`);

            if (!MISSION_TYPE) {
                content.innerText = I18n.t('lssm.missionhelper.diy_mission');
                SETTINGS.mission_time &&
                    (content.innerHTML += `<span class="badge badge-secondary">${
                        document.querySelector('#missionH1').attributes[
                            'data-original-title'
                        ].value
                    }</span>&nbsp;`);
                return lssm_missionhelper_adjustPosition();
            }

            if (SETTINGS.show_rdu && MISSION.requirements.rescue_dog_units) {
                document.getElementById('missionH1').insertAdjacentHTML('beforeend', '&nbsp;🐶');
            }

            if (SETTINGS.name || SETTINGS.id || SETTINGS.type || SETTINGS.poi) {
                content.innerHTML += `<h3>${((SETTINGS.name && MISSION.name) ||
                    '') + (SETTINGS.show_rdu1 && MISSION.requirements.rescue_dog_units ? '&nbsp;🐶' : '')}<sub>${(SETTINGS.id &&
                    `&nbsp;<sub>ID: ${MISSION_ID}</sub>`) ||
                    ''}${(SETTINGS.type &&
                    `&nbsp;<sub>Type: ${MISSION_TYPE}</sub>`) ||
                    ''}${(MISSION.place &&
                    SETTINGS.poi &&
                    `&nbsp;<sub>POI: ${MISSION.place}</sub>`) ||
                    ''}</sub></h3><br>`;
            }

            MISSION.onlyRd = !Object.keys(MISSION.requirements).length;

            if (MISSION.onlyRd) {
                content.innerHTML += `<small>${I18n.t(
                    'lssm.missionhelper.ambulance_only'
                )}</small><br>`;
                (MISSION.chances.patient_transport ||
                    MISSION.additional.patient_specializations) &&
                    (content.innerHTML += `${I18n.t(
                        'lssm.missionhelper.transport'
                    )}: ${(MISSION.chances.patient_transport &&
                        `${MISSION.chances.patient_transport}%`) ||
                        ''}${void 0 !==
                        typeof MISSION.additional.patient_specializations &&
                        ` (${MISSION.additional.patient_specializations})`}`);
                
                MISSION.chances.patient_critical_care &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.criticalchance'
                )}: ${MISSION.chances.patient_critical_care}%`);
                MISSION.additional.patient_uk_code_possible &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.ukcodes'
                )}: ${Object.values(MISSION.additional.patient_uk_code_possible).join(' or ')}`);
                MISSION.chances.nef &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.requirements.nef'
                    )}: ${MISSION.chances.nef}%`);
                MISSION.chances.helicopter &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.requirements.helicopter'
                    )}: ${MISSION.chances.helicopter}%`);
                MISSION.chances.patient_other_treatment &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.tragehilfe'
                    )}: ${MISSION.chances.patient_other_treatment}%`);
                return lssm_missionhelper_adjustPosition();
            }

            if (MISSION.additional.guard_mission) {
                content.innerHTML += `<h4>${I18n.t(
                    'lssm.missionhelper.guard_mission'
                )}</h4>`;
                if (!SETTINGS.show_siwa)
                    return lssm_missionhelper_adjustPosition();
            }

            MISSION.vge &&
                (content.innerHTML += `<h4>${I18n.t(
                    'lssm.missionhelper.vge'
                )}</h4>`);

            let patients = document.querySelectorAll('.mission_patient').length;
            SETTINGS.live_patients &&
                patients > 0 &&
                (content.innerHTML += `<span class="badge" id="${LSSM_MH_PREFIX}_live_patients">${I18n.t(
                    'lssm.missionhelper.patients'
                )}: ${patients}</span><br><br>`);

            if (SETTINGS.vehicles) {
                if (
                    SETTINGS.hide_elw1 &&
                    MISSION.requirements.battalion_chief_vehicles &&
                    MISSION.requirements.mobile_command_vehicles
                ) {
                    MISSION.requirements.battalion_chief_vehicles -=
                        MISSION.requirements.mobile_command_vehicles;
                    if (MISSION.requirements.battalion_chief_vehicles <= 0)
                        delete MISSION.requirements.battalion_chief_vehicles;
                }
                if (
                    SETTINGS.hide_rw &&
                    MISSION.requirements.heavy_rescue_vehicles &&
                    MISSION.requirements.firetrucks
                ) {
                    MISSION.requirements.heavy_rescue_vehicles -=
                        MISSION.requirements.firetrucks;
                    if (MISSION.requirements.heavy_rescue_vehicles <= 0)
                        delete MISSION.requirements.heavy_rescue_vehicles;
                }
                for (let vehicle in MISSION.requirements) {
                    if (
                        !MISSION.requirements.hasOwnProperty(vehicle) ||
                        vehicle === 'water_needed' || vehicle === 'personnel_educations'
                    )
                        continue;
                    content.innerHTML += `${
                        MISSION.requirements[vehicle]
                    }x ${I18n.t(
                        `lssm.missionhelper.requirements.${
                            SETTINGS.lfrw &&
                            MISSION.additional &&
                            MISSION.additional.allow_rw_instead_of_lf &&
                            vehicle === 'firetrucks'
                                ? 'allow_rw_instead_of_lf'
                                : vehicle
                        }`
                    )} ${(MISSION.chances &&
                        MISSION.chances[vehicle] &&
                        `(${MISSION.chances[vehicle]}%)`) ||
                        (SETTINGS.show_100 && `(100%)`) ||
                        ''}<br>`;
                }
            }

            if (
                (MISSION.additional ||
                    (MISSION.chances && SETTINGS.patients)) &&
                MISSION.additional.possible_patient
            ) {
                content.innerHTML += `<br>${I18n.t(
                    'lssm.missionhelper.patients'
                )}: ${(MISSION.additional.possible_patient_min !==
                    MISSION.additional.possible_patient &&
                    `${MISSION.additional.possible_patient_min || 0} ${I18n.t(
                        'lssm.missionhelper.to'
                    )}`) ||
                    ''} ${MISSION.additional.possible_patient}<br>`;

                if (
                    MISSION.chances.patient_transport ||
                    MISSION.additional.patient_specializations
                ) {
                    content.innerHTML += `${I18n.t(
                        'lssm.missionhelper.transport'
                    )}: ${(MISSION.chances.patient_transport &&
                        `${MISSION.chances.patient_transport}%`) ||
                        ''}${void 0 !==
                        typeof MISSION.additional.patient_specializations &&
                        ` (${MISSION.additional.patient_specializations})`}`;
                }

                MISSION.chances.patient_critical_care &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.criticalchance'
                    )}: ${MISSION.chances.patient_critical_care}%`);

                MISSION.additional.patient_uk_code_possible &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.ukcodes'
                    )}: ${Object.values(MISSION.additional.patient_uk_code_possible).join(' or ')}`);

                MISSION.chances.nef &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.requirements.nef'
                    )}: ${MISSION.chances.nef}%`);
                MISSION.chances.helicopter &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.requirements.helicopter'
                    )}: ${MISSION.chances.helicopter}%`);
                MISSION.chances.patient_other_treatment &&
                    (content.innerHTML += `<br>${I18n.t(
                        'lssm.missionhelper.tragehilfe'
                    )}: ${MISSION.chances.patient_other_treatment}%`);

                I18n.locale === 'de_DE' &&
                    patients >= 5 &&
                    (content.innerHTML += `<br>1x ${I18n.t(
                        'lssm.missionhelper.requirements.lna'
                    )} (100%)`);
                I18n.locale === 'de_DE' &&
                    patients >= 10 &&
                    (content.innerHTML += `<br>1x ${I18n.t(
                        'lssm.missionhelper.requirements.orgl'
                    )} (100%)`);
                I18n.locale === 'en_US' &&
                    patients >= 10 &&
                    (content.innerHTML += `<br>1x ${I18n.t(
                        'lssm.missionhelper.requirements.emschief'
                    )} (100%)`);
                I18n.locale === 'nl_NL' &&
                    patients >= 3 &&
                    (content.innerHTML += `<br>1x ${I18n.t(
                        'lssm.missionhelper.requirements.ovdg'
                    )} (100%)`);
                content.innerHTML += '<br>';
            }

            SETTINGS.prisoners &&
                MISSION.additional &&
                MISSION.additional.max_possible_prisoners &&
                (content.innerHTML += `<br>${I18n.t(
                    'lssm.missionhelper.prisoners'
                )}: ${MISSION.additional.min_possible_prisoners !==
                    MISSION.additional.max_possible_prisoners &&
                    `${MISSION.additional.min_possible_prisoners || 0} ${I18n.t(
                        'lssm.missionhelper.to'
                    )}`} ${MISSION.additional.max_possible_prisoners}<br>`);

            SETTINGS.special &&
                MISSION.additional &&
                MISSION.additional.average_min_fire_personnel &&
                (content.innerHTML += `<br>${I18n.t(
                    'lssm.missionhelper.averageMinimumEmployeesFire'
                )}: ${MISSION.additional.average_min_fire_personnel}<br>`);

            SETTINGS.special && 
            SETTINGS.education && 
            MISSION.additional &&
            MISSION.additional.personnel_educations &&
                (content.innerHTML += `<br><b>${I18n.t(
                    'lssm.missionhelper.education'
                )}</b>:<br>${Object.entries(MISSION.additional.personnel_educations).map(([schooling, amount]) => `${amount}x ${schooling}`).join('<br>')}<br>`);

            SETTINGS.special &&
                MISSION.additional &&
                MISSION.additional.average_min_police_personnel &&
                (content.innerHTML += `<br>${I18n.t(
                    'lssm.missionhelper.averageMinimumEmployeesPolice'
                )}: ${MISSION.additional.average_min_police_personnel}<br>`);
            SETTINGS.special &&
                MISSION.additional &&
                MISSION.additional.swat_personnel &&
                (content.innerHTML += `<br>${I18n.t(
                    'lssm.missionhelper.SWATPersonnel'
                )}: ${MISSION.additional.swat_personnel}<br>`);
            SETTINGS.special &&
                MISSION.additional &&
                MISSION.additional.height_rescue_personnel &&
                (content.innerHTML += `<br>${I18n.t(
                    'lssm.missionhelper.averageMinimumEmployeesHoehen'
                )}: ${MISSION.additional.height_rescue_personnel}<br>`);

            if (
                (SETTINGS.water && MISSION.requirements.water_needed) ||
                (SETTINGS.credits && MISSION.average_credits) ||
                SETTINGS.mission_time
            ) {
                content.innerHTML += '<br>';
                SETTINGS.credits &&
                    MISSION.average_credits &&
                    (content.innerHTML += `<span class="badge badge-secondary">~ ${MISSION.average_credits.toLocaleString()} Credits</span>&nbsp;`);
                SETTINGS.water &&
                    MISSION.requirements.water_needed &&
                    (content.innerHTML += `<span class="badge badge-secondary">${I18n.t(
                        'lssm.missionhelper.water'
                    )}: ${MISSION.requirements.water_needed.toLocaleString()} Liter</span>&nbsp;`);
                SETTINGS.mission_time &&
                    (content.innerHTML += `<span class="badge badge-secondary">${
                        document.querySelector('#missionH1').attributes[
                            'data-original-title'
                        ].value
                    }</span>&nbsp;`);
                content.innerHTML += '<br>';
            }

            if (
                SETTINGS.expansions &&
                MISSION.additional.expansion_missions_ids
            ) {
                content.innerHTML += `<br>${I18n.t(
                    'lssm.missionhelper.exp'
                )}:<br>`;
                for (let i of Object.keys(
                    MISSION.additional.expansion_missions_ids
                )) {
                    let id = MISSION.additional.expansion_missions_ids[i];
                    content.innerHTML += `<a href="../einsaetze/${id}"><span class="badge">${
                        MISSIONS[id] ? MISSIONS[id].name : id
                    }</span></a>`;
                }
            }

            if (SETTINGS.followup && MISSION.additional.followup_missions_ids) {
                content.innerHTML += `<br>${I18n.t(
                    'lssm.missionhelper.fwm'
                )}:<br> `;
                for (let i of Object.keys(
                    MISSION.additional.followup_missions_ids
                )) {
                    let id = MISSION.additional.followup_missions_ids[i];
                    content.innerHTML += `<a href="../einsaetze/${id}"><span class="badge">${
                        MISSIONS[id] ? MISSIONS[id].name : id
                    }</span></a>`;
                }
            }

            lssm_missionhelper_adjustPosition();
        });

    let handle_overlap = element => {
        let missionhelp = document.querySelector(`#${LSSM_MH_PREFIX}`);
        if (!missionhelp || !missionhelp.classList.contains('unpinned')) return;
        let element_bounding = element.getBoundingClientRect();
        let missionhelp_bounding = missionhelp.getBoundingClientRect();
        missionhelp.style.opacity =
            element_bounding.right > missionhelp_bounding.left &&
            element_bounding.left < missionhelp_bounding.right &&
            element_bounding.bottom > missionhelp_bounding.top &&
            element_bounding.top < missionhelp_bounding.bottom
                ? 0.1
                : null;
    };

    document.querySelectorAll('.aao, .vehicle_group').forEach(el => {
        el.addEventListener('mouseenter', aao => {
            handle_overlap(aao.currentTarget);
        });
        el.addEventListener('mouseleave', () => {
            let missionhelp = document.querySelector(`#${LSSM_MH_PREFIX}`);
            missionhelp && (missionhelp.style.opacity = null);
        });
    });
    document
        .querySelectorAll('#new_mission_reply, #mission_replies')
        .forEach(el => {
            el.addEventListener('mouseenter', element => {
                handle_overlap(element.currentTarget);
            });
            el.addEventListener('mouseleave', () => {
                let missionhelp = document.querySelector(`#${LSSM_MH_PREFIX}`);
                missionhelp && (missionhelp.style.opacity = null);
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

let pin_missionhelper = markup => {
    let missionhelper = document.querySelector(`#${LSSM_MH_PREFIX}`) || markup;
    document.querySelector('#mission-form').prepend(missionhelper);
    missionhelper.classList.replace('unpinned', 'pinned');
    let toggle_btn = document.querySelector(
        `#${LSSM_MH_PREFIX}_toggle span.down`
    );
    toggle_btn && toggle_btn.click();
    document.querySelector(`#${LSSM_MH_PREFIX}_pin`).onclick = () =>
        unpin_missionhelper(null);
    localStorage[`${LSSM_MH_PREFIX}_state`] = 'pinned';
};

let unpin_missionhelper = markup => {
    let missionhelper = document.querySelector(`#${LSSM_MH_PREFIX}`) || markup;
    document.querySelector('#iframe-inside-container').append(missionhelper);
    missionhelper.classList.replace('pinned', 'unpinned');
    document.querySelector(`#${LSSM_MH_PREFIX}_pin`).onclick = () =>
        pin_missionhelper(null);
    $(`#${LSSM_MH_PREFIX}`).draggable({
        handle: '.handle',
        containment: '#iframe-inside-container',
        scroll: true,
        stack: '#iframe-inside-container',
    });
    document.querySelector(`#${LSSM_MH_PREFIX}_toggle`).onclick = () => {
        document
            .querySelector(`#${LSSM_MH_PREFIX} .content`)
            .classList.toggle('hidden');
        let span = document.querySelector(`#${LSSM_MH_PREFIX}_toggle span`);
        span.classList.toggle('up');
        span.classList.toggle('down');
        localStorage[`${LSSM_MH_PREFIX}_toggle`] = span.classList.contains(
            'up'
        );
        lssm_missionhelper_adjustPosition();
    };
    localStorage[`${LSSM_MH_PREFIX}_state`] = 'unpinned';
};
