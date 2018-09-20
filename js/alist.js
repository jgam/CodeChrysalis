//write a function arrayToList that builds up a list structure like the one shown when given [1,2,3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list(with zero referring to the first element) or undefined when there is no such element.

//if you haven't already, also write a recursive version of nth.

//arrayToList
//listToArray
//prepend
//nth

var v = [10, 20, 30, 40];

function arrayToList(input){
	let ret = new Object();
	ret.value = input[0];
	if(input.length==1){
		ret.rest = null;
	}
	else{
		input.shift()
		ret.rest = arrayToList(input);
	}
	return ret;
}


function listToArray(input, array=[]){
	//nested function!
	array.push(input['value']);
	if(input['rest']!=null){
		return listToArray(input['rest'], array);
	}
	else{
		return array;
	}
}
console.log(listToArray(arrayToList([10, 20])));

console.log(arrayToList([10,20]));

console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));

function nestedFunction(input){
	//comment: improved listToArray()
	
}
