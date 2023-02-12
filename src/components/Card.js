export default class Card {
    constructor(data, templateSelector, userId, api, { handleCardClick, handleCardDelete, handleCardLike }) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._userId = userId;
        this._api = api;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
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
        this._likeCounter = this._element.querySelector('.element__like-counter');

        this._elementCardImage.src = this._link;
        this._elementCardTitle.textContent = this._name;
        this._elementCardImage.alt = this._link;

        this._likeCounter.textContent = this._likes.length;

        this._deleteButton = this._element.querySelector('.element__button-delete');

        if (this._ownerId !== this._userId) {
            this._deleteButton.style.display = 'none';
        }

        this._likeButton = this._element.querySelector('.element__like-button');

        if (this._likes.find((like) => like._id === this._userId)) {
            this._likeButton.classList.add('element__like-button_active');
        }

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._likeButton = this._element.querySelector('.element__like-button');
        this._deleteButton = this._element.querySelector('.element__button-delete');

        this._likeButton.addEventListener('click', () => {
            this.likeClick();
        });
        this._deleteButton.addEventListener('click', () => {
            this._handleCardDelete();
        });
        this._elementCardImage.addEventListener('click', () => {
            this._handleCardClick();
        });
    }



    likeClick() {
        if(!(this._likeButton.classList.contains('element__like-button_active'))) {
            this._api.addLike(this._id)
            .then((data) => {
                this._likes = data.likes;
                this._likeButton.classList.add('element__like-button_active');
                this._likeCounter.textContent = this._likes.length;
            })
            .catch((err) => {
                console.log(err);
              })
        } else {
            this._api.deleteLike(this._id)
            .then((data) => {
                this._likes = data.likes;
                this._likeButton.classList.remove('element__like-button_active');
                this._likeCounter.textContent = this._likes.length;
            })
            .catch((err) => {
                console.log(err);
              })
        }
        
    }

    deleteCard() {
        this._element.remove();
    }

}