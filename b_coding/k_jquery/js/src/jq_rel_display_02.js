// jq_rel_display_02.js

(function($){
// start
	var accor = $('.accor');
	var accorDt = accor.find('dt');
	var accorBtn = accorDt.children('button');

	accorBtn.on('click', function(e){
		e.preventDefault();
		var myT      = $(this);
		var thisNext = myT.parent('dt').next('dd');
		var thisNextState = thisNext.css('display') == 'none';
		
		if(thisNextState){
			thisNext.siblings('dd').stop().slideUp(300);
			thisNext.stop().slideDown(300);
		}else{
			thisNext.stop().slideUp(300);
		}
	
		// class 이름변경 ---------------------------------------
		var myTinI           = myT.find('i');
		var otherTinI        = myT.parent('dt').siblings('dt').find('i');
		var hasDownClassName = myTinI.hasClass('fa-caret-square-down');
		// console.log(hasDownClassName);

		if(hasDownClassName){
			myTinI.removeClass('fa-caret-square-down');
			myTinI.addClass('fa-caret-square-up');

			otherTinI.removeClass('fa-caret-square-up');
			otherTinI.addClass('fa-caret-square-down');
		}else{
			myTinI.removeClass('fa-caret-square-up');
			myTinI.addClass('fa-caret-square-down');
		}
		// ---------------------------------------
		
		/*
		// i요소 rotate기능 ---------------------------------------
		var myTinI           = myT.children('i');
		var otherTinI        = myT.parent('dt').siblings('dt').find('i');

		myTinI.css({'transform':'rotate(180deg)', 'transition':'all 300ms ease'});
		// otherTinI.css({'transform':'rotate(0)', 'transition':'none'});
		otherTinI.removeAttr('style');
		// ------------------------------------------------
		*/
	}); 
// end
})(jQuery);
