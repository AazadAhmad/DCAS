
$(document).ready(function () {

    // banner
    $(".home-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        navText: ["", ""],
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 6000
    });

    // Accreditations slider
    $('.accreditations').owlCarousel({
        loop: false,
        margin: 30,
        responsiveClass: true,
        nav: true,
        navText: [" ", " "],
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 5
            },
            600: {
                items: 3,
                margin: 20
            },
            1000: {
                items: 4
            }
        }
    })

    // about slider
    $('.about-slider').owlCarousel({
        items: 1,
        loop: false,
        margin: 30,
        responsiveClass: true,
        nav: true,
        navText: [" ", " "],
        dots: false
    })


    // More about DCAS slider
    $('.more-about-dcsa').owlCarousel({
        loop: false,
        margin: 40,
        responsiveClass: true,
        nav: true,
        navText: [" ", " "],
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


    // Our Gallery filter
    $(function () {
        var filterList = {
            init: function () {
                // MixItUp plugin
                // http://mixitup.io
                $('.portfolio-grid').mixItUp({
                    selectors: {
                        target: '.portfolio',
                        filter: '.filter'
                    },
                    load: {
                        filter: '.classroom' // show app tab on first load
                    }
                });
            }
        };
        // Run the show!
        filterList.init();
    });


    // Testimonials slider
    $('.testimonials-slider').owlCarousel({
        items: 1,
        loop: false,
        margin: 30,
        responsiveClass: true,
        nav: false,
        navText: [" ", " "],
        dots: true
    })


    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

}); 
//document ready end
