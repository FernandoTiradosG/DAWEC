function obtenerPropiedades(objeto, propiedades) {
    const nuevoObjeto = {};

    propiedades.forEach(propiedad => {
        if (objeto.hasOwnProperty(propiedad)) {
            nuevoObjeto[propiedad] = objeto[propiedad];
        }
    });

    return nuevoObjeto;
}

const entrada = {a:1, b:2, c:3, d:4};
const props = ["a", "c"];

const resultado = obtenerPropiedades(entrada, props);

console.log(resultado);