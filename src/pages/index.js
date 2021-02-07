import './index.css';
//Classes Import
import { Section } from '../scripts/components/Section.js';
import { Card } from '../scripts/components/card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
//Data Imort
import { initialCards } from '../scripts/utils/initialCards.js';
//Constants Import
import { validatorConfig, sectionPlaces, buttonUserEdit, buttonNewPlace, formUser, newProfileName, newProfileJob, formPlace } from '../scripts/utils/constants.js';

function makeCard(item) {
  const card = new Card(
    item,
    '#place-template',
    () => {imagePopup.open(item)}).generateCard();
  return card;
}

// Classes
const userFormValidation = new FormValidator(validatorConfig, formUser);
const placeFormValidation = new FormValidator(validatorConfig, formPlace);
const userInfo = new UserInfo({ name: '.profile__name', job: '.profile__job' });
const section = new Section({
  items: initialCards,
  renderer: (item) => { section.addItem(makeCard(item)) }
}, sectionPlaces);
const userPopup = new PopupWithForm('.popup-user',
  (inputData) => {
    userInfo.setUserInfo(inputData);
    userPopup.close();
  });
    userPopup.setEventListeners();//new

const newPlacePopup = new PopupWithForm('.popup-place',
  (inputData) => {
    section.addItem(makeCard(inputData));
    newPlacePopup.close();
  });
  newPlacePopup.setEventListeners();//new

const imagePopup = new PopupWithImage('.popup-foto');
imagePopup.setEventListeners();

// handle functions
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
section.renderer();
placeFormValidation.enableValidation();
userFormValidation.enableValidation();
buttonUserEdit.addEventListener('click', handleOpenUserPopup);
buttonNewPlace.addEventListener('click', handleOpenPlacePopup);
