export class Section {
  constructor({renderer}, containerSelector, api) {
    this._container = containerSelector;
    this._renderer = renderer;
    this._api = api;
  }

  saveCard(inputData) {
    return this._api
    .saveCard(inputData)
    .then((res) => {return res})
  }

  handleDeletePlace(evt) {
    evt.target.closest('.elements__element').remove();
  };

  deleteCard(cardID) {
    return this._api
      .deleteCard(cardID)
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
