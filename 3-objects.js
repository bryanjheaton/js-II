// *** OBJECTS *** //

// How can we store related pieces of data?
var name = 'Beth';
var hair = 'blonde';
var email = 'beth@dm.com';
var password = '$ecret';


// Would an array work?
var user = {
    name,
    hair: hair,
    email: "beth@dm.com",
    password
}

console.log(user);
console.log(user.name);
console.log(typeof user);
console.log(typeof user.name);



//  Objects use key value pairs.

// What is an object? What syntax does it use?

var canIReallyDoThat = {
    first: true,
    second: null,
    third: undefined,
    fourth: "Tim Allen",
    fifth: 2,
    sixth: {name: "Bob Ross"},
    seventh: [1,2,3,],
    eighth: function() {return 5}
}

console.log(canIReallyDoThat);
console.log(canIReallyDoThat.fourth);
console.log(canIReallyDoThat.sixth.name);
console.log(canIReallyDoThat.sixth.name.length);

// What can we keep in an object?

// How can we access the items in an object?

// How can we add more data to an object?

canIReallyDoThat.bestMan = "Bob Ross";

console.log(canIReallyDoThat);

console.log(canIReallyDoThat.eighth())
// METHODS // pattern of putting a function on an object.

// What are functions that are stored in objects called? What syntax do they use?

// How do we write them?

// How do we invoke them?




// NESTED DATA //

// What if we have arrays and objects inside of each other???
//// Simple data types
//// Objects
//// Methods on objects
//// Using a for loop


var myData = {
    name: "Bryan",
    favoriteThings: ["chocolate", "fun stuff", "reading", "sleeping"]
}

console.log (myData.favoriteThings[0]);

for (var i = 0; i < myData.favoriteThings.length; i++) {
    myData.favoriteThings[i] = "Smiling"
    console.log(myData.favoriteThings[i])
}

console.log(myData.favoriteThings[0].length)


