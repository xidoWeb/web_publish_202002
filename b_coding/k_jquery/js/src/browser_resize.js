(function($){


	var m1 = $('.motion_01');
	var m2 = $('.motion_02');

	var MotionM1 = function(){
		m1.on('mouseenter', function(){
			$(this).animate({'backgroundColor':'#078'});
			$(this).append('<p>내용이 추가로 담아졌습니다.</p>');
		});
	};
	
	var deviceWidth = [
		{ 'size' : 640 ,  'title'  : "mobile"},
		{ 'size' : 1280 , 'title'  : "tablet"},
		{ 'size' : 1600 , 'title'  : "laptop"},
		{ 'size' : 2560 , 'title'  : "pcfull"}
	];

	var win = $(window);
	var ww  = win.outerWidth(true);
	var beforeDevice, afterDevice;

	var DeviceAction = function( widthSize ){
		var nowDevice;
		if(widthSize  < deviceWidth[0].size ){
			nowDevice = deviceWidth[0].title;
		}else if( widthSize < deviceWidth[1].size ){
			nowDevice  = deviceWidth[1].title;
		}else if( widthSize < deviceWidth[2].size ){
			nowDevice  = deviceWidth[2].title;
		}else{
			nowDevice  = deviceWidth[3].title;
		}
		return  nowDevice;
	};
	beforeDevice = DeviceAction(ww);
	// console.log( '1. ' + beforeDevice + '---' );






	win.on('resize', function(){
		var nw = win.outerWidth(true);
		afterDevice = DeviceAction(nw);
		if(beforeDevice !== afterDevice){
			// 디바이스 상황에따른 변경내용을 수행

			beforeDevice = afterDevice;
		}
	});

})(jQuery);