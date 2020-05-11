// jq_rel_display.js

(function($){
// jquery start =======================
 var st01 = $('.style_01');
 var st01Li = st01.find('li');
 var con  = $('.content');
 var conLi = con.find('div');

 st01Li.eq(0).addClass('action');

 st01Li.children('button').on('click focus', function(e){
	e.preventDefault();

	var myThis = $(this).parent('li');
	var i = myThis.index();
	var conLiEq = conLi.eq(i);

	myThis.addClass('action');
	myThis.siblings().removeClass('action');	

	conLiEq.siblings().stop().hide();
	conLiEq.stop().fadeIn();
 });


// jquery end =======================
})(jQuery);