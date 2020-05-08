// jq_apiBasic_02.js
// $.ready(function(){});
// $(function(){});
// $(document).ready(function(){});

(function($){
/**
 * html, text
 * wrap, contents
 * append, appendTo, prepend, prependTo
 * before, after
 * attr, val
 * remove, empty
 */

 var h1       = $('h1');
 var headBox  = $('#headBox');
 var gnbBox   = $('#gnbBox');
 var gnbList  = gnbBox.find('li');

 var viewBox  = $('#viewBox');
 var conBox   = $('#conBox');
 var footBox  = $('#footBox');

// headBox.prepend(h1);   // headBox내부의 앞에 h1을 담아라
h1.prependTo(headBox);    // h1을 headBox내부 앞에 담아라

gnbBox.prepend('<div class="gnb_btn">\
								<button type="button">메뉴</button>\
								</div>');
// --------------------------------------------------
var gnbLen = gnbList.length;
var i = 0;
var gnbListText;

for(; i< gnbLen; i++){
	gnbListText = gnbList.eq(i).text();
	gnbList.eq(i).html("<a href=\"#\">" + gnbListText + "</a>");
}

// 속성 = attr ==================================================================================
var gnbLinkArr = ['http://naver.com','http://daum.net','http://google.com','http://xidoweb.com'];
var j = 0;
var liLink; // = gnbList.eq(j).children('a');
// console.log( liLink.attr('href') );

for(; j < gnbLen; j++){
	liLink = gnbList.eq(j).children('a');
	liLink.attr({'href': gnbLinkArr[j], 'target':'_blank', 'title': gnbLinkArr[j]});
}

// ===============================================================================================
viewBox.prepend('<h2 class="hidden">광고 내용</h2>');
conBox.prepend('<h2 class="hidden">본문내용</h2>');
footBox.prepend('<h2 class="hidden">회사 정보</h2>');

viewBox.children('div').eq(0).html('<p>text</p>');
viewBox.children('div').eq(1).html('<p>text</p>');
viewBox.children('div').eq(2).html('<p>text</p>');

})(jQuery);
