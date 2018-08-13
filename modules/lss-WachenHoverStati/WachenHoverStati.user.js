/**
 * Created by Northdegree on 05.06.2017.
 */
(function ($, I18n) {
    if ("undefined" != typeof mapkit) {
        alert("[" + lssm.Module.WachenHoverStati.name[I18n.locale] + "]\n\n" + I18n.t('lssm.mapkit'));
    } else {
        $(document).bind(lssm.hook.postname("building_maps_draw"),function(event,e){
            "use strict";
            redraw_Labels();
        });
        $(document).bind(lssm.hook.postname("radioMessage"),function(event,t){
            "use strict";
            redraw_Labels();
        });
        function redraw_Labels() {
            $.each(building_markers, function (key, marker) {
                // Is the tooltip currently open?
                var reopen = false;
                if (marker.isTooltipOpen()) {
                    reopen = true;
                    // Close the tooltip
                    marker.closeTooltip();
                }
                // Unbind the tooltip and edit the content
                marker.unbindTooltip();
                c_labels = lssm.car_list(marker.building_id);
                data = marker.options.title;
                if (c_labels.length > 0) {
                    data += '&nbsp;<i class="fa fa-car"></i>' + c_labels.length;
                    data += lssm.car_list_printable(c_labels);
                }
                // Re-Bind the content
                marker.bindTooltip(data, {direction: "top", offset: L.point(0,-marker.options.icon.options.iconSize[1]),zIndex: 999});
                // Open the new tooltip (if needed)
                if (reopen)
                    marker.openTooltip();
            });
        }
        redraw_Labels();
    }
})($, I18n);
