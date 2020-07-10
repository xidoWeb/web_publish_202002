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
	// --------------------------------------
	// 불러올 카드 높이값 설정
	var cardHeight = [];
	var maxCardLength = 1000;

	for(var i=0; i<maxCardLength; i+=1){
		cardHeight[i] = parseInt(Math.random() * 600) + 200;
	}

	// --------------------------------------
	var jCount;
	var jcOffset;
	var j=0;
	var RepeatCard = function(c){
		jCount = j + c || 20;
		for(; j<jCount; j+=1){
			cardWrap.append(cardCode);
			card = cardWrap.find('.card').eq(j);
			card.css({height:cardHeight[j]});
			card.css({left:cardWidth * (j % cardRowLength) + 'px'});

			if(j < cardRowLength){	card.css({top:0});	}else{
				jc = j - cardRowLength;
				jcOffset = parseInt(cardWrap.find('.card').eq(jc).css('top')) + 
				                    cardWrap.find('.card').eq(jc).outerHeight();
				card.css({top:jcOffset});
			}
		} // for
	}; // RepeatCard() // ------------------------------------------- end

	var CardSet = function(widthSize){
		cardRowLength= parseInt( (widthSize - 60) / cardWidth );
		wrap.css({width:cardRowLength * cardWidth + 'px'});
		RepeatCard();
	};
	CardSet(winW);
	// --------------------------------------

	win.on('resize', function(){
		var nowWinW = win.outerWidth();
		if(winW !== nowWinW){	CardSet(nowWinW);	}
	});
	// --------------------------------------

	// $('#headBox').on('click', function(){
	// 	RepeatCard(25);
	// });

	$(document).on('scroll', function(){
		var nowScroll = win.scrollTop();
		var cardOffset = card.offset().top - win.outerHeight();

		if(nowScroll >= cardOffset && jCount <= maxCardLength){
			RepeatCard(25);
		}
	});

	

})(jQuery);