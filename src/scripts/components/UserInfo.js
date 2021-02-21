import {userPopup} from '../../pages/index.js';

export class UserInfo {
  constructor(userInfoSelector, api) {
    this._job = document.querySelector(userInfoSelector.job);
    this._name = document.querySelector(userInfoSelector.name);
    this._avatar = document.querySelector(userInfoSelector.avatar);
    this._api = api;
  }

  getUserInfo() {
    return ({job: this._job.textContent, name: this._name.textContent});
  }

  saveUserInfo(inputData, url) {
    return this._api
    .editData(inputData, url)
    .then((res) => {return res})
  }

  setUserInfo({name, about, avatar}) {
    this._name.textContent = name;
    this._job.textContent = about;
    this._avatar.src = avatar;
  }
}
