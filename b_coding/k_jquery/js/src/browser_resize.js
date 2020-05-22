(function($){

	var m1 = $('.motion_01');
	var m2 = $('.motion_02');

	var MotionM1 = function(myC){
		var myColor;
		(myC  == undefined) ? myColor = '#078' : 	myColor = myC;
		// var myColor = myC | '#078';
		var j = 0;
		m1.on('mouseenter', function(){
			j++;
			var sel = $(this);
			sel.stop().animate({'backgroundColor':myColor});	
			sel.prepend('<p>'+j+'. 내용이 추가로 담아졌습니다.</p>');
		});
		console.log(myColor);
	};
	
	var deviceName = ["mobile","tablet","laptop","pcfull"];
	var deviceWidth = [
		{ 'size' : 640 ,  'title'  : deviceName[0]},
		{ 'size' : 1280 , 'title'  : deviceName[1]},
		{ 'size' : 1600 , 'title'  : deviceName[2]},
		{ 'size' : 2560 , 'title'  : deviceName[3]}
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

// ------------------------------------------
	var ActiveStyle = function( widthSize ){
		if(widthSize  < deviceWidth[0].size ){			      
			MotionM1();
		}else if( widthSize < deviceWidth[1].size ){			
			MotionM1('#ccc');
		}else if( widthSize < deviceWidth[2].size ){			
			MotionM1('#0fc');
		}else{			                                      
			MotionM1('#ffc');
		}
	};
	var i = deviceName.indexOf(beforeDevice);
	ActiveStyle(deviceWidth[i].size);
// ------------------------------------------
  win.on('resize', function(){
		var nw = win.outerWidth(true);
		afterDevice = DeviceAction(nw);
		if(beforeDevice !== afterDevice){
			// 디바이스 상황에따른 변경내용을 수행
			var i = deviceName.indexOf(afterDevice);
			// console.log(i);
			ActiveStyle(deviceWidth[i].size);
			beforeDevice = afterDevice;
			console.log( 'changed : ' + beforeDevice );
		}
	});
})(jQuery);