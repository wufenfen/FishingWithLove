var waveObj = function(){
	this.x = [];
	this.y = [];
	this.r = [];
	this.alive = [];
}

waveObj.prototype.num = 10;

waveObj.prototype.init= function(){

	for (var i = 0; i < this.num; i++) {
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 0;
		this.alive[i] = false;
	};
}

waveObj.prototype.draw = function(){
	backCtx.save();
	backCtx.lineWidth = 1;
	backCtx.shadowBlur = 4;
	backCtx.shadowColor = "blue";
	for (var i = 0; i < this.num; i++) {
		if( this.alive[i] ){
			if(this.r[i]>50){
				this.alive[i] = false;
				break;
			}
			this.r[i] += deltaTime * 0.02; 
			var alpha = 1 - this.r[i]/50; 
			backCtx.beginPath();
			backCtx.arc(this.x, this.y, this.r[i], 0, 2*Math.PI);
			backCtx.strokeStyle = "rgba(255,255,255," + alpha + ")";
			backCtx.stroke(); 
		}
	}
	backCtx.restore();
} 

waveObj.prototype.born = function(x, y){
	this.x = x;
	this.y = y;
	for (var i = 0; i < this.num; i++) {
		if( !this.alive[i] ){
			this.alive[i] = true;
			this.r[i] = 10;
		}
	}
}