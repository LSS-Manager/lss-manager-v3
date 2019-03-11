(($, win, I18n) => {
    if (!location.pathname.match(/\/missions\/\d+/)) return;

    I18n.translations.de.lssm.aaotime = {
        timeRegex: /([0-9]{2}) Min. ([0-9]{2}) Sek./i,
        hourIdentifier: 'Std.',
        timeWithHoursRegex: /([0-9]{2}) Std. ([0-9]{2}) Min. ([0-9]{2}) Sek./i,
        leastTime: 'Mindestens <strong>{0}</strong>',
        duration: 'Dauer: {0}',
        missingVehicles1: 'Für die folgenden Fahrzeuge konnte keine Anfahrtsdauer ermittelt werden:',
        missingVehicles2: 'Möglicherweise sind sie nicht verfügbar oder nicht mit Zeiten aufgelistet.',
        missingVehicles3: 'Fehler beim Berechnen der Anfahrtszeiten. Möglicherweise sind Fahrzeuge nicht verfügbar oder nicht mit Zeiten aufgelistet.',
        unsupportedKeys: 'Die Dauer konnte nicht berechnet werden, da diese AAO Fahrzeug-Kombinationen enthält, die von diesem Modul leider noch nicht unterstützt werden: {0}',
        timeFormat: '{0} min {1} sek',
        timeFormatWithHours: '{0} h {1} min {2} sek',
    };
    I18n.translations.en.lssm.aaotime = {
        timeRegex: /([0-9]{2}) min. ([0-9]{2}) sec./i,
        hourIdentifier: 'hrs',
        timeWithHoursRegex: /([0-9]{2}) hrs. ([0-9]{2}) min. ([0-9]{2}) sec./i,
        leastTime: 'At least <strong>{0}</strong>',
        duration: 'Duration: {0}',
        missingVehicles1: 'For the following vehicles it was not possible to determine the time:',
        missingVehicles2: 'They might not be present or listed with a time.',
        missingVehicles3: 'Error calculating the time. The required vehicles might not be present or listed with a time.',
        unsupportedKeys: 'The duration could not be determined because this ARR contains vehicle combinations that are not yet supported by this module: {0}',
        timeFormat: '{0} min {1} sec',
        timeFormatWithHours: '{0} h {1} min {2} sec',
    };
    I18n.translations.nl.lssm.aaotime = {
        timeRegex: /([0-9]{2}) minuten ([0-9]{2}) seconden/i,
        hourIdentifier: 'uur',
        timeWithHoursRegex: /([0-9]{2}) uur ([0-9]{2}) minuten ([0-9]{2}) seconden/i,
        leastTime: 'Minstens <strong>{0}</strong>',
        duration: 'Duur: {0}',
        missingVehicles1: 'Geen nadere tijd kan worden bepaald voor de volgende voertuigen:',
        missingVehicles2: 'Zij zijn mogelijk niet beschikbaar of tijdelijk vermeld.',
        missingVehicles3: 'Fout bij de berekening van de aanlooptijden. Voertuigen zijn mogelijk niet beschikbaar of mogen tijdelijk worden vermeld.',
        unsupportedKeys: 'This AUR contains combinations that are not yet supported by this module: {0}',
        timeFormat: '{0} min {1} s',
        timeFormatWithHours: '{0} h {1} min {2} s',
    };

    // Prepare aaoTitle
    const aaoTitle = $('<div id="aaoTitle" style="display:none; z-index: 999; max-width: 260px; padding: 8px; background-color:#5CB85C">');
    $('body').append(aaoTitle);
    const formatSeconds = (totalSeconds) => {
        const days = Math.floor(totalSeconds / 86400);
        totalSeconds -= days * 86400;

        const hours = Math.floor(totalSeconds / 3600) % 24;
        totalSeconds -= hours * 3600;

        const minutes = Math.floor(totalSeconds / 60) % 60;
        totalSeconds -= minutes * 60;

        const seconds = totalSeconds;
        if (hours > 0) {
            return String.format(I18n.t("lssm.aaotime.timeFormatWithHours"), hours, minutes, seconds);
        } else {
            return String.format(I18n.t("lssm.aaotime.timeFormat"), minutes, seconds);
        }
    };

    const prettyPrintResult = (aaoObject, aaoVehicles, secondsString) => {
        let response;
        let unsupportedKeys = [];
        for (let key in aaoVehicles) {
            if (aaoVehicles[key] === -1) {
                unsupportedKeys.push(key);
            }
        }
        if (Object.keys(aaoVehicles).length === 0) {
            response = String.format(I18n.t("lssm.aaotime.duration"), formatSeconds(secondsString));
        } else if (secondsString > 0) {
            response = String.format(I18n.t("lssm.aaotime.leastTime"), formatSeconds(secondsString)) + '<br/>';
            if (unsupportedKeys.length > 0) {
                response = String.format(I18n.t("lssm.aaotime.unsupportedKeys"), unsupportedKeys.toString());
            } else {
                response += I18n.t("lssm.aaotime.missingVehicles1") + '<br/><ul>';
                for (let key in aaoVehicles) {
                    response += '<li>' + aaoVehicles[key] + 'x ' + key + '</li>';
                }
                response += '</ul>' + I18n.t("lssm.aaotime.missingVehicles2");
            }
        } else {
            if (unsupportedKeys.length > 0) {
                response = String.format(I18n.t("lssm.aaotime.unsupportedKeys"), unsupportedKeys.toString());
            } else {
                response = I18n.t("lssm.aaotime.missingVehicles3");
            }
        }
        aaoTitle.html(response);
        const aaoPosition = $(aaoObject).offset();
        aaoTitle.css({
            top: aaoPosition.top + 30,
            left: aaoPosition.left,
            position: 'absolute'
        }).show();
    };

    const getDurationInSeconds = (vehicleObject) => {
        let durationString = $(vehicleObject).parent().parent().find('td[class*="alarm_distance_"]').text().trim();
        let hours;
        let minutes;
        let seconds;
        let matches;
        if (durationString.indexOf('km') >= 0) {
            return null;
        } else if (durationString.indexOf(I18n.t('lssm.aaotime.hourIdentifier')) >= 0) {
            matches = durationString.match(I18n.t('lssm.aaotime.timeWithHoursRegex'));
            hours = matches[1] * 3600;
            minutes = matches[2] * 60;
            seconds = matches[3];

            return parseInt(hours) + parseInt(minutes) + parseInt(seconds);
        } else {
            matches = durationString.match(I18n.t('lssm.aaotime.timeRegex'));
            minutes = matches[1] * 60;
            seconds = matches[2];

            return parseInt(minutes) + parseInt(seconds);
        }
    };

    const getAaoVehicles = (aaoObject) => {
        let vehicles = {};
        $.each(aaoObject.attributes, function (index, attribute) {
            if (typeof(attribute) != "undefined" && typeof(attribute.value) != "undefined") {
                vehicles[attribute.name] = parseInt(attribute.value);
            }
        });

        return vehicles;
    };
//(!isNaN(attribute.value) && attribute.value > 0 && attribute.name !== 'building_ids')
    const handleMouseOver = (aaoObject) => {
        if ($(aaoObject).find('span').hasClass('label-danger')) {
            return false;
        }
        let maximumSeconds = 0;
        let aaoVehicleSearchList = getAaoVehicles(aaoObject);

        // Now that we know which vehicles are required, iterate the time-ordered list
        $('.vehicle_checkbox').each(function () {
            const vehicle = this;
            for (let key in aaoVehicleSearchList) {
                if (key in vehicle.attributes) {
                    if (vehicle.attributes[key].value > 0) { // Does that vehicle meet an AAO requirement?
                        const totalSeconds = getDurationInSeconds(vehicle);
                        if (totalSeconds === null) {
                            break; // Skip that vehicle if its time could not be determined
                        }
                        aaoVehicleSearchList[key]--;

                        if (totalSeconds > maximumSeconds) {
                            maximumSeconds = totalSeconds;
                        }

                        if (aaoVehicleSearchList[key] === 0) {
                            delete aaoVehicleSearchList[key]; // Remove the vehicle from the search list.
                            if (Object.keys(aaoVehicleSearchList).length === 0) { // If there aren't any missing vehicles, we're done! Hurray!
                                return false;
                            }
                        }
                    }
                } else {
                    aaoVehicleSearchList[key] = -1;
                }
            }
        });
        prettyPrintResult(aaoObject, aaoVehicleSearchList, maximumSeconds);
        return true;
    };

    const aaoObjects = $('.aao');
    aaoObjects.on('mouseover', function () {
        handleMouseOver(this);
    });

    aaoObjects.on('mouseout', function () {
        aaoTitle.hide();
    });
})($, window, I18n);
