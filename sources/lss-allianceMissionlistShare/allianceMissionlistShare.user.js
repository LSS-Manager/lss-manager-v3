(function(){
  //var msb = ' div.missionSideBarEntry:not(:hidden)';
  //var ml = '#mission_list';
  //$(ml+msb+','+ml+'_krankentransporte'+msb+','+ml+'_sicherheitswache'+msb).each(function () {
  $('div.missionSideBarEntry:not(:hidden)').each(function () {
      var e = $(this);
      if (e.find('.allianceShareButton').length === 0) {
          var id = e.attr('mission_id');
          if(!$('#mission_panel_' + id).hasClass('panel-success')){
            create($('#mission_panel_heading_' + id), id, '');
          } else {
            create($('#mission_panel_heading_' + id), id, ' btn__disabled');
          }
      }
  });

    function create(h, id, allianceShareButtonDisabled) {
        var div = $('<div class="pull-right" id="allianceShareButton_'+id+'"></div>');
        var $button = $('<a  href="/missions/'+ id +'/alliance" class="btn btn-success btn-xs lightbox-open allianceShareButton pull-right'+allianceShareButtonDisabled+'" style="margin-top:2px;" data-header="' + id + '" title="Im Verband freigeben"><i class="glyphicon glyphicon-share-alt"></i></a>');
        div.prepend($button);
        h.prepend(div);
    }

  $('.allianceShareButton').on('click', function(){
    $(this).addClass('btn__disabled');
  });
});
