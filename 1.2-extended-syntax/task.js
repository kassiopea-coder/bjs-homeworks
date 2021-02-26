'use strict';

function getResult(a, b, c) {

   let discr = Math.pow(b, 2) - 4 * a * c;
   let x = [];

   if (discr === 0) {
      x = [-b / (2 * a)];

   } else if (discr > 0) {
      x = [(-b + Math.sqrt(discr)) / (2 * a), (-b - Math.sqrt(discr)) / (2 * a)];
   }

   return x;
}

function getAverageMark(marks) {

   const numberOfMarks = 5;
   let marksAll = marks.length;
   let sumMarks = 0;
   let sumMarksNew = 0;

   if (marksAll === 0)  return 0;
   
   let newArr = marks.slice(0, 5);
   let newArrLength = newArr.length;

   for (let mark of newArr) {
      sumMarksNew += mark;
   }
   for (let mark of marks) {
      sumMarks += mark;
   }

   return (marksAll > numberOfMarks) ? sumMarksNew / newArrLength : sumMarks / marksAll;

}

function askDrink(name, dateOfBirthday) {

   if (new Date().getFullYear() - dateOfBirthday.getFullYear() > 18) {
      return `Не желаете ли олд-фэшн, ${name}?`;
   } else {
      return `Сожалею, ${name} , но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
   }


}