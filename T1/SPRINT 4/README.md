# Sprint 4

## :microscope: Analisis de Ejercicios

```Ejercicio 1: Información Básica del Pokémon
    - Realizar una petición a la PokeAPI para obtener información básica de un Pokémon por su nombre.
    - Mostrar el nombre, id, tipos, y una imagen del Pokémon.
    - Gestionar errores de manera adecuada si el Pokémon no existe.
    - Dos pruebas, una sin error probando dos búsquedas y otra con error.

Ejercicio 2: Comparativa de Pokémon
    - Obtener datos de dos Pokémon elegidos por el usuario.
    - Comparar sus estadísticas base (stats) y determinar cuál de ellos tiene mejores estadísticas generales.
    - Presentar los resultados en una tabla comparativa de fácil lectura.
    - Dos pruebas sin error.

Ejercicio 3: Evoluciones y Habilidades
    - Dado un Pokémon específico, buscar su cadena de evolución completa.
    - Listar cada una de las formas evolutivas y sus habilidades.
    - Incluir un botón que permita al usuario ver más detalles de cualquier habilidad (usando un modal o una nueva vista).
    - Dos pruebas, una con una cadena evolutiva y otra sin cadena evolutiva.

Pistas: pokemon/charmander -> pokemon-species/4/ -> evolution-chain/2/

Ejercicio 4: Explorador de Películas
    - Objetivo: Crear una aplicación web que permita a los usuarios explorar películas basándose en diferentes criterios como género. Usar la API The Movie DB (TMDB API)
    - Interfaz de Búsqueda: Desarrollar una interfaz de usuario donde los usuarios puedan ingresar palabras clave o seleccionar filtros para buscar películas por género.
    - Mostrar Resultados: Presentar los resultados de la búsqueda en un formato amigable para el usuario, mostrando detalles como el título de la película, año de lanzamiento, resumen y puntuación.
    - Paginación de Resultados: Implementar la paginación para los resultados para que los usuarios puedan navegar a través de múltiples páginas de resultados.
    - Dos pruebas, la primera, buscando una película, y en la segunda prueba, aplicar un filtro para que aparezca el reel relleno con paginación. (Estilo Netflix, Amazon Prime Video). Sólo un filtro a la vez.

Ejercicio 5: Películas favoritas
    - Objetivo: Añadir al ejercicio 4 que se puedan añadir/eliminar las película a una lista de favoritos.
    - Tres pruebas:
        * Prueba 1: Añadir 10 películas a favoritos dándole a la estrellita, comprobar que aparecen las 10 películas seleccionadas.
        * Prueba 2: Eliminar la tercera y quinta película (comprobar que ya no aparecen)
        * Pruebas 3: Eliminar todas las películas y comprobar que no aparecen.
```

Aquí necesitaremos recordar lo aprendido sobre Html y CSS, para poder interactuar con lo nuevo que vamos aprendiendo de JavaScript. Esto permitira comprobar lo que ChatGPT nos ofrezca en sus respuestas.

## :pencil2: Diseño de la solución

En este caso creamos los archivos que necesitamos, en este caso HTML, CSS y Javascript, y sobre los que vamos a trabajar. También comprobaremos las APIs que necesitaremos como son la PokeAPI y TMDB_API, ya que en la segunda necesitaremos hacernos un usuario para interactuar con ella.

## :key: Implementación de la solución

### Ejercicio 1: Información Básica del Pokémon

***JavaScript***

![alt text](/T1/SPRINT%204/Ejercicio1/Recursos/Javascript1_1.png "JavaScript 1")
![alt text](/T1/SPRINT%204/Ejercicio1/Recursos/Javascript1_2.png "JavaScript 2")

***Html***

![alt text](/T1/SPRINT%204/Ejercicio1/Recursos/html1_1.png "Html")

***CSS***

![alt text](/T1/SPRINT%204/Ejercicio1/Recursos/css1_1.png "CSS 1")
![alt text](/T1/SPRINT%204/Ejercicio1/Recursos/css1_2.png "CSS 2")
![alt text](/T1/SPRINT%204/Ejercicio1/Recursos/css1_3.png "CSS 3")
![alt text](/T1/SPRINT%204/Ejercicio1/Recursos/css1_4.png "CSS 4")

### Ejercicio 2: Comparativa de Pokémon

***JavaScript***

![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/javascript1_1.png "JavaScript 1")
![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/javascript1_2.png "JavaScript 2")
![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/javascript1_3.png "JavaScript 3")

***Html***

![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/html1_1.png "Html")

***CSS***

![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/css1_1.png "CSS 1")
![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/css1_2.png "CSS 2")
![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/css1_3.png "CSS 3")
![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/css1_4.png "CSS 4")
![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/css1_5.png "CSS 5")

### Ejercicio 3: Evoluciones y Habilidades

***JavaScript***

![alt text](/T1/SPRINT%204/Ejercicio3/Recursos/javascript1_1.png "JavaScript 1")
![alt text](/T1/SPRINT%204/Ejercicio3/Recursos/javascript1_2.png "JavaScript 2")
![alt text](/T1/SPRINT%204/Ejercicio3/Recursos/javascript1_3.png "JavaScript 3")

***Html***

![alt text](/T1/SPRINT%204/Ejercicio3/Recursos/html1_1.png "Html")

***CSS***

![alt text](/T1/SPRINT%204/Ejercicio3/Recursos/css1_1.png "CSS 1")
![alt text](/T1/SPRINT%204/Ejercicio3/Recursos/css1_2.png "CSS 2")
![alt text](/T1/SPRINT%204/Ejercicio3/Recursos/css1_3.png "CSS 3")

### Ejercicio 4 y 5: Explorador de Películas, Películas favoritas

Ya que el ejercicio 5 es como una extension del ejercicio 4 se ha trabajado con los mismos archivos.

Para la realización del ejercicio 5 tras oir el problema que tuvo el compañero Jesus de no poder hacerlo directamente con la API lo primero que realice fue guardar los favoritos en un array pero al ver que si actualizabas la pagina no se quedaban guardados se busco otra forma que si lo permitiera y se realizo a traves de localStorage.

***JavaScript***

![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/javascript1_1.png "JavaScript 1")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/javascript1_2.png "JavaScript 2")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/javascript1_3.png "JavaScript 3")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/javascript1_4.png "JavaScript 3")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/javascript1_5.png "JavaScript 3")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/javascript1_6.png "JavaScript 3")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/javascript1_7.png "JavaScript 3")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/javascript1_8.png "JavaScript 3")

***Html***

![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/html1_1.png "Html")

***CSS***

![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/css1_1.png "CSS 1")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/css1_2.png "CSS 2")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/css1_3.png "CSS 3")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/css1_4.png "CSS 4")
![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/css1_5.png "CSS 5")

## :ok_hand: Prueba

### Ejercicio 1: Información Básica del Pokémon

Prueba 1:

![alt text](/T1/SPRINT%204/Ejercicio1/Recursos/Pokemon1Prueba1.gif "Prueba 1")

Prueba 2: Error

![alt text](/T1/SPRINT%204/Ejercicio1/Recursos/Pokemon1Prueba2.gif "Prueba 2 Error")

### Ejercicio 2: Comparativa de Pokémon

Prueba 1:

![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/Pokemon2Prueba1.gif "Prueba 1")

Prueba 2:

![alt text](/T1/SPRINT%204/Ejercicio2/Recursos/Pokemon2Prueba2.gif "Prueba 2")

### Ejercicio 3: Evoluciones y Habilidades

Prueba 1:

![alt text](/T1/SPRINT%204/Ejercicio3/Recursos/Pokemon3Prueba1.gif "Prueba 1")

Prueba 2:

![alt text](/T1/SPRINT%204/Ejercicio3/Recursos/Pokemon3Prueba2.gif "Prueba 2")

### Ejercicio 4: Explorador de Películas

Prueba 1:

![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/Movie1Prueba1.gif "Prueba 1")

Prueba 2:

![alt text](/T1/SPRINT%204/Ejercicio4/Recursos/Movie1Prueba2.gif "Prueba 2")

### Ejercicio 5: Películas favoritas

Prueba 1:

![alt text](/T1/SPRINT%204/Ejercicio5/Recursos/Movie2Prueba1.gif "Prueba 1")

Prueba 2:

![alt text](/T1/SPRINT%204/Ejercicio5/Recursos/Movie2Prueba2.gif "Prueba 2")

Prueba 3:

![alt text](/T1/SPRINT%204/Ejercicio5/Recursos/Movie2Prueba3.gif "Prueba 3")
