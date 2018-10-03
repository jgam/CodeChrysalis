//use the reduce method in combination with the concat method t faltten an array of arrays into a single array that has all the elements of the original arrays.


let arrays = [[1, 2, 3], [4, 5], [6]];

//likely output is -> [1,2,3,4,5,6]
/*
function flatten(array){
	return arrays.reduce((a,b) => [a,a.push(elem for let elem of b)]);
}
*/

//console.log(flatten(arrays));

console.log(arrays.reduce(function(flat, current){
								return flat.concat(current);
							},[]));
