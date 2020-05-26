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
	 {title: 'story',  // gnbArr[0].title
		subList : [  // gnbArr[0].subList  
		// gnbArr[0].subList[0].linkName , gnbArr[0].subList[0].link
			{linkName : '몽피이야기', link : 'storyMonfee.html'}, 
		// gnbArr[0].subList[1].linkName , gnbArr[0].subList[1].link
		{linkName : '회사소개', link : 'aboutCompany.html' },
		// gnbArr[0].subList[2].linkName , gnbArr[0].subList[2].link
	    {linkName : '후원업체',  link : 'sponCompany.html'}
	 ]},
	 {title: 'menu',  //gnbArr[1].title
	  subList : [     // gnbArr[1].subList
		  {linkName : '커피류', link : 'storyMonfee.html'},
	    {linkName : '기타음료', link : 'aboutCompany.html' },
	    {linkName : '음식 및 디저트',  link : 'sponCompany.html'},
	    {linkName : '선물용 상품',  link : 'sponCompany.html'},
	    {linkName : '기타 제품',  link : 'sponCompany.html'}
	 ]},
	 {title: 'store',  // gnbArr[2].title
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
gnbBox.append('<ul class="gnb_area clearfix"></div>');
// console.log(gnbArr.length);
var gnbArea = gnbBox.children('.gnb_area');

var i=0;
var gnbDt, gnbTitle, gnb_sub, gnbSubLength, gnbSubLink, gnbSubText, gnbSubHref;
for(; i < gnbArr.length; i++){
	gnbArea.append('<li><dl> <dt></dt> <dd></dd> </dl></li>');

	gnbDt = gnbArea.children('li').eq(i).find('dt');
	gnbDt.attr({tabIndex:0});
	gnbTitle = gnbArr[i].title;

	gnbDt.text( gnbTitle );
	gnbArea.find('dd').eq(i).append('<ul class="gnb_sub"></ul>');
	gnb_sub = gnbArea.find('.gnb_sub');	
	
	gnbSubLength = gnbArr[i].subList.length; 
	for(var j = 0; j < gnbSubLength; j++){
		gnb_sub.eq(i).append('<li><a href=""></a></li>');
		gnbSubLink = gnb_sub.eq(i).find('li').eq(j).find('a');
		gnbSubText = gnbArr[i].subList[j].linkName;
		gnbSubHref = gnbArr[i].subList[j].link;
		gnbSubLink.text(gnbSubText);
		gnbSubLink.attr({href:gnbSubHref});
	}
}// ---------------------------------------

var gnbList = gnbArea.children('li');
var gnbListLength = gnbList.length;
gnbList.css({width:100 / gnbListLength + '%'});
// --------------------------------------------
gnbArea.find('dd').hide();

gnbArea.on('mouseenter', function(){
	gnbArea.find('dd').stop().slideDown();
});
headBox.on('mouseleave', function(){
	gnbArea.find('dd').stop().slideUp();
});
// -------------------------------------------------
// news 


var newsList = [
	{img:'menu_01.png', imgNarr:'이미지설명', title:'title_01', content:'ladsfasdforem........'},
	{img:'menu_02.png', imgNarr:'이미지설명', title:'title_02', content:'lorem..asdfasdf......'},
	{img:'menu_03.png', imgNarr:'이미지설명', title:'title_03', content:'lorem...dfs asdf adsfasdf.'},
	{img:'menu_04.png', imgNarr:'이미지설명', title:'title_04', content:'lorem........'},
	{img:'menu_05.png', imgNarr:'이미지설명', title:'title_05', content:'lorem........'},
	{img:'menu_06.png', imgNarr:'이미지설명', title:'title_06', content:'lorem........'},
	{img:'menu_07.png', imgNarr:'이미지설명', title:'title_07', content:'lorem........'}
];

var imgUrl ='../img/monfee/new_menu/';

var bestNews = $('#bestNewsBox');
bestNews.append('<ul class="clearfix"></ul>');
var bestNewsUl = bestNews.children('ul');

var textEl = function(i){
	var	listEl = '<li><a href="#">\
						<div class="img_bg"><span class="hidden">'+ newsList[i].imgNarr +'</span></div>\
						<dl><dt>'+ newsList[i].title +'</dt>\
							<dd>'+ newsList[i].content +'</dd>\
						</dl>\
					</a></li>';
	return listEl;
};

var i=0;
for(; i<newsList.length; i++){	
	bestNewsUl.append( textEl(i) );
	bestNewsUl.children('li').eq(i).find('.img_bg').css({
															backgroundImage:'url('+ imgUrl +newsList[i].img +')',
															backgroundRepeat:'no-repeat',
															backgroundPosition:'50% 50%',
															backgroundSize:'cover'
														})
}





// ------------------------------------------
})(jQuery);