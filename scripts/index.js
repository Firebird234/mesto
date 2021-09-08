import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";
//EDIT PROFILE POPUP
const popupEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = document.querySelector(".popup__close_edit");
const popupEditProfile = document.querySelector(".popup_edit");

const formEditElement = document.querySelector(".form_edit");
const nameInput = formEditElement.querySelector(".popup__field_type_name");
const jobInput = formEditElement.querySelector(".popup__field_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
//ADD PLACE POPUP
const popupAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector(".popup_add");
const popupAddCardCloseButton = document.querySelector(".popup__close_dismiss");
const popupAddSubmitButton = document.querySelector('.popup__submit_added');

const placeInput = document.querySelector(".popup__field_type_place");
const linkInput = document.querySelector(".popup__field_type_link");
const formAdded = document.querySelector('.form_added');
//PRESS IMAGE POPUP
export const imageOpen = document.querySelector('.elements__illustration');
export const imageCloseButton = document.querySelector('.popup__close_opened-image');
export const imagePopup = document.querySelector('.popup_press-image');
export const imagePopupIllustration = document.querySelector('.popup__illustration');
export const imagePopupTitle = document.querySelector('.popup__image-title');

const elementsSection = document.querySelector('.elements');


//КАРТОЧКИ

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const keypadHandler = function(evt) {
  console.log(evt);
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);}
}

export default function openPopup(anyPopup) {
  anyPopup.classList.add("popup_opened");

  document.addEventListener('keydown', keypadHandler);
}


function closePopup(anyPopup) {
  anyPopup.classList.remove("popup_opened");

  document.removeEventListener('keydown', keypadHandler)
}


function editFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEditProfile);
}


function insertEditPopupData() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

insertEditPopupData()



function addFormSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    const card = new Card(placeInput.value, linkInput.value, '#template__cards', openCardPopup);
    const cardElement = card.generateCard();
    elementsSection.prepend(cardElement);

    closePopup(popupAdd);
}


formAdded.addEventListener('submit', addFormSubmitHandler)

popupAddButton.addEventListener('click', () => { openPopup(popupAdd) });

formEditElement.addEventListener('submit', editFormSubmitHandler);

popupEditButton.addEventListener('click', () => { openPopup(popupEditProfile);
                                                  insertEditPopupData() });



const formEditProfile = document.forms.profileImfo;
const formAddPlace = document.forms.addPlace;
const allForms = Array.from(document.forms);
const allPopups = Array.from(document.querySelectorAll('.popup'))



//CLICK OVERLAY -> CLOSE POPUP
allPopups.forEach((el,ind,arr) => {
    el.addEventListener('mousedown', (evt) => {
    if (evt.target === el.closest('.popup') || evt.target === el.querySelector('.popup__close')) {closePopup(el);}
  })
}
)



initialCards.forEach((el, index, arr) => {
    
  const card = new Card(initialCards[index].name, initialCards[index].link, '#template__cards', openCardPopup);

  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
})



Array.from(document.querySelectorAll('.form')).forEach((formEl) => {
  const dataObj = {
      formSelector: '.form',
      inputSelector: '.popup__field',
      submitButtonSelector: '.popup__submit',
      inactiveButtonClass: 'submit-invalid',
      inputInvalid : '.popup__field_invalid'
    }

  const form = new FormValidator(dataObj, formEl)
  form.enableValidation();
})


function openCardPopup(name, link) {

  const imagePopup = document.querySelector('.popup_press-image');
  const imagePopupIllustration = document.querySelector('.popup__illustration');
  const imagePopupTitle = document.querySelector('.popup__image-title');
        
  openPopup(imagePopup);
  imagePopupIllustration.src  = link;//CREATE POPUP IMAGE SRC
  imagePopupIllustration.alt = name;
  imagePopupTitle.textContent  = name;
}

export {openCardPopup};

