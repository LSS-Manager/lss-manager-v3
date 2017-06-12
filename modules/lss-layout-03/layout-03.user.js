(function () {
	$('body').prepend(
		'<style type="text/css" id="lss-layout-03-style">'+
		'#map_outer{display:none}'+
		'#buildings_outer,#chat_outer,#missions_outer,#radio_outer{height:calc(100vh - 90px);width:24%!important;padding:0;float:left;overflow:hidden;overflow-y:scroll}'+
		'#buildings_outer,#chat_outer,#radio_outer{margin-left:1.33%}'+
		'#buildings>.panel-default{height:calc(100vh - 90px);margin-bottom:0}'+
		'#missions-panel-body{height:100%;padding:0}'+
		'#buildings_outer .panel-body{height:calc(100vh - 140px);max-height:100%}'+
		'#chat_outer .panel-body,#radio_outer .panel-body{height:calc(100% - 40px);max-height:100%;padding-bottom:0}'+
		'#chat_outer>div,#radio>div,#radio_outer>div{height:100%;margin:0}'+
		'#missions{height:100%}'+
		'#missions strong{display:none!important}'+
		'#missions>div>div>.btn-group{margin-bottom:5px;background-color:#5cb85c;width:100%;border-radius:3px;border:1px solid #3e8f3e}'+
		'#missions>div>div>.btn-group a{border:none;border-right:2px solid green}'+
		'#missions>div>div>.btn-group a:last-child{border:none}'+
		'</style>'
	);
	$('#building_selection_feuerwehr').text('FW');
	$('#building_selection_rettung').text('RD');
	$('#building_selection_polizei').text('POL');
	$('#building_selection_wasserrettung').text('WR');
	map.invalidateSize(true);

})();
