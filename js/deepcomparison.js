//deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual

function deepEqual(a, b){//this function goes into deeper roots to compare the two objects. The neat part is that each object is not as simple. THere coule be more ojbects within the object so we need to dig in deeper parts of the objects.
	let firstCondition = false;
	let secondCondition = false;
	function objectComparison(a, b){//object compared first with the length and then keys. BUT the elements could be a combination of keys and values so be careful.
		if(a.length == b.length){
			if(Object.keys(a)[0]==Object.keys(b)[0] && Object.values(a)[0]==Object.values(b)[0]){
				return true;
			}
		}
		return false;
	}
	
	if(typeof a == 'object' && typeof b == 'object'){//comparing the type of objects
		if(Object.keys(a).length == Object.keys(b).length){//comparing the length of the keys this is the start of comparison
			for(let i=0; i<Object.keys(a).length; i++){
				if(Object.keys(a)[i] != Object.keys(b)[i]){//refactors can be made since this is checking if there exists a difference
					return false;
				}
			}
			secondCondition = true;
		}
		else{
			return false;
		}
		
		if(Object.values(a).length == Object.values(b).length){
			for(let i=0; i<Object.values(a).length; i++){
				if(Object.values(a)[i] != Object.values(b)[i]){
					secondCondition = false;
					if(objectComparison(Object.values(a)[i], Object.values(b)[i])){//this compares the values of objects with nested function
						return true;
					}
				}
			}
			secondCondition = true;
		}
		else{
			return false;
		}
	}
	if(firstCondition == true && secondCondition == true){
		return true;
	}
	else{
		if(a==b){
			return true;
		}
		else{
			return false;
		}
	}
}
let obj = {here: {is: "an"}, object: 2};
// this object is meant to have something different than what you have.
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
