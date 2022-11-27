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

const popupElement = document.querySelector('#popup-profile');
const popupCloseButtonElement = popupElement.querySelector('.popup__toggle');
const popupOpenButtonElement = document.querySelector('.profile__edit');
const formElement = popupElement.querySelector('[name="popup__form"]');
const nameInput = popupElement.querySelector('.popup__input_type_name');
const jobInput = popupElement.querySelector('.popup__input_type_profession');
const nameElement = document.querySelector('.profile__name');
const professionElement = document.querySelector('.profile__profession');

const popupcardElement = document.querySelector('#popup-card');
const popupcardCloseButtonElement = popupcardElement.querySelector('.popup__toggle');
const popupcardOpenButtonElement = document.querySelector('.profile__add-card');
const formcardElement = popupcardElement.querySelector('[name="popup-card__form"]');
const placeInput = popupcardElement.querySelector('.popup__input_type_place');
const imageInput = popupcardElement.querySelector('.popup__input_type_image');
const containerElement = document.querySelector('.elements');

const cardTemplate = document.querySelector('#card').content;

function createElement(item) {
    const card = cardTemplate.cloneNode(true);
    const cardTitle = card.querySelector('.element__text');
    const cardImage = card.querySelector('.element__image');
    const likeButton = card.querySelector('.element__button-like');
    const deleteButton = card.querySelector('.element__button-delete');
    const popupimageElement = card.querySelector('#popup-image');
    const popupimageCloseButton = card.querySelector('.popup__toggle');
    const imagetitleElement = card.querySelector('.popup__image-title');
    const imageElement = card.querySelector('.popup__image-opened');
    
    likeButton.addEventListener('click', handleLikeButton);
    deleteButton.addEventListener('click', handleDeleteButton);

    const openPopupimage = function () {
        popupimageElement.classList.add('popup_opened');
    }
    const closePopupimage = function () {
        popupimageElement.classList.remove('popup_opened');
    }

    cardImage.addEventListener('click', openPopupimage);
    popupimageCloseButton.addEventListener('click', closePopupimage);

    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    imagetitleElement.textContent = item.name;
    imageElement.src = item.link;

    return card;
}

const handleLikeButton = (evt) => {
evt.target.classList.toggle('element__button-like_active');
}

const handleDeleteButton = (evt) => {
evt.target.closest('.element').remove();
}

initialCards.forEach(function(item) {
    const element = createElement(item);
    containerElement.append(element);
})

const openPopupcard = function () {
    popupcardElement.classList.add('popup_opened');
}

const closePopupcard = function () {
    popupcardElement.classList.remove('popup_opened');
}

popupcardOpenButtonElement.addEventListener('click', openPopupcard);
popupcardCloseButtonElement.addEventListener('click', closePopupcard);

function formcardSubmitHandler(evt) {
    evt.preventDefault();

    const cardElement = 
        {
            name: placeInput.value,
            link: imageInput.value
        }
    
    const element = createElement(cardElement);
    containerElement.prepend(element);

    closePopupcard();
}

formcardElement.addEventListener('submit', formcardSubmitHandler);

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    nameInput.value = nameElement.textContent;
    jobInput.value = professionElement.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');  
}

popupOpenButtonElement.addEventListener('click', openPopup);

popupCloseButtonElement.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameElement.textContent = nameInput.value;
    professionElement.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);




