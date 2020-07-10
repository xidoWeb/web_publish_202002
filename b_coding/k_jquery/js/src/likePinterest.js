// linkPinterest.js

(function($){
	var cardData;
	var maxCardLength;
	var cardCheap;

	$.ajax({
		url: '../data/mock_data.json',
		async:false,
		success:function(data){
			cardData = data;
			maxCardLength = cardData.length;
		// ---------------------------------------------------------
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
		
		var card; //  = $('.card')순서;
		var jc;   //  card생성시 순번체크용
		// --------------------------------------
		// 불러올 카드 높이값 설정
		var cardHeight = [];


		for(var i=0; i<maxCardLength; i+=1){
			cardHeight[i] = parseInt(Math.random() * 600) + 200;
		}

		// --------------------------------------
		var jCount;
		var jcOffset;
		var j=0;

		var ContentCard = function(index){
			card.find('.link_area').css({backgroundColor:cardData[index].color});
			card.find('.link_area').text(cardData[index].id);
			card.find('.text_area').text(cardData[index].thum_content);
		};

		var RepeatCard = function(c){
			jCount = j + c || 20;
			for(; j<jCount; j+=1){
				cardWrap.append(cardCode);
				cardCheap = cardWrap.find('.card');
				card = cardCheap.eq(j);
				card.find('.link_area').css({height:cardHeight[j]});
				card.css({left:cardWidth * (j % cardRowLength) + 'px'});


				if(j < cardRowLength){	
					card.css({top:0});	
					ContentCard(j);
				}else{
					jc = j - cardRowLength;
					jcOffset = parseInt(cardWrap.find('.card').eq(jc).css('top')) + 
															cardWrap.find('.card').eq(jc).outerHeight();
															
					card.css({top:jcOffset});
					ContentCard(j);
				}
			} // for			
			cardCheap.fadeIn(100);

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

	} // $.ajax({success:function(){}})
}); // $.ajax 끝


$(document).on('focus mouseenter', '.card a', function(){
	console.log('!!!!!!!!!!!!');
	var thisOffset = $(this).offset().top;
	console.log(thisOffset)
	// $('html, body').stop().animate({scrollTop: thisOffset - 200});
	$(this).parent('.card').css({transform:'scale(1.1)', zIndex:500, boxShadow:'0.2rem 0.2rem 0.2rem #171717', backgroundColor:'#171717', color:'#fff', fontWeight:'bold'});
});
$(document).on('blur mouseleave', '.card  a', function(){
	$(this).parent('.card').css({transform:'scale(1)', zIndex:0, boxShadow:'none', backgroundColor:'rgba(255,255,255,0.7)', color:'#171717', fontWeight:'normal'});
});

})(jQuery);