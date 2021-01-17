import { Card } from './card.js';
import { FormValidator, validatorConfig } from './formValidator.js';
// popups
const popupList = Array.from(document.querySelectorAll('.popup'));
const popupUser = document.querySelector('.popup-user');
const popupPlace = document.querySelector('.popup-place');
// new place popup
const newPlaceName = popupPlace.querySelector('[name="place-name"]');
const newPlaceLink = popupPlace.querySelector('[name="place-foto-link"]');
const formPlace = popupPlace.querySelector('[name="new-place"]');
// user popup
const formUser = popupUser.querySelector('[name="edit-profile"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const newProfileName = popupUser.querySelector('[name="name"]');
const newProfileJob = popupUser.querySelector('[name="job"]');
// buttons
const buttonUserEdit = document.querySelector('.profile__edit-button');
const buttonNewPlace = document.querySelector('.profile__add-button');
const closePopupButtonProfile = document.querySelector('.popup-close-profile');
const closePopupButtonPlace = document.querySelector('.popup-close-place');
const fotos = document.querySelector('.elements');
const buttonSaveUser = document.querySelector('.popup__button_user-save');
const buttonSavePlace = document.querySelector('.popup__button_place-save');
// service functions
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupElement = document.querySelector('.popup_opened');
    closePopup(popupElement);
  }
};

export function openPopup(type) {
  type.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

function hideInitialInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(validatorConfig.inputErrorClass);
  errorElement.classList.remove(validatorConfig.errorClass);
  errorElement.textContent = '';
};

// handle functions
function handleOpenUserPopup() {
  const formElement = popupUser.querySelector('.popup__form');
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  newProfileName.value = profileName.textContent;
  newProfileJob.value = profileJob.textContent;
  buttonSaveUser.classList.remove('popup__button_disabled');
  inputList.forEach((inputElement) => {
    hideInitialInputError(formElement, inputElement)
  });
  new FormValidator(validatorConfig, formUser).enableValidation();
  openPopup(popupUser);
}

function handleOpenPlacePopup() {
  const formElement = popupPlace.querySelector('.popup__form');
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  formElement.reset();
  buttonSavePlace.classList.add('popup__button_disabled');
  inputList.forEach((inputElement) => {
    hideInitialInputError(formElement, inputElement)
  });
  new FormValidator(validatorConfig, formPlace).enableValidation();
  openPopup(popupPlace);
}

export function closePopup(popupElement) {
  popupElement.closest('.popup').classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

function handleSaveProfile(evt) {
  evt.preventDefault();
  closePopup(closePopupButtonProfile);
  profileName.textContent = newProfileName.value;
  profileJob.textContent = newProfileJob.value;
}

function handleAddNewPlace(evt) {
  evt.preventDefault();
  addPlace({ name: newPlaceName.value, link: newPlaceLink.value });
  closePopup(closePopupButtonPlace);
}
function closePopupOverlay(evt, popupElement) {
  if (evt.target === popupElement) {
    closePopup(popupElement);
  }
}

function addPlace(item) {
  fotos.prepend(new Card(item, '#place-template').generateCard());
};

function setPopupOverlayListeners() {
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', (evt) => { closePopupOverlay(evt, popupElement) });
  });
};

// main page code
initialCards.forEach(addPlace);
buttonUserEdit.addEventListener('click', handleOpenUserPopup);
buttonNewPlace.addEventListener('click', handleOpenPlacePopup);
formUser.addEventListener('submit', handleSaveProfile);
formPlace.addEventListener('submit', handleAddNewPlace);
closePopupButtonProfile.addEventListener('click', () => { closePopup(closePopupButtonProfile); });
closePopupButtonPlace.addEventListener('click', () => { closePopup(closePopupButtonPlace); });
setPopupOverlayListeners();
