(function() {
    $("#radio_messages_important").detach().appendTo("#map"), $("#map #radio_messages_important").css({
        position: "absolute",
        "z-index": "999",
        right: "55px",
        opacity: ".7",
        "margin-top": "55px",
        display: "block",
        "list-style-type": "none"
    })
})();
