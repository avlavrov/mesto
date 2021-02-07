import {Popup} from './Popup.js';
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupFotoImage = document.querySelector('.popup__image');
    this._fotoCaption = document.querySelector('.popup__caption');
  }
  open(item) {
    this._popupFotoImage.src = item.link;
    this._popupFotoImage.alt = item.place;
    this._fotoCaption.textContent = item.place;
    super.open();
  }
}
