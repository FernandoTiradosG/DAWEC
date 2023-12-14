// Definición de la interfaz Usuario
interface Usuario {
    nombre: string;
    edad: number;
    correoElectronico: string;
}

// Función para obtener la descripción del usuario
function obtenerDescripcionUsuario(usuario: Usuario): string {
    return `Hola! Soy el usuario ${usuario.nombre}, tengo ${usuario.edad} años y mi correo electrónico es ${usuario.correoElectronico}`;
}

// Creación de objetos de usuario
const usuarios: Usuario[] = [
    {
        nombre: "Juan",
        edad: 30,
        correoElectronico: "juan@example.com"
    },
    {
        nombre: "María",
        edad: 25,
        correoElectronico: "maria@example.com"
    },
    {
        nombre: "Carlos",
        edad: 40,
        correoElectronico: "carlos@example.com"
    },
    {
        nombre: "Oscar",
        edad: 32,
        correoElectronico: "oscar@example.com"
    },
    {
        nombre: "Pablo",
        edad: 15,
        correoElectronico: "pablo@example.com"
    }
];

// Función para manejar la selección de usuarios en HTML
function mostrarUsuarioSeleccionado() {
    const selectElement = document.getElementById("usuarios") as HTMLSelectElement;
    const resultadoElement = document.getElementById("resultado");

    if (selectElement && resultadoElement) {
        const selectedIndex = selectElement.selectedIndex;
        const usuarioSeleccionado = usuarios[selectedIndex];

        const mensaje = obtenerDescripcionUsuario(usuarioSeleccionado);
        resultadoElement.innerText = mensaje;
        console.log(mensaje); // Mostrar en consola
    }
}

// Crear opciones del select dinámicamente
const selectElement = document.getElementById("usuarios") as HTMLSelectElement;
if (selectElement) {
    usuarios.forEach((usuario, index) => {
        const option = document.createElement("option");
        option.value = index.toString();
        option.textContent = usuario.nombre;
        selectElement.appendChild(option);
    });

    selectElement.addEventListener("change", mostrarUsuarioSeleccionado);
}