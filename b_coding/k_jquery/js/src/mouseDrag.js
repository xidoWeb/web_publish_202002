//  mouseDrag.js

(function($){
	// 첫번째 기능
	var part_01 = $('.part_01');
	var beforePosX;
	var afterPosX;


	var TouchDrag = function(){
		var result = beforePosX - afterPosX;
		if(result < -20){

		}else if(result > 20){

		}else{

		}
	}


	// touchstart: 터치를 시작하는 지점
	part_01.on('touchstart mousedown', function(e){
		// console.log(e);
		var eType = e.type;
		var posX;
		
		if(eType == 'touchstart'){
			posX = e.touches[0].pageX;
		}else if(eType == 'mousedown'){
			posX = e.originalEvent.pageX;
		}
		beforePosX = posX;
		// console.log('start: ', posX);
	});

	// -----------------------------------------------------	
	part_01.on('touchend mouseup', function(e){
		var eType = e.type;
		(function(){
			var posX;
			if(eType == 'touchend'){
				posX = e.changedTouches[0].pageX;
			}else if(eType == 'mouseup'){
				posX = e.originalEvent.pageX;
			}
			return afterPosX = posX;
		})()

		// console.log( beforePosX, afterPosX );
		TouchDrag();
	});



	
})(jQuery);