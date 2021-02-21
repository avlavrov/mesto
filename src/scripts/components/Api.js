
export class Api {
  constructor(config) {
    this._headers = config.headers;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      Array.from(document.querySelectorAll('.popup__button')).forEach((button) => {
        button.classList.add('popup__button_disabled');
        button.textContent = 'Сохранение...';
      });
    } else {
      Array.from(document.querySelectorAll('.popup__button')).forEach((button) => {
        button.textContent = 'Сохранить';
        button.classList.remove('popup__button_disabled');
      });
    }
  }

  getInitialData(url) {
    return fetch(url, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) { return res.json(); }
        return Promise.reject(`Ошибка: ${err}`);
      })
  }

  editData(inputData, url) {
    this.renderLoading(true);
    return fetch(url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(inputData)
    })
      .then((res) => {
        if (res.ok) {
          this.renderLoading(false);
          return res.json();
        }
        return Promise.reject(`Ошибка: ${err}`);
      })
  }

  addData(inputData, url) {
    this.renderLoading(true);
    return fetch(url, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(inputData)
    })
      .then((res) => {
        if (res.ok) {
          this.renderLoading(false);
          return res.json();
        }
        return Promise.reject(`Ошибка: ${err}`);
      })
  }

  putData(inputData, url) {
    this.renderLoading(true);
    return fetch(url, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(inputData)
    })
      .then((res) => {
        if (res.ok) {
          this.renderLoading(false);
          return res.json();
        }
        return Promise.reject(`Ошибка: ${err}`);
      })
  }


  deleteData(id, url) {
    this.renderLoading(true);
    return fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          this.renderLoading(false);
          return res.json();
        }
        return Promise.reject(`Ошибка: ${err}`);
      })
  }
}
