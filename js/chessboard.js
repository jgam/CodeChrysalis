let height = 10;
let width = 10;
let space = true;
let switching = true;
let ret = '';

for(let cond = 0; cond < height; cond++){
	if(space){
		for(let i = 0; i < width; i++){
			if(switching){
				ret += ' ';
				switching = false;
			}
			else{
				ret += '#';
				switching = true;
			}
		}
		console.log(ret);
		space = false;
		switching = true;
		ret = '';
	}
	else{
		for(let i =0; i < width; i++){
			if(switching){
				ret += '#';
				switching = false;
			}
			else{
				ret += ' ';
				switching = true;
			}
		}
		console.log(ret);
		space = true;
		switching = true;
		ret = '';
	}
}
