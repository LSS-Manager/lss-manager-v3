var username = $("#navbar_profile_link").text().substr(1);
if (document.getElementById("navigation_top")){
    var Credits = document.getElementById("navigation_top").outerHTML;
}
if (document.getElementById("coins_top")){
    var Coins = document.getElementById("coins_top").outerHTML;
}
var credits = document.getElementById("navigation_top");
var coins = document.getElementById("coins_top");
var gesamtcredits = "undefined";
var dienstgrad = "undefined";
var next_level = "undefined";

function lightbox_open() {
    lightboxOpen();
}

function setCookies() {
  gesamtcredits = NaN;
  dienstgrad = NaN;
  content = $(".lightbox_iframe");
  content = content.first()[0];
  content = content.contentWindow.document;
  content = content.children[0].children[1].children[2].children[0];
  content = content.innerHTML;
  content = content.replace(/<\/?[^>]+>/gi, "");
  content = content.replace(/(.|\n)*Dienstgrad: /g,"");
  content = content.replace(/ verdiente(.|\n)*/g,"");
  gesamtcredits = content.replace(/(\d|.)*\n../g, "");
  gesamtcredits = gesamtcredits.replace(/\./g, "");
  dienstgrad = content.replace(/\n.*/g, "");
  document.cookie = "gesamtcredits=" + gesamtcredits + "; path=/";
  document.cookie = "dienstgrad=" + dienstgrad + "; path=/";
  console.log("Saved Cookies!");
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var dienstgrade = ["Anwärter(in)","Feuerwehrmann / Feuerwehrfrau","Oberfeuerwehrmann / Oberfeuerwehrfrau","Hauptfeuerwehrmann / Hauptfeuerwehrfrau","Stv. Gruppenführer(in)","Gruppenführer(in)","Stv. Zugführer(in)","Zugführer(in)","Stv. Wehrführer(in)","Wehrführer(in)","Stv. Kreisbrandmeister(in)","Kreisbrandmeister(in)","Stv. Landesbrandmeister(in)","Landesbrandmeister(in)","Ehrenmitglied"];
var benoetigte_credits = [0,200,10000,100000,1000000,5000000,10000000,20000000,50000000,100000000,200000000,500000000,1000000000,2000000000,5000000000];

function naechster_dienstgrad(dienstgrad){
    var i = 0;
    for (var item in dienstgrade) {
        if (dienstgrade[item] == dienstgrad){
            var item_2 = parseInt(item)+1;
            var benoetigt = benoetigte_credits[item_2];
            return benoetigt;
        }
        i += 1;
    }
}

function dienstgrad_next(dienstgrad){
    for (var item in dienstgrade) {
        if (dienstgrade[item] == dienstgrad){
            var item_2 = parseInt(item)+1;
            var naechster_grad = dienstgrade[item_2];
            return naechster_grad;
        }
    }
}

lightboxOpen(src="/profile/381370");
window.setTimeout(setCookies, 5000);
window.setTimeout($("#lightbox_close").click(), 10000);

credits_gesamt = parseInt(readCookie("gesamtcredits")).toLocaleString();
dienstgrad = readCookie("dienstgrad");
benoetigt = naechster_dienstgrad(dienstgrad);
naechster_grad = dienstgrad_next(dienstgrad);
gesamtcredits = readCookie("gesamtcredits");
verbleibend = benoetigt - gesamtcredits;
next_level = parseInt(verbleibend).toLocaleString();
if (credits_gesamt == "NaN"){
    credits_gesamt = "Bitte auf das eigene Profil gehen<br>und dann LSS neu laden!";
}
if (next_level == "NaN"){
    next_level = "Bitte auf das eigene Profil gehen<br>und dann LSS neu laden!";
}

$(".nav.navbar-nav.navbar-right").append('<li><a id="menu_creditsverwaltung"  class="dropdown_toggle href="#" role="button" data-toggle="dropdown" aria-expanded="false"><img src="https://img.webme.com/pic/k/kboe-2/icons8-money-box-50.png" heigth="25" width="25"><span class="visible-xs">Creditsverwaltung (von KBOE2)</span><b class="caret"></b></a><ul class="dropdown-menu" role="menu" aria-labelledy="menu_Creditsverwaltung><li class="divider" role="presentation"></li><li role="presentation" >' + Credits + '</li><li role="presentation"><a href="/credits/overview" class="lightbox-open" target="blank" onclick="lightbox_open()" >Credits-Übersicht</a></li><li role="presentation">' + Coins + '</li><li role="presentation"><a href="/coins/list" class="lightbox-open" target="blank" onclick="lightbox_open()">Coinsprotokoll</a></li><li class="divider" role="presentation"></li><li role="presentation"><a>Gesamtcredits: ' + credits_gesamt + '</a><a>Credits zum nächsten Dienstgrad<br>(' + naechster_grad + '):<br>'+ next_level + '</a></li><li class="divider" role="presentation"></li><li role="presentation"><a>Zum aktualisieren, einfach<br>auf das eigene Profil gehen und dann<br>F5 drücken</a></li></ul></li>');

$("#navigation_top").remove();
$("#coins_top").remove();
