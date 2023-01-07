import { openPopup } from "./index.js";

const popupImageElement = document.querySelector('#popup-image');
const popupImageTitle = popupImageElement.querySelector('.popup__image-title');
const popupImagePicture = popupImageElement.querySelector('.popup__image-large');



export function openImagePopup (name, link) {
    popupImagePicture.src = link;
    popupImagePicture.alt = name;
    popupImageTitle.textContent = name;

    openPopup(popupImageElement);
}