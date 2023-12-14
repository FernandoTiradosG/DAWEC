// Definición de la interfaz Tarea
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
    importante: boolean;
}

// Array para almacenar las tareas
const listaTareas: Tarea[] = [];

// Función para añadir una tarea a la lista
function agregarTarea(titulo: string) {
    const nuevaTarea: Tarea = {
        id: listaTareas.length + 1,
        titulo,
        completada: false,
        importante: false
    };
    listaTareas.push(nuevaTarea);
}

// Función para eliminar una tarea de la lista por ID
function eliminarTarea(id: number) {
    const index = listaTareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
        listaTareas.splice(index, 1);
    }
}

// Función para marcar una tarea como completada por ID
function marcarTareaCompletada(id: number) {
    const tarea = listaTareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada; // Cambiar el estado al contrario del actual
    }
}

// Función para marcar una tarea como importante por ID
function marcarTareaImportante(id: number) {
    const tarea = listaTareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.importante = true;
    }
}

// Array para almacenar las tareas importantes
const listaTareasImportantes: Tarea[] = [];

// Función para eliminar una tarea importante por ID
function eliminarTareaImportante(id: number) {
    const tarea = listaTareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.importante = false;
        mostrarTareasImportantes();
    }
}

// Función para mostrar las tareas en la consola
function mostrarTareas() {
    console.log("Tareas:");
    listaTareas.forEach(tarea => {
        console.log(`ID: ${tarea.id}, Título: ${tarea.titulo}, Completada: ${tarea.completada ? 'Sí' : 'No'}, Importante: ${tarea.importante ? 'Sí' : 'No'}`);
    });
}

// Script del HTML convertido a TypeScript
const formularioTarea = document.getElementById("formularioTarea") as HTMLFormElement;
const inputTarea = document.getElementById("inputTarea") as HTMLInputElement;
const listaTareasElement = document.getElementById("listaTareas");

formularioTarea.addEventListener("submit", (event) => {
    event.preventDefault();
    const tareaTitulo = inputTarea.value;
    agregarTarea(tareaTitulo);
    inputTarea.value = "";
    actualizarListaTareas();
});

function actualizarListaTareas() {
    listaTareasElement.innerHTML = "";
    listaTareas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.titulo;

        const botonImportante = document.createElement("button");
        botonImportante.textContent = "Importante";
        botonImportante.addEventListener("click", () => {
            marcarTareaImportante(tarea.id);
            actualizarListaTareas();
        });
        // Añadir o quitar clase según el estado de "importante"
        if (tarea.importante) {
            botonImportante.classList.add("importante");
        } else {
            botonImportante.classList.remove("importante");
        }

        const botonCompletada = document.createElement("button");
        botonCompletada.textContent = "Completada";
        botonCompletada.addEventListener("click", () => {
            marcarTareaCompletada(tarea.id);
            actualizarListaTareas();
        });
        // Añadir o quitar clase según el estado de "completada"
        if (tarea.completada) {
            botonCompletada.classList.add("completada");
        } else {
            botonCompletada.classList.remove("completada");
        }

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
            eliminarTarea(tarea.id);
            actualizarListaTareas();
        });

        li.appendChild(botonImportante);
        li.appendChild(botonCompletada);
        li.appendChild(botonEliminar);

        listaTareasElement.appendChild(li);
    });
}

// Función para actualizar la lista de tareas importantes

const botonMostrarTodas = document.getElementById("mostrarTodas");
const botonMostrarImportantes = document.getElementById("mostrarImportantes");

botonMostrarTodas.addEventListener("click", () => {
    actualizarListaTareas();
});

botonMostrarImportantes.addEventListener("click", () => {
    mostrarTareasImportantes();
});

function mostrarTareasImportantes() {
    const tareasImportantes = listaTareas.filter(tarea => tarea.importante);
    listaTareasElement.innerHTML = "";
    tareasImportantes.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.titulo;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
            eliminarTareaImportante(tarea.id);
            mostrarTareasImportantes();
        });

        li.appendChild(botonEliminar);
        listaTareasElement.appendChild(li);
    });
}

actualizarListaTareas();