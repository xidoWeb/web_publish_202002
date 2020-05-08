// jq_eventBasic.js

(function($){

	var css = $('.css');
	var ani = $('.animate');

	css.css({ 'width':'50rem', 'backgroundColor':'#145' , 'color':'#fff',
					'transition':'all 1000ms ease-in'});
	ani.animate({'width':'50rem','backgroundColor':'#541','color':'#fff'}, 1000, 'easeInSine', function(){
	ani.animate({'width': '10rem', 'backgroundColor':'#111'}, 700, function(){
		css.animate({'width':'10rem', 'height':'20rem', 'backgroundColor':'#333'});
		ani.animate({'width':'10rem', 'height':'20rem', 'backgroundColor':'#fa0'});
	});
	});

	// https://easings.net/
	// jQuery 문서에서는 시간의 흐름을 가지고 있는 기능은 콜백 함수의 기능을 가질 수 있다.

	// --------------------------------------------------------------------------------
	/**
	 * 이벤트: 기존형식에서 무언가 변화가 일어는 형태
	 * 기능 :
	 *    마우스올렸을경우, 마우스를 벗어났을경우, 클릭, 마우스를 움직일경우
	 *    키보드 키를 누르는 경우
	 *    브라우저 스크롤바 움직이는경우
	 *    브라우저의 화면 크기가 변경되는경우
	 * 원소유 :
	 *    a 요소 - 클릭시 이동처리되는 형태
	 *    button 요소 - 클릭시 자료를 전송/취소 ... 
	 */


	var evt_01 = $('.evt_01');
	var evt_02 = $('.evt_02');

// 선택자.on([이벤트기능], function(){});

evt_01.on('dblclick', function(){
  evt_01.animate({'width':'30rem','backgroundColor':'#fa7','fontSize':'2rem'}, 1000);
});
 
evt_02.on('focus', function(){
	evt_02.css({'backgroundColor':'#fc0'});
});

evt_02.on('blur', function(){
	evt_02.css({'backgroundColor':'#ddd'});
});

evt_02.on('keyup', function(event){
	// console.log( event.key  , event.keyCode );
	 var key = event.keyCode;
	 evt_01.text(event.key + ' : ' + key);
	 
	switch(key){
		case 38:
			evt_02.css({'backgroundColor':'#35f'});
			break;
		case 39:
			evt_02.css({'backgroundColor':'#f53'});
			break;
		case 40:
			evt_02.css({'backgroundColor':'#f07'});
			break;
		default:
			evt_02.css({'backgroundColor':'#ffa'});
	}
});

})(jQuery);
