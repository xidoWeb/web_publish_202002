(function($){
	// ajax기능 이해하기1
	var d;
/*
	$.ajax({
		url:'../data/ajaxTest.json',
		dataType:'json',
		async:false, 
		success:function(data){
			d = data;
			return d;
		}
	});
	console.log(d);
	$('#wrap').append(d[0])
*/

// $.load();
var wrap = $('#wrap');

wrap.append('<div class="headBox_wrap"></div>');
wrap.append('<div class="footBox_wrap"></div>');

var headWrap = wrap.find('.headBox_wrap');
var footWrap = wrap.find('.footBox_wrap');
var h1 = $('h1');

headWrap.load('../page/common/headBox.html', function(){
		var headBox = $('#headBox');
		// console.log(headBox);
		headBox.prepend(h1);
});

footWrap.load('../page/common/footBox.html');

// setTimeout(function(){
// 	var headBox = $('#headBox');
// 	console.log(headBox);
// }, 100);

})(jQuery);