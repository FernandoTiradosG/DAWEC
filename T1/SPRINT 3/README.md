# Sprint 3

## :microscope: Analisis de Ejercicios
```
Ejercicio 1: Filtrado de propiedades de un objeto
Dado un objeto y una lista de propiedades, escribe una función que devuelva un nuevo objeto solo con las propiedades indicadas.
  Ejemplo:
  - Entrada:
    var entrada = {a: 1, b: 2, c: 3, d: 4};
    var props = ["a", "c"];
  - Salida: 
    {a: 1, c: 3}


Ejercicio 2: Transposición de matrices
- Dada una matriz, escribe una función que devuelva la transposición de esa matriz.
  Ejemplo:
  - Entrada:
    var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
  - Salida:
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]


Ejercicio 3: Fusión de objetos sin duplicados
Dado dos objetos, escribe una función que los fusiona en uno solo. Si hay propiedades repetidas, conserva el valor del segundo objeto.
  Ejemplo:
  - Entrada:
    PEPE = {a: 1, b: 2, c: 3, d: 4}
    MANUEL = {b: 2, z: 3}
  - Salida: 
    PEPEMANUEL = {a: 1, b: 2, c: 3, d: 4, z: 3}

Ejercicio 4: Cadena más larga en un array
Escribe una función que, dado un array de cadenas, devuelva la cadena más larga y su longitud.

Ejercicio 5: Ordenamiento interactivo de tabla de personas
Dada una tabla de personas con las columnas "Nombre", "Edad", "DNI", "Tiene/No tiene hijos" y "Fecha de nacimiento", escribe una función que permita ordenar la tabla por cualquiera de esas columnas. La columna "Fecha de nacimiento" debe tener el formato DD/MM/AAAA.
  Ejemplo de entrada:
    var tabla = [
  {
    Nombre: "Ana",
    Edad: 25,
    DNI: "45678912B",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "12/05/1998"
  }]

Puntos a tener en cuenta:
- Se debe generar la tabla en HTML a partir del array de ejemplo pero con 20 filas en total (hay que añadir 15 más al ejemplo)
- Al hacer un primer click sobre la clave de la columna, por ejemplo, Nombre, las filas se ordenaran de manera descendente (Z-A).
- Al hacer un segundo click sobre la clave de la columna, por ejemplo, Nombre, las filas se ordenaran de manera ascendente (A-Z).
- Debe mantener la relación de las filas, es decir, no se ordena sólo la columna, sino la fila completa.

Ejercicio 6: Análisis y Transformación Avanzada de Datos
Dado un conjunto de datos en forma de array con información sobre estudiantes, sus calificaciones en diferentes asignaturas y detalles adicionales, implementa funciones para analizar, filtrar y transformar estos datos.
  - Parte 1: Estudiantes Destacados por Asignatura:
    Crea una función que, dada una asignatura, retorne los 3 estudiantes con las mejores notas en esa asignatura.
  - Parte 2: Asignatura con Menor Rendimiento:
    Diseña una función que identifique la asignatura en la que los estudiantes tienen, en promedio, la menor calificación.
  - Parte 3: Mejora de Notas para Estudiantes con Beca:
    Escribe una función que aumente todas las notas de los estudiantes con beca en un 10% (sin superar el máximo de 10).
  - Parte 4: Filtrado por Ciudad y Asignatura:
    Crea una función que, dada una ciudad y una asignatura, retorne la lista de estudiantes de esa ciudad ordenados descendentemente por la nota de la asignatura dada.
  - Parte 5: Estudiantes Sin Beca por Ciudad:
    Escribe una función que, dada una ciudad, retorne la cantidad de estudiantes que no tienen beca en esa ciudad.
  - Parte 6: Promedio de Edad de Estudiantes con Beca:
    Diseña una función que calcule el promedio de edad de los estudiantes que tienen beca.
  - Parte 7: Mejores Estudiantes en Total:
    Crea una función que devuelva un array con los 2 estudiantes que tengan el mayor promedio general entre todas las asignaturas.
  - Parte 8: Estudiantes con Todas las Materias Aprobadas:
    Diseña una función que retorne un array con los nombres de los estudiantes que hayan aprobado todas las materias (considera aprobado con una calificación mayor o igual a 
    5).
```
Aquí necesitaremos recordar lo aprendido sobre Html y CSS, para poder interactuar con lo que vamos aprendiendo de JavaScript. Esto permitira comprobar lo que ChatGPT nos ofrezca en sus respuestas.

## :pencil2: Diseño de la solución
En este caso crearemos primero los archivos necesarios para cada caso, pero después no todos se comprobarán de la misma forma ya que los cuatro primeros se podrán comprobar simplemente con la consola del inspeccionador del navegador, mientras que los dos últimos necesitaran su interacción en HTML.

## :key: Implementación de la solución
### Ejercicio 1: Filtrado de propiedades de un objeto
Creamos el archivo JavaScript con la solución incluida:

***JavaScript***
![alt text](/T1/SPRINT%203/Ejercicio1/Recursos/Solucion1.png "JavaScript")

### Ejercicio 2: Transposición de matrices
Creamos el archivo JavaScript con la solución incluida:

***JavaScript Basico***
Esta solución es para matrices simetricas.
![alt text](/T1/SPRINT%203/Ejercicio2/Recursos/Solucion2_simetrica.png "JavaScript")

***JavaScript Irregular***
Esta solución es para matrices asimetricas.
![alt text](/T1/SPRINT%203/Ejercicio2/Recursos/Solucion2_asimetrica.png "JavaScript")

### Ejercicio 3: Fusión de objetos sin duplicados
Creamos el archivo JavaScript con la solución incluida:

***JavaScript***
![alt text](/T1/SPRINT%203/Ejercicio3/Recursos/Solucion3.png "JavaScript")

### Ejercicio 4: Cadena más larga en un array
Creamos el archivo JavaScript con la solución incluida:

***JavaScript***
![alt text](/T1/SPRINT%203/Ejercicio4/Recursos/Solucion4.png "JavaScript")

### Ejercicio 5: Ordenamiento interactivo de tabla de personas
Creamos los tres archivos:

***Html***
Donde incorporar la tabla y le damos forma.
![alt text](/T1/SPRINT%203/Ejercicio5/Recursos/html5.png "Html")

***CSS***
Con el que le damos un poco de vistosidad.
![alt text](/T1/SPRINT%203/Ejercicio5/Recursos/css5.png "CSS")

***JavaScript***
![alt text](/T1/SPRINT%203/Ejercicio5/Recursos/JavaScript5_1.png "JavaScript parte 1")
![alt text](/T1/SPRINT%203/Ejercicio5/Recursos/JavaScript5_2.png "JavaScript parte 2")

### Ejercicio 6: Análisis y Transformación Avanzada de Datos
Creamos los tres archivos:

***Html***
Se crean los botones y para nuestro caso los seleccionadores de las asignaturas que necesitan dos de los botones.
![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/Html6.png "Html")

***CSS***
Con el que le damos un poco de vistosidad.
![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/CSS6_1.png "CSS parte 1")
![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/CSS6_2.png "CSS parte 2")

***JavaScript***
Mostramos el array con los datos con los que se trabajará.
![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/JavaScript6_0.png "JavaScript recurso y llamadas")

  ##### Botón 1
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/JavaScript6_1.png "JavaScript recurso y llamadas")

  ##### Botón 2
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/JavaScript6_2.png "JavaScript recurso y llamadas")

  ##### Botón 3
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/JavaScript6_3.png "JavaScript recurso y llamadas")

  ##### Botón 4
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/JavaScript6_4.png "JavaScript recurso y llamadas")

  ##### Botón 5
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/JavaScript6_5.png "JavaScript recurso y llamadas")

  ##### Botón 6
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/JavaScript6_6.png "JavaScript recurso y llamadas")

  ##### Botón 7
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/JavaScript6_7.png "JavaScript recurso y llamadas")

  ##### Botón 8
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/JavaScript6_8.png "JavaScript recurso y llamadas")

## :ok_hand: Prueba
### [Plan de pruebas](https://github.com/FernandoTiradosG/DAWEC/blob/main/T1/SPRINT%202/RecursosGenerales/Test_Plan_Script3.xlsx)
![alt text](/T1/SPRINT%203/RecursosGenerales/Test_de_Pruebas_1.png "PruebaTest1")
![alt text](/T1/SPRINT%203/RecursosGenerales/Test_de_Pruebas_2.png "PruebaTest2")
![alt text](/T1/SPRINT%203/RecursosGenerales/Test_de_Pruebas_3.png "PruebaTest3")
![alt text](/T1/SPRINT%203/RecursosGenerales/Test_de_Pruebas_4.png "PruebaTest4")

### Ejercicio 1: Filtrado de propiedades de un objeto
![alt text](/T1/SPRINT%203/Ejercicio1/Recursos/Prueba1.png "Prueba 1")

### Ejercicio 2: Transposición de matrices
![alt text](/T1/SPRINT%203/Ejercicio2/Recursos/Prueba2.png "Prueba 2")

### Ejercicio 3: Fusión de objetos sin duplicados
![alt text](/T1/SPRINT%203/Ejercicio3/Recursos/Prueba3.png "Prueba 3")

### Ejercicio 4: Cadena más larga en un array
![alt text](/T1/SPRINT%203/Ejercicio4/Recursos/Prueba4.png "Prueba 4")

### Ejercicio 5: Ordenamiento interactivo de tabla de personas
Al pulsar en cada cabecera se ordenara de forma ascendente (A-Z) y después se realiza un segundo click en la misma cabecera que antes y el orden se invierte.
![alt text](/T1/SPRINT%203/Ejercicio5/Recursos/Prueba5.gif "Prueba 5")

### Ejercicio 6: Análisis y Transformación Avanzada de Datos
##### Botón 1
Primero se elige la asignatura de la que se desea la información en este caso "Física" y después se hace click en el botón.
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/Boton1.gif "Botón 1")

  ##### Botón 2
Se pulsa el botón para obtener la información que indica.
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/Boton2.gif "Botón 2")

  ##### Botón 3
Se pulsa el botón para obtener la información que indica.
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/Boton3.gif "Botón 3")

  ##### Botón 4
Primero se elige la asignatura de la que se desea la información en este caso "Física" y después se hace click en el botón y aparece una alerta donde se debe indicar una ciudad. Terminamos pulsando Aceptar y obtenemos la información.
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/Boton4.gif "Botón 4")

  ##### Botón 5
Se hace click en el botón y aparece una alerta donde se debe indicar una ciudad. Terminamos pulsando Aceptar y obtenemos la información.
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/Boton5.gif "Botón 5")

  ##### Botón 6
Se pulsa el botón para obtener la información que indica.
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/Boton6.gif "Botón 6")

  ##### Botón 7
Se pulsa el botón para obtener la información que indica.
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/Boton7.gif "Botón 7")

  ##### Botón 8
Se pulsa el botón para obtener la información que indica.
  ![alt text](/T1/SPRINT%203/Ejercicio6/Recursos/Boton8.gif "Botón 8")