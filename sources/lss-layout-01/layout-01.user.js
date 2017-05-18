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
})();