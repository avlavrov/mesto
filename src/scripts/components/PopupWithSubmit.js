import { Popup } from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, api, handleSubmit) {
    super(popupSelector);
    this._submitButton = this._popupElement.querySelector('.popup__button');
    this._handleSubmit = handleSubmit;
    this._handler = () => {this._handleSubmit(this._cardID, this._cardEvenet)};
    this._closePopupButton = this._popupElement.querySelector('.popup__container-close');
    this._api = api;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.classList.add('popup__button_disabled');
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = 'Да';
      this._submitButton.classList.remove('popup__button_disabled');
    };
  }

  open(cardID, cardEvent) {
    super.open();
    this._cardID = cardID;
    this._cardEvenet = cardEvent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', this._handler);
  }
}
