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

	var userId = $('#userId');
	userId.on('blur', function(e){
		e.preventDefault();

		var val = $(this).val();
		console.log( val );

	});


	var date = new Date();
	// console.log( date );
	var yy = date.getFullYear();
	var mm = date.getMonth() + 1;
	var dd = date.getDate();
	// console.log( dd );
	
	// var obj = new Object();
	var obj = {};
	obj.one = 'apple';
	obj.two = 'grape';	
	// console.log(obj);
	
	// var arr = new Array();
	var arr = [];
	arr[0] = '001';
	arr[1] = 'remote';
	arr[2] = 'mouse';	
	// console.log(arr);

	// var exp = new RegExp("^abc");
	var exp = /^abc/;
	// console.log(exp);


	var myRe = /d(b+)d/g;
	var myArray = myRe.exec("cdbbdbsbz");
	// console.log( myArray );
	$('#userOtherMail').on('blur', function(){
		var thisMail = $(this).val();
		var ck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		var test = ck.test( thisMail );
		console.log

	});


	$('#mobileNumber').on('blur', function(){

		var ck = /^01.{1}\d{3,4}\d{4}$/;
		var thisNum = ck.test( $(this).val()  );
		console.log( thisNum );

	});




})(jQuery);