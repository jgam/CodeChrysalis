Understnding Scope in Javscript

#jgam
#10-17-2018

Scope
-accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of the code.

advantage?
The Principle of Least Access -> never know whose mistake that was and will help you track changes and keep an ccount of who did what

-Global Scope
=> when you run a javascript, you are in global scope of the javascript
-Loal Scoppe
=> variables defined inside a function are in the local scope. They have a different scope for every call of that function. This means that variables having the same name can be used in different functions.

-Block Statements
=> block statements are like if and switch conditions or for and while loops, unlike functions, don't create a new scope. Variables defined inside of a block statement will remain in the scope they were already in.

**Global scope lives as long as your application lives. Local Scope lives as long as your functions are called and executed**

Context
-is used to refer to the value of this in some particular part of your code. Scope refers to the visibility of variables and context refers to the value of this in the same scope. We can also change the context using function methods. In the global scope context is always the Window object.

```
console.log(this);

function logFunction(){
	console.log(this);
}

logFunction()
```

If scope is in the method of an object, context will be the object the method is part of.
```
class User{
	logName(){
		console.log(this);
	}
}

(new User).logName(); //logs User {}

```

One thing to notice is that the value of context behaves differently if you call your functions using the new keyword. The context will then be set to the instance of the called function. Consider one of the examples above with the function called with the new keyword.

```
function logFunction(){
	console.log(this);
}

new logFunction(); // logs logFunction {}
```

**When a function is called in Strict Mode, the context will be from default to be undefined.**

Execution Context
-the word context in Execution context refers to scope and not context
-Javascript is a single-threaded language so it can only execute a single task at a time.
-The rest of the tasks are queued in the Execution Context.
-THe global context is appended to the execution context as a first context and every other function call(invocation) occurs, it is appended to the execution context.
-note that each function creates its own execution context.
-Once the browser is done with the code in that context, that context will then be popped off from the execution context and the stte of the current context in the execution context will be transferred to the parent context. The browser always executes the execution context that is at the top of the execution stack(which is actually the innermost level of scope in your code).
-There can only be one global context but any number of function contexts.
-The execution context has two phases of creation and code execution.

Creation Phase
-The first phase that is the creation phase is present when a function is called but its code is not yet executed. THree main things that happen in the creation phases are the following:
1. Creation of the variable (activation) Object,
2. Creation of the Scope Chain, and
3. Setting of the value of context(this)

Variable Object
-also called as Activation object, contains all of the variables, functions and other declarations that are defined in a particulra branch of the execution context. When a function is called, the interpreter scans it for all resources including function arguments, variables, and other declarations. Everything, when packed into a single object, becomes the Variable object

Scope Chain
-In the creation phase of the execution context, the scope chain is created after the variable object. The scope chain itself contins the variable object. The Scope Chain is used to resolve variables. When asked to resolve a variable, JavaScript always starts at the innermost level of the 

Lexical Scope
-Lexical Scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child functions are lexically bound to the execution context of their parents. Lexical scope is sometimes also referred as Static scope.

Closures
-A closure is when an inner function tries to access the scope chain of its outer function meaning the variables outside of the immediate lexical scope. Closures contain their own scope chain, the scope chain of their parents and the global scope.
-It can also access the variables of its otuer function even after the function has returned. This allows the returned function to maintain access to all the resources of the outer function.

When you return an inner function from a function, that returned function will not be called when you try to call the outer function. You must first save the invocation of the outer funciton in a separate variable and then call the variable as a function. Example is following:
```
function greet() {
	name = 'Hammad';
	return function(){
		console.log('Hi' + name);
	}
}

greet();//nothing happens, no errors

//the returned function from greet() gets saved in greetLetter
greetLetter = greet();

//calling greetLetter calls the returned function from the gree() function
greetLetter();//logs 'Hi Hammad'
```
The key thing to note here is 'that greetLetter' function can access the name variable of the greet function even after it has been returned. One way to call the returned function from the greet function without variable assignment is by using parenthese () two times ()() like this:

```
function greet(){
	name = 'Hammad';
	return function(){
		console.log('Hi' + name);
	}
}

greet()();//logs 'Hi Hammad'

Public and Private Scope
-Setting the visibility of properties and methods of classes using public, private and protected scopes is common for programming languages. For example,

```
//Public Scope
public $property;
public function method() {
}

//private Scope
private $property;
private function method() {
}

//Protected Scope
protected $property;
protected function method() {
}
```
Encapsulating functions from the public (global) scope saves them from vulnerable attacks. But in JavaScript, there is no such thing as public or private scope. However, we can emulate this feature using closures. To keep everything separate from the global we must first encapsulate our functions within a function like this:





