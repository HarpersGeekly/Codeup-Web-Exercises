/**
 * Created by RyanHarper on 12/14/16.
 */
(function () {

    // Clicking on the links on the navbar creates a smooth scrolling effect

    $(".sliding-link").click(function(e) {
        e.preventDefault();

        var aid = $(this).attr("href");
        setTimeout(function() {
            $('html,body').animate({scrollTop: $(aid).offset().top}, 1000)
        }, 100)
    });

    // scrolling down the page to a specific location will reveal a 'Back to Top' link

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });




})();

// <a href="#goto" class="sliding-link"> Link to div </a>
//
// <div id="goto"> I'm the div </div>