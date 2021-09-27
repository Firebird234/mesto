export class UserInfo {
    constructor({ name, job }) {
        this._name = name;
        this._job = job;
        this._nameLand = document.querySelector(this._name);
        this._jobLand = document.querySelector(this._job);
    }


    getUserInfo() {
        const User = {}
        User.nameInput = this._nameLand.textContent;
        User.jobInput = this._jobLand.textContent;
        return User;
      }

    setUserInfo(data) {

        document.querySelector(this._name).textContent = data.name;
        document.querySelector(this._job).textContent = data.profession;
        console.log(data)
    }

}
