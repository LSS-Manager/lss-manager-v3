(function ($, win, I18n) {
    const lsName = `${lssm.config.prefix}_missionOut`;

    I18n.translations.de.lssm.missionOut = {
        title: 'Einsatz aus/ein-blenden'
    };
    I18n.translations.en.lssm.missionOut = {
        title: 'Hide/Show mission'
    };
    I18n.translations.pl_PL.lssm.missionOut = {
        title: 'Misja ukrycia/pokazania'
    };
    I18n.translations.sv_SE.lssm.missionOut = {
        title: 'Dölj / Visa uppdrag'
    };
    I18n.translations.da_DK.lssm.missionOut = {
        title: 'Skjul / vis mission'
    };
    I18n.translations.nb_NO.lssm.missionOut = {
        title: 'Skjul / vis misjon'
    };
    I18n.translations.it_IT.lssm.missionOut = {
        title: 'Nascondi/Mostra missione'
    };
    I18n.translations.fr_FR.lssm.missionOut = {
        title: 'Masquer/afficher la mission'
    };
    I18n.translations.ru_RU.lssm.missionOut = {
        title: 'Скрыть / Показать миссию'
    };
    I18n.translations.es.lssm.missionOut = {
        title: 'Ocultar/Mostrar misión'
    };
    I18n.translations.nl.lssm.missionOut = {
        title: 'Verberg/toon melding'
    };

    const get_full_storage = () => JSON.parse(localStorage[lsName] || '{}');
    const switch_storage = (btn, mission_id) => {
        let storage = JSON.parse(localStorage[lsName] || '{}');
        (btn.hasClass('btn-danger') && (storage[mission_id] = true)) || delete storage[mission_id];
        localStorage[lsName] = JSON.stringify(storage);
    };

    addBtns();

    let missionMarkerOrig = missionMarkerAdd;
    missionMarkerAdd = e => {
        missionMarkerOrig(e);
        addBtns(e);
    };

    function addBtns(e) {
        $(`.missionSideBarEntry .panel-heading${(e && e.id) ? `#mission_panel_heading_${e.id}` : ''}`).each((key, mission) => {
            mission = $(mission);
            let mission_id = mission.parent().parent().attr('mission_id');
            $(`.missionPatients_${mission_id}`).remove();
            !mission.find('.MissionOut')[0] && mission.prepend(`<div class="pull-right"><a class="btn btn-success btn-xs MissionOut pull-right" mission_id="${mission_id}" title="${I18n.t('lssm.missionOut.title')}"><i class="glyphicon glyphicon-eye-open"></i></a></div>`);
            mission.find('.MissionOut').parent().append(`<small class="missionPatients_${mission_id} pull-right">Pat.: ${$(`#mission_patients_${mission_id} .patient_progress`).length||$(`#mission_patient_summary_${mission_id}>strong`).text().replace(/\D*/g, "")||0}&nbsp;</small>`);
            mission.find('.MissionOut')
                .unbind()
                .click(e => {
                    let btn = $(e.currentTarget);
                    let mission_id = btn
                        .toggleClass('btn-success')
                        .toggleClass('btn-danger')
                        .find('i')
                        .toggleClass('glyphicon-eye-open')
                        .toggleClass('glyphicon-eye-close')
                        .parent()
                        .attr('mission_id');
                    switch_storage(btn, mission_id);
                    let panel = $(`#mission_panel_${mission_id} .panel-body`);
                    panel.toggle();
                    let icon = $(`#mission_vehicle_state_${mission_id}`);
                    btn.hasClass('btn-danger') ? icon.prependTo(btn.parent().parent()) : icon.appendTo(panel.find('.col-xs-1'));
                    //let mission_icon = mission_markers.find(x => x.mission_id === parseInt(mission_id));
                    //mission_icon && mission_icon._icon && $(mission_icon._icon).toggle();
                });
        });
        if (e) return;
        let full_storage = get_full_storage();
        for (let mission in full_storage) {
            if (!full_storage.hasOwnProperty(mission)) continue;
            let btn = $(`.MissionOut[mission_id=${mission}]`);
            (btn && btn.click()) ||switch_storage(btn, mission);
        }
    }

    $('#mission_select_sicherheitswache').after(`<a id="missionOut_all" class="btn btn-success btn-xs MissionOut" title="${I18n.t('lssm.missionOut.title')}"><i class="glyphicon glyphicon-eye-open"></i></a>`);
    $('#missionOut_all').click(e => {
        $(e.currentTarget)
            .toggleClass('btn-success')
            .toggleClass('btn-danger')
            .find('i')
            .toggleClass('glyphicon-eye-open')
            .toggleClass('glyphicon-eye-close')
            .parent()
            .hasClass('btn-danger') ? $('.MissionOut.btn-success').click() : $('.MissionOut.btn-danger').click();
    });

})(jQuery, window, I18n);
