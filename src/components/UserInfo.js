export default class UserInfo {
    constructor({ nameSelector, professionSelector }) {
        this._nameSelector = nameSelector;
        this._professionSelector = professionSelector;
        this._nameElement = document.querySelector(this._nameSelector);
        this._professionElement = document.querySelector(this._professionSelector);
    }

    getUserInfo() {
        const UserInfo = {};
        UserInfo.name = this._nameElement.textContent;
        UserInfo.job = this._professionElement.textContent;
        return UserInfo;
    }

    setUserInfo() {
        const nameInput = document.querySelector('.popup__input_type_name');
        const jobInput = document.querySelector('.popup__input_type_profession');
        this._nameElement.textContent = nameInput.value;
        this._professionElement.textContent = jobInput.value;
    }
}