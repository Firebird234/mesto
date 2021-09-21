export class Popup {

    constructor(popupSelector) {
        this.popupSelector = popupSelector;
    }

    
    const keypadHandler = function(evt) {
        console.log(evt);
        if (evt.key === 'Escape') {
          const popup = document.querySelector('.popup_opened');
          closePopup(popup);}
      }
    export default function openPopup(anyPopup) {
        anyPopup.classList.add("popup_opened");
      
        document.addEventListener('keydown', keypadHandler);
      }



    open() {
        this.popupSelector.classList.add("popup_opened");
    }

    close() {

    }

    _handleEscClose() {

    }

    setEventListeners() {

    }

}