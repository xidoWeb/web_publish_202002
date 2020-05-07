// jq_selector.js

// jquery 선택자
/**
 * js의 선택자는 매우 복잡하게 만들어져 있기에 처음접하기엔 거리감이있어,
 * css 선택자와 유사한형태로 만들어져있기에 접근하기 쉬운 라이브러리
 * css선택자에 $(' ') 형태만 감싸주면 동일하게 선택됨
 
 $('h1').css({'width' : '500px', "height" : '100px', "backgroundColor":'#0af'});
 $('h1 a').css({'display':'block', 'width':'400px', 'backgroundColor':'#fa0'});
 $('h1 > a').css({'color':'#fff', 'textAlign':'center','margin':'auto'});
 $('a[href="#"]').css({'padding':"0.5rem", 'textShadow':'0.2rem 0.2rem 0.2rem #000'});
 
 */

 /**jqueyr 선택자
	* type선택자(tag를 직접 선택) 
		------>  $('html, body')  , $('h1,h2,h3,h4,h5,h6')
		
	* 자식선택자 
	  ------>  $('ul > li') , $('ul').children('li') 
	* 자손선택자
	  ------>  $('ul li') ,  $('ul').find('li')
	
	* id/class 선택자
	  ------>  $('#box'),  $('.box_min)

	* 형제선택자
		인접형제------>  $('dt + dd')  ,  $('dt').next('dd')
		동생인 형제들------>  $('dt ~ dd')  ,  $('dt').nextAll('dd')    
	--------------------------
		이전형제 ------>   $('dd').prev('dt')
    형에 해당하는 형제들 ------> $('dd').prevAll('dt')
		자신을 제외한 형제모두 ------> $('dt').siblings('dd')
	----------------------------

	* 부모선택자(css에서는 없는 기능)
		바로 위의 선택자 
		------> $('#box').parent('div')
		조상격 부모  
		------> $('#box').parents()   // 부모격에 해당하는 모든
		------> $('#box').parentsUntil()  // 부모격에서 해당하는 요소중 하나

	* nth 선택자(css에 일부 존재)
	  ------> $('li:nth-child(3)')    , $('li:nth(2)') 
	  ------> $('li:nth-of-type(3)')  , $('li:nth(2)') 
		------> $('li').eq(2) 
		------> $('li').odd() , $('li').even()

	* 속성선택자
		------> $('a[href="#"]')
		
		========================================================================
	* 해당위치를 파악하는 기능
		$('li').eq(0)     : li의 요소의 순번을 직접 지정
		$('.n').index()   : .n 의 순번을 확인하는 기능

	* 이벤트가 발생되는(주체가되는) 요소
		$(this)    
		
  */ 

	// $(document).ready(function(){})

	(function($){
		// 자식선택자/자손선택자
		// $("ul>li").css({"color":"#777"});
		$("ul").children('li').css({"color":"#77f"});

		// $('ul > li span').css({"fontSize":"1.5rem", "fontWeight":"bold"});
		// $("ul").children('li').find('span').css( {"fontSize":"1.5rem", "fontWeight":"bold"} );

		var myCss = {"fontSize":"1.5rem", "fontWeight":"bold"};
		var myUl = $('ul');
		var myLi = myUl.children('li').find('span');
		myLi.css(myCss);
		// =================================================================

		$('.three').prev('li').css({"border":"1px solid #35f"});
		$('.three').prevAll('li').css({"backgroundColor":"#ccc"});
		$('.three').next('li').css({"border":"1px solid #f35"});
		$('.three').nextAll('li').css({"backgroundColor":"#aca"});

		$('.other_01').siblings().css({"marginBottom":"2rem", "width":"400px"});


		$('.four').parentsUntil('body').css({
															"padding":"2rem", 
															"backgroundColor":"#333", 
															"borderRadius":"3rem",
															"border":"2px solid #fff"
															});

		$(".four").parents().siblings("h2").css({"backgroundColor":'#fa0'});

	

		var fourI = $('.four').parent().index();
		// console.log(fourI);			
		// console.log( $('li').length );

		$('li').eq(fourI + 1).children('span').css({'textShadow':'0.2rem 0.2rem 0.2rem #fff'});

		
	})(jQuery);