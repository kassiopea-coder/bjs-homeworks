'use strict';

//Задача 1

String.prototype.isPalindrome = function () {

    const string = this.toLowerCase().replace(/\s + /g, '');
    const reverseString = string.split('').reverse().join('');

    return string === reverseString;
};

console.log('А роза упала на лапу Азора'.isPalindrome());

//Задача 2

function getAverageMark(marks) {

    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    const average = sum / marks.length;
    const averageMark = Math.round(average);

    return averageMark;
}


//Задача 3

function checkBirthday(birthday) {

    const now = new Date();
    const userBirthday = new Date(birthday).getTime();
    const diff = now - userBirthday;
    const age = diff / (1000 * 60 * 60 * 24 * 365.25);

    return age >= 18;
}