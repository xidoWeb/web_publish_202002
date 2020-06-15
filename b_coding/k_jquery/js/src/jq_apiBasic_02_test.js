// jq_apiBasic_02_test.js

(function($){
	var h1 = $('h1');
	var headBox = $('#headBox');
	headBox.prepend(h1);
// ========================
	$('#viewBox').prepend('<h2>광고 영역</h2>');
	$('#conBox').prepend('<h2>본문 내용</h2>');
	$('#footBox').prepend('<h2>사이트 정보</h2>');
// ========================
	
	var gnbUl = $('#gnbBox').find('ul');
	var gnbLinkText = [
			'네이버', '다음', '구글', 'xido', 'apple', 'samsung', '11st', 'gmarket', 'homeplus', 'lotte mart'
	];

	var gnbLink= [
		'http://naver.com', 
		'http://daum.net', 
		'https://google.com', 
		'http://xidoweb.com', 
		'https://apple.com', 
		'http://samsung.com', 
		'http://11st.co.kr', 
		'http://gmarket.com', 
		'http://homeplus.com', 
		'http://lotte mart.com'
	];

	// gnbUl.text('');
	gnbUl.empty();
	var linkText;
	
for(var i = 0; i < gnbLink.length; i += 1){
	// linkText = `<li><a href=" ${gnbLink[i]} "> ${gnbLinkText[i]} </a></li>`;
	linkText = '<li><a target="_blank" href="' + gnbLink[i] + '">' + gnbLinkText[i] + '</a></li>';
	gnbUl.append(linkText);
}	


var gnbLinkMore = [
	{'text':'네이버', 'link':'http://naver.com'},
	{'text':'다음', 'link':'http://daum.net'},
	{'text':'구글', 'link':'http://google.com'}
];

for(i = 0; i < gnbLinkMore.length; i += 1){
	linkText = '<li><a target="_blank" href="' + gnbLinkMore[i].link + '">'
	           + gnbLinkMore[i].text + '</a></li>';
	gnbUl.append(linkText);
}	



// ========================
  var h2 = $('h2');
	// h2.attr({'class':'hidden'});
	h2.addClass('hidden');
	$('#conBox').find('h2').removeAttr('class');
	// $('#conBox').find('h2').removeClass('hidden');

// ========================
	var vBtn = $('.view_btn');
	vBtn.append('<button class="next_btn" type="button">다음</button>');
	vBtn.append('<button class="prev_btn" type="button">이전</button>');
// ========================


	$('#headBox').after('<div class="test_wrap"></div>');
	var testW = $('.test_wrap');

	for(i=0; i < 5; i+=1 ){
		testW.append('<p></p>');

		for(var j=5; j > i; j-=1){
				testW.find('p').eq(i).append('*');
		}

	}

})(jQuery);
