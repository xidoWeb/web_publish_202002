(function($){
	var ac = $('#allCheck');
	var ts = $('#termsService');
	var tp = $('#termsPrivacy');
	var tl = $('#termsLocation');
	var ta = $('#termsAlert');

	var tsTerms = ts.nextAll('.terms').eq(0);
	var tpTerms = tp.nextAll('.terms').eq(0);
	var tlTerms = tl.nextAll('.terms').eq(0);
	var taTerms = ta.nextAll('.terms').eq(0);

	tsTerms.load('../terms/termsService.html');
	tpTerms.load('../terms/termsPrivacy.txt');
	tlTerms.load('../terms/termsLocation.txt');
	taTerms.load('../terms/termsAlert.txt');
// =======================================================
var inputCk = $('input[type="checkbox"]');
var inputCheckList = [ts, tp, tl, ta];


// 전체 동의 체크 사항 ---------------------------------
ac.on('click', function(e){
	var acAttr = ac.is(':checked');
	AllCk(acAttr);

	if(acAttr){
		inputCk.addClass('check');
		inputCk.attr({'checked': true});
	}else{
		inputCk.removeClass('check');
		inputCk.attr({'checked': false});
	}	
});
// -----------------------------------------------------

var allState;
var AllCk = function(state){
	if(state === true){
		ac.attr({'checked':true});
		ac.addClass('check');
	}else {
		ac.attr({'checked': false});
		ac.removeClass('check');
	}
};

// 각각의 상태 파악 ----------------------------------------
var EachCk = function(){
	var nowState;
	for(var i=0; i< inputCheckList.length;  i++){
		var hasCheck = inputCheckList[i].hasClass('check') == false;
		if(hasCheck){	nowState = false; break; }else{	nowState = true; }
	}
	return nowState;
}
// -------------------------------------------------------
// 각각의 요소 클릭 ----------------------------------------

// $.each() : 선택자 여러개를 각각 수행하게 만들기위한 jQuery 반복수행구문(for와 유사)
// $('input[type="checkbox"]').not('#allCheck').on('click' ...)

$.each(inputCheckList, function(data){
	$(this).on('click', function(e){
		var thisIt = $(this);
		var nowCk = thisIt.is(':checked');
		
		// 선택요소에 대해 체크상태 파악
		if(nowCk === false){
			thisIt.attr({'checked':false});
			thisIt.removeClass('check');
		}else{
			thisIt.attr({'checked':true});
			thisIt.addClass('check');
			
			allState = false;
		}	
	// 각각 상태 파악, 
	 allCk = EachCk();
	// 하나라도 false처리되면 false를 반환하여, 전체 해제
	// true를 반환시 전체체크 
		AllCk(allCk);
	});	
});

// ---------------------------------------------------------
// 확인버튼 클릭시 체크사항
$('[type="submit"]').on('click', function(e){
	e.preventDefault();

	var tsSt,tpSt, sendCk = true;
	var reqInput = [ts, tp];

/* 
// 1
	( ts.hasClass('check') ) ? tsSt=true : tsSt = false ;
	( tp.hasClass('check') ) ? tpSt=true : tpSt = false ;
	(tsSt === true && tpSt === true) ? sendCk = true : sendCk = false;
*/

/* 
// 2
	for(var i=0; i < reqInput.length; i++){
		if( reqInput[i].hasClass('check') === false){
			sendCk = false;
			break;
		}
	}
*/
// 3
	$.each(reqInput, function(data){
		if($(this).hasClass('check') === false){
			sendCk = false;
		}
	});

	// console.log(sendCk);
	if(!sendCk){
		$('p.error').remove();
		$('.send_cancle').before('<p class="error">네이버 이용약관과 <br /> 개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.</p>');
	}else{
		// 문제없이 체크시 페이지로 이동
		// 필수/선택요소 내용정의후
		var tlSt = 'termsLocation='+tl.hasClass('check') + '_&&_termsAlert=' + tp.hasClass('check');
		location = './join.html?'+ tlSt;
	}

});



})(jQuery);
