(function($){

	var win          = $(window);
	var winH         = win.innerHeight();
	var winHPart     = winH / 4 * 3;
	
	win.scrollTop(0);

// #openLaptop
	var openLaptop   = $('#openLaptop');
	var openH2       = openLaptop.find('h2');
	var macbook      = openLaptop.find('.macbook');
	var macbookInImg = '<img src="" alt="맥북이미지" />';
	var url          = '../img/mac/';
	var j='0000';
	var imgLength = 92;

// #laptopSize
	var laptopSize        = $('#laptopSize');
	var laptopSizeOffset  = laptopSize.offset().top;
	var laptopSizeMacbook = laptopSize.find('.macbook');
	var macbookDiv        = laptopSizeMacbook.children('div').children('div');
	var macbookDl         = macbookDiv.children('dl');
	var macbookVideo      = laptopSize.find('.macbook_video');

// #retinaDisplay
	var retinaDisplay     = $('#retinaDisplay');
	var retinaImg         = $('.retina_image');
	var people            = retinaImg.find('.people');
	var artwork           = retinaImg.find('.artwork');
	var artworkDp           = retinaImg.find('.artwork_display');

	


// 기능 수행============================================================================
	// #openLaptop영역 처리  ---------------------------------------------------

	openH2.animate({opacity:1, top:0, lineHeight:6+'rem'}, 800);
	openLaptop.find('p').delay(200).animate({opacity:1, top:0}, 800);

	for(var i=0; i<imgLength; i++){
		
		if(i < 10){
			j = '000' + i;
		}else if(i < 100){
			j = '00' + i;
		}else if(i < 1000){
			j = '0' + i;
		}else{
			j = i;
		}

		macbook.append(macbookInImg);
		macbook.find('img').eq(i).attr({'src':url + 'large_' + j + '.jpg'});
	}
	// macbook.find('img').not( macbook.find('img').eq(0)  ).hide();
	macbook.find('img').hide();
	macbook.find('img').eq(0).show();

// -------------------------------------------
var secondScrollStart = 850;

	win.on('scroll', function(){
		var thisScroll = $(this).scrollTop();
		// 상단 제목, 스크롤이 이동 + 점점 투명해지게하기
		var myop = 1 - thisScroll / 400;		
		openH2.css({top: -thisScroll, opacity:myop});		
		
		// 스크롤시 노트북 이미지 변경되게 하기
		var imgSelect = parseInt( thisScroll / 600 * imgLength );
		if (imgSelect >= imgLength){
			imgSelect = imgLength-1;			
		}

		// console.log(secondScrollStart);

		macbook.find('img').eq( imgSelect ).show();
		macbook.find('img').eq( imgSelect ).siblings().hide();

		// 일정 스크롤이 지난시점에서 openLaptop의 위치를 이동처리
		if(thisScroll >= secondScrollStart){
			openLaptop.css({top : secondScrollStart - thisScroll});
		}

	});	
	// #openLaptop영역 처리 끝 ---------------------------------------------------

	// #laptopSize 영역 처리 ------------------------------------------------

	// $.each(macbookDl, function(data){	$(this).css({opacity:0});	});
	macbookDl.css({opacity:0});
	
	// dl의 offset값을 각각 파악
	var dlOffset = []; 
	for( var i=0; i < macbookDl.length; i++ ){
		dlOffset[i] = macbookDl.eq(i).offset().top;
	}
	// console.log(dlOffset);

	win.on('scroll', function(){
		var winScroll = $(this).scrollTop();
		var winScrollPlus = winScroll + winHPart;
		var op = 0;
		// laptopSize 위치값파악하여 동작체크
		// if(winScrollPlus >= laptopSizeOffset ){
		// 	// console.log('laptopSizeOffset 스타트!!!');
		// 	var op1 =	(winScrollPlus - laptopSizeOffset) / 400;
		// 	// console.log( op1 );
		// 	laptopSize.css({opacity: op1});
		// }

		// laptopSize 위치값파악 후 dl값의 위치에따라 투명도 처리
		if(winScrollPlus >= laptopSizeOffset ){
			// dl값을 각각 파악하여 매번 순환체크하도록 처리
			for(var i=0; i< macbookDl.length; i++){
				if( winScrollPlus  >= dlOffset[i]){
					op = (winScrollPlus - dlOffset[i]) / 400;
					macbookDl.eq(i).css({opacity: op});
				}
			}
			// 동영상 동작하게 만들기
			if( !macbookVideo.hasClass('active') ){
				macbookVideo.addClass('active');
				macbookVideo.find('video').get(0).play();
			}
		}
	});

	// #retinaDisplay -------------------------------------------------------------
	retinaImg.height(winH);
	
	var retinaImgOffset = retinaImg.offset().top;
	var retinaImgWidth = retinaImg.outerWidth();
	var winWidth       = win.outerWidth();
	var retinaImgPercent = retinaImgWidth / winWidth * 100;
	var retinaDptoImgOff = retinaDisplay.offset().top - retinaImgOffset;

	// console.log(retinaImgPercent);
	retinaImg.css({width: retinaImgPercent + 'vw'});
	var rep = 0;
	var rep2 = 100;
	var rep3 = 0;
	
	win.on('scroll', function(){
		var winScroll = $(this).scrollTop();
		var winScrollPlus = winScroll + winHPart;
		
		if(winScrollPlus >= retinaImgOffset){
			rep = (winScrollPlus - retinaImgOffset) / winH * 30;
			var peopleWp = retinaImgPercent + rep;
			(peopleWp < 100) ?retinaImg.css({width:peopleWp + 'vw'}) : retinaImg.css({width:100 + 'vw'});
		}

		if(winScroll >= retinaImgOffset){

			rep2 = 120 - (winScroll - retinaImgOffset) / winH * 100;
			retinaDisplay.css({position:'fixed', top:retinaDptoImgOff});
			people.css({height:rep2 + '%'});
			artworkDp.css({filter:'grayscale('+ rep2*0.1 +')'});	

		}else{retinaDisplay.css({position:'relative', top:0});	}

		// if(rep2 <= 0){
		// 	rep3 = winScroll - retinaImgOffset + winH / winH * 30;
		// 	console.log( rep3 )
		// 	// retinaImg.css({width:, height:});
		// }

		if(winScroll >= retinaImgOffset + winH){
			rep3 = 2 - ((winScroll - (retinaImgOffset + winH)) / winH);
			console.log((winScroll - (retinaImgOffset + winH)));
			
			if(rep3 >= 0.7){artwork.css({transform:'scale('+rep3+')'});}
			if(rep3 <= 0) {retinaDisplay.css({top: retinaDptoImgOff + (rep3*winH*2)+'px'})}
		}
	});
	// ----------------------------------------------------------------------
})(jQuery);