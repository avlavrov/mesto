let editButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__container-close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popup = document.querySelector('.popup');
let newProfileName = popup.querySelector('.popup__input_name');
let newProfileJob = popup.querySelector('.popup__input_job');
let formElement = popup.querySelector('.popup__form');

console.dir(newProfileName);

function openPopup() {
  newProfileName.value = profileName.innerText;
  newProfileJob.value = profileJob.innerText;
  popup.classList.toggle('popup_opened');
}

function closePopup() {
  popup.classList.toggle('popup_opened');
}

function saveProfile(evt) {
  evt.preventDefault();
  closePopup();
  profileName.textContent = newProfileName.value;
  profileJob.textContent = newProfileJob.value;
}

editButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', saveProfile);
