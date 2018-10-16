//write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body funciton, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

let arrays = [[1,2,3],[4,5],[6]];
//console.log(flat);
//console.log(current);
console.log(arrays.reduce(function (flat, current){
							console.log(flat);
							console.log(current);
							return flat.concat(current);
						}, []));

