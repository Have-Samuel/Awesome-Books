// Today
/* eslint-disable max-classes-per-file */
// Books
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// main class
class Main {
  static displayBooks() {
    // eslint-disable-next-line no-use-before-define
    const books = Store.getBooks();

    books.forEach((book) => Main.addBookTitile(book));
  }

  static addBookTitile(book) {
    const collection = document.querySelector('#books-collection');

    const element = document.createElement('div');
    element.classList.add('item');
    element.setAttribute(id, book.title);

    element.innerHTML = `
    <p id="author">"${book.title}" by ${book.author}</p>
    <button type="button" class="delete">Remove</button>`;

    collection.appendChild(element);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#new-title').value = '';
    document.querySelector('#new-title').value = '';
  }
}

// Store Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);
    localStorage.setItem('book', JSON.stringify(books));
  }

  static removeBook(index) {
    const books = Store.getBooks();
    let counter = 0;

    books.forEach((book) => {
      if (book.title === index) {
        books.splice(counter, 1);
      }
      counter += 1;
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
// Event: Add a book
document.querySelector('#add').addEventListener('click', (e) => {
  // prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#new-title').value;
  const author = document.querySelector('#new-author').value;

  // instatiate book
  const book = new Books(title, author);

  // Add Book to Main
  Main.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear field
  Main.clearFields();
});

// Event: Remove a book
document.querySelector('#books-colection').addEventListener('click', (e) => {
  // From Main
  Main.deleteBook(e.target);

  // From Store
  Store.removeBook(e.target.parentElement.id);
});

// Full Website
// List
const item1 = document.querySelector('#nav-item1');
const bookSection = document.querySelector('.form');

// Add new
const item2 = document.querySelector('#nav-item2');
const formSection = document.querySelector('.form');

// Contact
const item3 = document.querySelector('#nav-item3');
const contactSection = document.querySelector('#contact');

// list function
item1.addEventListener('click', () => {
  bookSection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// Add new function
item2.addEventListener('click', () => {
  bookSection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// Contact function
item3.addEventListener('click', () => {
  bookSection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
});

const dayTime = document.querySelector('#date');
dayTime.innerText = new Date();