import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        const imagePopupIllustration = this._popup.querySelector('.popup__illustration');
        const imagePopupTitle = this._popup.querySelector('.popup__image-title');

        super.open();
        imagePopupIllustration.src  = link;//CREATE POPUP IMAGE SRC
        imagePopupIllustration.alt = name;
        imagePopupTitle.textContent  = name;
    }

}