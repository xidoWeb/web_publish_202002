(function($){

	var mouseMv = $('.move_mouse');
	var imgArea = $('.movie_image');
	var mouseMvWidth = mouseMv.outerWidth();
	var imgLen = 105; // 사용이미지 갯수

	for(var i=0; i<imgLen; i++){
		imgArea.append('<img src="../img/introMovie/introMovie_'+ (i + 1) +'.png" alt="배경 인트로이미지 처리">');
	}
	var imgObj = imgArea.find('img');

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
		// console.log( myRel );
		// $('.movie_image').css({left: -myRel / 3 + 'px'});
		
		imgObj.eq(myRel).stop().show();
		imgObj.eq(myRel).siblings().stop().hide();

	});

})(jQuery);