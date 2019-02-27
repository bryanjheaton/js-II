// *** CALLBACKS *** //

// What datatypes can we pass into a function?

function example(callback, name) {
  console.log(callback(), name);
  console.log(callback(name));
}

example(function() {return "Timmy"}, 1)


function helloMachine(name) {
  return "hello " + name;
}

console.log(helloMachine("Bryan"));


example (helloMachine, "Tim")




// logger();


// What is a callback?  
//  A pattern in which we pass a function into another function.

// Can we invoke a callback?

// Why on earth would we do this madness?

//// DRY code
// Don't Repeat Yourself

function doubler(num) {
  return num * 2;
}

var nums = [1,2,3,4,5];

function modifier(cb, array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = cb(array[i]);
  }
  return array
}

console.log(modifier(doubler, nums))

var nums = [1,2,3,4,5];

for (let i = 0; i < nums.length; i++) {
  nums[i] = doubler(nums[i]);
}
console.log(nums)


function allPeopleAreBob() { 
  return "Bob Ross";
}

var name = ["todd", "tiny tim", "helga", "josh"]

console.log(modifier(allPeopleAreBob, name))

//// Higher order functions that already exist

//// Asynchronous processes

//// Event listeners