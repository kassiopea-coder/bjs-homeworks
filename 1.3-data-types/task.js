'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(percent)) {
        return `Параметр 'Процентная ставка' содержит неправильное значение ${percent}`;
    }

    if (isNaN(contribution)) {
        return `Параметр 'Сумма первоначального взноса' содержит неправильное значение ${contribution}`;
    }

    if (isNaN(amount)) {
        return `Параметр 'Сумма кредита' содержит неправильное значение ${amount}`;
    }
    if (isNaN(date)) {
        return `Параметр 'Дата окончания кредита' содержит неправильное значение ${date}`;
    }

    percent = parseFloat(percent / 100);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    date = new Date(date);

    let S = amount - contribution;
    let P = percent / 12;
    let month = (date.getFullYear() - new Date().getFullYear()) * 12;


    let totalAmount = parseFloat(S * (P + P / ((1 + P) ** month - 1)) * month).toFixed(2);
    console.log(totalAmount);
    return totalAmount;

}


function getGreeting(name) {

    if (name === undefined || name.length === 0) {
        name = 'Аноним';
    }

    let greeting = `Привет, мир! Меня зовут ${name}.`;
    console.log(greeting);
    return greeting;
}