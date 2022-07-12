import Popup from './components/Popup.js';

const popupOpenBtn = document.querySelector('.change-link_more-detailed');
const popup = new Popup('.popup');

popupOpenBtn.addEventListener('click', () => { popup.open() });

popup.setEventListeners();