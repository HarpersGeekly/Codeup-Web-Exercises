'use strict'

/* Knowing that a student's grades are 70, 80, 95. Write a JS program, using conditionals that logs to the console "You're awesome" if the average of her grades is greater than 80, otherwise the message should be "You need to practice more". */

var average = ((70+80+95)/3);

if (average > 80) {
    console.log("You're awesome!");
} else {
    console.log("You need to practice more.");
}

/* HEB has an offer for the clients that buy products amounting more than $200. Write a JS program, using conditionals, that logs to the browser, how much does Ryan, Cameron and George need to pay. We know that Cameron bought $180, Ryan $250 and George $320. Your program will have to display a line with the name of the person, the amount before the discount, if any, and the amount after the discount.*/

var cameron = 180;
var ryan = 250;
var george = 320;

if (cameron > 200) {
    console.log("Cameron before discount " + cameron + " Cameron after discount " + cameron * .9)
} else {
    console.log("Cameron doesn't apply for discount. Total is " + cameron)
}

/* Suppose your friend Isaac cannot decide between two options. He doesn't know if he should buy a car or a new house. Help him decide! Write a small JS program. The following line generates either a 0 or a 1 randomly.*/

/* var flipACoin = Math.floor(Math.random()* 2) */

/* Add an if statement to log a "Buy a car" to the console if the result is 0 and "Buy a house" if the result is 1. Could this program be written using a ternary operator? */

var flipACoin = Math.floor(Math.random()* 2);

    if (flipACoin == 1) {
        console.log("you should buy a house");
    } else {
        console.log("you should buy a car");
    }









