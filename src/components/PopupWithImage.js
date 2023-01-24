import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupImageSelector, card) {
        super(popupImageSelector);
        this._name = card.name;
        this._link = card.link;
        this._popupImagePicture = this._popup.querySelector('.popup__image-large');
        this._popupImageTitle = this._popup.querySelector('.popup__image-title');
    }

    open() {
        this._popupImagePicture.src = this._link;
        this._popupImagePicture.alt = this._name;
        this._popupImageTitle.textContent = this._name;
        super.open();
    }
}