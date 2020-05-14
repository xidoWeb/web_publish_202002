// jq_eq_index_setInterval.js
(function($){

	var indi = $('.indicator');
	var indiLi = indi.find('li');
	var indiLink = indiLi.children('a');
	var addView  = $('.add_view_wrap');
	var timed    = 500;

	var indiNarr = $('.indi_narr');
	var indiNarrLi = indiNarr.find('li');

	indiLink.on('focus', function(e){
		e.preventDefault();
		var i = $(this).parent('li').index();
		// console.log(i);
		var myPer = -i * 100;
		// addView.css({'marginLeft':myPer + '%'});
		addView.stop().animate({'marginLeft':myPer + '%'}, timed);
// ----------------------------------------------------------
		// $(this).parent('li').addClass('action');
		indiLi.removeClass('action');
		indiLi.eq(i).addClass('action');
		// indiLi.eq(i).siblings('li').addClass('action');
// ----------------------------------------------------------
		indiNarrLi.removeClass('action');
		indiNarrLi.eq(i).addClass('action');
		// indiNarrLi.eq(i).siblings().removeClass('action');
	});
// ===============================================================

	indiNarrLi.on('click', function(e){
		e.preventDefault();
		var i = $(this).index();
		indiNarrLi.removeClass('action');
		indiNarrLi.eq(i).addClass('action');
		// indiNarrLi.eq(i).siblings().removeClass('action');
// ----------------------------------------------------------
		// $(this).parent('li').addClass('action');
		indiLi.removeClass('action');
		indiLi.eq(i).addClass('action');
		// indiLi.eq(i).siblings('li').addClass('action');
// ----------------------------------------------------------
		var myPer = -i * 100;
		// addView.css({'marginLeft':myPer + '%'});
		addView.stop().animate({'marginLeft':myPer + '%'}, timed);
	});

})(jQuery);