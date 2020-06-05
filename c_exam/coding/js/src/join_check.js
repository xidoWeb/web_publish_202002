(function($){
	var ts = $('#termsService').nextAll('.terms').eq(0);
/*
	var termsService;
	$.ajax({
		url:'../terms/termsService.html',
		dataType:'html',	async:false,
		success: function(data){
			termsService = data;
			return termsService;
		}
	});
	
	ts.append(termsService);
*/
ts.load('../terms/termsService.html');

})(jQuery);