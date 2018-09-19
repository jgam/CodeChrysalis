//write a function countBS that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in the string

//write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted(rather than cuonting only uppercase "B" characters). Rewrite countBs to make use of this new function

function countBs(a){
	let countvar = 0;
	for(let i =0; i<a.length; i++){
		if(a[i]=='B'){
			countvar++;
		}
	}
	return countvar;
}

function countChar(a, b){
	let countvar = 0;
	for(let i=0; i<a.length; i++){
		if(a[i]==b){
			countvar++;
		}
	}
	return countvar;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
