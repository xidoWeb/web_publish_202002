
(function($){
	
	$('#wrap').height('5000px');

	var imgArea = $('.img_area');
	var imgLen = 105;
	var imgUrl;

	for(var i=0; i<imgLen; i++){
		imgUrl = '../img/introMovie/introMovie_' + (i + 1);
		imgArea.append('<img src="' + imgUrl + '.png" alt="내용 입력">');
	}

	imgArea.find('img').css({display:'none', position:'relative', top:50+'%',width:100+'%',
	                         transform:'translateY('+ -50 + '%)'});
	imgArea.find('img').eq(0).show();
	imgArea.css({overflow:'hidden'});

	var j=0, intervalImg;
	var SetIntervalImg = function(){
		intervalImg = setInterval(function(){		
			j += 1;		
			// console.log(j); 	
			imgArea.find('img').eq(j).show();
			imgArea.find('img').eq(j).siblings().hide();

			if(j >= imgLen){		
				clearInterval(intervalImg);	
			}
		}, 30);
	};

	// SetIntervalImg();
	$(window).on('scroll', function(){
		var st = $(this).scrollTop();
		if(st >= 50){
			SetIntervalImg();
		}
	});



})(jQuery)