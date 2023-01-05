const initialCards = [
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
import { openPopup } from "./index.js";
const popupImageElement = document.querySelector('#popup-image');
const popupImageTitle = popupImageElement.querySelector('.popup__image-title');
const popupImagePicture = popupImageElement.querySelector('.popup__image-large');

export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__text').textContent = this._name;
        this._element.querySelector('.element__image').alt = this._link;
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__button-like').addEventListener('click', () => {
            this._handleLikeButton();
        });
        this._element.querySelector('.element__button-delete').addEventListener('click', () => {
            this._handleDeleteButton();
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleOpenPopup();
        })
    }

    _handleLikeButton() {
        this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active');
    }

    _handleDeleteButton() {
        this._element.querySelector('.element__button-delete').closest('.element').remove();
    }

    _handleOpenPopup() {
        openPopup(popupImageElement);
        popupImagePicture.src = this._link;
        popupImagePicture.alt = this._name;
        popupImageTitle.textContent = this._name;
    }
}

initialCards.forEach(createElement);

function createElement(item) {
    const card = new Card(item, '.template-element');
    const cardElement = card.generateCard();

    document.querySelector('.elements').append(cardElement);
}
