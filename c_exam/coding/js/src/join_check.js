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
var inputCheckList = [ts, tp, tl, ta];

ac.on('click', function(e){
	// e.preventDefault();
	var acAttr = ac.is(':checked');
	if(acAttr){
		// ac.attr({'checked': 'checked'});
		ac.attr({'checked': true});

		ts.attr({'checked':true});
		tp.attr({'checked':true});
		tl.attr({'checked':true});
		ta.attr({'checked':true});

	}else{

		// ac.removeAttr('checked');
		ac.attr({'checked': false});

		ts.attr({'checked': false});
		tp.attr({'checked': false});
		tl.attr({'checked': false});
		ta.attr({'checked': false});
	}
	
	console.log(acAttr);
});


$('input[type="checkbox"]').on('click', function(){
	// console.log( $(this) );
	var nowCk = $(this).is(':checked');
	if(nowCk === false){
		ac.attr({'checked': false});
		// ac.removeAttr({'checked': false});
	}
});	


})(jQuery);