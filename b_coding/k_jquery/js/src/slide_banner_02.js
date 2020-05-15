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
// *****************************************************

var miniP2 = $('#miniProduct2');
var miniBtn = miniP2.find('.btn');
var miniNext = miniBtn.children('.next');
var miniPrev = miniBtn.children('.prev');

var miniBanner = miniP2.children('.product').find('ul');
var miniBanLast = miniBanner.find('li').eq(-1).clone(true);
    miniBanner.prepend(miniBanLast);
var miniBan2Len = miniBanner.children('li').length;
		miniBanner.css({'width' : miniBan2Len * 100 + '%'});
		miniBanner.children('li').css({'width': 100 / miniBan2Len + '%'});
    miniBanner.css({position:'relative', 'left': -100 + '%'});

var n = 0;

miniNext.on('click', function(e){
	e.preventDefault();
	n += 1;
	miniBanner.stop().animate({'marginLeft':n * -100 + '%'}, timed, function(){
		if( n >= miniBan2Len - 2 ){ 
			n = -1; 
			miniBanner.css({'marginLeft':100 + '%'})
		}
	});
});


miniPrev.on('click', function(e){
	e.preventDefault();
	n -= 1;
	miniBanner.stop().animate({'marginLeft':n * -100 + '%'}, timed, function(){
		if(n < 0){ n= miniBan2Len - 2; }
		miniBanner.css({'marginLeft':n * -100 + '%'})
	});
});

var myInterval;
var MvSlide = function(){
	    myInterval =	setInterval(function(){	miniNext.trigger('click');}, timed*2);
	};

		MvSlide();

miniP2.on('mouseenter', function(){
	clearInterval( myInterval );
});

miniP2.on('mouseleave', function(){
	MvSlide();
});

})(jQuery);