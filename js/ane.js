var aneObj = function() {
	this.x = [];
	this.len = [];
}

aneObj.prototype.num = 30;

aneObj.prototype.init = function(){
	 for (var i = 0; i < this.num; i++) {
	 	this.x[i] = canWidth/this.num * i + (Math.random()-.5) * 10;
	 	this.len[i] = 200 + Math.random()*60;
	 };
}

aneObj.prototype.draw = function(){

	backCtx.save();
	backCtx.globalAlpha = 0.6; 
	backCtx.strokeStyle = "green";
	backCtx.lineWidth = 16;
	backCtx.lineCap = "round";

	for (var i = 0; i < this.num; i++) {
	 	backCtx.beginPath();
	 	backCtx.moveTo(this.x[i], canHeight);
	 	backCtx.lineTo(this.x[i], canHeight - this.len[i]);
	 	backCtx.stroke();
	 };

	 backCtx.restore();
}