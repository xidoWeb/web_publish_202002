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
	var card; //  = $('.card');
	var cardWidth = 250;

	var winW =	win.outerWidth();
	var cardRowLength; // 브라우저에서 가로 카드 갯수

	// --------------------------------------
	// 불러올 카드 높이값 설정
	var cardHeight = [];
	for(var i=0; i<20; i+=1){
		cardHeight[i] = parseInt(Math.random() * 600) + 200;
	}

	// --------------------------------------
	var CardSet = function(widthSize){
		cardRowLength= parseInt( (widthSize - 60) / cardWidth );
		wrap.css({width:cardRowLength * cardWidth + 'px'});
		// console.log(cardRowLength);
		//  -------------------------------
		for(var j=0; j<20; j+=1){
			cardWrap.append(cardCode);
			cardWrap.find('.card').eq(j).css({height:cardHeight[j]});
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