export class Card {

    constructor(name, link, likes, cardSelector, 
        { handleCardClick, deleteCardPopup, pressLikeRequest}, 
        cardId, ownerId) {

        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this.handleCardClick = handleCardClick;
        this.likes = likes;
        this._deleteCardPopup = deleteCardPopup;
        this.cardId = cardId;
        this.pressLikeRequest = pressLikeRequest;
        this.ownerId = ownerId;
    }

    _copyTemplateCard() {
        const card = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);

        return card;
    }

    generateCard() {
      this._card = this._copyTemplateCard();
      this._setEventListeners();
    console.log(this.likes)
      this._card.querySelector('.elements__title').innerText = this._name;
      this._card.querySelector('.elements__illustration').src = this._link;
      this._card.querySelector('.elements__illustration').alt = this._name;
      this._card.querySelector('.elements__like-count').textContent = this.likes.length;


    if( this.likes.some((el) => {
        return el._id === 'fbabe050904e3bdc8f569a91';})) {
            this._pressLike(this);
    }

      return this._card;
    }

    _pressLike(data) {
        this._card.querySelector('.elements__like').classList.add('elements__like_active');
        this._card.querySelector('.elements__like-count').textContent = data.likes.length;
    }

    __pressDislike(data) {
        this._card.querySelector('.elements__like').classList.remove('elements__like_active');
        this._card.querySelector('.elements__like-count').textContent = data.likes.length;
    }

    _setEventListeners() {
        this._card.querySelector('.elements__like').addEventListener('click', () => {
            
            this.pressLikeRequest(this.cardId);
        });
      
        this._card.querySelector('.elements__delete').addEventListener('click', () => {
            this._deleteCardPopup(this.cardId, this._card);
            document.querySelector('.popup_card-removal').classList.add('popup_opened');
        });
      
        this._card.querySelector('.elements__illustration').addEventListener('click', () => { this.handleCardClick(this._name, this._link) });
    }
}

