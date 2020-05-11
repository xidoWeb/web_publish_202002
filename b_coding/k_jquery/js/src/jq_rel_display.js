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

// dt('accSt01_dt')를 클릭시(버튼을 클릭하는 것으로 설정/focus처리)
accSt01_dt.find('button').on('click focus', function(){
	// 이미 열려있는 dd는 접히고,(단, 선택된 순서뒤의 내용이라면 열려있고)
	var thisView =  $(this).parent('dt').next('dd').css('display');

	if( thisView === 'none' ){		accSt01_dd.stop().slideUp(); 	}

	// 선택된 dt 바로 뒤에있는 dd('accSt01_dd')를 나타나게(slideDown) 해라
	$(this).parent('dt').next('dd').stop().slideDown();
}); 

// 몇가지 문제점 정리....
// 1. slide 처리시 toggle이 중복현상
// 2. focus 처리시 색상처리
// 3. 변수 정리

// jquery end =======================
})(jQuery);