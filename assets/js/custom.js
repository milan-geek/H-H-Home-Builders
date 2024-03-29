jQuery(document).ready(function ($) {

    // For wow animation 
    new WOW().init();

    // For Banner slider
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                dots: false,
            }
        }]
    });

    // For We Think Box Slider
    $('.we-think-box-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                dots: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
        }, {
            breakpoint: 426,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
        }]
    });

    // For Check Our Home Slider
    $('.check-our-home-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        rows: 0,
        dots: false,
        arrows: true,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
            }
        }]
    });

    // For Our Testimonials slider
    $('.our-testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        rows: 0,
        dots: false,
        arrows: true,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
    });

    // For Awards Certification slider
    $('.awards-certification-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        rows: 0,
        dots: true,
        arrows: false,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 2000,
    });

    // For Gallery View Slider
    $('.gallery-view-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        rows: 2,
        dots: false,
        arrows: false,
        autoplay: false,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                rows: 1,
            }
        }]
    });

    // For Gallery Feature Image slider
    $('.gallery-feature-image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: true,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: true,
            }
        }]
    });

    // For You May Also Like Slider
    $('.you-may-also-like-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
            }
        }]
    });

    /* Scroll To Top JS */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });
    $('#scrollToTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /* Sticky Header JS */
    $(window).scroll(function () { // this will work when your window scrolled.
        var height = $(window).scrollTop(); //getting the scrolling height of window
        if (height > 0) {
            $(".main-header").addClass("sticky_head");
        } else {
            $(".main-header").removeClass("sticky_head");
        }
    });

    // For Mobile Dropdown
    var window_size = $(window).width();
    if (window_size <= 991) {
        $('.menu-toggle').click(function () {
            $(".main-navigation").toggleClass('toggled');
            $(".menu-item-has-children").removeClass('active-sub-menu');
            $(".menu-item-has-children").find('.sub-menu').css('display', 'none');
        })

        /* dropDown mobile menu */
        $(".menu-item-has-children a").first().attr('href', 'javascript:void(0);');

        /* dropDown mobile menu show and hide */
        $('body').on('click', '#primary-menu .menu-item-has-children', function () {
            if (($(this).hasClass('active-sub-menu'))) {
                $(this).removeClass('active-sub-menu');
                $(this).find('.sub-menu').css('display', 'none');
            }
            else {
                $(".menu-item-has-children").removeClass('active-sub-menu');
                $(".sub-menu").css('display', 'none');
                $(this).addClass('active-sub-menu');
                $(this).find('.sub-menu').css('display', 'block');
            }
        });
    }

    /* Mobile Menu JS */
    $("#main-menu .menu-item a").click(function () {
        $("#site-navigation").removeClass("toggled");
    });

    /* For Fancybox */
    Fancybox.bind('[data-fancybox="video-gallery"]', {
        // Your custom options
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        // Your custom options
    });

    Fancybox.bind('[data-fancybox="gallery-feature-image"]', {
        // Your custom options
    });


    /* For Read More Button */
    $(".read-more-btn").click(function () {
        $(".property-text-discription").toggleClass('active');
        $(this).hide();
    });

    /* For Load More Button */
    $(".loading-more-btn").click(function () {
        $('.loading-more-text').html('Loading more items')
        $('.loading-icon img').css('display', 'block')
        setTimeout(function () {
            $('.loading-more-text').html('Load more items')
            $(".loading-icon img").hide("2000")
        }, 1000);
    });

    /* For Load More Button Blog Section*/
    $(".blog-page-sec .col-sm-6").slice(0, 12).show();
    $("body").on('click touchstart', '.loading-more-btn', function (e) {
        e.preventDefault();
        $(".blog-page-sec .col-sm-6:hidden").slice(0, 3).slideDown();
        if ($(".blog-page-sec .col-sm-6:hidden").length == 0) {
            $(".loading-more-btn").css('visibility', 'hidden');
        }
        $('html,body').animate({
            scrollTop: $(this).offset(1).top
        }, 1000);
    });

});