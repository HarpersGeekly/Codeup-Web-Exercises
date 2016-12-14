/* Created by RyanHarper on 12/8/16.*/
(function() {
    "use strict";

    var simonSavedMoves = []; // empty array for Simon.
    var playerSavedMoves = []; // empty array for Player.
    var squares = $(".square"); // JQuery searches for ".square" and registers it as an array of div classes, 0, 1, 2, 3.
    var mySelectedSquare; // will be used to represent the square I select.
    var level = 1; // starts the game off at round 1.
    var enableClicks = false; // gateway for enabling clicks, yes or no.
    var highScoreId = document.getElementById('highScore');

    // ===================================== GENERATE RANDOM NUMBER FUNCTION ===========================================

    var generateRandomSquare = function () {
        return squares[Math.floor(Math.random() * 4)]; // generates a random number between 0 and 3 corresponding to a square.
    };

    // ====================================== PUSH'S A SQUARE TO SIMON'S SAVED MOVES ===================================

    function assignSquare(square) {
        simonSavedMoves.push(square);
        fadeSquare(square);
    }

    // ======================================= FADING ANIMATION ========================================================

    function fadeSquare(square) {
        $(square).fadeTo(200, 1);
        $(square).fadeTo(200, 0.6);
    }
    function fadeSquareHard(square) {
        $(square).fadeTo(20, 1);
        $(square).fadeTo(20, 0.6);
    }

    // ======================== CLICKING SQUARES, SAVING SELECTED SQUARE TO PLAYER MOVES, AND COMPARING  ===============

    $(".square").click(function () {
        if(enableClicks == true) {
            mySelectedSquare = this; // when I click on a square it will read this square.
            playerSavedMoves.push(mySelectedSquare); // it takes that square and pushes it to the array to be used later to compare
            compareArrays();
        }
    });

    var i = 0;
    function compareArrays() {
        if(playerSavedMoves[i] == simonSavedMoves[i]) {
            fadeSquare(mySelectedSquare);
            i++;
            if (playerSavedMoves.length == simonSavedMoves.length) {
                wonTheRound();
            }
        } else {
            lostTheRound();
        }
    }

    function wonTheRound() {
        i = 0;
        setTimeout(updateLevelCounter, 750);
        levelUp();
        enableClicks = false;
        setTimeout(sequenceFades, 750);
        playerSavedMoves = [];
    }

    function lostTheRound() {
        $('.square').addClass('animated wobble');
        if (select == "hard") {
            $('.square').addClass('losingBackground');
        }
        $('#play').addClass('animated infinite pulse');
        resetLevel();
        updateLevelCounter();
        resetArrays();
    }

    // ==================================== NEXT SEQUENCE AND FADING SPEED =============================================
    // this gives different timeouts for each subsequent square, in a way "waiting" for the next square to finish fading.

    function sequenceFades() {

        simonSavedMoves.forEach(function(square, index) {
            if (select == "hard") {
                setTimeout(function () {
                    fadeSquareHard(square);
                }, (125 * index));
                if (index == simonSavedMoves.length - 1) {
                    setTimeout(function() {
                        assignSquare(generateRandomSquare());
                        enableClicks = true;
                    }, 125 * index + 125);
                    setTimeout(function() {
                        assignSquare(generateRandomSquare());
                        enableClicks = true;
                    }, 125 * index + 250);
                }
                // } else if (select == "getWeird") {
            } else {
                setTimeout(function () {
                    fadeSquare(square);
                }, (500 * index));
                if(index == simonSavedMoves.length - 1) {
                    setTimeout(function() {
                        assignSquare(generateRandomSquare());
                        enableClicks = true;
                    }, 500 * index + 500);
                }
            }
        });
        updateHighScore();
    }

    //================================== LEVEL UP  ======  RESET LEVEL =================================================

    function levelUp() {
        level++;
    }
    function updateLevelCounter() {
        document.getElementById("level").innerHTML = "Round: " + level;
    }

    function resetLevel() {
        level = 1;
    }

    function resetArrays() {
        playerSavedMoves = [];
        simonSavedMoves = [];
    }

    // =================================== DIFFERENT GAME MODES ========================================================

    var select;
    function gameModes() {
        select = $("select").val();
        if (select == "hard") {
            resetLevel();
            $('.square').attr("id", "hardBackground");
            // get weird here
        } else {
            $('.square').removeAttr("id", "hardBackground");
        }
    }

    function switchGameModes() {

        $('.square').removeClass('losingBackground animated wobble');
        setTimeout(function(){
        }, 100);
        $('#play').removeClass('animated infinite pulse');
        setTimeout(function(){
            assignSquare(generateRandomSquare())
        }, 200);
    }

    var userHighScore = 1; // user high score starts at 0.
    function updateHighScore() {
        if (userHighScore <= level) { //
            userHighScore = level;
            highScoreId.innerHTML = userHighScore;
        } else if (userHighScore > level) {
            highScoreId.innerHTML = userHighScore;
        }
    }
    updateHighScore();

    // ===================================== PLAY BUTTON TO START GAME =================================================

    $("#play").click(function  () {
        alert("Simon's Turn!");
        enableClicks = true;
        resetArrays();
        resetLevel();
        gameModes();
        updateLevelCounter();
        switchGameModes();
    });

    $("#form1").submit(function(e){
        e.preventDefault();
    })

})();
// } else if (select == "getWeird") {
//
//     // this needs to go into a loop while the game plays... but where?
//     $('.red').animate({
//         left: "+=210"
//     },1000).animate({
//         top: "+=210"
//     },1000).animate({
//         left: "-=210"
//     },1000).animate({
//         top: "-=210"
//     });
//
//     $('.green').animate({
//         top: "+=210"
//     },1000).animate({
//         left: "-=210"
//     },1000).animate({
//         top: "-=210"
//     },1000).animate({
//         left: "+=210"
//     });
//
//     $('.yellow').animate({
//         left: "-=210"
//     },1000).animate({
//         top: "-=210"
//     },1000).animate({
//         left: "+=210"
//     },1000).animate({
//         top: "+=210"
//     });
//
//     $('.blue').animate({
//         top: "-=210"
//     },1000).animate({
//         left: "+=210"
//     },1000).animate({
//         top: "+=210"
//     },1000).animate({
//         left: "-=210"
// //     })
//
//
//
// var simonSavedMoves = []; // empty array for Simon.
// var playerSavedMoves = []; // empty array for Player.
// var squares = $(".square"); // JQuery searches the dom for ".square" and registers it as an array of div classes, 0, 1, 2, 3.
// var mySelectedSquare; // will be used to represent the square I select.
// var level = 1; // starts the game off at round 1.
// var enableClicks = false; // gateway for enabling clicks, yes or no.
//
// // ===================================== GENERATE RANDOM NUMBER FUNCTION ===========================================
//
// var generateRandomSquare = function () {
//     console.log("generating random number...");
//     return squares[Math.floor(Math.random() * 4)]; // generates a random number between 0 and 3
// };
//
// // ===================== ASSIGNS A NUMBER VALUE TO EACH SQUARE AND PUSH'S TO SIMON'S SAVED MOVES ===================
//
// function assignSquare(square) {
//     simonSavedMoves.push(square);
//     fadeSquare(square);
//     enableClicks = false;
// }
//
// function newGeneratedSequence() {
//     assignSquare(generateRandomSquare());
// }
//
// // ======================================= FADING ANIMATION ========================================================
//
// function fadeSquare(square) {
//     $(square).fadeTo(200, 1);
//     $(square).fadeTo(200, 0.6);
// }
// function fadeSquareHard(square) {
//     $(square).fadeTo(20, 1);
//     $(square).fadeTo(20, 0.6);
// }
//
// // =========== FUNCTION FOR CLICKING SQUARES, SAVING SELECTED SQUARE TO PLAYER MOVES, AND COMPARING ARRAY'S ========
//
//
// $(".square").click(function () {
//     if(enableClicks != true) {
//         mySelectedSquare = this; // when I click on a square it will read this square.
//         playerSavedMoves.push(mySelectedSquare); // it takes that square and pushes it to the array to be used later to compare
//         fadeSquare(mySelectedSquare);
//         console.log("I clicked on: " + mySelectedSquare);
//         console.log(mySelectedSquare + " added to player moves");
//         console.log("checking if they match...");
//
//         var length = playerSavedMoves.length - 1;
//
//         if (playerSavedMoves.length !== simonSavedMoves.length && simonSavedMoves[length] === playerSavedMoves[length]) {
//             // don't do anything.
//         } else if (simonSavedMoves[length] === playerSavedMoves[length]) {
//             // go on...
//             console.log(playerSavedMoves);
//             console.log(simonSavedMoves);
//             console.log("They match!");
//             level++;
//             setTimeout(levelUp, 900);
//             setTimeout(sequenceFades, 750);
//             playerSavedMoves = [];
//
//         } else {
//             // lose.
//             console.log(playerSavedMoves);
//             console.log(simonSavedMoves);
//             console.log("They don't match");
//             console.log("You LOST!!");
//             // alert("You lost!");
//
//             $('.square').addClass('animated wobble');
//             if (select == "hard") {
//                 $('.square').addClass('losingBackground');
//             }
//             $('#play').addClass('animated infinite pulse');
//             level = 1;
//             resetLevel();
//             resetArrays();
//             console.log(playerSavedMoves);
//             console.log(simonSavedMoves);
//         }
//     }
// });
//
// // ==================================== NEXT SEQUENCE AND FADING SPEED =============================================
//
// // this gives different timeouts for each subsequent square, in a way "waiting" for the next square to finish fading.
//
// function sequenceFades() {
//
//     simonSavedMoves.forEach(function(square, index) {
//         if (select == "hard") {
//             setTimeout(function () {
//                 fadeSquareHard(square);
//             }, (175 * index));
//             if (index == simonSavedMoves.length - 1) {
//                 setTimeout(newGeneratedSequence, 175 * index + 175);
//             }
//             // } else if (select == "getWeird") {
//         } else {
//             setTimeout(function () {
//                 fadeSquare(square);
//             }, (500 * index));
//             if(index == simonSavedMoves.length - 1) {
//                 setTimeout(newGeneratedSequence, 500 * index + 500);
//             }
//         }
//     });
// }
//
// //================================== LEVEL UP  ======  RESET LEVEL =================================================
//
// function levelUp() {
//     document.getElementById("level").innerHTML = "Round: " + level;
// }
// levelUp();
//
// function resetLevel() {
//     document.getElementById("level").innerHTML = "Round: " + level;
// }
//
// function resetArrays() {
//     playerSavedMoves = [];
//     simonSavedMoves = [];
// }
//
// // =================================== DIFFERENT GAME MODES ========================================================
//
// var select;
// function gameModes() {
//     select = $("select").val();
//     if (select == "hard") {
//         resetLevel();
//         $('.square').attr("id", "hardBackground");
//         // change colors
//     } else {
//         $('.square').removeAttr("id", "hardBackground");
//     }
// }
//
// // ============================================== PLAY BUTTON TO START GAME ========================================
//
// $("#play").click(function  () {
//     alert("Simon's Turn!");
//     enableClicks = true;
//     resetArrays();
//     resetLevel();
//     gameModes();
//
//     console.log(select);
//
//     $('.square').removeClass('losingBackground');
//     setTimeout(function(){
//     }, 100);
//
//     $('.square').removeClass('animated wobble');
//     setTimeout(function(){
//     }, 100);
//
//     $('#play').removeClass('animated infinite pulse');
//     setTimeout(function(){
//         assignSquare(generateRandomSquare())
//     }, 200);
//
// });
//
// $("#form1").submit(function(e){
//     e.preventDefault();
// })