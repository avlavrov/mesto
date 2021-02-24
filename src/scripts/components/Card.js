import { myID } from '../../pages';

export class Card {
  constructor(cardAttributes, api, cardTemplate, handleCardClick, handleCardDelete, handleCardLike) {
    this._link = cardAttributes.link;
    this._name = cardAttributes.name;
    this._likes = cardAttributes.likes;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._userID = cardAttributes.owner._id;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._handlerLike = (event) => {
      event.preventDefault();
      this._event =event;
      this._handleCardLike(this._id, this._event)
    };
    this._id = cardAttributes._id;
    this._api = api;
    this._handlerDelet = (event) => {
      event.preventDefault();
      this._event = event;
      this._handleCardDelete(this._id, this._event)
    };
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardTemplate)
      .content
      .children[0]
      .cloneNode(true);
  }

  likeCard(cardID, url) {
    return this._api
    .putData(`${url}/${cardID}`)
    .then((res) => {return res})
  }

  dislikeCard(cardID, url) {
    return this._api
    .deleteData(`${url}/${cardID}`)
    .then((res) => {return res})
  }

  _setEventListeners() {
    this._elementImage = this._element.querySelector('.elements__image');
    this._element.querySelector('.elements__like').addEventListener('click', this._handlerLike);
    // this._element.querySelector('.elements__like').addEventListener('click', this._handleLikePlace);
    this._element.querySelector('.elements__delete-button').addEventListener('click', this._handlerDelet);
    this._elementImage.addEventListener('click', this._handleCardClick);
  };

  // handle functions
  handleLikePlace(evt) {
    evt.target.classList.toggle('elements__like_active');
  };

  generateCard() {
    this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__text').textContent = this._name;
    this._elementImage.alt = this._name;
    this._elementImage.src = this._link;
    if (this._likes === undefined)
        { this._likes = [] }
      else if (this._likes.some(elem => elem._id === myID))
            {this._element.querySelector('.elements__like').classList.add('elements__like_active')};
    this._element.querySelector('.elements__num-like').textContent= this._likes.length;
    if (this._userID === myID) {
      this._element.querySelector('.elements__delete-button').classList.remove('elements__delete-button_hidden');}
    return this._element;
  }
}
