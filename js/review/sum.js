function sum(array){
	const reducer = (x, y) => x+y;
	return array.reduce(reducer);
}

//console.log(range(1,10));
console.log(sum([1,2,3,4,5,6,7,8,9,10]));
