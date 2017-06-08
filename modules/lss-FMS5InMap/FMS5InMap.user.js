(function ($) {
    /*$("#radio_messages_important").detach().appendTo("#map"), $("#map #radio_messages_important").css({
     "position": "absolute",
     "z-index": "999",
     "opacity": "0.7",
     "bottom": "0px",
     "left": "0px",
     "display": "block",
     "list-style-type": "none",
     "width": "100%",
     "color": "rgba(0, 0, 0, 0)",
     "margin": "0 !important",
     "padding": "10px"
     })*/
    var radio_message_important = $("#radio_messages_important");
    $('<div id="' + lssm.config.prefix + '_fm5InMapDiv' + '"></div>')
            .css(lssm_settings.get(lssm.config.prefix + "_fm5InMapPosition", {}))
            .css({"position": "absolute", "z-index": "9999"})
            .draggable({containment: "#map",
                scroll: false,
                start: function () {
                    map.dragging.disable();
                },
                stop: function (e, i) {
                    map.dragging.enable();
                    lssm_settings.set(lssm.config.prefix + "_fm5InMapPosition", i.position);
                }})
            .prependTo('#map')
            .append(radio_message_important);

    radio_message_important.css({
        "z-index": "999",
        "opacity": "0.7",
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
