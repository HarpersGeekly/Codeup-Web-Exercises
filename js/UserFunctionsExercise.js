/* create four functions

that take two numbers as input and produce an output that is the result of the respective operation

-add
-subtract
-divide
-mulitply

test these with the console logs */

var addition = function(x, y) {
    return x + y;
}
console.log(addition(2, 4));


var subtraction = function(x, y) {
    return x - y;
}
console.log(subtraction(2, 4));


var divide = function(x, y) {
    return x / y;
}
console.log(divide(2, 4));


var multiply = function(x, y) {
    return x * y;
}
console.log(multiply(2, 4));


/* hook these functions up to user input

 for each of the above functions...

 make sure the user input is valid
 prompt the user for the two numbers
 perform the calculation using your functions
 allow the user to choose which operation they want to perform, then prompt for inputs

 ** Bonus **

 define your functions in terms of each other

 do not use the * operator inside of your multiply function
 do not subtract the two numbers inside of your subtract function
 instead call your add function
 */

//ADDITION:

// var userInput1 = parseInt(prompt("Give me a number between 1 and 10000"));
// var userInput2 = parseInt(prompt("Pick a second number between 1 and 10000"));
// // var userOperation = parseInt(prompt("Which operation would you like to perform? " +
// //     "Addition, Subtraction, Division, or Multiplication?"));
//
// var addition = function(userInput1, userInput2) Input
//     var result = (userInput1 + userInput2);
//     alert (userInput1 + " + " + userInput2 + " = " + result)
// }
// console.log(addition(userInput1, userInput2));


// if (userOperation == Addition)

// //SUBTRACT:
//
// var userInput1 = parseInt(prompt("Give me a number between 1 and 100"));
// var userInput2 = parseInt(prompt("Pick a second number"));
//
// var subtraction = function(userInput1, userInput2) {
//     var result = (userInput1 - userInput2);
//     alert (userInput1 + " - " + userInput2 + " = " + result)
// }
// console.log(subtraction(userInput1, userInput2));

// // DIVIDE:
//
// var userInput1 = parseInt(prompt("Give me a number between 1 and 100"));
// var userInput2 = parseInt(prompt("Pick a second number"));
//
// var divide = function(userInput1, userInput2) {
//     var result = (userInput1 / userInput2);
//     alert (userInput1 + " / " + userInput2 + " = " + result)
// }
// console.log(divide(userInput1, userInput2));
//
// //MULTIPLY:
//
// var userInput1 = parseInt(prompt("Give me a number between 1 and 100"));
// var userInput2 = parseInt(prompt("Pick a second number"));
//
// var multiply = function(userInput1, userInput2) {
//     var result = (userInput1 * userInput2);
//     alert (userInput1 + " * " + userInput2 + " = " + result)
// }
// console.log(multiply(useInput1, userInput2));





var userOperation = prompt("Which operation would you like to perform? +, -, /, or * ?");
var userInput1 = parseInt(prompt("Give me a number."));
var userInput2 = parseInt(prompt("Pick a second number."));

var operations = function(userInput1, userInput2) {

    if (userOperation == "+") {
        var result = (userInput1 + userInput2);
        alert(userInput1 + " + " + userInput2 + " = " + result)
    } else if (userOperation == "-") {
        var result = (userInput1 - userInput2);
        alert(userInput1 + " - " + userInput2 + " = " + result)
    } else if (userOperation == "/") {
        var result = (userInput1 / userInput2);
        alert(userInput1 + " / " + userInput2 + " = " + result)
    } else if (userOperation == "*") {
        var result = (userInput1 * userInput2);
        alert(userInput1 + " * " + userInput2 + " = " + result)
    }

};
console.log(operations(userInput1, userInput2));

//^ Try 'switch'!

//
// function askfornumbers() {
//     firstnum = parseint(prompt('give me a number'));
//     secondnum = parseint(prompt('give me a number'));
// }
// var oper = prompt("choose sum, add, div, multi");
//
// switch(oper){
//     case "sum":
//         askfornumbers();
//         res = add(firstnum, secondnum);
//         break;
// }repeat

