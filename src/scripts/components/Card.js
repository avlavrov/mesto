import { myID } from '../../pages';

export class Card {
  constructor(cardAttributes, api, cardTemplate, handleCardClick, handleCardDelete) {
    this._link = cardAttributes.link;
    this._name = cardAttributes.name;
    this._likes = cardAttributes.likes;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._userID = cardAttributes.owner._id;
    this._handleCardDelete = handleCardDelete;
    this._id = cardAttributes._id;
    this._api = api;
    this._handlerDelet = (evt) => {
      this._handleDeletePlace(evt);
      this._handleCardDelete(this._id)};
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardTemplate)
      .content
      .cloneNode(true);
  }

  // deleteCard () {
  //   console.log(this);
  //   this._api
  //   .deleteData(this._id, url)
  //   .then(() => {this._handleDeletePlace()})
  //   .catch((err)=>console.log(err))
  // }

  likeCard(inputData, url) {
    this._api
    .putData(inputData, `${url}/${this._id}`)
    .then(() => {
      this._handleLikePlace()
    })
    .cath((err)=>console.log(err))
  }

  dislikeCard(inputData, url) {
    this._api
    .addData(inputData, url)
    .then((res) => {return res})
  }

  _setEventListeners() {
    this._elementImage = this._element.querySelector('.elements__image');
    this._element.querySelector('.elements__like').addEventListener('click', this._handleLikePlace);
    // this._element.querySelector('.elements__delete-button').addEventListener('click', this._handleDeletePlace);
    this._element.querySelector('.elements__delete-button').addEventListener('click', this._handlerDelet);
    // this._element.querySelector('.elements__delete-button').addEventListener('click', this._deleteCard);
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
    if (this._likes === undefined) this._likes = [];
    this._element.querySelector('.elements__num-like').textContent= this._likes.length;
    if (this._userID === myID) {
      this._element.querySelector('.elements__delete-button').classList.remove('elements__delete-button_hidden');}
    return this._element;
  }
}
