(function($){

	var inputText1 = $('.text_01');
	var inputText2 = $('.text_02');
	
	var text1Con   = inputText1.text();
	var text2Con   = inputText2.text();
	
	console.log(text1Con);
	inputText1.empty();
	inputText2.empty();
	
	var t1Arr = text1Con.split('');
	console.log(t1Arr);
	
	var endBox = '<span class="end_box"></span>';
	var i = 0;
	var textGo;
	var StartText = (function(){
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
	})()
	
	

})(jQuery);