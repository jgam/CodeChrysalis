//deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual

function deepEqual(a, b){
	let firstCondition = false;
	let secondCondition = false;
	function objectComparison(a, b){
		if(a.length == b.length){
			if(Object.keys(a)[0]==Object.keys(b)[0] && Object.values(a)[0]==Object.values(b)[0]){
				return true;
			}
		}
		return false;
	}
	
	if(typeof a == 'object' && typeof b == 'object'){
		if(Object.keys(a).length == Object.keys(b).length){
			for(let i=0; i<Object.keys(a).length; i++){
				if(Object.keys(a)[i] != Object.keys(b)[i]){
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
					if(objectComparison(Object.values(a)[i], Object.values(b)[i])){
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
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
