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

// console.log( accSt01_dt.length, accSt01_dd.length );

// dt('accSt01_dt')를 클릭시
accSt01_dt.on('click', function(){
	// 이미 열려있는 dd는 접히고,(단, 선택된 순서뒤의 내용이라면 열려있고)
	var thisView =  $(this).next('dd').css('display');

	if( thisView === 'none' ){		accSt01_dd.slideUp(); 	}

	// 선택된 dt 바로 뒤에있는 dd('accSt01_dd')를 나타나게(slideDown) 해라
	$(this).next('dd').slideDown();
}); 



// jquery end =======================
})(jQuery);