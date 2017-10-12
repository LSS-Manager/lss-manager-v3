(($, win, I18n) => {
    I18n.translations.de.lssm.aaotime = {
        timeRegex: /([0-9]{2}) Min. ([0-9]{2}) Sek./i,
        timeWithHoursRegex: /([0-9]{2}) Std. ([0-9]{2}) Min. ([0-9]{2}) Sek./i,
        leastTime: 'Mindestens <strong>{0}</strong>strong>',
        duration: 'Dauer {0}',
        missingVehicles1: 'Für die folgenden Fahrzeuge konnte keine Anfahrtsdauer ermittelt werden:',
        missingVehicles2: 'Möglicherweise sind sie nicht verfügbar oder nicht mit Zeiten aufgelistet.',
        missingVehicles3: 'Fehler beim Berechnen der Anfahrtszeiten. Möglicherweise sind Fahrzeuge nicht verfügbar oder nicht mit Zeiten aufgelistet.',
        timeFormat: '{0} min {1} sek',
        timeFormatWithHours: '{0} h {1} min {2} sek',
    };
    I18n.translations.en.lssm.aaotime = {
        timeRegex: /([0-9]{2}) min. ([0-9]{2}) sec./i,
        timeWithHoursRegex: /([0-9]{2}) hrs. ([0-9]{2}) min. ([0-9]{2}) sec./i,
        leastTime: 'At least <strong>{0}</strong>strong>',
        duration: 'Duration {0}',
        missingVehicles1: 'For the following vehicles it was not possible to determine the time:',
        missingVehicles2: 'They might not be present or listed with a time.',
        missingVehicles3: 'Error calculating the time. The required vehicles might not be present or listed with a time.',
        timeFormat: '{0} min {1} sec',
        timeFormatWithHours: '{0} h {1} min {2} sec',
    };
    I18n.translations.nl.lssm.aaotime = {
        timeRegex: /([0-9]{2}) minuten ([0-9]{2}) seconden/i,
        timeWithHoursRegex: /([0-9]{2}) uur ([0-9]{2}) minuten ([0-9]{2}) seconden/i,
        leastTime: 'Minstens <strong>{0}</strong>strong>',
        duration: 'Duur {0}',
        missingVehicles1: 'Geen nadere tijd kan worden bepaald voor de volgende voertuigen:',
        missingVehicles2: 'Zij zijn mogelijk niet beschikbaar of tijdelijk vermeld.',
        missingVehicles3: 'Fout bij de berekening van de aanlooptijden. Voertuigen zijn mogelijk niet beschikbaar of mogen tijdelijk worden vermeld.',
        timeFormat: '{0} min {1} s',
        timeFormatWithHours: '{0} h {1} min {2} s',
    };

    // Prepare aaoTitle
    const aaoTitle = $('<div id="aaoTitle" style="display:none; max-width: 260px; padding: 8px; background-color:#fff">');
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
        if (Object.keys(aaoVehicles).length === 0) {
            response = String.format(I18n.t("lssm.aaotime.duration"), formatSeconds(secondsString));
        } else if (secondsString > 0) {
            response = String.format(I18n.t("lssm.aaotime.least"), formatSeconds(secondsString)) + '<br/>';
            response += I18n.t("lssm.aaotime.missingVehicles1") + '<br/><ul>';
            for (let key in aaoVehicles) {
                response += '<li>' + aaoVehicles[key] + 'x ' + key + '</li>';
            }
            response += '</ul>' + I18n.t("lssm.aaotime.missingVehicles2");
        } else {
            response = I18n.t("lssm.aaotime.missingVehicles3");
        }
        aaoTitle.html(response);
        const aaoPosition = $(aaoObject).offset();
        aaoTitle.css({top: aaoPosition.top + 20, left: aaoPosition.left, position: 'absolute'}).show();
    };

    const getDurationInSeconds = (vehicleObject) => {
        let durationString = $(vehicleObject).parent().parent().find('td[class*="alarm_distance_"]').text().trim();
        let hours;
        let minutes;
        let seconds;
        let matches;
        if (durationString.indexOf('km') >= 0) {
            return null;
        } else if (durationString.indexOf('Std.') >= 0) {
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
            if (!isNaN(attribute.value) && attribute.value > 0) {
                vehicles[attribute.name] = parseInt(attribute.value);
            }
        });

        return vehicles;
    };

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
