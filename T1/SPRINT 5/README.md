# Sprint 5

## :microscope: Analisis de Ejercicios

```Ejercicio 1: "Hola Mundo" en TypeScript
  - Objetivo: Crear un programa simple que imprima "Hola Mundo" en la consola.
  - Tareas:
      + Instalar TypeScript y configurar el entorno de desarrollo.
      + Crear un archivo holaMundo.ts.
      + Escribir una función que imprima "Hola Mundo".
      + Transpilar el archivo TypeScript a JavaScript y ejecutarlo.

  - Prueba: Hacer que ponga “Hola Mundo!”, ver que transpila e imprime “Hola Mundo!”. Quitar la exclamación “Hola Mundo”, ver que transpila e imprime “Hola Mundo”.

Ejercicio 2: Función con Tipos Básicos con Typescript
  - Objetivo: Escribir una función que acepte un nombre (string) y una edad (number) y devuelva un saludo personalizado.
  - Tareas:
      + Crear una función saludar que tome dos parámetros: nombre y edad.
      + La función debe retornar un saludo que incluya ambos datos.
      + Probar la función con diferentes nombres y edades.

  - Prueba: Hacer que se pida introducir un nombre y una edad, tras esto, tendría que salir un texto que indique “Hola! mi nombre es {{nombre}} y tengo {{edad}} años”.

Ejercicio 3: Uso de Interfaces con Typescript
  - Objetivo: Crear una interfaz para un objeto "Usuario" y utilizarla para crear un usuario.
  - Tareas:
    + Definir una interfaz Usuario con propiedades como nombre, edad y correo electrónico.
    + Crear una función que acepte un objeto Usuario y devuelva una descripción del usuario.
    + Crear varios objetos de prueba y pasarlos a la función.

  - Prueba: Instanciar un array de 5 Usuarios e imprimir por consola la frase “Hola! soy el usuario {{nombre}}, tengo {{edad}} años y mi correo electrónico es {{correo electrónico}}” para cada usuario.

Ejercicio 4: Manipulación de Arrays con Typescript
  - Objetivo: Crear una aplicación simple que maneje una lista de tareas (to-do list) usando arrays en TypeScript.
  - Tareas:
    + Crear un array para almacenar tareas, cada una siendo un objeto con propiedades como id, titulo, y completada.
    + Implementar funciones para añadir, eliminar y marcar tareas como completadas.
    + Crear una función que muestre las tareas en la consola.
  
  - Prueba: Hay que realizar una prueba donde se realice lo mismo que en el vídeo:
    + Añadir tarea a la lista de tareas
    + Borrar tarea de la lista de tareas
    + Añadir una tarea nueva a la lista
    + Marcar esa tarea como “Importante”
    + Ver que aparece en la lista de “Importante” y en la de tareas normal

Ejercicio 5: Crear una Pokedex con PokeAPI con Typescript
  - Objetivo: Construir una aplicación en TypeScript que utilice la PokeAPI para mostrar información de Pokémon.
  - Tareas:
    + Estudiar la documentación de la PokeAPI para entender cómo obtener datos de Pokémon.
    + Crear una interfaz de usuario interactiva utilizando HTML/CSS.
    + Implementar un campo de búsqueda donde los usuarios puedan escribir el nombre o ID de un Pokémon y obtener resultados en tiempo real.
    + Diseñar una visualización atractiva de la información del Pokémon, incluyendo imágenes, tipos, estadísticas básicas, movimientos, y evoluciones.
    + Manejar posibles errores, como búsquedas de Pokémon que no existen.

  - Prueba: Se tiene una visualización atractiva de la información del Pokémon, incluyendo imágenes, tipos, estadísticas básicas, movimientos, y evoluciones. Probar que a demás de la información, al poner el nombre de un pokemon en el buscador y este sea incorrecto (PEPE), pues aparece una pequeña animación en formato de “warning” de que ese pokemon no existe
```

Aquí necesitaremos recordar lo aprendido sobre Html y CSS, para poder interactuar con lo nuevo que vamos aprendiendo de Typescript y por consiguiente como se tratan despues los JavaScript que surgen de compilar los Typescript. Esto permitira comprobar lo que ChatGPT nos ofrezca en sus respuestas.

¿Qué diferencias existen entre Javascript y Typescript?

| Característica              | JavaScript                                   | TypeScript                                       |
|-----------------------------|----------------------------------------------|--------------------------------------------------|
| **Tipado**                  | No tiene tipado estático.                    | Posee tipado estático opcional.                  |
| **Compilación**             | No requiere compilación.                     | Necesita ser compilado a JavaScript.              |
| **Extensiones de archivo**  | `.js`                                        | `.ts`                                            |
| **Errores de tiempo de ejecución** | Puede tener errores de tipo en tiempo de ejecución. | Atrapa errores de tipo en tiempo de compilación. |
| **Herencia**                | Usa prototipos para la herencia.             | Ofrece soporte para clases y herencia.           |
| **Herramientas de desarrollo** | Menos herramientas de ayuda durante el desarrollo. | Ofrece mejor soporte de herramientas y autocompletado. |
| **Popularidad**             | Ampliamente utilizado en la web.             | Cada vez más popular, especialmente en proyectos grandes. |
| **Comunidad**               | Gran comunidad de desarrolladores.            | Comunidad en crecimiento y activa.               |
| **Conclusión**              | Ampliamente usado pero con menos soporte para tipos y desarrollo escalable. | Mayor soporte para tipos y desarrollo más escalable en proyectos grandes. |

¿Cómo configurar su transpilación automática en cada uno de vuestros equipos con nodeJS?

1. Configuración en tsconfig.json:

Para empezar se modifica tu archivo tsconfig.json para reflejar la estructura deseada de carpetas de entrada y salida. Añade o modifica la propiedad outDir para especificar la carpeta de salida y utiliza la propiedad rootDir para indicar la carpeta de entrada. Si no existe, puedes agregarla así:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist", // Carpeta de salida para los archivos .js
    "rootDir": "./src" // Carpeta de entrada para los archivos .ts
  }
}
```

2. Configuración del script watch en package.json:

En tu package.json, configura el script watch para ejecutar el compilador TypeScript en modo de observación (-w) y compilar los archivos con las nuevas rutas definidas en tsconfig.json:

```json
"scripts": {
  "watch": "tsc -w -p tsconfig.json"
}
```

Esto asegura que el compilador TypeScript esté observando los cambios en los archivos .ts dentro de la carpeta de entrada (rootDir) y guarde los archivos compilados en la carpeta de salida (outDir).

3. Estructura del proyecto:

Asegúrate de tener la estructura de carpetas como se ha especificado en tsconfig.json:

proyecto/
│
├── TS/
│   ├── archivo1.ts
│   └── archivo2.ts
│
├── JS/ (se creará automáticamente)
│   ├── archivo1.js
│   └── archivo2.js
│
├── tsconfig.json
└── package.json

4. Ejecutar el watcher de TypeScript:

Ejecuta el script watch que has configurado en el package.json:

```bash
npm run watch
```

Este conjunto de configuraciones permite que el compilador TypeScript observe los archivos .ts dentro de la carpeta de entrada src, compilándolos automáticamente y guardando los archivos compilados en la carpeta de salida dist

## :pencil2: Diseño de la solución

Para este Sprint se comenzará creando los archivos Typescript con idea de que los Javascript se autogeneren, además de crear los HTML y CSS necesarios. En estos ejercicios solo necesitaremos hacer peticiones a la PokeAPI. En la búsqueda de imágenes para la pokedex encontré una creada en HTML y CSS y por tiempo decidí usarla adaptando el contenido a ella y añadiendo una extensión con información requerida que no me gustaba como quedaba en la original.  

## :key: Implementación de la solución

### Ejercicio 1: "Hola Mundo" en TypeScript

***Typescript***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript1.png "Typescript 1")

***Html***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/HTML/HTML1.png "Html")

### Ejercicio 2: Función con Tipos Básicos con Typescript

***Typescript***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript2.png "Typescript 1")

***Html***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/HTML/HTML2.png "Html")

### Ejercicio 3: Uso de Interfaces con Typescript

***Typescript***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript3_1.png "Typescript 1")
![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript3_2.png "Typescript 1")

***Html***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/HTML/HTML3.png "Html")

### Ejercicio 4: Manipulación de Arrays con Typescript

***Typescript***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript4_1.png "Typescript 1")
![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript4_2.png "Typescript 1")
![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript4_3.png "Typescript 1")

***Html***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/HTML/HTML4.png "Html")

***CSS***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/CSS/CSS4_1.png "Html")
![alt text](/T1/SPRINT%205/Recursos/Imagenes/CSS/CSS4_2.png "Html")

### Ejercicio 5: Crear una Pokedex con PokeAPI con Typescript

***Typescript***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript5_1.png "Typescript 1")
![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript5_2.png "Typescript 1")
![alt text](/T1/SPRINT%205/Recursos/Imagenes/TS/Typescript5_3.png "Typescript 1")

***Html***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/HTML/HTML5_1.png "Html")
![alt text](/T1/SPRINT%205/Recursos/Imagenes/HTML/HTML5_2.png "Html")

***CSS***

![alt text](/T1/SPRINT%205/Recursos/Imagenes/CSS/CSS5_1.png "Html")
![alt text](/T1/SPRINT%205/Recursos/Imagenes/CSS/CSS5_2.png "Html")

En este caso tanto el HTML y el CSS no esta completo porque son demasiado extensos.

## :ok_hand: Prueba

### [Plan de pruebas](https://github.com/FernandoTiradosG/DAWEC/blob/main/T1/SPRINT%204/Test_Plan_Script4.xlsx)

![alt text](/T1/SPRINT%205/Recursos/Imagenes/Test/Test1.png "PruebaTest1")
![alt text](/T1/SPRINT%205/Recursos/Imagenes/Test/Test2.png "PruebaTest2")

### Ejercicio 1: Información Básica del Pokémon

Prueba:

![alt text](/T1/SPRINT%205/Recursos/Videos/Prueba1.gif "Prueba 1")

### Ejercicio 2: Comparativa de Pokémon

Prueba:

![alt text](/T1/SPRINT%205/Recursos/Videos/Prueba2.gif "Prueba 2")

### Ejercicio 3: Evoluciones y Habilidades

Prueba:

![alt text](/T1/SPRINT%205/Recursos/Videos/Prueba3.gif "Prueba 3")

### Ejercicio 4: Explorador de Películas

Prueba:

![alt text](/T1/SPRINT%205/Recursos/Videos/Prueba4.gif "Prueba 4")

### Ejercicio 5: Películas favoritas

Prueba:

![alt text](/T1/SPRINT%205/Recursos/Videos/Prueba5.gif "Prueba 5")
