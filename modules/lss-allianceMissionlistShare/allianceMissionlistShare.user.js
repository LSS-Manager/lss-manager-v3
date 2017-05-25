(function ($, win) {
    var buffermMa_sm = missionMarkerAdd;
    // NOchmals checken kann aber denke ich raus
    /*var buffermPa_sm = mission_participation_add;

    mission_participation_add = function (e) {
        buffermPa_sm(e);
        shareMissions(e);
    };*/

    missionMarkerAdd = function (e) {
        buffermMa_sm(e);
        shareMissions(e.id);
    };

    function shareMissions(id) {
        if (typeof win.alliance_id !== "undefined" && win.alliance_id == 0)
            return;
        if ($('#allianceShareButton_' + id).length === 0) {
            if (!$('#mission_panel_' + id).hasClass('panel-success')) {
                create($('#mission_panel_heading_' + id), id, '');
            } else {
                create($('#mission_panel_heading_' + id), id, ' btn__disabled');
            }
        } else {
            $('#mission_panel_' + id).hasClass('panel-success')&&$('#allianceShareButton_' + id+' .allianceShareButton').addClass('btn__disabled');
        }
    }
    function create(h, id, allianceShareButtonDisabled) {
        var div = $('<div class="pull-right" id="allianceShareButton_' + id + '"></div>');
        var $button = $('<a  href="#" class="btn btn-success btn-xs allianceShareButton pull-right' + allianceShareButtonDisabled + '" data-header="' + id + '" title="Im Verband freigeben"><i class="glyphicon glyphicon-share-alt"></i></a>');
        div.prepend($button);
        h.prepend(div);
    }
    $('div.missionSideBarEntry:not(:hidden)').each(function () {
        shareMissions($(this).attr('mission_id'));
    });
    $('#missions-panel-body').on('click', '.allianceShareButton', function () {
        $.ajax({
            url: '/missions/' + $(this).attr('data-header') + '/alliance'
        });
        $(this).addClass('btn__disabled');
    });
})($, window);