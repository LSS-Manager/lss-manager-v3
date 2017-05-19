(function (I18n, $) {
    var set = {
        locale: I18n.locale,
        isCreate: false,
        translations: {
            de: {
                save:"Speichern",
                load:"Laden",
                del:"Löschen"
            }
        }
    };
    var prefix="saveVGE", saveMissions = JSON.parse(localStorage.getItem(prefix))||{};

    function readData() {
        var daten = $("#new_mission_position").serializeArray(), notSave = ["utf8", "authenticity_token", "mission_position[poi_type]", "mission_position[latitude]", "mission_position[longitude]", "mission_position[address]","mission_position[coins]","mission_position[mission_type_id]"], dataToSave = [];
        $.each(daten, function (a, b) {
            -1 === notSave.indexOf(b.name) && dataToSave.push(daten[a]);
        });
        return dataToSave;
    }
    function setData(e){
        e.preventDefault();
        if($.isEmptyObject(saveMissions)) return;
        $.each(saveMissions[$(e.target).data('value')],function(a,b){
            $('[name="'+b.name+'"]').val(b.value);
        });
    }
    function buildOptions(onlyOption){
        var select = $('<ul class="dropdown-menu" style="background:white !important" aria-labelledby="vgeSaveDropdown" id="vgeSaveDropdownUl"></ul>');
        var h = "";
        for(var i in saveMissions){
            h += '<li><a href="#" data-value="'+i+'">'+i+'</a></li>';
        }
        select.html(h);
        if(onlyOption){
            $('#vgeSaveDropdownUl').html(h);
        }else{
            return select;
        }

    }
    function saveData(e){
        e.preventDefault();
        var d = readData();
        var savedItem = $('#mission_position_mission_custom_caption').val().trim();
        saveMissions[savedItem]=d;
        saveToStorage(saveMissions);
        buildOptions(true);

        if($('#vgeSaveDropdownUl').has("li").length == 0){
          $('#vgeSaveDropdownUl').html("<li>Keine gespeicherten VGE!</li>");
        }
    }
    function delData(e){
        e.preventDefault();
        var savedItem = $('#mission_position_mission_custom_caption').val().trim();
        delete saveMissions[savedItem];
        document.getElementById('new_mission_position').reset();
        saveToStorage(saveMissions);
        buildOptions(true);

        if($('#vgeSaveDropdownUl').has("li").length == 0){
          $('#vgeSaveDropdownUl').html("<li>Keine gespeicherten VGE!</li>");
        }
    }
    function saveToStorage(value){
        localStorage.setItem(prefix,JSON.stringify(value));
    }
    function createSettings(){
        $('.mission_position_mission_type_id:first')
        var div = $('<div class="dropdown" id="'+prefix+'"><button class="btn btn-default dropdown-toggle" type="button" id="vgeSaveDropdown" name="vgeSaveDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">VGEs<span class="caret"></span></button></div>');

        var select = buildOptions(false);
        select.on('click', 'a', setData);
        var s=$('<a href="#" class="btn btn-sm btn-success">'+set.translations[set.locale].save+'</a>').click(saveData);
        var d =$('<a href="#" class="btn btn-sm btn-danger">'+set.translations[set.locale].del+'</a>').click(delData);
        div.append(s,select,d);
        $('.mission_position_mission_type_id:first').after(div);

        if($('#vgeSaveDropdownUl').has("li").length == 0){
          $('#vgeSaveDropdownUl').html("<li>Keine gespeicherten VGE!</li>");
        }
    }
    $('#buildings_outer').on('change',function(){
        if($("#mission_position_mission_type_id_-1").prop("checked")&&!set.isCreate){
            createSettings();
            set.isCreate=true;
        }else if(!$("#mission_position_mission_type_id_-1").prop("checked")){
            $('#'+prefix).remove();
            set.isCreate=false;
        }
    });
})(I18n, jQuery);
