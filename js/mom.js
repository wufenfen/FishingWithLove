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

	this.bodyArr = []; 
	this.bodyArrBlue = []; 
	this.bodyIndex = 0;
	this.bodyTimer = 0;

	this.eyeArr = [];
	this.eyeIndex = 0;
	this.eyeTimer = 0;
}

momObj.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.bigEye.src= './src/bigEye0.png';
	this.bigBody.src ='./src/bigSwim0.png';
	this.bigTail.src ='./src/bigTail0.png';

	for (var i = 0; i < 8; i++) {
		this.tailArr[i] = new Image();
		this.tailArr[i].src= './src/bigTail' + i + '.png';
	}; 


	for (var i = 0; i < 8; i++) {
		this.bodyArr[i] = new Image();
		this.bodyArrBlue[i] = new Image();
		this.bodyArr[i].src= './src/bigSwim' + i + '.png';
		this.bodyArrBlue[i].src= './src/bigSwimBlue' + i + '.png';
	}

	for (var i = 0; i < 2; i++) {
		this.eyeArr[i] = new Image();
		this.eyeArr[i].src= './src/bigEye' + i + '.png';
	}
}

momObj.prototype.draw = function(){
	this.x = lerpDistance(mx, this.x , 0.98);
	this.y = lerpDistance(my, this.y , 0.98);

	//Î²°ÍµÄ°Ú¶¯
	this.tailTimer += deltaTime;
	if( this.tailTimer>50 ){
		this.bigTail.src= this.tailArr[this.tailIndex].src;
		this.tailIndex = (this.tailIndex + 1)%8;
		this.tailTimer = 0;
	}

	//ÉíÌå±äÉ«
	if(data.double == 1){	 
		this.bigBody.src= this.bodyArr[this.bodyIndex].src; 
	}
	else{
		this.bigBody.src= this.bodyArrBlue[this.bodyIndex].src; 
	}

	//ÑÛ¾¦¶¯»­
	this.eyeTimer += deltaTime;
	var val = 50;
	if( this.eyeIndex==1 ){
		val = 1000 + 500*Math.random();
	}
	if( this.eyeTimer>val ){
		this.bigEye.src= this.eyeArr[this.eyeIndex].src;
		this.eyeIndex = (this.eyeIndex + 1)%2;
		this.eyeTimer = 0;
	}	 

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