(function ($, I18n) {
  I18n.translations.de.lssm.fms5inmap = {
		mapkit : "[FMS5InMap]\n\n Mapkit wird aktuell noch nicht von uns unterstützt.\n\nBitte deaktiviere das Addon solange oder schalte wieder \nauf OpenStreeMap um",
	}
  I18n.translations.en.lssm.fms5inmap = {
    mapkit : "[FMS5InMap]\n\n Mapkit is not currently supported by us.\n\nPlease turn this Add-On off or change back to OpenStreetMap",
  }
  I18n.translations.nl.lssm.fms5inmap = {
    mapkit : "[FMS5InMap]\n\n Mapkit wordt op dit moment niet door ons ondersteund.\n\nSchakel deze addon uit of keer terug naar OpenStreetMap",
  }
    var radio_message_important = $("#radio_messages_important");
    var id = "fm5InMap";
    if ("undefined" != typeof mapkit) {
      alert(I18n.t('lssm.fms5inmap.mapkit'));
    } else {
    lssm.newDragableDivOnMap(id,"",lssm.settings.get(lssm.config.prefix + "_"+id+"Position",{x:0,y:0})).append(radio_message_important);
    radio_message_important.css({
        "z-index": "999",
        "opacity": "0.9",
        "bottom": "0px",
        "left": "0px",
        "display": "block",
        "list-style-type": "none",
        "width": "100%",
        "color": "rgba(0, 0, 0, 0)",
        "margin": "0 !important",
        "padding": "10px"
    });
}})($, I18n);
