function combinarObjetos(objeto1, objeto2) {
    const nuevoObjeto = {};
  
    // Copiamos las propiedades del primer objeto
    for (let propiedad in objeto1) {
      nuevoObjeto[propiedad] = objeto1[propiedad];
    }
  
    // Si una propiedad está en ambos objetos, el valor del segundo objeto prevalece
    for (let propiedad in objeto2) {
      nuevoObjeto[propiedad] = objeto2[propiedad];
    }
  
    return nuevoObjeto;
}

const inicial = {a: 1, b: 2, c: 3, d: 4};
const sumar = {b: 8, z: 3};

const propietarioA = {Nombre: "Pepe", Edad: 21, Profesion: "Estudiante", Ciudad: "Sevilla"};
const actualizacion = {Profesion: "Programador", Ciudad: "Madrid"};

console.log(combinarObjetos(inicial, sumar));
console.log(combinarObjetos(propietarioA, actualizacion));
