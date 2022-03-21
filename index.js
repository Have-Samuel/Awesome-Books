import bookController from './modules/bookController.js';
import book from './modules/Book.js';
import Content from './modules/content.js';
import Storage from './modules/storage.js';
import Date from '/modules/date.js';

/* eslint-disable max-classes-per-file */
// Books
const collection = document.querySelector('#book-collection');



// Event: Display Books




// Full Website
// List
const item1 = document.querySelector('#nav-item1');
const bookSection = document.querySelector('#list');

// Add new
const item2 = document.querySelector('#nav-item2');
const formSection = document.querySelector('.form');

// Contact
const item3 = document.querySelector('#nav-item3');
const contactSection = document.querySelector('#contact');

// Date
const dayTime = document.querySelector('#date');
dayTime.innerText = new Date();