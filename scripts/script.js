let editButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__container-close');
let savePopupButton = document.querySelector('.popup__button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function openPopup() {
  let popup = document.querySelector('.popup');
  popup.classList.add('popup_opened');
}

function closePopup() {
  let popup = document.querySelector('.popup');
  popup.classList.remove('popup_opened');
}

function saveProfile() {
  let popup = document.querySelector('.popup');
  let newProfileName = popup.querySelector('.popup__name');
  let newProfileJob = popup.querySelector('.popup__job');
  popup.classList.remove('popup_opened');
  profileName.textContent = newProfileName.value;
  profileJob.textContent = newProfileJob.value;
}

editButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
savePopupButton.addEventListener('click', saveProfile);
