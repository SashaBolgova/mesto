export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__toggle');
    }

    open() {
        this._popup.classList.add('popup_opened'); 
        document.addEventListener('keyup', this._handleEscClose.bind(this));
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose.bind(this));
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    };

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('click', evt => {
            if (evt.target.classList.contains('popup')) {
                this.close(evt.currentTarget);
            }
        })
    }
}