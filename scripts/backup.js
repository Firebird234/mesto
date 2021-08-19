


const formEditProfile = document.forms.profileImfo;
const formAddPlace = document.forms.addPlace;
const allForms = Array.from(document.forms)
console.log(allForms)


const inputK = formEditProfile.querySelector('.popup__field_type_name');
console.log(inputK, inputK.validity)
console.log(inputK, inputK.value)



function isInputValid(input) {
  if (input.validity.valueMissing) {
    return false;
  }
  return input.checkValidity();
}


function validateInput(input) {
  const error = input.parentNode.querySelector(`#${input.id}-error`);
  isInputValid(input);

  error.innerText = input.validationMessage;

  if (!isInputValid(input)) {input.classList.add('popup__field_invalid');}
  if (isInputValid(input)) {input.classList.remove('popup__field_invalid');}
}


function isFormInvalid(anyForm) {
  const inputs = Array.from(anyForm.querySelectorAll('.popup__field'));
  return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}


function setButtonState(button, state) {
  if (state) { button.classList.remove('submit-invalid');
  button.removeAttribute('disabled');
  return;
  }
  button.classList.add('submit-invalid');
  button.setAttribute('disabled', true);
}


function validateForm (evt) {
  const input = evt.target;
  const form = evt.currentTarget;
  const button = form.querySelector('.popup__submit');

  validateInput(input);

  if (isFormInvalid(form)) { setButtonState(button, false)}
  else { setButtonState(button, true)}
}



function setEventListeners(form) {
  
  form.addEventListener('input', validateForm, true);
  const button = form.querySelector('.popup__submit')
  if (isFormInvalid(form)) { setButtonState(button, false)}
  else { setButtonState(button, true)};

}


function enableValidation() {
  const forms = Array.from(document.querySelectorAll('.form'));

  forms.forEach((formEl) => {
    setEventListeners(formEl);
  })
}

