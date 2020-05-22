	// 선택자
	var win = $(window);
	var headBox = $('#headBox');
	// var gnbBox  = $('#gnb');
	var gnbMenu = $('#gnbBox');
	var gnbBtn  = gnbMenu.find('.gnb_view_btn');
	var gnbList = gnbMenu.find('.gnb_list');
	
	var mob700 = function(){	    
		// 버튼 클릭
		gnbBtn.on('click',['button'], function(e){
			e.preventDefault();
			console.log('!!!!');
			gnbList.stop().slideToggle();
		});
	};

	var tablet1400 = function(){	
		gnbList.on('mouseenter', function(){
			$(this).addClass('action');
		});
		headBox.on('mouseleave', function(){
			gnbList.removeClass('action');
		});
	};

	
	var pcFull  = function(){    
		gnbList.on('mouseenter', function(){
			gnbList.addClass('action');
		});
		gnbList.on('mouseleave', function(){
			gnbList.removeClass('action');
		});
	};
