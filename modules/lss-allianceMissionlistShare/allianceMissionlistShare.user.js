(function ($, win,I18n) {
    I18n.translations.de['lssm']['allianceMissionlistShare']={
        title:"Im Verband freigeben"
    };
    I18n.translations.en['lssm']['allianceMissionlistShare']={
        title:"Release in alliance"
    };
    I18n.translations.es['lssm']['allianceMissionlistShare']={
        title:"Lanzamiento en alianza"
    };
	  I18n.translations.nl['lssm']['allianceMissionlistShare']={
        title:"In team vrijgeven"
    };

    // NOchmals checken kann aber denke ich raus
    /*var buffermPa_sm = mission_participation_add;

    mission_participation_add = function (e) {
        buffermPa_sm(e);
        shareMissions(e);
    };*/
    $(document).bind(lssm.hook.postname("missionMarkerAdd"),function(event,e){
        shareMissions(e.id);
    });

    function shareMissions(id) {
        if (typeof win.alliance_id === "undefined" || win.alliance_id === 0)
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
        let div = $('<div class="pull-right" id="allianceShareButton_' + id + '"></div>');
        let $button = $('<a  href="#" class="btn btn-success btn-xs allianceShareButton pull-right' + allianceShareButtonDisabled + '" data-header="' + id + '" title="'+I18n.t('lssm.allianceMissionlistShare.title')+'"><i class="glyphicon glyphicon-share-alt"></i></a>');
        div.prepend($button);
        h.prepend(div);
    }
    $('div.missionSideBarEntry:not(:hidden)').each(function () {
        shareMissions($(this).attr('mission_id'));
    });
    $('#missions-panel-body').on('click', '.allianceShareButton', function (e) {
        e.preventDefault();
        $.ajax({
            url: '/missions/' + $(this).attr('data-header') + '/alliance'
        });
        $(this).addClass('btn__disabled');
    });
})($, window,I18n);
