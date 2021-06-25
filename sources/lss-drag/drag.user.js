// ==UserScript==
// @name drag
// @grant none
// @include https://www.leitstellenspiel.de/*
// @exclude https://www.leitstellenspiel.de/*missions*
// @version 0.2
// @updateURL
// ==/UserScript==
(function () {
    $('head').append(
        '<link href="http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet"></script>'
    );
    $('#map_outer').css({
        'border': 'red solid 0px',
        'max-height': $('#missions').css('height'),
        'height': $('#missions').css('height'),
    });
    $('#map_outer').resizable({
        maxHeight: 550,
        maxWidth: 1200,
        minHeight: 150,
        minWidth: 200,
        stop: function () {
            map.invalidateSize(map);
        },
    });

    $('#map').css({
        height: '100%',
    });

    $('.panel,.sidebar-nav').css({
        height: '100%',
    });
    $('#buildings_outer .panel').css({
        'display': 'flex',
        'flex-direction': 'column',
    });
    $('#buildings_outer .panel-heading').css({
        'min-height': '41px',
        'max-height': '41px',
    });
    $('#buildings_outer .panel-body').css({
        'max-height': 'none',
        'height': 'inherit',
        'padding-bottom': '0',
    });
    $('#buildings_outer')
        .resizable({
            minWidth: 420,
            minHeight: 400,
        })
        .css({
            height: '550px',
            clear: 'left',
        });

    $('#chat_outer')
        .resizable({
            minWidth: 420,
            minHeight: 400,
        })
        .css('height', '550px');
    $('#chat_outer .panel').css({
        'display': 'flex',
        'flex-direction': 'column',
    });
    $('#chat_outer .panel-body').css({
        'max-height': 'none',
        'height': 'inherit',
        'padding-bottom': '0',
    });
    $('#chat_outer .panel-heading').css({
        'min-height': '41px',
        'max-height': '41px',
    });

    $('#radio_outer')
        .resizable({
            minWidth: 420,
            minHeight: 400,
        })
        .css('height', '550px');
    $('#radio_outer .panel').css({
        'display': 'flex',
        'flex-direction': 'column',
    });
    $('#radio_outer .panel-body').css({
        'max-height': 'none',
        'height': 'inherit',
        'padding-bottom': '0',
    });
    $('#radio_outer .panel-heading').css({
        'min-height': '41px',
        'max-height': '41px',
    });

    $('#missions_outer')
        .resizable({
            minWidth: 420,
            minHeight: 400,
        })
        .css('height', '550px');
    $('#missions').css('height', '100%');
    $('#missions_outer .panel').css({
        'display': 'flex',
        'flex-direction': 'column',
    });
    $('#missions_outer .panel-body').css({
        'max-height': 'none',
        'height': 'inherit',
        'padding-bottom': '0',
    });
    $('#btn-alliance-new-mission').css('margin-bottom', '15px');
})();
