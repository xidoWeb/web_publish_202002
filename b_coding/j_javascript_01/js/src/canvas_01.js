

  // var canvas = $('.paper')[0];
	// var canvas = document.getElementsByClassName('paper')[0];
	var canvas = document.querySelector('.paper');
	// if(canvas.getContext){console.log('canvas 지원');}

	var ctx = canvas.getContext('2d');

	// ctx.fillRect(x, y , width, height);   -> 면을 채우는 사각형
	// ctx.clearRect(x, y , width, height);  -> 채워진사각형 구멍을뚫어주는 형태
	// ctx.strokeRect(x, y , width, height); -> 선형태의 사각형

	ctx.fillStyle = "#f30";
	ctx.strokeStyle ="#fff";
	ctx.lineWidth   = 10;

	ctx.fillRect(100, 100, 600, 600);
	ctx.clearRect(150, 150, 400, 400);
	ctx.strokeRect(170,170, 300,300);

	ctx.fillStyle = "#fff";
	ctx.fillRect(200,200,100,100);

