(function ($, I18n) {
    function setColor(bgcolor, color){
        $("nav, .navbar-default").each(function() {
            this.style.setProperty("background-color", bgcolor, "important");
        });
        $("div[id$='_outer'] .panel-heading").each(function() {
            this.style.setProperty("background-color", bgcolor);
            this.style.setProperty("color", "#fff");
        });
        $(".dropdown-menu li,.dropdown-menu").each(function() {
            this.style.setProperty("background-color", bgcolor);
        });
        $("div[id^='mission_panel_heading']").each(function() {
            this.style.setProperty("background-color", bgcolor);
            this.style.setProperty("color", color);
        });
        $("a[id^='mission_caption']").each(function() {
            this.style.setProperty("color", color);
        });
        $(".navbar-nav > li > a").each(function() {
            this.style.setProperty("color", color);
        });
        $("head").append("\
        <style type='text/css' rel='stylesheet' id='"+lss_config.prefix+"_recolor_style'> \
            #dashboard_outer, .panel-heading, .modal-header, nav, .navbar-default {background-color:"+bgcolor+"!important; color:"+color+"!important }\
            .navbar-nav > li > a, a[id^='mission_caption']{color:"+color+"!important}\
        </style>");
    }
    $("div[id^='mission_panel_heading']")
        .css("background-color", "#f5f5f5");
    var settingButton = $('<li role="presentation"><a id="' + lss_config.prefix + '_recolor_open" href="#">Recolor</a></li>');
    console.log($('#' + lss_config.prefix + '_menu'));
    $('#' + lss_config.prefix + '_menu').append(settingButton);
    $('#'+ lss_config.prefix + '_recolor_open').click(function(){
        var content = $('#navbar-mobile-footer').prev();
        var settings = '</div><div class="row" id="'+lss_config.prefix+'_recolor">' +
            '<div class="col-md-12 lssm_appstore>' +
            '<p>Recolor settings</p>' +
            '</div>';
        var settings_html = '<div id="'+ lss_config.prefix+'_recolor"><div class="jumbotron">' +
            '<a href="#" class="close" data-dismiss="alert" aria-label="close" id="'+ lss_config.prefix+'_recolor_close">&times;</a>' +
            '<h1>Recolor</h1>' +
            '<p>Hier kannst du die Farbe einstellen, die du in LSS haben möchtest</p>' +
            '</div>';

        settings_html += '<nav class="navbar navbar-default navbar-static-top" role="navigation">' +
            '<div class="lssm_appstore_settingsbar_div" style="padding-left: 20px;padding-right: 20px;">' +
            '<ul class="nav navbar-nav">' +
            '<li><a href="#" id="'+lss_config.prefix+'_recolor_save" class="btn btn-success">Speichern</a></li></ul>' +
            '</div></nav>';

        settings_html += '<div class="col-md-3">' +
            '<div class="panel panel-default" style="display: inline-block;width:100%;">' +
            '<div class="panel-body">' +
            '<h4>Farbe</h4>' +
            '<small>Die generelle Farbe von LSS</small>' +
            '</div>' +
            '<div class="panel-footer">' +
            '<input type="color" value="#c9302c" id="'+ lss_config.prefix +'_recolor_bg">' +
            '</div></div></div>';

        settings_html += '<div class="col-md-3">' +
            '<div class="panel panel-default" style="display: inline-block;width:100%;">' +
            '<div class="panel-body">' +
            '<h4>Textfarbe</h4>' +
            '<small>Die farbe der Texte in LSS</small>' +
            '</div>' +
            '<div class="panel-footer">' +
            '<input type="color" value="#ffffff" id="'+ lss_config.prefix +'_recolor_text">' +
            '</div></div></div>';


        content.hide();
        $('footer').hide();
        $('col_navbar_holder').hide();
        $('body').append(settings_html);
        $('#'+ lss_config.prefix + '_recolor_bg').change(function() {
            setColor($(this).val(), $('#'+ lss_config.prefix + '_recolor_text').val());
        });
        $('#'+ lss_config.prefix + '_recolor_text').change(function() {
            setColor($('#'+ lss_config.prefix + '_recolor_bg').val(), $(this).val());
        });
        $('#'+ lss_config.prefix + '_recolor_close').click(function() {
            $('#'+lss_config.prefix+'_recolor').remove();
            content.show();
            $('footer').show();
            $('col_navbar_holder').show();
        });
    });
})(jQuery, I18n);