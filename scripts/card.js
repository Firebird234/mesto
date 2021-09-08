import {imagePopup, imageOpen, imageCloseButton, imagePopupIllustration, imagePopupTitle} from "./index.js";
import openPopup from "./index.js";

export class Card {

    constructor(name, link, cardSelector, openCardPopup) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this.openCardPopup = openCardPopup;
    }

    _copyTemplateCard() {
        const card = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);

        return card;
    }

    generateCard() {
      this._card = this._copyTemplateCard();
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


    _setEventListeners() {
        this._card.querySelector('.elements__like').addEventListener('click', () => this._pressLike());
      
        this._card.querySelector('.elements__delete').addEventListener('click', () => this._deleteCard());
      
        this._card.querySelector('.elements__illustration').addEventListener('click', () => { this.openCardPopup(this._name, this._link) });
    }
}

