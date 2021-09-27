export class Popup {

    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
      this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();}
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (event) => {
          if (event.target === this._popup.closest('.popup') || event.target === this._popup.querySelector('.popup__close')) {this.close();}
        })
    }

}