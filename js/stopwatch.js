/**
 * Created by RyanHarper on 11/15/16.
 */'use strict';
(function() {

    // start the timer:
    function startTimer() {
        stopwatchInterval = setInterval(function() {
            // update the inner html of the display, showing incremental seconds:
            display.innerHTML = seconds.toFixed(1).replace('.', ':'); //changing the display so it shows 1 decimal places too! along with replacing with ':'
            seconds += 0.1;
        }, 100); // <- that's standard interval syntax in the setInterval function. it goes there.
        // 1000 for 1 second, but we added a decimal place, so we changed it to 100 for millisecond, making it faster.

    }

    function stopTimer() {
        clearInterval(stopwatchInterval);
    }

    function resetTimer() {
        display.innerHTML = 0; // makes it go back to zero
        seconds = 0; // but also clears it out so that if it's started again after reset,
        // it doesn't pick up where it left off...
    }

    var seconds = 0;
    var stopwatchInterval;

    var buttons =  {
        start: document.getElementById('start'),
        stop: document.getElementById('stop'),
        reset: document.getElementById('reset')
    };

    var digitalDisplay = document.getElementById('display');

    buttons.start.addEventListener('click', startTimer);
    buttons.stop.addEventListener('click', stopTimer);
    buttons.reset.addEventListener('click', resetTimer);

    // identify my verbs
    // functionality for the buttons
    // add event listeners

})();