//write two functions, reverseArray and reverseArrayInPlace. Ths first reverse arrayInPlace, does what the reverse method does:i t modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArray(input){
	let ret_array = [];
	for(let i = input.length-1; i > -1; i--){
		ret_array.push(input[i])
	}
	console.log(input);
	console.log(ret_array);
}

reverseArray([1,2,3,4,5,6]);

function reverseArrayInPlace(input){
	//two pointers for starting in the first and last
	let begin_pointer = 0
	for(let i = input.length-1; i > input.length/2-1; i--){
		if(begin_pointer == i || begin_pointer > i){
			break;
		}
		else{
		
			let temp_var = 0
			temp_var = input[i];
			input[i] = input[begin_pointer];
			input[begin_pointer] = temp_var;
			begin_pointer++;
		}	
	}
	console.log(input);
}

reverseArrayInPlace([1,2,3,4,5,6]);
