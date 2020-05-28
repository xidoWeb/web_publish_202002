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
	/*	
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
	*/

// --------------------------------------------------------------
// v.2 클릭시 양끝 마지막요소를 반대편끝으로 붙여서 무한으로 이동하게 만들기

materialUl.css({marginLeft: -matFirstSize +'px'});
var thisOk = true;
materialBtn.on('click', function(e){
	e.preventDefault();
	var thisIt = $(this)[0];
	var nextBtn = materialBtnArea.children('.next')[0];	
	if(thisIt === nextBtn && thisOk){
		thisOk = false;
		materialUl.animate({left: -matFirstSize + 'px'}, function(){
			materialLi.eq(0).appendTo(materialUl);
			materialUl.css({left:0});
			materialLi   = materialUl.find('li');
			thisOk = true;
		});
	}else if(thisOk){
		thisOk = false;
		materialUl.animate({left:matFirstSize + 'px'}, function(){
			materialLi.eq(-1).prependTo(materialUl);
			materialUl.css({left:0});
			materialLi   = materialUl.find('li');
			thisOk= true;
		});
	}
});



// --------------------------------------------------------------
})(jQuery);
