((I18n, $) => {
    let vehicleStates = {};
    let hospitals = lssm.buildings.filter((building) => {
        return building.building_type == 4;
    });
    let policeStations = lssm.buildings.filter((building) => {
        return building.building_type == 6;
    });

    // Prepare hint area
    const fms7target = $('<div id="fms7target" style="display:none; z-index: 999999; max-width: 260px; padding: 8px; background-color:#f58558">');
    $('body').append(fms7target);

    $('#building_list').on('mouseover', '.building_list_vehicle_element', function () {
        let vehicleId = $(this).attr('vehicle_id');
        if (vehicleId && vehicleStates[vehicleId]) {
            fms7target.html('Unterwegs zu ' + vehicleStates[vehicleId].caption);
            const buttonPosition = $(this).offset();
            fms7target.css({
                top: buttonPosition.top + 30,
                left: buttonPosition.left,
                position: 'absolute'
            }).show();
        }
        $(this).mouseleave(() => {
            fms7target.hide();
        });
    });

    // Override radioMessage function with custom behaviour
    let radioMessageOrig = radioMessage;
    radioMessage = (data) => {
        try {
            if (data.fms_real === 7) {
                let targetBuilding = lssm.buildings.find((building) => {
                    return building.id === data.target_building_id;
                });
                vehicleStates[data.id] = targetBuilding;
            } else if (data.fms_real === 1) {

                if (vehicleStates[data.id]) {
                    data.fms_text = 'Frei in ' + vehicleStates[data.id].caption;
                    delete vehicleStates[data.id];
                }
            }
        } catch (e) {
            console.log('There was an error processing the radioMessage() custom function: ' + e);
        } finally {
            // Execute original function
            radioMessageOrig(data);
        }
    };

    let findNearest = (lat, long, type) => {
        let buildings;
        if (type === 'police') {
            buildings = policeStations;
        } else {
            buildings = hospitals;
        }
        let shortestDistance;
        let shortestBuilding;
        for (let building of buildings) {
            let distance = getDistanceFromLatLonInKm(building.latitude, building.longitude, lat, long);
            if (!shortestDistance || distance < shortestDistance) {
                shortestDistance = distance;
                shortestBuilding = building;
            } else if (distance === 0) {
                return building;
            }
        }
        if (shortestDistance > 0.5) {
            return null;
        } else {
            return shortestBuilding;
        }
    };

    let getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };

    let deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    };

    // Let's use vehicleDrive functions to gather target information about vehicles on initial page load.
    // Unfortunately there's no target_building_id in this call, so we have to assume the target building by its distance on the vehicle's last route point.
    try {
        let scriptBlocks = $('#main_container > script');
        for (let i = 0; i < scriptBlocks.length; i++) {
            let script = $(scriptBlocks[i]).html();
            if (script.indexOf('vehicleDrive(') > 0) {
                var res = script.match(/vehicleDrive\((.*)?\);/g);
                for (let match of res) {
                    if (match.indexOf('"fms_real":7') > 0) {
                        let dataObject = JSON.parse(match.substring(match.indexOf('(') + 1, match.length - 2));
                        if (dataObject.user_id === user_id) {
                            let route = JSON.parse(dataObject.s);
                            let building_position = route[route.length - 1];
                            let building_lat = building_position[0];
                            let building_long = building_position[1];

                            let targetType;
                            if (dataObject.vtid == 32 || dataObject.vtid == 52) {
                                targetType = 'police'
                            } else {
                                targetType = 'hospital'
                            }
                            // As the targets might not match 100% we have to estimate the nearest possible hospital/police station
                            vehicleStates[dataObject.id] = findNearest(building_lat, building_long, targetType);
                        }
                    }
                }
            }
        }
    } catch (e) {
        console.log('There was an error retrieving the initial status: ' + e);
    }

})(I18n, jQuery);