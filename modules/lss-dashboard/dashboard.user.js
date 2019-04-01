I18n.translations.de['lssm']['dashboard'] = {
    name: "Dashboard",
    vehicles: {
        name: "Fahrzeuge",
        type: "Fahrzeugtyp",
        available: "Verfügbar",
        onsite: "Im Einsatz",
        request: "Sprechwunsch",
        transport: "Transport",
    },
    total: "Summe",
    overview: "Übersicht",
    distribution: "Aufteilung",
    station_plan: "Wachenplanung",
    loading: "Dashboard wird geladen",
    ge: 'Gebäude',
    school: 'Schulen',
    wachen: 'Wachen',
    other: 'Sonstige',
    anz: 'Anzahl',
    perwp: 'MITARBEITER',
    carswp: 'FAHRZEUGE',
    patiwp: 'PATIENTEN',
    levwp: 'STUFE',
    categories: ['Feuerwehr', 'Rettungsdienst', 'Polizei', 'THW', 'Krankenhaus', 'Wasserrettung', 'SEG', 'Bereitschaftspolizei'],
    categories_data: ['fw', 'rd', 'pol', 'thw', 'kh', 'wret', 'seg','bepo'],
    categories_data_school: ['fw_school', 'rd_school', 'pol_school', 'thw_school'],
    nofz: "Keine Fahrzeuge vorhanden",
}
I18n.translations.en['lssm']['dashboard'] = {
    name: "Dashboard",
    vehicles: {
        name: "Vehicles",
        type: "Vehicle type",
        available: "Available",
        onsite: "On Site",
        request: "Request",
        transport: "Transport",
    },
    total: "Sum",
    overview: "Overview",
    distribution: "Distribution",
    station_plan: "Station planning",
    loading: "Dashboard is loading",
    ge: 'Buildings',
    school: 'Schools',
    wachen: 'Station',
    other: 'Other',
    anz: 'Amount',
    perwp: 'EMPLOYEE',
    carswp: 'CARS',
    patiwp: 'PATIENTS',
    levwp: 'LEVEL',
    categories: ['Fire Stations', 'Rescue Stations', 'Police Stations', 'Hospitals'],
    categories_data: ['fw', 'rd', 'pol', 'kh'],
    categories_data_school: ['fw_school', 'rd_school', 'pol_school', 'kh_clinic'],
    nofz: "No vehicles found",
}
I18n.translations.nl['lssm']['dashboard'] = {
    name: "Dashboard",
    vehicles: {
        name: "Voertuigen",
        type: "Voertuig type",
        available: "Beschikbaar",
        onsite: "Ter plaatse",
        request: "Spraakaanvraag",
        transport: "Transport",
    },
    total: "Totaal",
    overview: "Overzicht",
    distribution: "Verdeling",
    station_plan: "Gebouwplanning",
    loading: "Dashboard is aan het laden",
    ge: 'Gebouwen',
    school: 'Scholen',
    wachen: 'Kazernes',
    other: 'Overige',
    anz: 'Aantal',
    perwp: 'PERSONEEL',
    carswp: 'VOERTUIGEN',
    patiwp: 'PATIËNTEN',
    levwp: 'LEVEL',
    categories: ['Brandweer', 'Ambulance', 'Politie', 'Ziekenhuis'],
    categories_data: ['fw', 'rd', 'pol', 'kh'],
    categories_data_school: ['fw_school', 'rd_school', 'pol_school'],
    nofz: "Geen voertuigen gevonden",
}
//I18n.locale = 'en';

jQuery.expr[":"].conaintsci = jQuery.expr.createPseudo(function (arg) {
    return function (elem) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});


(function ($, I18n) {
    function loadGraphs() {
        // Building Bar Chart
        let building_amount = {'fw': 0, 'fw_school': 0, 'rd': 0, 'rd_school': 0, 'pol': 0, 'pol_school': 0, 'thw': 0, 'thw_school': 0, 'kh': 0, 'kh_clinic': 0, 'wret': 0, 'seg': 0, 'bepo':0};
        $.each(lssm.buildings, function (key, build) {
            switch (build.building_type) {
                //Feuerwehr
                case BUILDING_TYPE_FEUERWACHE:
                    building_amount.fw += 1;
                    break;
                case BUILDING_TYPE_FEUERWEHRSCHULE:
                    building_amount.fw_school += 1;
                    break;
                    //Rettungsdienst
                case BUILDING_TYPE_NOTARZTHUBSCHRAUBERLANDEPLATZ:
                    //case BUILDING_TYPE_SEG:
                case BUILDING_TYPE_RETTUNGSWACHE:
                    building_amount.rd += 1;
                    break;
                case BUILDING_TYPE_RETTUNGSSCHULE:
                    building_amount.rd_school += 1;
                    break;
                    //Pol
                case BUILDING_TYPE_POLIZEIHUBSCHRAUBERLANDEPLATZ:
                case BUILDING_TYPE_POLIZEIWACHE:
                    building_amount.pol += 1;
                    break;
                case BUILDING_TYPE_POLIZEISCHULE:
                    building_amount.pol_school += 1;
                    break;
                    //THW
                case BUILDING_TYPE_THW:
                    building_amount.thw += 1;
                    break;
                case BUILDING_TYPE_THW_BUNDESSCHULE:
                    building_amount.thw_school += 1;
                    break;
                case BUILDING_TYPE_HOSPITAL:
                    building_amount.kh += 1;
                    break;
                case BUILDING_TYPE_CLINIC:
                    building_amount.kh_clinic += 1;
                    break;
                //Wasserrettung
                case BUILDING_TYPE_WASSERRETTUNG:
                    building_amount.wret += 1;
                    break;
                    //SEG
                case BUILDING_TYPE_SEG:
                    building_amount.seg += 1;
                    break;
                case BUILDING_TYPE_BEREITSCHAFTSPOLIZEI:
                    building_amount.bepo += 1;
                    break;
            }
        });
        data_station = [];
        data_school = [];
        let ds = I18n.t('lssm.dashboard.categories_data');
        for (let i in ds)
        {
            data_station.push(building_amount[ds[i]]);
        }
        ds = I18n.t('lssm.dashboard.categories_data_school');
        for (let i in ds)
        {
            data_school.push(building_amount[ds[i]]);
        }
        $('#buildings_chart').highcharts({
            chart: {type: 'column', backgroundColor: 'rgba(0,0,0,0)', height: '200'},
            colors: ["red", "orange", "green", "blue", "gold", 'black', 'yellow', 'darkgreen'],
            title: {text: I18n.t('lssm.dashboard.ge')},
            xAxis: {categories: I18n.t('lssm.dashboard.categories')},
            yAxis: {title: {text: I18n.t('lssm.dashboard.anz')}},
            legend: {enabled: false},
            series: [{
                    name: I18n.t('lssm.dashboard.wachen'),
                    colorByPoint: true,
                    data: data_station
                },
                {
                    name: I18n.t('lssm.dashboard.school') + '/' + I18n.t('lssm.dashboard.ge'),
                    colorByPoint: true,
                    data: data_school
                }]
        });
        // Car-Donut-Charts
        let cars = [
            {'data': [], 'total': 0},
            {'data': [], 'total': 0},
            {'data': [], 'total': 0},
            {'data': [], 'total': 0},
            {'data': [], 'total': 0}];
        // Go through all cars and put them where they belong
        $.each(lssm.car_list_all(), function (key, veh) {
            let c = ["Undefined", 0];
            if (veh.type in lssm.carsById)
                c = lssm.carsById[veh.type];
            if (c[1] in cars) {
                cars[c[1]].total += 1;
                if (typeof (cars[c[1]].data[veh.type]) !== 'undefined') {
                    cars[c[1]].data[veh.type].y += 1;
                } else {
                    cars[c[1]].data[veh.type] = {name: c[0], y: 1};
                }
            }
        });
        // Remove unused keys
        function gr(k) {
            return (k != "" && k != null);
        }
        let divs = [['#ff-ges', "#ff-fz", ["#701C1C", "#800000", "#A40000", "#B31B1B", "#B22222", "#CC0000", "#CE1620", "#D73B3E", "#E34234", "#CD5C5C", "#FF0000", "#FF0800", "#FF1C00", "#FF5C5C", "#FF6961"]], ["#rd-ges", "#rd-fz", ["#f9690e", "#f9bf3b", "#d35400"]], ["#pol-ges", "#pol-fz", ["#87d37c", "#65c6bb", "#16a085", "#019875", "#36d7b7"]], ["#thw-ges", "#thw-fz", ["#002366", "#191970", "#00008B", "#00009C", "#002FA7", "#0000FF", "#0080FF","#2E64FE", "#5578F7", "#5882FA", "#58ACFA", "#2ECCFA", "#002FA7"]], ["#wret-ges", "#wret-fz", ["#636363", "#848484", "#7C7C7C"]]];
        for (let i = 0; i < 5; i++) {
            cars[i].data = $.grep(cars[i].data, gr);
            if (cars[i].total > 0) {
                $(divs[i][1]).highcharts({
                    chart: {backgroundColor: "rgba(0,0,0,0)", plotBorderWidth: 0, plotShadow: false},
                    title: {text: ''},
                    tooltip: {pointFormat: '<b>{series.name}: <b>{point.y}</b>'},
                    plotOptions: {
                        pie: {
                            dataLabels: {enabled: false},
                            center: ['50%', '50%']
                        }
                    },
                    colors: divs[i][2],
                    series: [{
                            type: 'pie',
                            name: I18n.t('lssm.dashboard.anz'),
                            innerSize: '50%',
                            data: cars[i].data
                        }]
                });
                $(divs[i][0]).html('<h4 style="text-align:center;">' + I18n.t('lssm.dashboard.total') + ': ' + cars[i].total + '</h4>');
            } else
                $(divs[i][1]).html('<div class="alert alert-danger">' + I18n.t('lssm.dashboard.nofz') + '</div>');
        }
    }
    function load_build_planning() {
        $.each(lssm.buildings, function (i, building) {
            let appendto = "son",
                    printcars = "",
                    icon = "fa-building-o",
                    icon3 = "fa-car",
                    maxcars = building.level + 1;

            switch (building.building_type) {
                case BUILDING_TYPE_FEUERWACHE:
                case BUILDING_TYPE_FIRE_BOAT_DOCK:
                    appendto = "fw";
                    break;
                case BUILDING_TYPE_RETTUNGSWACHE:
                    appendto = "rd";
                    icon = "fa-ambulance";
                    break;
                case BUILDING_TYPE_WASSERRETTUNG:
                case BUILDING_TYPE_RESCUE_BOAT_DOCK:
                    appendto = "wret";
                    icon = "fa-ambulance";
                    break;
                case BUILDING_TYPE_HOSPITAL:
                    icon3 = "fa-bed";
                    icon = "fa-hospital-o";
                    maxcars = -(building.level + 10);
                    break;
                case BUILDING_TYPE_CLINIC:
                    icon3 = "fa-bed";
                    icon = "fa-hospital-o";
                    maxcars = -(building.level + 5);
                    break;
                case BUILDING_TYPE_NOTARZTHUBSCHRAUBERLANDEPLATZ:
                    icon = "fa-h-square";
                    appendto = "rd";
                    break;
                case BUILDING_TYPE_LEITSTELLE:
                    icon = "fa-rss";
                    maxcars = 0;
                    break;
                case BUILDING_TYPE_POLIZEIHUBSCHRAUBERLANDEPLATZ:
                    icon = "fa-h-square";
                    appendto = "pol";
                    break;
                case BUILDING_TYPE_SEG:
                    appendto = "rd";
                    icon = "fa-ambulance";
                    maxcars = 9;
                    break;
                case BUILDING_TYPE_POLIZEIWACHE:
                case BUILDING_TYPE_BEREITSCHAFTSPOLIZEI:
                case BUILDING_TYPE_POLIZEISONDEREINHEITEN:
                    icon = "fa fa-balance-scale"
                    appendto = "pol";
                    break;
                case BUILDING_TYPE_THW:
                    appendto = "thw";
                    maxcars = 15;
                    break;
                case BUILDING_TYPE_FEUERWEHRSCHULE:
                case BUILDING_TYPE_RETTUNGSSCHULE:
                case BUILDING_TYPE_POLIZEISCHULE:
                case BUILDING_TYPE_THW_BUNDESSCHULE:
                    maxcars = 0;
                    appendto = "sch";
                    icon = "fa-university";
                    break;
            }
			let vehicles = lssm.car_list(building.id);
            $.each(vehicles, function (k, car) {
                printcars +=
                        '<div id="db_veh_' + car.id + '">' +
                        '<span class="building_list_fms building_list_fms_'+car.fms_real+' lssm-wp-fz--fms">'
                        + car.fms_show +
                        '</span>' +
                        '<a href="/vehicles/' + car.id + '" class="lightbox-open building_list_fms lssm-wp-fz--fms-vehicle">'
                        + car.name +
                        '</a>' +
                        '</div>';
            });
            let bd_data = '\
		      <div class="db_wachen_item" id="db_wache_' + building.id + '">\
			       <div class="panel panel-default">\
				         <div class="panel-heading">\
					            <h3 class="panel-title" style="margin-bottom:5px;"><i class="fa ' + icon + '"></i>\
						                <a href="/buildings/' + building.id + '" class="lightbox-open">' + building.caption + '</a>\
                      </h3>';
            if (building.level != null)
                bd_data +=
                        '<span class="label label-danger">' +
                        '<i class="glyphicon glyphicon-arrow-up"></i>' +
                          I18n.t('lssm.dashboard.levwp') +
                        '<span> ' + building.level + '</span>' +
                        '</span>&nbsp;';

            if (building.personal_count > 0)
                bd_data +=
                        '<span class="label label-default">' +
                        '<i class="glyphicon glyphicon-user"></i> ' +
                        '<span>' + building.personal_count + ' </span>' +
                          I18n.t('lssm.dashboard.perwp') +
                        '</span>&nbsp;';

            if (maxcars > 0)
                bd_data +=
                        '<span class="label label-primary">' +
                        '<i class="glyphicon glyphicon-home"></i> ' +
                        '<span>' + vehicles.length + '/' + maxcars + ' </span>' +
                          I18n.t('lssm.dashboard.carswp') +
                        '</span>';
            else if (maxcars < 0)
                bd_data +=
                    '<span class="label label-primary">' +
                    '<i class="glyphicon glyphicon-home"></i> ' +
                    '<span>' + maxcars*-1 + ' </span>' +
                    I18n.t('lssm.dashboard.patiwp') +
                    '</span>';
            bd_data += '\
                 </div>\
				     <div class="panel-body">\
                <div class="fz-body">\
                  ' + printcars + '\
                </div>\
            </div>\
			</div>\
		</div>';
            $("#wp_" + appendto).append(bd_data);
			delete vehicles;
			
        });
    }
    // Fill vehicle table
    function populate_fzgtable() {
        $("#db_fzg_outer table thead").html("");
        $("#db_fzg_outer table thead").append('<th>' + I18n.t('lssm.dashboard.vehicles.type') + '</th>')
                .append('<th>' + I18n.t('lssm.dashboard.vehicles.available') + '</th>')
                .append('<th>' + I18n.t('lssm.dashboard.vehicles.onsite') + '</th>')
                .append('<th>' + I18n.t('lssm.dashboard.vehicles.request') + '</th>')
                .append('<th>' + I18n.t('lssm.dashboard.vehicles.transport') + '</th>')
                .append('<th>' + I18n.t('lssm.dashboard.total') + '</th>');

        let c_table = $("#db_fzg_outer table tbody")
        c_table.html("");
        let cars = {};
        let total = {'free': 0, 'miss': 0, 'fms5': 0, 'fms6': 0, 'sum': 0};
        $.each(lssm.car_list_all(), function (key, veh) {
            let type = 0
            if (veh.type in lssm.carsById)
                type = lssm.carsById[veh.type][0];
            if (typeof cars[type] == 'undefined') {
                cars[type] = {'free': 0, 'miss': 0, 'fms5': 0, 'fms6': 0, 'sum': 0};
            }
            switch (veh.fms_real) {
                case 3:
                case 4:
                case 7:
                case 8:
                    cars[type].miss += 1;
                    total.miss += 1;
                    break;
                case 5:
                    cars[type].fms5 += 1;
                    total.fms5 += 1;
                    break;
                case 6:
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
        $.each(cars, function (key, val) {
            c_table.append('\
			<tr>\
				<td>' + key + '</td>\
				<td>' + val.free + '</td>\
				<td>' + val.miss + '</td>\
				<td>' + val.fms5 + '</td>\
				<td>' + val.fms6 + '</td>\
				<td>' + val.sum + '</td>\
			</tr>');
        });
        c_table = $("#db_fzg_outer table tfoot");
        c_table.html("");
        c_table.append('\
		<tr style="font-weight:bold">\
			<td>' + I18n.t('lssm.dashboard.total') + '</td>\
			<td>' + total.free + '</td>\
			<td>' + total.miss + '</td>\
			<td>' + total.fms5 + '</td>\
			<td>' + total.fms6 + '</td>\
			<td>' + total.sum + '</td>\
		</tr>');
    }

    // Wechseln der Dashboard-Ansicht
    function switch_dashboard(tab) {
		if (tab == "db_fzg")
			populate_fzgtable();
		else if (tab == "db_wachen")
			load_build_planning();
			
        tab = "#" + tab + "_outer";
        $(curtab_db).fadeOut(500);
        $(tab).fadeIn(500);
        curtab_db = tab;
        if (tab == "#db_wachen_outer") {
            $("#wp_sub").fadeIn(500);
            $("#wp_sub2").fadeIn(500);
        } else {
            $("#wp_sub").fadeOut(500);
            $("#wp_sub2").fadeOut(500);
        }
    }
	
    function switch_wp_tab(tab) {
        tab = "#" + tab.replace("a_", "");
        $(curtab_wp).fadeOut(500);
        $(tab).fadeIn(500);
        curtab_wp = tab;
    }
// Suche nach Wache/Fahrzeug
    let searchby = "wache";
    function wp_suche() {
        let val = $("#wp_search").val(), elements = $("#db_wachen_outer .db_wachen_item");
        if (val.length > 0) {
            if (searchby === "wache") {
                elements.find(".panel-title:not(:conaintsci('" + val + "'))").closest(".db_wachen_item").fadeOut();
                elements.find(".panel-title:conaintsci('" + val + "')").closest(".db_wachen_item").fadeIn();
            } else {
                elements.find(".fz-body:not(:conaintsci('" + val + "'))").closest(".db_wachen_item").fadeOut();
                elements.find(".fz-body:conaintsci('" + val + "')").closest(".db_wachen_item").fadeIn();
            }
        } else {
            elements.fadeIn();
        }
    }
    let prefix = lssm.config.prefix + '_db';
    // Bind dashboard buttons (called after dashboard has been loaded... fuck you jquery...)
    function bind_db_buttons() {
		$("#"+prefix).on('click', '.lightbox-open', function(e){
			e.preventDefault();
			lightboxClose();
			$("lightbox_iframe_"+iframe_lightbox_number).remove();
			setTimeout(function() {
				lightboxOpen(e.target.getAttribute('href'));
			}, 500);
		});
        $("a[id^='wp_a_']").click(function (e) {
            $("#wp_sub>a").removeClass("active");
            $(this).parent().addClass("active");
            switch_wp_tab($(this).attr('id'));
        });
        let db_menu_btns = $("#dashboard_buttons>a, #dasboard_buttons>a");
        db_menu_btns.click(function () {
            db_menu_btns.removeClass("active");
            $(this).addClass("active");
            switch_dashboard($(this).attr('id'));
        });
        $("#wp_search").keyup(wp_suche);
        $("#wp_switch").click(function () {
            if (searchby === "wache") {
                $("#wp_switch").html('<i class="fa fa-car"></i>');
                searchby = "car";
            } else {
                $("#wp_switch").html('<i class="fa fa-building"></i>');
                searchby = "wache";
            }
            wp_suche();
        });
    }
	function closeDashboard()
	{
		$(document).unbind(lssm.hook.postname("lightboxClose"), closeDashboard)
		$("#"+prefix).remove();
	}
    function loadDashboard() {
		$(document).bind(lssm.hook.prename("lightboxClose"), closeDashboard);
		$.get(lssm.getlink("/modules/lss-dashboard/dashboard.html"), function (data) {
			let dom = lssm.modal.show('<div id="' + prefix + '" class="container-fluid"></div>');
			$("#"+prefix).html(data);
			$('#wp_sub').css("display", "none");
			$('#wp_sub2').css("display", "none");
			$('#building-s_outer .panel-heading .panel-title').append('<i class="fa fa-building"></i> ' + I18n.t('lssm.dashboard.overview'));
			$('#fz-s_outer .panel-heading .panel-title').append('<i class="fa fa-car"></i> ' + I18n.t('lssm.dashboard.distribution'));
			$('#dashboard_buttons').append('<a class="btn btn-default" href="#" id="db_main">' + I18n.t('lssm.dashboard.name') + '</a>')
					.append('<a class="btn btn-default" href="#" id="db_fzg">' + I18n.t('lssm.dashboard.vehicles.name') + '</a>')
					.append('<a class="btn btn-default" href="#" id="db_wachen">' + I18n.t('lssm.dashboard.station_plan') + '</a>');

			$('#wp_sub').append('<a class="btn btn-sm btn-default" href="#" id="wp_a_fw">'+I18n.t('lssm.dashboard.categories')[0]+'</a>')
				.append('<a class="btn btn-sm btn-default" href="#" id="wp_a_rd">'+I18n.t('lssm.dashboard.categories')[1]+'</a>')
				.append('<a class="btn btn-sm btn-default" href="#" id="wp_a_pol">'+I18n.t('lssm.dashboard.categories')[2]+'</a>');
			if(I18n.locale == "de")
				$('#wp_sub').append('<a class="btn btn-sm btn-default" href="#" id="wp_a_thw">THW</a>')
					.append('<a class="btn btn-sm btn-default" href="#" id="wp_a_wret">Wasser</a>')
			$("#wp_sub").append('<a class="btn btn-sm btn-default" href="#" id="wp_a_sch">'+I18n.t('lssm.dashboard.school')+'</a>')
				.append('<a class="btn btn-sm btn-default" href="#" id="wp_a_son">'+I18n.t('lssm.dashboard.other')+'</a>');
			curtab_db = "#db_main_outer";
			curtab_wp = "#wp_fw";
			bind_db_buttons();
			loadGraphs();
		});
    }
	
    $('head').append('<script src="https://use.fontawesome.com/12accc0f95.js"></script>');
    let dasboard_button = $('<li><a id="' + prefix + '_activate" href="#"><span class="glyphicon glyphicon-stats"></span> ' + I18n.t('lssm.dashboard.name') + '</a></li>');
    $('#' + lssm.config.prefix + '_menu').append(dasboard_button);
    $('#' + prefix + '_activate').click(function () {
		loadDashboard();
    });

})(jQuery, I18n)
