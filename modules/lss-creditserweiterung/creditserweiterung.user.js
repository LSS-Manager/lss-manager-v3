(($, win, I18n) => {
    I18n.translations.de.lssm.creditserweiterung = {
        setCookieRegex: /(.*)([0-9]\.)? verdiente Credits.*/i,
        earnedCreditsCookie: 'gesamtcredits',
        creditsNeeded: [
            0,
            200,
            10000,
            100000,
            1000000,
            5000000,
            10000000,
            20000000,
            50000000,
            100000000,
            200000000,
            500000000,
            1000000000,
            2000000000,
            5000000000
        ],
        ranks: {
            0: 'Anwärter(in)',
            200: 'Feuerwehrmann / Feuerwehrfrau',
            10000: 'Oberfeuerwehrmann / Oberfeuerwehrfrau',
            100000: 'Hauptfeuerwehrmann / Hauptfeuerwehrfrau',
            1000000: 'Stv. Gruppenführer(in)',
            5000000: 'Gruppenführer(in)',
            10000000: 'Stv. Zugführer(in)',
            20000000: 'Zugführer(in)',
            50000000: 'Stv. Wehrführer(in)',
            100000000: 'Wehrführer(in)',
            200000000: 'Stv. Kreisbrandmeister(in)',
            500000000: 'Kreisbrandmeister(in)',
            1000000000: 'Stv. Landesbrandmeister(in)',
            2000000000: 'Landesbrandmeister(in)',
            5000000000: 'Ehrenmitglied'
        },
        reloadMessage: 'Bitte auf das eigene Profil gehen<br>und dann LSS neu laden!',
        dropdownName: 'Creditserweiterung (von KBOE2)',
        creditsOverview: 'Credits-Übersicht',
        coinsProtokoll: 'Coinsprotokoll',
        earnedCredits: 'Gesamtcredits',
        creditsToNextRank: 'Credits zum nächsten Dienstgrad',
        updateMessage: 'Zum aktualisieren, einfach<br>hier klicken.'
    };
    I18n.translations.en.lssm.creditserweiterung = {
        setCookieRegex: /(.*)([0-9],)? earned Credits.*/i,
        earnedCreditsCookie: 'earnedcredits',
        creditsNeeded: [
            0,
            200,
            10000,
            100000,
            1000000,
            5000000,
            20000000,
            50000000,
            1000000000,
            2000000000,
            5000000000
        ],
        ranks: {
            0: 'Probie',
            200: 'Firefighter',
            10000: 'Senior Firefighter',
            100000: 'Fire Apparatus Operator',
            1000000: 'Lieutenant',
            5000000: 'Captain',
            20000000: 'Staff Captain',
            50000000: 'Battalion Chief',
            1000000000: 'Division Chief',
            2000000000: 'Deputy Chief',
            5000000000: 'Fire Chief'
        },
        reloadMessage: 'Please open your profile<br>and reload the website!',
        dropdownName: 'Creditsextension (by KBOE2)',
        creditsOverview: 'Overview',
        coinsProtokoll: 'undefined',
        earnedCredits: 'Totaly earned Credits',
        creditsToNextRank: 'Credits to next rank',
        updateMessage: 'To update values<br>just klick here.'
    };
    I18n.translations.nl.lssm.creditserweiterung = {
        setCookieRegex: /(.*)([0-9]\.)? verdiende Credits.*/i,
        earnedCreditsCookie: 'totalecredits',
        creditsNeeded: [
            0,
            200,
            10000,
            100000,
            1000000,
            5000000,
            50000000,
            500000000,
            5000000000
        ],
        ranks: {
            0: 'Aspirant',
            200: 'Brandwacht (Manschap A)',
            10000: 'Hoofdbrandwacht (Manschap B)',
            100000: 'Brandmeester',
            1000000: 'Hoofdbrandmeester',
            5000000: 'Commandeur',
            50000000: 'Adjunct-Hoofdcommandeur',
            500000000: 'Hoofdcommandeur',
            5000000000: 'Erelid'
        },
        reloadMessage: 'Open uw profiel<br>open en de website herladen!',
        dropdownName: 'Kredietexpansie (von KBOE2)',
        creditsOverview: 'Overzicht statistiek',
        coinsProtokoll: 'undefined',
        earnedCredits: 'Totale studiepunten',
        creditsToNextRank: 'Credits voor de volgende rang',
        updateMessage: 'Om waarden bij te werken,<br> klikt u hier.'
    };

const username = $("#navbar_profile_link").text().trim();
if (document.getElementById("navigation_top")){
    var credits = $("#navigation_top").clone().wrap('<li>').parent().html();
}
if (document.getElementById("coins_top")){
    var coins = $("#coins_top").clone().wrap('<li>').parent().html();
}
var earnedCredits = "undefined";
var creditsToNextRank = "undefined";

function setCookies() {
  content = $(".lightbox_iframe");
  content = content.first()[0];
  content = content.contentWindow.document;
  content = content.children[0].children[1].children[2].children[0];
  content = content.innerHTML;
  var results = content.match(I18n.t('lssm.creditserweiterung.setCookieRegex'));
  var earnedCredits = results[1].replace(/\./g, "").replace(/,/g, "").trim();
  console.log(earnedCredits);
  document.cookie = I18n.t('lssm.creditserweiterung.earnedCreditsCookie') + "=" + earnedCredits + "; path=/";
  console.log("Saved Cookie!");
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

function fnct_nextRank(){
    var earnedCredits = parseInt(readCookie(I18n.t('lssm.creditserweiterung.earnedCreditsCookie')));
    for (i=0; I18n.t('lssm.creditserweiterung.creditsNeeded')[i]<earnedCredits; i++){
        var nextRank = (I18n.t('lssm.creditserweiterung.ranks')[I18n.t('lssm.creditserweiterung.creditsNeeded')[i+1]]);
    }
    return nextRank;
}

function fnct_nextCreditsNeeded(){
  var earnedCredits = parseInt(readCookie(I18n.t('lssm.creditserweiterung.earnedCreditsCookie')));
  for (i=0; I18n.t('lssm.creditserweiterung.creditsNeeded')[i]<earnedCredits; i++){
      var neededCredits = I18n.t('lssm.creditserweiterung.creditsNeeded')[i+1];
  }
  return neededCredits;
}

function lightbox_close(){
    $("#lightbox_close").click();
}

lightboxOpen(src=$("#navbar_profile_link").attr("href"));
window.setTimeout(setCookies, 5000);
window.setTimeout(lightbox_close, 5000);

creditsEarned = parseInt(readCookie(I18n.t('lssm.creditserweiterung.earnedCreditsCookie'))).toLocaleString();
nextRank = fnct_nextRank();
needed = fnct_nextCreditsNeeded();
earnedCredits = readCookie(I18n.t('lssm.creditserweiterung.earnedCreditsCookie'));
rest = needed - earnedCredits;
creditsToNextRank = parseInt(rest).toLocaleString();
if (creditsEarned == "NaN"){
    creditsEarned = I18n.t('lssm.creditserweiterung.reloadMessage');
}
if (creditsToNextRank == "NaN"){
    creditsToNextRank = I18n.t('lssm.creditserweiterung.reloadMessage');
}
if (I18n.t('lssm.creditserweiterung.coinsProtokoll') != "undefined"){
    $('#navbar-main-collapse > ul').append('<li><a id="menu_creditsverwaltung"  class="dropdown_toggle href="#" role="button" data-toggle="dropdown" aria-expanded="false"><img src="https://img.webme.com/pic/k/kboe-2/icons8-money-box-50.png" heigth="25" width="25"><span class="visible-xs">' + I18n.t('lssm.creditserweiterung.dropdownName') + '</span><b class="caret"></b></a><ul class="dropdown-menu" role="menu" aria-labelledy="menu_Creditsverwaltung><li class="divider" role="presentation"></li><li role="presentation" >' + credits + '</li><li role="presentation"><a href="/credits/overview" class="lightbox-open" target="blank">' + I18n.t('lssm.creditserweiterung.creditsOverview') + '</a></li><li role="presentation">' + coins + '</li><li role="presentation"><a href="/coins/list" class="lightbox-open" target="blank">' + I18n.t('lssm.creditserweiterung.coinsProtokoll') + '</a></li><li class="divider" role="presentation"></li><li role="presentation"><a>' + I18n.t('lssm.creditserweiterung.earnedCredits') + ': ' + creditsEarned + '</a><a href="">' + I18n.t('lssm.creditserweiterung.creditsToNextRank') + '<br>(' + nextRank + '):<br>'+ creditsToNextRank + '</a></li><li class="divider" role="presentation"></li><li role="presentation"><a href="">' + I18n.t('lssm.creditserweiterung.updateMessage') + '</a></li></ul></li>');
}
else if (I18n.t('lssm.creditserweiterung.coinsProtokoll') == "undefined"){
    $('#navbar-main-collapse > ul').append('<li><a id="menu_creditsverwaltung"  class="dropdown_toggle href="#" role="button" data-toggle="dropdown" aria-expanded="false"><img src="https://img.webme.com/pic/k/kboe-2/icons8-money-box-50.png" heigth="25" width="25"><span class="visible-xs">' + I18n.t('lssm.creditserweiterung.dropdownName') + '</span><b class="caret"></b></a><ul class="dropdown-menu" role="menu" aria-labelledy="menu_Creditsverwaltung><li class="divider" role="presentation"></li><li role="presentation" >' + credits + '</li><li role="presentation"><a href="/credits/overview" class="lightbox-open" target="blank">' + I18n.t('lssm.creditserweiterung.creditsOverview') + '</a></li><li role="presentation">' + coins + '</li><li class="divider" role="presentation"></li><li role="presentation"><a>' + I18n.t('lssm.creditserweiterung.earnedCredits') + ': ' + creditsEarned + '</a><a>' + I18n.t('lssm.creditserweiterung.creditsToNextRank') + '<br>(' + nextRank + '):<br>'+ creditsToNextRank + '</a></li><li class="divider" role="presentation"></li><li role="presentation"><a href="">' + I18n.t('lssm.creditserweiterung.updateMessage') + '</a></li></ul></li>');
}
$("#navigation_top").hide();
$("#coins_top").hide();
})($, window, I18n);
