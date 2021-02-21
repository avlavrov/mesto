export class Section {
  constructor({renderer}, containerSelector, api) {
    this._container = containerSelector;
    this._renderer = renderer;
    this._api = api;
  }

  saveCard(inputData, url) {
    return this._api
    .addData(inputData, url)
    .then((res) => {return res})
  }

  deleteCard(inputData, url) {
    return this._api
      .deleteData(inputData, url)
      .then((res) => { return res})
  }

  renderer(items) {
    this._dataToAdd = items;
    this._dataToAdd.forEach(item => this._renderer(item));
    }

  addItem(element) {
    this._container.prepend(element);
  }
}
