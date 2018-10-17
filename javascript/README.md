Some of the concepts I learned

String(value)
Number(value)
operations are the same as usual language
switch case
```
let a = 2+2;

switch(a){
	case 3:
		alert('Too small');
		break;
	case 4:
		alert('Exactly!');
		break;
	case 5:
		alert('Too Large');
		break;
	default:
		alert('I don't know such values');
}

The switch is equal to if .. else statement.

------------------------------------------------------------------------------------------------***-------------------------------------------------------------------------

closure!
-a function can be created at one moment, then copied to another variable or passed as an argument to another function and called fomr a totally different place later.
-We know that a function can access variables outside of it; this feature is used quite often.
--> JavaScript behavior is that closure allows JS to access to variables values of outer function of the function specifically called.

ex)
```
let name = 'John';

function sayHi(){
	alert('Hi, ' + name);
}

name = 'Pete';

sayHi();
```
what would this print??

Lexical Environment
-environment Record is an object that has all local variables as its properties
-reference to the outer lexical environment, usually the one associated with the code lexically right outside of it(outside of the current curly brackets)

Unlike let variables, they are processed not when the execution reaches them, but when a lexical environment is creted. For the global Lexical environment, it means the moment when the script is started. This is why we can call a function declaration before it is defined. When code wants to access a variable - it is first searched for in the inner Lexical Environment, then in the outer one, then the more outer one and so on until the end of the chain.

--------------------------------------------------------------*************************-----------------------------------------------------------------------------------
Nested Functions
-A function is called "nested" when it is created inside another function.
```
function sayHiBye(firstName, lastName){
	//helper nested function to use below
	function getFullName(){
		return firstName + " " + lastName;
	}
	
	alert("Hello, " + getFullName());
	alert("Byye, " + getFullName());
}
```

Here the nested function getFullName() is made for convenience. It can access the outer variables and so can return the full name. A nested function can be returned: either as a property of a new object(if the outer function creates an object with methods) or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables.
