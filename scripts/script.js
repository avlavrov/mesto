// popups
const popupList = Array.from(document.querySelectorAll('.popup'));
const popupUser = document.querySelector('.popup-user');
const popupFoto = document.querySelector('.popup-foto');
const popupPlace = document.querySelector('.popup-place');
// new place popup
const placeTemplate = document.querySelector('#place-template').content;
const newPlaceName = popupPlace.querySelector('[name="place-name"]');
const newPlaceLink = popupPlace.querySelector('[name="place-foto-link"]');
const formPlace = popupPlace.querySelector('[name="new-place"]');
// user popup
const formUser = popupUser.querySelector('[name="edit-profile"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const newProfileName = popupUser.querySelector('[name="name"]');
const newProfileJob = popupUser.querySelector('[name="job"]');
// foto popup
const popupFotoImage = popupFoto.querySelector('.popup__image');
const fotoCaption = popupFoto.querySelector('.popup__caption');
// buttons
const buttonUserEdit = document.querySelector('.profile__edit-button');
const buttonNewPlace = document.querySelector('.profile__add-button');
const closePopupButtonProfile = document.querySelector('.popup-close-profile');
const closePopupButtonPlace = document.querySelector('.popup-close-place');
const closePopupButtonFoto = document.querySelector('.popup-close-foto');
const fotos = document.querySelector('.elements');
const buttonSaveUser = document.querySelector('.popup__button_user-save');
const buttonSavePlace = document.querySelector('.popup__button_place-save');
// service functions
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupElement = document.querySelector('.popup_opened');
    closePopup(popupElement)('popup_opened');
  }
}

function openPopup(type) {
  type.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};
// handle functions
function handleLikePlace(evt) {
  evt.target.classList.toggle('elements__like_active');
};

function handleDeletePlace(evt) {
  evt.target.closest('.elements__element').remove();
};

function handleOpenFotoPopup(item) {
  popupFotoImage.src = item.link;
  popupFotoImage.alt = item.name;
  fotoCaption.textContent = item.name;
  openPopup(popupFoto);
}

function handleOpenUserPopup() {
  const formElement = popupUser.querySelector('.popup__form');
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  newProfileName.value = profileName.textContent;
  newProfileJob.value = profileJob.textContent;
  buttonSaveUser.classList.remove('popup__button_disabled');
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement)
  });
  openPopup(popupUser);
}

function handleOpenPlacePopup() {
  const formElement = popupPlace.querySelector('.popup__form');
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  formElement.reset();
  buttonSavePlace.classList.add('popup__button_disabled');
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement)
  });
  openPopup(popupPlace);
}

function closePopup(popupElement) {
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
// main functions
function createPlace(item) {
  const placeElement = placeTemplate.cloneNode(true);
  const fotoImage = placeElement.querySelector('.elements__image');
  const likeButton = placeElement.querySelector('.elements__like');
  const deleteButton = placeElement.querySelector('.elements__delete-button');
  const placeName = placeElement.querySelector('.elements__text');
  fotoImage.src = item.link;
  fotoImage.alt = item.name;
  placeName.textContent = item.name;
  likeButton.addEventListener('click', handleLikePlace);
  deleteButton.addEventListener('click', handleDeletePlace);
  fotoImage.addEventListener('click', () => { handleOpenFotoPopup(item) });
  return placeElement;
};

function addPlace(item) {
  fotos.prepend(createPlace(item));
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
closePopupButtonFoto.addEventListener('click', () => { closePopup(closePopupButtonFoto); });
setPopupOverlayListeners();
