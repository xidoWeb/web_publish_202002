// monfee_main_adBanner.js

(function($){
	var adBannerBox = $('#adBannerBox')	;
	var adBannerBtn = adBannerBox.find('.adBanner_btn');
	var adBtn       = adBannerBtn.find('button');
	var adBannerIndiCator = adBannerBox.find('.adBanner_indicator');
	var indiCatorLi = adBannerIndiCator.find('li');
	var adBannerImg  = adBannerBox.find('.adBanner_img');
	var adBannerImgWrap = adBannerImg.children('ul') ;
	var adBannerLi     = adBannerImgWrap.find('li');
	
	// common
	var liLast = adBannerLi.eq(-1).clone(true);
	adBannerImgWrap.prepend(liLast);
	adBannerLi     = adBannerImgWrap.find('li');
	var adBannerLiLen  = adBannerLi.length;
	var liWidth = 100 / adBannerLiLen;
	adBannerImgWrap.css({'width': adBannerLiLen * 100 +'%',transform:'translateX(-'+ liWidth +'%)'});
	adBannerLi.css({width: liWidth + '%'});


	var n = 0;

	// button
	adBtn.on('click', function(e){
		e.preventDefault();
		var clickIt = $(this)[0];

		if( clickIt === $('.next')[0] ){
			// 다음버튼 클릭
			n += 1;
			adBannerImgWrap.stop().animate({'marginLeft':n * -100 + '%'}, function(){
				if( n >= adBannerLiLen -1){
					n = -1;
				}
			});
		}else{
			// 이전버튼 클릭
			n -= 1;
			if(n < 0){
				n = adBannerLiLen -1;
			}
			adBannerImgWrap.stop().animate({'marginLeft':n * -100 + '%'});
		}
	});

	// indicator




})(jQuery);