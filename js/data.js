var dataObj = function() {
	 this.fruitNum = 0;
	 this.double = 1; 
	 this.score = 0;
	 this.gameOver = false;

	 this.alpha = 0;
}

dataObj.prototype.reset = function(){
	 this.fruitNum = 0;
	 this.double = 1; 
}

dataObj.prototype.update = function(){
	this.score += this.fruitNum * this.double;
	this.reset();
}

dataObj.prototype.draw = function(){
	backCtx.save();
	backCtx.fillStyle = "white";
	backCtx.fillText("SCORE: " + this.score, canWidth*0.5, canHeight-20);
 
	if(this.gameOver){
	 	if( this.alpha< 1){
	 		this.alpha += 0.005;
	 	}
		backCtx.fillStyle = "rgba(255,255,255," + this.alpha + ")";
		backCtx.fillText("GAMEOVER", canWidth*0.5, canHeight*0.5);
		backCtx.font = "20px Arial";
		backCtx.fillText("游戏结束", canWidth*0.5, canHeight*0.5 + 30);
	}

	backCtx.restore();
}