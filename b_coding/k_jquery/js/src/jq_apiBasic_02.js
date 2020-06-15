// jq_apiBasic_02.js
// $.ready(function(){});
// $(function(){});
// $(document).ready(function(){});

(function($){
/**
 * html(html내용을 확인, 코드의 내부를 삭제 및 변경), text(글자내용을 확인, 코드내부의 글자를 삭제 및 변경)
 * wrap(감싸는 영역을 생성, 그자체의 내용을 학인), contents(내용 요소를 확인 : 코드+글자 포함)
 * append, appendTo, prepend, prependTo  (선택자 내부에 앞/뒤에 추가요소를 담는 기능)
 * before, after  (선택자 형제로 전/후 추가요소를 담는 기능)
 * attr(속성값을 확인, 지정속서을 변경하는 기능), val(form요소 내부의 value값을 확인/변경)
 * remove(선택요소자체를 삭제), empty(선택요소 내부를 비우는 기능)
 * clone(선택요소를 복제, 'true'를 함께 사용하면 내용요소의 기능포함 복제) 
 * addClass, removeClass(class이름값을 추가/삭제)
 * hasClass(선택요소에 해당클래스이름의 유무 판단)
 * is(선택요소에 class를 제외한 속성의 유무를 판단)
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
//  ================================================================================
var conArea = conBox.find('.con_area');
var conContents;
// conArea.empty();

for(i=0; i < 2; i+=1){
	conContents = conArea.children().eq(0).clone(true);
	conArea.append( conContents );
}

for(i=0; i < 3; i+=1){
	conArea.children().eq(i).attr({'class': 'con_0' + (i+1) });
}

/**
 * 
 */

})(jQuery);
