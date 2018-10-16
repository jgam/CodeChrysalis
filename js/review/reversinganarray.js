//reversing the array by swapping the elements

function reverseArray(array){
	let endIndex = array.length - 1;
	let startIndex = 0;
	let forloopRange = array.length/2;

	for(let i=0; i<forloopRange; i++){
		let tempVar = array[startIndex+i];
		array[startIndex+i] = array[endIndex-i];
		array[endIndex-i] = tempVar;
	}

	return array;
	
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1,2,3,4,5];
reverseArray(arrayValue);
console.log(arrayValue);
