import './index.css'

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js"
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { RemovalPopup } from "../components/RemovalPopup.js"

import { popupEditButton, closeEditButton, popupEditProfile, formEditElement, nameInput, jobInput, profileName, profileJob, popupAddButton,
  popupAdd, popupAddCardCloseButton, popupAddSubmitButton, placeInput, linkInput, formAdded, imageOpen, imageCloseButton, imagePopup,
  imagePopupIllustration, imagePopupTitle, elementsSection, initialCards, changeAvatarButton, avatar } from '../utils/constants.js'




const requestServerData = new Api('https://mesto.nomoreparties.co');
const editUserInfo = new UserInfo( {name: '.profile__title', job: '.profile__subtitle'} );
const popupEdit = new PopupWithForm('.popup_edit', (data) => {editUserInfo.setUserInfo(data)}, (data) => { requestServerData.sendUserData(data);});
const popupDeleteIcon = new RemovalPopup('.popup_card-removal', (cardId, kard) => {
  requestServerData.deleteCardRequest(cardId);
  kard.remove();
});
popupDeleteIcon.setEventListeners();



function insertEditPopupData() {
  const data = editUserInfo.getUserInfo();
  nameInput.value = data.nameInput;
  jobInput.value = data.jobInput;
}


requestServerData.getUserdata()
.then((data) => {editUserInfo.setUserInfo(data);
popupEdit.setEventListeners();
avatar.src = data.avatar;
const obj = data;
popupEditButton.addEventListener('click', (data) => { popupEdit.open();
                                                    insertEditPopupData(obj);
                                                  })
})




const imageCardPopup = new PopupWithImage('.popup_press-image');
imageCardPopup.setEventListeners();



function createCard(name, link, likes, cardId, ownerId) {

   const card = new Card(
    name,
    link,
    likes,
    '#template__cards',
    { 
      handleCardClick: (name, link) => imageCardPopup.open(name, link),
      deleteCardPopup: (cardId, kard) => popupDeleteIcon.open(cardId, kard),

      pressLikeRequest: (cardId) => {
        if( likes.some((el) => {return el._id === 'fbabe050904e3bdc8f569a91'})) {
            requestServerData.deleteLikeRequest(cardId)
              .then((data) => {
                card.__pressDislike(data);
                console.log(data);
                console.log('dislike');
                likes = data.likes;
              })
          
        } else {
          requestServerData.pressLikeRequest(cardId)
          .then((data) => {
            console.log('like');
            console.log(data);
            card._pressLike(data);
            likes = data.likes;
          })

        }
      },
    },
    cardId,
    ownerId
    );
   const cardElement = card.generateCard();
   return cardElement;
}



popupAddButton.addEventListener('click', () => {
 popupWithFromClass.open();
});


let cardsSection = {};


requestServerData.getCards()
.then((data) => {
  console.log(data);
    cardsSection = new Section({ items: data, renderer: (item) => {
    const cardElement = createCard(item.name, item.link, item.likes, item._id, item.owner._id);
      console.log(cardElement)
    if (item.owner.name !==  document.querySelector('.profile__title').textContent) {

      cardElement.querySelector('.elements__delete').classList.add('elements__delete_hidden');
    }
    cardsSection.addItem(cardElement);
  } 
  }, elementsSection);
  cardsSection.renderItems();
  return cardsSection;
})


console.log( document.querySelector('.profile__title').textContent);



const popupWithFromClass = new PopupWithForm(
  '.popup_add',
  (data) => {
popupWithFromClass.renderLoading(true, 'Сохранение', 'Создать');
requestServerData.sendUserCard(data)
  .then((data) => {
    const cardElement = createCard(data.name, data.link, data.likes, data._id, data.owner._id);
    cardsSection.addItem(cardElement);
  })
  .finally(() => {popupWithFromClass.renderLoading(false, 'Сохранение', 'Создать');
  popupWithFromClass.close();})
  }
  );
  popupWithFromClass.setEventListeners()


const popupAvatarReset = new PopupWithForm(
  '.popup_reset-avatar',
  (inputData) => {
  popupAvatarReset.renderLoading(true, 'Сохранение', 'Сохранить');
  requestServerData.changeAvatarRequest(inputData)
  .then((data) => {
    avatar.src = data.avatar;
    console.log(data)
  })
  .finally(() => {popupAvatarReset.renderLoading(true, 'Сохранение', 'Сохранить');
  popupAvatarReset.close()})
  }
  );
  popupAvatarReset.setEventListeners()

  changeAvatarButton.addEventListener('click', () => {
    popupAvatarReset.open();
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

console.log('abobus');/*
const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10 )*/





//console.log(reqCards);

//cardsSection.addItem();
