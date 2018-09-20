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

function nestedFunction(input){
	let retList = [];
	function parsing(input){
		//append to the list
		retList.push(input['value']);
		//write code
		if(input['rest']!=null){
			parsing(input['rest']);
		}
		return retList;
	}
	return parsing(input);
}

function prepend(value, rest){
	let ret = new Object();
	ret.value = value;
	ret.rest = rest;
	return ret;
}

function nth(list, index){
	let retList = nestedFunction(list);
	return retList[index];
}


console.log(nestedFunction(arrayToList([10,20])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10,20,30]), 1));
