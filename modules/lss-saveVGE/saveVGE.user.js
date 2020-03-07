(function (I18n, $) {
    I18n.translations.de_DE['lssm']['saveVGE'] = {
        save: "Speichern",
        del: "Löschen",
        noVGE:"Keine gespeicherten VGE!",
        VGEs:"VGEs"
    };
    I18n.translations.en_US['lssm']['saveVGE'] = {
        save: "Save",
        del: "Delete",
        noVGE:"No saved Alliance Mission!",
        VGEs:"LSAMs"
    };
    I18n.translations.cs_CZ['lssm']['saveVGE'] = {
        save: "Uložit",
        del: "Odstranit",
        noVGE: "Žádná uložená alianční mise!",
        VGEs: "VGEs"
    };
    I18n.translations.es_ES['lssm']['saveVGE'] = {
        save: "Guardar",
        del: "Borrar",
        noVGE: "No se ha salvado la misión de la Alianza!",
        VGEs: "VGEs"
    };
    I18n.translations.pt_PT['lssm']['saveVGE'] = {
        save: "Salvar",
        del: "Excluir",
        noVGE: "A missão Alianz não foi salva!",
        VGEs: "VGEs"
    };
    I18n.translations.sv_SE['lssm']['saveVGE'] = {
        save: "Spara",
        del: "Radera",
        noVGE:"Inget räddat Alliance Mission!",
        VGEs:"VGEs"
    };
    I18n.translations.da_DK['lssm']['saveVGE'] = {
        save: "Gemme",
        del: "Slet",
        noVGE: "Ingen gemt Alliance Mission!",
        VGEs: "VGEs"
    };
    I18n.translations.tr_TR['lssm']['saveVGE'] = {
        save: "kurtarma",
        del: "Sil",
        noVGE: "Kurtarılmış İttifak Görevi yok!",
        VGEs: "LSAMs"
    };
    I18n.translations.nb_NO['lssm']['saveVGE'] = {
        save: "Lagre",
        del: "Slett",
        noVGE: "Ingen reddet Alliance Mission!",
        VGEs: "VGEs"
    };
    I18n.translations.pl_PL['lssm']['saveVGE'] = {
        save: "Oszczędzaj.",
        del: "Usuń",
        noVGE: "Nie ma uratowanej Misji Sojuszniczej!",
        VGEs: "VGEs"
    };
    I18n.translations.ru_RU['lssm']['saveVGE'] = {
        save: "Сохранить",
        del: "удалять",
        noVGE: "Нет спасенной миссии Альянса!",
        VGEs: "LSAMs"
    };
    I18n.translations.uk_UA['lssm']['saveVGE'] = {
        save: "Зберегти",
        del: "Видалити",
        noVGE: "Не збережена місія Альянсу!",
        VGEs: "LSAMs"
    };
    I18n.translations.ja_JP['lssm']['saveVGE'] = {
        save: "セーブ",
        del: "削除する",
        noVGE: "保存された同盟ミッションはありません！",
        VGEs: "LSAMs"
    };
    I18n.translations.ko_KR['lssm']['saveVGE'] = {
        save: "저장",
        del: "지우다",
        noVGE: "저장된 얼라이언스 미션이 없습니다!",
        VGEs: "LSAMs"
    };
    I18n.translations.nl_NL['lssm']['saveVGE'] = {
        save: "Opslaan",
    	del: "Verwijderen",
    	noVGE:"Geen opgeslagen grote teaminzetten!",
        VGEs:"Grote teaminzet aanmaken"
    };
    let prefix = "saveVGE", saveMissions = JSON.parse(localStorage.getItem(prefix)) || {}
    , isCreate= false;
            function readData() {
                let daten = $("#new_mission_position").serializeArray(), notSave = ["utf8", "authenticity_token", "mission_position[poi_type]", "mission_position[latitude]", "mission_position[longitude]", "mission_position[address]", "mission_position[coins]", "mission_position[mission_type_id]"], dataToSave = [];
                $.each(daten, function (a, b) {
                    -1 === notSave.indexOf(b.name) && dataToSave.push(daten[a]);
                });
                return dataToSave;
            }
    function setData(e) {
        e.preventDefault();
        if ($.isEmptyObject(saveMissions))
            return;
        $.each(saveMissions[$(e.target).data('value')], function (a, b) {
            $('[name="' + b.name + '"]').val(b.value);
        });
    }
    function buildOptions(onlyOption) {
        let select = $('<ul class="dropdown-menu" style="background:white !important" aria-labelledby="vgeSaveDropdown" id="vgeSaveDropdownUl"></ul>');
        let h = "";
        for (let i in saveMissions) {
            h += '<li><a href="#" data-value="' + i + '">' + i + '</a></li>';
        }
        select.html(h);
        if (onlyOption) {
            $('#vgeSaveDropdownUl').html(h);
        } else {
            return select;
        }

    }
    function saveData(e) {
        e.preventDefault();
        let d = readData();
        let savedItem = $('#mission_position_mission_custom_caption').val().trim();
        saveMissions[savedItem] = d;
        saveToStorage(saveMissions);
        buildOptions(true);
        checkNoVGEs();
    }
    function checkNoVGEs(){
        if ($('#vgeSaveDropdownUl').has("li").length === 0) {
            $('#vgeSaveDropdownUl').html("<li>" + I18n.t('lssm.saveVGE.noVGE') + "</li>");
        }
    }
    function delData(e) {
        e.preventDefault();
        let savedItem = $('#mission_position_mission_custom_caption').val().trim();
        delete saveMissions[savedItem];
        document.getElementById('new_mission_position').reset();
        saveToStorage(saveMissions);
        buildOptions(true);
        checkNoVGEs();
    }
    function saveToStorage(value) {
        localStorage.setItem(prefix, JSON.stringify(value));
    }
    function createSettings() {
        let div = $('<div class="dropdown" id="' + prefix + '"><button class="btn btn-default dropdown-toggle" type="button" id="vgeSaveDropdown" name="vgeSaveDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' + I18n.t('lssm.saveVGE.VGEs') + '<span class="caret"></span></button></div>');

        let select = buildOptions(false);
        select.on('click', 'a', setData);
        let s = $('<a href="#" class="btn btn-sm btn-success">' + I18n.t('lssm.saveVGE.save') + '</a>').click(saveData);
        let d = $('<a href="#" class="btn btn-sm btn-danger">' + I18n.t('lssm.saveVGE.del') + '</a>').click(delData);
        div.append(s, select, d);
        $('.mission_position_mission_type_id:first').after(div);
    	$('#mission_position_mission_custom_caption').attr('maxlength', 30);
        checkNoVGEs();
    }
    $('#buildings_outer').on('change', function () {
        if ($("#mission_position_mission_type_id_-1").prop("checked") && !isCreate) {
            createSettings();
            isCreate = true;
        } else if (!$("#mission_position_mission_type_id_-1").prop("checked")) {
            $('#' + prefix).remove();
            isCreate = false;
        }
    });
})(I18n, jQuery);
