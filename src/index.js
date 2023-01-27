import './pages/index.css'; 
import { initialCards } from "../src/utils/constants.js";
import Section from "../src/components/Section.js";
import Card from "../src/components/Card.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import FormValidator from "../src/components/FormValidator.js";
import { validationConfig } from "../src/utils/constants.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import UserInfo from "../src/components/UserInfo.js";
import {
    popupProfileOpenButtonElement,
    formProfileElement,
    nameInput,
    jobInput,
    popupCardOpenButtonElement,
    formCardElement,
    placeInput,
    imageInput,
    containerSelector,
    popupCardSelector,
    nameSelector,
    popupProfileSelector,
    popupImageSelector,
    professionSelector
} from "../src/utils/constants.js"

const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();
function openImage(cardData) {
    popupWithImage.open(cardData);
}

const createCard = (cardData) => {
    const card = new Card(cardData, '.template-element', {
        handleCardClick: () => {
         openImage(cardData);
        }
    }
    );
    return card.generateCard();
}

const cardsList = new Section({
    items: initialCards,
    renderer: (cardData) => {
        cardsList.addItem(createCard(cardData));
    }
}, containerSelector);

cardsList.renderItems();

const validatorCard = new FormValidator(validationConfig, formCardElement);
validatorCard.enableValidation();
validatorCard.disableButton();
const validatorProfile = new FormValidator(validationConfig, formProfileElement);
validatorProfile.enableValidation();

const popupCardAdd = new PopupWithForm(popupCardSelector, {
    handleFormSubmit: () => {
        const cardElement =
        {
            name: placeInput.value,
            link: imageInput.value
        };

        cardsList.addItem(createCard(cardElement));

        popupCardAdd.close();
    }
});

popupCardAdd.setEventListeners();

popupCardOpenButtonElement.addEventListener('click', function () {
    popupCardAdd.open();
})

const userInfo = new UserInfo({ nameSelector, professionSelector });
const popupProfileEdit = new PopupWithForm(popupProfileSelector, {
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
        popupProfileEdit.close();
    }
});

popupProfileEdit.setEventListeners();

popupProfileOpenButtonElement.addEventListener('click', function () {
    popupProfileEdit.open();
    const profileData = userInfo.getUserInfo();
    nameInput.value = profileData.name;
    jobInput.value = profileData.profession;
})
