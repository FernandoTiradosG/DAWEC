function transponerMatriz(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
  
    const matrizTranspuesta = [];
  
    for (let i = 0; i < columnas; i++) {
      matrizTranspuesta.push([]);
      for (let j = 0; j < filas; j++) {
        matrizTranspuesta[i][j] = matriz[j][i];
      }
    }
  
    return matrizTranspuesta;
}

const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrizTranspuesta = transponerMatriz(matrizOriginal);

console.log(matrizTranspuesta);

function transponerMatrizIrregular(matriz) {
    const filas = matriz.length;
    const columnas = Math.max(...matriz.map(arr => arr.length));
  
    const matrizTranspuesta = [];
  
    for (let i = 0; i < columnas; i++) {
      matrizTranspuesta.push([]);
  
      for (let j = 0; j < filas; j++) {
        if (matriz[j][i] !== undefined) {
          matrizTranspuesta[i][j] = matriz[j][i];
        } else {
            matrizTranspuesta[i][j] = null;
        }
      }
    }
  
    return matrizTranspuesta;
}


const matrizOriginal2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10]
];
  
const matrizTranspuesta2 = transponerMatrizIrregular(matrizOriginal2);

console.log(matrizTranspuesta2);