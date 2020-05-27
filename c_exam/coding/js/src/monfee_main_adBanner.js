// monfee_main_adBanner.js

(function($){
	var adBannerBox = $('#adBannerBox');
	var adBannerBtn = adBannerBox.find('.adBanner_btn');
	var adBtn       = adBannerBtn.find('button');

	var adBannerIndiCator = adBannerBox.find('.adBanner_indicator');
	var indiCatorLi = adBannerIndiCator.find('li');
	
	var adBannerBg = $('.adBanner_bg');
	var adBannerBgUl = adBannerBg.find('ul');
	var adBannerBgLi = adBannerBgUl.children('li');

	var adBannerImg  = adBannerBox.find('.adBanner_img');
	var adBannerImgWrap = adBannerImg.children('ul') ;
	var adBannerLi     = adBannerImgWrap.find('li');
	
	// common
	var timed = 600;
	var n = 0;
	var k = n;
	var btnOk = true;

	adBannerBgLi.eq(n).show();
	adBannerBgLi.eq(n).addClass('active');
	
	var liLast = adBannerLi.eq(-1).clone(true);
	adBannerImgWrap.prepend(liLast);
	adBannerLi     = adBannerImgWrap.find('li');
	var adBannerLiLen  = adBannerLi.length;
	var liWidth = 100 / adBannerLiLen;
	adBannerImgWrap.css({'width': adBannerLiLen * 100 +'%',transform:'translateX(-'+ liWidth +'%)'});
	adBannerLi.css({width: liWidth + '%'});
	
	var AdBannerTextFn = function(){
		if(k !== n){	
			adBannerBgLi.eq(n).css({zIndex: 5});
			adBannerBgLi.eq(k).fadeOut(timed/3 ,function(){
				adBannerBgLi.eq(n).fadeIn(timed/2);
				adBannerBgLi.removeClass('active');
				$(this).addClass('active');
			});
		}
	};


	// button
	adBtn.on('click', function(e){
		e.preventDefault();
		var clickIt = $(this)[0];
		// console.log(n);
		k = n;

		if( clickIt === $('.next')[0] && btnOk){
			// 다음버튼 클릭
			btnOk = false;
			n += 1;					
			AdBannerTextFn();
			adBannerImgWrap.stop().animate({'marginLeft':n * -100 + '%'}, function(){				
				if( n >= adBannerLiLen -2){
					n = -1;
					adBannerImgWrap.stop().css({'marginLeft':n * -100 + '%'});
				}
				btnOk = true;
			});

		}else if( btnOk ){
			// 이전버튼 클릭
			btnOk = false;
			n -= 1;			
			AdBannerTextFn();
			adBannerImgWrap.stop().animate({'marginLeft':n * -100 + '%'}, function(){
				if(n < 0){	
					n = adBannerLiLen -2;	
					adBannerImgWrap.stop().css({'marginLeft':n * -100 + '%'});
				}
				btnOk = true;
			});
		}

		indiCatorLi.eq(n).siblings('li').removeClass('active');
		indiCatorLi.eq(n).addClass('active');
	});

	// indicator
	indiCatorLi.find('a').on('focus', function(e){
		e.preventDefault();
		if(btnOk){
			btnOk=false;

			var clickIt = $(this).parent('li');
			var itIndex = clickIt.index();
			k = n;
			n = itIndex;
			AdBannerTextFn();
			adBannerImgWrap.stop().animate({'marginLeft':n * -100 + '%'}, function(){

				btnOk = true;

			});
			
			indiCatorLi.eq(n).siblings('li').removeClass('active');
			indiCatorLi.eq(n).addClass('active');
		}
	});

 // 자동슬라이드 기능
 var SetSlideInterval;
 var mySlideGo = function(){
	 SetSlideInterval = setInterval(function(){
		adBannerBox.find('.next').trigger('click');
	 }, timed*6);
	};

 var mySlideStop = function(){
	 clearInterval(SetSlideInterval);
 }

 mySlideGo();
 // adBannerBox.on('mouseenter', function(){ mySlideStop() });
 // adBannerBox.on('mouseleave', function(){ mySlideGo() });

//  adBannerBox.on('mouseenter', mySlideStop);
//  adBannerBox.on('mouseleave', mySlideGo);

adBannerBox.on({mouseenter:mySlideStop, mouseleave:mySlideGo});

})(jQuery);