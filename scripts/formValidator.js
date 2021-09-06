

export class FormValidator {
    constructor(obj, form) {
        this._obj = obj;
/*
        this._inputSelector = obj.inputSelector;
        this._submitButtonSelector = obj.submitButtonSelector;
        this._inactiveButtonClass = obj.inactiveButtonClass;
        this._inputInvalid = obj.inputInvalid;
*/
        this._form = form;

    }

  _isInputValid(input) {
    
        if (input.validity.valueMissing) {
          return false;
        }
        return input.checkValidity();
      }


  _validateInput(input) {
    const error = input.parentNode.querySelector(`#${input.id}-error`);
    this._isInputValid(input);
  
    error.innerText = input.validationMessage;
  
    if (!this._isInputValid(input)) {input.classList.add(this._obj.inputInvalid);}
    if (this._isInputValid(input)) {input.classList.remove(this._obj.inputInvalid);}
  }

  _isFormInvalid(anyForm) {
    const inputs = Array.from(anyForm.querySelectorAll(this._obj.inputSelector));
    return inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _setButtonState(button, state) {
    if (state) { button.classList.remove(this._obj.inactiveButtonClass);
    button.removeAttribute('disabled');
    return;
    }
    button.classList.add(this._obj.inactiveButtonClass);
    button.setAttribute('disabled', true);
  }
  

   _validateForm (evt) {
    const input = evt.target;
    const form = evt.currentTarget;
    const button = form.querySelector(this._obj.submitButtonSelector);
  
    this._validateInput(input);
  
    if (this._isFormInvalid(form)) { this._setButtonState(button, false)}
    else { this._setButtonState(button, true)}
  }
    
   _setEventListeners() {
    
    this._form.addEventListener('input', (evt) => {this._validateForm(evt)}, true);
    const button = this._form.querySelector(this._obj.submitButtonSelector);
    
    if (this._isFormInvalid(this._form)) { this._setButtonState(button, false)}
    else { this._setButtonState(button, true)};
  }
    
   enableValidation() {
    this._setEventListeners();
   }
    
}


