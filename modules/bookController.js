// Event: Add a book
import Book from './Book.js';
import Main from './Main.js';
import Store from './Store.js';

const addBookList = () => {
  document.querySelector('#add').addEventListener('click', (e) => {
    // prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#new-title').value;
    const author = document.querySelector('#new-author').value;

    // instatiate book
    const book = new Book(title, author);

    // Add Book to Main
    Main.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Clear field
    Main.clearFields();
  });
};

// Event: Remove a book
const removeBookList = (collection) => {
  collection.addEventListener('click', (e) => {
  // From Main
    Main.deleteBook(e.target);
    // From Store
    Store.removeBook(e.target.parentElement.id);
  });
};

// list function
const functionProprty = (item1, bookSection, formSection, contactSection) => {
  item1.addEventListener('click', () => {
    bookSection.style.display = 'block';
    formSection.style.display = 'none';
    contactSection.style.display = 'none';
  });
};

// Add new function
const newFunction = (item2, bookSection, formSection, contactSection) => {
  item2.addEventListener('click', () => {
    formSection.style.display = 'block';
    bookSection.style.display = 'none';
    contactSection.style.display = 'none';
  });
};

// Contact function
const contactFunction = (item3, bookSection, formSection, contactSection) => {
  item3.addEventListener('click', () => {
    contactSection.style.display = 'block';
    bookSection.style.display = 'none';
    formSection.style.display = 'none';
  });
};

export {

  addBookList, removeBookList, functionProprty, newFunction, contactFunction,

};
