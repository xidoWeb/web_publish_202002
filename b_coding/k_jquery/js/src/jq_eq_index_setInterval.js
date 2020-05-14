// jq_eq_index_setInterval.js
(function($){

	var indi = $('.indicator');
	var indiLi = indi.find('li');
	var indiLink = indiLi.children('a');
	var addView  = $('.add_view_wrap');
	var timed    = 500;

	indiLink.on('focus', function(e){
		e.preventDefault();
		var i = $(this).parent('li').index();
		// console.log(i);
		var myPer = -i * 100;

		// addView.css({'marginLeft':myPer + '%'});
		addView.stop().animate({'marginLeft':myPer + '%'}, timed);
	});


})(jQuery);