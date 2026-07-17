# My Library

A responsive library management web application that allows users to add books, track their reading status, remove books, and view basic library statistics.

This project was created to practise JavaScript objects, DOM manipulation, event handling, forms, and responsive CSS layouts.

## Live Demo

https://johnshoko-byte.github.io/js-library/

## Features

* Add books using a modal form
* Store each book’s title, author, page count, and reading status
* Mark books as read or unread
* Delete books from the library
* Display library statistics
* Responsive layout for desktop, tablet, and mobile devices
* Accessible keyboard focus styles
* Smooth card and button animations
* Dark-themed user interface

## Built With

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* HTML Dialog element

## How It Works

Each book is represented as a JavaScript object and stored inside a library array.

When a user submits the form:

1. A new book object is created.
2. The book is added to the library array.
3. The bookshelf is re-rendered.
4. The library statistics are updated.

Buttons on each book card allow the user to change the book’s reading status or remove it from the library.

## Project Structure

```text
library/
├── index.html
├── style.css
├── script.js
├── README.md

```
## What I Learned

While building this project, I practised:

* Creating objects with JavaScript
* Working with constructor functions or classes
* Adding methods to object prototypes
* Manipulating the DOM
* Handling form submissions
* Using data attributes to connect DOM elements to objects
* Dynamically creating and removing elements
* Updating page content when application data changes
* Building responsive layouts with CSS Grid
* Styling and controlling the HTML `dialog` element
* Improving accessibility with focus states and reduced-motion support

## Future Improvements

* Save books with `localStorage`
* Add book cover images
* Add search and filtering
* Sort books by title, author, page count, or reading status
* Add reading progress tracking
* Add form validation and custom error messages
* Allow users to edit existing books
* Add multiple bookshelf categories
* Add light and dark themes

## Credits

This project was built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

## License

This project is available under the [MIT License](LICENSE).
