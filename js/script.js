var canvas, ctx, count = 10;

function init()
{
	createCanvas();
	setInterval(callDraw, 1000/30);
}

function createCanvas()
{
	canvas = document.createElement("canvas");
	canvas.height = 800;
	canvas.width = 800;
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
}

function callDraw()
{
	count++;
	draw(count, 5);
}

function draw(points, multiplier)
{
	var theta = Math.PI * 2 / points;

	//Clear current frame
	ctx.clearRect(0, 0, 800, 800);

	//Draw circle
	ctx.strokeStyle = "#fff";
	ctx.beginPath();
	ctx.arc(400, 400, 300, 0, Math.PI*2);
	ctx.stroke();

	//Draw connecting lines
	for(var x = 0;x < points;x++)
	{
		var connection = (x * multiplier) % points;
		var point1 = {
			xpos: Math.cos(x * theta) * 300 + 400,
			ypos: Math.sin(x * theta) * 300 + 400
		};
		var point2 = {
			xpos: Math.cos(connection * theta) * 300 + 400,
			ypos: Math.sin(connection * theta) * 300 + 400
		};
		ctx.beginPath()
		ctx.moveTo(point1.xpos, point1.ypos);
		ctx.lineTo(point2.xpos, point2.ypos);
		ctx.stroke();
	}
}

window.onload = init();