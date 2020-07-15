// galleryAndModal.js

(function($){
	// card list 생성
	var galleryModalData;
	$.ajax({
		url:'../data/gallleryModalData.json',
		async:false,
		success:function(data){
			// console.log(data);
			galleryModalData = data;
		}
	});
	console.log(galleryModalData);

	var cardCon = '<li><a href="#"><figure class="img_wrap"><img src="" alt=""><figcaption class="hidden"></figcaption></figure><dl><dt></dt><dd></dd></dl></a></li>';
	var imgUrl = '../img/minicake/macaron/';

	var conBox = $('#conBox');
	var conUl = conBox.children('ul');
	var selLi;
	// ----------------------------
	var gData = galleryModalData;
	for(var i=0; i<gData.length; i++){
		conUl.append(cardCon);
		selLi = conUl.children('li').eq(i);
		selLi.find('img').attr({src:imgUrl + gData[i].thumb.img.src , 
														alt:gData[i].thumb.img.alt});
		selLi.find('figcaption').text(gData[i].thumb.img.narr);
		selLi.find('dt').text(gData[i].thumb.title);
		selLi.find('dd').text(gData[i].thumb.content);
	}

	// ----------------------------
	// 카드 클릭시 갤러리 창 띄우기
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
		// --------------------------------
			// gallery 창에 내용 삽입
			var gDataI =  gData[cardIndex].gallery;
	var imgUrl = '../img/minicake/macaron/';
			gallery.find('.img_bg').css({backgroundImage:'url('+ imgUrl + gDataI.image +')',
																	backgroundSize:'cover', backgoundRepeat:'no-repeat'
																	});
			gallery.find('dt').text(gDataI.title);
			gallery.find('dd').eq(0).text(gDataI.content);
		// --------------------------------
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