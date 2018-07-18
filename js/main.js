$(document).ready(function () {

    /*eslint-env jquery*/
    
    //USE STRICT
    "use strict";
    
    
    /*====================================================*/
    /* Variables                                          */
    /*====================================================*/
    var $window = $(window),
        preloader = $(".preloader"),
        nav = $(".nav"),
        navbarDesktop = $(".navbar-desktop"),
        navbarMobile = $(".navbar-mobile"),
        navbarCollapse = $(".navbar-collapse"),
        scrollSpy = $(".scrollspy"),
        bgParallax = $(".bg-parallax"),
        bannerScreenSlider = $(".screen-slider"),
        bannerSlider = $(".banner-slider"),
        bannerParticles = $(".banner-particles"),
        bannerVideo = $("#bgndVideo"),
        processSlider = $(".process-slider"),
        counter = $(".counter"),
        imgPopup = $(".mfp-image-popup"),
        videoPopup = $(".mfp-video-popup"),
        screenShotSlider = $(".screenshots-slider"),
        accordian = $(".accordian"),
        paginatedSlider = $(".owl-paginated-slider"),
        testimonialSliderMinimal = $(".testimonial-slider-minimal"),
        subscribeForm = $(".subscribe-form"),
        form = $('.contact-form'),
        formMessages = $('.form-messages');


    /*====================================================*/
    /* Scroll Animation                                   */
    /*====================================================*/

    var scrollAnimation = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false
    });

    /*====================================================*/
    /* Swiper Slider Animation                             *
    /*====================================================*/

    function swiperAnimations(swiper) {
        var prevSlide = $(swiper.container),
            nextSlide = $(swiper.slides[swiper.activeIndex]);

        prevSlide
            .find("[data-animate]")
            .each(function () {
                var $this = $(this);
                $this
                    .removeClass("animated")
                    .removeClass($this.attr("data-animate"))
                    .addClass("not-animated");
            });

        nextSlide
            .find("[data-animate]")
            .each(function () {
                var $this = $(this),
                    delay = $this.attr("data-animation-delay");
                setTimeout(function () {
                    $this
                        .removeClass("not-animated")
                        .addClass($this.attr("data-animate"))
                        .addClass("animated");
                }, delay ? parseInt(delay, 10) : 0);
            });
    }


    /*====================================================*/
    /* Particle Settings                                  */
    /*====================================================*/

    var particlesSettings = {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#FFF"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#F0F0F0"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 10,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#FFF",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 1.5
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    };


    /*====================================================*/
    /* Preloader                                          */
    /*====================================================*/

    if (preloader.length) {
        setTimeout(function () {
            preloader.fadeOut("slow", function () {
                $(this).remove();
            });
        }, 1000)
    }


    /*====================================================*/
    /* Scroll Animation Init                              */
    /*====================================================*/

    scrollAnimation.init();

    
    /*====================================================*/
    /* Nav                                                */
    /*====================================================*/

    if (nav.length) {

        nav.affix({
            offset: {
                top: 1
            }
        });

        navbarDesktop.on("affix.bs.affix", function () {
            if (!navbarDesktop.hasClass("affix")) {
                navbarDesktop.addClass("animated slideInDown");
            }
        });

        navbarDesktop.on("affix-top.bs.affix", function () {
            navbarDesktop.removeClass("animated slideInDown");
            navbarCollapse.collapse("hide");
        });

        navbarMobile.on("affix.bs.affix", function () {
            if (!navbarMobile.hasClass("affix")) {
                navbarMobile.addClass("animated slideInDown");
            }
        });

        navbarMobile.on("affixed-top.bs.affix", function () {
            navbarMobile.removeClass("animated slideInDown");
        });

        $window.on("scroll", function () {
            navbarCollapse.collapse("hide");
        });

        if (scrollSpy.length) {
            scrollSpy.singlePageNav({
                updateHash: false,
                offset: 120,
                speed: 1000,
                currentClass: "active",
                easing: "swing"
            });
        }

    }


    /*====================================================*/
    /* Parallax                                           */
    /*====================================================*/

    if (bgParallax.length) {

        bgParallax.each(function () {
            var url;
            if (url = $(this).attr("data-bg-src")) {
                $(this).css({
                    "background-image": "url(" + url + ")",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-position": "50% 50%"
                })
                    .removeAttr("data-bg-src");
            }
        });

    }


    /*====================================================*/
    /* Banner Screen Slider                               */
    /*====================================================*/

    if (bannerScreenSlider.length) {

        bannerScreenSlider.owlCarousel({
            center: true,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });

    }


    /*====================================================*/
    /* Banner Slider                                      */
    /*====================================================*/

    if (bannerSlider.length) {

        bannerSlider.each(function () {
            var slider = $(this);
            var pag = slider.find(".swiper-pagination"),
                next = slider.find(".swiper-button-next"),
                prev = slider.find(".swiper-button-prev"),
                swiperSlide = slider.find(".swiper-slide");

            swiperSlide.each(function () {
                var bgSource;

                if (bgSource = $(this).attr("data-slide-bg")) {
                    $(this).css({
                        "background-image": "url(" + bgSource + ")",
                        "background-size": "cover"
                    });
                }
            })
                .end()
                .find("[data-animate]")
                .addClass("not-animated")
                .end()
                .swiper({
                    nextButton: next.length ? next.get(0) : null,
                    prevButton: prev.length ? prev.get(0) : null,
                    pagination: pag.length ? pag.get(0) : null,
                    loop: slider.attr("data-loop") !== "false",
                    paginationClickable: true,
                    effect: "fade",
                    speed: 1000,
                    onTransitionEnd: function (swiper) {
                        swiperAnimations(swiper);
                    },
                    onInit: function (swiper) {
                        swiperAnimations(swiper);
                    },
                    onSlideChangeStart: function (swiper) {
                        var activeSlideIndex, slidesCount;
                        activeSlideIndex = swiper.activeIndex;
                        slidesCount = swiper.slides.not(".swiper-slide-duplicate").length;

                        if (activeSlideIndex === slidesCount + 1) {
                            activeSlideIndex = 1;
                        } else if (activeSlideIndex === 0) {
                            activeSlideIndex = slidesCount;
                        }

                        if ($(swiper.container).find(".preview-img")[0] !== undefined) {
                            $(swiper.container)
                                .find(".swiper-button-prev .preview-img")
                                .css("background-image", "url(" + swiper.slides[activeSlideIndex - 1].getAttribute("data-slide-bg") + ")");
                            $(swiper.container)
                                .find(".swiper-button-next .preview-img")
                                .css("background-image", "url(" + swiper.slides[activeSlideIndex + 1].getAttribute("data-slide-bg") + ")");
                        }
                    }
                });

        });

    }


    /*====================================================*/
    /* Banner Particles                                   */
    /*====================================================*/

    if (bannerParticles.length) {

        particlesJS("particles-js", particlesSettings);

    }


    /*====================================================*/
    /* Banner Video                                       */
    /*====================================================*/

    if (bannerVideo.length) {

        bannerVideo.YTPlayer();

    }


    /*====================================================*/
    /* Process Slider                                     */
    /*====================================================*/

    if (processSlider.length) {

        processSlider.each(function () {
            var object = $(this),
                slider = $(this).find(".device-slider");

            if (slider.length) {
                var slideItem = $(this).find(".slick-slider");

                slideItem.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 3000,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false
                });

                $(this).find(".process-slider-nav").each(function (index, el) {

                    slideItem.on("afterChange", function (event, slick, currentSlide) {
                        var data_count = parseInt($(el).attr("data-count"), 10);

                        if (data_count === parseInt(currentSlide, 10)) {
                            $(".process-slider-nav", object).removeClass("active");
                            $(el).addClass("active");
                        }

                        $(el).on("click", function () {
                            slideItem.slick("slickGoTo", index, false);
                        });

                    });

                    $(el).on("click", function () {

                        var clickplace = parseInt($(this).attr("data-count"), 10);
                        $(".process-slider-nav", object).removeClass("active");
                        $(this).addClass("active");
                        slideItem.slick("slickGoTo", clickplace, false);

                    });

                });
            }
        });

    }


    /*====================================================*/
    /* Counter                                            */
    /*====================================================*/

    if (counter.length) {

        counter.appear(function () {
            counter.each(function () {
                var $this = $(this);
                $this.easyPieChart({
                    barColor: false,
                    trackColor: false,
                    scaleColor: false,
                    scaleLength: false,
                    lineCap: false,
                    lineWidth: false,
                    size: false,
                    animate: 5000,
                    onStep: function (from, to, percent) {
                        $(this.el).find(".percent").text(Math.round(percent));
                    }
                });
            });
        });

    }


    /*====================================================*/
    /* Magnifiq popup                                     */
    /*====================================================*/

    //Image Popup
    if (imgPopup.length) {
        imgPopup.magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom",
            zoom: {
                enabled: true,
                duration: 300,
                easing: "ease-in-out",
                opener: function (openerElement) {
                    return openerElement.is("img") ? openerElement : openerElement.closest(".slide").find("img");
                }
            }
        });
    }

    // Video Popup
    if (videoPopup.length) {
        videoPopup.magnificPopup({
            type: "iframe",
            removalDelay: 300
        });
    }

    /*====================================================*/
    /* Screenshots Slider                                 */
    /*====================================================*/
    if (screenShotSlider.length) {

        screenShotSlider.owlCarousel({
            items: 5,
            loop: false,
            margin: 16,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

    }


    /*====================================================*/
    /* Accordian                                          */
    /*====================================================*/

    if (accordian.length) {

        var accordianContent = $(".accordian-content").hide();
        accordianContent.eq(0).addClass("active").slideDown();

        accordian.on("click", "a", function (event) {

            event.preventDefault();
            var $target = $(this).attr("href");
            $($target).slideDown("slow").addClass("active");
            accordianContent.not($target).slideUp("slow").removeClass("active");

        });

    }
    /*====================================================*/
    /* Paginated   Slider                                 */
    /*====================================================*/
    if (paginatedSlider.length) {

        paginatedSlider.each(function () {
            var $slider = $(this);

            if ($slider.attr("data-dots-custom")) {
                $slider.on("initialized.owl.carousel", function (event) {
                    var carousel = $(event.currentTarget),
                        customPag = $(carousel.attr("data-dots-custom")),
                        active = 0;

                    if (carousel.attr("data-active")) {
                        active = parseInt(carousel.attr("data-active"), 10);
                    }

                    carousel.trigger("to.owl.carousel", [active, 300, true]);
                    customPag.find("[data-owl-item='" + active + "']").addClass("active");

                    customPag.find("[data-owl-item]").on("click", function (e) {
                        e.preventDefault();
                        carousel.trigger("to.owl.carousel", [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
                    });

                    carousel.on("translate.owl.carousel", function (event) {
                        customPag.find(".active").removeClass("active");
                        customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active");
                    });
                });
            }

            if ($slider.attr("data-nav-custom")) {
                $slider.on("initialized.owl.carousel", function (event) {
                    var carousel = $(event.currentTarget),
                        customNav = $(carousel.attr("data-nav-custom"));

                    customNav.find("[data-owl-prev]").on("click", function (e) {
                        e.preventDefault();
                        carousel.trigger("prev.owl.carousel", [300]);
                    });

                    customNav.find("[data-owl-next]").on("click", function (e) {
                        e.preventDefault();
                        carousel.trigger("next.owl.carousel", [300]);
                    });
                });
            }

            $slider.owlCarousel({
                items: 1
            });

        });

    }


    /*====================================================*/
    /* Testimonial Sliders                                */
    /*====================================================*/



    var testimonialSlider = $(".testimonial-slider"),
        avatarSlider = $(".testimonial-avatar-slider"),
        syncedSecondary = true;

    testimonialSlider.owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200
    }).on("changed.owl.carousel", syncAvatar);

    avatarSlider
        .on("initialized.owl.carousel", function () {
            avatarSlider.find(".owl-item").eq(1).addClass("current");
        })
        .owlCarousel({
            items: 5,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            mouseDrag: false,
            responsiveRefreshRate: 100
        }).on("changed.owl.carousel", syncTestimonial);

    function syncAvatar(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        avatarSlider
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = avatarSlider.find(".owl-item.active").length - 1;
        var start = avatarSlider.find(".owl-item.active").first().index();
        var end = avatarSlider.find(".owl-item.active").last().index();

        if (current > end) {
            avatarSlider.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            avatarSlider.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncTestimonial(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            testimonialSlider.data("owl.carousel").to(number, 100, true);
        }
    }

    avatarSlider.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        testimonialSlider.data("owl.carousel").to(number, 300, true);
    });


   

    // Testimonial Slider Minimal

    if (testimonialSliderMinimal.length) {

        testimonialSliderMinimal.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false
        });

    }


    /*====================================================*/
    /* Subscribe Form                                     */
    /*====================================================*/
    if (subscribeForm.length) {

        subscribeForm.ajaxChimp();

    }

    /*====================================================*/
    /* Contact Form                                       */
    /*====================================================*/
    if (form.length) {

        $(form).on('submit', function (event) {
            event.preventDefault();
            var formData = $(form).serialize();


            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function (response) {

                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('valid');


                    $(formMessages).text(response);


                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                })
                .fail(function (data) {

                    $(formMessages).removeClass('valid');
                    $(formMessages).addClass('error');


                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });

        });
        
    }

}); // END DOM READY