// jq_rel_display.js

(function($){
// jquery start =======================
 var st01 = $('.style_01');
 var st01Li = st01.find('li');

 var con  = $('.content');
 var conLi = con.find('div');

 st01Li.eq(0).addClass('action');

 st01Li.on('click', function(e){
	e.preventDefault();
	$(this).addClass('action');
	$(this).siblings().removeClass('action');
	
	var i = $(this).index();
	// conLi.hide();
	conLi.eq(i).siblings().stop().hide();
	conLi.eq(i).stop().fadeIn();
 });


// jquery end =======================
})(jQuery);