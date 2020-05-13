	// jq_rel_display_02.js

	(function($){
	// start

	var headOffset = $('#headBox').offset().top;

	$(window).on('scroll', function(){
		$('#headBox').css({'position':'fixed', 'bottom':'auto', 'top':0});
		var wScroll = $(this).scrollTop();
		if(headOffset < wScroll){
		}else{
			$('#headBox').removeAttr('style');
		}
	});
	// -----------------------

	var langMember = $('.lang_member');
	var lmList     = langMember.find('li');
	var lmListLink = lmList.find('a');

	lmListLink.on('mouseenter focus', function(){
		lmList.addClass('action');
	});
	langMember.on('mouseleave', function(){
		lmList.removeClass('action');
	});
	lmListLink.eq(-1).on('blur', function(){
		lmList.removeClass('action');
	});

	// ------------------------------------
	var gnbNav = $('.gnb_navi');
	var gnbDl  = gnbNav.find('dl');
	var gnbTitle = gnbNav.find('dt');
	var gnbTitleLink = gnbTitle.children('a');
	var gnbContent = gnbNav.find('dd');
	// var gnbNavLink = gnbNav.find('a');
	var gnbConLink  = gnbContent.find('a');

	gnbContent.hide();
/* // part별로 처리
	gnbTitleLink.on('mouseenter focus', function(){
		 $(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp();
		 $(this).parent('dt').next('dd').stop().slideDown();
	});
	gnbNav.on('mouseleave', function(){
		gnbContent.stop().slideUp();
	});
	gnbContent.find('a').eq(-1).on('blur', function(){
		gnbContent.stop().slideUp();
	});
*/

	gnbDl.on('mouseenter', function(){
		gnbContent.stop().slideDown();
		gnbTitle.removeClass('action');
		$(this).find('dt').addClass('action');		
	});

  gnbNav.on('mouseleave', function(){
		gnbContent.stop().slideUp();
		gnbTitle.removeClass('action');
	});

	gnbTitleLink.on('focus', function(){
		gnbContent.stop().slideDown();
		gnbTitle.removeClass('action');
		$(this).parent('dt').addClass('action');
	});

	gnbConLink.on('focus', function(){
		gnbTitle.removeClass('action');
		$(this).parents('dd').prev('dt').addClass('action');
		
		gnbContent.find('li').removeClass('action');
		$(this).parent('li').addClass('action');
	});

	gnbContent.find('a').eq(-1).on('blur', function(){
		gnbContent.stop().slideUp();
		gnbTitle.removeClass('action');
	});

/*
gnbNavLink.on('keyup', function(e){
			e.preventDefault();
			// e.stopPropagation();
			// console.log(e.keyCode);
			// 왼(37), 위(38), 오른(39), 아래(40), esc(27)
			
			var eKey = e.keyCode;
			var i = $(this).parent().index();
			var thisSel =  $(this).parentsUntil('dl').eq( -1 );
			var liI =  $(this).parentsUntil('ul').eq( -1 ).index();
			
			console.log();

			// console.log(i);
			// switch(eKey){
				// case 37:
			// 		$(this).parentsUntil('ul').parentsUntil('ul').prev('li').find('dt').find('a').focus();
			// 		break;
				// case 38:
		
				// break;
				// case 39:
			// 		$(this).parent('li').next('li').find('a').focus();
					// break;
			// 	case 40:
			// 		$(this).parentsUntil('ul').parentsUntil('ul').next('li').find('dt').find('a').focus();
			// 		break;
			// 	case 27:
			// 		gnbContent.stop().slideUp();
			// 		break;
			// }
		});

*/

	// =============================================================================
	var wH = $(window).height();
	//  $('#viewBox').height(wH);
	$('#viewBox').css({'height':wH + 'px'});

	// =============================================================================
		var accor = $('.accor');
		var accorDt = accor.find('dt');
		var accorBtn = accorDt.children('button');

		accorBtn.on('click', function(e){
			e.preventDefault();
			var myT           = $(this);
			var thisNext      = myT.parent('dt').next('dd');
			var thisNextState = thisNext.css('display') == 'none';
			
			if(thisNextState){
				thisNext.siblings('dd').stop().slideUp(300);
				thisNext.stop().slideDown(300);
				accorBtn.removeAttr('style');
				myT.css({'backgroundColor':'#aca'});
			}else{
				thisNext.stop().slideUp(300);
				myT.css({'backgroundColor':'transparent'});
			}
		/*
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
		*/
			
			// i요소 rotate기능 ---------------------------------------
			var myTinI           = myT.children('i');
			var otherTinI        = myT.parent('dt').siblings('dt').find('i');

			if(thisNextState){
				myTinI.css({'transform':'rotate(180deg)', 'transition':'all 300ms ease'});
				// otherTinI.css({'transform':'rotate(0)', 'transition':'none'});
				otherTinI.removeAttr('style');
			}else{
				myTinI.removeAttr('style');
			}
		
			// ------------------------------------------------
			
		}); 
	// end
	})(jQuery);
