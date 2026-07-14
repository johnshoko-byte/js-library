const myLibrary = [];

let total = 0;
let read = 0;
let pending = 0;

const sampleBooks = [
    {
        title: "One Hundred Years of Solitude",
        nameAuthor: "Gabriel",
        surnameAuthor: "García Márquez",
        pages: 471,
        read: true,
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(bookObj) {
    bookObj.id = crypto.randomUUID();
    myLibrary.push(bookObj);
};

const bookShelf = document.querySelector(".bookShelf");
const totalBooksMetric = document.querySelector("#totalMetricValue");
const readBooksMetric = document.querySelector("#readMetricValue");
const pendingBooksMetric = document.querySelector("#pendingMetricValue");

function calculateMetrics() {
    total = 0;
    read = 0;
    pending = 0;

    total = myLibrary.length;

    for (let book of myLibrary) {
        if (book.read === true) {
            read++;
        }
        else {
            pending++;
        }
    }

    totalBooksMetric.textContent = total;
    readBooksMetric.textContent = read;
    pendingBooksMetric.textContent = pending;
};

sampleBooks.forEach(addBookToLibrary);

function renderBooks(mylibrary) {

};
