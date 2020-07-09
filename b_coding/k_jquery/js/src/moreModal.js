// moreModal.js

var listData;
var colorArr = [];
var NowListLen;

(function($){
	var listView = $('#listViewBox');
	var listUl   = listView.find('ul');
	var moreBtn  = listView.find('.more_btn');
	// var listData;
	var liCode  = '<li><a href="#"><span></span></a></li>';
	

	// console.log('before');
	i = 0; 
	
	var InsertLi = function(db ,color){
		NowListLen = i + 10;
		
		for(; i<NowListLen; i+=1){
			console.log(i,  db.length)
			if(i >= db.length){
				moreBtn.hide();
				break;
			}else{				
				listUl.append(liCode);
				// console.log(i);
				listUl.find('li').eq(i).children('a').css({
					backgroundColor:color[i]
				});
				listUl.find('li').eq(i).find('span').text(db[i].displayName);
			}
		}
	};
	
	$.ajax({
		url:'../data/people2.json',
		async:false,
		success:function(data){
			listData = data;
			// 컬러 차트 만들기 ------------------------------------
			var dataLen = listData.length;
			// var colorArr = [];
			for(var colorI = 0; colorI < dataLen; colorI += 1){
				// hsla(각도, 50%, 50%, 1); 색상, 채도, 명도, 투명도
				colorArr[colorI] ='hsla(' + parseInt(Math.random() * 360) + ', ' + '50%, 50%, 1)';
			}
			// --------------------------------------------------
			// 더보기 버튼 클릭
			InsertLi(listData, colorArr);
			moreBtn.on('click', function(){
				InsertLi(listData, colorArr);
			});
		}
	});	

})(jQuery);