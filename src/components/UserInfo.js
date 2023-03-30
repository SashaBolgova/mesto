export default class UserInfo {
    constructor({ nameSelector, professionSelector, avatarSelector }) {
        this._nameSelector = nameSelector;
        this._professionSelector = professionSelector; 
        this._avatarSelector = avatarSelector;
        this._nameElement = document.querySelector(this._nameSelector);
        this._professionElement = document.querySelector(this._professionSelector);
        this._avatarElement = document.querySelector(this._avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            profession: this._professionElement.textContent,
        }
    }

    setUserInfo(data) {
        this._nameElement.textContent = data.name;
        this._professionElement.textContent = data.about;
        this.setUserAvatar(data);
    }
    
    setUserAvatar(data) {
        this._avatarElement.src = data.avatar;
    }
}