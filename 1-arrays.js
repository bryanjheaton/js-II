// *** ARRAYS *** //
var x = 5
console.log(x)

// How can we store a list?
const first = 'buy groceries';
const second = 'take out trash';
const third = 'wash laundry';

//what is an array?
//  store a list of items.
//  ordered and accessible by numbers (index).

var toDoList = [first, second, third];

console.log(toDoList)

// What is an array? What syntax does it use?

// What can we keep in an array?
//  string, number, undefined, null, boolean, array

var canIReallyDoThat = [false, null, undefined, 1, "Yes", [1,[2,5,6],3], {name: "Bryan", age: 32}, function() {return 5}]
console.log(canIReallyDoThat)
// How can we access the items in an array?
console.log (toDoList[0])

var nestedArray = [1, [2, [3]]]
console.log(nestedArray[1][1][0])

// How can we access the end of an array?
console.log(toDoList[toDoList.length - 1]);

console.log(typeof toDoList.length);
console.log(typeof toDoList)

// METHODS //
//  definition of METHOD = a function inside of an array
var methodsExample = [1, 2, 3, 4, 5, 6 , 7]

// push
methodsExample.push("new");
console.log(methodsExample)

// pop
methodsExample.pop();
console.log(methodsExample);

// unshift
methodsExample.unshift("new2");
console.log(methodsExample);

// shift
methodsExample.shift();
console.log(methodsExample);

// slice
var newMethodsExample = methodsExample.slice(1,methodsExample.length)
console.log(newMethodsExample);

// splice
var amendedMethodsExample = methodsExample.splice(2, 4,"new1", "new2")
console.log(methodsExample);
console.log(amendedMethodsExample);
