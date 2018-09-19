//write a function min that takes two arguments and returns their minimum

function min(a, b){
	if(a-b < 0){
		return a
	}
	else{
		return b
	}
}


console.log(min(0,10));
console.log(min(0,-10));
