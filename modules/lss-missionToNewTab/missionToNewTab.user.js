(function($){
  var buffermMa = missionMarkerAdd;
  var buffermPa = mission_participation_add;

  // run tag missions when game is changing participation
  mission_participation_add = function(e){
  	buffermPa(e);
  	missionToNewTab(e);
  }
  // run tag missions when game is changing markers
  missionMarkerAdd = function(e){
  	buffermMa(e);
  	missionToNewTab(e.id);
  }

  function missionToNewTab(t){
    //to be done
  }

})($);
