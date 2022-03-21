import {addBookList, removeBookList, functionProprty, newFunction, contactFunction} from "./modules/bookController.js";

import {collection} from './modules/Main.js';

// Event: Display Books
// Event: Add a book
addBookList();

// Event: Remove a book
removeBookList(collection);
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

// list function
functionProprty(item1, bookSection, formSection, contactSection);

// Add new function
newFunction(item2, bookSection, formSection, contactSection);


// Contact function
contactFunction(item3, bookSection, formSection, contactSection);

import { DateTime } from './node_modules/luxon/src/luxon.js';
const dayTime = document.querySelector('#date');
dayTime.innerText = DateTime.now().toFormat('MMMM dd, yyyy');