/*!
 * forbetterweb.com - Cover Business Template
 */

// Parallax
$(document).ready(function(){
    if (!device.tablet() && !device.mobile()) {
        $(".parallax").addClass("fixed");
        $window = $(window);
        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);
            $(window).scroll(function() {
                var yPos = -(($window.scrollTop() - $scroll.offset().top) / $scroll.data('speed'));
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });
            });
        });
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            $('.site-wrapper-inner').css({'opacity':(( 200-scroll )/400)+0.4});
        });

    }
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/* Create HTML5 element for IE */
document.createElement("section");