import './index.css'

import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import { Section } from "./components/Section.js";
import { Popup } from "./components/Popup.js"
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";

import { popupEditButton, closeEditButton, popupEditProfile, formEditElement, nameInput, jobInput, profileName, profileJob, popupAddButton,
  popupAdd, popupAddCardCloseButton, popupAddSubmitButton, placeInput, linkInput, formAdded, imageOpen, imageCloseButton, imagePopup,
  imagePopupIllustration, imagePopupTitle, elementsSection, initialCards } from './utils/constants.js'


const editUserInfo = new UserInfo( {name: '.profile__title', job: '.profile__subtitle'} );
const popupEdit = new PopupWithForm('.popup_edit', (data) => {editUserInfo.setUserInfo(data);});



function insertEditPopupData() {
  const data = editUserInfo.getUserInfo();
  nameInput.value = data.nameInput;
  jobInput.value = data.jobInput;
  console.log(data.jobInput)
}

insertEditPopupData();
popupEdit.setEventListeners();


const imageCardPopup = new PopupWithImage('.popup_press-image');
imageCardPopup.setEventListeners();

function createCard(name, link) {

   const card = new Card(name, link, '#template__cards', { handleCardClick: (name, link) => {
    imageCardPopup.open(name, link);
}
})

   const cardElement = card.generateCard();
   return cardElement;
}



popupAddButton.addEventListener('click', () => {
 popupWithFromClass.open();
});



popupEditButton.addEventListener('click', () => { popupEdit.open();
                                                  insertEditPopupData();
});



const cardsSection = new Section({ items: initialCards, renderer: (item) => {
  const cardElement = createCard(item.name, item.link);
  cardsSection.addItem(cardElement);
} 
}, elementsSection);
cardsSection.renderItems();


const popupWithFromClass = new PopupWithForm(
  '.popup_add',
  (data) => {
    const cardElement = createCard(data.name, Object.values(data)[1]);
    console.log(Object.keys(data)[1])
    cardsSection.addItem(cardElement);
  }
  );
  popupWithFromClass.setEventListeners()


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

console.log('abobus');
const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10 )