// landing.js
(function($){

	var ft = $('.fixed_text').find('span');
	var part = [];
	    part[0] = $('.part_01');
	    part[1] = $('.part_02');
	    part[2] = $('.part_03');
	    part[3] = $('.part_04');
	    part[4] = $('.part_05');
	var partOffset = [];

	var i=0;
	for(; i < part.length; i += 1){
		partOffset[i] = part[i].offset().top;
	}

	part[0].css({backgroundImage: 'linear-gradient(30deg, #acf, #afc)'});

	var thisTop = $(window).scrollTop();
	ft.text(thisTop);

	var win = $(window);

	var ViewSet = function(n){
		if(thisTop < partOffset[n]){
			// part[n].siblings().find('h2').hide();
			part[n].find('h2').fadeIn();
		}
	};
	ViewSet(0);

	win.on('scroll', function(e){
		thisTop = $(this).scrollTop() - 500;
		ft.text(thisTop);
		var j=0;
		for(; j < partOffset.length; j++ ){	ViewSet(j);	}
	});

})(jQuery);