//EDIT PROFILE POPUP
const popupEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = document.querySelector(".popup__close_edit");
const popupEditProfile = document.querySelector(".popup");

const formElement = document.querySelector(".form");
const nameInput = formElement.querySelector(".popup__field_type_name");
const jobInput = formElement.querySelector(".popup__field_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
//ADD PLACE POPUP
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector(".popup_add");
const popupCloseAdded = document.querySelector(".popup__close_dismiss");
const addPopupSubmit = document.querySelector('.popup__submit_added');

const addPlaceInput = document.querySelector(".popup__field_type_place");
const addLinkInput = document.querySelector(".popup__field_type_link");
const formAdded = document.querySelector('.form_added');
//PRESS IMAGE POPUP
const imageOpenButton = document.querySelector('.elements__illustration');
const imageCloseButton = document.querySelector('.popup__close_opened-image');
const imagePopup = document.querySelector('.popup_press-image');
const newCardIlmage = document.querySelector('.popup__illustration');
const newCardImageTitle = document.querySelector('.popup__image-title');

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



function openPopup(anyPopup) {
  anyPopup.classList.add("popup_opened");
    inputPopupData();
}


function closePopup(anyPopup) {
  anyPopup.classList.remove("popup_opened");
}



function editFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEditProfile);
}


function inputPopupData() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}


function createCard (nameo, link) {
    const card = document.querySelector('#template__cards').content.firstElementChild.cloneNode(true);
    card.querySelector('.elements__title').innerText = nameo;
    card.querySelector('img').src = link;
    card.querySelector('img').alt = nameo;
    

//ALL ACTION INSIDE CARDS SECTION
      card.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('elements__like')) { evt.target.classList.toggle('elements__like_active' )};//LIKE
      if (evt.target.classList.contains('elements__delete')) { evt.target.closest('.elements__item').remove()};//DELETE CARD
    //POPUP_PRESS-IMAGE
      if (evt.target.classList.contains('elements__illustration')) {
        imagePopup.classList.add('popup_opened');//OPEN POPUP
        newCardIlmage.src  = evt.target.closest('.elements__illustration').src;//CREATE POPUP IMAGE SRC
        newCardIlmage.alt = evt.target.closest('.elements__item').innerText;
        newCardImageTitle.textContent  = evt.target.closest('.elements__item').querySelector('.elements__title').textContent;//CREATE POPUP IMAGE TITLE
      };
    })
  return card;
}


function pasteCard (nameo, link) {
  const cardFunc = createCard(nameo, link);
  document.querySelector('.elements').prepend(cardFunc);
}
  
//пометка для себя - РАЗОБРАТЬСЯ С FOREACH
for (let index = 0; index < initialCards.length; index++) {
  pasteCard(initialCards[index].name, initialCards[index].link)   
}


function openAddPopup () {
    popupAdd.classList.add("popup_opened");
}


function closeAddPopup() {
    popupAdd.classList.remove("popup_opened");
}


function addformSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    pasteCard(addPlaceInput.value, addLinkInput.value);
    closeAddPopup();
    document.querySelector('.form_added').reset();
}


function closePopupPressImage () {
  imagePopup.classList.remove('popup_opened');
}


imageCloseButton.addEventListener('click', closePopupPressImage);

formAdded.addEventListener('submit', addformSubmitHandler)

addButton.addEventListener('click', openAddPopup);
popupCloseAdded.addEventListener('click', closeAddPopup);

formElement.addEventListener('submit', editFormSubmitHandler);

popupEditButton.addEventListener('click', () => { openPopup(popupEditProfile) });
closeEditButton.addEventListener('click', () => { closePopup(popupEditProfile) });