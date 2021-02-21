import { Popup } from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, api, handleSubmit) {
    super(popupSelector);
    this._submitButton = this._popupElement.querySelector('.popup__button');
    this._handleSubmit = handleSubmit;
    this._handler = () => {this._handleSubmit(this._cardID)};
    this._closePopupButton = this._popupElement.querySelector('.popup__container-close');
    this._api = api;
  }

  open(cardID) {
    super.open();
    this._cardID = cardID;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', this._handler);
  }
}
