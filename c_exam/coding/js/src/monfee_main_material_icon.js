(function(){

	var materialBtnArea =$('.material_btn');
	var materialBtn = materialBtnArea.children('button');

	var materialArea = $('.material_area');
	var materialUl   = materialArea.find('ul');
	var materialLi   = materialUl.find('li');

	// materialLi.eq(-1).prependTo(materialUl);
	var matLiLast = materialLi.eq(-1);
	materialUl.prepend(matLiLast);
	materialLi   = materialUl.find('li');
	/*
	var matFirst_01 = parseInt(materialLi.eq(0).css('width'));
	var matFirst_02 = parseInt(materialLi.eq(0).css('marginLeft'));
	var matFirst_03 = parseInt(materialLi.eq(0).css('paddingLeft'));
	var matFirst_04 = parseInt(materialLi.eq(0).css('paddingRight'));
	var matFirstSize = matFirst_01 +  matFirst_02 + matFirst_03 + matFirst_04;
	*/
	var matFirstSize = materialLi.eq(1).outerWidth(true);
	//materialUl.css({marginLeft: -matFirstSize +'px'});
	materialUl.css({position:'relative'});
	
	var n = 0;
	materialUl.css({width:250+'%'});
	var btnView = function(){
		if(n <= 0){
			materialBtnArea.children('.prev').hide();
			materialBtnArea.children('.next').show();
		}else if(n >= 5){
			materialBtnArea.children('.prev').show();
			materialBtnArea.children('.next').hide();
		}else{
			materialBtn.show();
		}
	};
	btnView();

	materialBtn.on('click', function(e){
		e.preventDefault();
		var thisIt = $(this)[0];
		var nextBtn = materialBtnArea.children('.next')[0];	
		if(thisIt === nextBtn){
			materialBtn.hide();			n+=1;
			materialUl.animate({left: -n * matFirstSize + 'px'}, function(){
				btnView();
			});
		}else{
			materialBtn.hide();			n -=1;
			materialUl.animate({left: -n * matFirstSize + 'px'}, function(){
				btnView();
			});
		}
	});

})(jQuery);