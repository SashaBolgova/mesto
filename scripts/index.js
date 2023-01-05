import { Card } from "./Cards.js";
import { FormValidator } from "./FormValidator.js";

const enableValidationSelectors = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

const popupProfileElement = document.querySelector('#popup-profile');
const popupProfileCloseButtonElement = popupProfileElement.querySelector('.popup__toggle');
const popupProfileOpenButtonElement = document.querySelector('.profile__edit');
const formProfileElement = popupProfileElement.querySelector('[name="popup__form"]');
const nameInput = popupProfileElement.querySelector('.popup__input_type_name');
const jobInput = popupProfileElement.querySelector('.popup__input_type_profession');
const nameElement = document.querySelector('.profile__name');
const professionElement = document.querySelector('.profile__profession');

const popupCardElement = document.querySelector('#popup-card');
const popupCardCloseButtonElement = popupCardElement.querySelector('.popup__toggle');
const popupCardOpenButtonElement = document.querySelector('.profile__add-card');
const formCardElement = popupCardElement.querySelector('[name="popup-card__form"]');
const placeInput = popupCardElement.querySelector('.popup__input_type_place');
const imageInput = popupCardElement.querySelector('.popup__input_type_image');
const containerElement = document.querySelector('.elements');
const popupCardButtonElement = popupCardElement.querySelector('.popup__button');

const popupImageElement = document.querySelector('#popup-image');
const popupImageCloseButton = popupImageElement.querySelector('.popup__toggle');


function closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleKeyUp);
};

const handleKeyUp = (evt) => {
    if (evt.key === 'Escape') {
        const openPopupModal = document.querySelector('.popup_opened');
        closePopup(openPopupModal);
    }
};

const closePopupByClickOutside = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.currentTarget);
    }
};

popupImageCloseButton.addEventListener('click', function () {
    closePopup(popupImageElement);
});

popupImageElement.addEventListener('click', closePopupByClickOutside);

export function openPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keyup', handleKeyUp);
};

popupCardOpenButtonElement.addEventListener('click', function () {
    openPopup(popupCardElement);
    formCardElement.reset();
    popupCardButtonElement.classList.add('popup__button_disabled');
    button.disabled = 'disabled';
});

popupCardCloseButtonElement.addEventListener('click', function () {
    closePopup(popupCardElement);
});

popupCardElement.addEventListener('click', closePopupByClickOutside);

function createElement(item) {
    const card = new Card(item, '.template-element');
    const cardElement = card.generateCard();

    return cardElement;
};

function formCardSubmitHandler(evt) {
    evt.preventDefault();

    const cardElement =
    {
        name: placeInput.value,
        link: imageInput.value
    };

    const element = createElement(cardElement);
    containerElement.prepend(element);

    closePopup(popupCardElement);
};

formCardElement.addEventListener('submit', formCardSubmitHandler);

popupProfileOpenButtonElement.addEventListener('click', function () {
    openPopup(popupProfileElement);
    nameInput.value = nameElement.textContent;
    jobInput.value = professionElement.textContent;
});
popupProfileCloseButtonElement.addEventListener('click', function () {
    closePopup(popupProfileElement);
});

popupProfileElement.addEventListener('click', closePopupByClickOutside);

function formProfileSubmitHandler(evt) {
    evt.preventDefault();

    nameElement.textContent = nameInput.value;
    professionElement.textContent = jobInput.value;

    closePopup(popupProfileElement);
};

formProfileElement.addEventListener('submit', formProfileSubmitHandler);

const validatorProfile = new FormValidator(enableValidationSelectors, formProfileElement);
validatorProfile.enableValidation();

const validatorCard = new FormValidator(enableValidationSelectors, formCardElement);
validatorCard.enableValidation();
