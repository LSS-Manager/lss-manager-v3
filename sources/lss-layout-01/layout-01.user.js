(function () {
	if (!window.location.pathname.match(/missions\//)) {
		$('head').append('<link href="https://lssm-develop.lost.design/sources/lss-layout-01/layout-01.css" type="text/css" rel="stylesheet">');

		$('#missions_outer').addClass('lssm_menu_active');
		$('#missions_outer').after(
			'<div id="lssm_menu">'
				+'<div class="lssm_menu_btn_wrapper"><a class="lssm_menu_btn lssm_menu_btn_active" id="missions"><img class="lssm_menu_btn_svg" src="/images/icons8-fire_element.svg"></a></div>'
				+'<div class="lssm_menu_btn_wrapper"><a class="lssm_menu_btn" id="buildings"><img class="lssm_menu_btn_svg" src="/images/icons8-building.svg"></a></div>'
				+'<div class="lssm_menu_btn_wrapper"><a class="lssm_menu_btn" id="chat"><img class="lssm_menu_btn_svg" src="/images/icons8-chat.svg"></a></div>'
				+'<div class="lssm_menu_btn_wrapper"><a class="lssm_menu_btn" id="radio"><img class="lssm_menu_btn_svg" src="/images/icons8-walkie_talkie_radio.svg"></a></div>'
			+'</div>');

		$('.lssm_menu_btn').click(function () {
			map.invalidateSize(true);
			var lssm_menu_view = this.id + '_outer';
			$('a.lssm_menu_btn_active').removeClass('lssm_menu_btn_active');
			$(this).addClass('lssm_menu_btn_active');
			$('div.lssm_menu_active').hide().removeClass('lssm_menu_active');
			$('#' + lssm_menu_view).show().addClass('lssm_menu_active');
		});
	}

	var newMessages = 0;
  $('#chat').append('<span id="lssm_messageAmount" class="label label-danger" style="margin-top:-8px; margin-left:-15px;position:absolute;"></span>');

  var allianceChatBuffer = allianceChat;
  allianceChat = function (e) {
      if (e.user_id!=user_id && !e.ignore_audio && $('#chat_outer').is(':hidden')) {
          newMessages++;
          $('#lssm_messageAmount').text(newMessages);
      }
      allianceChatBuffer(e);
  };
  $('#chat').click(function(){
    newMessages = 0;
    $('#lssm_messageAmount').text('');
  });

	$('a#missions').append('<span id="lssm_callsAmount" class="label label-danger" style="margin-top:-8px; margin-left:-15px;position:absolute;"></span>');
		var newCalls = 0;

		var missionMarkerAddBuffer = missionMarkerAdd;
		missionMarkerAdd = function(e){
			console.log('new missionmarker add: ', e,$('#mission_'+e.id).length,$('#missions_outer').is(':hidden'));
			if(!$('#mission_'+e.id).length && $('#missions_outer').is(':hidden')){
				newCalls++;
				$('#lssm_callsAmount').text(newCalls);
				console.log('neu: '+newCalls);
			};
			missionMarkerAddBuffer(e);
		};

		$('a#missions').click(function(){
			newCalls = 0;
			$('#lssm_callsAmount').text('');
		});

})();
