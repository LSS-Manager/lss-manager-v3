// ==UserScript==
// @name Developer Statistics
// @grant none
// @include https://www.leitstellenspiel.de/*
// @exclude https://www.leitstellenspiel.de/*missions*
// @version 0.1
// @updateURL 
// ==/UserScript==
(function() {
    if (typeof user_id !== "undefined" && typeof user_premium !== "undefined")
    {
        navigator.sayswho= (function(){
            var ua= navigator.userAgent, tem,
                M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if(/trident/i.test(M[1])){
                tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE '+(tem[1] || '');
            }
            if(M[1]=== 'Chrome'){
                tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
                if(tem!== null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
            if((tem= ua.match(/version\/(\d+)/i))!== null) M.splice(1, 1, tem[1]);
            return M.join(' ');
        })();
        var data = {};
        name = $.trim($("#navbar_profile_link").text());
        data.bro = navigator.sayswho;
        if(typeof alliance_id !== "undefined")
            data.all = alliance_id;
        data.bui = get_buildings().length;
        data = JSON.stringify(data);
        $.ajax({
            type: "POST",
            timeout: 1000,
            url: lss_config.stats_uri,
            data: {uid: user_id, uname: name, data:data}
        })
    }
})();
