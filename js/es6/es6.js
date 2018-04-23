/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },

// TODO: fill in your name and email and add some programming languages you know to the languages array

    {
        name:'Harper',
        email:'HarperRyanC@gmail.com',
        languages:['html', 'css', 'js', 'mysql', 'java']
    }
];

// TODO: replace the `var` keyword with `const`, then try to reassign a variable declared as `const`

// var name = 'your_name_here';
// var email = '';
// var languages = [];

// es6.js:47 Uncaught SyntaxError: Identifier 'name' has already been declared

const name = 'RyanHarper';
const email = 'HarperRyanC@gcodeup.com';
const languages = ['Java', 'MySQL'];

// TODO: rewrite the object literal using object property shorthand

// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });

users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations
// var emails = [];
// var names = [];

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions. Arrow functions replace anonymous functions (which are functions without a name)

// users.forEach(function(user) {
//     return emails.push(user.email);
// });

// users.forEach(function(user) {
//     return names.push(user.name);
// });

users.forEach(user => emails.push(user.email));
    console.log(emails); // should return an array of emails

users.forEach(user => names.push(user.name));
    console.log(names); // should return an array of names

//combined:
users.forEach(user => {
    emails.push(user.email);
    names.push(user.name);
});

// returns are important. They give you something out of a function. You get something out of it.
// With the above arrow functions, I don't need a return because I'm simply pushing something to an array.

// TODO: replace `var` with `let` in the following declaration
// var developers = [];

let developers = [];

// TODO: rewrite the code below to use object destructuring assignment
//       note that you can also use destructuring assignment in the function parameter definition

// users.forEach(function(user) {
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;
// };

users.forEach(function({name, email, languages}) {
    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
    developers.push(`${name}'s email is: ${email}. ${name} knows ${languages.join(', ')}`);
});

// TODO: Use `let` for the following variable
// var list = '<ul>';

let list ='<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

    for (let developer of developers) {
        // TODO: rewrite the assignment below to use template strings
        // list += '<li>' + developer + '</li>';
        list += `<li>${developer}</li>`;
    }
    list += '</ul>';

    // document.getElementsByTagName('body')[0].innerHTML = list;
    document.getElementById('list').innerHTML = list;

console.log(developers);

const coolFizzBuzz = (num) => {
    for(let i = 1; i <= num; i++){
        console.log((i % 3 === 0 && i % 5 === 0) ?
            "fizzbuzz" : (i % 5 === 0 ?
                "buzz" : (i % 3 === 0 ?
                    "fizz" : i)));
    }
};
console.log(coolFizzBuzz(100));
