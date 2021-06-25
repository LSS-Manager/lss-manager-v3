/* global lssm, missionMarkerAdd */

(I18n => {
    fetch(
        (I18n.translations[I18n.locale].lssm.eventmission = lssm.getlink(
            `/modules/lss-eventmissions/i18n/${I18n.locale}.json`,
            false
        ))
    )
        .then(res => res.json())
        .then(data => {
            I18n.translations[I18n.locale].lssm.eventmission = data;

            const prefixes = I18n.t('lssm.eventmission.prefixes');
            const prefixesByType = {};
            Object.entries(prefixes).forEach(([prefix, types]) =>
                types.forEach(type => {
                    if (!prefixesByType.hasOwnProperty(type))
                        prefixesByType[type] = [];
                    prefixesByType[type].push(prefix);
                })
            );

            document.querySelectorAll('.missionSideBarEntry').forEach(el => {
                const type = el.getAttribute('mission_type_id');
                if (!prefixesByType.hasOwnProperty(type)) return;
                const caption = el.querySelector('[id*="mission_caption_"]');
                caption.innerHTML = `${prefixesByType[type].join('')} ${
                    caption.innerHTML
                }`;
            });

            const missionMarkerAddOrig = missionMarkerAdd;
            // eslint-disable-next-line no-global-assign
            missionMarkerAdd = function (t) {
                prefixesByType.hasOwnProperty(t.mtid) &&
                    (t.caption = `${prefixesByType[t.mtid].join('')} ${
                        t.caption
                    }`);
                missionMarkerAddOrig(t);
            };
        });
})(window.I18n);
