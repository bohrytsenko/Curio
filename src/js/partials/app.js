$( document ).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            // when window width is <= 768px
            768: {
                slidesPerView: 2,
                slidesPerColumn: 3
            }
        }
    });

    // Login

    $('.login a').on('click', function(){
        $('.login_block').toggleClass('login_block__active');
        $('.over').toggleClass('over__active');
    });

    $('.over').on('click', function(){
        $('.login_block').removeClass('login_block__active');
        $('.over').removeClass('over__active');
    });

    $('.login_block__close').on('click', function(){
        $('.login_block').removeClass('login_block__active');
        $('.over').removeClass('over__active');
    });

    // Newsletter

    setTimeout(function(){
       $('.newsletter_block').addClass('newsletter_block__active');
        $('.over').toggleClass('over__active');
    }, 3000);

    $('.over').on('click', function(){
        $('.newsletter_block').removeClass('newsletter_block__active');
        $('.over').removeClass('over__active');
    });

    $('.newsletter_block__close').on('click', function(){
        $('.newsletter_block').removeClass('newsletter_block__active');
        $('.over').removeClass('over__active');
    });


});

window.dailyui = {
    init: function() {
        function checkForInput(element) {
            var inputParent = $(element).parent();

            if ($(element).val().length > 0) {
                inputParent.addClass("input-filled");
            } else {
                inputParent.removeClass("input-filled");
            }
        }

        $(".input-field").on("change keyup", function() {
            checkForInput(this);
        });

        $(".password-field").each(function(index, input) {
            var $input = $(input);
            $(".hidepassword")
                .click(function() {
                    var change = "";
                    if ($(this).hasClass("hidepassword")) {
                        $(this).removeClass("hidepassword");
                        $(this).addClass("showpassword");
                        change = "text";
                    } else {
                        $(this).removeClass("showpassword");
                        $(this).addClass("hidepassword");
                        change = "password";
                    }
                    var rep = $("<input type=" + change + " />")
                        .attr("id", $input.attr("id"))
                        .attr("name", $input.attr("name"))
                        .attr("class", $input.attr("class"))
                        .attr("maxlength", $input.attr("maxlength"))
                        .val($input.val())
                        .insertBefore($input);
                    $input.remove();
                    $input = rep;
                })
                .insertAfter($input);
        });

        $("#card-no").inputmask("9999 9999 9999 9999", { placeholder: "" });
        $("#card-expire").inputmask("99 / 99", { placeholder: "" });
    }
};

jQuery(document).ready(function() {
    $ = jQuery;
    dailyui.init();
});


var controller = new ScrollMagic.Controller();

// Header
if ($( window ).width() > 767) {

var t0 = new TimelineLite();
t0.staggerFromTo('.header_top', 2, { opacity: 0, y: -50}, { opacity: 1, y: 0}, 0.1);

var t1 = new TimelineLite();
t1.staggerFromTo('.home_start .container div', 2, { opacity: 0, x: -150}, { opacity: 1, x: 0}, 0.1);


var t3 = new TimelineLite();
t3.staggerFromTo('.home_phrase .container', 2, { opacity: 0, y: -50}, { opacity: 1, y: 0}, 0.1);

var t4 = new TimelineLite();
t4.staggerFromTo('.about_info .container', 2, { opacity: 0, y: -50}, { opacity: 1, y: 0}, 0.1);

var t5 = new TimelineLite();
t5.staggerFromTo('.about_advisors .container', 2, { opacity: 0, y: -50}, { opacity: 1, y: 0}, 0.1);


// Header bg

var tween1 = TweenMax.staggerFromTo(".home_start", 2, {backgroundPosition:'right 0'}, {backgroundPosition: 'right -200px'}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".home_publications", duration: 2000,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween1)
    .addTo(controller);

// Home phrase

var tween2 = TweenMax.staggerFromTo(".home_start .container", 2, {y: 0}, {y: 50}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".home_phrase", duration: 2000,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween2)
    .addTo(controller);

// Header publications

var tween3 = TweenMax.staggerFromTo(".home_p_item:nth-child(odd) .home_p_bl", 2, {opacity: 0.5}, {opacity: 1}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".home_publications", duration: 1000,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween3)
    .addTo(controller);

var tween4 = TweenMax.staggerFromTo(".home_p_item:nth-child(even) .home_p_bl", 2, {opacity: 0.5}, {opacity: 1}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".home_publications", duration: 1000,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween4)
    .addTo(controller);

// Home time

var tween5 = TweenMax.staggerFromTo(".home_time .container", 2, {opacity: 0.5, y: -170}, {opacity: 1, y: 0}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".home_time", duration: 1000,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween5)
    .addTo(controller);

// Home about

var tween6 = TweenMax.staggerFromTo(".home_a_wrap__item:first-child", 2, {opacity: 0.5, x: -170}, {opacity: 1, x: 0}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".home_about", duration: 1000,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween6)
    .addTo(controller);

var tween7 = TweenMax.staggerFromTo(".home_a_wrap__item:nth-child(2) li", 2, {opacity: 0.5, x: 50}, {opacity: 1, x: 0}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".home_about", duration: 700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween7)
    .addTo(controller);

var tween8 = TweenMax.staggerFromTo(".home_about__btn", 2, {opacity: 0.5, y: -170}, {opacity: 1, y: 0}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".home_about", duration: 1000,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween8)
    .addTo(controller);

var tween9 = TweenMax.staggerFromTo(".home_about__text", 2, {opacity: 0.5, y: -170}, {opacity: 1, y: 0}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".home_about", duration: 1000,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween9)
    .addTo(controller);

// About narrators

var tween10 = TweenMax.staggerFromTo(".narrators_item", 2, {opacity: 0.5}, {opacity: 1}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".about_narrators", duration: 1300,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween10)
    .addTo(controller);

}
// Preloader

(function() {

    'use strict';

    var overlay = document.querySelector('.overlay'),
        loader = document.querySelector('.overlay-loader'),
        overlayTL = new TimelineMax(),
        loaderTL = new TimelineMax();

    var animateOut_2 = function() {
        overlayTL.to( overlay, .6, { top: '100%', ease: Power4.easeInOut, delay: .25 } );
        loaderTL.to( loader, .5, { y: '40', opacity: 0 } );
    };

    var animateIn = function() {
        overlayTL.fromTo( overlay, .6, { top: '100%', bottom: 0 }, { top: 0, ease: Power4.easeInOut } );
        loaderTL.fromTo( loader, .5, { y: '40', opacity: 0, delay: .30 }, { y: 0, opacity: 1, delay: .6, ease: Power2.easeOut } );
    };

    animateOut_2();


})();

