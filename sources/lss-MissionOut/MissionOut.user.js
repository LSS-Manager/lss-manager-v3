// ==UserScript==
// @name         MissionOut
// @version      2.3
// @description  Einklappen der Einsätze
// @author       Mausmajor
// @include      *://www.leitstellenspiel.de/
// @exclude      *://www.leitstellenspiel.de/mission*
// @grant        none
// ==/UserScript==
(function () {
    var win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    var $ = win.$;
    var missionMarkerAddBuffer = win.missionMarkerAdd;
    $('#missions-panel-body').on('click', '.MissionOut', function (e) {
        e.preventDefault();
        var $e = $(this);
        $('#icon_' + $e.data('header')).toggle();
        if ($(this).hasClass('btn-success')) {
            $('#mission_panel_heading_' + $e.data('header')).next().hide();
            $e.removeClass('btn-success').addClass('btn-danger');
            $e.html('show');
        } else {
            $('#mission_panel_heading_' + $e.data('header')).next().show();
            $e.removeClass('btn-danger').addClass('btn-success');
            $e.html('hide');
        }
    });
    win.missionMarkerAdd = function (t) {
        missionMarkerAddBuffer(t);
        var s = s = "undefined" != typeof mission_graphics[t.mtid] && null != mission_graphics[t.mtid] && "undefined" != typeof mission_graphics[t.mtid][t.vehicle_state] && "" != mission_graphics[t.mtid][t.vehicle_state] ? mission_graphics[t.mtid][t.vehicle_state] : "/images/" + t.icon + ".png";
        $('#icon_' + t.id).length && $('#icon_' + t.id).attr('src', s);
        var $header = $('#mission_panel_heading_' + t.id);
        if (!$header.find('.MissionOut').length) {
            var $button = $('<a  href="#" class="btn btn-success btn-xs MissionOut" data-header="' + t.id + '" title="Mission aus/ein-blenden">hide</a>');
            $header.prepend($button);
            var $icon = $('<img src="' + s + '" id="icon_' + t.id + '">').css({'max-height': '20px;'
                , 'max-width': '17px', 'display': 'none'});
            $header.prepend($icon);
        }
        patienten(t.id, t.patients_count);
    };
    function patienten(id, t) {
        $('#pat_' + id).length ? $('#pat_' + id).html('Pat.: ' + t) : $('#mission_panel_heading_' + id).prepend('<small id="pat_' + id + '">Pat.: ' + t + '</small>');
    }
})();
