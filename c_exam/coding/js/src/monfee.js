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
	headBox.css({maxWidth:'940px', margin:'auto', backgroundColor:'transparent'});

	// ---------------------------
	 var bestNewsBox = $('#bestNewsBox');
	 bestNewsBox.wrap('<div class="bestNewsBox_wrap"></div>');

	 var bestNewsBoxWrap = $('.bestNewsBox_wrap');

	 var bestNewsBoxBg = bestNewsBox.css('backgroundColor');
	 bestNewsBoxWrap.css({width:'100%', backgroundColor:bestNewsBoxBg});
	 bestNewsBox.css({width:'940px', backgroundColor:'transparent'});

	// ---------------------------
})(jQuery);