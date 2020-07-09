// popupModal.js

(function($){		

var cardData  = listData;
var colorData = colorArr;
var listView  = $('#listViewBox');
var listUl    = listView.find('ul');
var modalWin  = $('#modalBox');
var modalView = modalWin.find('.modal_view')
var modalImg  = modalWin.find('.modal_image');
var modalCloseBtn = modalWin.find('.modal_close');


// 비동기처리로 인해 새로생겨나는 형태는 기존의 변수나 선택자에 담기지 않는다.
// 이를 해결하기 위한 방법으로는, 
// 첫번째 : $(document) 에서부터 찾아서 선택하는 형식을 취하면 된다.
// 두번째 : 최종선택자는 클릭후에 판단하는 형식으로 취한다.

$(document).find(listUl).on('click', 'li', function(e){
	e.preventDefault();
	var indexCard = $(this).index();
	console.log(indexCard);

	modalImg.css({
		backgroundImage:'URL('+ cardData[indexCard].image +')',
		backgroundSize:'cover',
		backgroudRepeat:'no-repeat',
		backgroundPosition:'50% 50%'
});
	modalImg.text(cardData[indexCard].model_);
	modalWin.fadeIn(function(){
		$(this).on('mousemove', function(e){
			var mouseP = { x: e.clientX, y: e.clientY };
			console.log(mouseP);
			modalView.css({
				transform:'rotateX('+ -mouseP.x / 100 * 2 + 'deg) \
									 translate('+ mouseP.y / 100 * 10+ 'px) \
									 perspective(500px)'
			});
		})
	});
});

modalCloseBtn.on('click', function(e){
	e.preventDefault();
	modalWin.fadeOut(100);
});


})(jQuery);