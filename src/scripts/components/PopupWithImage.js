import {Popup} from './Popup.js';
import {popupFotoImage, fotoCaption} from '../utils/constants.js';
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(item) {
    popupFotoImage.src = item.link;
    popupFotoImage.alt = item.name;
    fotoCaption.textContent = item.name;
    this._popupElement.classList.add('popup_opened');
  }
}
