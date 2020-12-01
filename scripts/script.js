let editButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__container-close');
let savePopupButton = document.querySelector('.popup__button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popup = document.querySelector('.popup');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

let newProfileName = popup.querySelector('.popup__name');
let newProfileJob = popup.querySelector('.popup__job');

function saveProfile() {
  popup.classList.remove('popup_opened');
  profileName.textContent = newProfileName.value;
  profileJob.textContent = newProfileJob.value;
}

editButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
savePopupButton.addEventListener('click', saveProfile);
