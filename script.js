'use strict'; 
let title = prompt("Как называется ваш проект");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'анимация');
let servicePrice1 = +prompt("Сколько это будет стоить?",);
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'форма обратной связи');
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 13;
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice =  fullPrice - (fullPrice * (rollback/100));

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return'Даем скидку в 10%';
    } else if ( price >= 15000 && price < 30000) {
        return'Даем скидку в 5%';
    } else if (price < 15000 && price >= 0) {
        return'Скидка не предусмотрена';
    }  else {
        return'Что то пошло не так';
    }
}
const getAllServicePrices = function (){
    return servicePrice1 + servicePrice2
}
const allServicePrices = getAllServicePrices();

function getTitle() {
    let titleSmall = title.toLowerCase()
    let firstletter = title.charAt(0);
    title = firstletter.toUpperCase() + titleSmall.slice(1);
    return (title);
}

getTitle();
console.log("this " + title);

function getFullPrice() {
    return (screenPrice + allServicePrices);
}
fullPrice = getFullPrice();

// console.log("summ " + allServicePrices);
// console.log("this " + fullPrice);


console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
// console.log(typeof screenPrice);
// console.log(typeof adaptive);
// console.log(screens.length);

// console.log("Общая стоимость: " + fullPrice);
// console.log("итоговая стоимость за вычетом отката посреднику: " + Math.ceil(servicePercentPrice));