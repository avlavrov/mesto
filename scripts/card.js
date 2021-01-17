import { openPopup, closePopup } from './script.js';
const _popupFoto = document.querySelector('.popup-foto');
const _popupFotoImage = _popupFoto.querySelector('.popup__image');
const _fotoCaption = _popupFoto.querySelector('.popup__caption');
const _closePopupButtonFoto = document.querySelector('.popup-close-foto');
_closePopupButtonFoto.addEventListener('click', () => { closePopup(_closePopupButtonFoto); });

export class Card {
  constructor(cardAttributes, cardTemplate) {
    this._link = cardAttributes.link;
    this._name = cardAttributes.name;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardTemplate)
      .content
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector('.elements__like').addEventListener('click', this._handleLikePlace);
    this._element.querySelector('.elements__delete-button').addEventListener('click', this._handleDeletePlace);
    this._element.querySelector('.elements__image').addEventListener('click', () => { this._handleOpenFotoPopup(this) });

  };

  // handle functions
  _handleLikePlace(evt) {
    evt.target.classList.toggle('elements__like_active');
  };

  _handleDeletePlace(evt) {
    evt.target.closest('.elements__element').remove();
  };

  _handleOpenFotoPopup() {
    _popupFotoImage.src = this._link;
    _popupFotoImage.alt = this._name;
    _fotoCaption.textContent = this._name;
    openPopup(_popupFoto);
  }

  generateCard() {
    this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__text').textContent = this._name;
    this._element.querySelector('.elements__image').alt = this._name;
    this._element.querySelector('.elements__image').src = this._link;
    return this._element;
  }
}
