import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popupElement.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._closePopupButton = this._popupElement.querySelector('.popup__container-close');
    this._handler = () => {this._handleSubmit(this._getInputValues())};
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  // _submitter () {
  //   this._getInputValues();
  //   this._handleSubmit(this._formValues);
  // }

  close() {
    this._popupElement.classList.remove('popup_opened');
    this._closePopupButton.removeEventListener('click', this.close.bind(this));
    this._popupElement.removeEventListener('click', this._closePopupOverlay.bind(this));
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
    this._form.removeEventListener('submit', this._handler);
    this._form.reset();
  }

  setEventListeners() {
    this._closePopupButton.addEventListener('click', this.close.bind(this));
    this._popupElement.addEventListener('click', this._closePopupOverlay.bind(this));
    document.addEventListener('keydown', this._handleEscClose.bind(this));
    this._form.addEventListener('submit', this._handler);
  }
}
