var aneObj = function() {
	this.x = [];
	this.len = [];
	this.headX = [];
	this.headY = [];
	this.amp = [];
	this.timer = [];
}

aneObj.prototype.num = 30;

aneObj.prototype.init = function(){
	 for (var i = 0; i < this.num; i++) {
	 	this.x[i] = canWidth/this.num * i + (Math.random()-.5) * 5;
	 	this.len[i] = 200 + Math.random()*30;
	 	this.amp[i] = Math.random()*30 + 20;
	 	this.timer[i] = 0;
	 	this.headX [i] = 0;
		this.headY[i] = 0;
	 };
}

aneObj.prototype.draw = function(){

	backCtx.save();
	backCtx.globalAlpha = 0.6; 
	backCtx.strokeStyle = "green";
	backCtx.lineWidth = 16;
	backCtx.lineCap = "round";

	for (var i = 0; i < this.num; i++) { 
		this.timer[i] += deltaTime * 0.001;
		var l = this.amp[i]*Math.sin(this.timer[i]);
		this.headX[i] = this.x[i] - l;
		this.headY[i] = canHeight - this.len[i];
	 	backCtx.beginPath();
	 	backCtx.moveTo(this.x[i], canHeight);
	 	backCtx.quadraticCurveTo(this.x[i] + 30, canHeight - this.len[i]/2 - Math.random()*5, this.headX[i] ,this.headY[i]);
	 	backCtx.stroke();
	 };

	 backCtx.restore();
}