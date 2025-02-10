let title = "study-glo";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 484930;
let rollback = 13;
let fullPrice = 1000;
let adaptive = true;

console.log("Название проектра: " +title, fullPrice, adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice +" долларов " + "Стоимость разработки сайта " +fullPrice +" долларов" );
console.log(screens.toLowerCase());
rollback = fullPrice * (rollback/100)
console.log("Откат посреднику " + rollback);


// 03
'use strict';

title = prompt("Как называется ваш проект");
console.log("Название проектра: " + title);
screens = prompt("Какие типы экранов нужно разработать Например: 'Простые, Сложные, Интерактивные'");
console.log("Тип: " + screens);
screenPrice = prompt("Сколько будет стоить данная работа?");
console.log("Стоимость рабты:" + screenPrice);
adaptive = confirm("Нужен ли адаптив на сайте?");
console.log("адаптив :" + adaptive);

let expenses1 = prompt('Какой дополнительный тип услуги нужен?', 'анимация');
let servicePrice1 = prompt("Сколько это будет стоить?", '3000');
let expenses2 = prompt('Какой дополнительный тип услуги нужен?', 'форма обратной связи');
let servicePrice2 = prompt("Сколько это будет стоить?", '5500');
console.log(Number(servicePrice1));
console.log(Number(servicePrice2));

fullPrice = (Number(screenPrice)) + (Number(servicePrice1)) + (Number(servicePrice2)) 
console.log("Общая стоимость: " + fullPrice);

let servicePercentPrice =  fullPrice - rollback;
console.log("итог: " + Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if ( fullPrice > 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
}  else {
    console.log('Что то пошло не так');
}