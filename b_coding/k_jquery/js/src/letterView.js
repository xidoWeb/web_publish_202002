(function($){

	var inputText1 = $('.text_01');
	var text1Con   = inputText1.text();	
	inputText1.empty();	
	var t1Arr = text1Con.split('');
	var endBox = '<span class="end_box"></span>';
	// 첫번째 기능
	(function(){
		// console.log(text1Con);
		// console.log(t1Arr);
		var i = 0;
		var textGo;
		var StartText = function(){
			textGo = setInterval(function(){
				// 글자 하나씩 나타나게 만들기
				if(i < t1Arr.length){
					inputText1.append( t1Arr[i] );
				}	else if( i == t1Arr.length ){
					// 마지막에 커서형태 삽입
					inputText1.append(endBox);
				}else if( i > t1Arr.length ){
					// 내용 모두 작성시 종료
					// clearInterval(textGo);	
					// 커서가 깜빡거리게 만들기 
					inputText1.find('.end_box').remove();
					i = t1Arr.length-1;
					// console.log(i)
				}
				i += 1;
			},300);
		};
		StartText();
	})();

	// ----------------------------------------------------
	
	// 두번째 기능
	var inputText2 = $('.text_02');
	var text2Con   = inputText2.text();
	var t2Arr = text2Con.split('');
	// console.log(t2Arr);
	inputText2.empty();
	(function(){
		var i = 0;
		var j = 0;
		setInterval(function(){
			if(i < t2Arr.length){
				inputText2.append(t2Arr[i]);	
			}else if(i == t2Arr.length){
				inputText2.append(endBox);
			}else if(i > t2Arr.length){
				inputText2.find('.end_box').remove();
				i = t2Arr.length -1;
				j += 1;
				// console.log(j);
				if(j >= 5){
					i = -3;
					j = 0;
					inputText2.empty();
				}
			}
			i += 1;
		}, 300);
	})()
	
	// 세번째 기능

	inputText2.after('<p class="input_text text_03"></p>');
	var inputText3 = $('.text_03');
	var t3Text = "세번째 기능을 만들기!";
	var t3Arr  = t3Text.split('');
	// console.log(t3Arr);
	(function(){
		var i=0;
		var j = true;
		var samt;

		setInterval(function(){
			if(i < t3Arr.length && j == true){
				inputText3.append(t3Arr[i]);
				i += 1;
				if(i >= t3Arr.length){ j = false; }
			}else if(j == false && i > 0){
				samt = inputText3.text().slice(0, -1);
				inputText3.text(samt); 
				i -= 1;
			}else{
				j = true;
			}
		}, 300);
	})()

})(jQuery);