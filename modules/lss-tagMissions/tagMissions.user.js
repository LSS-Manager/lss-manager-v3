(function($){
        // save game functions to keep them alive
var buffermMa = missionMarkerAdd;
var buffermPa = mission_participation_add;

// run tag missions when game is changing participation
mission_participation_add = function(e){ 
	buffermPa(e);
	tagMissions(e);
}
// run tag missions when game is changing markers
missionMarkerAdd = function(e){ 
	buffermMa(e);
	tagMissions(e.id);
}

// find tags function
function tagMissions(t){
    var mpl = $('#mission_panel_'+t);
    var mpn = $('#mission_participant_new_'+t);
    var mp = $('#mission_participant_'+t);
    
    if( mpn.hasClass('hidden')){
        mpl.addClass('lss_new_case_in_progress');        
	    
    } else if( mp.hasClass('hidden')){
       mpl.addClass('lss_new_case');
	    
    } else if( mpl.hasClass('.panel-success')){
        mpl.addClass('lss_new_case');
    }
}
// find all elements on first load
$('.glyphicon.glyphicon-asterisk.hidden').parent().parent().addClass('lss_new_case_in_progress');
$('.glyphicon.glyphicon-asterisk:not(.hidden)').parent().parent().addClass('lss_new_case');
$('.panel.panel-default.lss_new_case_in_progress.panel-success, .panel.panel-default.lss_new_case.panel-success').addClass('lss_allianceCase');  
})($);