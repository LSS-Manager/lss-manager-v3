var buffermMa_sm = missionMarkerAdd;
var buffermPa_sm = mission_participation_add;

mission_participation_add = function (e) {
    buffermPa_sm(e);
    shareMissions(e);
}

missionMarkerAdd = function (e) {
    buffermMa_sm(e);
    shareMissions(e);
}

function shareMissions(t) {
    $('div.missionSideBarEntry:not(:hidden)').each(function () {
        var e = $(this);
        if (e.find('.allianceShareButton').length === 0) {
            var id = e.attr('mission_id');
            if (!$('#mission_panel_' + id).hasClass('panel-success') && typeof alliance_id !== "undefined" && alliance_id != 0) {
                create($('#mission_panel_heading_' + id), id, '');
            } else {
                create($('#mission_panel_heading_' + id), id, ' btn__disabled');
            }
        }
    });

    function create(h, id, allianceShareButtonDisabled) {
        var div = $('<div class="pull-right" id="allianceShareButton_' + id + '"></div>');
        var $button = $('<a  href="#" class="btn btn-success btn-xs allianceShareButton pull-right' + allianceShareButtonDisabled + '" data-header="' + id + '" title="Im Verband freigeben"><i class="glyphicon glyphicon-share-alt"></i></a>');
        div.prepend($button);
        h.prepend(div);

        $('.allianceShareButton').on('click', function () {
            $.ajax({
                url: '/missions/' + $(this).attr('data-header') + '/alliance'
            });
            $(this).addClass('btn__disabled');
        });
    }
};
shareMissions();
