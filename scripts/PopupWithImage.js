import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        const imagePopupIllustration = document.querySelector('.popup__illustration');
        const imagePopupTitle = document.querySelector('.popup__image-title');

        super.open();
        imagePopupIllustration.src  = link;//CREATE POPUP IMAGE SRC
        imagePopupIllustration.alt = name;
        imagePopupTitle.textContent  = name;
    }

}