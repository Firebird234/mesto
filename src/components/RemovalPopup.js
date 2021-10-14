import { Popup } from "./Popup.js";

export class RemovalPopup extends Popup{
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this.submitHandler = submitHandler;
    }

    open(cardId, kard) {
        super.open();
        this.kard = kard;
        console.log(kard)
        this.cardId = cardId;
    }


    setEventListeners() {
        super.setEventListeners();

        this._popup.querySelector('.popup__submit').addEventListener('click', () => {
            this.submitHandler(this.cardId, this.kard);     
        });
        
    }
    //this._popup

}