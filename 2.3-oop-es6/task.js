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

class StudentLog {
   constructor (name) {
      this.name = name;
   }

   getName() {
      return this.name;
   }

   addGrade(grade, subject) {
      if (!subject) return "empty subject input";
      if (!(subject in this)) this[subject] = [];
      if (grade === 1,2,3,4,5) {
         this[subject].push(grade);
         return this[subject].length;
      }
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n${this[subject].length}`;
   }

   getAverageBySubject(subject) {
      if (!subject) return "empty subject input";
      if (!(subject in this)) return 0;
      let sumMarks = 0;
      for (let i = 0; i < this[subject].length; i++) {
         sumMarks += this[subject][i];
      }
      if (typeof sumMarks == "number" && sumMarks != 0) return sumMarks/this[subject].length;
      return 0;
   }

   getTotalAverage() {
      debugger;
      let sumMarks = 0, keysCount = 0;
      for (let key in this) {
         sumMarks += this.getAverageBySubject(key);
         if (key != "name") keysCount++; // не нашёл, как проверять количество ключей в объекте ( исключение только для имени, если объект будет усложняться - нужно будет дорабатывать проверку.
      }
      if (typeof sumMarks == "number" && sumMarks != 0) return sumMarks/keysCount;
      return 0;
   }
}