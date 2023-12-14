"use strict";
function generarSaludo(nombre, edad) {
    let mensaje = "";
    if (edad < 0) {
        mensaje = "Edad inválida";
    }
    else if (edad < 18) {
        mensaje = `Hola ${nombre} y tienes ${edad}, eres menor de edad`;
    }
    else if (edad >= 18 && edad <= 60) {
        mensaje = `Hola ${nombre} y tienes ${edad}, eres mayor de edad`;
    }
    else {
        mensaje = `Hola ${nombre} y tienes ${edad}, eres un adulto mayor`;
    }
    return mensaje;
}
function mostrarSaludo(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    const nombreInput = document.getElementById("nombre");
    const edadInput = document.getElementById("edad");
    const resultadoElement = document.getElementById("resultado");
    if (nombreInput && edadInput && resultadoElement) {
        const nombre = nombreInput.value;
        const edad = parseInt(edadInput.value);
        const saludo = generarSaludo(nombre, edad);
        resultadoElement.innerText = saludo;
        console.log(saludo); // Mostrar en la consola
    }
}
const form = document.getElementById("saludoForm");
if (form) {
    form.addEventListener("submit", mostrarSaludo);
}
