(function ($) {
    $('.map_position_mover').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });

    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    $('#map_adress_search').on('keyup', function () {
        var searchTerm = $(this).val().toLowerCase();
        delay(function () {
            $('#lssm_searchMissionsWrapper').remove();
            $('#missions_outer').append('<div id="lssm_searchMissionsWrapper" style="z-index: 10006;position: fixed;left: 10px;bottom: 10px;max-height: calc(100vh - 20px);overflow: scroll; min-height:50px;"><div id="lssm_searchMissionsContainer"><span class="label label-primary" style="margin-right:5px;">' + searchTerm + '</span><a class="label label-info" style="margin-right:5px;" id="lssm_searchEntryToggle"><i class="glyphicon glyphicon-eye-open"></i></a></div><div>');
            $('#lssm_searchEntryToggle').click(function () {
                $('#lssm_searchMissionsContainer').toggle();
            });
            $('.map_position_mover').each(function () {
                if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                    $(this).parent().parent().show();
                    var id = $(this).attr('id');
                    if (typeof id == typeof undefined)
                        return true;
                    var missionCaptionID = id.split('_');
                    var newMissionLink = missionCaptionID[2];
                    $('#lssm_searchMissionsContainer').append('<a href="/missions/' + newMissionLink + '" class="label label-danger lightbox-open" style="display: inline-block; margin-right:5px">' + newMissionLink + '</a>');

                } else {
                    $(this).parent().parent().hide();
                }

                if ($('#map_adress_search').val() === '') {
                    $('#lssm_searchMissionsWrapper').remove();
                }
            });
        }, 500);
    });
})($);
