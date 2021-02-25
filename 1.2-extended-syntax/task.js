'use strict';

function getResult(a, b, c) {

   let discr = Math.pow(b, 2) - 4 * a * c;
   let x = [];

   if (discr === 0) {
      x = [-b / (2 * a)];

   } else if (discr > 0) {
      x = [(-b + Math.sqrt(discr)) / (2 * a), (-b - Math.sqrt(discr)) / (2 * a)];

   } else if (discr < 0) {
      x = [];
   }

   return x;
}

function getAverageMark(marks) {

   const numberOfMarks = 5;

   let marksAll = marks.length;

   for (let i = 0; i < marksAll; i++) {
      if (marks.length === 0) {
         return 0;
      } else if (marks.length >= numberOfMarks) {

         let newArr = marks.slice(0, 5);
         console.log(`Оценок больше 5, расчет будет произведен по первым пяти оценкам: ${newArr}`);
      }
   }

   let sumMarks = 0;

   for (let mark of marks) {
      sumMarks += mark;
   }

   return sumMarks / marksAll;
}

function askDrink(name, dateOfBirthday) {

   if (new Date().getFullYear() - dateOfBirthday.getFullYear() > 18) {
      return `Не желаете ли олд-фэшн, ${name}?`;
   } else {
      return `Сожалею, ${name} , но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
   }


}