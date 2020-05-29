(function($){

	// gallery 페이지 만들기
	// 1. html문서에서 큰 이미지의 경로/파일을 직접 입력해서 가져오게 하기
	
	var part01 = $('.part_01');
	var bigRec = part01.find('.big_rec');
	var part01Li = part01.find('li');
	var part01LiLink = part01Li.children('a');
	var bigSource = '../../img/gallery/big/';
	
	part01LiLink.on('click', function(e){
		e.preventDefault();
		// var thisImg = $(this).css('backgroundImage');
		var thisImg = $(this).parent('li').attr('data-bg');
		// console.log(thisImg);
		bigRec.css({backgroundImage:'url('+ bigSource + thisImg +')'});
	});
	// ------------------------------------------------------------
  // 2. js를 통해 경로를 입력해서 처리하게 만들기





	
})(jQuery);