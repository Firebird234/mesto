export class UserInfo {
    constructor({ name, job, avatar }) {
        this._name = name;
        this._job = job;
        this._nameLand = document.querySelector(this._name);
        this._jobLand = document.querySelector(this._job);
        this._avatar = avatar;
    }


    getUserInfo() {
        const user = {}
        user.nameInput = this._nameLand.textContent;
        user.jobInput = this._jobLand.textContent;
        return user;
      }

    setUserInfo(data) {

        this._nameLand.textContent = data.name;
        this._jobLand.textContent = data.about;

    }

    setUserAvatar(link) {
        document.querySelector(this._avatar).src = link;
    }

}
