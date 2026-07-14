const myLibrary = [];

let total = 0;
let read = 0;
let pending = 0;

const sampleBooks = [
    {
        title: "One Hundred Years of Solitude",
        author: "García Márquez",
        pages: 471,
        read: true,
    },
    {
        title: "The Shadow of the Wind",
        nameAuthor: "Carlos",
        surnameAuthor: "Ruiz Zafón",
        pages: 576,
        read: true,
    },
    {
        title: "Hopscotch",
        nameAuthor: "Julio",
        surnameAuthor: "Cortázar",
        pages: 736,
        read: false,
    },
    {
        title: "Pedro Páramo",
        nameAuthor: "Juan",
        surnameAuthor: "Rulfo",
        pages: 124,
        read: true,
    },
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

function renderBooks() {
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

        const toggleRead = document.createElement("button");
        toggleRead.className = "read-button";

        if (book.read) {
            toggleRead.textContent = "Mark Unread";
        } else {
            toggleRead.textContent = "Mark Read";
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-button";
        deleteBtn.textContent = "Delete";

        titleAndAuthor.appendChild(title);
        titleAndAuthor.appendChild(author);

        cardHero.appendChild(titleAndAuthor)
        cardHero.appendChild(bookStatusBar)

        bookStatusBar.appendChild(pages);
        bookStatusBar.appendChild(readStatus);

        cardFoot.appendChild(toggleRead);
        cardFoot.appendChild(deleteBtn);

        bookCard.appendChild(cardHero);
        bookCard.appendChild(cardFoot);

        bookShelf.appendChild(bookCard);
    }
};

renderBooks();
calculateMetrics();