const hideInputError = (input, config, error) => {
    error.textContent = '';
    error.classList.remove(config.errorClass);
    input.classList.remove(config.inputErrorClass);
}

const showInputError = (input, config, error) => {
    error.textContent = input.validationMessage;
    error.classList.add(config.errorClass);
    input.classList.add(config.inputErrorClass);
}

const disableButton = (inputs, button, config) => {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = 'disabled';
}

const enableButton = (inputs, button, config) => {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = '';
}

const chekInputValidity = (input, config) => {
    const error = document.querySelector(`.${input.id}-error`);
    if (input.validity.valid) {
        hideInputError(input, config, error);
    } else {
        showInputError(input, config, error)
    }
}

const toggleButton = (inputs, button, config) => {
    const isformValid = inputs.every(input => input.validity.valid);
    if (isformValid) {
        enableButton(inputs, button, config);
    } else {
        disableButton(inputs, button, config);
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

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});  
