"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.


var userName = prompt("What's your name?");
alert("Hello, " + userName);

var userPizza = prompt("Do you like pizza?");
if (userPizza) {
    alert("I like pizza too!")
} else {
    alert("Well, aren't you weird...")
};
