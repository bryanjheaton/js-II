// *** FOR LOOPS *** ///

// What is a for loop? What syntax does it use?
//  3 segments
//    a. declare the counter (where to begin).
//    b. define how long the loop will run (where to end).
//    c. define incrementation of the counter between each loop.

console.log(1 > 2) 


for (var i = 0; i < 10; i++) {
    console.log(i)
}


// How many different ways can we loop?

for (var i = 100; i > 20; i--) {
    console.log(i)
}


// Can we go backwards?

// How can we use a for loop with an array?

var bestPeople = ["Bob Ross", "Mr. Rogers", "Steve Erwin", "The Rock"]
for (var i = 0; i < bestPeople.length; i++) {
  console.log(bestPeople[i])
}
// Can we go backwards through an array?

var bestPeople2 = ["Bob Ross", "Mr. Rogers", "Steve Erwin", "The Rock"]
for (var i = bestPeople2.length-1; i >= 0; i--) {
  console.log(bestPeople2[i]);
}


var nums = [1,2,3,4,5,6,7];

for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2;
}
console.log(nums);
