function updateData(dataElement, data) {
  const noAntrianElement = dataElement.children[0];
  const namaElement = dataElement.children[1];
  const nimElement = dataElement.children[2];
  const badgeElement = dataElement.children[3].children[0];

  noAntrianElement.textContent = data.no_antrian;
  namaElement.textContent = data.nama;
  nimElement.textContent = data.nim;
  if (data.sudah_lengkap) {
    badgeElement.classList.remove("danger");
    badgeElement.classList.add("success");

    badgeElement.textContent = "Yes";
  } else {
    badgeElement.classList.remove("success");
    badgeElement.classList.add("danger");

    badgeElement.textContent = "No";
  }
}

function moveData(dataElement, dataId, fromTable) {
  fromTable.remove(dataElement);

  storage.updateItem(dataId, (data) => {
    data.sudah_terpanggil = !data.sudah_terpanggil;
    if (data.sudah_terpanggil) sudahTerpanggil.append(data);
    else belumTerpanggil.append(data);
  });
}

function updateEditForm(data) {
  editBookId.value = data.id;
  editBookAuthor.value = data.nama;
  editBookYear.value = data.nim;
  editIsComplete.checked = data.sudah_lengkap;
}

function popupConfirm(text) {
  popupText.textContent = text;
  popupModal.show();

  return new Promise((resolve, reject) => {
    popupForm.onsubmit = (e) => {
      e.preventDefault();
      popupModal.hide();
      resolve("resolved");
    };

    popupForm.onreset = (e) => {
      e.preventDefault();
      popupModal.hide();
      reject("rejected");
    };
  });
}
