import { Card } from './card.js';
import { FormValidator } from './formValidator.js';
import { initialCards } from './initialCards.js';
//configs
const validatorConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-message'
}

const sectionPlaces = document.querySelector('.elements');
// popups
const popupList = Array.from(document.querySelectorAll('.popup'));
const popupUser = document.querySelector('.popup-user');
const popupPlace = document.querySelector('.popup-place');
export const popupFoto = document.querySelector('.popup-foto');
// user popup
const formUser = popupUser.querySelector('[name="edit-profile"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const newProfileName = popupUser.querySelector('[name="name"]');
const newProfileJob = popupUser.querySelector('[name="job"]');
const formElementUser = popupUser.querySelector('.popup__form');
const userFormValidation = new FormValidator(validatorConfig, formUser);
userFormValidation.enableValidation();
// new place popup
const newPlaceName = popupPlace.querySelector('[name="place-name"]');
const newPlaceLink = popupPlace.querySelector('[name="place-foto-link"]');
const formPlace = popupPlace.querySelector('[name="new-place"]');
const formElementPlace = popupPlace.querySelector('.popup__form');
const placeFormValidation = new FormValidator(validatorConfig, formPlace);
placeFormValidation.enableValidation();
//FotoPopup
export const popupFotoImage = popupFoto.querySelector('.popup__image');
export const fotoCaption = popupFoto.querySelector('.popup__caption');
// buttons
const buttonUserEdit = document.querySelector('.profile__edit-button');
const buttonNewPlace = document.querySelector('.profile__add-button');
const closePopupButtonProfile = document.querySelector('.popup-close-profile');
const closePopupButtonPlace = document.querySelector('.popup-close-place');
const closePopupButtonFoto = document.querySelector('.popup-close-foto');
const buttonSaveUser = document.querySelector('.popup__button_user-save');
const buttonSavePlace = document.querySelector('.popup__button_place-save');
// service functions
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupElement = document.querySelector('.popup_opened');
    closePopup(popupElement);
  }
}

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

// handle functions
function handleOpenUserPopup() {
  const inputList = Array.from(formElementUser.querySelectorAll('.popup__input'));
  newProfileName.value = profileName.textContent;
  newProfileJob.value = profileJob.textContent;
  inputList.forEach((inputElement) => {
    userFormValidation.hideInputError(formElementUser, inputElement);
  });
  userFormValidation.toggleButtonState(inputList, buttonSaveUser);
  openPopup(popupUser);
}

function handleOpenPlacePopup() {
  const inputList = Array.from(formElementPlace.querySelectorAll('.popup__input'));
  formElementPlace.reset();
  inputList.forEach((inputElement) => {
    placeFormValidation.hideInputError(formElementPlace, inputElement);
  });
  placeFormValidation.toggleButtonState(inputList, buttonSavePlace);
  openPopup(popupPlace);
}

function handleSaveProfile(evt) {
  evt.preventDefault();
  closePopup(popupUser);
  profileName.textContent = newProfileName.value;
  profileJob.textContent = newProfileJob.value;
}

function handleAddNewPlace(evt) {
  evt.preventDefault();
  addPlace({ name: newPlaceName.value, link: newPlaceLink.value });
  closePopup(popupPlace);
}

function addPlace(item) {
  sectionPlaces.prepend(new Card(item, '#place-template').generateCard());
}

function setPopupOverlayListeners() {
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', closePopupOverlay);
  });
}

// main code
initialCards.forEach(addPlace);
buttonUserEdit.addEventListener('click', handleOpenUserPopup);
buttonNewPlace.addEventListener('click', handleOpenPlacePopup);
formUser.addEventListener('submit', handleSaveProfile);
formPlace.addEventListener('submit', handleAddNewPlace);
closePopupButtonProfile.addEventListener('click', () => { closePopup(popupUser); });
closePopupButtonPlace.addEventListener('click', () => { closePopup(popupPlace); });
closePopupButtonFoto.addEventListener('click', () => { closePopup(popupFoto); });
setPopupOverlayListeners();
