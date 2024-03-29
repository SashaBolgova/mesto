export default class FormValidator {
    constructor(data, formElement) {
        this._formElement = formElement;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._inputList = Array.from(formElement.querySelectorAll(data.inputSelector));
        this._buttonElement = formElement.querySelector(data.submitButtonSelector);
    }
    _hideInputError = (inputElement, errorElement) => {
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }

    _showInputError = (inputElement, errorElement) => {
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass);
    }

    disableButton = () => {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    }

    _enableButton = () => {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false;
    }

    _checkInputValidity(inputElement) {
        const errorElement = document.querySelector(`.${inputElement.id}-error`);

        if (inputElement.validity.valid) {
            this._hideInputError(inputElement, errorElement);
        } else {
            this._showInputError(inputElement, errorElement)
        }
    }

    _toggleButton = () => {
        this._isFormValid = this._inputList.every(inputElement => inputElement.validity.valid);
        if (this._isFormValid) {
            this._enableButton();
        } else {
            this.disableButton();
        };
    };

    _setEventListeners() {

        this._toggleButton();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButton();
            });
        });
    };

    enableValidation() {
            this._setEventListeners();
    }

}
