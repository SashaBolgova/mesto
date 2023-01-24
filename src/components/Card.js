export default class Card {
    constructor(data, templateSelector, { handleCardClick }) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement =
            document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementCardImage = this._element.querySelector('.element__image');
        this._elementCardTitle = this._element.querySelector('.element__text');

        this._elementCardImage.src = this._link;
        this._elementCardTitle.textContent = this._name;
        this._elementCardImage.alt = this._link;
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._likeButton = this._element.querySelector('.element__button-like');
        this._deleteButton = this._element.querySelector('.element__button-delete');

        this._likeButton.addEventListener('click', () => {
            this._handleLikeButtonClick();
        });
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteButtonClick();
        });
        this._elementCardImage.addEventListener('click', (evt) => {
            this._handleCardClick(evt);
        })
    }

    _handleLikeButtonClick() {
        this._likeButton.classList.toggle('element__button-like_active');
    }


    _handleDeleteButtonClick() {
        this._element.remove();
    }

}