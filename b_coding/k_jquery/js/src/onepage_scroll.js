// onepage_scroll.js

(function($){
  var timed = 500;
	$('html,body').animate({scrollTop:0},timed/10);

	var gnb = $('#gnbBox');
	var gnbLi = gnb.find('li');

	var scrollOffset = [];
  var i=0;
	for(; i < gnbLi.length; i++){
		var selHref = gnbLi.eq(i).find('a').attr('href');
		var selEl = $(selHref).offset().top;
		scrollOffset[i] = selEl;
	}
	// console.log(scrollOffset);
	gnbLi.eq(0).addClass('action'); 	gnbLi.eq(0).siblings().removeClass('action');
	
  $(window).on('scroll', function(){
		var winScroll = $(window).scrollTop();
		if(winScroll <= scrollOffset[0]){
			gnbLi.eq(0).addClass('action');			gnbLi.eq(0).siblings().removeClass('action');

		}else if(winScroll > scrollOffset[0] && winScroll <= scrollOffset[1]){
			gnbLi.eq(1).addClass('action');			gnbLi.eq(1).siblings().removeClass('action');

		}else if(winScroll > scrollOffset[1] && winScroll <= scrollOffset[2]){
			gnbLi.eq(2).addClass('action');			gnbLi.eq(2).siblings().removeClass('action');

		}else if(winScroll > scrollOffset[2] && winScroll <= scrollOffset[3]){
			gnbLi.eq(3).addClass('action');			gnbLi.eq(3).siblings().removeClass('action');

		}else if(winScroll > scrollOffset[3] && winScroll <= scrollOffset[4]){
			gnbLi.eq(4).addClass('action');			gnbLi.eq(4).siblings().removeClass('action');

		}else{
			gnbLi.eq(5).addClass('action');			gnbLi.eq(5).siblings().removeClass('action');
		}
	});

	gnbLi.children('a').on('click', function(e){
		e.preventDefault();
		var sectionName = $(this).attr('href');
		// console.log(sectionName);
		var sectionOffset = $(sectionName).offset().top;
		// console.log(sectionOffset);

		$('html, body').animate({scrollTop: sectionOffset});
	});



var headBox =  $('#headBox');
var pointSide = '<aside id="pointNaviBox"></aside>';
    headBox.after(pointSide);
var pointNavi = $('#pointNaviBox');
var gnbClone  = gnb.children('ul').clone(true);
    pointNavi.append( gnbClone );

		pointNavi.css({position:'fixed', top:10+'rem', right:3+'rem',
									 width:2+'rem', height:'auto'});
		pointNavi.children('ul').css({width:'100%', height:'auto', backgroundColor:'rgba(255,255,255,0.5)'});
    pointNavi.find('li').css({width:'2rem', height:'2rem', marginBottom:'2rem' });
		pointNavi.find('a').css({display:'block', borderRadius:'2rem', backgroundColor:'#3fa', fontSize:0,
														width:'2rem', height:'2rem'});



// top버튼 생성,
// 1000px 이전에는 보이지 x, 이후에 보이게만들기
// 클릭시 최상단으로 이동
var topMvText = '<div class="top_move_btn"><a href="#"><span class="hidden">상단으로 이동</span></a></div>';
$('#asInfoBox').after(topMvText);

var topMvBtn = $('.top_move_btn');
topMvBtn.css({position:'fixed',left:'50%',bottom:'3rem',marginLeft:'40rem',zIndex:'1000',width:'70px',height:'70px', backgroundColor:'#fa0', display:'none'});
topMvBtn.find('a').css({display:'block', width:'100%', height:'100%'});

$(window).on('scroll', function(e){
	e.preventDefault();
	var winScroll = $(window).scrollTop();
	// if(winScroll >= 1000){		topMvBtn.stop().fadeIn(); 	}else{		topMvBtn.stop().fadeOut();	}
	(winScroll >= 1000) ? topMvBtn.stop().fadeIn(timed) : topMvBtn.stop().fadeOut(timed);
});

topMvBtn.on('click',['a'], function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: 0});
});


// $(window).on('mousewheel DOMMouseScroll', function(e){
// 	var myEvt = e.originalEvent;
// 	var wheelValue;
	
// 	if( myEvt.wheelDeltaY){
// 		wheelValue = myEvt.wheelDeltaY;  // 120 | -120
// 	}else{
// 		wheelValue = myEvt.detail * -40;  // -3 | 3
// 	}
// 	// console.log( e.originalEvent.wheelDeltaY );	
// 	console.log(wheelValue);
// });


})(jQuery);