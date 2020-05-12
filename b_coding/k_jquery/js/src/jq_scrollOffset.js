// jq_scrollOffset.js

(function($){
// jquery start

// scrollTop()  : 화면내의 스크롤이 이동한 값을 표기하는 형태
// scrollTop  -> animate() 메소드내에도 기능을 사용할 수 있다.

// $(document).on('scroll', function(e){
// 	 var myScroll = $(this).scrollTop( );
// 	 console.log(myScroll);

// 	 if(myScroll > 300){
// 		 $('#headBox').css({'position':'fixed', 'top':0});
// 	 }else{
// 		$('#headBox').removeAttr('style');
// 	 }
// });

// offset() : 브라우서 상단에서 부터 원하는 개체(선택자)가 얼만큼 떨어져 있는지를 확인하는 기능
// offset().top   |  offset().left

var headBox = $('#headBox');
var hT =  headBox.offset().top;

$(document).on('scroll', function(){
	var docST = $(document).scrollTop(); // 스크롤의 위치 파악

	if(docST > hT){
		headBox.css({'position':'fixed', 'top':'0'});
	}else{
		headBox.removeAttr('style');
	}
});

// =====================================
var bodyH = $('body').height();
// console.log(bodyH);
$('#viewBox').height(bodyH);

// scrollTop 응용 ====================================
var viewBox = $('#viewBox');
var viewBoxH2 = viewBox.children('h2');
var viewVideo = viewBox.find('.video');
var titleBg   = $('.title_bg');

var conBgP = $('.con_img').css('backgroundPositionY');
var parseCon = parseInt( conBgP );

$(document).on('scroll', function(){
	var doScroll = $(document).scrollTop();
	
	viewBoxH2.css({'marginTop':doScroll/2+'px'});
	viewVideo.css({'marginTop':doScroll * 1.2  + 'px'});
	
	var ot = -doScroll/3 ;
	titleBg.css({'marginTop':ot * 0.7 + 'px'});
	titleBg.children('h2').css({'marginTop':ot * 0.4 + 'px'});

	$('.con_img').css({'backgroundPositionY':parseCon - (ot/15) + '%'});

});

// jquery end
})(jQuery);