(function($){

	var mouseMv = $('.move_mouse');
	var imgArea = $('.movie_image');
	var mouseMvWidth = mouseMv.outerWidth();
	var imgLen = 105; // 사용이미지 갯수

	for(var i=0; i<imgLen; i++){
		imgArea.append('<img src="../img/introMovie/introMovie_'+ (i + 1) +'.png" alt="배경 인트로이미지 처리">');
	}
	var imgObj = imgArea.find('img');
/* 
//001- 마우스 움직였을경우에 이미지변경되게 만들기 
	mouseMv.on('mousemove', function(e){
		// 마우스 좌표 파악하는 기능 
		// offsetX | offsetY : 선택영역기준
		// pageX   | pageY   : 브라우저기준(document)
		// clientX | clientY : 브라우저기준(자체)
		// screenX | screenY : 모니터화면 

		// console.log( e.originalEvent.offsetX );
		// %재는 방법 : 값 / 기준 * 100 -> 마우스위치 / mouseMvWidth * 105
		var mvRel = e.originalEvent.offsetX;
		var myRel = parseInt(mvRel / mouseMvWidth * imgLen);

		imgObj.eq(myRel).stop().show();
		imgObj.eq(myRel).siblings().stop().hide();
	});
*/

// 002 - 스크롤 이동시 이미지 변경되게 만들기
$(window).on('scroll', function(e){
	var offsetTop = $(this).scrollTop();
	var myScroll = parseInt( offsetTop / ($('#wrap').outerHeight( )/2) *  imgLen );

	// console.log( myScroll );
	if( myScroll < imgLen ){
		imgObj.eq(myScroll).stop().show();
		imgObj.eq(myScroll).siblings().stop().hide();
	}else{
		imgArea.stop().animate({top:(-myScroll + imgLen)+ 'rem'});
	}
});	



})(jQuery);