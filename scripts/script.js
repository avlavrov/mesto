const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// foto variables
let fotos = document.querySelector('.elements');
const placeTemplate = document.querySelector('#place-template').content;
// default fotos
initialCards.forEach(addPlace);

function addPlace(item) {
  const placeElement = placeTemplate.cloneNode(true);
  placeElement.querySelector('.elements__image').src = item.link;
  placeElement.querySelector('.elements__image').alt = item.name;
  placeElement.querySelector('.elements__text').innerText = item.name;
  placeElement.querySelector('.elements__like').addEventListener('click', likePlace);
  placeElement.querySelector('.elements__delete-button').addEventListener('click', deletePlace);
  placeElement.querySelector('.elements__image').addEventListener('click', openFotoPopup);
  fotos.prepend(placeElement);
};

function likePlace(evt) {
  evt.target.classList.toggle('elements__like_active');
};

function deletePlace(evt) {
  evt.target.closest('.elements__element').remove();
};

// popups
let popupUser = document.querySelector('.popup-user');
let popupFoto = document.querySelector('.popup-foto');
let popupPlace = document.querySelector('.popup-place');
// new place popup
let newPlaceName = popupPlace.querySelector('[name="place-name"]');
let newPlaceLink = popupPlace.querySelector('[name="place-foto-link"]');
let formPlace = popupPlace.querySelector('[name="new-place"]');
// user popup
let formUser = popupUser.querySelector('[name="edit-profile"]');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let newProfileName = popupUser.querySelector('[name="name"]');
let newProfileJob = popupUser.querySelector('[name="job"]');
// buttons
let buttonUserEdit = document.querySelector('.profile__edit-button');
let buttonNewPlace = document.querySelector('.profile__add-button');
let closePopupButtons = document.querySelector('.page');

function openFotoPopup(evt) {
  popupFoto.querySelector('.popup__image').src = evt.target.src;
  popupFoto.querySelector('.popup__caption').innerText = evt.target.alt;
  popupFoto.classList.add('popup_opened');
}
function openPopup(popupVariant) {
  popupVariant.classList.add('popup_opened');
  if (popupVariant.classList.contains('popup-user')) {
    newProfileName.value = profileName.innerText;
    newProfileJob.value = profileJob.innerText;
  };
}

function closePopup(evt) {
  if (evt.target.classList.contains('popup__container-close') || evt.target.classList.contains('popup__button')) {
    evt.target.closest('.popup').classList.remove('popup_opened');
  }
}

function saveProfile(evt) {
  evt.preventDefault();
  closePopup(evt);
  profileName.textContent = newProfileName.value;
  profileJob.textContent = newProfileJob.value;
}

function addNewPlace(evt) {
  evt.preventDefault();
  initialCards.push({ name: newPlaceName.value, link: newPlaceLink.value });
  addPlace(initialCards[initialCards.length - 1]);
  newPlaceName.value = '';
  newPlaceLink.value = '';
  closePopup(evt);
}

formUser.addEventListener('submit', saveProfile);
formPlace.addEventListener('submit', addNewPlace);
buttonUserEdit.addEventListener('click', function () { openPopup(popupUser); });
buttonNewPlace.addEventListener('click', function () { openPopup(popupPlace); });
closePopupButtons.addEventListener('click', closePopup);
