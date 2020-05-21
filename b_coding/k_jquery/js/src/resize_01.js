// resize_01.js
(function($){

	var win = $(window);
	var p   = $('p');
  var widthS = p.children('.width_size');
  var heightS = p.children('.height_size');
  var widthR = p.children('.width_resize');
  var heightR = p.children('.height_resize');

	var winW = win.width();
	var winH = win.height();
	widthS.text(winW + 'px');
	heightS.text(winH + 'px');


	var timed = 500;
	var min1000 = function(){
		$('#wrap').stop().animate({'backgroundColor':'#acf'}, timed);
	};
  var min800  = function(){
		$('#wrap').stop().animate({'backgroundColor':'#fca'}, timed*2);
	};
	var max799  = function(){
		$('#wrap').stop().animate({'backgroundColor':'#fac'}, timed*3);
	};

	win.on('resize', function(e){
		e.preventDefault();
		winW = win.width();
		winH = win.height();
		widthR.text(winW + 'px');
		heightR.text(winH + 'px');

		if(winW >= 1000){
			min1000();
		}else if(winW >= 800){
			min800();
		}else {
			max799();
		}


	});

})(jQuery);