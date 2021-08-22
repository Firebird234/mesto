

const inputK = formEditProfile.querySelector('.popup__field_type_name');


//formSelector: '.form',
//inputSelector: '.popup__field',
//submitButtonSelector: '.popup__submit',
//inactiveButtonClass: '.submit-invalid'

function isInputValid(input) {
  if (input.validity.valueMissing) {
    return false;
  }
  return input.checkValidity();
}


function validateInput(input, obj) {
  const error = input.parentNode.querySelector(`#${input.id}-error`);
  isInputValid(input);

  error.innerText = input.validationMessage;

  if (!isInputValid(input)) {input.classList.add(obj.inputInvalid);}
  if (isInputValid(input)) {input.classList.remove(obj.inputInvalid);}
}


function isFormInvalid(anyForm, obj) {
  const inputs = Array.from(anyForm.querySelectorAll(obj.inputSelector));
  return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}


function setButtonState(button, state, obj) {
  if (state) { button.classList.remove(obj.inactiveButtonClass);
  button.removeAttribute('disabled');
  return;
  }
  button.classList.add(obj.inactiveButtonClass);
  button.setAttribute('disabled', true);
}


function validateForm (evt, obj) {
  const input = evt.target;
  const form = evt.currentTarget;
  const button = form.querySelector(obj.submitButtonSelector);

  validateInput(input, obj);

  if (isFormInvalid(form, obj)) { setButtonState(button, false, obj)}
  else { setButtonState(button, true, obj)}
}



function setEventListeners(form, obj) {
  
  form.addEventListener('input', (evt) => {validateForm(evt,obj)}, true);
  const button = form.querySelector(obj.submitButtonSelector);
  
  if (isFormInvalid(form, obj)) { setButtonState(button, false, obj)}
  else { setButtonState(button, true, obj)};

}


function enableValidation(obj) {
  const forms = Array.from(document.querySelectorAll(obj.formSelector));

  forms.forEach((formEl) => {
    setEventListeners(formEl, obj);
  })
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'submit-invalid',
  inputInvalid : '.popup__field_invalid'
});