// monfee.js

(function($){
	var win = $(window);
	var winH = win.height();

	var wrap = $('#wrap');
	wrap.height(winH);

	// ---------------------------
	var headBox = $('#headBox');
	headBox.wrap('<div class="headBox_wrap"></div>');

	var headBoxWrap = headBox.parent('div');
	var headBoxH = headBox.css('height');
	var headBoxBg = headBox.css('backgroundColor');

	headBoxWrap.css({
		width:'100%', height:headBoxH, backgroundColor:headBoxBg,
		position:'fixed', top:0, left:0, zIndex:1000
	});
	headBox.css({width:'940px', margin:'auto', backgroundColor:'transparent'});

	// ---------------------------
	 var bestNewsBox = $('#bestNewsBox');
	 bestNewsBox.wrap('<div class="bestNewsBox_wrap"></div>');

	 var bestNewsBoxWrap = $('.bestNewsBox_wrap');

	 var bestNewsBoxBg = bestNewsBox.css('backgroundColor');
	 bestNewsBoxWrap.css({width:'100%', backgroundColor:bestNewsBoxBg});
	 bestNewsBox.css({width:'940px', backgroundColor:'transparent'});

var gnbArr = [
	 {title: 'story',
	  subList : [
		  {linkName : '몽피이야기', link : 'storyMonfee.html'},
	    {linkName : '회사소개', link : 'aboutCompany.html' },
	    {linkName : '후원업체',  link : 'sponCompany.html'}
	 ]},
	 {title: 'menu',
	  subList : [
		  {linkName : '커피류', link : 'storyMonfee.html'},
	    {linkName : '기타음료', link : 'aboutCompany.html' },
	    {linkName : '음식 및 디저트',  link : 'sponCompany.html'},
	    {linkName : '선물용 상품',  link : 'sponCompany.html'},
	    {linkName : '기타 제품',  link : 'sponCompany.html'}
	 ]},
	 {title: 'store',
	  subList : [
		  {linkName : '신규매장', link : 'storyMonfee.html'},
	    {linkName : '매장찾기', link : 'aboutCompany.html' },
	    {linkName : '창업설명회',  link : 'sponCompany.html'},
	    {linkName : '창업스토리',  link : 'sponCompany.html'}
	 ]},
	 {title: 'news',
	  subList : [
		  {linkName : '이벤트', link : 'storyMonfee.html'},
	    {linkName : '공지사항', link : 'aboutCompany.html' },
	    {linkName : '프로모션',  link : 'sponCompany.html'},
	    {linkName : '미디어광고',  link : 'sponCompany.html'}
	 ]}
	];
// ----------------------------
var gnbBox = $('#gnbBox');
gnbBox.append('<ul class="gnb_area"></div>');



// ---------------------------
})(jQuery);