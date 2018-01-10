(function ($) {
    "use strict";

/*******************
TOP Menu Stick
********************/
    var sticky_menu = $('#sticker, #sticker-mobile');
    var pos = sticky_menu.position();
    if (sticky_menu.length) {
        var windowpos = sticky_menu.offset().top;
        $(window).on('scroll', function() {
            var windowpos = $(window).scrollTop();
            if (windowpos > pos.top) {
                sticky_menu.addClass('stick');
            } else {
                sticky_menu.removeClass('stick');
            }
        });
    }

/*******************
SmoothSroll
********************/
    $('.smooth, .smooth-scroll a').bind('click', function (event) {
        var $anchor =$(this);
        var headerH ='38';
        $('html, body').stop().animate({
            'scrollTop': $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

/*******************
scrollspy
********************/
    $('body').scrollspy({ target: '.navbar-collapse',offset: 95 })

/********************
scrollUp
********************/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

})(jQuery);



