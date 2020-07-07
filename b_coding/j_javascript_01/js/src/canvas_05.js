var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');

var baseColor = "#07a";
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.strokeStyle = baseColor;
ctx.font = "40px sans-serif";
ctx.textAlign = 'center';
ctx.fillStyle = baseColor;
// var moveInterval2;
// var SetGo2 = function(){
// 	var i = 0;
// 	moveInterval2 = function(){
// 		i += 1;
// 		ctx.clearRect(0,0,canvas.width, canvas.height);
// 		MyGraph(2,1, i, 'HTML');
// 		console.log(i);
// 		(i < 90)?requestAnimationFrame(moveInterval2):
// 						 cancelAnimationFrame(moveInterval2);
// 	}
// 	moveInterval2();
// };
// SetGo2();
	var MyGraph = function(x, y, p, s){		
		var posX = x * 250 - 100;
		var posY = y * 250 - 100;
		var percent = p ; 
		var skill = s || 'program';
		// var 
		
		var animationCircle;
		var i = 0;
		var CircleGraph = function(){
			animationCircle = function(percent){

				var lineWidth = 15;
				var r    = 100;
				var rect = (r + lineWidth) * 2 + 10;
				ctx.lineWidth = lineWidth;
			
			var myP = function(percent){
				// percent  :  값 / 기준 * 100 -> 값 / 100 * 기준
				var p = (percent / 100 * 2) + 1.5;
				return Math.PI * p;
			};
			// 240은 (반지름 100과, 선두께 15) * 2 계산값보다 10큰 영역으로 설정
			ctx.clearRect(posX - (rect/2), posY - (rect/2), rect, rect);

			ctx.beginPath();
			ctx.arc(posX, posY, r , Math.PI * 1.5 , myP(percent), false);
			ctx.stroke();		
			ctx.textAlign = 'center';
			ctx.fillStyle = baseColor;
			ctx.font = "normal 35px sans-serif";
			ctx.fillText(skill, posX, posY-15);
			ctx.font = "bold 40px sans-serif";
			ctx.fillText(percent+ '%', posX, posY + 40);
		};

		i += 1;
		animationCircle( i );
		(i < percent) ? requestAnimationFrame(CircleGraph): 
										cancelAnimationFrame(CircleGraph);
	};
	CircleGraph();
}// MyGraph(x좌표, y좌표, percent, 스킬명);

var MyBar = function(x, y, p, t){

	var per = p * 2;

	ctx.globalAlpha = 0.3;
	ctx.lineWidth = 30;

	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+200, y);
	ctx.stroke();
	
	ctx.globalAlpha = 1;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+ per, y);
	ctx.stroke();

	ctx.fillStyle = baseColor;
	ctx.font = "bold 30px myriadPro";
	ctx.textAlign = "left";
	ctx.fillText(t, x-15, y+55);

	ctx.textAlign = "right";
	ctx.fillStyle = "#f07";
	ctx.fillText(p + '%', x+225, y+55)
}


MyGraph(1,1, 90, 'HTML');
MyGraph(2,1, 95, 'CSS');
MyGraph(3,1, 95, 'SCSS');
MyGraph(1,2, 85, 'Js');
MyGraph(2,2, 85, 'jQuery');
// MyGraph(1,3, 70, 'Photoshop');
// MyGraph(2,3, 70, 'Illustrator');
// MyGraph(3,3, 70, 'Indesign');
MyBar(100,560, 70, 'Photoshop');
MyBar(500,560, 95, 'Illustator');
MyBar(100,680, 90, 'Indesign');


// animation - setInterval
/*
 var moveInterval;
 var SetGo = function(){
 	var i = 0;
 	moveInterval = setInterval(function(){		
 		i +=1;
 		if(i <= 90){
 			// ctx.clearRect(0,0, canvas.width, canvas.height);
 			MyGraph(1,1, i, 'HTML');
 		}else{
 			clearInterval(moveInterval);
 		}
 	}, 10);
 };
 SetGo();
*/

// animation-2 requestAnimationFrame();

// var moveInterval2;
// var SetGo2 = function(){
// 	var i = 0;
// 	moveInterval2 = function(){
// 		i += 1;
// 		ctx.clearRect(0,0,canvas.width, canvas.height);
// 		MyGraph(2,1, i, 'HTML');
// 		console.log(i);
// 		(i < 90)?requestAnimationFrame(moveInterval2):
// 						 cancelAnimationFrame(moveInterval2);
// 	}
// 	moveInterval2();
// };
// SetGo2();