(function($){

	var miniP = $('#miniProduct');
	var miniIndi = miniP.find('.indicator');
	var miniIndiLi = miniIndi.find('li').children('a');

	var miniPlist = miniP.find('.product');
	var miniParea = miniPlist.children('ul');
	var timed = 700;


	// miniPlist.css({'overflow':'hidden'});
	
	miniIndi.hide();
/*
  miniIndiLi.on('click', function(e){
		e.preventDefault();

		var i = $(this).parent('li').index();
    var iPer = -i * 100;
		miniParea.stop().animate({'marginLeft': iPer +'%'}, timed);

	});
*/


	var i = 0;
  var MyProSlide = function(){
		i += 1;
		var pLiLen = miniParea.find('li').length;
		if(i >= pLiLen){ i = 0;	}

		var iPer = -i * 100;
		miniParea.stop().animate({'marginLeft': iPer +'%'}, timed);
	};


	setInterval(function(){	
		MyProSlide();
	}, timed*2);


})(jQuery);