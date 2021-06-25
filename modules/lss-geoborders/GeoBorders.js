(($, I18n) => {
    const STORAGE = 'LSS_GEOBORDERS';

    lssm.loadStyle(
        '/modules/lss-geoborders/vendor/jquery.tree-multiselect.min.css'
    );
    let style =
        '<style>div.tree-multiselect>div.selected>div.item{background: #777; color: white;} div.tree-multiselect div.section>div.item{background: #white; color: #777;}</style>';
    $('body').append(style);

    var myStyle = {
        weight: 2,
        fillOpacity: 0.05,
    };

    let openBtn =
        '<div id="borders-openBtn" class="leaflet-bar leaflet-control leaflet-control-custom map-expand-button" style="background-image: url(' +
        lssm.getlink('/modules/lss-geoborders/img/ico_de.png') +
        '); background-color: white; width: 26px; height: 26px;"></div>';
    $('.leaflet-control-container .leaflet-top.leaflet-left').append(openBtn);

    $('#borders-openBtn').click(() => {
        $('#borders-modal').show();
    });

    const renderSettings = (data, selected) => {
        let state;
        let bezirk;
        let kreis;

        let markup =
            '<div id="borders-modal" style="display: none; z-index: 99999; background: #fff; top: 20px; position: absolute; width: 50%; left: 25%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
        markup += '<div class="modal-header">';
        markup +=
            '<button type="button" class="close borders-close" data-dismiss="modal" aria-hidden="true">×</button>';
        markup += '<h3 style="color:#333;">Angezeigte Kreise</h3>';
        markup += '</div>';
        markup += '<div class="modal-body" style="overflow: scroll;">';

        markup += '<select id="borders-selection" multiple="multiple">';
        for (let feature of data.features) {
            if (!state || state !== feature.properties.NAME_1) {
                state = feature.properties.NAME_1;
            }
            if (!bezirk || bezirk !== feature.properties.NAME_2) {
                bezirk = feature.properties.NAME_2;
            }

            if (!kreis || kreis !== feature.properties.NAME_3) {
                kreis = feature.properties.NAME_3;
            }
            if (selected && selected.indexOf('' + feature.id) >= 0) {
                markup +=
                    '<option value="' +
                    feature.id +
                    '" selected="selected" data-section="' +
                    state +
                    '/' +
                    bezirk +
                    '">' +
                    kreis +
                    '</option>';
            } else {
                markup +=
                    '<option value="' +
                    feature.id +
                    '" data-section="' +
                    state +
                    '/' +
                    bezirk +
                    '">' +
                    kreis +
                    '</option>';
            }
        }
        markup += '</select>';
        markup += '</div>';
        markup += '<div class="modal-footer">';
        markup +=
            '<button class="btn borders-close" data-dismiss="modal" aria-hidden="true">Schließen</button>';
        markup +=
            '<button id="borders-btn-save" class="btn btn-primary">Speichern</button>';
        markup += '</div>';
        markup += '</div>';

        $('body').append(markup);
        $('.borders-close').click(() => {
            $('#borders-modal').hide();
        });

        $('#borders-btn-save').click(() => {
            localStorage.setItem(
                STORAGE,
                JSON.stringify($('#borders-selection').val())
            );
            location.reload();
        });

        $.getScript(
            lssm.getlink(
                '/modules/lss-geoborders/vendor/jquery.tree-multiselect.min.js'
            ),
            () => {
                $('#borders-selection').treeMultiselect({
                    searchable: true,
                    startCollapsed: true,
                });
                $('.tree-multiselect').css('background', '#fff');
            }
        );
    };

    const renderMap = (data, selected) => {
        for (let feature of data.features) {
            if (selected && selected.indexOf('' + feature.id) >= 0) {
                L.geoJSON(feature, { style: myStyle }).addTo(map);
            }
        }
    };

    $.getJSON(
        lssm.getlink('/modules/lss-geoborders/geos/geo_de.json'),
        data => {
            let selected = JSON.parse(localStorage.getItem(STORAGE));
            renderSettings(data, selected);
            renderMap(data, selected);
        }
    );
})($, I18n);
