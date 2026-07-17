const myLibrary = [];

let total = 0;
let read = 0;
let pending = 0;

/* Book constructor */
class Book {

    constructor(title, author, pages, read) {

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
    }
}

/* Sample books must be created using new Book() */

const sampleBooks = [
    new Book(
        "One Hundred Years of Solitude",
        "García Márquez",
        471,
        true
    ),

    new Book(
        "The Shadow of the Wind",
        "Carlos Ruiz Zafón",
        576,
        true
    ),

    new Book(
        "Hopscotch",
        "Julio Cortázar",
        736,
        false
    ),

    new Book(
        "Pedro Páramo",
        "Juan Rulfo",
        124,
        true
    ),
];

/* Change the read value */

function changeReadState(book) {
    book.toggleRead();
}

/* Add a book to the library */

function addBookToLibrary(book) {
    book.id = crypto.randomUUID();
    myLibrary.push(book);
}

/* Delete a book using its ID */

function deleteBook(id) {
    const bookIndex = myLibrary.findIndex((book) => book.id === id);

    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
    }
}

/* Select HTML elements */

const bookShelf = document.querySelector(".bookShelf");

const totalBooksMetric = document.querySelector("#totalMetricValue");
const readBooksMetric = document.querySelector("#readMetricValue");
const pendingBooksMetric = document.querySelector("#pendingMetricValue");

/* Calculate library statistics */

function calculateMetrics() {
    total = myLibrary.length;
    read = 0;
    pending = 0;

    for (const book of myLibrary) {
        if (book.read) {
            read++;
        } else {
            pending++;
        }
    }

    totalBooksMetric.textContent = total;
    readBooksMetric.textContent = read;
    pendingBooksMetric.textContent = pending;
}

/* Display all books */

function renderBooks() {
    // Remove the old cards before creating updated ones
    bookShelf.innerHTML = "";

    for (const book of myLibrary) {
        const bookCard = document.createElement("div");
        bookCard.className = "book";

        const cardHero = document.createElement("div");
        cardHero.className = "card-hero";

        const titleAndAuthor = document.createElement("div");
        titleAndAuthor.className = "title-and-author";

        const title = document.createElement("h1");
        title.className = "title";
        title.textContent = book.title;

        const author = document.createElement("p");
        author.className = "author";
        author.textContent = `By ${book.author}`;

        const bookStatusBar = document.createElement("div");
        bookStatusBar.className = "book-status-bar";

        const pages = document.createElement("div");
        pages.className = "pages";
        pages.textContent = `${book.pages} pages`;

        const readStatus = document.createElement("div");
        readStatus.className = "read-status";

        if (book.read) {
            readStatus.textContent = "Read";
        } else {
            readStatus.textContent = "Not read yet";
        }

        const cardFoot = document.createElement("div");
        cardFoot.className = "card-foot";

        const toggleReadButton = document.createElement("button");
        toggleReadButton.className = "read-button";

        if (book.read) {
            toggleReadButton.textContent = "Mark Unread";
        } else {
            toggleReadButton.textContent = "Mark Read";
        }

        toggleReadButton.addEventListener("click", () => {
            changeReadState(book);
            renderBooks();
            calculateMetrics();
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            deleteBook(book.id);
            renderBooks();
            calculateMetrics();
        });

        /* Put the elements together */

        titleAndAuthor.appendChild(title);
        titleAndAuthor.appendChild(author);

        bookStatusBar.appendChild(pages);
        bookStatusBar.appendChild(readStatus);

        cardHero.appendChild(titleAndAuthor);
        cardHero.appendChild(bookStatusBar);

        cardFoot.appendChild(toggleReadButton);
        cardFoot.appendChild(deleteButton);

        bookCard.appendChild(cardHero);
        bookCard.appendChild(cardFoot);

        bookShelf.appendChild(bookCard);
    }
}

/* Add the sample books */

sampleBooks.forEach((book) => {
    addBookToLibrary(book);
});

/* Initial page display */
const bookDialog = document.querySelector("#book-form");
const bookForm = document.querySelector("#add-book-form");
const closeDialogButton = document.querySelector("#close-dialog-button");

closeDialogButton.addEventListener("click", () => {
    bookDialog.close();
});

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#bookTitle").value;
    const author = document.querySelector("#bookAuthor").value;
    const pages = Number(document.querySelector("#bookPages").value);

    const read =
        document.querySelector("#readStatus").value === "true";

    const newBook = new Book(title, author, pages, read);

    addBookToLibrary(newBook);
    renderBooks();
    calculateMetrics();

    bookForm.reset();
    bookDialog.close();
});

renderBooks();
calculateMetrics();