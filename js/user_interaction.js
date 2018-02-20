"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var username = prompt("What's your name?");

while (!username) {
    username = prompt('Give me your name.');
}

// TODO: Show an alert message that welcomes the user based on their input.
    alert("Welcome, " + username + "!");


// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var userPizza = confirm("Do you like pizza?");
if (userPizza) {
    alert("I like pizza too!")
} else {
    alert("Well, aren't you weird...")

};




//takes in parameter message which is the message to show the user.
//will continue to prompt the user until valid input is provided
function getUserInput(message) {
        var response = ' ';
        while (!response) {
            response = prompt(message);
        }
        return response
}
var getUsername = getUserInput ("what is your name?");
    console.log(getUsername);
