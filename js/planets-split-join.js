//this goes between <script> </script>

(function(){
    "use strict";

//     // TODO: Convert planetsString to an array, save it to planetsArray.
//
     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
     var planetsArray = planetsString.split(" | ");
//
     console.log(planetsArray);
//
//     // TODO: Create a string with <br> tags between each planet. console.log() your results.
//
     var planetsArray2 = ["Mercury" , "Venus" , "Earth" , "Mars" , "Jupiter" , "Saturn" , "Uranus" , "Neptune"];
     var planetsString2 = planetsArray2.join(" <br> ");
//
     console.log(planetsString2);
//
//
//
// // Bonus: Create a second string that would display your planets in an undordered list.
// //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
// //        console.log() your results.
//
     var planetsArray3 = ["Mercury" , "Venus" , "Earth" , "Mars" , "Jupiter" , "Saturn" , "Uranus" , "Neptune"];
     var planetsStringUL = '<ul><li>' + planetsArray3.join("</li><li>") + '</li></ul>';
//
     console.log(planetsStringUL);
//     // or I can see it in my HTML as well with:
     document.body.innerHTML = planetsStringUL;
//

 })();
