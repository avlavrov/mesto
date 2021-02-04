//Classes Import
import { Section } from './components/Section.js';
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import {UserInfo} from './components/UserInfo.js';
//Data Imort
import { initialCards } from './utils/initialCards.js';
//Constants Import
import { validatorConfig, sectionPlaces, buttonUserEdit, buttonNewPlace, formUser, newProfileName, newProfileJob, formPlace } from './utils/constants.js';

function makeCard(item) {
  const card = new Card(
    item,
    '#place-template',
    () => {
      const imagePopup = new PopupWithImage('.popup-foto');
      imagePopup.open(item);
      imagePopup.setEventListeners();
    }).generateCard();
    return card;
}

// Classes
const userFormValidation = new FormValidator(validatorConfig, formUser);
const placeFormValidation = new FormValidator(validatorConfig, formPlace);
const userInfo = new UserInfo({name: '.profile__name', job: '.profile__job'});
const section = new Section({
  items: initialCards,
  renderer: (item) => {section.addItem(makeCard(item))}
}, sectionPlaces);
const userPopup = new PopupWithForm('.popup-user',
  (inputData) => {
    userInfo.setUserInfo(inputData);
    userPopup.close();
  });
const newPlacePopup = new PopupWithForm('.popup-place',
  (inputData) => {
    section.addItem(makeCard(inputData));
    newPlacePopup.close();
  });

// handle functions
function handleOpenUserPopup() {
  newProfileName.value = userInfo.getUserInfo().name;
  newProfileJob.value = userInfo.getUserInfo().job;
  userFormValidation.resetValidation();
  userPopup.open();
  userPopup.setEventListeners();
}

function handleOpenPlacePopup() {
  placeFormValidation.resetValidation();
  newPlacePopup.open();
  newPlacePopup.setEventListeners();
}

// main code
section.renderer();
placeFormValidation.enableValidation();
userFormValidation.enableValidation();
buttonUserEdit.addEventListener('click', handleOpenUserPopup);
buttonNewPlace.addEventListener('click', handleOpenPlacePopup);
