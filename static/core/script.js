"use strict"; // Start of use strict
(function($) {
    function bootstrapAnimatedLayer() {

        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = "webkitAnimationEnd animationend";

            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data("animation");
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $myCarousel = $("#minimal-bootstrap-carousel"),
            $firstAnimatingElems = $myCarousel
            .find(".carousel-item:first")
            .find("[data-animation ^= 'animated']");

        //Initialize carousel
        $myCarousel.carousel();

        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);

        //Other slides to be animated on carousel slide event
        $myCarousel.on("slide.bs.carousel", function(e) {
            var $animatingElems = $(e.relatedTarget).find(
                "[data-animation ^= 'animated']"
            );
            doAnimations($animatingElems);
        });
    }

    bootstrapAnimatedLayer();


    function SmoothMenuScroll() {
        var anchor = $('.scrollToLink');
        if (anchor.length) {
            anchor.children('a').bind('click', function(event) {
                if ($(window).scrollTop() > 10) {
                    var headerH = '70';
                } else {
                    var headerH = '70';
                }
                var target = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
                }, 1200, 'easeInOutExpo');
                anchor.removeClass('current');
                target.parent().addClass('current');
                event.preventDefault();
            });
        }
    }
    SmoothMenuScroll();

    function OnePageMenuScroll() {
        var windowScroll = $(window).scrollTop();
        var menuWrapper = $('.one-page-scroll-menu');
        if (windowScroll >= 100) {
            menuWrapper.find('.scrollToLink').find('a').each(function() {
                // grabing section id dynamically
                var sections = $(this).attr('href');
                $(sections).each(function() {
                    // checking is scroll bar are in section                    
                    if ($(this).offset().top <= windowScroll + 500) {
                        // grabing the dynamic id of section
                        var Sectionid = $(sections).attr('id');
                        // removing current class from others
                        menuWrapper.find('li').removeClass('current');
                        // adding current class to related navigation
                        menuWrapper.find('a[href*=\\#' + Sectionid + ']').parent().addClass('current');
                        menuWrapper.attr('data-section-class', '');
                        menuWrapper.attr('data-section-class', Sectionid);
                    }
                });
            });
        } else {
            $('.one-page-scroll-menu li.current').removeClass('current');
            $('.one-page-scroll-menu li:first').addClass('current');
        }
    }


    $(window).on('scroll', function() {
        
        OnePageMenuScroll();
    });

})(jQuery);