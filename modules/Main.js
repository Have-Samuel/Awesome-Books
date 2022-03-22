import Store from './Store.js';

export const collection = document.querySelector('#book-collection');
// main class
export default class Main {
  static displayBooks() {
    // eslint-disable-next-line no-use-before-define
    const books = Store.getBooks();

    books.forEach((book) => Main.addBookToList(book));
  }

  static addBookToList(book) {
    const element = document.createElement('div');
    element.classList.add('item');
    element.setAttribute('id', book.title);

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
    document.querySelector('#new-author').value = '';
  }
}