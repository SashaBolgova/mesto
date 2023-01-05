export class FormValidator {
    constructor(data, formElement) {
        this._formElement = formElement;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        
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

    _disableButton = (inputList, buttonElement) => {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.disabled = 'disabled';
    }
    
    _enableButton = (inputList, buttonElement) => {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.disabled = '';
    }

    _chekInputValidity(inputElement) {
        const errorElement = document.querySelector(`.${inputElement.id}-error`);

        if (inputElement.validity.valid) {
            this._hideInputError(inputElement, errorElement);
        } else {
            this._showInputError(inputElement, errorElement)
        }
    }

    _toggleButton = (inputList, buttonElement) => {
        this._isformValid = inputList.every(inputElement => inputElement.validity.valid);
        if (this._isformValid) {
            this._enableButton(inputList, buttonElement);
        } else {
            this._disableButton(inputList, buttonElement);
        };
    };

    _setEventListener () {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
         this._toggleButton(inputList, buttonElement);
    
         inputList.forEach((inputElement) => {
             inputElement.addEventListener('input', () => {
                 this._chekInputValidity(inputElement);
                 this._toggleButton(inputList, buttonElement);
             });
         });
     };

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
          });
        this._setEventListener();

    }
}




