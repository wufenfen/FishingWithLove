var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}

babyObj.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.babyEye.src= './src/babyEye0.png';
	this.babyBody.src ='./src/babyFade0.png';
	this.babyTail.src ='./src/babyTail0.png';
}

babyObj.prototype.draw = function(){
	this.x = lerpDistance(mom.x, this.x , 0.98);
	this.y = lerpDistance(mom.y, this.y , 0.98);

	var angle = Math.atan2(mom.y-this.y, mom.x-this.x) + Math.PI;
	this.angle = lerpAngle(angle, this.angle, 0.3);
	frontCtx.save();
	frontCtx.translate(this.x, this.y);
	frontCtx.rotate(this.angle);
	frontCtx.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5);
	frontCtx.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
	frontCtx.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);

	frontCtx.restore();
}