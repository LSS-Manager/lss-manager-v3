/**
 * Created by Northdegree on 05.06.2017.
 */
(function ($, I18n) {
  I18n.translations.de.lssm.wachenhover = {
    mapkit : "[WachenHover]\n\n Mapkit wird aktuell noch nicht von uns unterstützt.\n\nBitte deaktiviere das Addon solange oder schalte wieder \nauf OpenStreeMap um",
  }
  I18n.translations.en.lssm.wachenhover = {
    mapkit : "[Station status]\n\n Mapkit is not currently supported by us.\n\nPlease turn this Add-On off or change back to OpenStreetMap",
  }
  I18n.translations.nl.lssm.wachenhover = {
    mapkit : "[Voertuigstatus bij gebouwen]\n\n Mapkit wordt op dit moment niet door ons ondersteund.\n\nSchakel deze addon uit of keer terug naar OpenStreetMap",
  }
    $(document).bind(lssm.hook.postname("building_maps_draw"),function(event,e){
        "use strict";
        redraw_Labels();
    });
    $(document).bind(lssm.hook.postname("radioMessage"),function(event,t){
        "use strict";
        redraw_Labels();
    });
    function redraw_Labels() {
      if ("undefined" != typeof mapkit) {
        alert(I18n.t('lssm.wachenhover.mapkit'));
      } else
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
})($, I18n);
