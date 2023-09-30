let numero = 5
let texto = "Hola, holita"
let booleano = true
let objeto = {}
let nulo = null
let indefinido

console.log(`${numero}, ${texto}, ${booleano}, ${objeto}, ${nulo}, ${indefinido}`)
console.log(typeof(numero), typeof(texto), typeof(booleano), typeof(objeto), typeof(nulo), typeof(indefinido))

let resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = `${numero}, ${texto}, ${booleano}, ${JSON.stringify(objeto)}, ${nulo}, ${indefinido}`;
resultadoDiv.innerHTML += `<br>`;
resultadoDiv.innerHTML += `${typeof(numero)}, ${typeof(texto)}, ${typeof(booleano)}, ${typeof(objeto)}, ${typeof(nulo)}, ${typeof(indefinido)}`;