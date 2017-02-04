import helpers from './helper';

var slides,
    currentSlide = 0,
    slideInterval,
    duration = 3000,
    pauseButton;
var playing = true

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function initSlider(config) {
    currentSlide = 0;
    playing = config.autoplay;
    duration = config.duration || duration;
    slides = document.querySelectorAll(config.slides); // '#slides .slide'
    var next = document.getElementsByClassName(config.nextButton)[0];
    var previous = document.getElementsByClassName(config.previousButton)[0];
    pauseButton = document.getElementsByClassName(config.pauseButton)[0];

    next.onclick = function() {
        pauseSlideshow();
        nextSlide();
    };
    previous.onclick = function() {
        pauseSlideshow();
        previousSlide();
    };
    pauseButton.onclick = function() {
        if (playing) {
            pauseSlideshow();
        } else {
            playSlideshow();
        }
    };
    helpers.addClass(slides[currentSlide], "showing");
    slideInterval = setInterval(nextSlide, config.duration);
    if (!playing) {
        pauseSlideshow();
    }
}

function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide, duration);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    helpers.removeClass(slides[currentSlide], "showing");
    currentSlide = (n + slides.length) % slides.length;
    helpers.addClass(slides[currentSlide], "showing");
}

var carousel = {
    initSlider: initSlider
}
export default carousel
