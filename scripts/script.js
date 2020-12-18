// popups
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
// service functions
function openPopup(type) {
  type.classList.add('popup_opened');
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

function handleOpenUserPopup(type) {
  newProfileName.value = profileName.textContent;
  newProfileJob.value = profileJob.textContent;
  openPopup(type);
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
  formPlace.reset();
  closePopup(closePopupButtonPlace);
}
function closePopup(closeType) {
  closeType.closest('.popup').classList.remove('popup_opened');
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
  fotoImage.addEventListener('click', function () { handleOpenFotoPopup(item) });
  return placeElement;
};

function addPlace(item) {
  fotos.prepend(createPlace(item));
};

// main page code
initialCards.forEach(addPlace);
buttonUserEdit.addEventListener('click', function () { handleOpenUserPopup(popupUser); });
buttonNewPlace.addEventListener('click', function () { openPopup(popupPlace); });
formUser.addEventListener('submit', handleSaveProfile);
formPlace.addEventListener('submit', handleAddNewPlace);
closePopupButtonProfile.addEventListener('click', function () { closePopup(closePopupButtonProfile); });
closePopupButtonPlace.addEventListener('click', function () { closePopup(closePopupButtonPlace); });
closePopupButtonFoto.addEventListener('click', function () { closePopup(closePopupButtonFoto); });
