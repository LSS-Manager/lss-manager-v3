(function(I18n, $) {
	'use strict';
	
	var LSS_RELEASENOTES_STORAGE = "LSS_RELEASENOTES_STORAGE";

	I18n.translations.de['lssm']['releasenotes'] = {
		title : "Neuerungen",
		close : "Cool!",
		errorloading: "Fehler beim Laden der Releasenotes."
	};

	I18n.translations.en['lssm']['releasenotes'] = {
		title : "New",
		close : "Cool!",
		errorloading: "Error loading Releasenotes."
	};
	
	var latestVersion = lssm.settings.get(LSS_RELEASENOTES_STORAGE);
	
	latestVersion = null; // COMMENT THIS OUT FOR PRODUCTION!!
	
	if(latestVersion != lssm.config.version){
		
		var markup = "";
		markup += '<div id="releaseNotes" class="releaseNotesClose" style="background: #fff; z-index: 10001; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); min-height: 200px; min-width: 200px; max-width: 600px; width: 80%; border: 1px solid rgb(66, 66, 66);">';
		markup += '<button type="button" class="close" aria-label="Cool">×</button>';
		markup += '<div class="container-fluid">';
		markup += '<h4>' + I18n.t('lssm.releasenotes.title') + '</h4>';
		markup += '<div id="releaseNotesContent"></div>';
		markup += '<button class="releaseNotesClose">' + I18n.t('lssm.releasenotes.close') + '</button>';
		markup += '</div>';
		markup += '</div>';
		
		$('body').append(markup);
		
	    $.get(lssm.getlink("/modules/lss-releasenotes/releaseNotes.json"))
	    .fail(function () {
	    	$('#releaseNotesContent').html("<div>" + I18n.t('lssm.releasenotes.errorloading') + "</div>");
	    })
	    .done(function (data) {
	    	var releaseMarkup = "";
	    	$(data.releases).each(function(){
	    		releaseMarkup += "<div>";
	    		releaseMarkup += "<h5>" + this.version + "</h5>";
	    		releaseMarkup += "<ul>";
	    		$(this.changes).each(function(){
	    			if(this.id != ""){
	    				releaseMarkup += "<li>" + this.type + ": <a href='https://github.com/LSS-Manager/lss-manager-v3/issues/" + this.id + "'>" + this[I18n.currentLocale()] +"</a></li>";
	    			} else {
	    				releaseMarkup += "<li>" + this.type + ": " + this[I18n.currentLocale()] +"</li>";
	    			}
	    			
	    		});
	    		releaseMarkup += "<ul>";
	    		releaseMarkup += "</div>";
	    	});
	    	$('#releaseNotesContent').html(releaseMarkup);
	    });
	    
	    $('.releaseNotesClose').click(function(){
	    	$('#releaseNotes').remove();
	    	setVersion();
	    });
		
	}
	
	function setVersion(){
        lssm.settings.remove(LSS_RELEASENOTES_STORAGE);
        lssm.settings.set(LSS_RELEASENOTES_STORAGE, lssm.config.version);
	}

	
})(I18n, jQuery);