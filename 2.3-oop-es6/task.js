'use strict';

// TASK 1

class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
   }

   fix() {
      this._state *= 1.5;
      if (this._state > 100) this._state = 100; //пытался вызвать сеттер отсюда - не вышло. информации о том, как это делать с наскока не нашёл. пока оставлю так 
   }

   set state(settingState) {
      if (settingState < 0) {this._state = 0;}
      else if (settingState > 100) {this._state = 100;}
      else {this._state = settingState;}
   }

   get state() {
      return this._state;
   }

}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
   }
}

//  TASK 2

class Library {
   constructor (name) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book._state > 30) {
         this.books.push(book);
      }
   }

   findBookBy(type, value) {
      if (!type || !value) return null;
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i][type] == value) {
            return this.books[i]; //возвращаем первую найденную книгу (строго по тз)
         }
      }
      return null;
   }

   giveBookByName(bookName) {
      if (!bookName) return null;
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i].name == bookName) return this.books.splice(i, 1)[0]; //выдаём первую найденную книгу (строго по тз)
      }
      return null;
   }
}

// TASK 3

