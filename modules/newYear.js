if (!localStorage["lssm_new_year"]) {
    if (new Date().getFullYear() === 2019) {
        switch (I18n.locale) {
            case "de":
                alert("Wir wünschen euch ein guten Start in das Jahr 2019!\nEuer LSS-Manager Team :)");
                break;
            case "en":
                alert("We wish you a good start into the year 2019!\nYour LSS-Manager Team :)");
                break;
            case "nl":
                alert("Wij wensen u een goede start in het jaar 2019!\nIeders LSS-Manager Team :)");
                break;
        }
        localStorage.setItem("lssm_new_year", true);
    }
}
