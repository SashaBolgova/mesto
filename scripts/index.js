const popupProfileElement = document.querySelector('#popup-profile');
const popupProfileCloseButtonElement = popupProfileElement.querySelector('.popup__toggle');
const popupProfileOpenButtonElement = document.querySelector('.profile__edit');
const formProfileElement = popupProfileElement.querySelector('[name="popup__form"]');
const nameInput = popupProfileElement.querySelector('.popup__input_type_name');
const jobInput = popupProfileElement.querySelector('.popup__input_type_profession');
const nameElement = document.querySelector('.profile__name');
const professionElement = document.querySelector('.profile__profession');

const popupCardElement = document.querySelector('#popup-card');
const popupCardCloseButtonElement = popupCardElement.querySelector('.popup__toggle');
const popupCardOpenButtonElement = document.querySelector('.profile__add-card');
const formCardElement = popupCardElement.querySelector('[name="popup-card__form"]');
const placeInput = popupCardElement.querySelector('.popup__input_type_place');
const imageInput = popupCardElement.querySelector('.popup__input_type_image');
const containerElement = document.querySelector('.elements');

const cardTemplate = document.querySelector('#card').content.querySelector('.element');

const popupImageElement = document.querySelector('#popup-image');
const popupImageCloseButton = popupImageElement.querySelector('.popup__toggle');
const imageTitleElement = popupImageElement.querySelector('.popup__image-title');
const imageElement = popupImageElement.querySelector('.popup__image-large');


function createElement(item) {
    const card = cardTemplate.cloneNode(true);
    const cardTitle = card.querySelector('.element__text');
    const cardImage = card.querySelector('.element__image');
    const likeButton = card.querySelector('.element__button-like');
    const deleteButton = card.querySelector('.element__button-delete');

    likeButton.addEventListener('click', handleLikeButton);
    deleteButton.addEventListener('click', handleDeleteButton);

    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;

    cardImage.addEventListener('click', function () {
        openPopup(popupImageElement);
        imageElement.src = cardImage.src;
        imageElement.alt = cardTitle.textContent;
        imageTitleElement.textContent = cardTitle.textContent;
    });

    return card;
}

function closePopup (element) {
    element.classList.remove('popup_opened'); 
}

popupImageCloseButton.addEventListener('click', function () {
    closePopup(popupImageElement);
});

const handleLikeButton = (evt) => {
    evt.target.classList.toggle('element__button-like_active');
}

const handleDeleteButton = (evt) => {
    evt.target.closest('.element').remove();
}

initialCards.forEach(function (item) {
    const element = createElement(item);
    containerElement.append(element);
})

function openPopup(element) {
    element.classList.add('popup_opened');
}

popupCardOpenButtonElement.addEventListener('click', function () {
    openPopup(popupCardElement);
    formCardElement.reset(); 
});
popupCardCloseButtonElement.addEventListener('click', function () {
    closePopup(popupCardElement);
});

function formCardSubmitHandler(evt) {
    evt.preventDefault();

    const cardElement =
    {
        name: placeInput.value,
        link: imageInput.value
    }

    const element = createElement(cardElement);
    containerElement.prepend(element);

    closePopup(popupCardElement);
}

formCardElement.addEventListener('submit', formCardSubmitHandler);

popupProfileOpenButtonElement.addEventListener('click', function () {
    openPopup(popupProfileElement);
    nameInput.value = nameElement.textContent;
    jobInput.value = professionElement.textContent;
});
popupProfileCloseButtonElement.addEventListener('click', function () {
    closePopup(popupProfileElement);
});

function formProfileSubmitHandler(evt) {
    evt.preventDefault();

    nameElement.textContent = nameInput.value;
    professionElement.textContent = jobInput.value;

    closePopup(popupProfileElement);
}

formProfileElement.addEventListener('submit', formProfileSubmitHandler);





