(function($){
	
	var win = $(window);
	var winH = win.innerHeight();
	var page = $('.page');

	$('#wrap').css({height:'auto'});
	page.css({height:winH});


	var n = 0;
	var mvTrue = true;

	// console.log(page.length);

	win.on('mousewheel DOMMouseScroll', function(e){
		// e.preventDefault();
	// e.bubbles()
	  e.bubbles == false;

		var evt = e.originalEvent;

		var result;
		( evt.wheelDelta ) ? result = -evt.wheelDelta  :  result = evt.detail * 40 ;
		// console.log(evt);
		
		if(mvTrue){
		mvTrue = false;			
			( result > 0 ) ? n += 1 :	n -= 1;

			if( n >= page.length ){
				n = page.length;
			}else if(n < 0){
				n = 0;
			}			
			console.log(n);
			$('#wrap').animate({top: -winH * n}, function(){
				mvTrue = true;		
			});
		}
	});



})(jQuery);