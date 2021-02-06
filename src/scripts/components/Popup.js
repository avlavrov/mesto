export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') { this.close(); }
  }

  _closePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) { this.close(); }
  }

  setEventListeners() {
    const closePopupButton = this._popupElement.querySelector('.popup__container-close');
    closePopupButton.addEventListener('click', this.close.bind(this));
    this._popupElement.addEventListener('click', this._closePopupOverlay.bind(this));
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

}
