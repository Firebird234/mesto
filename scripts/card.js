import {imagePopup, imageOpen, imageCloseButton, imagePopupIllustration, imagePopupTitle} from "./index.js";
import openPopup from "./index.js";

export class Card {

    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _copyTemplateCard() {
        const card = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);

        return card;
    }

    generateCard() {
      this._card = this._copyTemplateCard();
      this._openImagePopup();
      this._setEventListeners();

      this._card.querySelector('.elements__title').innerText = this._name;
      this._card.querySelector('.elements__illustration').src = this._link;
      this._card.querySelector('.elements__illustration').alt = this._name;
      
      return this._card;
    }

    _pressLike() {
        this._card.querySelector('.elements__like').classList.toggle('elements__like_active');
    }

    _deleteCard() {
        this._card.remove();
    }

    _handleIllustrationPopup() {
        const imagePopup = document.querySelector('.popup_press-image');
        const imagePopupIllustration = document.querySelector('.popup__illustration');
        const imagePopupTitle = document.querySelector('.popup__image-title');
        
        openPopup(imagePopup);//OPEN POPUP
        imagePopupIllustration.src  = this.link;//CREATE POPUP IMAGE SRC
        imagePopupIllustration.alt = this.name;
        imagePopupTitle.textContent  = this.name;//CREATE POPUP IMAGE TITLE
    }

    _setEventListeners() {
        this._card.querySelector('.elements__like').addEventListener('click', () => this._pressLike());
      
        this._card.querySelector('.elements__delete').addEventListener('click', () => this._deleteCard());
      
        this._card.querySelector('.elements__illustration').addEventListener('click', () => this._handleIllustrationPopup);
    }

    _openImagePopup() {
        this._card.querySelector('.elements__illustration').addEventListener('click', () => {
            openPopup(imagePopup);//OPEN POPUP
           imagePopupIllustration.src  = this._link;//CREATE POPUP IMAGE SRC
           imagePopupIllustration.alt = this._name;
           imagePopupTitle.textContent  = this._name;//CREATE POPUP IMAGE TITLE
          });
          
    }

}

