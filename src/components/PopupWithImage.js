import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupImageSelector) {
        super(popupImageSelector);
        this._popupImagePicture = this._popup.querySelector('.popup__image-large');
        this._popupImageTitle = this._popup.querySelector('.popup__image-title');
    }

    open({name, link}) {
        this._popupImagePicture.src = link;
        this._popupImagePicture.alt = name;
        this._popupImageTitle.textContent = name;
        super.open();
    }
}