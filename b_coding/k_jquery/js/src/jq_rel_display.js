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
// **********************************************
var accMenu = $('.accordion_menu');
var accSt01 = accMenu.children('.acc_style_01');
var accSt01_dt = accSt01.find('dt');
var accSt01_dd = accSt01.find('dd');

accSt01_dt.find('button').on('click', function(e){
	e.preventDefault();
	var dtPar = $(this).parent('dt');
	var thisPar = dtPar.next('dd');
	var thisView =  thisPar.css('display') == 'none';

	if( thisView ){		
		accSt01_dd.stop().slideUp(); 	
		thisPar.stop().slideDown();
		dtPar.addClass('action');
		dtPar.siblings('dt').removeClass('action'); 	
	}else{
		accSt01_dd.stop().slideUp(); 	
		accSt01_dt.removeClass('action');
	}
}); 

// ======================================
// 아코디언메뉴 html 구조를 이용한 탭메뉴 만들기

var moreBtn = $('.more_style').find('dt').children('button');

moreBtn.on('click', function(e){
	e.preventDefault();

	var thisDt = $(this).parent('dt');
	var dtNextView = thisDt.next('dd').css('display') === 'none';

	if( dtNextView ){
		$('.more_style').find('dd').hide();
		thisDt.next('dd').fadeIn();

		thisDt.siblings('dt').removeClass('action');
		thisDt.addClass('action');
	}
});






// jquery end =======================
})(jQuery);