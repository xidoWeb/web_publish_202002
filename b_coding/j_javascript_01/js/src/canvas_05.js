var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');

var baseColor = "#07a";
ctx.lineWidth = 15;
ctx.strokeStyle = baseColor;
ctx.font = "40px sans-serif";
ctx.textAlign = 'center';
ctx.fillStyle = baseColor;

var posX = 200;
var posY = 200;
var percent = 70; 

var myP = function(percent){
	// percent  :  값 / 기준 * 100 -> 값 / 100 * 기준
	var p = (percent / 100 * 2) + 1.5;
	return Math.PI * p;
};

ctx.beginPath();
ctx.arc(posX,posY,100, Math.PI * 1.5 , myP(percent), false);
ctx.stroke();

ctx.font = "normal 35px sans-serif";
ctx.fillText('jQuery', posX, posY);
ctx.font = "bold 25px sans-serif";
ctx.fillText(percent+ '%', posX, posY + 35);