// resize_02.js
(function($){

	// 디바이스 환경
	var winW = win.width();
	// --------------------------------
	// 디바이스 사이즈 체크
	if(winW <= 700){
		mob700();
	}else if(winW <= 1400){
		tablet1400();
	}else{
		pcFull();
	}

	// --------------------------------
	win.on('resize', function(){
		var nowWinW = win.width();
		var deviceWidthCheck = winW !== nowWinW;
		if(deviceWidthCheck){
			location.reload();
			// window.location.reload();
		}
	});

})(jQuery);
