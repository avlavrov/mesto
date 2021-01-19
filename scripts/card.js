import { openPopup, popupFoto, popupFotoImage, fotoCaption} from './index.js';

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
    this._elementImage = this._element.querySelector('.elements__image');
    this._element.querySelector('.elements__like').addEventListener('click', this._handleLikePlace);
    this._element.querySelector('.elements__delete-button').addEventListener('click', this._handleDeletePlace);
    this._elementImage.addEventListener('click', () => { this._handleOpenFotoPopup() });

  };

  // handle functions
  _handleLikePlace(evt) {
    evt.target.classList.toggle('elements__like_active');
  };

  _handleDeletePlace(evt) {
    evt.target.closest('.elements__element').remove();
  };

  _handleOpenFotoPopup() {
    popupFotoImage.src = this._link;
    popupFotoImage.alt = this._name;
    fotoCaption.textContent = this._name;
    openPopup(popupFoto);
  }

  generateCard() {
    this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__text').textContent = this._name;
    this._elementImage.alt = this._name;
    this._elementImage.src = this._link;
    return this._element;
  }
}
