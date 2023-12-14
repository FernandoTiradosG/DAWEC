function imprimirHolaMundo(): void {
    const mensaje = "Hola Mundo ";
    console.log(mensaje);

    // Mostrar en la pantalla del navegador
    const mensajeElement = document.getElementById("mensaje");
    if (mensajeElement) {
        mensajeElement.innerText = mensaje;
    } else {
        console.error("Elemento 'mensaje' no encontrado.");
    }
}

imprimirHolaMundo();