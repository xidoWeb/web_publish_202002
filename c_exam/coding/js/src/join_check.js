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
/*
	var termsService;
	$.ajax({
		url:'../terms/termsService.txt',
		dataType:'txtv',	async:false,
		success: function(data){
			termsService = data;
			return termsService;
		}
	});
	
	ts.append(termsService);
*/
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

var EachCk = function(){
	var nowState;
	for(var i=0; i< inputCheckList.length;  i++){
		var hasCheck = inputCheckList[i].hasClass('check') == false;
		if(hasCheck){	nowState = false; break; }else{	nowState = true; }
	}
	return nowState;
}

$.each(inputCheckList, function(){
	$(this).on('click', function(e){
		var thisIt = $(this);
		var nowCk = thisIt.is(':checked');
		
		if(nowCk === false){
			thisIt.attr({'checked':false});
			thisIt.removeClass('check');
		}else{
			thisIt.attr({'checked':true});
			thisIt.addClass('check');
			allState = false;
		}	

		allCk = EachCk();
		AllCk(allCk);
		
});	
});

})(jQuery);
