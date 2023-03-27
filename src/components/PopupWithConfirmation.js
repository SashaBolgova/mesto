import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._formElement = this._popup.querySelector('.popup__form');
        this._submitButton = this._formElement.querySelector('.popup__button');
        this._loadingText = this._submitButton.textContent;
    }

    showLoadingText(text) {
        this._submitButton.value = text;
    }

    setConfirmPopup(callback) {
        this._setConfirmPopup = callback
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._setConfirmPopup();
        })
    }

    
}