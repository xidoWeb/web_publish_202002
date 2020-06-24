(function($){
	var win          = $(window);
	var openLaptop   = $('#openLaptop');
	var openH2       = openLaptop.find('h2');
	var macbook      = openLaptop.find('.macbook');
	var macbookInImg = '<img src="" alt="맥북이미지" />';
	var url          = '../img/mac/';
	var j='0000';
	var imgLength = 92;

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

		console.log(secondScrollStart);

		macbook.find('img').eq( imgSelect ).show();
		macbook.find('img').eq( imgSelect ).siblings().hide();

		// 일정 스크롤이 지난시점에서 openLaptop의 위치를 이동처리
		if(thisScroll >= secondScrollStart){
			openLaptop.css({top : secondScrollStart - thisScroll});
		}

	});	
})(jQuery);