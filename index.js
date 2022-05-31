import Book from './modules/book.js';
import startTime from './modules/datetime.js';

const form = document.querySelector('#book-form');
const list = document.querySelector('#list');

// The is the event handler that submit the form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title.trim() !== '' || author.trim() !== '') {
    Book.addbook(title, author, Book.generateId());
    const inputs = document.querySelectorAll('input');
    inputs.forEach((inputs) => { inputs.value = ''; });
  }
});

document.querySelector('#list').addEventListener('click', (e) => {
  Book.deleteBookfromUI(e.target);
  const targetID = e.target.getAttribute('data-id');
  Book.removeBook(targetID);
});

// This is the part that loads the objects
function init() {
  if (Book.getBooks().length === 0) {
    list.innerHTML = 'No Book Added Yet';
  } else {
    Book.getBooks().forEach((book) => Book.displaybooks(book, list));
  }
}

init();
startTime();

// -----Navbar functionality-----//

const aBookList = document.querySelector('#a-book-list');
const aAddBook = document.querySelector('#a-add-book');
const aContact = document.querySelector('#a-contact');

const bookList = document.querySelector('#book-list-section');
const formList = document.querySelector('#form-section');
const contactList = document.querySelector('#contact-section');

aBookList.addEventListener('click', () => {
  bookList.classList.add('active');
  formList.classList.remove('active');
  contactList.classList.remove('active');
});
aAddBook.addEventListener('click', () => {
  bookList.classList.remove('active');
  formList.classList.add('active');
  contactList.classList.remove('active');
});
aContact.addEventListener('click', () => {
  bookList.classList.remove('active');
  formList.classList.remove('active');
  contactList.classList.add('active');
});
