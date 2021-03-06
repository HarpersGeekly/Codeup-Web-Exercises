'use strict'

/* Knowing that a student's grades are 70, 80, 95. Write a Javascript program, using conditionals that logs to the console
 "You're awesome" if the average of her grades is greater than 80, otherwise the message should be "You need to practice more". */

var average = ((70+80+95)/3);

if (average > 80) {
    console.log("You're awesome!");
} else {
    console.log("You need to practice more.");
}

// OR...

var grade1= 70;
var grade2= 80;
var grade3= 95;

var numberOfGrades = 3;

var sum = grade1 + grade2 + grade3;
var average = sum / numberOfGrades;

if (average > 80) {
    console.log("You're awesome!");
} else {
    console.log("You need to practice more.");
}


/* HEB has an offer for the clients that buy products amounting more than $200. Write a JS program, using conditionals,
that logs to the browser, how much Ryan, Cameron, and George need to pay.
 We know that Cameron bought $180, Ryan $250 and George $320.
 Your program will have to display a line with the name of the person, the amount before the discount, if any,
 and the amount after the discount.*/

/* What if we didn't know the amounts yet? Would it be var customerPays = [0, 300]; Random amounts between 0 and 300??
If (customerPays > 200) ... right?
 */

/* Nevermind. In this case we would know because at the checkout they're going total an amount.
Then the code executes at the checkout counter for a coupon. */

var cameron = 180;
var ryan = 250;
var george = 320;

if (cameron > 200) {
    console.log("Cameron before discount " + cameron + " Cameron after discount " + cameron * .8)
} else {
    console.log("Cameron doesn't apply for discount. Total is " + cameron)
}
// When we multiply by .8 that means we're including the discount of 20% instead of multiplying by .20 and subtracting the old total from that new total.
if (ryan > 200) {
    console.log("Ryan before discount " + ryan + " Ryan after discount " + ryan * .8)
} else {
    console.log("Ryan doesn't apply for discount. Total is " + ryan)
}

if (george > 200) {
    console.log("George before discount " + george + " George after discount " + george * .8)
} else {
    console.log("George doesn't apply for discount. Total is " + george)
}
// OR...

var discount = .2; // 20% discount.
var total = george; // $320
if (total > 200) { // if $320 is over 200, which it is...
    total = total - (total * discount); // Do this. Take $320 and subtract ($320 * .20) --> $320 - $64 = $256.
}
console.log('The total is' + total);


/* Suppose your friend Isaac cannot decide between two options.
He doesn't know if he should buy a car or a new house.
Help him decide! Write a small JS program.
The following line generates either a 0 or a 1 randomly. var flipACoin = Math.floor(Math.random()* 2)
*/


/* Add an if statement to log a "Buy a car" to the console if the result is 0 and "Buy a house" if the result is 1.
 Could this program be written using a ternary operator? */

var flipACoin = Math.floor(Math.random()* 2);

    if (flipACoin == 1) {
        console.log("you should buy a house");
    } else {
        console.log("you should buy a car");
    }




