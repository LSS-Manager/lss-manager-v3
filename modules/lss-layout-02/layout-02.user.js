(function () {
	$('body').prepend(
		'<style type="text/css" id="lss-layout-02-style">'+
		'.row{margin-top:0!important}'+
		'#map_outer{padding:0;margin-bottom:15px; width:100% !important;}'+
		'#missions_outer{padding-left:0!important}'+
		'#buildings_outer{padding-right:7.5px!important;padding-left:0!important}'+
		'#chat_outer{padding-left:7.5px!important;padding-right:0!important}'+
		'#radio_outer{padding-right:0}'+
		'#map{height:400px}'+
		'#missions-panel-body{padding:0;height:500px!important}'+
		'#missions > div > div > strong{display:none}'+
		'#missions > div > div > .btn-group{margin-bottom:5px;background-color:#5cb85c;width:100%;border-radius:3px;border:1px solid #3e8f3e}'+
		'#missions > div > div > .btn-group a{border:none;border-right:2px solid green}'+
		'#missions > div > div > .btn-group a:last-child{border:none}'+
		'</style>'
	);

	$('#map_outer').removeClass('col-sm-8').addClass('col-sm-12');
	$('#missions_outer, #buildings_outer, #chat_outer, #radio_outer').removeClass('col-sm-4').addClass('col-sm-3');
	map.invalidateSize(true);

})();
