let numero = parseInt(prompt("ingresa un número hasta el que se quiera contar:"));

let resultadoDiv = document.getElementById('resultado');

for (let i = 1; i <= numero; i++) {
  console.log(i);  
  resultadoDiv.innerHTML += `${i} <br>`;
}
