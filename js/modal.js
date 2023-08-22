class Modal {
  constructor(id) {
    this.element = document.getElementById(id);
    this.id = id;
  }

  show() {
    this.element.classList.add("show");
  }

  hide() {
    this.element.classList.remove("show");
  }
}
