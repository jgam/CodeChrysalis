//use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1,2,3], [4,5], [6]];
//my code here
function reduce(array){
	let retArray = [];
	for(let element of array){
		retArray = retArray.concat(element);
	}
	return retArray;
}

console.log(reduce(arrays));
//->[1,2,3,4,5,6]
