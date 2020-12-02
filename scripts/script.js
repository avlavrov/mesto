let editButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__container-close');
let savePopupButton = document.querySelector('.popup__button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popup = document.querySelector('.popup');
  let newProfileName = popup.querySelector('.popup__name');
  let newProfileJob = popup.querySelector('.popup__job');
let formElement = popup.querySelector('.popup__form');

function changePopup() {
  popup.classList.toggle('popup_opened');
}

function saveProfile(evt) {
  evt.preventDefault();
  changePopup();
  profileName.textContent = newProfileName.value;
  profileJob.textContent = newProfileJob.value;
}

editButton.addEventListener('click', changePopup);
closePopupButton.addEventListener('click', changePopup);
formElement.addEventListener('submit', saveProfile);
