import './index.css';
//Classes Import
import { Section } from '../scripts/components/Section.js';
import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithSubmit } from '../scripts/components/PopupWithSubmit.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { Api } from '../scripts/components/Api.js'

//Constants Import
import { validatorConfig, sectionPlaces, buttonAvatarEdit, buttonUserEdit, buttonNewPlace, formAvatar, formUser, newProfileName, newProfileJob, formPlace } from '../scripts/utils/constants.js';
export let myID = '';
//Functions for class initialization
function makeCard(cardAtt, api) {
  const card = new Card(
    cardAtt,
    api,
    '#place-template',
    () => { imagePopup.open(cardAtt) },
    (cardID) => { cautionPopup.open(cardID) }
  )
    .generateCard();
  return card;
}

// Classes
const avatarFormValidation = new FormValidator(validatorConfig, formAvatar);
const userFormValidation = new FormValidator(validatorConfig, formUser);
const placeFormValidation = new FormValidator(validatorConfig, formPlace);
const api = new Api({
  headers: {
    authorization: '7b0dc8fa-cb4a-4707-9472-09ad5b621144',
    'Content-Type': 'application/json'
  }
});
const userInfo = new UserInfo(
  { name: '.profile__name', job: '.profile__job', avatar: '.profile__avatar' },
  api);
const section = new Section(
  { renderer: (item) => { section.addItem(makeCard(item, api)) } },
  sectionPlaces,
  api);
//Initialisation of Popups
const avatarPopup = new PopupWithForm('.popup-avatar',
  (inputData) => {
    userInfo.saveUserInfo(inputData, 'https://mesto.nomoreparties.co/v1/cohort-20/users/me/avatar/ ');
    avatarPopup.close();
  });
avatarPopup.setEventListeners();

const userPopup = new PopupWithForm('.popup-user',
  (inputData) => {
    userInfo.saveUserInfo(inputData, 'https://mesto.nomoreparties.co/v1/cohort-20/users/me')
      .then((data) => {
        userInfo.setUserInfo(data);
        userPopup.close();
      })
  });
userPopup.setEventListeners();

const newPlacePopup = new PopupWithForm('.popup-place',
  (inputData) => {
    section.saveCard(inputData, 'https://mesto.nomoreparties.co/v1/cohort-20/cards')
      .then((data) => {
        section.addItem(makeCard(data, api));
        newPlacePopup.close();
      })
  });
newPlacePopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup-foto');
imagePopup.setEventListeners();

const cautionPopup = new PopupWithSubmit(
  '.popup-caution',
  api,
  (cardID) => {
    console.log(cardID);
    section.deleteCard(cardID, 'https://mesto.nomoreparties.co/v1/cohort-20/cards')
      .then((data) => {
        console.log(data);
        cautionPopup.close();
      })
  }
);
cautionPopup.setEventListeners();

api
  .getInitialData('https://mesto.nomoreparties.co/v1/cohort-20/users/me')
  .then(data => {
    userInfo.setUserInfo(data);
    myID = data._id;
  })
  .catch((err) => { console.log(err) });

api
  .getInitialData('https://mesto.nomoreparties.co/v1/cohort-20/cards')
  .then((initialCards) => {
    section.renderer(initialCards);
  })
  .catch((err) => { console.log(err) });



// handle functions
function handleOpenAvatarPopup() {
  avatarFormValidation.resetValidation();
  avatarPopup.open();
}

function handleOpenUserPopup() {
  const profile = userInfo.getUserInfo();
  newProfileName.value = profile.name;
  newProfileJob.value = profile.job;
  userFormValidation.resetValidation();
  userPopup.open();
}

function handleOpenPlacePopup() {
  placeFormValidation.resetValidation();
  newPlacePopup.open();
}

// main code
avatarFormValidation.enableValidation();
placeFormValidation.enableValidation();
userFormValidation.enableValidation();
buttonAvatarEdit.addEventListener('click', handleOpenAvatarPopup);
buttonUserEdit.addEventListener('click', handleOpenUserPopup);
buttonNewPlace.addEventListener('click', handleOpenPlacePopup);
