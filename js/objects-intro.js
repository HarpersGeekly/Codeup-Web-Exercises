/**
 * Created by RyanHarper on 11/10/16.
 */

"use strict";

    // TODO: Create person object
    // var person = todo;

    var person = {};


    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    person.firstName = "Ryan";
    person.lastName = "Harper";

    console.log(person);

    // TODO: Add a sayHello method to the person object that
    // alerts a greeting using the firstName and lastName properties
    // Say hello from the person object.
    // person.sayHello();

    person.sayHello = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName + "!");
    };



    var ryan = {};

    ryan.name = "RYAN HARPER";
    ryan.age = 31;
    ryan.country = "USA";

    console.log(ryan);

    ryan.cool = function() {
        console.log(this.name + " is cool ");
    };

    ryan.haveBirthday = function() {
        this.age += 1;
        console.log("Happy Birthday! You turned " + this.age + " today!");
    };


    //JSON syntax

    var oneAlbum = {
        artist: "Pink Floyd",
        title: "The Wall",
        tracks: 20,
        trackList: ["song1" , "song2" , "song3" , "song4"],
        year: 1979,
        platinum: true,
        price: 20.34,
        checkout: function() {
            console.log("Thank you for purchasing The Wall. You paid " + this.price + "!");
        }
    };

    oneAlbum.checkout();
    console.log(oneAlbum);


//     [1,2,3]
// {propertyName: Value, n...}


var albums = [
    {
        artist: "Pink Floyd",
        title: "The Wall",
        tracks: 20,
        trackList: ["song1" , "song2" , "song3" , "song4"],
        year: 1979,
        platinum: true,
        price: 20.34,
        checkout: function() {
            console.log("Thank you for purchasing Pink Floyd's album! You paid " + this.price + "!");
        }
    },
    {
        artist: "Oasis",
        title: "First",
        tracks: 20,
        trackList: ["song1" , "song2" , "song3" , "song4"],
        year: 2000,
        platinum: true,
        price: 20.34,
        checkout: function() {
            console.log("Thank you for purchasing Oasis' album! You paid " + this.price + "!");
        }
    },
    {
        artist: "Blur",
        title: "13",
        tracks: 20,
        trackList: ["song1", "song2", "song3", "song4"],
        year: 1998,
        platinum: true,
        price: 20.34,
        checkout: function () {
            console.log("Thank you for purchasing Blur's album! You paid " + this.price + "!");
        }
    }
];
console.log(albums[0].checkout());
console.log(albums[1].checkout());
console.log(albums[2].checkout());
console.log(albums);










