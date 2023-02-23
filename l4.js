let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

let plus = Number(firstNumber)+Number(secondNumber);
let minus = Number(firstNumber)-Number(secondNumber);
let multiply = Number(firstNumber)*Number(secondNumber);
let division = Number(firstNumber)/Number(secondNumber);

let resultPlus = firstNumber.concat(' + ', secondNumber, ' = ', plus)
let resultMinus = firstNumber.concat(' - ', secondNumber, ' = ', minus)
let resultMultiply = firstNumber.concat(' * ', secondNumber, ' = ', multiply)
let resultDivision = firstNumber.concat(' / ', secondNumber, ' = ', division)

alert (resultPlus.concat( "\n", resultMinus, "\n", resultMultiply + "\n", resultDivision ));
