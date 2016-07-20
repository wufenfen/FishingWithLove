function fruitEatenByMom(){
	if(data.gameOver){
		return;
	}

	for (var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]){
			var l = calLength2( fruit.x[i], fruit.y[i], mom.x, mom.y);

			if( l<900 ){
				fruit.dead(i);
				data.fruitNum++; 
			}
		}
	};
}

function momFeedBaby(){
	if(data.gameOver){
		return;
	}

	var l = calLength2( baby.x, baby.y, mom.x, mom.y);
	if( data.fruitNum > 0 && l<900 ){
		baby.bodyIndex = 0;
		data.update();
	} 
}