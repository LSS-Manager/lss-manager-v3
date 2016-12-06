// ==UserScript==
// @name         Chat
// @version      1.3
// @description  Zeigt ein Popup an wenn eine neue Chatnachricht erscheint
// @author       Mausmajor
// @include      *://www.leitstellenspiel.de/
// @exclude      *://www.leitstellenspiel.de/mission*
// @grant        none
// ==/UserScript==
(function(){
    // Settings
    var settings = {
        allianceChatNotifcation:true,
        locale: I18n.locale||'de',
        delayTime:6000,
        translations:{
            de:{
                Chatnotification_on_off:'Chatnotification aus/ein schalten'
            }
        }
    };
    var $mainDiv = $('<div id="chatNote" class="panel panel-default"><div class="panel-heading">Chat</div></div>');
    $mainDiv.css({
        'position': 'fixed',
        'width': '250px',
        'z-index': '99999',
        'margin-left': '-255px',
        'top': '20%',
        'left': '100%',
        'display':'none',
        'cursor':'pointer'
    });
    $mainDiv.click(function(){
        $(this).hide('slow');
    });
    var $contentDiv = $('<div class="panel-body" style="background-color: white;"></div>');
    var $ul = $('<ul id="chatNoteUl"></ul>');
    $ul.css({
        'list-style': 'none',
        'margin-left': '0',
        'padding-left':' 20px'
    });
    $ul.appendTo($contentDiv);
    $contentDiv.appendTo($mainDiv);
    $mainDiv.appendTo($('body'));
    $('<a href="#" class="btn btn-success btn-xs pull-right'+(settings.allianceChatNotifcation ?'':' btn-danger')+'" title="'+settings.translations[settings.locale].Chatnotification_on_off+'">Chatnotification</a>').appendTo($('#chat_outer .panel-heading'))
            .click(function(e){
                settings.allianceChatNotifcation = !settings.allianceChatNotifcation;
                $(this).toggleClass("btn-danger");
                return false;
    });
    var allianceChatBuffer = allianceChat;
    var MainDivTimer;
    function hideMainDiv(){
        clearTimeout(MainDivTimer);
        MainDivTimer = setTimeout(function(){
            $mainDiv.hide('slow');
        },settings.delayTime); 
    }
    allianceChat = function(t){
        allianceChatBuffer(t);
        if(user_id !== t.user_id && settings.allianceChatNotifcation && !t.ignore_audio){
            var e = "<li><span class='mission_chat_message_username'>[" + t.date + "] <a href='/profile/" + t.user_id + "' class='lightbox-open'>" + t.username + ":</a></span>";
            t.mission_id && (e = e + "<a href='/missions/" + t.mission_id + "' class='lightbox-open'><span class='glyphicon glyphicon-bell'></span></a> ");
            e = e + " " + t.message + "</li>";
            $(e).appendTo($ul).delay(settings.delayTime).hide('slow',function(){$(this).remove();});
            $mainDiv.show('slow');
            hideMainDiv();
        }
    };
})();
