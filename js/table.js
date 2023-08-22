class Table {
  #id;
  #element;
  #tHead;
  #tBody;
  #structure;

  constructor(id, structure) {
    this.#id = id;
    this.#element = document.getElementById(id);
    this.#structure = structure;

    // Create structure
    this.#tHead = document.createElement("thead");
    this.#element.appendChild(this.#tHead);
    for (const field of structure) {
      const head = document.createElement("th");
      head.textContent = field.content;
      this.#tHead.appendChild(head);
    }

    this.#tBody = document.createElement("tbody");
    this.#element.appendChild(this.#tBody);
  }

  append(data) {
    // create wrapper
    const tr = document.createElement("tr");
    // bookElement.classList.add("book-item");
    tr.id = data.id;

    for (const field of this.#structure) {
      const td = document.createElement("td");
      if (field.identifier === "action") {
        td.classList.add("action-field");

        // create buttons
        const moveBtn = document.createElement("button");
        moveBtn.classList.add("action-btn", "move-btn", "btn", "success");
        moveBtn.innerHTML = `<img src="icons/${
          data.sudah_terpanggil ? "open-book-50.png" : "book-50.png"
        }" alt="move-book" class="icon icon--invert" />`;

        const editBtn = document.createElement("button");
        editBtn.classList.add("action-btn", "edit-btn", "btn");
        editBtn.innerHTML = `<img src="icons/edit-50.png" alt="edit-book" class="icon icon--invert" />`;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("action-btn", "delete-btn", "btn", "danger");
        deleteBtn.innerHTML = `<img src="icons/trash-50.png" alt="delete-book" class="icon icon--invert" />`;
        td.appendChild(moveBtn);
        td.appendChild(editBtn);
        td.appendChild(deleteBtn);
      } else if (field.identifier.startsWith("badge-")) {
        const badgeIsTrue = data[field.identifier.split("badge-")[1]];

        const badge = document.createElement("div");
        badge.classList.add("badge");
        if (badgeIsTrue) {
          badge.classList.add("success");
          badge.textContent = "Yes";
        } else {
          badge.classList.add("danger");
          badge.textContent = "No";
        }

        td.appendChild(badge);
      } else {
        td.textContent = data[field.identifier];
      }

      tr.appendChild(td);
    }

    this.#tBody.appendChild(tr);
  }

  remove(element) {
    this.#tBody.removeChild(element);
  }

  get body() {
    return this.#tBody;
  }
}
