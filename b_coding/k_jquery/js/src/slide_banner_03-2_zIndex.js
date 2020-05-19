// slide_banner_03-2_zIndex.js
(function($){

var productWrap = $('.product_wrap');
var product = $('.product');
var productLi = product.children('li');
var productBtn = $('.product_btn').children('button');

product.parent().css({overflow:'visible'});

product.css({width:'100%', position:'relative'});
productLi.css({width:'100%', position:'absolute', left:0, top:0});

// -------------------------------------------------
// .indicator_color 생성
var indicatorColorCode = '<div class="indicator_color hidden_wrap"><ul></ul></div>';
var indiLiCode = '<li><a href="#"><span></span></a></li>';
// productWrap.before('<div class="indicator_color hidden_wrap"><ul></ul></div>');
		productWrap.before(indicatorColorCode);

var indiCatorColorUl = $('.indicator_color').find('ul');

var i = 0;
var n = 0;
var proNarr;

for(; i < productLi.length; i += 1 ){
	indiCatorColorUl.append(indiLiCode);
	proNarr = productLi.eq(i).text();
	indiCatorColorUl.children('li').eq(i).find('span').text(proNarr);
}

// ------------------------------------------------
var indicatorColorStyle = '.indicator_color {\
														 display:inline-block; width:100%; height:30px; text-align:center; \
														 position:absolute; right:0; bottom:-50px; z-index:500; \
														}\
													  .indicator_color ul {\
													   float:left; width:auto; height:100%; padding:0 10px;\
													  }\
													  .indicator_color li {\
													  float:left; margin-right:0.5rem; width:1.5rem; height:1.5rem; background-color:#fa0;\
													  }\
													  .indicator_color li.action{ background-color:#0af; }\
													  .indicator_color a{ display:block; width:100%; height:100% }';

$('head').append('<style>'+ indicatorColorStyle +'</style>');
// $('style').append();
// -------------------------------------------------
$('.indicator_color').append('<p><span class="n_count">3</span> / <span class="t_count">3</span></p>');
var indicatorColorCount = '.indicator_color p {float:right; width:40px;}';
$('head').find('style').append(indicatorColorCount);
// ----------------------------------------------------

// productLi.eq(n).css({zIndex:10});
// productLi.eq(n).siblings('li').css({zIndex:0, display:'none'});

// $('.n_count').text( n+1 );
$('.t_count').text( productLi.length );

var bool = true;

var FadeFn = function(n,k){
	if( k !== n ){
		$('.n_count').text( n+1 );
		productLi.eq(n).css({zIndex:5, display:'block'});
		indiLi.eq(n).addClass('action');
		indiLi.eq(n).siblings().removeClass('action');

		productLi.eq(k).stop().fadeOut( function(){
			productLi.eq(n).css({zIndex:10});
			productLi.eq(n).siblings('li').css({zIndex:0});
			bool = true;
		});
	}
};

// 인디케이터 클릭 ---------------------------------------------------
var indiLi = indiCatorColorUl.children('li');
// indiLi.eq(n).addClass('action');

indiLi.find('a').on('click', function(e){
	e.preventDefault();
	k = n;
	n = $(this).parent().index();

	FadeFn(n, k);

});



FadeFn(n, 1);

// 좌우 버튼 클릭  --------------------------------------------------------
productBtn.on('click', function(e){
	e.preventDefault();
	var k = n;
	
	if( $(this)[0] === $('.next')[0] && bool ){
		// next 버튼 클릭
		bool = false;
		( n >= productLi.length-1 ) ? n = 0 : n += 1; 
		FadeFn(n,k);

	}else if( $(this)[0] === $('.prev')[0] && bool ){
		// prev 버튼 클릭
		bool = false;
		( n <= 0 ) ? n = productLi.length - 1 : n -= 1; 
		FadeFn(n,k);
	}

});

})(jQuery);