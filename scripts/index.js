const popupButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");


function openPopup() {
    popup.classList.add("popup_opened");
    popupInputData();
}

function closePopup() {
    popup.classList.remove("popup_opened");
}


popupButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)


let formElement = document.querySelector(".form");

let nameInput = formElement.querySelector(".popup__info_form_name");
let jobInput = formElement.querySelector(".popup__info_form_job");


let profileName = document.querySelector(".profile__title");
let profileInfo = document.querySelector(".profile__subtitle");

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);



function popupInputData() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
}





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

const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector(".popup_add");
const popupCloseAdded = document.querySelector(".popup_delete_added");
const addPopupSubmit = document.querySelector('.popup__submit_added');


function createCard (name, link) {
    const card = document.querySelector('#template__cards').content.firstElementChild.cloneNode(true);
    card.querySelector('.elements__title').innerText = name;
    card.querySelector('img').src = link;
    document.querySelector('.elements').prepend(card);
    console.log(card);
}
  
for (let index = 0; index < initialCards.length; index++) {
    createCard(initialCards[index].name, initialCards[index].link)   
}

function openAddPopup () {
    popupAdd.classList.add("popup_opened");
}

function closeAddPopup() {
    popupAdd.classList.remove("popup_opened");
}

addButton.addEventListener('click', openAddPopup);
popupCloseAdded.addEventListener('click', closeAddPopup);


let addPlaceInput = document.querySelector(".popup__info_form_place");
let addlinkInput = document.querySelector(".popup__info_form_link");
let formAdded = document.querySelector('.form_added');

function addformSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    createCard(addPlaceInput.value, addlinkInput.value);
    closeAddPopup();
}

formAdded.addEventListener('submit', addformSubmitHandler)


const imageOpenButton = document.querySelector('.elements__illustration');
const ImageCloseButton = document.querySelector('.popup_press-image_close');
const imagePopup = document.querySelector('.popup_press-image');
const newCardIlmage = document.querySelector('.popup_press-image__illustration');
const newCardImageTitle = document.querySelector('.popup_press-image__title');


//ALL ACTION INSIDE CARDS SECTION
document.querySelector('.elements').addEventListener('click', (evt) => {
  if (evt.target.classList.contains('elements__like')) { evt.target.classList.toggle('elements__like_active' )};//LIKE
  if (evt.target.classList.contains('elements__delete')) { evt.target.closest('.elements__item').remove()};//DELETE CARD
//POPUP_PRESS-IMAGE
  if (evt.target.classList.contains('elements__illustration')) {
    imagePopup.classList.add('popup_opened');
    newCardIlmage.src  = evt.target.closest('.elements__illustration').src;
    newCardImageTitle.textContent  = evt.target.closest('.elements__item').querySelector('.elements__title').textContent;
  };
})


function closePopupPressImage () {
  imagePopup.classList.remove('popup_opened');
}
ImageCloseButton.addEventListener('click', closePopupPressImage);
