import { initialCards } from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import { validationConfig } from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    popupProfileOpenButtonElement,
    formProfileElement,
    nameInput,
    jobInput,
    popupCardOpenButtonElement,
    formCardElement,
    placeInput,
    imageInput,
    containerElement,
    containerSelector,
    popupCardSelector,
    nameSelector,
    professionSelector,
    popupProfileSelector,
    popupImageSelector
} from "../utils/constants.js"

const createCard = (cardData) => {
    const card = new Card(cardData, '.template-element', {
        handleCardClick: () => {
            const popupWithImage = new PopupWithImage(popupImageSelector, cardData);
            popupWithImage.open();
            popupWithImage.setEventListeners();
        }
    });
    return card.generateCard();
}

const cardsList = new Section({
    items: initialCards,
    renderer: (cardData) => {
        cardsList.addItem(createCard(cardData));
    }
}, containerSelector);

cardsList.renderItems();

const popupCardAdd = new PopupWithForm(popupCardSelector, {
    handleFormSubmit: () => {
        const cardElement =
        {
            name: placeInput.value,
            link: imageInput.value
        };

        const element = createCard(cardElement);
        containerElement.prepend(element);
        popupCardAdd.close();
    }
});

popupCardAdd.setEventListeners();

popupCardOpenButtonElement.addEventListener('click', function () {
    popupCardAdd.open();
    const validatorCard = new FormValidator(validationConfig, formCardElement);
    validatorCard.enableValidation();
    validatorCard.disableButton();
})

const popupProfile = new UserInfo({ nameSelector, professionSelector });
const popupProfileEdit = new PopupWithForm(popupProfileSelector, {
    handleFormSubmit: () => {
        popupProfile.setUserInfo();
        popupProfileEdit.close();
    }
});

popupProfileEdit.setEventListeners();

popupProfileOpenButtonElement.addEventListener('click', function () {
    popupProfileEdit.open();
    const profileData = popupProfile.getUserInfo();
    nameInput.value = profileData.name;
    jobInput.value = profileData.job;
    const validatorProfile = new FormValidator(validationConfig, formProfileElement);
    validatorProfile.enableValidation();
})
