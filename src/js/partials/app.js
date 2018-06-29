

$( document ).ready(function() {



    // Slider

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

// Audio

var audioPlayer = document.querySelector('.green-audio-player');
var playPause = audioPlayer.querySelector('#playPause');
var playpauseBtn = audioPlayer.querySelector('.play-pause-btn');
var loading = audioPlayer.querySelector('.loading');
var progress = audioPlayer.querySelector('.progress');
var sliders = audioPlayer.querySelectorAll('.slider');
var volumeBtn = audioPlayer.querySelector('.volume-btn');
var volumeControls = audioPlayer.querySelector('.volume-controls');
var volumeProgress = volumeControls.querySelector('.slider .progress');
var player = audioPlayer.querySelector('audio');
var currentTime = audioPlayer.querySelector('.current-time');
var totalTime = audioPlayer.querySelector('.total-time');
var speaker = audioPlayer.querySelector('#speaker');

var draggableClasses = ['pin'];
var currentlyDragged = null;

window.addEventListener('mousedown', function (event) {

    if (!isDraggable(event.target)) return false;

    currentlyDragged = event.target;
    var handleMethod = currentlyDragged.dataset.method;

    this.addEventListener('mousemove', window[handleMethod], false);

    window.addEventListener('mouseup', function () {
        currentlyDragged = false;
        window.removeEventListener('mousemove', window[handleMethod], false);
    }, false);
});

playpauseBtn.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', updateProgress);
player.addEventListener('volumechange', updateVolume);
player.addEventListener('loadedmetadata', function () {
    totalTime.textContent = formatTime(player.duration);
});
player.addEventListener('canplay', makePlay);
player.addEventListener('ended', function () {
    playPause.attributes.d.value = "M18 12L0 24V0";
    player.currentTime = 0;
});

volumeBtn.addEventListener('click', function () {
    volumeBtn.classList.toggle('open');
    volumeControls.classList.toggle('hidden');
});

window.addEventListener('resize', directionAware);

sliders.forEach(function (slider) {
    var pin = slider.querySelector('.pin');
    slider.addEventListener('click', window[pin.dataset.method]);
});

directionAware();

function isDraggable(el) {
    var canDrag = false;
    var classes = Array.from(el.classList);
    draggableClasses.forEach(function (draggable) {
        if (classes.indexOf(draggable) !== -1) canDrag = true;
    });
    return canDrag;
}

function inRange(event) {
    var rangeBox = getRangeBox(event);
    var rect = rangeBox.getBoundingClientRect();
    var direction = rangeBox.dataset.direction;
    if (direction == 'horizontal') {
        var min = rangeBox.offsetLeft;
        var max = min + rangeBox.offsetWidth;
        if (event.clientX < min || event.clientX > max) return false;
    } else {
        var min = rect.top;
        var max = min + rangeBox.offsetHeight;
        if (event.clientY < min || event.clientY > max) return false;
    }
    return true;
}

function updateProgress() {
    var current = player.currentTime;
    var percent = current / player.duration * 100;
    progress.style.width = percent + '%';

    currentTime.textContent = formatTime(current);
}

function updateVolume() {
    volumeProgress.style.height = player.volume * 100 + '%';
    if (player.volume >= 0.5) {
        speaker.attributes.d.value = 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z';
    } else if (player.volume < 0.5 && player.volume > 0.05) {
        speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z';
    } else if (player.volume <= 0.05) {
        speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667';
    }
}

function getRangeBox(event) {
    var rangeBox = event.target;
    var el = currentlyDragged;
    if (event.type == 'click' && isDraggable(event.target)) {
        rangeBox = event.target.parentElement.parentElement;
    }
    if (event.type == 'mousemove') {
        rangeBox = el.parentElement.parentElement;
    }
    return rangeBox;
}

function getCoefficient(event) {
    var slider = getRangeBox(event);
    var rect = slider.getBoundingClientRect();
    var K = 0;
    if (slider.dataset.direction == 'horizontal') {

        var offsetX = event.clientX - slider.offsetLeft;
        var width = slider.clientWidth;
        K = offsetX / width;
    } else if (slider.dataset.direction == 'vertical') {

        var height = slider.clientHeight;
        var offsetY = event.clientY - rect.top;
        K = 1 - offsetY / height;
    }
    return K;
}

function rewind(event) {
    if (inRange(event)) {
        player.currentTime = player.duration * getCoefficient(event);
    }
}

function changeVolume(event) {
    if (inRange(event)) {
        player.volume = getCoefficient(event);
    }
}

function formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ':' + (sec < 10 ? '0' + sec : sec);
}

function togglePlay() {
    if (player.paused) {
        playPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z";
        player.play();
    } else {
        playPause.attributes.d.value = "M18 12L0 24V0";
        player.pause();
    }
}

function makePlay() {
    playpauseBtn.style.display = 'block';
    loading.style.display = 'none';
}

function directionAware() {
    if (window.innerHeight < 250) {
        volumeControls.style.bottom = '-54px';
        volumeControls.style.left = '54px';
    } else if (audioPlayer.offsetTop < 154) {
        volumeControls.style.bottom = '-164px';
        volumeControls.style.left = '-3px';
    } else {
        volumeControls.style.bottom = '52px';
        volumeControls.style.left = '-3px';
    }
}