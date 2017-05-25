(function ($, I18n) {
    var background = "#f39c12";
    console.log(background);
    $("nav, .navbar-default").each(function() {
        this.style.setProperty("background-color", background, "important");
    });
    $("div[id$='_outer'] .panel-heading").each(function() {
        this.style.setProperty("background-color", background);
        this.style.setProperty("color", "#fff");
    });
    $(".dropdown-menu li,.dropdown-menu").each(function() {
        this.style.setProperty("background-color", background);
    });
    $("div[id^='mission_panel_heading']").each(function() {
        this.style.setProperty("background-color", "");
        this.style.setProperty("color", "#34495e");
    });
    // Separate stylesheet for dashboard (cuz fuck you dynamic content)
    $("#design_css").remove();
    $("head").append("\
        <style type='text/css' rel='stylesheet' id='design_css'>\
            #dashboard_outer .panel-heading, .modal-header {background-color:"+background+"!important; color:#fff }\
        </style>\
    ");
    $("div[id^='mission_panel_heading']")
        .css("background-color", "#f5f5f5")
})(jQuery, I18n);
