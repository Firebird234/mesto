import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popupSelector, addFormSubmitHandler) {
        super(popupSelector);
        this.addFormSubmitHandler = addFormSubmitHandler;
    }

    _getInputValues() {
      this._inputList = this.popup.querySelectorAll('.popup__field');
      
      this._formValues = {};
      this._inputList.forEach(input => this._formValues[input.name] = input.value);
      console.log(this._formValues);
      
      return this._formValues;
    }

    close() {
        super.close();
        this.popup.querySelector('.form').reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this.popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.addFormSubmitHandler(this._getInputValues());
            this.close();
        })
    }


}