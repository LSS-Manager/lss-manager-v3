(function() {
    $('head').append('<style rel="stylesheet" id="lss-layout-01" type="text/css">#map,#missions-panel-body{height:100%!important}#map_outer{top:0;width:70%;height:calc(100vh - 90px);padding:0}#buildings_outer,#chat_outer,#missions_outer,#radio_outer{width:calc(30% - 90px);height:calc(100vh - 90px);margin-left:20px;padding:0!important;float:left;overflow:hidden;overflow-y:scroll}#buildings_outer,#chat_outer,#radio_outer{display:none}#missions-panel-body{padding:0!important}#buildings_outer .panel-body{height:calc(100vh - 135px)!important;padding-bottom:0;max-height:100%!important}#chat_outer .panel-body,#radio_outer .panel-body{height:calc(100% - 40px)!important;max-height:100%!important;padding-bottom:0!important}#chat_outer>div,#radio>div,#radio_outer>div{height:100%;margin:0}#missions{height:100%}#lssm_menu{width:45px;height:calc(100vh - 90px);position:absolute;top:80px;right:17px;border-radius:5px;z-index:999}#lssm_menu div{margin-bottom:20px}.lssm_menu_btn{padding:10px;background-color:#fff;border-radius:4px}.lssm_menu_btn:hover{background-color:#fb3c35;cursor:pointer}.lssm_menu_btn_active{padding:10px;background-color:#c9302c;border-radius:4px}.lssm_menu_btn_active img,.lssm_menu_btn_svg:hover{-webkit-filter:invert(100%) contrast(10);filter:invert(100%) contrast(10)}.lssm_menu_btn_svg{width:20px}#WachenplanungOnMap_settings{left:0!important}</style>');
    $('#missions_outer').addClass('lssm_menu_active');
    $('#missions_outer').after(
        '<div id="lssm_menu">' +
        '<div class="lssm_menu_btn_wrapper"><a class="lssm_menu_btn lssm_menu_btn_active" id="missions"><img class="lssm_menu_btn_svg" src="/images/icons8-fire_element.svg"></a></div>' +
        '<div class="lssm_menu_btn_wrapper"><a class="lssm_menu_btn" id="buildings"><img class="lssm_menu_btn_svg" src="/images/icons8-building.svg"></a></div>' +
        '<div class="lssm_menu_btn_wrapper"><a class="lssm_menu_btn" id="chat"><img class="lssm_menu_btn_svg" src="/images/icons8-chat.svg"></a></div>' +
        '<div class="lssm_menu_btn_wrapper"><a class="lssm_menu_btn" id="radio"><img class="lssm_menu_btn_svg" src="/images/icons8-walkie_talkie_radio.svg"></a></div>' +
        '</div>');

    $('.lssm_menu_btn').click(function() {
        map.invalidateSize(true);
        var lssm_menu_view = this.id + '_outer';
        $('a.lssm_menu_btn_active').removeClass('lssm_menu_btn_active');
        $(this).addClass('lssm_menu_btn_active');
        $('div.lssm_menu_active').hide().removeClass('lssm_menu_active');
        $('#' + lssm_menu_view).show().addClass('lssm_menu_active');
    });

    var newMessages = 0;
    $('#chat').append('<span id="lssm_messageAmount" class="label label-danger" style="margin-top:-8px; margin-left:-15px;position:absolute;"></span>');

    var allianceChatBuffer = allianceChat;
    allianceChat = function(e) {
        if (e.user_id != user_id && !e.ignore_audio && $('#chat_outer').is(':hidden')) {
            newMessages++;
            $('#lssm_messageAmount').text(newMessages);
        }
        allianceChatBuffer(e);
    };
    $('#chat').click(function() {
        newMessages = 0;
        $('#lssm_messageAmount').text('');
    });

    $('a#missions').append('<span id="lssm_callsAmount" class="label label-danger" style="margin-top:-8px; margin-left:-15px;position:absolute;"></span>');
    var newCalls = 0;

    var missionMarkerAddBuffer = missionMarkerAdd;
    missionMarkerAdd = function(e) {
        if (!$('#mission_' + e.id).length && $('#missions_outer').is(':hidden')) {
            newCalls++;
            $('#lssm_callsAmount').text(newCalls);
            console.log('Neue Einsätze: ' + newCalls);
        };
        missionMarkerAddBuffer(e);
    };

    $('a#missions').click(function() {
        newCalls = 0;
        $('#lssm_callsAmount').text('');
    });

})();
