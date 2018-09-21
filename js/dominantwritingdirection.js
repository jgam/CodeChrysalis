//computes the dominant writing direction in a string of text
//each script object has a direction property that can be "ltr"(left to right), "rtl"(right to left), or "ttb" (top to bottom).
//characterScript & countBy functions are useful

function dominantDirection(text){
	//my code here
	function characterScript(code){
		for(let script of SCRIPTS){
			if(script.ranges.some(([from, to]) => {return code >= from && code < to;})){
				return script.direction;
			}
		}
		return null;
	}
	
	function countBy(items, groupName){
		let counts = [];
		for(let item of items){
			let name = groupName(item);
			let known = counts.findIndex(c => c.name == n);
			if(known == -1){
				counts.push({name, count: 1});
			}
			else{
				counts[known].count++;
			}
		}
		return counts;
	}
	
	let retList = [];
	for(let characters in text){
		retList.push(characterScript(characters.codePointAt(0)));
	}

	console.log(countBy(retList));
		
}

console.log(dominantDirection("Hello!"));//-> ltr
console.log(dominantDirection("Hey,  مساء الخير"));//-> rtl

