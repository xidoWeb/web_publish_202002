// galleryAndModal.js

(function($){
	// card list 생성

	// ----------------------------
	// 카드 클릭시 갤러리 창 띄우기
	var conBox = $('#conBox');
	var conLi  = conBox.find('li');
	var gallery = $('.gallery_wrap');
	var galleryClose = gallery.find('.close_btn');
	var galleryLink = gallery.find('a');
	var detail   = $('.detail_wrap');
	var detailClose = detail.find('.detail_close');
	var detailBg = detail.find('.dteail_background');
	var cardIndex;

	conLi.on('click', 'a' , function(e){
		e.preventDefault();
		var thisIndex = $(this).parent('li').index();
		cardIndex = thisIndex;
		gallery.addClass('active');
	});

	galleryClose.on('click', 'button', function(e){
		e.preventDefault();
		gallery.removeClass('active');
	});

	galleryLink.on('click', function(e){
		e.preventDefault();
		gallery.removeClass('active');

		detail.fadeIn(function(){
			detailClose.find('button').focus();
		});
	});
　　
	// -------------------------------------
  var detailHide = function(e){
		e.preventDefault();
		detail.fadeOut();
		conLi.eq(cardIndex).find('a').focus();
	};

	detailClose.on('click', detailHide);
	detailBg.on('click', detailHide);	
 // --------------------------------------

})(jQuery);