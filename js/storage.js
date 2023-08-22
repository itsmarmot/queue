class Storage_ {
  constructor(id) {
    this.id = id;
    this.load();
  }

  items = [];
  isEmpty = true;

  dump(datalist) {
    this.items.push(...datalist);
    this.update();
  }

  getItem(id) {
    return this.items.find((item) => item.id === id);
  }

  addItem(item) {
    this.items.push(item);
    this.update();
  }

  deleteItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
    this.update();
  }

  updateItem(id, callback) {
    this.items.forEach((item) => {
      if (item.id === id) {
        callback(item);
        return;
      }
    });
    this.update();
  }

  filterItems(callback) {
    return this.items.filter(callback);
  }

  load() {
    this.items = JSON.parse(localStorage.getItem(this.id)) || [];
    this.isEmpty = this.items.length <= 0;
    return this.items;
  }

  update() {
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  empty() {
    this.items = [];
    this.update();
  }
}
