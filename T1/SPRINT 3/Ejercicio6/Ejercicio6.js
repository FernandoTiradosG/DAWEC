const estudiantes = [
    { nombre: "Juan", ciudad: "Madrid", beca: false, edad: 21, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
    { nombre: "Ana", ciudad: "Barcelona", beca: true, edad: 20, calificaciones: { matematicas: 9, fisica: 6, historia: 8 } },
    { nombre: "Pedro", ciudad: "Madrid", beca: false, edad: 23, calificaciones: { matematicas: 4, fisica: 5, historia: 7 } },
    { nombre: "Maria", ciudad: "Sevilla", beca: true, edad: 19, calificaciones: { matematicas: 8, fisica: 7, historia: 9 } },
    { nombre: "Jose", ciudad: "Madrid", beca: false, edad: 22, calificaciones: { matematicas: 6, fisica: 7, historia: 5 } },
    { nombre: "Isabel", ciudad: "Valencia", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 8, historia: 7 } },
    { nombre: "David", ciudad: "Bilbao", beca: false, edad: 24, calificaciones: { matematicas: 7, fisica: 6, historia: 8 } },
    { nombre: "Laura", ciudad: "Barcelona", beca: true, edad: 19, calificaciones: { matematicas: 6, fisica: 8, historia: 7 } },
    { nombre: "Miguel", ciudad: "Sevilla", beca: false, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 8 } },
    { nombre: "Sara", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 6, fisica: 5, historia: 9 } },
    { nombre: "Daniela", ciudad: "Valencia", beca: false, edad: 22, calificaciones: { matematicas: 8, fisica: 9, historia: 6 } },
    { nombre: "Alberto", ciudad: "Bilbao", beca: true, edad: 23, calificaciones: { matematicas: 5, fisica: 8, historia: 6 } },
    { nombre: "Gabriel", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 8, fisica: 5, historia: 7 } },
    { nombre: "Carmen", ciudad: "Barcelona", beca: true, edad: 24, calificaciones: { matematicas: 9, fisica: 9, historia: 9 } },
    { nombre: "Roberto", ciudad: "Madrid", beca: false, edad: 20, calificaciones: { matematicas: 4, fisica: 5, historia: 5 } },
    { nombre: "Carolina", ciudad: "Valencia", beca: true, edad: 22, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
    { nombre: "Alejandro", ciudad: "Bilbao", beca: false, edad: 23, calificaciones: { matematicas: 9, fisica: 8, historia: 8 } },
    { nombre: "Lucia", ciudad: "Barcelona", beca: true, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 7 } },
    { nombre: "Ricardo", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 6, fisica: 5, historia: 6 } },
    { nombre: "Marina", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 9, historia: 8 } }
];

document.getElementById('boton1').addEventListener('click', mostrarMejoresNotas);
document.getElementById('boton2').addEventListener('click', mostrarAsignaturaPromedioMinimo);
document.getElementById('boton3').addEventListener('click', subirNotasBecados);
document.getElementById('boton4').addEventListener('click', mostrarEstudiantesPorCiudadYAsignatura);
document.getElementById('boton5').addEventListener('click', contarEstudiantesSinBecas);
document.getElementById('boton6').addEventListener('click', promedioEdadEstudiantesConBeca);
document.getElementById('boton7').addEventListener('click', mejoresPromedios);
document.getElementById('boton8').addEventListener('click', estudiantesAprobados);

//Boton 1
function mostrarMejoresNotas() {
    const asignaturaSeleccionada = document.getElementById('asignaturas').value;
    const mejoresNotas = obtenerMejoresNotas(asignaturaSeleccionada);

    document.getElementById('info-text').value = mejoresNotas;
}

function obtenerMejoresNotas(asignatura) {
    const notas = estudiantes.map(estudiante => estudiante.calificaciones[asignatura]);
    const maxNota = Math.max(...notas);

    const mejoresNotas = estudiantes.filter(estudiante => estudiante.calificaciones[asignatura] === maxNota)
        .map(estudiante => `${estudiante.nombre}: ${maxNota}`);

    return mejoresNotas.join('\n');
}

//Boton 2
function mostrarAsignaturaPromedioMinimo() {
    const asignaturaPromedioMinimo = obtenerAsignaturaPromedioMinimo();

    document.getElementById('info-text').value = `La asignatura con el promedio más bajo es: ${asignaturaPromedioMinimo}`;
}

function obtenerAsignaturaPromedioMinimo() {
    const promediosPorAsignatura = {};

    // Calcula los promedios por asignatura
    estudiantes.forEach(estudiante => {
        Object.keys(estudiante.calificaciones).forEach(asignatura => {
            if (!promediosPorAsignatura[asignatura]) {
                promediosPorAsignatura[asignatura] = { total: 0, count: 0 };
            }
            promediosPorAsignatura[asignatura].total += estudiante.calificaciones[asignatura];
            promediosPorAsignatura[asignatura].count++;
        });
    });

    // Calcula los promedios
    for (let asignatura in promediosPorAsignatura) {
        promediosPorAsignatura[asignatura].promedio = promediosPorAsignatura[asignatura].total / promediosPorAsignatura[asignatura].count;
    }

    // Encuentra la asignatura con el promedio mínimo
    let asignaturaMinimo;
    let promedioMinimo = Infinity;
    for (let asignatura in promediosPorAsignatura) {
        if (promediosPorAsignatura[asignatura].promedio < promedioMinimo) {
            asignaturaMinimo = asignatura;
            promedioMinimo = promediosPorAsignatura[asignatura].promedio;
        }
    }

    return asignaturaMinimo;
}

//Boton 3
function subirNotasBecados() {
    const becados = estudiantes.filter(estudiante => estudiante.beca);

    const infoTexto = becados.map(estudiante => {
        const asignaturas = Object.keys(estudiante.calificaciones);
        const nuevasCalificaciones = {};

        asignaturas.forEach(asignatura => {
            const notaInicial = estudiante.calificaciones[asignatura];
            let nuevaNota = notaInicial + (notaInicial*0.1); // Aumenta un 10%

            if (nuevaNota > notaInicial + 1) {
                nuevaNota = notaInicial + 1; // No puede superar un aumento de 1 punto
            }

            nuevasCalificaciones[asignatura] = nuevaNota;
        });

        return `${estudiante.nombre}:\nAntiguas Notas:\n${formatoNotas(estudiante.calificaciones)}\n\nNuevas Notas:\n${formatoNotas(nuevasCalificaciones)}\n`;
    }).join('\n');

    document.getElementById('info-text').value = `Estudiantes becados con notas actualizadas:\n${infoTexto}`;
}

function formatoNotas(calificaciones) {
    return Object.keys(calificaciones).map(asignatura => `${asignatura}: ${calificaciones[asignatura]}`).join('\n');
}

//Boton 4

function mostrarEstudiantesPorCiudadYAsignatura() {
    const ciudad = prompt('Por favor, ingrese la ciudad:');
    const asignatura = document.getElementById('asignaturas-boton4').value;

    const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.ciudad === ciudad && estudiante.calificaciones[asignatura] !== undefined);

    if (estudiantesFiltrados.length > 0) {
        const listaEstudiantes = estudiantesFiltrados.map(estudiante => `${estudiante.nombre}: ${estudiante.calificaciones[asignatura]}`).join('\n');
        document.getElementById('info-text').value = `Estudiantes de ${ciudad} con calificación en ${asignatura}:\n${listaEstudiantes}`;
    } else {
        document.getElementById('info-text').value = `No hay estudiantes de ${ciudad} con calificación en ${asignatura}`;
    }
}

//Boton 5
function contarEstudiantesSinBecas() {
    let continuar = true;

    while (continuar) {
        const ciudadesDisponibles = estudiantes.map(estudiante => estudiante.ciudad).filter((ciudad, index, self) => self.indexOf(ciudad) === index);
        const ciudad = prompt(`Por favor, ingrese la ciudad. Ciudades disponibles: ${ciudadesDisponibles.join(', ')}`);

        if (!ciudadesDisponibles.includes(ciudad)) {
            alert(`De esa ciudad no hay estudiantes. Ciudades disponibles: ${ciudadesDisponibles.join(', ')}`);
        } else {
            const estudiantesEnCiudad = estudiantes.filter(estudiante => estudiante.ciudad === ciudad);
            const estudiantesSinBecas = estudiantesEnCiudad.filter(estudiante => !estudiante.beca);

            document.getElementById('info-text').value = `En ${ciudad} hay ${estudiantesSinBecas.length} estudiantes sin becas.`;
            continuar = false; // Esto detendrá el bucle y permitirá salir de la función
        }
    }
}

//Boton 6
function promedioEdadEstudiantesConBeca() {
    const estudiantesConBeca = estudiantes.filter(estudiante => estudiante.beca);
    const totalEdades = estudiantesConBeca.reduce((sum, estudiante) => sum + estudiante.edad, 0);
    const promedio = Math.round(totalEdades / estudiantesConBeca.length);

    document.getElementById('info-text').value = `El promedio de edad de estudiantes con beca es: ${promedio} años`;
}

//Boton 7
function mejoresPromedios() {
    const promedios = estudiantes.map(estudiante => {
        const notas = Object.values(estudiante.calificaciones);
        const promedio = (notas.reduce((total, nota) => total + nota, 0) / notas.length);

        // Verificar si el promedio tiene decimales
        const promedioFormateado = promedio % 1 === 0 ? Math.round(promedio) : promedio.toFixed(2);

        return { nombre: estudiante.nombre, promedio: promedioFormateado };
    });

    const mejoresDos = promedios.sort((a, b) => b.promedio - a.promedio).slice(0, 2);

    const infoTexto = mejoresDos.map(estudiante => `${estudiante.nombre}: ${estudiante.promedio}`).join('\n');
    document.getElementById('info-text').value = `Los dos estudiantes con el mayor promedio son:\n${infoTexto}`;
}

//Boton 8
function estudiantesAprobados() {
    const estudiantesAprobados = estudiantes.filter(estudiante => {
        const calificaciones = Object.values(estudiante.calificaciones);
        return calificaciones.every(calificacion => calificacion >= 5);
    });

    const nombresEstudiantesAprobados = estudiantesAprobados.map(estudiante => estudiante.nombre);

    document.getElementById('info-text').value = `Estudiantes con todas las asignaturas aprobadas:\n${nombresEstudiantesAprobados.join(', ')}`;
}