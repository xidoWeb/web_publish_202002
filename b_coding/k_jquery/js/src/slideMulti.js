// slideMulti.js
(function($){

	
	// 선택자
	var viewBox    = $('.viewBox');
	var slideBanner = $('.slide_banner');
	var btn         = $('.btn').find('button');
	var slideUl     = slideBanner.children('.slide_card');
	var slideLi     = slideUl.find('li');	
	// -------------------------------------------------
	slideBanner.css({overflow:'hidden'});
	// -------------------------------------------------
	var backImg = $('.back_img');
	var backImgUl = backImg.children('ul');
	var backLi    = backImgUl.find('li');


	// ------------------------------------------------
	setTimeout(function(){
		slideBanner.css({transform:'scale(1)', opacity:1, transition:'all 500ms ease-in'});
	}, 500);
	// --------------------------------------------------
	// 순서 변경, .active삭제 및 재설정
	// 카드배너 순서
	slideLi.removeClass('active');
	slideLi.eq(-1).prependTo(slideUl);
	slideLi     = slideUl.find('li');
	slideLi.eq(1).addClass('active');
	
	// 배경배너 순서
	backLi.eq(-1).prependTo(backImgUl);
	backLi      = backImgUl.find('li');
	backLi.css({filter:'blur(10px) grayscale(0.5)'});
	// --------------------------------------------------


	// 정면에 보이는 배너순서 찾기(.active 찾기)
	var hasActive;
	var q;
	var WhereActive = function(){
		// 정면에 보이는 배너순서 찾기(.active 찾기)
		for(var i=0; i<slideLi.length; i++){
			hasActive = slideLi.eq(i).hasClass('active');
			if(hasActive){q = i;	break;}
		}
		console.log(q)
	};

	WhereActive();
// --------------------------------------
// 버튼 클릭시 내용 변경1
var btnTrue = true;

btn.on('click', function(e){
	e.preventDefault();
	var nBtn = $(this)[0] === $('.next')[0];	
	WhereActive();
	slideLi.removeClass('active');
	if( nBtn && btnTrue){ //next 버튼 클릭시
		// 다음버튼 중복기능 방지
		btnTrue = false;
		// 각 내용 위치이동
		slideLi.eq(q-1).css({
			transform:'translate3D(100%, 0, 0) scale(0.8) rotateY(-45deg)',
			transition:'all 500ms linear'
		});	
		slideLi.eq(q).css({
			transform:'translate3D(-100%, 0, 0) scale(0.8) rotateY(45deg)',zIndex:-1,
			transition:'all 500ms linear'
		});
		slideLi.addClass('up');

		slideLi.eq(q+1).css({
			transform:'translate3D(0, 0, 0) scale(1) rotateY(0)',	zIndex:100,
			transition:'all 500ms linear'
		});
		setTimeout(function(){			
			slideLi.eq(0).appendTo(slideUl);		
			slideLi     = slideUl.find('li');
			slideLi.eq(1).addClass('active');
			slideLi.removeClass('up');
			btnTrue = true;
			// WhereActive();
		}, 500);

		// 배경 이미지 배치
		backImgUl.stop().animate({marginLeft:-200+'%'}, function(){
			backLi.eq(0).appendTo(backImgUl);
			backLi      = backImgUl.find('li');
			backImgUl.css({marginLeft:-100 + '%'});
		});


	}else if(btnTrue){
		// prev 버튼 클릭
			// 버튼 중복기능 방지
			btnTrue = false;
			// 각 내용 위치이동
			slideLi.eq(q-1).css({
				transform:'translate3D(0, 0, 0) scale(1) rotateY(0)',	zIndex:100,
				transition:'all 500ms linear'
			});	
			slideLi.eq(q).css({
				transform:'translate3D(100%, 0, 0) scale(0.8) rotateY(-45deg)',zIndex:-1,
				transition:'all 500ms linear'
			});
			slideLi.addClass('up');

			slideLi.eq(q+1).css({
				transform:'translate3D(-100%, 0, 0) scale(0.8) rotateY(45deg)',
				transition:'all 500ms linear'
			});
			setTimeout(function(){
				slideLi.eq(-1).prependTo(slideUl);		
				slideLi     = slideUl.find('li');
				slideLi.eq(1).addClass('active');
				slideLi.removeClass('up');
				btnTrue = true;
				// WhereActive();
			}, 500);

		// 배경 이미지 배치
		backImgUl.stop().animate({marginLeft:0}, function(){
			backLi.eq(-1).prependTo(backImgUl);
			backLi      = backImgUl.find('li');
			backImgUl.css({marginLeft:-100 + '%'});
		});
	}
});


// -------------------------------------------
// 카드에 마우스 올렸을때 움직임처리
// console.log(q);

slideLi.on('mousemove', function(e){
	// 마우스 위치파악
	var ha = $(this).hasClass('active');
 if(ha){
	 var mouseX = e.originalEvent.offsetX;
	 var cardHalfWidth = $(this).outerWidth() / 2;
	 console.log(mouseX);
	 
	 if(mouseX <= cardHalfWidth){
		 $(this).css({transform:'rotateY(-15deg)', transition:'all 300ms ease'});
		 $(this).find('p').css({transform:'rotateY(10deg) perspective(500px)', transformOrigin:'50% 50%', transition:'all 350ms ease 50ms'});
		}else{
			$(this).css({transform:'rotateY(15deg)', transition:'all 300ms ease'});
			$(this).find('p').css({transform:'rotateY(-10deg) perspective(500px)', transformOrigin:'50% 50%', transition:'all 350ms ease 50ms'});
		}
	}
});
	
	slideLi.on('mouseleave', function(){
		var ha = $(this).hasClass("active");
		if(ha){
			$(this).css({transform:'rotateY(0)'})
		}
	});

// ------------------------------------------------



})(jQuery);
