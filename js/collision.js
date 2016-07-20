function fruitEatenByMom(){
	if(data.gameOver){
		return;
	}

	for (var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]){
			var l = calLength2( fruit.x[i], fruit.y[i], mom.x, mom.y);
			if( l<900 ){
				fruit.dead(i);
				data.fruitNum++ ; 
				mom.bodyIndex++ ;
				if( mom.bodyIndex > 7){
					mom.bodyIndex = 7;
				}
				if( fruit.fruitType[i] == "blue"){
					data.double = 2;
				}

				wave.born(fruit.x[i], fruit.y[i]);
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
		mom.bodyIndex = 0;
		data.update();
		halo.born(baby.x, baby.y);
	} 
}