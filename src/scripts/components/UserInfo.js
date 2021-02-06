export class UserInfo {
  constructor(userInfoSelector) {
    this._job = document.querySelector(userInfoSelector.job);
    this._name = document.querySelector(userInfoSelector.name);
  }

  getUserInfo() {
    return ({job: this._job.textContent, name: this._name.textContent});
  }

  setUserInfo({name, job}) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
