export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._crossCloser = () => {this.close()};
    this._overlayCloser = (evt) => {this._closePopupOverlay(evt)};
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupButton = this._popupElement.querySelector('.popup__container-close');
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
    this._closePopupButton.addEventListener('click', this._crossCloser);
    this._popupElement.addEventListener('click', this._overlayCloser);
  }

}
