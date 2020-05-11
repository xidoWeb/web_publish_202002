// jq_rel_display.js

(function($){
// jquery start =======================
 var st01 = $('.style_01');
 var st01Li = st01.find('li');

 var con  = $('.content');
 var conLi = con.find('div');

//  st01Li.eq(0).addClass('action');

 var liBg = st01Li.eq(0).css('backgroundColor');
	var c01 = conLi.eq(0).css('backgroundColor');
	st01Li.eq(0).css({'backgroundColor':c01});

 st01Li.on('click', function(e){
	e.preventDefault();
	// $(this).addClass('action');
	// $(this).siblings().removeClass('action');	
	
	var i = $(this).index();
	// conLi.hide();
	conLi.eq(i).siblings().stop().hide();
	conLi.eq(i).stop().fadeIn();

	var conCol = conLi.eq(i).css('backgroundColor');
	$(this).siblings().css({'backgroundColor':liBg});
	$(this).css({'backgroundColor':conCol});

 });


// jquery end =======================
})(jQuery);