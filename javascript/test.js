//this is the first way
//context is windows
console.log(this);

function logFunction(){
	console.log(this);
}

logFunction();

//this is the second way
//context is the classs
class User{
	logName(){
		console.log(this);
	}
}

(new User).logName();//logs User{}

//this is the third way
//context is the f
function logFunction(){
	console.log(this);
}

new logFunction();//logs logFunction {}
