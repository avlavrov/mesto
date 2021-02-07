export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._crossCloser = () => {this.close()};
    this._overlayCloser = (evt) => {this._closePopupOverlay(evt)};
    this._escCloser = (evt) => {this._handleEscClose(evt)};
    this._closePopupButton = this._popupElement.querySelector('.popup__container-close');
  }

  open() {
    this._popupElement.classList.add('popup_opened');
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
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
    document.addEventListener('keydown', this._escCloser);
  }

}
