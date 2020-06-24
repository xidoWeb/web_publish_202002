(function($){
	var win          = $(window);
	var openLaptop   = $('#openLaptop');
	var openH2       = openLaptop.find('h2');
	var macbook      = openLaptop.find('.macbook');
	var macbookInImg = '<img src="" alt="맥북이미지" />';
	var url          = '../img/mac/';
	var imgName, j;

	for(var i=0; i<93; i++){
		
		if(i)

		macbook.append(macbookInImg);
	}




	win.on('scroll', function(){
		var thisScroll = $(this).scrollTop();
		var myop = 1 - thisScroll / 400;

		// console.log(thisScroll);
		// console.log(myop);
		openH2.css({top: -thisScroll, opacity:myop});
	});	
})(jQuery);