export default class UserInfo {
    constructor({ nameSelector, professionSelector }) {
        this._nameSelector = nameSelector;
        this._professionSelector = professionSelector; 
        this._nameElement = document.querySelector(this._nameSelector);
        this._professionElement = document.querySelector(this._professionSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            profession: this._professionElement.textContent
        }
    }

    setUserInfo(data) {
        this._nameElement.textContent = data.name;
        this._professionElement.textContent = data.profession;
    }
}