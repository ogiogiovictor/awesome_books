import initialBooks from './data.js';

export default class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static storeBooks(books) {
    return localStorage.setItem('books', books);
  }

  static getBooks() {
    let books = JSON.parse(localStorage.getItem('books'));
    if (!books) {
      books = initialBooks;
      return books;
    }
    return books;
  }

  static removeBook(id) {
    const books = this.getBooks();
    const newBook = books.filter((bk) => bk.id !== Number(id));
    this.storeBooks(JSON.stringify(newBook));
  }

  static deleteBookfromUI(element) {
    if (element.classList.contains('remove-btn')) {
      element.parentElement.parentElement.remove();
    }
  }

      static bookData = this.getBooks();

      static addbook(title, author, id) {
        const book = new Book(title, author, id);
        this.bookData.push(book);
        this.storeBooks(JSON.stringify(this.bookData));
        const list = document.querySelector('#list');
        this.displaybooks(book, list);
        document.querySelector('#book-list-section').classList.add('active');
        document.querySelector('#form-section').classList.remove('active');
        document.querySelector('#contact-section').classList.remove('active');
      }

      static generateId() {
        return Math.floor(Math.random() * 100000000);
      }

      static displaybooks(book, el) {
        const item = document.createElement('tr');
        item.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td><button data-id="${book.id}" class="remove-btn">Remove</button></td>
        `;
        el.appendChild(item);
      }
}