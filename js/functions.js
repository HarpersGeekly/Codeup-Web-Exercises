/**
 * Created by RyanHarper on 11/7/16.
 */
"use strict";

 // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.
// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

var myNameIs = 'Ryan';

function sayHello(name) {
    console.log("Hello " + name)
};
sayHello(myNameIs);

// What if the function was generateHello? you would probably want to do return. Returns are more commmon.
// var myNameIs = 'Ryan';
// function generateHello(name) {
// return "Hello " + name;
// }

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.


var random = Math.floor((Math.random()*100)+1);

function isOdd(number) {

    if (random % 2 !== 0) {
        console.log(number + ' is odd')
    } else {
        console.log(number + ' is even')
    }
};
/* OR...

   var random = Math.floor((Math.random()*100)+1);

   function isOdd(number) {
    var result = ((random % 2) == 0) ? number + " is Even" : number + " is Odd";
    return result;
    }

   console.log(isOdd(random));
   */

isOdd(random);





// Confirm's and Response's: //

if (confirm("Is it Monday?")) {
    console.log("It is Monday.")
} else {
    console.log ("it is not Monday")
};

var confirmed = confirm("Is it raining?");
console.log(confirmed);
// is the same as this://
var weather = (confirm("Is it raining")) ? "It is raining" : "It is not raining";
console.log(weather);

var response = prompt("What's your age?");
console.log("Your age is:" + response);