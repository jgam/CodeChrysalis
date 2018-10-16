/* Write a function called "each" that
takes two inputs: a collection (array or object) and a callback function.

"each" executes the callback function once for every element of
the collection.

Specifically, the callback function is provided 3 arguments:

1) the value of the current element being processed in the given collection
2) the index or key of the current element being processed in the given collection
3) the collection itself
*/

function each(array, callbackFunction) {
	if(Object.values(array)){
		array = Object.values(array);
	}
  for(let i = 0; i<array.length; i++) {
    callbackFunction(array[i], i, array);
  }
}

each([1, 2, 3], console.log);
each({a: 1, b: 2, c: 3}, console.log);

//let retObject = {a:1, b:2, c:3};
//let retArray = [1, 2, 3];
//console.log(retObject, typeof retObject);
//console.log(Object.values(retObject));
//console.log(retArray, typeof retArray);
//console.log(retArray.values());
//console.log(retObject[0]);
// TODO: Make this work for objects!


