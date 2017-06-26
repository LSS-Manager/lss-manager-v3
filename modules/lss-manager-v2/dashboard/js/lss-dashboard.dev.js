
jQuery.expr[":"].conaintsci = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

$('head').append("<style type='text/css' rel='stylesheet' id='dashboard-css'>body {-webkit-column-break-inside: avoid;page-break-inside: avoid;break-inside: avoid;}#db_wachen_outer>div {-moz-column-count: 4;-moz-column-gap: 10px;-webkit-column-count: 4;-webkit-column-gap: 10px;column-count: 4;column-gap: 10px;width: 100%;height: 100%;-webkit-column-break-inside: avoid;page-break-inside: avoid;break-inside: avoid;}#wp_sub, #wp_sub2{ display:none;}.db_wachen_item {display: inline-block;width: 100%;}</style>");

var searchby = "wache";
function loadGraphs() {
	// Building Bar Chart
	var building_amount = { 'fw': 0, 'fw_school': 0, 'rd': 0, 'rd_school': 0, 'pol': 0, 'pol_school': 0, 'thw': 0, 'thw_school': 0, 'kh': 0 };
	$.each(lssm.get_buildings(),function (key,build) {
		switch (build.stationType) {
			case BUILDING_TYPE_FEUERWACHE:
				building_amount.fw+=1;
				break;
			case BUILDING_TYPE_FEUERWEHRSCHULE:
				building_amount.fw_school+=1;
				break;
			case BUILDING_TYPE_RETTUNGSWACHE:
				building_amount.rd+=1;
				break;
			case BUILDING_TYPE_RETTUNGSSCHULE:
				building_amount.rd_school+=1;
				break;
			case BUILDING_TYPE_HOSPITAL:
				building_amount.kh+=1;
				break;
			case BUILDING_TYPE_NOTARZTHUBSCHRAUBERLANDEPLATZ:
				building_amount.rd+=1;
				break;
			case BUILDING_TYPE_POLIZEIWACHE:
				building_amount.pol+=1;
				break;
			case BUILDING_TYPE_POLIZEISCHULE:
				building_amount.pol_school+=1;
				break;
			case BUILDING_TYPE_THW:
				building_amount.thw+=1;
				break;
			case BUILDING_TYPE_THW_BUNDESSCHULE:
				building_amount.thw_school+=1;
				break;
			case BUILDING_TYPE_BEREITSCHAFTSPOLIZEI:
				building_amount.pol+=1;
				break;
			case BUILDING_TYPE_POLIZEIHUBSCHRAUBERLANDEPLATZ:
				building_amount.pol+=1;
				break;
			case BUILDING_TYPE_SEG:
				building_amount.rd+=1;
				break;
		}
	});
    $('#buildings_chart').highcharts({
        chart: { type: 'column', backgroundColor:'rgba(0,0,0,0)', height:'200' },
		colors: ["red","orange","green","blue","gold"],
        title: {text: 'Gebäude'},
        xAxis: {categories: ['Feuerwehr', 'Rettungsdienst', 'Polizei', 'THW', 'Krankenhaus']},
        yAxis: {title: {text: 'Anzahl'}},
		legend: {enabled: false},
        series: [{
            name: 'Wachen',
			colorByPoint: true,
            data: [building_amount.fw,building_amount.rd,building_amount.pol,building_amount.thw]
		},
		{
            name: 'Schulen/Gebäude',
			colorByPoint: true,
            data: [building_amount.fw_school,building_amount.rd_school,building_amount.pol_school,building_amount.thw_school,building_amount.kh]
        }]
    });
	// Car-Donut-Charts
    var cars = {
        'fw':{'data':[],'total':0},
        'rd':{'data':[],'total':0},
        'pol':{'data':[],'total':0},
        'thw':{'data':[],'total':0}};
	// Go through all cars and put them where they belong
    $.each(lssm.car_list_all(),function (key,veh) {
        if (fz_type(veh.type)==0) {
			// Firefighters
            cars.fw.total+=1;
            if (Object.prototype.hasOwnProperty.call(cars.fw.data, veh.type)) {
                cars.fw.data[veh.type].y+=1;
            }else{
                cars.fw.data[veh.type] = {name:lssm.carsById[veh.type] ,y:1};
            }
        }else if (fz_type(veh.type)==1) {
			// Ambulance
            cars.rd.total+=1;
            if (Object.prototype.hasOwnProperty.call(cars.rd.data, veh.type)) {
                cars.rd.data[veh.type].y+=1;
            }else{
                cars.rd.data[veh.type] = {name:lssm.carsById[veh.type] ,y:1};
            }
        }else if (fz_type(veh.type)==2) {
			// Police
            cars.pol.total+=1;
            if (Object.prototype.hasOwnProperty.call(cars.pol.data, veh.type)) {
                cars.pol.data[veh.type].y+=1;
            }else{
                cars.pol.data[veh.type] = {name:lssm.carsById[veh.type] ,y:1};
            }
        }else{
			// Technical emergency service
            cars.thw.total+=1;
            if (Object.prototype.hasOwnProperty.call(cars.thw.data, veh.type)) {
                cars.thw.data[veh.type].y+=1;
            }else{
                cars.thw.data[veh.type] = {name:lssm.carsById[veh.type] ,y:1};
            }
        }
    });
	// Remove unused keys
    cars.fw.data = $.grep(cars.fw.data, function (k, v) {return (k != "" && k != null);});
    cars.rd.data = $.grep(cars.rd.data, function (k, v) {return (k != "" && k != null);});
    cars.pol.data = $.grep(cars.pol.data, function (k, v) {return (k != "" && k != null);});
    cars.thw.data = $.grep(cars.thw.data, function (k, v) {return (k != "" && k != null);});
    if (cars.fw.total>0) {
		// Firefighter chart
		$('#ff-fz').highcharts({
			chart: { backgroundColor: "rgba(0,0,0,0)", plotBorderWidth: 0, plotShadow: false },
			title: { text: ''},
			tooltip: { pointFormat: '<b>{series.name}: <b>{point.y}</b>' },
			plotOptions: {
				pie: {
					dataLabels: { enabled: false },
					center: ['50%', '50%']
				}
			},
			colors: ["#701C1C", "#800000", "#A40000", "#B31B1B", "#B22222", "#CC0000", "#CE1620", "#D73B3E", "#E34234", "#CD5C5C", "#FF0000", "#FF0800", "#FF1C00", "#FF5C5C", "#FF6961"],
			series: [{
				type: 'pie',
				name: 'Anzahl',
				innerSize: '50%',
				data: cars.fw.data
			}]
		});
        $("#ff-ges").html('<h4 style="text-align:center;">Total: '+ cars.fw.total +'</h4>');
    }else{
        $("#ff-fz").html('<div class="alert alert-danger">Keine Fahrzeuge vorhanden!</div>');
    }
    if (cars.rd.total>0) {
		// Ambulance chart
		$('#rd-fz').highcharts({
			chart: { backgroundColor: "rgba(0,0,0,0)", plotBorderWidth: 0, plotShadow: false },
			title: { text: ''},
			tooltip: { pointFormat: '<b>{series.name}: <b>{point.y}</b>' },
			plotOptions: {
				pie: {
					dataLabels: { enabled: false },
					center: ['50%', '50%']
				}
			},
			colors: ["#f9690e", "#f9bf3b", "#d35400"],
			series: [{
				type: 'pie',
				name: 'Anzahl',
				innerSize: '50%',
				data: cars.rd.data
			}]
		});
        $("#rd-ges").html('<h4 style="text-align:center;">Total: '+ cars.rd.total +'</h4>');
    }else{
        $("#rd-fz").html('<div class="alert alert-danger">Keine Fahrzeuge vorhanden!</div>');
    }
    if (cars.pol.total>0) {
		// Police chart
		$('#pol-fz').highcharts({
			chart: { backgroundColor: "rgba(0,0,0,0)", plotBorderWidth: 0, plotShadow: false },
			title: { text: ''},
			tooltip: { pointFormat: '<b>{series.name}: <b>{point.y}</b>' },
			plotOptions: {
				pie: {
					dataLabels: { enabled: false },
					center: ['50%', '50%']
				}
			},
			colors: ["#87d37c","#65c6bb","#16a085","#019875","#36d7b7"],
			series: [{
				type: 'pie',
				name: 'Anzahl',
				innerSize: '50%',
				data: cars.pol.data
			}]
		});
        $("#pol-ges").html('<h4 style="text-align:center;">Total: '+ cars.pol.total +'</h4>');
    }else{
        $("#pol-fz").html('<div class="alert alert-danger">Keine Fahrzeuge vorhanden!</div>');
    }
    if (cars.thw.total>0) {
		// Technical emergency service chart
		$('#thw-fz').highcharts({
			chart: { backgroundColor: "rgba(0,0,0,0)", plotBorderWidth: 0, plotShadow: false },
			title: { text: ''},
			tooltip: { pointFormat: '<b>{series.name}: <b>{point.y}</b>' },
			plotOptions: {
				pie: {
					dataLabels: { enabled: false },
					center: ['50%', '50%']
				}
			},
			colors: ["#002366","#191970","#00008B","#00009C","#002FA7","#0000FF","#92A1CF"],
			series: [{
				type: 'pie',
				name: 'Anzahl',
				innerSize: '50%',
				data: cars.thw.data
			}]
		});
        $("#thw-ges").html('<h4 style="text-align:center;">Total: '+ cars.thw.total +'</h4>');
    }else{
        $("#thw-fz").html('<div class="alert alert-danger">Keine Fahrzeuge vorhanden!</div>');
    }
}
function load_build_planning(){
/*
building_marker_image: "/images/building_rettungswache.png"
building_type: 2
detail_button: "<a href="/buildings/1062880" building_type="2" class="btn btn-xs btn-default lightbox-open" id="building_button_1062880">Details</a>"
icon: "/images/building_rettungswache.png"
id: 1062880
latitude: 48.1936924128306
level: 5
longitude: 11.5958869457245
name: "RW 22 MKT M-Nord"
personal_count: 6
user_id: 168556
*/
  	var leitstelle = 0;
	$.each(building_markers_cache,function(i,building){
		if(building.user_id != user_id){
			return;
		}
      	var appendto = "son"
			vehicles = lssm.car_list(building.id)
			printcars = ""
			icon = "fa-building-o"
			icon3 = "fa-car"
			maxcars = building.level+1;
		
      	switch (building.building_type){
			case BUILDING_TYPE_FEUERWACHE:
            	appendto = "fw";
            	break;
			case BUILDING_TYPE_FEUERWEHRSCHULE:
            	appendto = "sch";
				icon = "fa-university";
            	break;
			case BUILDING_TYPE_RETTUNGSWACHE:
            	appendto = "rd";
				icon = "fa-ambulance";
            	break;
			case BUILDING_TYPE_RETTUNGSSCHULE:
            	appendto = "sch";
				icon = "fa-university";
            	break;
			case BUILDING_TYPE_HOSPITAL:
				icon3 = "fa-bed";
				icon = "fa-hospital-o";
				maxcars = building.level+10;
				break;
			case BUILDING_TYPE_NOTARZTHUBSCHRAUBERLANDEPLATZ:
				icon = "fa-h-square";
            	appendto = "rd";
            	break;
			case BUILDING_TYPE_LEITSTELLE:
				icon = "fa-rss";
				maxcars = 0;
            	break;
			case BUILDING_TYPE_POLIZEIWACHE:
            	appendto = "pol";
            	break;
			case BUILDING_TYPE_POLIZEISCHULE:
            	appendto = "sch";
				icon = "fa-university";
            	break;
			case BUILDING_TYPE_THW:
            	appendto = "thw";
            	break;
			case BUILDING_TYPE_THW_BUNDESSCHULE:
            	appendto = "sch";
				icon = "fa-university";
            	break;
			case BUILDING_TYPE_BEREITSCHAFTSPOLIZEI:
            	appendto = "pol";
            	break;
        }
		// Schools, Hospitals and Stuff don't have cars
		if (appendto == "sch")
			maxcars = 0;
      	if (building.building_type == 7) { leitstelle = building.id; }
		$.each(vehicles, function(k,car){
			printcars += '<span id="db_veh_'+car.id+'" class="building_list_fms building_list_fms_' + car.fms + '">' + car.fms + '</span> <a href="/vehicles/'+car.id+'" class="lightbox-open">'+car.name+'</a><br>';
        });
      	var bd_data = '\
		<div class="db_wachen_item">\
			<div class="panel panel-default">\
				<div class="panel-heading">\
					<h3 class="panel-title"><i class="fa '+icon+'"></i>\
						<a href="/buildings/'+building.id+'" class="lightbox-open">'+building.name+'</a></h3>\
				</div>\
				<div class="panel-body" style="height:50px;">\
					<h3 style="position:relative; bottom:25px; text-align:center !important">';
					if (building.level != null)
                       	bd_data += '<span><i class="fa  fa-exclamation-triangle"></i> '+building.level+'</span>';
					if (building.personal_count > 0)
                    	bd_data += '&nbsp;&nbsp;&nbsp;<span><i class="fa fa-users"></i> '+building.personal_count+'</span>';
					if (maxcars > 0)
						bd_data += '&nbsp;&nbsp;&nbsp;<span><i class="fa '+icon3+'"></i>  '+vehicles.length+'/'+maxcars+'</span>\</h3>';
				bd_data+= '</div>\
				<div class="panel-body fz-body">\
					'+printcars+'\
				</div>\
				<div class="panel-footer" style="background-color:#fff;">\
					<a class="btn btn-sm btn-default"><i class="fa fa-cog"></i> Einstellungen</a>\
				</div>\
			</div>\
		</div>';
		$("#wp_"+appendto).append(bd_data);
    });
	/* == Outdated way.
	if (leitstelle != 0) {
		var source = "";
		$.ajax( {
			url: "/buildings/"+leitstelle,
			timeout: 1000,
			success:function (response) {
              	response = $(response)
              	response = $(response.find("#building_table>tbody")[0]).find("tr");
              	$.each(response, function(key,value){
              		var stufe = parseInt(value.cells[2].innerHTML);
                  	var pers = value.cells[4].innerHTML;
                  	var wache = $(value.cells[1].innerHTML)[0].pathname.split("/")[2];
					$("#wp_"+wache+"_stufe").html(stufe);
					$("#wp_"+wache+"_pers").html(pers);
                  	$("#wp_"+wache+"_max").html(stufe+1);
                });
			},
			error:function () {
				alert("Konnte die Leitstelle nicht abfragen.");
			}
		});
	}*/
}
// Wechseln der Dashboard-Ansicht
function switch_dashboard(tab){
	tab = "#"+tab+"_outer";
	$(curtab_db).fadeOut(500);
  	$(tab).fadeIn(500);
	curtab_db = tab;
	if (tab == "#db_fzg_outer") {
		populate_fzgtable();
	}
	if (tab == "#db_wachen_outer") {
		$("#wp_sub").fadeIn(500);
		$("#wp_sub2").fadeIn(500);
    } else {
		$("#wp_sub").fadeOut(500);
		$("#wp_sub2").fadeOut(500);
    }
}
function switch_wp_tab(tab){
	tab = "#"+tab.replace("a_","");
	$(curtab_wp).fadeOut(500);
  	$(tab).fadeIn(500);
	curtab_wp = tab;
}
// Suche nach Wache/Fahrzeug
function wp_suche(){
	var val = $("#wp_search").val();
	if (val.length>0) {
		if (searchby == "wache") {
			$(".db_wachen_item .panel-title:not(:conaintsci('"+val+"'))").closest(".db_wachen_item").fadeOut();
			$(".db_wachen_item .panel-title:conaintsci('"+val+"')").closest(".db_wachen_item").fadeIn();
		} else {
			$(".db_wachen_item .fz-body:not(:conaintsci('"+val+"'))").closest(".db_wachen_item").fadeOut();
			$(".db_wachen_item .fz-body:conaintsci('"+val+"')").closest(".db_wachen_item").fadeIn();
		}
	}else{
		$("#db_wachen_outer .db_wachen_item").fadeIn();
	}
}
// Fill vehicle table
function populate_fzgtable(){
	var c_table = $("#db_fzg_outer table tbody")
	c_table.html("");
	var cars = {};
	var total = {'free':0,'miss':0,'fms5':0,'fms6':0,'sum':0};
	$.each(lssm.car_list_all(),function (key,veh) {
		var type = lssm.carsById[veh.type];
		if (Object.prototype.hasOwnProperty.call(cars, type)==false) {
			cars[type] = {'free':0,'miss':0,'fms5':0,'fms6':0,'sum':0};
		}
		switch (veh.fms) {
			case '3':
				cars[type].miss += 1;
				total.miss += 1;
				break;
			case '4':
				cars[type].miss += 1;
				total.miss += 1;
				break;
			case '5':
				cars[type].fms5 += 1;
				total.fms5 += 1;
				break;
			case '6':
				cars[type].fms6 += 1;
				total.fms6 += 1;
				break;
			default:
				cars[type].free += 1;
				total.free += 1;
				break;
		}
		cars[type].sum += 1;
		total.sum += 1;
	});
	$.each(cars,function (key,val) {
		c_table.append('\
			<tr>\
				<td>'+key+'</td>\
				<td>'+val.free+'</td>\
				<td>'+val.miss+'</td>\
				<td>'+val.fms5+'</td>\
				<td>'+val.fms6+'</td>\
				<td>'+val.sum+'</td>\
			</tr>');
	});
	var c_table = $("#db_fzg_outer table tfoot");
	c_table.html("");
	c_table.append('\
		<tr style="font-weight:bold">\
			<td>Summe</td>\
			<td>'+total.free+'</td>\
			<td>'+total.miss+'</td>\
			<td>'+total.fms5+'</td>\
			<td>'+total.fms6+'</td>\
			<td>'+total.sum+'</td>\
		</tr>');
	/*
	$.each(lssm.car_list_all(),function (key,veh) {
	if (fz_type(veh.type)==0) {
		// Firefighters
		cars.fw.total+=1;
		if (Object.prototype.hasOwnProperty.call(cars.fw.data, veh.type)) {
			cars.fw.data[veh.type].y+=1;
		}else{
			cars.fw.data[veh.type] = {name:lssm.carsById[veh.type] ,y:1};
		}
	*/
	
}
// Bind dashboard buttons (called after dashboard has been loaded... fuck you jquery...)
function bind_db_buttons(){
	$("a[id^='wp_a_']").click(function (){
		$("#wp_sub>a").removeClass("active");
		$(this).parent().addClass("active");
	    switch_wp_tab($(this).attr('id'));
	});
	$('#db_main,#db_fzg,#db_wachen').click(function (){
		$("#dashboard_buttons>a").removeClass("active");
		$(this).parent().addClass("active");
	    switch_dashboard($(this).attr('id'));
	});
	$("#wp_search").keyup(function(){wp_suche();});
	$("#wp_switch").click(function(){
		if (searchby == "wache") {
			$("#wp_switch").html('<i class="fa fa-car"></i>');
			searchby = "car";
		} else {
			$("#wp_switch").html('<i class="fa fa-building"></i>');
			searchby = "wache";
		}
		wp_suche();
	});
}
