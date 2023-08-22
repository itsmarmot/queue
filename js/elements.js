// Header Section
const addButton = document.getElementById("add-btn");

// Filter Section
const filterInput = document.getElementById("filterBookTitle");

// Tables
const belumTerpanggil = new Table("belum_terpanggil", [
  {
    content: "No. Antrian",
    identifier: "no_antrian",
  },
  {
    content: "Nama",
    identifier: "nama",
  },
  {
    content: "NIM",
    identifier: "nim",
  },
  {
    content: "Berkas Lengkap",
    identifier: "badge-sudah_lengkap",
  },
  {
    content: "Aksi",
    identifier: "action",
  },
]);
const sudahTerpanggil = new Table("sudah_terpanggil", [
  {
    content: "No. Antrian",
    identifier: "no_antrian",
  },
  {
    content: "Nama",
    identifier: "nama",
  },
  {
    content: "NIM",
    identifier: "nim",
  },
  {
    content: "Berkas Lengkap",
    identifier: "badge-sudah_lengkap",
  },
  {
    content: "Aksi",
    identifier: "action",
  },
]);

// Modal Input Section
const inputForm = document.getElementById("inputBook");
const inputTitle = document.getElementById("inputBookTitle");
const inputAuthor = document.getElementById("inputBookAuthor");
const inputYear = document.getElementById("inputBookYear");
const inputIsComplete = document.getElementById("inputBookIsComplete");

// Modal Edit Section
const editBookForm = document.getElementById("editBookForm");
const editBookId = document.getElementById("editBookId");
const editBookAuthor = document.getElementById("editBookAuthor");
const editBookYear = document.getElementById("editBookYear");
const editIsComplete = document.getElementById("editBookIsComplete");

// Popup Modal Section
const popupText = document.getElementById("popupText");
const popupForm = document.getElementById("popupForm");
