var haloObj = function(){
	this.x = [];
	this.y = [];
	this.r = [];
	this.alive = [];
}

haloObj.prototype.num = 5;

haloObj.prototype.init= function(){

	for (var i = 0; i < this.num; i++) {
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 0;
		this.alive[i] = false;
	};
}

haloObj.prototype.draw = function(){
	backCtx.save();
	backCtx.lineWidth = 1;
	backCtx.shadowBlur = 4;
	backCtx.shadowColor = "white";
	for (var i = 0; i < this.num; i++) {
		if( this.alive[i] ){
			if(this.r[i]>60){
				this.alive[i] = false;
				break;
			}
			this.r[i] += deltaTime * 0.02; 
			var alpha = 1 - this.r[i]/60; 
			backCtx.beginPath();
			backCtx.arc(this.x, this.y, this.r[i], 0, 2*Math.PI);
			backCtx.strokeStyle = "rgba(200,100,0," + alpha + ")";
			backCtx.stroke();

			console.log("draw");
		}
	}
	backCtx.restore();
} 

haloObj.prototype.born = function(x, y){
	this.x = x;
	this.y = y;
	for (var i = 0; i < this.num; i++) {
		if( !this.alive[i] ){
			this.alive[i] = true;
			this.r[i] = 10;
		}
	}
}