(function ($) {
    function getModules()
    {
        let active = [];
        for (let m in lssm.Module){
            if (lssm.Module[m].active)
            {
                active.push(m);
            }
        }
        return active;
    }
    function getUserAgent()
    {
        let ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem !== null)
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) !== null)
            M.splice(1, 1, tem[1]);
        return M.join(' ');
    }
    if (typeof user_id !== "undefined" && typeof user_premium !== "undefined")
    {
        let data = {};
        // Lets grab the users key
        $.get(lssm.config.key_link + user_id, function (data) {
            try 
            {
                // Try to parse the answer as JSON
                data = JSON.parse(data);
                lssm.key = data.code;
                let name = $.trim($("#navbar_profile_link").text());
                data.bro = getUserAgent();
                data.pro = user_premium;
                data.bui = lssm.buildings.length;
                data.version = lssm.config.version;
                data.mods = getModules();
                let game = window.location.hostname;
                data = JSON.stringify(data);
                $.post(lssm.config.stats_uri, {
                    uid: user_id, key: lssm.key, game: game, uname: name, data: data
                });
            } catch (e) {
                lssm.key = null;
            }
        });
    }
})($);
