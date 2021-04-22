import modal from './modules/modal';
import sliders from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import addMoreStyles from './modules/addMoreStyles';
import calc from './modules/calc';
import filter from './modules/filtration';
import sizes from './modules/sizes';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    

    modal();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(); 
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]', true);
    addMoreStyles('.add-styles-btn', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter('.portfolio-menu li', '.portfolio-wrapper > div');
    sizes('.sizes-block');
    accordion();
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
});