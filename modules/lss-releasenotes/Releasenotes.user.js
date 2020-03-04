(function (I18n, $) {
    'use strict';

    let STORAGE_KEY = "LSS_RELEASENOTES_STORAGE";

    let NUM_NOTES = 1;

    I18n.translations.de_DE['lssm']['releasenotes'] = {
        title: "Neuerungen",
        close: "Cool!",
        errorloading: "Fehler beim Laden der Releasenotes.",
        link_caption: "Release Notes"
    };

    I18n.translations.en['lssm']['releasenotes'] = {
        title: "New",
        close: "Cool!",
        errorloading: "Error loading Releasenotes.",
        link_caption: "Release Notes"
    };
    I18n.translations.fj['lssm']['releasenotes'] = {
        title: "New",
        close: "Cool!",
        errorloading: "Error loading Releasenotes.",
        link_caption: "Release Notes"
    };
    I18n.translations.nl['lssm']['releasenotes'] = {
        title: "Updates",
        close: "Cool!",
        errorloading: "Fout bij het laden van de releasenote.",
        link_caption: "Releasenote"
    };

    let latestVersion = lssm.settings.get(STORAGE_KEY);

    if (latestVersion !== lssm.config.version) {
        renderLayer();
    }

    function renderLayer() {
        let markup = "";
        markup += '<div id="releaseNotes" class="releaseNotesClose" ';
        markup += 'style="background: #fff; z-index: 10001; position: absolute; left: 50%; top: 50%; ';
        markup += 'transform: translate(-50%,-50%); min-height: 200px; min-width: 200px; ';
        markup += 'max-width: 600px; width: 80%; border: 1px solid rgb(66, 66, 66);">';
        markup += '<button type="button" class="close" aria-label="Cool">×</button>';
        markup += '<div class="container-fluid">';
        markup += '<h4>' + I18n.t('lssm.releasenotes.title') + '</h4>';
        markup += '<div id="releaseNotesContent"></div>';
        markup += '<button class="releaseNotesClose">' + I18n.t('lssm.releasenotes.close') + '</button>';
        markup += '</div>';
        markup += '</div>';

        $('body').append(markup);

        $.get(lssm.getlink("/modules/lss-releasenotes/releaseNotes.json"))
            .fail(function () {
                $('#releaseNotesContent').html("<div>" + I18n.t('lssm.releasenotes.errorloading') + "</div>");
            })
            .done(function (data) {
                let releaseMarkup = "";
                let printed = 0;
                $(data.releases).each(function () {
                    releaseMarkup += "<div>";
                    releaseMarkup += "<h5>" + this.version + "</h5>";
                    releaseMarkup += "<ul>";
                    $(this.changes).each(function () {
                        if (this.id !== "") {
                            releaseMarkup += "<li>" + this.type +
                                ": <a href='https://github.com/LSS-Manager/lss-manager-v3/issues/" +
                                this.id + "'>" + getLocalizedMessage(this) + "</a></li>";
                        } else {
                            releaseMarkup += "<li>" + this.type + ": " + getLocalizedMessage(
                                this) + "</li>";
                        }
                    });
                    releaseMarkup += "<ul>";
                    releaseMarkup += "</div>";
                    printed++;
                    if (printed >= NUM_NOTES) {
                        return false;
                    }
                    return true;
                });
                $('#releaseNotesContent').html(releaseMarkup);
            });

        $('.releaseNotesClose').click(function () {
            $('#releaseNotes').remove();
            setVersion();
        });
    }

    function setVersion() {
        lssm.settings.remove(STORAGE_KEY);
        lssm.settings.set(STORAGE_KEY, lssm.config.version);
    }

    function getLocalizedMessage(change) {
        let locale = I18n.currentLocale();
        if (locale in change) {
            return change[locale];
        } else if ('en' in change) {
            return change['en'];
        } else if ('de' in change) {
            return change['de'];
        }
        return "";
    }

})(I18n, jQuery);
