// zoom.js
(function($){
	var url        = '../img/gallery/';
	var galleryImg = {
		"big"     : ['gallery_01.jpg', 'gallery_02.jpg', 'gallery_03.jpg','gallery_04.jpg'],
		"thum"    : ['gallery_01.jpg', 'gallery_02.jpg', 'gallery_03.jpg','gallery_04.jpg'],
		"thumAlt" : ['gallery_01 설명', 'gallery_02 설명', 'gallery_03 설명','gallery_04 설명']
	};

	var product = $('.product');
	var big     = product.find('.big');
	var thum    = product.find('.thum');
	var zoom    = product.find('.zoom');
	var zoom2    = product.find('.zoom2');

	thum.append('<ul></ul>');
	var thumUl = thum.find('ul');
	var i=0; 
	var thumLength = galleryImg.thum.length;
	console.log( thumLength );

	for(; i<thumLength; i++){
		thumUl.append('<li><a href="#"><span></span></a></li>');
		thumUl.find('li').eq(i).children('a').css({
			backgroundImage:'url(' + url +'thum/'+ galleryImg.thum[i] +')'
		});
	};

	var index = 0;

	big.css({backgroundImage:'url(' + url +'big/'+ galleryImg.big[ index ] +')'});

	var thumLi = thumUl.find('li');
	thumLi.eq( index ).children('a').focus();

	thumLi.children('a').on('click', function(e){
		e.preventDefault();
		index = $(this).parent('li').index();

		big.css({backgroundImage:'url(' + url +'big/'+ galleryImg.big[ index ] +')'});
	});

	var baseWidth = big.innerWidth();
	var baseHeight = big.innerHeight();
	
	big.on('mousemove', function(e){
		//좌표위치
		var evtLocationX = e.originalEvent.offsetX;
		var evtLocationY = e.originalEvent.offsetY;
		// 좌표위치 %체크
		var xPer = parseInt(evtLocationX / baseWidth * 100);
		var yPer = parseInt(evtLocationY / baseHeight * 100);
		// console.log(xPer,	yPer);
		zoom.stop().show();
		zoom.css({
			backgroundImage:'url(' + url +'big/'+ galleryImg.big[ index ] +')',
			backgroundPosition: xPer + '%' + '  ' + yPer + '%'
		});

		// -------------------------------------------------------------
		var evtPageX = e.originalEvent.pageX;
		var evtPageY = e.originalEvent.pageY;
		zoom2.css({top:evtPageY+20, left:evtPageX+20});
		zoom2.stop().fadeIn(100);
		zoom2.css({
			backgroundImage:'url(' + url +'big/'+ galleryImg.big[ index ] +')',
			backgroundPosition: xPer + '%' + '  ' + yPer + '%'
		});
	});
	big.on('mouseleave', function(){
		zoom.stop().hide();
		zoom2.stop().fadeOut(100);
	});

})(jQuery);