var dustObj = function(){
	this.x = [];
	this.y = [];
	this.picNO = [];
	this.dust = [];
	this.amp = [];
	this.timer = [];
}

dustObj.prototype.num = 100;

dustObj.prototype.init= function(){
	for (var i = 0; i < 7; i++) {
		this.dust[i] = new Image();
		this.dust[i].src = './src/dust' + i + '.png';
	};

	for (var i = 0; i < this.num; i++) {
		this.x[i] = canWidth * Math.random();
		this.y[i] = canHeight * Math.random();
		this.amp[i] = Math.random()*30 + 20;
	 	this.timer[i] = 0;
		this.picNO[i] = Math.floor( 7*Math.random() );
	};
}

dustObj.prototype.draw = function(){
	backCtx.save(); 

	for (var i = 0; i < this.num; i++) {
		this.timer[i] += deltaTime * 0.001;
		var l = this.amp[i]*Math.sin(this.timer[i]);
		var dust = this.dust[this.picNO[i]];
		backCtx.drawImage(dust, this.x[i]-l- dust.width * 0.5, this.y[i]-dust.height *0.5, dust.width,dust.height);

	}
	backCtx.restore();
} 