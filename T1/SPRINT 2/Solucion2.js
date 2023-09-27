const number1 = 10;
const number2 = 2;

let suma = number1 + number2;
let resta = number1 - number2;
let multiplicacion = number1 * number2;
let division = number1 / number2;
let modulo = number1 % number2;
let exponencial = number1 ** number2;

console.log(`Suma: ${number1} + ${number2} = ${suma}\n
Resta: ${number1} - ${number2} = ${resta}\n
Multiplicación: ${number1} * ${number2} = ${multiplicacion}\n
División: ${number1} / ${number2} = ${division}\n
Modulo: ${number1} % ${number2} = ${modulo}\n
Exponencial: ${number1} ** ${number2} = ${exponencial}`);

let resultadoDiv = document.getElementById('resultado2');

resultadoDiv.innerHTML = `Suma: ${number1} + ${number2} = ${suma}<br>
Resta: ${number1} - ${number2} = ${resta}<br>
Multiplicación: ${number1} * ${number2} = ${multiplicacion}<br>
División: ${number1} / ${number2} = ${division}<br>
Modulo: ${number1} % ${number2} = ${modulo}<br>
Exponencial: ${number1} ** ${number2} = ${exponencial}`;
