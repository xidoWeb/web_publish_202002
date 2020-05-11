// jq_display.js

(function($){

	var dpBox = $('.display_box');
	var btn = $('.btn').children('button');
	// console.log( btn.length );

	dpBox.css({ 'display' : 'none' });

	
	// display:block
	btn.eq(0).on('click' ,function(e){
		e.preventDefault();
		dpBox.css({'display' : 'block'});
	});

	// display:none
	btn.eq(1).on('click', function(e){
		e.preventDefault();
		dpBox.css({'display' : 'none'});
	});

	// display:my-toggle
	btn.eq(2).on('click', function(e){
		e.preventDefault();
		var dpV = dpBox.css('display');
		
		if(dpV === 'block'){
			dpBox.css({'display':'none'});
		}else{
			dpBox.css({'display':'block'});
		}
	});

})(jQuery);