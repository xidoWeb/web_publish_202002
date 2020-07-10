// linkPinterest.js

(function($){
	var cardCode = '<div class="card">\
									 <a href="#">\
									 <div class="link_area"></div>\
									 <p class="text_area"></p>\
									 </a></div>';

	var win = $(window);
	var wrap = $('#wrap');
	var cardWrap = $('.card_wrap');
	var cardWidth = 250;
	
	var winW =	win.outerWidth();
	var cardRowLength; // 브라우저에서 가로 카드 갯수
	
	var card; //  = $('.card');
	var jc;   //  card생성시 순번체크용
	var beforH;  // 이전라인의 동일순번째의 높이값(top값 포함)
	// --------------------------------------
	// 불러올 카드 높이값 설정
	var cardHeight = [];
	for(var i=0; i<100; i+=1){
		cardHeight[i] = parseInt(Math.random() * 600) + 200;
	}

	// --------------------------------------
	var CardSet = function(widthSize){
		cardRowLength= parseInt( (widthSize - 60) / cardWidth );
		wrap.css({width:cardRowLength * cardWidth + 'px'});
		// console.log(cardRowLength);
		//  -------------------------------
		for(var j=0; j<50; j+=1){
			cardWrap.append(cardCode);
			card = cardWrap.find('.card').eq(j);
			card.css({height:cardHeight[j]});

			if(j < cardRowLength){ 
				card.css({top:0, left:cardWidth * j});

			}else if(j < cardRowLength * 2){
				jc =	j - cardRowLength;
				beforH = cardWrap.find('.card').eq(jc).outerHeight();

				card.css({top:beforH + 'px', left:cardWidth * jc + 'px'});
			}else if(j < cardRowLength * 3){
				jc =	j - cardRowLength;
				var jc2 = j - cardRowLength *2;
				beforH = cardWrap.find('.card').eq(jc).outerHeight() +
								 parseInt( cardWrap.find('.card').eq(jc).css('top') );

				console.log(jc, beforH);

				card.css({top:beforH + 'px', left:cardWidth * jc2 + 'px'});
			}else if(j < cardRowLength * 4){
				jc =	j - cardRowLength;
				var jc3 = j - cardRowLength *3;
				beforH = cardWrap.find('.card').eq(jc).outerHeight() +
								 parseInt( cardWrap.find('.card').eq(jc).css('top') );

				card.css({top:beforH + 'px', left:cardWidth * jc3 + 'px'});		 
			}else{
				card.hide();
			}

		}
		//  -------------------------------
	};

	CardSet(winW);

	// --------------------------------------
	win.on('resize', function(){
		var nowWinW = win.outerWidth();
		if(winW !== nowWinW){
			console.log('????');
			CardSet(nowWinW);
		}
	});
	// --------------------------------------
	

	// console.log(cardHeight);

})(jQuery);