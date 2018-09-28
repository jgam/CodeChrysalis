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

```
