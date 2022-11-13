/* При нажатии "кнопки редактирования" форма открывается, при нажатии "Х" - закрывается */

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__toggle');
const popupOpenButtonElement = document.querySelector('.profile__edit');
const formElement = popupElement.querySelector('.popup__container')
const nameInput = popupElement.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');
const nameElement = document.querySelector('.profile__name');
const professionElement = document.querySelector('.profile__profession');



const openPopup = function () {
    popupElement.classList.add('popup_opened');
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');  
}

popupOpenButtonElement.addEventListener('click', openPopup);

popupCloseButtonElement.addEventListener('click', closePopup);

/* При вводе данных в поля, изменения отображаются в профиле */


function formSubmitHandler(evt) {
    evt.preventDefault();

    nameElement.textContent = nameInput.value;
    professionElement.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);




