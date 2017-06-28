(function ($) {
    var radio_message_important = $("#radio_messages_important");
    var id = "fm5InMap";
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
})($);
