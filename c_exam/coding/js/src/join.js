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

		var rel = $(this).val();
		// var ck  = /^([a-z0-9]|[-_])*([a-z0-9]|[*-_]){5,20}$/i; 

		// 영문(대/소), 숫자, 특수(-_)글자 5~20글자
		var ck  = /^([a-z0-9]|[-_]){5,20}$/i; 
		var relTest = ck.test( rel );
		var dl  =  $(this).parents('dl');
		var conT   = $(this).parents('dd').eq(0).next('.confirm_text');

		if(rel == ""){
			dl.addClass('error');
			dl.removeClass('success');
			conT.text('id는 반드시 입력해야합니다.');
		}else if( !relTest ){
			dl.addClass('error');
			dl.removeClass('success');
			conT.text('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
		}else{
			dl.addClass('success');
			dl.removeClass('error');
			conT.text('좋은 id입니다. 사용하셔도 좋습니다.');
		}

	});

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