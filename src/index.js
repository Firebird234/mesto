import './index.css'

import { Card } from "../scripts/card.js";
import { FormValidator } from "../scripts/formValidator.js";
import { Section } from "../scripts/Section.js";
import { Popup } from "../scripts/Popup.js"
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { UserInfo } from "../scripts/UserInfo.js";

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


const popupEdit = new Popup('.popup_edit');
const editUserInfo = new UserInfo( {name: '.profile__title', job: '.profile__subtitle'} );

function editFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupEdit.close();
}

function insertEditPopupData() {
  const data = editUserInfo.getUserInfo();
  nameInput.value = data.nameInput;
  jobInput.value = data.jobInput;
}

insertEditPopupData()



function createCard(name, link) {

   const card = new Card(name, link, '#template__cards', { handleCardClick: (name, link) => {
    const imageCardPopup = new PopupWithImage('.popup_press-image');
    imageCardPopup.open(name, link);
    imageCardPopup.setEventListeners();}
})

   const cardElement = card.generateCard();
   return cardElement;
}



popupAddButton.addEventListener('click', () => {
 popupWithFromClass.open();
});

formEditElement.addEventListener('submit', editFormSubmitHandler);

popupEditButton.addEventListener('click', () => { popupEdit.open();
                                                  insertEditPopupData();
                                                  popupEdit.setEventListeners()});



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