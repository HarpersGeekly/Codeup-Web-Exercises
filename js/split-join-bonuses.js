(function(){
    "use strict";

// BONUSES 1:
// Write a program to toggle all characters in a string: in a given string,
// toggle all characters to their opposite case. Special characters will not change.

// Example input: "aBc12#""
// Example output: "AbC12#"

    let input = prompt("Give me a string");

    let result = input.split('').map(function(char){
        // The map() method creates a new array with the results of calling a function for every array element,
        // in this case "char".
        // The map() method calls the provided function once for each element in an array, in order:
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        }).join('');

        console.log(result);

// ES6:
// let resultES6 = input.split('')
//         .map((char) =>
//             char === char.toUpperCase()
//                 ? char.toLowerCase()
//                 : char.toUpperCase()
//         ).join('');
//     console.log(resultES6);

    //OR...convert the string to an array of 1-character substrings (using split),
    // process this array and convert it back to a string when you're done (using join).
    let input2 = prompt("Give me another string!");

    let swapCase = function(input2){
        let chars = input2.split("");
        for(let i = 0; i < chars.length; i++){
            if(chars[i] === chars[i].toLowerCase()){
                chars[i] = chars[i].toUpperCase();
            }else {
                chars[i] = chars[i].toLowerCase();
            }
        }
        input2 = chars.join("");
        console.log(input2);
    };
    swapCase(input2);

// BONUS 2:
// Write a program that takes a given string appended with a number at the end.
// The program will check the length of the string to verify the string is equal to the number appended.
// If the number appended equals the string length, output "Yes". if the number appended does not equal the string length,
// output "No".

// Example Input: "geek5"
// Example Output: "Yes"

// Example Input: "codingchallenge25"
// Example Output: "No"

    let input3 = prompt("Provide a string with a number at the end");

    let length = input3.length;
    let number = parseInt(input3.match(/(\d+)$/)[0], 10);
    // The match() method searches a string for a match against a regular expression,
    // and returns the matches as an Array object.

    if(length === number) {
        console.log("Input:" + input3);
        console.log("number: " + number);
        console.log("length: " + length);
        console.log("Yes, they match.");
    } else {
        console.log("Input:" + input3);
        console.log("number: " + number);
        console.log("length: " + length);
        console.log("No, they don't match.");
    }

})();