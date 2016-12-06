// allowed buildings (true) are sent to the php script, denied buildings (false) are not
var allowedBuildings = {
        0: true,    // firestation
        1: false,   // fireschool
        2: true,    // medical station
        3: false,   // medical school
        4: false,   // hospital
        5: true,    // medial helicopter
        6: true,    // police station
        8: false,   // police school
        9: true,    // THW
        10: false,  // THW school
        11: true,   // BePo
        12: true,   // SEG 
        13: true,    // police helicopter
        14: false,   // Bereitstellungsraum
        15: true     // Wasserrettung
    },

    // data is sent like thisd
    exampleData      = {
        userId: 4156156,
        stations: [
            {
                id: '1234',
                name: 'Testname 1',
                stationType: 0,
                cars: [
                    {
                        id: '4321',
                        carType: 15,
                        name: 'Testauto 1',
                        status: 2
                    },
                    {
                        id: '4322',
                        carType: 10,
                        name: 'Testauto 2',
                        status: 5
                    }
                ]
            },
            {
                id: '1235',
                name: 'Testname 2',
                stationType: 8,
                cars: [
                    {
                        id: '4323',
                        carType: 15,
                        name: 'Testauto 3',
                        status: 2
                    },
                    {
                        id: '4324',
                        carType: 17,
                        name: 'Testauto 4',
                        status: 5
                    }
                ]
            }
        ]
    };

// returns the cars of the given station as a JSON Array
function getCarsByStation(stationElement) {
    var tempCarData = [];
    // iterate through all cars of the given station
    $(stationElement).find('.building_list_vehicles').find('li').each(function() {
        // add car information to a temporary array
        tempCarData.push({
            id: parseInt($(this).attr('vehicle_id'), 10),
            carType: parseInt($(this).find('[vehicle_type_id]').attr('vehicle_type_id')),
            name: $(this).find('[vehicle_type_id]').html().trim(),
            status: parseInt($(this).find('.building_list_fms').html().trim(), 10)
        });
    });
    // return the temporary array
    return tempCarData;
}

// returns all stations
function getStations() {
    var tempStationData = [];
    // iterate through all buildings
    $('#building_list').find('.building_list_li').each(function() {
        // check if building should be sent
        if (allowedBuildings[$(this).attr('building_type_id')] === true) {
            var stationId = parseInt($(this).find('.building_marker_image').attr('building_id'), 10);
            // add station information to a temporary array
            tempStationData.push({
                id: stationId,
                name: $(this).find('.map_position_mover').html().trim(),
                buildingType: parseInt($(this).attr('building_type_id'), 10),
                cars: getCarsByStation($(this))
            });
        }
    });
    // return the temporary array
    return tempStationData;
}

// sends the given data via POST request to the tableau
function sendData(data) {
    $.ajax({
        url: 'https://tableau.fbmf.de/input.php',
        method: 'POST',
        data: {
            'stationData': data
        },
        success: function(resultData) {
            // log success
            console.log("All stations have been transmitted");
        },
        error: function(errorData) {
            // log errors
            console.log(errorData);
        }
    });
}

// only apply when the index page is open
if (window.location.pathname === "/" || window.location.pathname === "/#") {
    $(document).ready(function() {
        // execute function
        sendData({
            userId: user_id,
            stations: getStations()
        });
        // create interval to send all the data
        window.setInterval(function() {
            sendData({
                userId: user_id,
                stations: getStations()
            });
        }, 5000);
    });

    // add a button showing the user id and link to the tableau
    $('#news_li').before('<li><a href="http://tableau.fbmf.de/login.php?u=' + user_id + '" target="_blank">Tableau</a></li>');
}
