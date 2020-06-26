/* global $, lssm, building_markers, L */
/**
 * Created by Northdegree on 05.06.2017.
 */
(function($) {
    $(document).bind(lssm.hook.postname('building_maps_draw'), function() {
        'use strict';
        redraw_Labels();
    });
    $(document).bind(lssm.hook.postname('radioMessage'), function(event, t) {
        'use strict';
        if (!t.fms_text?.startsWith('[Verband]')) redraw_Labels();
    });
    function redraw_Labels() {
        $.each(building_markers, function(key, marker) {
            // Is the tooltip currently open?
            let reopen = false;
            if (marker.isTooltipOpen()) {
                reopen = true;
                // Close the tooltip
                marker.closeTooltip();
            }
            // Unbind the tooltip and edit the content
            marker.unbindTooltip();
            let c_labels = lssm.car_list(marker.building_id);
            c_labels.sort((a, b) =>
                a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            );
            let data = marker.options.title;
            if (c_labels.length > 0) {
                data += '&nbsp;<i class="fa fa-car"></i>' + c_labels.length;
                data += lssm.car_list_printable(c_labels);
            }
            // Re-Bind the content
            marker.bindTooltip(data, {
                direction: 'top',
                offset: L.point(0, -marker.options.icon.options.iconSize[1]),
                zIndex: 999,
            });
            // Open the new tooltip (if needed)
            if (reopen) marker.openTooltip();
        });
    }
    redraw_Labels();
})($);
