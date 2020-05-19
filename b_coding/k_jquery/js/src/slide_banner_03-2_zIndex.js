// slide_banner_03-2_zIndex.js

var product = $('.product');
var productLi = product.children('li');
var productBtn = $('.product_btn').children('button');

product.parent().css({overflow:'visible'});

product.css({width:'100%', position:'relative'});
productLi.css({width:'100%', position:'absolute', left:0, top:0});

// 1. 보이고자 하는 요소는 남고, 나머지는 display:none;
// 2. 순서의 배치를 역순으로 배치해서 처리하는 방법

var n = 0;

productLi.eq(n).css({zIndex:10});
productLi.eq(n).siblings('li').css({zIndex:0, display:'none'});

var bool = true;

var FadeFn = function(n,k){
	productLi.eq(n).css({zIndex:5, display:'block'});
		productLi.eq(k).stop().fadeOut( function(){
			productLi.eq(n).css({zIndex:10});
			productLi.eq(n).siblings('li').css({zIndex:0});
			bool = true;
	});
};

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