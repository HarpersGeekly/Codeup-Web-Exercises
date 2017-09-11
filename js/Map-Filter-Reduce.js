/**
 * Created by RyanHarper on 9/11/17.
 */
// Use the data below to complete the following tasks:

    // key: value

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

//remember that map, filter, and reduce functions have built in For Loops so we don't need to For Loop anything. These help with shorthanded syntaxing
//
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// users.filter((argument) =return> );

    let filteredLanguages = users.filter((user) => user.languages.length >= 3);
    console.log(filteredLanguages);


// Use .map to create an array of strings where each element is a user's email address
    let arrayEmails = users.map((user) => user.email);
    console.log(arrayEmails);

// Use .reduce to transform the array into a new object where the object's keys are ids and the values are objects that represent each user
// Remember... { key:value }
    let newObject = users.reduce((tempObject, user) => {
        tempObject[user.id] = user; //key[] = value. Create a property with "user.id" as the key and the "userObject" as the value. The squared brackets return the actual value of that user property "id".
        return tempObject;
    }, {}); // the first tempObject will be empty. The next loop will populate user.
    console.log(newObject); //the array is reduced down to a single value that was transformed into an object.
    // The keys are now the id's, and the values are the object representing each user.
    // The output in this helps eliminate the 0 index of an array. An array will have the id's off. Now, with the object, the id key matches the index.





