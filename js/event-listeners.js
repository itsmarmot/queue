// Add Button
addButton.addEventListener("click", () => {
  addModal.show();
});

// Filter Input
filterInput.addEventListener("input", () => {
  [belumTerpanggil.body, sudahTerpanggil.body].forEach((table) => {
    const pattern = new RegExp(filterInput.value, "gi");
    const rows = Array.from(table.children);
    rows.forEach((row) => {
      const no_antrian = row.children[0].textContent;
      const nama = row.children[1].textContent;
      const nim = row.children[2].textContent;
      if ([no_antrian, nama, nim].every((item) => !item.match(pattern))) {
        row.classList.add("hidden");
      } else {
        row.classList.remove("hidden");
      }
    });
  });
});

[belumTerpanggil, sudahTerpanggil].forEach((table) => {
  table.body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("action-btn")) return;

    const dataElement = e.target.parentElement.parentElement;
    const dataId = parseInt(dataElement.id);

    if (e.target.classList.contains("move-btn")) {
      moveData(dataElement, dataId, table);
    } else if (e.target.classList.contains("delete-btn")) {
      // if delete button clicked
      popupConfirm(`Apakah Anda yakin menghapus data ini?`)
        .then(() => {
          table.remove(dataElement);
          storage.deleteItem(dataId);
        })
        .catch(console.log);
    } else if (e.target.classList.contains("edit-btn")) {
      const data = storage.getItem(dataId);
      updateEditForm(data);
      editModal.show();
    }
  });
});

// Add Modal
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = inputAuthor.value;
  const nim = inputYear.value;
  const sudah_lengkap = inputIsComplete.checked;

  const antrian = {
    id: Date.now(),
    nama,
    nim,
    sudah_lengkap,
    sudah_terpanggil: false,
    no_antrian: (LAST_ANTRIAN += 1),
  };

  storage.addItem(antrian);
  belumTerpanggil.append(antrian);

  inputForm.reset();
});

inputForm.addEventListener("reset", () => {
  addModal.hide();
});

// Edit Modal
editBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataId = parseInt(editBookId.value);
  const dataElement = document.getElementById(dataId);
  const newData = {
    nama: editBookAuthor.value,
    nim: editBookYear.value,
    sudah_lengkap: editIsComplete.checked,
  };
  storage.updateItem(dataId, (data) => {
    let isChanged = false;
    for (let key in newData) {
      if (data[key] !== newData[key]) {
        data[key] = newData[key];
        isChanged = true;
      }
    }

    if (isChanged) {
      updateData(dataElement, data);
    }
  });

  editBookForm.reset();
});

editBookForm.addEventListener("reset", () => {
  editModal.hide();
});
