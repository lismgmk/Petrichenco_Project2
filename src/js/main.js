import modals from './modules/modals';
import sliders from './modules/sliders';

import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import formDz from './modules/formDz';
import changeModalState from './modules/changeModalState';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordeon from './modules/accordeon';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';
import dropLittle from './modules/dropLittle';


window.addEventListener('DOMContentLoaded', ()=>{
    'use strict';
    let modalState = {};
   
    modals();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    forms(modalState);
    mask('[name = "phone"]');
    checkTextInputs('[name = "name"]');
    checkTextInputs('[name = "message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    changeModalState(modalState);
    formDz(modalState);
    filter();
    pictureSize('.sizes-block');
    accordeon('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup'); 
    drop();
    dropLittle();
})