import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit, id) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popupElement.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._closePopupButton = this._popupElement.querySelector('.popup__container-close');
    this._button = this._popupElement.querySelector('.popup__button');
    this._handler = () => { this._handleSubmit(this._getInputValues()) };
    this._id = id;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.classList.add('popup__button_disabled');
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = 'Сохранить';
      this._button.classList.remove('popup__button_disabled');
    };
  }

  _getInputValues() {
    this._formValues = { id: this._id };
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handler);
  }
}
