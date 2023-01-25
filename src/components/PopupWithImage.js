import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupImageSelector, cardData) {
        super(popupImageSelector);
        this._cardData = cardData;
        this._popupImagePicture = this._popup.querySelector('.popup__image-large');
        this._popupImageTitle = this._popup.querySelector('.popup__image-title');
    }

    open() {
        this._popupImagePicture.src = this._cardData.link;
        this._popupImagePicture.alt = this._cardData.name;
        this._popupImageTitle.textContent = this._cardData.name;
        super.open();
    }
}