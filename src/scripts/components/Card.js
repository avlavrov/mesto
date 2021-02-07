export class Card {
  constructor(cardAttributes, cardTemplate, handleCardClick) {
    this._link = cardAttributes.link;
    this._name = cardAttributes.place;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
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
    this._elementImage.addEventListener('click', this._handleCardClick);

  };

  // handle functions
  _handleLikePlace(evt) {
    evt.target.classList.toggle('elements__like_active');
  };

  _handleDeletePlace(evt) {
    evt.target.closest('.elements__element').remove();
  };

  generateCard() {
    this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__text').textContent = this._name;
    this._elementImage.alt = this._name;
    this._elementImage.src = this._link;
    return this._element;
  }
}
