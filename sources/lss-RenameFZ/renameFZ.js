(function (I18n, $) {
    var set = {
        locale:I18n.locale,
        option: {
            id: '',
            old: '',
            vehicleType: '',
            stationName: ''
        },
        str: {
            default: "{id} Test {old} {vehicleType} {stationName}"
        },
        translations: {
            de: {
                example: "Dies ist ein Beipsiel",
                id:"{id} fügt die FahrzeugId ein",
                old:"{old} fügt den Alten Namen ein",
                vehicleType:"{vehicleType} fügt den Typen des Fahrzeuges ein ",
                stationName:"{stationName} fügt den Wachennamen ein"
            }
        }
    }, token;
    /*$.ajax({url: '/vehicles/5710510/editName', success: function (d) {
            token = d.match(/authenticity_token.* value="(.*)"/)[1];
            $('.vehicle_edit_button').each(showForms);
        }});
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


    });*/
    function creatForm(vehicleId, value) {
        var formHTML = '<form accept-charset="UTF-8" action="/vehicles/' + vehicleId + '" class="simple_form form-horizontal vehicle_form" enctype="multipart/form-data" id="vehicle_form_' + vehicleId + '" method="post" novalidate="novalidate" vehicle_id="' + vehicleId + '">';
        formHTML += '<div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="?"><input name="_method" type="hidden" value="put"><input name="authenticity_token" type="hidden" value="' + token + '"></div>';
        formHTML += '<div class="form-group string required vehicle_caption"><div class="col-sm-9"><input class="string required form-control" id="vehicle_new_name_' + vehicleId + '" maxlength="40" minlength="2" name="vehicle[caption]" size="50" type="text" value="' + value + '"></div></div>';
        formHTML += '<input class="btn btn btn-success" name="commit" type="submit" value="Speichern"></form>';
        $('#vehicle_form_holder_' + vehicleId).html(formHTML);
    }
    function replaceString(type) {
        var str = set.str[type] ? set.str[type].repeat(1) : set.str.default;
        for (var i in set.option) {
            str = str.replace('{' + i + '}', set.option[i]);
        }
        return str;
    }
    function showForms() {
        $(this).hide(); // stife weg
        var tr = $(this).closest('tr');
        var id = $(this).attr('vehicle_id');
        set.option.id = id;
        set.option.old = $('#vehicle_link_' + id).text().trim();
        set.option.stationName = tr.find('td').eq(3).text().trim();
        var vehicleType = tr.find('.vehicle_image_reload:first').attr('vehicle_type_id');
        set.option.vehicleType = cars[vehicleType];
        creatForm(id, replaceString(vehicleType));
    }
    function createSettings(){
        var str =set.translations[set.locale];
        var mainDiv = $('<div id=renameFzSettings></div>');
        var html = '<div>'+str.example+'<br>'+set.str.default+'<br> ergibt FZId Test ALTERNAME FAHRZEUGTYPE WACHE</div>';
        html +='<div><a href="#">'+str.id+'</a><a href="#">'+str.old+'</a><a href="#">'+str.vehicleType+'</a><a href="#">'+str.stationName+'</a></div>';
        html+='<div><input id="lss_rename" type="text"\></div>';
        mainDiv.append(html);
        var tr = $('<tr></tr>').append($('<td colspan="6"></td>').append(mainDiv));
        $('#vehicle_table tbody:first').prepend(tr);
    }
    createSettings();

})(I18n, jQuery);