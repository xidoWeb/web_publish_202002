(function($){

	var mobileArea = $('#mobileArea');
	var contry = [
		'가나 +233',
		'가봉 +241',
		'가이아나 +592',
		'감비아 +220',
		'과테말라 +502',
		'괌 +1671',
		'대한민국 +82',
		'그레나다 +1473',
		'그리스 +30',
		'기니 +224'
	];

	var contryText = '<option></option>';
	var valueResult;	

	// console.log( contry[0].split('+')[1]);
	var koreaSelect = contry.indexOf('대한민국 +82');

	for(var i=0; i < contry.length; i++ ){
		mobileArea.append(contryText);
		mobileArea.find('option').eq(i).text(contry[i]);
		valueResult = contry[i].split('+')[1];
		mobileArea.find('option').eq(i).attr({value : valueResult});
	}
	mobileArea.find('option').eq(koreaSelect).attr({selected:'selected'});

	// var date = new Date();
	// console.log(date);

})(jQuery);