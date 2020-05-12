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

$(document).on('scroll', function(){
	var doScroll = $(this).scrollTop();
	var doOffset =$('#headBox').offset();
	
	console.log( doScroll, doOffset );

	$('#headBox').offset({top:doScroll, left: doScroll});
});



// jquery end
})(jQuery);