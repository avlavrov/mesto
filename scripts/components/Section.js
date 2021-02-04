export class Section {
  constructor({items, renderer}, containerSelector) {
    this._dataToAdd = items;
    this._container = containerSelector;
    this._renderer = renderer;
  }

  renderer() {
    this._dataToAdd.forEach(item => this._renderer(item));
    }

  addItem(element) {
    this._container.prepend(element);
  }
}
