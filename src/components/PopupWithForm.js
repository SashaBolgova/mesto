import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._submitButton = this._form.querySelector('.popup__button');
        this._buttonText = this._submitButton.textContent;
    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    showLoadingText(isLoading) {
        if(isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = this._buttonText;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submit.bind(this));
    }
    
    _submit(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    }

    close() {
        super.close();
        this._form.reset();
    }
}