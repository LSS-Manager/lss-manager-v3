if (!localStorage["lssm_new_year_2020"]) {
    if (new Date().getFullYear() === 2020) {
        switch (I18n.locale) {
            case "de_DE":
                alert("Wir wünschen euch ein guten Start in das Jahr 2020!\nEuer LSS-Manager Team :)");
                break;
            case "en_US":
                alert("We wish you a good start into the year 2020!\nYour LSS-Manager Team :)");
                break;
            case "en_GB":
                alert("We wish you a good start into the year 2020!\nYour LSS-Manager Team :)");
                break;
            case "en_AU":
                alert("We wish you a good start into the year 2020!\nYour LSS-Manager Team :)");
                break;
            case "nl_NL":
                alert("Wij wensen u een goede start in het jaar 2020!\nUw LSS-Manager Team :)");
                break;
            case "fr_FR":
                alert("Nous vous souhaitons un bon départ dans l'année 2020 !\nVotre équipe de gestionnaires de la LSS :)");
                break;
            case "it_IT":
                alert("Vi auguriamo un buon inizio nel 2020!\nIl vostro team di manager LSS :)");
                break;
            case "pl_PL":
                alert("Życzymy Państwu dobrego startu w roku 2020!\nTwój zespół menedżera LSS :)");
                break;
            case "sv_SE":
                alert("Vi önskar dig en bra start till 2020!\nDitt LSS-chefsteam :)");
                break;
        }
        localStorage.setItem("lssm_new_year_2020", true);
    }
}
