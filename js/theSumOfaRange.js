//The introduction of the book alluded to the following as a nice way to compute the sum of a range of numbers.
//write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function range(start, end, step=1){
	let ret_array = [];
	if(start-end>0){
		for(let i=start; i>end-1; i+=step){
			ret_array.push(i);
		}
	}
	for(let i=start; i<end+1; i+=step){
		ret_array.push(i);
	}
	return ret_array;
}

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function sum(array_num){
	let sum = 0;
	for(let i=0; i<array_num.length; i++){
		sum += array_num[i];
	}
	return sum;
}


console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));
