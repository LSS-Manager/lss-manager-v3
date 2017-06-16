(function() {
    var h1 = document.getElementById('missionH1');
    var einsatzdate = h1.getAttribute("data-original-title");
    h1.insertAdjacentHTML('afterend', '<small>'+einsatzdate+' - Vor <span id="einsatzdate"></span></small><br>');

    var a = einsatzdate.replace(/[a-zA-Z]/ig,'').split(',');
    var b = a[1].split(':');
    var oldHour = b[0];
    var oldMin = b[1];

    var strcount;
    var x = new Date();
    var hour = x.getHours();
    var min = x.getMinutes();
    var newHour, newMin;

    if (oldHour > hour) {
        newHour = (24-oldHour)+hour;
    }
    else {
        newHour = hour-oldHour;
    }

    if (oldMin > min) {
        newMin = (60 - oldMin) + min;
        newHour--;
    }
    else {
        newMin = min-oldMin;
    }

    if (newHour >= 1)
        newHour = newHour + 'h ';
    else
        newHour = '';

    if (newMin < 0)
        newMin = 0;
    if (document.getElementById('einsatzdate') !== null)
        document.getElementById('einsatzdate').innerHTML = newHour + newMin + ' min';
    
})();