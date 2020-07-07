var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');

var baseColor = "#07a";
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.strokeStyle = baseColor;
ctx.font = "40px sans-serif";
ctx.textAlign = 'center';
ctx.fillStyle = baseColor;

var MyGraph = function(x, y, p, s){

	var posX = x || 200;
	var posY = y || 200;
	var percent = p || 70; 
	var skill = s || 'program';

	var myP = function(percent){
		// percent  :  값 / 기준 * 100 -> 값 / 100 * 기준
		var p = (percent / 100 * 2) + 1.5;
		return Math.PI * p;
	};

	ctx.beginPath();
	ctx.arc(posX,posY,100, Math.PI * 1.5 , myP(percent), false);
	ctx.stroke();

	ctx.font = "bolder 35px sans-serif";
	ctx.fillText(skill, posX, posY);
	ctx.font = "bold 25px sans-serif";
	ctx.fillText(percent+ '%', posX, posY + 35);

}// MyGraph(x좌표, y좌표, percent, 스킬명);

MyGraph(150, 150, 90, 'HTML');
MyGraph(400, 150, 95, 'CSS');
MyGraph(650, 150, 95, 'SCSS');
MyGraph(150, 400, 85, 'Js');
MyGraph(400, 400, 85, 'jQuery');
MyGraph(150, 650, 70, 'Photoshop');
MyGraph(400, 650, 70, 'Illustrator');
MyGraph(650, 650, 70, 'Indesign');