// jq_eq_index_setInterval.js
(function($){

	var indi = $('.indicator');
	var indiLi = indi.find('li');
	var indiLink = indiLi.children('a');
	var addView  = $('.add_view_wrap');
	var addViewList = addView.children('div');
	var timed    = 500;

	var indiNarr = $('.indi_narr');
	var indiNarrLi = indiNarr.find('li');

  var AdViewMv = function(i){
		var myPer = -i * 100;
		// --------------
		addView.stop().animate({'marginLeft':myPer + '%'}, timed);
		// --------------
		indiLi.removeClass('action');
		indiLi.eq(i).addClass('action');
		// --------------
		indiNarrLi.removeClass('action');
		indiNarrLi.eq(i).addClass('action');
	};

	var i = 0;

	indiLink.on('focus', function(e){
		e.preventDefault();
		i = $(this).parent('li').index();
		AdViewMv(i);
	});
// ===============================================================

	indiNarrLi.on('click', function(e){
		e.preventDefault();
		i = $(this).index();
		AdViewMv(i);
	});

	setInterval( function(){
		i+=1;
		if(i >= addViewList.length){ i = 0	}	

		AdViewMv(i);
	}, timed*4 );

})(jQuery);


