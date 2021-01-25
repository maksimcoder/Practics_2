import modal from './modules/modal';
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // const modalTimerId = setTimeout(() => showModalByTime('.popup-consultation', modalTimerId), 4000);

    modal();
    slider('.main-slider-item', '.main-slider');

});