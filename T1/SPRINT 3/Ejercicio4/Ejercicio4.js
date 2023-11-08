function encontrarStringMasLargo(arr) {
    let stringMasLargo = '';
    let longitud = 0;
  
    arr.forEach(function(string) {
      if (string.length > longitud) {
        longitud = string.length;
        stringMasLargo = string;
      }
    });
  
    return {
      string: stringMasLargo,
      longitud: longitud
    };
}

const strings = ['manzana', 'banana', 'naranja', 'sandía', 'kiwi'];

const resultado = encontrarStringMasLargo(strings);

console.log(`El string más largo es "${resultado.string}" con una longitud de ${resultado.longitud} caracteres.`);