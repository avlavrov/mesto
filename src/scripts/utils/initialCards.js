export const initialCards = [
  {
    place: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    place: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    place: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    place: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    place: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    place: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



// function search(entity) {
//   console.log(`https://mesto.nomoreparties.co/v1/cohort-20/${entity}/`);
//   return fetch(`https://mesto.nomoreparties.co/v1/cohort-20/${entity}/`, {
//     headers: {
//       authorization: '7b0dc8fa-cb4a-4707-9472-09ad5b621144'
//     }
//   });
// }

// function renderLoading(isLoading) {
//   if (isLoading) {
//     spinner.classList.add('spinner_visible');
//     content.classList.add('content_hidden');
//   } else {
//     spinner.classList.remove('spinner_visible');
//     content.classList.remove('content_hidden');
//   }
// }

// function initiateCards = () {
//   search('cards')
//   .then((res) => {
//     if (res.ok) {
//       return res.json()}
//     return Promise.reject(res.status);
//   })
//   .then((res) => {console.log(res)})
//   .catch((err) => {renderError(`Ошибка${err}`)})
//   .finally(() => {renderLoading(false)});
// };

// export const initialCards = initiateCards();

//   console.log(initialCards);
