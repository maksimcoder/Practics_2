import modal from './modules/modal';
import sliders from './modules/slider';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // const modalTimerId = setTimeout(() => showModalByTime('.popup-consultation', modalTimerId), 4000);

    modal();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');

});