const chekInputValidity = (input, config) => {
    const error = document.querySelector(`.${input.id}-error`);
    if (input.validity.valid) {
        error.textContent = '';
        error.classList.remove(config.errorClass);
        input.classList.remove(config.inputErrorClass);
    } else {
        error.textContent = input.validationMessage;
        error.classList.add(config.errorClass);
        input.classList.add(config.inputErrorClass);
    }
}

const toggleButton = (inputs, button, config) => {
    const isformValid = inputs.every(input => input.validity.valid);
    if(isformValid) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = '';
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = 'disabled';
    }
}

const enableValidation = (config) => {
    const forms = [...document.querySelectorAll(config.formSelector)];
    forms.forEach(form => {
        const inputs = [...form.querySelectorAll(config.inputSelector)];
        const button = form.querySelector(config.submitButtonSelector);
    
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        inputs.forEach(input => {
            input.addEventListener('input', () => {
            chekInputValidity(input, config);
            toggleButton(inputs, button, config);
            })
        })
    })
}
enableValidation ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 
  