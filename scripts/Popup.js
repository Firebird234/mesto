export class Popup {

    constructor(popupSelector) {
        this.popupSelector = popupSelector;
        this.popup = document.querySelector(this.popupSelector);
    }

    open() {
        this.popup.classList.add("popup_opened");
    }

    close() {
      this.popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', () => this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            const popup = document.querySelector('.popup_opened');
            this.close(popup);}
    }

    setEventListeners() {
        document.addEventListener('keydown', () => {this._handleEscClose(event)});
        this.popup.addEventListener('mousedown', (event) => {
          if (event.target === this.popup.closest('.popup') || event.target === this.popup.querySelector('.popup__close')) {this.close();}
        })
    }

}