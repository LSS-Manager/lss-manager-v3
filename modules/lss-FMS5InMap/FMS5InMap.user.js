(function($) {
    $("#radio_messages_important").detach().appendTo("#map"), $("#map #radio_messages_important").css({
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
    })
})($);
