// popups
const popupUser = document.querySelector('.popup-user');
const popupFoto = document.querySelector('.popup-foto');
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
const closePopupButtonFoto = document.querySelector('.popup-close-foto');
//service functions
function openPopup(type) {
  type.classList.add('popup_opened');
};
//handle functions
function handleLikePlace(evt) {
  evt.target.classList.toggle('elements__like_active');
};

function handleDeletePlace(evt) {
  evt.target.closest('.elements__element').remove();
};

function handleOpenFotoPopup(item) {
  popupFoto.querySelector('.popup__image').src = item.link;
  popupFoto.querySelector('.popup__caption').textContent = item.name;
  openPopup(popupFoto);
}
function handleOpenPopup(type) {
  newProfileName.value = profileName.textContent;
  newProfileJob.value = profileJob.textContent;
  openPopup(type);
}

function handleClosePopup(closeType) {
  closeType.closest('.popup').classList.remove('popup_opened');
}

function handleSaveProfile(evt) {
  evt.preventDefault();
  handleClosePopup(closePopupButtonProfile);
  profileName.textContent = newProfileName.value;
  profileJob.textContent = newProfileJob.value;
}

function handleAddNewPlace(evt) {
  evt.preventDefault();
  addPlace({ name: newPlaceName.value, link: newPlaceLink.value });
  document.querySelector('[name="new-place"]').reset();//reset form
  handleClosePopup(closePopupButtonPlace);
}
// main functions
function createPlace(item) {
  const placeTemplate = document.querySelector('#place-template').content;
  const placeElement = placeTemplate.cloneNode(true);
  placeElement.querySelector('.elements__image').src = item.link;
  placeElement.querySelector('.elements__image').alt = item.name;
  placeElement.querySelector('.elements__text').textContent = item.name;
  placeElement.querySelector('.elements__like').addEventListener('click', handleLikePlace);
  placeElement.querySelector('.elements__delete-button').addEventListener('click', handleDeletePlace);
  placeElement.querySelector('.elements__image').addEventListener('click', function () { handleOpenFotoPopup(item) });
  return (placeElement);
};

function addPlace(item) {
  const fotos = document.querySelector('.elements');
  placeElement = createPlace(item);
  fotos.prepend(placeElement);
};

// main page code
initialCards.forEach(addPlace);
buttonUserEdit.addEventListener('click', function () { handleOpenPopup(popupUser); });
buttonNewPlace.addEventListener('click', function () { openPopup(popupPlace); });
formUser.addEventListener('submit', handleSaveProfile);
formPlace.addEventListener('submit', handleAddNewPlace);
closePopupButtonProfile.addEventListener('click', function () { handleClosePopup(closePopupButtonProfile); });
closePopupButtonPlace.addEventListener('click', function () { handleClosePopup(closePopupButtonPlace); });
closePopupButtonFoto.addEventListener('click', function () { handleClosePopup(closePopupButtonFoto); });
