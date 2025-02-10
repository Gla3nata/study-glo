let num = 266219;
let numStr = num.toString();

let product = 1;

for (let i = 0; i < numStr.length; i++) { 
    product *= parseInt(numStr[i]);
}

result = product ** 3
console.log("Полученный результат возвести в степень 3 = " + result);

result_str = result.toString();

console.log("первые 2 цифры полученного числа = " + result_str.slice(0, 2));