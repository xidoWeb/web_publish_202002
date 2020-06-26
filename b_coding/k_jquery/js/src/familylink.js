(function($){

	var dd = $('dd');
	dd.hide();

	var select = $('#linkpage');
	select.on('change', function(e){
		e.preventDefault();
		var val = $(this).val();
		// console.log(val);
		window.location = val;
	});

	// ---------------------------------------
	var t2 = $('.type_02');
	var t2Dt = t2.find('dt');

	t2Dt.on('click', function(e){
		t2.find('dd').show();
	});

	// ----------------------------------------
	var t3   = $('.type_03');
	var t3Dt = t3.find('dt');
	var t3Dd = t3.find('dd');
	var go   = $('.page_go').find('a');

	t3Dt.on('click', function(e){
		e.preventDefault();
		t3Dd.stop().slideToggle(100);
	});

	t3Dd.find('button').on('click', function(e){
		e.preventDefault();
		var dataHref = $(this).attr('data-href');
		var dataLink = $(this).attr('data-link');
		t3Dd.stop().slideToggle(100);
		
		go.attr({'href':dataHref, 'target':'_blank', 'aria-valuetext':dataLink});
		go.focus();		
	});


})(jQuery);