//Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function.
//each iteration, first runs the test function on the current loop value and stops if that returns false
//Then it callls the body function, giving it the current value.
//Finally, calls the update function to create a new value and start from the beginning.

function loop(value, testFunction, updateFunction, bodyFunction){
	/*
	function repeat(n, action){
		for(let i = 0; i < n; i++){
			action(i);
		}
	}
	repeat(3, console.log);
	//->0
	//->1
	//->2
	*/
	if(testFunction(value)){
		bodyFunction(value);
		loop(updateFunction(value), n => n>0, n=>n-1, console.log);
	}
	else{
		return;
	}
	//let TestFunction = testFunction(value);
	//updateFunction(bodyFunction(TestFunction));
}

loop(3, n => n>0, n => n - 1, console.log);
//->3
//->2
//->1
