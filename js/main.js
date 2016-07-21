var frontCanvas, backCanvas;
var frontCtx, backCtx; 
var lastTime, deltaTime;
var bgPic = new Image(); 

var canWidth, canHeight;
var ane, fruit, wave, halo, dust;

var mom, baby, data;

var mx, my; //mouse position

var resetBtn;

document.body.onload = function(){
	resetBtn = document.getElementById("reset");
	resetBtn.onclick = function(){
		playGame(); 
	};
	playGame();
};

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
	backCtx.font= "30px Arial";
	backCtx.textAlign = "center";
	data = new dataObj(); 
	frontCanvas.addEventListener('mousemove', onMouseMove);

	canWidth = frontCanvas.width;
	canHeight = frontCanvas.height; 
	mx = canWidth*Math.random();
	my = canHeight*Math.random();
	bgPic.src = "./src/background.jpg";

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();
	
	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	wave = new waveObj();
	wave.init();

	halo = new haloObj();
	halo.init();

	dust = new dustObj();
	dust.init();
}

function gameLoop() {
	window.requestAnimFrame(gameLoop);
	deltaTime = Date.now() - lastTime;
	lastTime = Date.now();
	if( deltaTime > 50 ){
		deltaTime = 50;
	}

	drawBackground(); 
	ane.draw(); 
	fruitMonitor();
	fruit.draw();

	frontCtx.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	baby.draw();

	fruitEatenByMom();
	momFeedBaby();

	data.draw();
	wave.draw();
	halo.draw();
	dust.draw(); 
}

function onMouseMove(e){
	if(data.gameOver){
		return;
	}
	mx = e.offsetX;
	my = e.offsetY;
}