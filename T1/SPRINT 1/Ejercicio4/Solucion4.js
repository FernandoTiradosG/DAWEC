let numero = parseInt(prompt("Por favor, ingresa un número:"));
while (numero !== 10) {
  if (numero > 10) {
    alert("El número es mayor que 10.");
  } else if (numero < 10) {
    alert("El número es menor que 10.");
  }
  numero = parseInt(prompt("vuelve a intentarlo"));
}
alert("El número es exactamente 10.");
