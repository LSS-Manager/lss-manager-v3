(function ($) {
    $('.map_position_mover').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });

    let delay = (function () {
        let timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    $('#search_input_field_missions').on('keyup', function () {
        function escapeHtml(text) {
            let map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;',
            };

            return text.replace(/[&<>"']/g, function (m) {
                return map[m];
            });
        }
        let searchTerm = escapeHtml($(this).val().toLowerCase());
        delay(function () {
            $('#lssm_searchMissionsWrapper').remove();
            $('#missions_outer').append(
                '<div id="lssm_searchMissionsWrapper" style="z-index: 10006;position: fixed;left: 10px;bottom: 10px;max-height: calc(100vh - 20px);overflow: scroll; min-height:50px;"><div id="lssm_searchMissionsContainer"><span class="label label-primary" style="margin-right:5px;">' +
                    searchTerm +
                    '</span><a class="label label-info" style="margin-right:5px;" id="lssm_searchEntryToggle"><i class="glyphicon glyphicon-eye-open"></i></a></div><div>'
            );
            $('#lssm_searchEntryToggle').click(function () {
                $('#lssm_searchMissionsContainer').toggle();
            });
            $('.map_position_mover').each(function () {
                if (
                    $(this).filter('[data-search-term *= ' + searchTerm + ']')
                        .length > 0 ||
                    searchTerm.length < 1
                ) {
                    $(this).parent().parent().show();
                    let id = $(this).attr('id');
                    if (typeof id == typeof undefined) return true;
                    let missionCaptionID = id.split('_');
                    let newMissionLink = missionCaptionID[2];
                    $('#lssm_searchMissionsContainer').append(
                        '<a href="/missions/' +
                            newMissionLink +
                            '" class="label label-danger lightbox-open" style="display: inline-block; margin-right:5px">' +
                            newMissionLink +
                            '</a>'
                    );
                } else {
                    $(this).parent().parent().hide();
                }

                if ($('#search_input_field_missions').val() === '') {
                    $('#lssm_searchMissionsWrapper').remove();
                }
            });
        }, 500);
    });
})($);
