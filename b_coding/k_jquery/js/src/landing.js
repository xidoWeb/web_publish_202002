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

// ----------------------------------------
// 추가 내용 세팅
var p1 = $('.p1');
var p2 = $('.part_02').children('div');
var p3 = $('.part_03');
var p4 = $('.part_04 ').find('li');
var p5 = $('.part_05');
var p5Day = p5.find('.day');
var yy   = p5Day.find('.yy');
var mm   = p5Day.find('.mm');
var dd   = p5Day.find('.dd');
var myDay = [2020, 6, 2];

var z = 0;
var setIY;
var myCount = function(){
	setIY = setInterval(function(){ 
		if(z <= (myDay[0] - 100)){
			z+=5;
		}else if(z < myDay[0]){
			z+=1;
		}
		yy.text(z);
	}, 10);
};

// -----------------------------------------
var ScrollView = function(){
	thisTop = win.scrollTop() + (winH/4*3);
	for(var j=0; j<partOffset.length; j++){
		if(thisTop > partOffset[j]){
			part[j].find('h2').slideDown();

			switch(j){
				case 0:
					p1.slideDown(500);
				break;
				case 1:	
				setTimeout(function(){
					p2.css({display:'block', opacity:0, position:'relative'});
					p2.eq(0).delay(500).animate({opacity:1, top:'50px'}, 800);
					p2.eq(1).delay(600).animate({opacity:1, top:'70px'}, 700);
				}, 100);
				break;
				case 2:
					p3.addClass('active');
				break;
				case 3:
					setTimeout(function(){ p4.eq(0).addClass('active'); }, 0);
					setTimeout(function(){ p4.eq(1).addClass('active'); }, 400);
					setTimeout(function(){ p4.eq(2).addClass('active'); }, 800);
					setTimeout(function(){ p4.eq(3).addClass('active'); }, 1200);						
				break;
				case 4:
					setTimeout(function(){
						myCount();
					}, 500);
				break;
			}
		}
	}
};
ScrollView();

// -----------------------------------------
win.on('scroll', function(e){
	ft.text(thisTop);
	ScrollView();
});

// -----------------------------------------
// for(var z=0; z <= 2020; z++){
// }
	








})(jQuery);