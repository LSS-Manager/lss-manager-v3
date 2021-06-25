(function () {
    if (!document.URL.match(/vehicles/)) return;
    $('div.alert.alert-info').append($('a.btn.btn-default.btn-sm').clone());
})();
