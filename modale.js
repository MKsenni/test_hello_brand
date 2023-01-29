'use strict'

let openPopup = document.querySelector('.down__button');
let closePopup = document.querySelector('.pop-up-close');
let popUp = document.querySelector('.pop-up');

openPopup.addEventListener('click', (e) => {
    e.preventDefault();
    active();
})

closePopup.addEventListener('click', (e) => {
    close();
})

const active = () => {
    if (openPopup) {
        popUp.style.display = 'block';
    } else {
        popUp.style.display = 'none';
    }
}

const close = () => {
    if (closePopup) {
        popUp.style.display = 'none';
    }
}

