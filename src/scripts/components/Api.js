
export class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) { return res.json(); }
    return Promise.reject(`Ошибка: ${err}`);

  }

  getInitialUser() {
  return fetch(`${this._baseUrl}users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards/`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  editUser(inputData) {
    return fetch(`${this._baseUrl}users/me/`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(inputData)
    })
      .then(this._checkResponse)
  }

  editAvatar(inputData) {
    return fetch(`${this._baseUrl}users/me/avatar/`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(inputData)
    })
      .then(this._checkResponse)
  }

  saveCard(inputData) {
    return fetch(`${this._baseUrl}cards/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(inputData)
    })
      .then(this._checkResponse)
  }

  putLike(cardID) {
    return fetch(`${this._baseUrl}cards/likes/${cardID}`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  deleteCard(cardID) {
    return fetch(`${this._baseUrl}cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  deleteLike(cardID) {
    return fetch(`${this._baseUrl}cards/likes/${cardID}`, {
      method: "DELETE",
      headers: this._headers
    })
      .then(this._checkResponse)
  }
}
