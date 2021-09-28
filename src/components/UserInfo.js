export class UserInfo {
    constructor({ name, job }) {
        this._name = name;
        this._job = job;
        this._nameLand = document.querySelector(this._name);
        this._jobLand = document.querySelector(this._job);
    }


    getUserInfo() {
        const user = {}
        user.nameInput = this._nameLand.textContent;
        user.jobInput = this._jobLand.textContent;
        return user;
      }

    setUserInfo(data) {

        this._nameLand.textContent = data.name;
        this._jobLand.textContent = data.profession;
        console.log(data)
    }

}
