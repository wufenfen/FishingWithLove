var momObj = function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();

	this.tailArr = [];
	this.tailIndex = 0; 
	this.tailTimer = 0;

	this.eyeIndex = 0;
	this.eyeTimer = 0;
}

momObj.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.bigEye.src= './src/bigEye0.png';
	this.bigBody.src ='./src/bigSwim0.png';
//	this.bigTail.src ='./src/bigTail0.png';

	for (var i = 0; i < 8; i++) {
		this.tailArr[i] = new Image();
		this.tailArr[i].src= './src/bigTail' + i + '.png';
	}; 


}

momObj.prototype.draw = function(){
	this.x = lerpDistance(mx, this.x , 0.98);
	this.y = lerpDistance(my, this.y , 0.98);

	this.tailTimer += deltaTime;
	if( this.tailTimer>50 ){
		this.bigTail.src= this.tailArr[this.tailIndex].src;
		this.tailIndex = (this.tailIndex + 1)%8;
		this.tailTimer = 0;
	}
	// this.bigTail.src= './src/bigTail' + Math.floor(this.tailIndex)%8 + '.png';
	// this.tailIndex+= 0.5; 

	// this.bigEye.src= './src/bigEye' + Math.floor(this.eyeIndex)%2 + '.png';
	// if(Math.floor(this.eyeIndex)%2==1){
	// 	this.eyeIndex+= Math.random()/5; 
	// }
	// else{
	// 	this.eyeIndex+= Math.random()/50; 
	// } 
	

	var angle = Math.atan2(my-this.y, mx-this.x) + Math.PI;
	this.angle = lerpAngle(angle, this.angle, 0.3);
	frontCtx.save();
	frontCtx.translate(this.x, this.y);
	frontCtx.rotate(this.angle);
	frontCtx.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);
	frontCtx.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
	frontCtx.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);

	frontCtx.restore();
}