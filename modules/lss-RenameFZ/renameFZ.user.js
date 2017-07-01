(function (I18n, $) {
    if (!document.URL.match(/buildings/) || !$('#iframe-inside-container > h1[building_type="7"]'))
        return;
    $('#tab_vehicle').on('DOMNodeInserted', 'script', createSettings);
    I18n.translations.de['lssm']['renameFZ'] = {
        example: "Dies ist ein Beipsiel",
        rename: "Umbenennen",
        id: "{id} FahrzeugId ",
        old: "{old} Alten Namen ein",
        vehicleType: "{vehicleType} Typen des Fahrzeugs",
        stationName: "{stationName} Wachennamen"
    };
	I18n.translations.nl['lssm']['renameFZ'] = {
        example: "Dit is een voorbeeld",
		rename: "Naam aanpassen",
		id: "{id} Voertuignaam ",
		old: "{old} Oude naam",
		vehicleType: "{vehicleType} Voertuigtype",
		stationName: "{stationName} Gebouwnaam"
    };
    var set = {
        rename: false,
        option: {
            id: '',
            old: '',
            vehicleType: '',
            stationName: ''
        },
        str: {
            bsp: "{id} Test {old} {vehicleType} {stationName}",
            default: "{old}",
            str: ''}
    }, token, prefix = "renameFzSettings";

    $('#tab_vehicle').on('submit', '.vehicle_form', function (e) {

        var post_data = $(this).serialize();
        var vehicle_id = $(this).attr("vehicle_id");
        var href = $(this).attr("action");

        e.preventDefault();
        $.ajax({
            url: href,
            type: 'post',
            data: post_data,
            success: function () {
                tellParent('buildingLoadContent("/buildings");');
                $("#vehicle_form_holder_" + vehicle_id).hide();
                var newName = $("#vehicle_new_name_" + vehicle_id).val();
                $("#vehicle_link_" + vehicle_id).html(newName).next().show();

                $(this).html("saved");
            },
            error: function () {

                $(this).html("error");
            }
        });


    });
    function rename() {
        if (!set.rename) {
            set.rename = true;
            $.ajax({url: '/vehicles/'+$('.vehicle_edit_button:first').attr('vehicle_id')+'/editName', success: function (d) {
                    token = d.match(/authenticity_token.* value="(.*)"/)[1];
                    $('.vehicle_edit_button').each(showForms);
                }});
        } else {
            $('.vehicle_edit_button').each(showForms);
        }
    }
    function creatForm(vehicleId, value) {
        var formHTML = '<form accept-charset="UTF-8" action="/vehicles/' + vehicleId + '" class="simple_form form-horizontal vehicle_form" enctype="multipart/form-data" id="vehicle_form_' + vehicleId + '" method="post" novalidate="novalidate" vehicle_id="' + vehicleId + '"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="_method" type="hidden" value="put"><input name="authenticity_token" type="hidden" value="' + token + '"></div><div class="form-group string required vehicle_caption"><div class="col-sm-9"><input class="string required form-control" id="vehicle_new_name_' + vehicleId + '" maxlength="40" minlength="2" name="vehicle[caption]" size="50" type="text" value="' + value + '"></div></div><input class="btn btn btn-success" name="commit" type="submit" value="Speichern"></form>';
        $('#vehicle_form_holder_' + vehicleId).html(formHTML).show();
    }
    function replaceString(type) {
        var str = set.str.str != '' ? set.str.str : set.str.default;
        for (var i in set.option) {
            str = str.replace('{' + i + '}', set.option[i]);
        }
        return str;
    }
    function setOptionsForVehicle(e) {
        var tr = e.closest('tr');
        var id = e.attr('vehicle_id');
        set.option.id = id;
        set.option.old = $('#vehicle_link_' + id).text().trim();
        set.option.stationName = tr.find('td').eq(3).text().trim();
        var vehicleType = tr.find('.vehicle_image_reload:first').attr('vehicle_type_id');
        set.option.vehicleType = lssm.carsById[vehicleType][0];
        return {'id': id, 'vehicleType': vehicleType};
    }
    function showForms() {
        $(this).hide(); //
        var data = setOptionsForVehicle($(this));
        creatForm(data.id, replaceString(data.vehicleType));
    }
    function createSettings() {
        if ($('#' + prefix).length)
            return;
        var mainDiv = $('<div id="' + prefix + '"></div>');
        var html = '' + I18n.t('lssm.renameFZ.example') + '<br>' + set.str.bsp + '<br> ergibt FZId Test ALTERNAME FAHRZEUGTYPE WACHE</div><div id="' + prefix + '_buttons">';
        for (var i in set.option)
            html += '<a href="#" class="btn btn-default btn-xs" data-str="{' + i + '}">' + I18n.t('lssm.renameFZ.'+i) + '</a>';
        html += '</div><div><input id="' + prefix + '_string" type="text" value=""\></div><div><a href="#" class="btn btn-default btn-xs" id="' + prefix + '_rename">' + I18n.t('lssm.renameFZ.rename') + '</a></div>';
        mainDiv.append(html);
        $('#vehicle_table').parent().prepend(mainDiv);
        $('#' + prefix + '_buttons').click(function (e) {
            var input = document.getElementById(prefix + '_string'), start = input.selectionStart, end = input.selectionEnd;
            input.value = input.value.substr(0, start) + $(e.target).data('str') + input.value.substr(end);
            var pos = start + $(e.target).data('str').length;
            input.selectionStart = pos;
            input.selectionEnd = pos;
            changeInput({'target': input});
            input.focus();
            return false;
        });
        function changeInput(e) {
            set.str.str = e.target.value.trim();
        }
        $('#' + prefix + '_string').change(changeInput);
        $('#' + prefix + '_rename').click(rename);
    }
})(I18n, jQuery);
