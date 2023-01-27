export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const validationConfig = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});
export const popupProfileOpenButtonElement = document.querySelector('.profile__edit');
export const formProfileElement = document.querySelector('[name="popup__form"]');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_profession');
export const popupCardOpenButtonElement = document.querySelector('.profile__add-card');
export const formCardElement = document.querySelector('[name="popup-card__form"]');
export const placeInput = document.querySelector('.popup__input_type_place');
export const imageInput = document.querySelector('.popup__input_type_image');
export const containerSelector = '.elements';
export const popupCardSelector = '#popup-card';
export const nameSelector = '.profile__name';
export const professionSelector = '.profile__profession';
export const popupProfileSelector = '#popup-profile';
export const popupImageSelector = '#popup-image';

