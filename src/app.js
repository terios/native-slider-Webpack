'use strict';

// load dataset
import searchData from './data'
import './style.scss'
// carousel component
import carousel from './components/carousel';
// card component
import propertyCards from './components/propertyCards';

// carousel configuration
var carouselConfig = {
    slides: '#slides .slide',
    pause: 'pause',
    autoplay: false,
    duration: 3000,
    nextButton: 'next',
    previousButton: 'previous',
    pauseButton: 'pause'
}
propertyCards.getPropertyCards(searchData.data);
carousel.initSlider(carouselConfig);
