
var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'hsla('+ Math.random() * 360  +', 100%, 50%, 0.7)';
var MoveCircle = function(posX, poY){
	ctx.clearRect(0,0, canvas.width, canvas.height);
	// ctx.fillStyle = 'hsla('+ Math.random() * 360  +', 100%, 50%, 0.7)';
	ctx.beginPath();
	ctx.arc(posX, poY, 80, 0, Math.PI*2, false);
	ctx.closePath();
	ctx.fill();
}

var i=100;
var j = 400;
var setmove;
var MoveAni = function(){
	setmove = setInterval(function(){
		i += 20;
		if(i >200){	j += 10;
			if(j > 600){ j = 600; }
		}
		MoveCircle(i, j);

		if(i > 700){
			clearInterval(setmove);
		}
	}, 40);
};
// MoveAni();



var k = 0;
var reqAni;
function Move(){
	k += 1;
	console.log(k);
	reqAni = requestAnimationFrame(Move);

	if(k >= 500){
		cancelAnimationFrame(reqAni);
	}
}
Move();
