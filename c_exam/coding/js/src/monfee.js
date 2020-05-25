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

	headBoxWrap.css({width:'100%', height:headBoxH, background:headBoxBg});
	headBox.css({maxWidth:'940px', margin:'auto', background:'transparent'});

	// ---------------------------
})(jQuery);