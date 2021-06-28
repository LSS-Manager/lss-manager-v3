(($, win, I18n) => {
    if (!location.pathname.match(/\/missions\/\d+/)) return;

    I18n.translations.de_DE.lssm.aaotime = {
        timeRegex: /([0-9]{2}) Min. ([0-9]{2}) Sek./i,
        hourIdentifier: 'Std.',
        timeWithHoursRegex: /([0-9]{2}) Std. ([0-9]{2}) Min. ([0-9]{2}) Sek./i,
        leastTime: 'Mindestens <strong>{0}</strong>',
        duration: 'Dauer: {0}',
        missingVehicles1:
            'Für die folgenden Fahrzeuge konnte keine Anfahrtsdauer ermittelt werden:',
        missingVehicles2:
            'Möglicherweise sind sie nicht verfügbar oder nicht mit Zeiten aufgelistet.',
        missingVehicles3:
            'Fehler beim Berechnen der Anfahrtszeiten. Möglicherweise sind Fahrzeuge nicht verfügbar oder nicht mit Zeiten aufgelistet.',
        unsupportedKeys:
            'Die Dauer konnte nicht berechnet werden, da diese AAO Fahrzeug-Kombinationen enthält, die von diesem Modul leider noch nicht unterstützt werden: {0}',
        timeFormat: '{0} min {1} sek',
        timeFormatWithHours: '{0} h {1} min {2} sek',
    };
    I18n.translations.en_US.lssm.aaotime = {
        timeRegex: /([0-9]{2}) min. ([0-9]{2}) sec./i,
        hourIdentifier: 'hrs',
        timeWithHoursRegex: /([0-9]{2}) hrs. ([0-9]{2}) min. ([0-9]{2}) sec./i,
        leastTime: 'At least <strong>{0}</strong>',
        duration: 'Duration: {0}',
        missingVehicles1:
            'For the following vehicles it was not possible to determine the time:',
        missingVehicles2: 'They might not be present or listed with a time.',
        missingVehicles3:
            'Error calculating the time. The required vehicles might not be present or listed with a time.',
        unsupportedKeys:
            'The duration could not be determined because this ARR contains vehicle combinations that are not yet supported by this module: {0}',
        timeFormat: '{0} min {1} sec',
        timeFormatWithHours: '{0} h {1} min {2} sec',
    };
    I18n.translations.pl_PL.lssm.aaotime = {
        timeRegex: /([0-9]{2}) min. ([0-9]{2}) s./i,
        hourIdentifier: 'hrs',
        timeWithHoursRegex: /([0-9]{2}) hrs. ([0-9]{2}) min. ([0-9]{2}) s./i,
        leastTime: 'Przynajmniej <strong>{0}</strong>',
        duration: 'Czas trwania: {0}',
        missingVehicles1:
            'W przypadku następujących pojazdów nie było możliwe określenie czasu:',
        missingVehicles2:
            'Mogą nie być obecni lub nie być wymienieni z czasem.',
        missingVehicles3:
            'Błąd w obliczaniu czasu. Wymagane pojazdy mogą nie być obecne lub nie być wymienione wraz z czasem.',
        unsupportedKeys:
            'Czas trwania nie mógł zostać określony, ponieważ ARR zawiera kombinacje pojazdów, które nie są jeszcze obsługiwane przez ten moduł: {0}',
        timeFormat: '{0} min {1} s',
        timeFormatWithHours: '{0} h {1} min {2} s',
    };
    I18n.translations.sv_SE.lssm.aaotime = {
        timeRegex: /([0-9]{2}) min. ([0-9]{2}) sek./i,
        hourIdentifier: 'hrs',
        timeWithHoursRegex: /([0-9]{2}) hrs. ([0-9]{2}) min. ([0-9]{2}) sek./i,
        leastTime: 'Minst <strong>{0}</strong>',
        duration: 'Varaktighet: {0}',
        missingVehicles1:
            'För följande fordon var det inte möjligt att bestämma tiden:',
        missingVehicles2:
            'De kanske inte är närvarande eller listas med en tid.',
        missingVehicles3:
            'Fel vid beräkning av tiden. De nödvändiga fordonen kanske inte finns eller listas med tiden.',
        unsupportedKeys:
            'Varaktigheten kunde inte fastställas eftersom denna ARR innehåller fordonskombinationer som ännu inte stöds av den här modulen: {0}',
        timeFormat: '{0} min {1} sek',
        timeFormatWithHours: '{0} h {1} min {2} sek',
    };
    I18n.translations.it_IT.lssm.aaotime = {
        timeRegex: /([0-9]{2}) min. ([0-9]{2}) sec./i,
        hourIdentifier: 'ore',
        timeWithHoursRegex: /([0-9]{2}) ore. ([0-9]{2}) min. ([0-9]{2}) sec./i,
        leastTime: 'Almeno <strong>{0}</strong>',
        duration: 'Durata {0}',
        missingVehicles1:
            "Per i seguenti veicoli non è stato possibile determinare l'ora:",
        missingVehicles2:
            'Potrebbero non essere presenti o elencati con un certo tempo.',
        missingVehicles3:
            'Errore nel calcolo del tempo. I veicoli richiesti potrebbero non essere presenti o elencati con un tempo.',
        unsupportedKeys:
            'La durata non ha potuto essere determinata perché questo ARR contiene combinazioni di veicoli che non sono ancora supportate da questo modulo: {0}',
        timeFormat: '{0} min {1} sec',
        timeFormatWithHours: '{0} h {1} min {2} sec',
    };
    I18n.translations.fr_FR.lssm.aaotime = {
        timeRegex: /([0-9]{2}) min. ([0-9]{2}) sec./i,
        hourIdentifier: 'heures',
        timeWithHoursRegex:
            /([0-9]{2}) heures. ([0-9]{2}) min. ([0-9]{2}) sec./i,
        leastTime: 'Au moins <strong>{0}</strong>',
        duration: 'Durée du projet: {0}',
        missingVehicles1:
            "Pour les véhicules suivants, il n'a pas été possible de déterminer l'heure:",
        missingVehicles2: 'They might not be present or listed with a time.',
        missingVehicles3:
            'Error calculating the time. The required vehicles might not be present or listed with a time.',
        unsupportedKeys:
            'The duration could not be determined because this ARR contains vehicle combinations that are not yet supported by this module: {0}',
        timeFormat: '{0} min {1} sec',
        timeFormatWithHours: '{0} h {1} min {2} sec',
    };
    I18n.translations.nl_NL.lssm.aaotime = {
        timeRegex: /([0-9]{2}) minuten ([0-9]{2}) seconden/i,
        hourIdentifier: 'uur',
        timeWithHoursRegex:
            /([0-9]{2}) uur ([0-9]{2}) minuten ([0-9]{2}) seconden/i,
        leastTime: 'Minstens <strong>{0}</strong>',
        duration: 'Duur: {0}',
        missingVehicles1:
            'Geen nadere tijd kan worden bepaald voor de volgende voertuigen:',
        missingVehicles2:
            'Zij zijn mogelijk niet beschikbaar of tijdelijk vermeld.',
        missingVehicles3:
            'Fout bij de berekening van de aanlooptijden. Voertuigen zijn mogelijk niet beschikbaar of mogen tijdelijk worden vermeld.',
        unsupportedKeys:
            'This AUR contains combinations that are not yet supported by this module: {0}',
        timeFormat: '{0} min {1} s',
        timeFormatWithHours: '{0} h {1} min {2} s',
    };

    // Prepare aaoTitle
    const aaoTitle = $(
        '<div id="aaoTitle" style="display:none; z-index: 999; max-width: 260px; padding: 8px; background-color:#5CB85C">'
    );
    $('body').append(aaoTitle);
    const formatSeconds = totalSeconds => {
        const days = Math.floor(totalSeconds / 86400);
        totalSeconds -= days * 86400;

        const hours = Math.floor(totalSeconds / 3600) % 24;
        totalSeconds -= hours * 3600;

        const minutes = Math.floor(totalSeconds / 60) % 60;
        totalSeconds -= minutes * 60;

        const seconds = totalSeconds;
        if (hours > 0) {
            return String.format(
                I18n.t('lssm.aaotime.timeFormatWithHours'),
                hours,
                minutes,
                seconds
            );
        } else {
            return String.format(
                I18n.t('lssm.aaotime.timeFormat'),
                minutes,
                seconds
            );
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
            response = String.format(
                I18n.t('lssm.aaotime.duration'),
                formatSeconds(secondsString)
            );
        } else if (secondsString > 0) {
            response =
                String.format(
                    I18n.t('lssm.aaotime.leastTime'),
                    formatSeconds(secondsString)
                ) + '<br/>';
            if (unsupportedKeys.length > 0) {
                response = String.format(
                    I18n.t('lssm.aaotime.unsupportedKeys'),
                    unsupportedKeys.toString()
                );
            } else {
                response +=
                    I18n.t('lssm.aaotime.missingVehicles1') + '<br/><ul>';
                for (let key in aaoVehicles) {
                    response +=
                        '<li>' + aaoVehicles[key] + 'x ' + key + '</li>';
                }
                response += '</ul>' + I18n.t('lssm.aaotime.missingVehicles2');
            }
        } else {
            if (unsupportedKeys.length > 0) {
                response = String.format(
                    I18n.t('lssm.aaotime.unsupportedKeys'),
                    unsupportedKeys.toString()
                );
            } else {
                response = I18n.t('lssm.aaotime.missingVehicles3');
            }
        }
        aaoTitle.html(response);
        const aaoPosition = $(aaoObject).offset();
        aaoTitle
            .css({
                top: aaoPosition.top + 30,
                left: aaoPosition.left,
                position: 'absolute',
            })
            .show();
    };

    const getDurationInSeconds = vehicleObject => {
        let durationString = $(vehicleObject)
            .parent()
            .parent()
            .find('td[class*="alarm_distance_"]')
            .text()
            .trim();
        let hours;
        let minutes;
        let seconds;
        let matches;
        if (durationString.indexOf('km') >= 0) {
            return null;
        } else if (
            durationString.indexOf(I18n.t('lssm.aaotime.hourIdentifier')) >= 0
        ) {
            matches = durationString.match(
                I18n.t('lssm.aaotime.timeWithHoursRegex')
            );
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

    const getAaoVehicles = aaoObject => {
        let vehicles = {};
        $.each(aaoObject.attributes, function (index, attribute) {
            if (
                !isNaN(attribute.value) &&
                attribute.value > 0 &&
                attribute.name !== 'building_ids'
            ) {
                vehicles[attribute.name] = parseInt(attribute.value);
            }
        });

        return vehicles;
    };
    const handleMouseOver = aaoObject => {
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
                    if (vehicle.attributes[key].value > 0) {
                        // Does that vehicle meet an AAO requirement?
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
                            if (
                                Object.keys(aaoVehicleSearchList).length === 0
                            ) {
                                // If there aren't any missing vehicles, we're done! Hurray!
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
