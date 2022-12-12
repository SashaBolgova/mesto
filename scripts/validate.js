const showErrorValidity = (input, config) => {
    const error = document.querySelector(`.${input.id}-error`);
    if (input.validity.valid) {
        error.textContent = '';
        error.classList.remove(config.errorClass);
    } else {
        error.textContent = input.validationMessage;
        error.classList.add(config.errorClass);
    }
}

const showInputError = (input, config) => {
    if (input.validity.valid) {
        input.classList.remove(config.inputErrorClass);
    } else {
        input.classList.add(config.inputErrorClass);
    }
}

const toggleButton = (inputs, button, config) => {
    const isformValid = inputs.every(input => {
        return input.validity.valid;
    })
    if (isformValid) {
        button.classList.remove(config.inactiveButtonClass);
    } else {
        button.classList.add(config.inactiveButtonClass);
    }
}

const activeButton = (inputs, button) => {
    const isformValid = inputs.every(input => {
        return input.validity.valid;
    })
    if (isformValid) {
        button.disabled = '';
    } else {
        button.disabled = 'disabled';
    }
}

const enableValidation = (config) => {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        const inputs = [...form.querySelectorAll(config.inputSelector)];
        const button = form.querySelector(config.submitButtonSelector);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                showErrorValidity(input, config);
                toggleButton(inputs, button, config);
                showInputError(input, config);
                activeButton(inputs, button, config);
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
