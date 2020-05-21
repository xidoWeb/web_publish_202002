// resize_01.js
(function($){

	var win = $(window);
	var p   = $('p');
  var widthS = p.children('.width_size');
  var heightS = p.children('.height_size');
  var widthR = p.children('.width_resize');
  var heightR = p.children('.height_resize');

	var boxSize = $('.box_size');

	var winW = win.width();
	var winH = win.height();
	widthS.text(winW + 'px');
	heightS.text(winH + 'px');


	var timed = 500;
	var min1000 = function(){	$('#wrap').stop().animate({'backgroundColor':'#acf'}, timed);	};
  var min800  = function(){	$('#wrap').stop().animate({'backgroundColor':'#fca'}, timed*2);	};
	var max799  = function(){	$('#wrap').stop().animate({'backgroundColor':'#fac'}, timed*3);	};

	if(winW >= 1000){		min1000();	}
	else if(winW >= 800){		min800();	}
	else {		max799();	}


	win.on('resize', function(e){
		e.preventDefault();
		var winRW = win.width();
		// winW = win.width();
		// winH = win.height();
		widthR.text(winRW + 'px');
		// heightR.text(winH + 'px');
		// console.log( winW + ' : ' + winRW );
		if(winW !== winRW){
			// 브라우저의 가로값이 변경되면, 가로값의 상황을 판단하여, 기능 처리되게 만들기 
			boxSize.text('브라우저를 새로고침했어요~.');			
			location.reload();
		}
	});
// --------------------------

	boxSize.width(300);

	console.log('가로값 : ',                             boxSize.width()            );
	console.log('가로값 + padding : ',                   boxSize.innerWidth()       );
	console.log('가로값 + padding + border : ',          boxSize.outerWidth()      );
	console.log('가로값 + padding + border + margin : ', boxSize.outerWidth(true)   );


  console.log('padding-left : ',   parseInt(   boxSize.css('paddingLeft')  )    );
  console.log('padding-right : ',  parseFloat(   boxSize.css('paddingRight')  ) );
  console.log('margin-left : ',    parseInt(   boxSize.css('marginLeft')   )    );
  console.log('margin-right : ',   parseInt(   boxSize.css('marginRight')   )   );
  console.log('border-right-width : ', boxSize.css('borderRightWidth')         );


})(jQuery);