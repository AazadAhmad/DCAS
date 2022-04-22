$(window).scroll(function () {

    // sticky Header
    var scroll = $(window).scrollTop();
        if (scroll >= 35) {
            $(".bottom-header").addClass("sticky");
        } else {
            $(".bottom-header").removeClass("sticky");

        } 
});


if (window.matchMedia("(max-width: 991px)").matches) {
    $(".hamburger").click(function () {
        $(".navbar-collapse").addClass("open-nav");
        $(".menu-shadow").addClass("body-bg");
        $(".top-header").addClass("overlay-div");
        $(".banner-box").addClass("overlay-div");
        $("body").css('overflow', 'hidden');
    });
    $(".close-nav").click(function () {
        $(".navbar-collapse").removeClass("open-nav");
        $(".menu-shadow").removeClass("body-bg");
        $(".top-header").removeClass("overlay-div");
        $(".banner-box").removeClass("overlay-div");
        $("body").css('overflow', 'auto');
    });
    // $("header .bottom-header .navbar-light .navbar-nav .nav-item").click(function () {
    //     $(this).siblings().removeClass("rotate");
    //     $(this).addClass("rotate")
    // });

    
}

