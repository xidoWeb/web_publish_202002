// resize_02.js
(function($){
	// 선택자
	var win = $(Window);
	var headBox = $('#headBox');
	var gnbBox  = $('#gnb');
	var gnbMenu = $('#gnbBox');
	var gnbBtn  = gnbMenu.find('.gnb_view_btn');
	var gnbList = gnbMenu.find('.gnb_list');

	// 디바이스 환경
	var winW = win.width();

	var mob700 = function(){	    };
	var tablet1400 = function(){	};
	var pcFull  = function(){    	};

	win.on('resize', function(){
		var nowWinW = win.width();
		var deviceWidthCheck = winW !== nowWinW;
		if(deviceWidthCheck){
			location.reload();
		}
	});




})(jQuery)