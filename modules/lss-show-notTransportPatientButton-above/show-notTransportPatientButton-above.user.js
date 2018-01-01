var ueberschrift = $("h1")[0];
if ($(".btn.btn-default.btn-sm")[0]){
    var button = '<a href="' + $(".btn.btn-default.btn-sm")[0] + '" class="btn btn-default btn-sm">Ohne Transport entlassen  (keine Vergütung)</a>';
    ueberschrift.innerHTML += '<br>';
    ueberschrift.innerHTML += button;
}
