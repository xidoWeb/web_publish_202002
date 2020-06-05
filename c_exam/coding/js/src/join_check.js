(function($){
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
// =========================================================




})(jQuery);