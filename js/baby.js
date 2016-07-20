var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();

	this.tailArr = [];
	this.tailIndex = 0;
	this.tailTimer = 0;

	this.bodyArr = []; 
	this.bodyIndex = 0;
	this.bodyTimer = 0;

	this.eyeArr = [];
	this.eyeIndex = 0;
	this.eyeTimer = 0;
}

babyObj.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.babyEye.src= './src/babyEye0.png';
	this.babyBody.src ='./src/babyFade0.png';
	this.babyTail.src ='./src/babyTail0.png';

	for (var i = 0; i < 8; i++) {
		this.tailArr[i] = new Image();
		this.tailArr[i].src= './src/babyTail' + i + '.png';
	}

	for (var i = 0; i < 20; i++) {
		this.bodyArr[i] = new Image();
		this.bodyArr[i].src= './src/babyFade' + i + '.png';
	}

	for (var i = 0; i < 2; i++) {
		this.eyeArr[i] = new Image();
		this.eyeArr[i].src= './src/babyEye' + i + '.png';
	}
}

babyObj.prototype.draw = function(){

	this.x = lerpDistance(mom.x, this.x , 0.98);
	this.y = lerpDistance(mom.y, this.y , 0.98);
	//尾巴的摆动
/*	this.babyTail.src= './src/babyTail' + Math.floor(this.tailIndex)%8 + '.png';
	this.tailIndex+= 0.8;  这种写法会造成闪屏，不知道为何？？ */

	this.tailTimer += deltaTime;
	if( this.tailTimer>50 ){
		this.babyTail.src= this.tailArr[this.tailIndex].src;
		this.tailIndex = (this.tailIndex + 1)%8;
		this.tailTimer = 0;
	}
	
	//身体变白	
	this.bodyTimer += deltaTime;
	if( this.bodyTimer > 200){
		if(this.bodyIndex>19){
			this.bodyIndex = 19;
			data.gameOver = true;// game over
			mom.bodyIndex = 0;
		} 
		this.babyBody.src= this.bodyArr[this.bodyIndex].src;
		this.bodyIndex++ ; 
		this.bodyTimer = 0;
	} 

	//眼睛动画
	this.eyeTimer += deltaTime;
	var val = 50;
	if( this.eyeIndex==1 ){
		val = 1000 + 500*Math.random();
	}
	if( this.eyeTimer>val ){
		this.babyEye.src= this.eyeArr[this.eyeIndex].src;
		this.eyeIndex = (this.eyeIndex + 1)%2;
		this.eyeTimer = 0;
	}	

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