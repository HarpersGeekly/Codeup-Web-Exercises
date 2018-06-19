/**
 * Created by RyanHarper on 11/9/16.
 */

    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ['Lauren' , 'Lynne' , 'Ryan', 'Grant', 'Dad', 'Mom'];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log("Size of the Array is " + names.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    console.log("Without Loops:");

    console.log("name 1 is " + names[0] + " at index " + 0);
    console.log("name 2 is " + names[1] + " at index " + 1);
    console.log("name 3 is " + names[2] + " at index " + 2);
    console.log("name 4 is " + names[3] + " at index " + 3);
    console.log("name 5 is " + names[4] + " at index " + 4);
    console.log("name 6 is " + names[5] + " at index " + 5);

//look at how much code there is without loops...

    console.log("With For Loops:");

        for (var i = 0; i < names.length; i++) {
            console.log('The name at index ' + i + ' is: ' + names[i]);
        }

    console.log("With ForEach Loop:");
        names.forEach(function (element, index, array) {

                // element is the name
                // index is the iterator
                // array is the name array itself

            console.log('The name at index ' + index + ' is: ' + element);
        });


var states = ['TX', 'CA', 'CO','HI','MI','WA'];

states.forEach(function (element, index, array){
    console.log('state: '+ element+ " i " +index);
})

var myArray = [1,2,3,4];

console.log(myArray.push(5));
console.log(myArray.push(1));
console.log(myArray.push(3));
console.log(myArray);


/**
 * TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */

function getFirstElement() {
    console.log("1st element:" + states[0])
}
getFirstElement();

function getSecondElement() {
    console.log("2nd element:" + states[1])
}
getSecondElement();

function getThirdElement() {
    console.log("3rd element:" + states[2])
}
getThirdElement();
