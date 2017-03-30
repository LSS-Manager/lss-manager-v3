(function(){
	$('.glyphicon.glyphicon-asterisk.hidden').parent().parent().addClass('lss_new_case_in_progress');
	$('.glyphicon.glyphicon-asterisk:not(.hidden)').parent().parent().addClass('lss_new_case');
	$('.panel.panel-default.lss_new_case_in_progress.panel-success, .panel.panel-default.lss_new_case.panel-success').addClass('lss_allianceCase');        
	$('.glyphicon.glyphicon-asterisk, .glyphicon.glyphicon-user').remove();
})();
