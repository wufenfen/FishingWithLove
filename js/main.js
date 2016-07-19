var frontCanvas, backCanvas;
var frontCtx, backCtx; 
var lastTime, deltaTime;
var bgPic = new Image(); 

var canWidth, canHeight;
var ane, fruit;

var mom;

var mx, my; //mouse position

document.body.onload = playGame;

function playGame (argument) {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameLoop();
}

function init() {
	frontCanvas = document.getElementById("front");
	frontCtx = frontCanvas.getContext('2d');
	backCanvas = document.getElementById("back");
	backCtx = backCanvas.getContext('2d');
	mx = 0;
	my = 0;
	frontCanvas.addEventListener('mousemove', onMouseMove);

	canWidth = frontCanvas.width;
	canHeight = frontCanvas.height; 
	bgPic.src = "./src/background.jpg";

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();
	
	mom = new momObj();
	mom.init();


}

function gameLoop() {
	window.requestAnimFrame(gameLoop);
	deltaTime = Date.now() - lastTime;
	lastTime = Date.now();

	drawBackground(); 
	ane.draw(); 
	fruitMonitor();
	fruit.draw();

	frontCtx.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
}

function onMouseMove(e){
	mx = e.offsetX;
	my = e.offsetY;
}