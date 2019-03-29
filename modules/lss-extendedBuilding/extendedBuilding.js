(function (I18n, $) {
    'use strict';
	
    I18n.translations.de.lssm.extendedBuilding = {
        work: "in Bau",
		needed: "Benötigt",
        personal: "Angestellte",
        extensions: "Ausbauten",
    };
	
    I18n.translations.en.lssm.extendedBuilding = {
        work: "constructing",
		needed: "needed",
        personal: "Employees",
        extensions: "Extensions",
    };
	
    I18n.translations.nö.lssm.extendedBuilding = {
        work: "in aanbouw",
		needed: "nodig",
        personal: "Werknemer",
        extensions: "Extensies",
    };
	
	let ref = window.location.pathname.split('/');
	if(ref.length < 3 || ref[1] != "buildings")
	{
		return;
	}
	let bid = parseInt(ref[2]);
	
	// Bedarf ermitteln
	let bedarf = 0;
	$.each($('#vehicle_table tr td:last-child'), function () {
		bedarf += parseInt($(this).text());
	});
	
	$("dl").append(
	'<dt><strong>' + I18n.t('lssm.extendedBuilding.needed') + ':</strong></dt>' +
	'<dd>' + bedarf + ' ' + I18n.t('lssm.extendedBuilding.personal') + '</dd>'
	);
	
	// Ausbauten ermitteln
	let ausbauten = {};
	$.each($('#ausbauten table tbody tr'), function () {
		let tr = $(this).find("td");
		let name = $.trim(tr.eq(0).children('b').text());
		console.info(tr.eq(0).children('b').text());
		let done = tr.eq(tr.length-1).has('.label').length ? 1 : 0;
		let work = tr.eq(tr.length-1).has('.btn-default').length ? 1 : 0;
		if(ausbauten.hasOwnProperty(name))
		{
			ausbauten[name].has += done;
			ausbauten[name].work += work;
			ausbauten[name].can ++;
		}
		else
			ausbauten[name] = {has: done, work: work, can: 1}
	});
	let first = true;
	for (let name in ausbauten)
	{
		if (first)
		{
			$("dl").append('<dt><strong>' + I18n.t('lssm.extendedBuilding.extensions') + ':</strong></dt>');
			first = false;
		}
		let a = ausbauten[name];
		let color = "bg-danger";
		if(a.has > 0)
			color = "bg-warning";
		if(a.has == a.can)
			color = "bg-success";
		let mu = '<dd><strong class="col-md-3 ' + color + '">' + name + '</strong>';
		if(a.can > 1 || a.work)
			mu += '<span class="col-md-2">';
		if(a.can > 1)
			mu += '' + a.has + ' / ' + a.can + '';
		if(a.work)
			mu += '(' + a.work + ' ' + I18n.t('lssm.extendedBuilding.work') + ')';
		if(a.can > 1 || a.work)
			mu += '</span>';
		mu += "</dd>";
		$("dl").append(mu);
	}
	
	
	
})(I18n, jQuery);
