//February 21, 2018
//======================================================================================================================

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit

const firstLetters = fruits.map(fruit => fruit.substring(0,1));
    console.log(firstLetters);

// PROBLEM 2 - create array of user objects based on the customers array of objects
// (each user object should just have name and age properties)

// const customerChange = customers.map(customer => [customer.name, customer.age]);
//     console.log(customerChange);
const customerChange = customers.map(({name, age}) => {
    return {
        name,
        age
    };
});
console.log(customerChange);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

const civilServantCustomers = customers.filter(customer =>
    customer.occupation === ("Police Officer") ||
    customer.occupation === ("Teacher"));
    console.log(civilServantCustomers);

const civilServantCustomersDeconstructed = customers.filter(({occupation}) =>
    occupation === ("Police Officer") ||
    occupation === ("Teacher"));
    console.log(civilServantCustomersDeconstructed);

// (with filter you can just return a boolean value so no need for "return")

// PROBLEM 4 - determine the average age of customers

const averageAgeOfCustomers = customers.reduce((total, customer) => {
    total += customer.age;
    return total;
}, 0) / customers.length;
console.log(averageAgeOfCustomers);


//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()

//======================================================================================================================

// Given the following array...
const names = ["John", "Max", "Ronald"];

// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
// - Create an array where each word is in all caps
// - Create an array where all names have more than 3 letters
// - Create an array of names with only the last two letters of each name
// - Create a total count of all letters
// - Create a string of all letters in alphabetical order
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
// - Create a string of all vowels in the entire array of names
// - Create a single object with properties

//======================================================================================================================

// Given the following array...
const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];

// - Calculate the average age of family members (think of the accumulator as running totals) Math.floor or Math.round can help too.
const averageFamilyAge = Math.round(family.reduce((accumulator, person) => {
    accumulator += person.age;
    return accumulator;
}, 0) / family.length);
console.log(averageFamilyAge);

// - Create an array of family objects without the age property


// - Create an array of all minors
const minors =family.filter(({age}) => {
    return age < 18;
});
console.log(minors);

// - Calculate the total age combined of family members


// - Create an array of only female family member objects
const femaleFamily = family.filter(({gender}) => {
    return gender === "female";
});
console.log(femaleFamily);

// - Create a single object with properties containing arrays of all names, genders, and ages
const singleObjectFamily = family.reduce((accumulator, person) => {
   // check my "base case" initial state of things...
    // we need the accumulator to store on each iteration.
    // If we got rid of the if(typeof)'s we only get the last object filling the arrays: [Bob], [male], [32]
    // we want all the objects.

    if(typeof accumulator.names === "undefined") { // if undefined,
        accumulator.names = []; // then make an array of names
    }
    if(typeof accumulator.ages === "undefined") {
        accumulator.ages = [];
    }
    if(typeof accumulator.genders === "undefined") {
        accumulator.genders = [];
    }

    accumulator.names.push(person.name);
    accumulator.ages.push(person.age);
    accumulator.genders.push(person.gender);

    return accumulator;

}, {}); // create a single object
console.log(singleObjectFamily);

    // OR!
    const output = {
        names: family.map(obj => obj.name),
        ages: family.map(obj => obj.age),
        genders: family.map(obj => obj.gender),
    };
    console.log(output);

// var output = {
//     "names": ["Bob", "Summer", "Karen"],
//     "genders": ["male", "female"],
//     "ages": [7, 10, 32],
// }