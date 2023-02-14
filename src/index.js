import './pages/index.css'; 
import { api } from "./components/Api.js";
import Section from "../src/components/Section.js";
import Card from "../src/components/Card.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import FormValidator from "../src/components/FormValidator.js";
import { validationConfig } from "../src/utils/constants.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import UserInfo from "../src/components/UserInfo.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";
import {
    popupProfileOpenButtonElement,
    formProfileElement,
    nameInput,
    jobInput,
    popupCardOpenButtonElement,
    formCardElement,
    containerSelector,
    popupCardSelector,
    nameSelector,
    popupProfileSelector,
    popupImageSelector,
    professionSelector,
    formAvatarElement,
    popupAvatarSelector,
    avatarSelector,
    popupAvatarOpenButtonElement,
    popupDeleteSelector
} from "../src/utils/constants.js"

let userId = null;
Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userId = userData._id;
        userInfo.setUserInfo(userData);
        cardsList.renderItems(cards);
    })
    .catch((err) => {
        console.log(err);
    });

const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();
function openImage(cardData) {
    popupWithImage.open(cardData);
}

const deletePopup = new PopupWithConfirmation(popupDeleteSelector)
deletePopup.setEventListeners();


const createCard = (cardData) => {
    const card = new Card(cardData, '.template-element', userId, {
        handleCardClick: () => {
            openImage(cardData);
        },
        handleCardDelete: () => {
            deletePopup.open();
            deletePopup.setConfirmPopup(() => {
                deletePopup.showLoadingText('Удаление...');
                api.deleteCard(cardData._id)
                    .then(() => {
                        card.deleteCard();
                        deletePopup.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        deletePopup.showLoadingText('Удалить');
                    })
            })
        },
        handleCardLike: () => {
            if (!card.isLiked()) {
                api.addLike(cardData._id)
                    .then((data) => {
                        card.setLikes(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                api.deleteLike(cardData._id)
                    .then((data) => {
                        card.setLikes(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
    })
    return card.generateCard();
}

const cardsList = new Section({
    renderer: (cardData) => {
        cardsList.addItem(createCard(cardData));
    }
}, containerSelector);

const popupCardAdd = new PopupWithForm(popupCardSelector, (cardData) => {
    popupCardAdd.showLoadingText(true);
    api.addMyCard(cardData)
        .then((card) => {
            cardsList.addItem(createCard(card));
            popupCardAdd.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupCardAdd.showLoadingText(false);
        })
});

popupCardAdd.setEventListeners();

popupCardOpenButtonElement.addEventListener('click', function () {
    popupCardAdd.open();
});

const userInfo = new UserInfo({ nameSelector, professionSelector, avatarSelector });
const popupProfileEdit = new PopupWithForm(popupProfileSelector, (formData) => {
    popupProfileEdit.showLoadingText(true);
    api.changeUserInfo(formData)
        .then((data) => {
            userInfo.setUserInfo(data);
            popupProfileEdit.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupProfileEdit.showLoadingText(false);
        })
});

popupProfileEdit.setEventListeners();

popupProfileOpenButtonElement.addEventListener('click', function () {
    popupProfileEdit.open();
    const profileData = userInfo.getUserInfo();
    nameInput.value = profileData.name;
    jobInput.value = profileData.profession;
});

const popupAvatarEdit = new PopupWithForm(popupAvatarSelector, (avatarData) => {
    popupAvatarEdit.showLoadingText(true);
    api.changeAvatar(avatarData)
        .then((data) => {
            userInfo.setUserAvatar(data);
            popupAvatarEdit.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupAvatarEdit.showLoadingText(false);
        })
});

popupAvatarEdit.setEventListeners();

popupAvatarOpenButtonElement.addEventListener('click', function () {
    popupAvatarEdit.open();
});
const validatorCard = new FormValidator(validationConfig, formCardElement);
validatorCard.enableValidation();
validatorCard.disableButton();
const validatorProfile = new FormValidator(validationConfig, formProfileElement);
validatorProfile.enableValidation();
const validatorAvatar = new FormValidator(validationConfig, formAvatarElement);
validatorAvatar.enableValidation();
validatorAvatar.disableButton();