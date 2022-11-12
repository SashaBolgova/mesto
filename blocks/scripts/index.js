/* При нажатии "кнопки редактирования" форма открывается, при нажатии "Х" - закрывается */

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__toggle');
const popupOpenButtonElement = document.querySelector('.profile__edit');

const openPopup = function () {
    popupElement.classList.add('popup_opened');
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');  
}

popupOpenButtonElement.addEventListener('click', function () {
    popupElement.classList.add('popup_opened');
});

popupCloseButtonElement.addEventListener('click', function () {
    popupElement.classList.remove('popup_opened');
});

/* При вводе данных в поля, изменения отображаются в профиле */

const formElement = popupElement.querySelector('.popup__container')
const nameInput = popupElement.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__profession');

function formSubmitHandler(evt) {
    evt.preventDefault();

    console.log(nameInput.value);
    console.log(jobInput.value);

    const nameElement = document.querySelector('.profile__name');
    const professionElement = document.querySelector('.profile__profession');

    nameElement.textContent = nameInput.value;
    professionElement.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

/* При нажатии "Сохранить" форма закрывается */

const popupSubmitButtonElement = popupElement.querySelector('.popup__submit');

const submitPopup = function () {
    popupElement.classList.remove('popup_opened');
}

popupSubmitButtonElement.addEventListener('click', function () {
    popupElement.classList.remove('popup_opened');
});



