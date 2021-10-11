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

const elementsSection = document.querySelector('.elements');
const changeAvatarButton = document.querySelector('.profile__illustration_redact');
const avatar = document.querySelector('.profile__illustration');


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



export { popupEditButton, closeEditButton, popupEditProfile, formEditElement, nameInput, jobInput, profileName, profileJob, popupAddButton,
popupAdd, popupAddCardCloseButton, popupAddSubmitButton, placeInput, linkInput, formAdded, imageOpen, imageCloseButton, imagePopup,
imagePopupIllustration, imagePopupTitle, elementsSection, initialCards, changeAvatarButton, avatar };