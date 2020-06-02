// landing.js
(function($){
	var ft = $('.fixed_text').find('span');
	var part = [];
	    part[0] = $('.part_01');
	    part[1] = $('.part_02');
	    part[2] = $('.part_03');
	    part[3] = $('.part_04');
	    part[4] = $('.part_05');
	var partOffset = [];

	var i=0;
	for(; i < part.length; i += 1){
		partOffset[i] = part[i].offset().top;
	}
// -----------------------------------------
var win = $(window);
var winH = win.innerHeight();
var thisTop = win.scrollTop() + (winH/4*3);
ft.text(thisTop);

// -----------------------------------------
var ScrollView = function(){
	for(var j=0; j<partOffset.length; j++){
		if(thisTop > partOffset[j]){
			part[j].find('h2').slideDown();
		}
	}
};
ScrollView();

// -----------------------------------------
win.on('scroll', function(e){
	thisTop = $(this).scrollTop() + 800;
	ft.text(thisTop);
	ScrollView();
});

// -----------------------------------------
})(jQuery);