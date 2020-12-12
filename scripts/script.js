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
// user popup
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__container-close');
let formElement = popup.querySelector('.popup__form');
// user variables
let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let newProfileName = popup.querySelector('.popup__input_type_name');
let newProfileJob = popup.querySelector('.popup__input_type_job');
// foto variables
let places = document.querySelector('.elements');
const placeTemplate = document.querySelector('#place-template').content;


initialCards.forEach((item) => {
  const placeElement = placeTemplate.cloneNode(true);
  console.log(item.name);
  placeElement.querySelector('.elements__image').src = item.link;
  placeElement.querySelector('.elements__image').alt = item.name;
  placeElement.querySelector('.elements__text').innerText = item.name;
  places.append(placeElement);
});



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
