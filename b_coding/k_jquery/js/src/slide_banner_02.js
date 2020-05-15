(function($){

	var miniP = $('#miniProduct');
	var miniIndi = miniP.find('.indicator');
	var miniIndiLi = miniIndi.find('li').children('a');

	var miniPlist = miniP.find('.product');
	var miniParea = miniPlist.children('ul');
	var timed = 700;

	miniPlist.css({'overflow':'hidden'});
	miniIndi.hide();
/*
  miniIndiLi.on('click', function(e){
		e.preventDefault();

		var i = $(this).parent('li').index();
    var iPer = -i * 100;
		miniParea.stop().animate({'marginLeft': iPer +'%'}, timed);

	});
*/

var miniPareaLi = miniParea.find('li');
var miniPliCopy = miniPareaLi.eq(-1).clone(true);

miniParea.prepend(miniPliCopy);
miniPareaLi = miniParea.find('li');
var mLilenT = miniPareaLi.length;

miniParea.css({'width': mLilenT * 100 + '%','position':'relative','left':-100 + '%'	});
miniPareaLi.css({width: 100 / mLilenT + '%' });

	var i = 0;
  var MyProSlide = function(){
		i += 1;
		// if( i >= (mLilenT-1) ){ i = -1;	}
		var iPer = -i * 100;
		miniParea.stop().animate({'marginLeft': iPer +'%'}, timed, function(){
			if( i >= mLilenT-2 ){	miniParea.css({'marginLeft': 100 + '%'});	i = -1;	}
		});
	};

	setInterval(function(){	MyProSlide();	}, timed*2);

})(jQuery);