import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popupSelector, addFormSubmitHandler) {
        super(popupSelector);
        this._addFormSubmitHandler = addFormSubmitHandler;
    }

    _getInputValues() {
      this._inputList = this._popup.querySelectorAll('.popup__field');
      
      this._formValues = {};
      this._inputList.forEach(input => this._formValues[input.name] = input.value);
      
      return this._formValues;
    }

    close() {
        super.close();
        this._popup.querySelector('.form').reset();
    }


    renderLoading(isLoading, loadingName, submitName) {
        if (isLoading) {
            this._popup.querySelector('.popup__submit').textContent = loadingName;
            }
        else {
            this._popup.querySelector('.popup__submit').textContent = submitName;
        }
      }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._addFormSubmitHandler(this._getInputValues());
            console.log(this._getInputValues())
        })
    }


}