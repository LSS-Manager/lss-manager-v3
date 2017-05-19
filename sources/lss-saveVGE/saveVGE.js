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
    }
    var prefix="saveVGE", saveMissions = JSON.parse(localStorage.getItem(prefix))||{};
    function readData() {
        var daten = $("#new_mission_position").serializeArray(), notSave = ["utf8", "authenticity_token", "mission_position[poi_type]", "mission_position[latitude]", "mission_position[longitude]", "mission_position[address]","mission_position[coins]","mission_position[mission_type_id]",prefix+"_selctOptions"], datenToSave = [];
        $.each(daten, function (a, b) {
            -1 === notSave.indexOf(b.name) && datenToSave.push(daten[a]);
        });
        return datenToSave;
    }
    function setData(e){
        e.preventDefault();
        if($.isEmptyObject(saveMissions)) return;
        $.each(saveMissions[$('#'+prefix+'_selectOptions').val()],function(a,b){
            $('[name="'+b.name+'"]').val(b.value);
        });
    }
    function buildOptions(onlyOption){
        var select = $('<select class="select form-control" id="'+prefix+'_selectOptions" name="'+prefix+'_selectOptions"></select>');
        var h = "";
        for(var i in saveMissions){
            h += '<option value="'+i+'">'+i+'</option>';
        }
        select.html(h);
        if(onlyOption){
            $('#'+prefix+'_selectOptions').html(h);
        }else{
            return select;
        }
    }
    function saveData(e){
        e.preventDefault();
        var d = readData();
        saveMissions[$('#mission_position_mission_custom_caption').val().trim()]=d;
        saveToStorage(saveMissions);
        buildOptions(true);
    }
    function delData(e){
        e.preventDefault();
        delete saveMissions[$('#'+prefix+'_selectOptions').val()];
        saveToStorage(saveMissions);
        buildOptions(true);
    }
    function saveToStorage(value){
        localStorage.setItem(prefix,JSON.stringify(value));
    }
    function createSettings(){
        $('.mission_position_mission_type_id:first')
        var div = $('<div id="'+prefix+'" class="form-group"></div>');
        var s=$('<a href="#" class="btn btn-default">'+set.translations[set.locale].save+'</a>').click(saveData);
        var select = buildOptions(false);
        var l =$('<a href="#" class="btn btn-default">'+set.translations[set.locale].load+'</a>').click(setData);
        var d =$('<a href="#" class="btn btn-default">'+set.translations[set.locale].del+'</a>').click(delData);
        div.append(s,select,l,d);
        $('.mission_position_mission_type_id:first').after(div);
    }
    $('#buildings_outer').on('change',function(){
        if($("#mission_position_mission_type_id_-1").prop("checked")&&!set.isCreate){
            createSettings();
            set.isCreate=true;
        }else if(!$("#mission_position_mission_type_id_-1").prop("checked")){
            $('#'+prefix).remove();
        }
    });
})(I18n, jQuery);