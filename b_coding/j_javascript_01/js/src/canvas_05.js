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

	var posX = x * 250 - 100;
	var posY = y * 250 - 100;
	var percent = p ; 
	var skill = s || 'program';

	var myP = function(percent){
		// percent  :  값 / 기준 * 100 -> 값 / 100 * 기준
		var p = (percent / 100 * 2) + 1.5;
		return Math.PI * p;
	};

	ctx.beginPath();
	ctx.arc(posX,posY,100, Math.PI * 1.5 , myP(percent), false);
	ctx.stroke();

	ctx.font = "normal 35px sans-serif";
	ctx.fillText(skill, posX, posY-15);
	ctx.font = "bold 40px sans-serif";
	ctx.fillText(percent+ '%', posX, posY + 40);

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
MyBar(100,570, 70, 'Photoshop');
MyBar(500,570, 95, 'Illustator');
MyBar(100,700, 90, 'Indesign');
