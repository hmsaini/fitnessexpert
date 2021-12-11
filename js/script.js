
/* =============================================
     testimonials
===================================================
*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayhoverpause: true,
        nav: true,
        dots: true,
        // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =============================================
     navigation
===================================================
*/
// show and hide white navigation
$(function () {
    // show/hide nav on page load
    showHideNav();
    $(window).scroll(function () {
        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 70) {
            $("nav").addClass("white-nav-top");

            // show dark logo
            // $(".navbar-brand img").attr("img/logo/logo-dark.png");

            // Show back to top button
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");

            // show logo
            // $(".navbar-brand img").attr("img/logo/logo.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250);
    });
});
/* =============================================
     mobile menu
===================================================
*/
$(function () {

    // show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn,#mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});

/* =============================================
     recent products
===================================================
*/
$(function () {
    $("#recent-products").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayhoverpause: true,
        nav: true,
        dots:false,
        // dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            760: {
                items: 3
            }
        }
    });
});

/* =============================================
     Animation
===================================================
*/
// animate on scroll
$(function () {
    new WOW().init();
});
/* =============================================
     stats
===================================================
*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*------------------
		Popular Services
	--------------------*/
$('.popular-services-slider').owlCarousel({
    loop: true,
    dots: false,
    margin: 40,
    autoplay: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        991: {
            items: 3
        }
    }
});