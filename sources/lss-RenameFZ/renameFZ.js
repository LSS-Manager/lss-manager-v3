(function (I18n, $) {
    if (!$('#tab_vehicle').length || !$('#iframe-inside-container  img[src*=building_leitstelle]').length)
        return;
    $('#tab_vehicle').on('DOMNodeInserted', 'script', createSettings);
    var set = {
        locale: I18n.locale,
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
            str: ''
        },
        translations: {
            de: {
                example: "Dies ist ein Beipsiel",
                rename: "Umbenennen",
                id: "{id} FahrzeugId ",
                old: "{old} Alten Namen ein",
                vehicleType: "{vehicleType} Typen des Fahrzeugs",
                stationName: "{stationName} Wachennamen"
            }
        }
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
            $.ajax({url: '/vehicles/5710510/editName', success: function (d) {
                    token = d.match(/authenticity_token.* value="(.*)"/)[1];
                    $('.vehicle_edit_button').each(showForms);
                }});
        } else {
            $('.vehicle_edit_button').each(function () {
                var data = setOptionsForVehicle($(this));
                $('#vehicle_new_name_' + data.id).val(replaceString(data.vehicleType));
                $(this).parent().next().show();
                $(this).hide();
            });
        }
    }
    function creatForm(vehicleId, value) {
        var formHTML = '<form accept-charset="UTF-8" action="/vehicles/' + vehicleId + '" class="simple_form form-horizontal vehicle_form" enctype="multipart/form-data" id="vehicle_form_' + vehicleId + '" method="post" novalidate="novalidate" vehicle_id="' + vehicleId + '">';
        formHTML += '<div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="_method" type="hidden" value="put"><input name="authenticity_token" type="hidden" value="' + token + '"></div>';
        formHTML += '<div class="form-group string required vehicle_caption"><div class="col-sm-9"><input class="string required form-control" id="vehicle_new_name_' + vehicleId + '" maxlength="40" minlength="2" name="vehicle[caption]" size="50" type="text" value="' + value + '"></div></div>';
        formHTML += '<input class="btn btn btn-success" name="commit" type="submit" value="Speichern"></form>';
        $('#vehicle_form_holder_' + vehicleId).html(formHTML);
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
        set.option.vehicleType = carsById[vehicleType];
        return {'id': id, 'vehicleType': vehicleType};
    }
    function showForms() {
        $(this).hide(); //
        var data = setOptionsForVehicle($(this));
        creatForm(data.id, replaceString(data.vehicleType));
    }
    function createSettings() {
        var str = set.translations[set.locale];
        var mainDiv = $('<div id="' + prefix + '"></div>');
        var html = '' + str.example + '<br>' + set.str.bsp + '<br> ergibt FZId Test ALTERNAME FAHRZEUGTYPE WACHE</div><div id="' + prefix + '_buttons">';
        for (var i in set.option)
            html += '<a href="#" class="btn btn-default btn-xs" data-str="{' + i + '}">' + str[i] + '</a>';
        html += '</div><div><input id="' + prefix + '_string" type="text" value=""\></div><div><a href="#" class="btn btn-default btn-xs" id="' + prefix + '_rename">' + str.rename + '</a></div>';
        mainDiv.append(html);
        var tr = $('<tr></tr>').append($('<td colspan="6"></td>').append(mainDiv));
        $('#vehicle_table tbody:first').prepend(tr);
        $('#' + prefix + '_buttons').click(function (e) {
            var input = document.getElementById(prefix + '_string'), start = input.selectionStart, end = input.selectionEnd;
            input.value = input.value.substr(0, start) + $(e.target).data('str') + input.value.substr(end);
            var pos = start + $(e.target).data('str').length;
            input.selectionStart = pos;
            input.selectionEnd = pos;
            changeInput({'target': input});
            input.focus();
        });
        function changeInput(e) {
            set.str.str = e.target.value.trim();
        }
        $('#' + prefix + '_string').change(changeInput);
        $('#' + prefix + '_rename').click(rename);
    }
})(I18n, jQuery);
