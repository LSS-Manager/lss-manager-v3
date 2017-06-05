(function ($){
    // remove lss buttons
    var missionDiv,
        missionListDiv,
        scriptMissionTab,
        missionList,
        scriptTabContent,
        missionListKrankentransporteDiv,
        missionListKrankentransporte,
        missionListAllianceDiv,
        missionListAlliance,
        missionListEventsDiv,
        missionListEvents,
        missionListSicherheitswacheDiv,
        missionListSicherheitswache;

    missionDiv = $('#missions');
    missionDiv.find('.btn-group:eq(0)').hide();

    // create divs
    missionListDiv = $('#mission_list');
    missionListDiv.before('<div id="scriptMissionTab"></div>');
    scriptMissionTab = $('#scriptMissionTab');

    missionDiv.find('strong:eq(0)').parent().append(
      '<div id="scriptMissionMenu">' +
        '<ul class="nav nav-tabs small" style="padding-left:0">' +
          '<li class="active">'+
            '<a href="#scriptEmergencies" data-toggle="tab" class="lssm_tabMenu">'+
            'NF (<span id="scriptEmergencyCounter"></span>)</a>'+
          '</li>' +
          '<li>'+
            '<a href="#scriptTransports" data-toggle="tab" class="lssm_tabMenu">'+
            'KTP (<span id="scriptTransportCounter"></span>)</a>'+
          '</li>' +
          '<li>'+
            '<a href="#scriptAlliances" data-toggle="tab" class="lssm_tabMenu">'+
            'VE (<span id="scriptAllianceCounter"></span>)</a>'+
          '</li>' +
          '<li>'+
            '<a href="#scriptEvents" data-toggle="tab" class="lssm_tabMenu">'+
            'EVT (<span id="scriptEventsCounter"></span>)</a>'+
          '</li>' +
          '<li>'+
            '<a href="#scriptSw" data-toggle="tab" class="lssm_tabMenu">'+
            'SW (<span id="scriptSWCounter"></span>)</a>'+
          '</li>'+
          // TODO ADD MISSIONOUT TO TABS
          //'<li>'+
          //  '<a href="#" class="btn btn-xs btn-success MissionOut" title="Mission aus/ein-blenden"><i class="glyphicon glyphicon-eye-open"></i></a>'+
          //'</li>'+
        '</ul>'+
      '</div>');
    scriptMissionTab.append('<div class="tab-content" id="scriptTabContent"></div>');

    missionList = missionListDiv.html();
    missionListDiv.remove();

    scriptTabContent = $('#scriptTabContent');
    scriptTabContent.append('<div class="tab-pane active" id="scriptEmergencies"><div id="mission_list"' +
        ' style="padding-left:0">' + missionList + '</div></div>');

    missionListKrankentransporteDiv = $('#mission_list_krankentransporte');
    missionListKrankentransporte = missionListKrankentransporteDiv.html();
    missionListKrankentransporteDiv.remove();
    scriptTabContent.append('<div class="tab-pane" id="scriptTransports"><div id="mission_list_krankentransporte"' +
        ' style="padding-left:0">' + missionListKrankentransporte + '</div></div>');

    missionListAllianceDiv = $('#mission_list_alliance');
    missionListAlliance = missionListAllianceDiv.html();
    missionListAllianceDiv.remove();
    scriptTabContent.append('<div class="tab-pane" id="scriptAlliances"><div id="mission_list_alliance"' +
        ' style="padding-left:0">' + missionListAlliance + '</div></div>');

    missionListEventsDiv = $('#mission_list_alliance_event');
    missionListEvents = missionListEventsDiv.html();
    missionListEventsDiv.remove();
    scriptTabContent.append('<div class="tab-pane" id="scriptEvents"><div id="mission_list_alliance_event"' +
        ' style="padding-left:0">' + missionListEvents + '</div></div>');

    missionListSicherheitswacheDiv = $('#mission_list_sicherheitswache');
    missionListSicherheitswache = missionListSicherheitswacheDiv.html();
    missionListSicherheitswacheDiv.remove();
    scriptTabContent.append('<div class="tab-pane" id="scriptSw"><div id="mission_list_sicherheitswache"' +
        ' style="padding-left:0">' + missionListSicherheitswache + '</div></div>');

    function showMissionCounterInTab() {
    var missionsBtn = $('#missions').find('.btn-group');
    var toReplace = [
        'scriptEmergencyCounter',
        'scriptTransportCounter',
        'scriptAllianceCounter',
        'scriptEventsCounter',
        'scriptSWCounter'
    ];
    for (var key in toReplace) {
        if (toReplace.hasOwnProperty(key)) {
            $('#'+ toReplace[key]).html(missionsBtn.find('a:eq('+ key +')').html().replace(')', '').split('(')[1]);
        }
    }
  }
  showMissionCounterInTab();
})($);
