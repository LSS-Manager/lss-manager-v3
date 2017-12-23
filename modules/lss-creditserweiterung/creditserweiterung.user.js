const username = $("#navbar_profile_link").text().trim();
if (document.getElementById("navigation_top")){
    var credits = $("#navigation_top").clone().wrap('<li>').parent().html();
}
if (document.getElementById("coins_top")){
    var coins = $("#coins_top").clone().wrap('<li>').parent().html();
}
var earnedCredits = "undefined";
var rank = "undefined";
var nextRank = "undefined";

function setCookies() {
  earnedCredits = NaN;
  rank = NaN;
  content = $(".lightbox_iframe");
  content = content.first()[0];
  content = content.contentWindow.document;
  content = content.children[0].children[1].children[2].children[0];
  content = content.innerHTML;
  content = content.replace(/<\/?[^>]+>/gi, "");
  content = content.replace(/(.|\n)*Dienstgrad: /g,"");
  content = content.replace(/ verdiente(.|\n)*/g,"");
  earnedCredits = content.replace(/(\d|.)*\n../g, "");
  earnedCredits = earnedCredits.replace(/\./g, "");
  rank = content.replace(/\n.*/g, "");
  document.cookie = "earnedCredits=" + earnedCredits + "; path=/";
  document.cookie = "rank=" + rank + "; path=/";
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

function fnct_nextCreditsNeeded(rank){
    var i = 0;
    for (var item in dienstgrade) {
        if (dienstgrade[item] == rank){
            var item_2 = parseInt(item)+1;
            var needed = benoetigte_credits[item_2];
            return needed;
        }
        i += 1;
    }
}

function fnct_nextRank(rank){
    for (var item in dienstgrade) {
        if (dienstgrade[item] == rank){
            var item_2 = parseInt(item)+1;
            var naechster_grad = dienstgrade[item_2];
            return naechster_grad;
        }
    }
}

function lightbox_close(){
    $("#lightbox_close").click();
}

lightboxOpen(src="/profile/"+user_id);
window.setTimeout(setCookies, 1000);
window.setTimeout(lightbox_close, 4000);

creditsEarned = parseInt(readCookie("earnedCredits")).toLocaleString();
rank = readCookie("rank");
needed = fnct_nextCreditsNeeded(rank);
naechster_grad = fnct_nextRank(rank);
earnedCredits = readCookie("earnedCredits");
rest = needed - earnedCredits;
nextRank = parseInt(rest).toLocaleString();
if (creditsEarned == "NaN"){
    creditsEarned = "Bitte auf das eigene Profil gehen<br>und dann LSS neu laden!";
}
if (nextRank == "NaN"){
    nextRank = "Bitte auf das eigene Profil gehen<br>und dann LSS neu laden!";
}

$('#navbar-main-collapse > ul').append('<li><a id="menu_creditsverwaltung"  class="dropdown_toggle href="#" role="button" data-toggle="dropdown" aria-expanded="false"><img src="https://img.webme.com/pic/k/kboe-2/icons8-money-box-50.png" heigth="25" width="25"><span class="visible-xs">Creditsverwaltung (von KBOE2)</span><b class="caret"></b></a><ul class="dropdown-menu" role="menu" aria-labelledy="menu_Creditsverwaltung><li class="divider" role="presentation"></li><li role="presentation" >' + credits + '</li><li role="presentation"><a href="/credits/overview" class="lightbox-open" target="blank">Credits-Übersicht</a></li><li role="presentation">' + coins + '</li><li role="presentation"><a href="/coins/list" class="lightbox-open" target="blank">Coinsprotokoll</a></li><li class="divider" role="presentation"></li><li role="presentation"><a>Gesamtcredits: ' + creditsEarned + '</a><a href="">Credits zum nächsten Dienstgrad<br>(' + naechster_grad + '):<br>'+ nextRank + '</a></li><li class="divider" role="presentation"></li><li role="presentation"><a href="">Zum aktualisieren, einfach<br>auf das eigene Profil gehen und dann<br>F5 drücken</a></li></ul></li>');

$("#navigation_top").remove();
$("#coins_top").remove();
