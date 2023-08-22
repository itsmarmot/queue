const storage = new Storage_("antrian");
const addModal = new Modal("add-modal");
const editModal = new Modal("edit-modal");
const popupModal = new Modal("popup-modal");

// storage.empty();

// if (storage.isEmpty) {
//   // dumping data if book data is empty
//   let index = 0;
//   const intervalId = setInterval(() => {
//     dumpdata[index].id = Date.now();
//     dumpdata[index].no_antrian = index + 1;
//     dumpdata[index].sudah_terpanggil = Math.random() >= 0.5;
//     dumpdata[index].sudah_lengkap = Math.random() >= 0.5;

//     index++;
//     if (index === dumpdata.length) {
//       clearInterval(intervalId);
//       storage.dump(dumpdata);

//       for (let antrian of storage.items) {
//         if (antrian.sudah_terpanggil) sudahTerpanggil.append(antrian);
//         else belumTerpanggil.append(antrian);
//       }
//     }
//   }, 13);
// } else {
for (let antrian of storage.items) {
  if (antrian.sudah_terpanggil) sudahTerpanggil.append(antrian);
  else belumTerpanggil.append(antrian);
}
// }

let LAST_ANTRIAN = Math.max(...storage.items.map((item) => item.no_antrian), 0);
