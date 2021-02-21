//configs
export const validatorConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-message'
}

export const sectionPlaces = document.querySelector('.elements');
// buttons
export const buttonAvatarEdit = document.querySelector('.profile__hover-avatar');
export const buttonUserEdit = document.querySelector('.profile__edit-button');
export const buttonNewPlace = document.querySelector('.profile__add-button');
// popups
const popupAvatar = document.querySelector('.popup-avatar');
const popupUser = document.querySelector('.popup-user');
const popupPlace = document.querySelector('.popup-place');
// avatar popup
export const formAvatar = popupAvatar.querySelector('[name="edit-avatar"]');
// user popup
export const formUser = popupUser.querySelector('[name="edit-profile"]');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const newProfileName = popupUser.querySelector('[name="name"]');
export const newProfileJob = popupUser.querySelector('[name="about"]');
// new place popup
export const formPlace = popupPlace.querySelector('[name="new-place"]');
