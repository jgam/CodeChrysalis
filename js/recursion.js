//Define a recursive function isEven corresponding to the description. The function should accept a single parameter(a positive, whole number) and return a Boolean

function isEven(a){
	a = Math.abs(a);
	if(a == 1){
		return false;
	}
	else if(a == 0){
		return true;
	}
	else{
		return isEven(a-2)
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
