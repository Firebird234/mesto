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
const imageOpen = document.querySelector('.elements__illustration');
const imageCloseButton = document.querySelector('.popup__close_opened-image');
const imagePopup = document.querySelector('.popup_press-image');
const imagePopupIllustration = document.querySelector('.popup__illustration');
const imagePopupTitle = document.querySelector('.popup__image-title');

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


function insertEditPopupData() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}


function createCard (name, link) {
    const card = document.querySelector('#template__cards').content.querySelector('.elements__item').cloneNode(true);
    card.querySelector('.elements__title').innerText = name;
    card.querySelector('.elements__illustration').src = link;
    card.querySelector('.elements__illustration').alt = name;
    

//ALL ACTION INSIDE CARDS SECTION


card.querySelector('.elements__like').addEventListener('click', () => { 
  card.querySelector('.elements__like').classList.toggle('elements__like_active');//LIKE
});

card.querySelector('.elements__delete').addEventListener('click', () => { 
  card.remove();//DELETE CARD
});

card.querySelector('.elements__illustration').addEventListener('click', () => {
  openPopup(imagePopup);//OPEN POPUP
 imagePopupIllustration.src  = card.querySelector('.elements__illustration').src;//CREATE POPUP IMAGE SRC
 imagePopupIllustration.alt = card.innerText;
 imagePopupTitle.textContent  = card.querySelector('.elements__title').textContent;//CREATE POPUP IMAGE TITLE

});


//      card.addEventListener('click', (evt) => {
//      if (evt.target.classList.contains('elements__like')) { evt.target.classList.toggle('elements__like_active' )};//LIKE
//      if (evt.target.classList.contains('elements__delete')) { evt.target.closest('.elements__item').remove()};//DELETE CARD
//    //POPUP_PRESS-IMAGE
//      if (evt.target.classList.contains('elements__illustration')) {
//        imagePopup.classList.add('popup_opened');//OPEN POPUP
//        imagePopupIllustration.src  = evt.target.closest('.elements__illustration').src;//CREATE POPUP IMAGE SRC
//        imagePopupIllustration.alt = evt.target.closest('.elements__item').innerText;
//        imagePopupTitle.textContent  = evt.target.closest('.elements__item').querySelector('.elements__title').textContent;//CREATE POPUP IMAGE TITLE
//      };
//    })
return card;
}


function pasteCard (name, link) {
  const cardConst = createCard(name, link);
  document.querySelector('.elements').prepend(cardConst);
}
  
//пометка для себя - РАЗОБРАТЬСЯ С FOREACH
for (let index = 0; index < initialCards.length; index++) {
  pasteCard(initialCards[index].name, initialCards[index].link)   
}


function addFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    pasteCard(placeInput.value, linkInput.value);
    closePopup(popupAdd);
    formAdded.reset();
}


imageCloseButton.addEventListener('click', () => { closePopup(imagePopup) });

formAdded.addEventListener('submit', addFormSubmitHandler)

popupAddButton.addEventListener('click', () => { openPopup(popupAdd) });
popupAddCardCloseButton.addEventListener('click', () => { closePopup(popupAdd) });

formEditElement.addEventListener('submit', editFormSubmitHandler);

popupEditButton.addEventListener('click', () => { openPopup(popupEditProfile);
                                                  insertEditPopupData() });

closeEditButton.addEventListener('click', () => { closePopup(popupEditProfile) });