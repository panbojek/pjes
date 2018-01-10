/* -----------------------------------
Template:  Royme Portfolio Template
Author: RoyHridoy
Version: 1.0
Design and Developed by: Hridoy Roy

NOTE: This is main js file. All js plugin active & custom js included in this file.

--------------------------------------*/
/*================================================
[  Table of contents  ]
==================================================
01. Menu Bar / Cross menu
02. Top Menu Stick
03. Url Active Class
04. jQuery SlickNav / Onepage Mobile menu
05. jQuery MeanMenu / Multipage Mobile menu
06. SmoothSroll
07. Scrollspy
08. sticky hero area / Screen height
09. Slider
10. Related Item Slider
11. portfolio details slideshow
12. particles
13. Isotope
14. Magnific Popup
15. wow js
16. scroll to top
17. Preloader

======================================
[ End table content ]
======================================*/
(function($) {
    "use strict";

    /****************************
    01. Menu Bar / Cross menu
    *****************************/
    $(".menu-bar").on('click', function() {
        $(this).toggleClass('menu-close');
    });

    $(".menu-bar").on('click', function() {
        $('.mainmenu').toggleClass('menu-open');
    });
    
    $(".mainmenu ul li").has('ul').addClass('parent');


    /*******************
    02. Top Menu Stick
    ********************/
    var sticky_menu = $('#sticker');
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
    03. Url Active Class
    ********************/
    $(function() {
        var pgurl = window.location.href.substr(window.location.href
            .lastIndexOf("/") + 1);
        $(".mainmenu a").each(function() {
            if ($(this).attr("href") === pgurl || $(this).attr("href") === '')
                $(this).addClass("active");
        })
    });

    /*********** li active class ***********/
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if ((curpage === "" || curpage === "/" || curpage === "admin") && hash === "") {
        //$("mainmenu ul > li:first-child").addClass("active");
    } else {
        $(".mainmenu li").each(function() {
            $(this).removeClass("active");
        });
        if (hash != "")
            $(".mainmenu li a[href*='" + hash + "']").parents("li").addClass("active");
        else
            $(".mainmenu li a[href*='" + curpage + "']").parents("li").addClass("active");
    }

    /********************************************
    04. jQuery SlickNav / Onepage Mobile menu
    ********************************************/
    $('.mainmenu').slicknav({
        label: '',
        duration: 700,
        easingOpen: "easeOutBounce",
        prependTo: '#mobileMenu',
        closeOnClick: true
    });

    /********************************************
    05. jQuery MeanMenu / Multipage Mobile menu
    ********************************************/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "768",
        meanMenuContainer: ".mobile-menu"
    });

    /*******************
    06. SmoothSroll
    ********************/
    $('.smooth, .mainmenu a, .slicknav_nav a').on('click', function(event) {
        var $anchor = $(this);
        var left = $('body div');

        if (left.hasClass('left-side-wrapper')) {
            var headerH = '0';
        } else {
            var headerH = '72';
        }
        $('html, body').stop().animate({
            'scrollTop': $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    /*******************
    07. Scrollspy
    ********************/
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 75
    });

    /********************************************
    08. sticky hero area / Screen height
    ********************************************/
    var HeroHeight = $(".hero-wrapper").height();

    $(".content-wrapper").css('margin-top', HeroHeight + 'px');

    /*******************
    09. Slider
    ********************/
    $(".slider-area, .slider-area-2").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: false,
        loop: true,
        navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });

    $(".slider-area, .slider-area-2").on("translate.owl.carousel", function() {
        $(".single-slide-item h3, .single-slide-item h2").removeClass("animated fadeInDown").css("opacity", "0");
        $(".single-slide-item p, .single-slide-item .button").removeClass("animated fadeInUp").css("opacity", "0");
    });

    $(".slider-area, .slider-area-2").on("translated.owl.carousel", function() {
        $(".single-slide-item h3, .single-slide-item h2").addClass("animated fadeInDown").css("opacity", "1");
        $(".single-slide-item p, .single-slide-item .button").addClass("animated fadeInUp").css("opacity", "1");
    });

    /*****************************
    10. Related Item Slider
    ******************************/
    $(".related-items").owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        autoplay: false,
        loop: true,
        margin: 5,
        navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 768 up
            768: {
                items: 2,
            },
            // breakpoint from 768 up
            1024: {
                items: 3,
            }
        }
    });

    /***************************************
    11. portfolio details slideshow
    ****************************************/
    $(".item-imgs").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: false,
        loop: true,
        margin: 5,
        navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });


    /*******************
    12. particles
    ********************/
    $('.particle-bg').particleground({
        dotColor: '#fff',
        lineColor: '#fff'
    });

    /*******************
    13. Isotope
    ********************/
    $(".project-filter li").on('click', function() {
        $(".project-filter li").removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');

        $(".project-lists").isotope({
            filter: selector,
            stagger: 50
        });
    });

    /*******************
    14. Magnific Popup
    ********************/
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /********************
    15. wow js
    ********************/
    new WOW().init();

    /********************
    16. scroll to top
    ********************/
    //Check to see if the window is top if not then display button
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /********************
    17. Preloader
    ********************/
    $(window).on('load', function() {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });

        $(".project-lists").isotope();

    });

})(jQuery);