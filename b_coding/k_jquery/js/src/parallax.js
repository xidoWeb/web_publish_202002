// parallax.js
(function($){

	var win = $(window);
	var winW = win.innerWidth();
	var introBox = $('#introBox');
	var introDiv = introBox.children('div');

	if(winW < 640){
		introDiv.remove();
	}

	win.on('resize', function(){
		winW = win.innerWidth();
		(winW < 640) ? introBox.children('div').remove() : location.reload();
	});

	// -----------------------------------
	win.on('scroll', function(e){
		e.preventDefault();
		var winTop = win.scrollTop();
		console.log(winTop);
		introDiv.eq(0).css({backgroundPositionY:winTop/16*16});
		introDiv.eq(1).css({backgroundPositionY:winTop/16*14});
		introDiv.eq(2).css({backgroundPositionY:winTop/16*13});
		introDiv.eq(3).css({backgroundPositionY:winTop/16*11});
		introDiv.eq(4).css({backgroundPositionY:winTop/16*9});
		introDiv.eq(5).css({backgroundPositionY:winTop/16*7});
		introDiv.eq(6).css({backgroundPositionY:winTop/16*5});
		introDiv.eq(7).css({backgroundPositionY:winTop/16*3});
		introDiv.eq(8).css({backgroundPositionY:winTop/16*0});
	});



})(jQuery);