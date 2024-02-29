(function() {
    $('body').prepend(
        '<style type="text/css" id="lss-layout-03-style">' +
        '#map_outer{display:none}' +
        '#buildings_outer,#chat_outer,#missions_outer,#radio_outer{height:calc(100vh - 90px);width:24%!important;padding:0;float:left;overflow:hidden;overflow-y:scroll}' +
        '#buildings_outer,#chat_outer,#radio_outer{margin-left:1.33%}' +
        '#buildings>.panel-default{height:calc(100vh - 90px);margin-bottom:0}' +
        '#missions-panel-body{height:100%;padding:0}' +
        '#buildings_outer .panel-body{height:calc(100vh - 140px);max-height:100%}' +
        '#chat_outer .panel-body,#radio_outer .panel-body{height:calc(100% - 40px);max-height:100%;padding-bottom:0}' +
        '#chat_outer>div,#radio>div,#radio_outer>div{height:100%;margin:0}' +
        '#missions{height:100%}' +
        '.missions-panel-head strong{display:none!important}' +
        '#missions>div>div>.btn-group{margin-bottom:5px;width:100%;border-radius:3px}' +
        '#missions>div>div>.btn-group a{border:none;border-right:3px solid}' +
        '#missions>div>div>.btn-group a:last-child{border:none}' +
        '.label-speedbutton {padding-top: 4px;padding-bottom: 4px;}' +
        '</style>'
    );
    if ('undefined' != typeof mapkit) {} else map.invalidateSize(true);
})();