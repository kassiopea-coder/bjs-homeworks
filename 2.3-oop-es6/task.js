'use strict';

//Задание 1


class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }

   fix() {
      this.state *= 1.5;
   }

   set state(newState) {

      if (newState < 0) {
         this._state = 0;
      } else if (newState > 100) {
         this._state = 100;
      } else {
         this._state = newState;
      }
   }

   get state() {
      return this._state
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount, state, type = "magazine") {
      super(name, releaseDate, pagesCount, state);
      this.type = type;

   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount, state, type = "book") {
      super(name, releaseDate, pagesCount, state);
      this.author = author;
      this.type = type;
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type = "novel") {
      super(author, name, releaseDate, pagesCount, state);
      this.type = type;
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type = "fantastic") {
      super(author, name, releaseDate, pagesCount, state);
      this.type = type;
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type = "detective") {
      super(author, name, releaseDate, pagesCount, state);
      this.type = type;
   }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//Задание 2

class Library {
   constructor(name, books = []) {
      this.name = name;
      this.books = books;
   }

   addBook(book) {

      if (book.state > 30) {
         this.books.push(book);
      }
   }

   findBookBy(type, value) {
      const book = this.books.find((currentBook) => currentBook[type] === value);
      return book ? book : null;
   }

   giveBookByName(bookName) {
      const index = this.books.findIndex(currentBook => currentBook.name === bookName);

      if (index >= 0) {
         const book = this.books[index];
         this.books.splice(index, 1);
         return book;
      } else {
         return null;
      }
   }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3






//Задание 3

class StudentLog {
   constructor(name) {
      this.name = name;
      this.data = {};
   }

   getName() {
      return this.name;
   }

   addGrade(grade, subject) {
      const grades = this.data[subject] || [];

      if (grade < 1 || grade > 5) {
         console.log(`Вы пытались поставить оценки $ {grade}.Нужно ставить оценки от 1 до 5 `)
      } else {
         grades.push(grade);
         this.data[subject] = grades;
      }

      return this.data[subject].length;
   }

   getAverageMark(grades) {
      if (grades.length === 0) {
         return 0;
      }

      let sumOfMarks = 0;

      for (let i = 0; i < grades.length; i++) {
         sumOfMarks += grades[i];
      }

      return sumOfMarks / grades.length;
   }
   getAverageBySubject(subject) {
      const grades = this.data[subject] || [];
      return this.getAverageMark(grades);

   }

   getTotalAverage() {
      const averageGrades = [];

      for (let subject in this.data) {
         averageGrades.push(this.getAverageBySubject(subject));
      }

      return this.getAverageMark(averageGrades);
   }

}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()); // Олег Никифоров
console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 2

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75