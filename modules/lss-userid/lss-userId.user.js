(function () {
    window.location.pathname === '/' &&
        $("#lssm_dropdown").after(
            `<li><a class="lightbox-open" href="${$(
                '#navbar_profile_link'
            ).attr('href')}">${user_id}</a></li>`
        );
    if (window.location.pathname.match(/\/profile\/\d+/)) {
        document.querySelector(
            'h1'
        ).innerHTML += `&nbsp;<small>(${window.location.pathname.replace(
            /\D+/g,
            ''
        )})</small>`;
    }
})();
