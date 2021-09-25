export class UserInfo {
    constructor({ name, job }) {
        this.name = name;
        this.job = job;
    }


    getUserInfo() {
        const User = {}
        User.nameInput = document.querySelector(this.name).textContent;
        User.jobInput = document.querySelector(this.job).textContent;
        return User;
      }

    setUserInfo() {
        const formEditElement = document.querySelector(".form_edit");
        const nameInput = formEditElement.querySelector(".popup__field_type_name");
        const jobInput = formEditElement.querySelector(".popup__field_type_job");

        document.querySelector(this.name).value = nameInput.textContent;
        document.querySelector(this.job).value = jobInput.textContent;

    }

}
