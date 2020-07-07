
// var canvas = document.getElementsByClassName('paper')[0];
var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');



ctx.fillStyle = "#fff";
ctx.strokeStyle = "#f00";
ctx.lineWidth = 20;
ctx.lineJoin  = 'round'; // 모서리모양
// lineJoin =  'miter' | 'round' | 'bebel';
ctx.lineCap   = 'round';
// lineCap  = 'butt' | 'round' | 'square';


// 사각형을 제외한 선을 그릴때에는 선의 시작이라는 표기를 먼저 해야함
ctx.beginPath();  //최초의 시작

ctx.moveTo(200, 200); // 시작점의 위치잡는것
ctx.lineTo(200, 400); // 시작점에서 그려지는 위치
ctx.lineTo(600, 400); // 그다음선의 위치
// ctx.lineTo(200,200);
// ctx.closePath();      // 닫힌도형 만들기

ctx.stroke();
// ctx.fill();

ctx.moveTo(700,700);
ctx.lineTo(500, 700);
ctx.stroke();

var i=0;
ctx.moveTo(100,100);
setInterval(function(){
	if(i < 500){
		i += 10;	
		ctx.lineTo(100, 100 + i);
		ctx.stroke();
	}
}, 50);