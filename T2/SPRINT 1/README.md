# Sprint 1: Introducción a React (Básico)

## :microscope: Analisis de Ejercicios

```Ejercicio 1: Hola Mundo en React y Componente con Props
  - Tareas:
    + Crea un componente funcional llamado HolaMundo que simplemente renderice un elemento <h1> con el texto "¡Hola, Mundo!".
    + Renderiza este componente dentro del componente App.
    + Crea un componente funcional llamado Saludo que acepte una prop nombre.
    + Este componente debe renderizar un párrafo que diga "Hola, [nombre]".
    + Renderiza el componente Saludo varias veces en App con diferentes nombres.

  - Prueba: Hacer que ponga “Hola Mundo!”, ver que se renderiza y que el componente funcione como se pide en las Tareas.

Ejercicio 2: Lista de Elementos
  - Tareas:
    + Crea un componente ListaDeFrutas que renderice una lista (<ul>) de elementos (<li>).
    + El componente debe aceptar un array de frutas como prop y renderizar cada fruta en un elemento de lista. (renderizar su imagen)
    + Prueba el componente con diferentes arrays de frutas.

  - Prueba: Hacer que aparezca la ListaDeFrutas y que se acepte un array de frutas y que se visualicen sus imágenes correspondientes. (5 tipos de frutas)

Ejercicio 3: Contador de Clicks
  - Tareas:
    + Crea un componente Contador que muestre un número (inicialmente 0) y un botón.
    + Cada vez que el botón sea clickeado, el número debe incrementarse en uno.
    + Implementa esto utilizando el hook useState.

  - Prueba: Descargar un autoclicker y usarlo para que se registren muchos clicks para una de las pruebas. Otra prueba tiene que ser con tres clicks y otra con 15 clicks.

Ejercicio 4: Aplicación de Tareas
  - Tareas:
    + Crea una aplicación de lista de tareas (ToDoApp) que permita al usuario añadir tareas, marcarlas como completadas y borrarlas.
    + La aplicación debe tener un campo de texto para ingresar nuevas tareas y una lista de tareas mostradas debajo.
    + Cada tarea en la lista debe tener un checkbox para marcarla como completada y un botón para eliminarla.
    + Gestiona el estado de las tareas (añadir, completar, eliminar) utilizando useState.

  - Prueba: Haz una prueba para añadir un par de tareas, otra prueba para completar una tarea y otra prueba para eliminar la tarea restante.

Ejercicio 5: Gestor de Tareas con Estados Complejos y Local Storage
  - Objetivo: Desarrollar una aplicación de gestión de tareas (to-do list) avanzada en React que no solo permita añadir, marcar y eliminar tareas, sino también categorizarlas y persistir los datos en el navegador usando Local Storage.
  - Tareas:
    + Diseña una interfaz que permita al usuario introducir tareas con una categoría asociada (por ejemplo, trabajo, personal, estudio).
    + Proporciona la opción de seleccionar categorías de una lista predefinida o añadir una nueva.
    + Permite al usuario marcar tareas como completadas, editarlas o eliminarlas.
    + Añade la funcionalidad para filtrar tareas por categoría o estado (completado, borrado).
    + Uso de Local Storage para Persistencia de Datos
        Guarda las tareas y categorías en el Local Storage del navegador para que no se pierdan al recargar la página.
        Carga las tareas guardadas cuando la aplicación se inicia.
  - Consejos: Manejo Complejo del Estado
    + Utiliza useState para manejar los diferentes estados de la aplicación (lista de tareas, categorías, filtro seleccionado).
    + Considera la utilización de useReducer si el manejo del estado se vuelve demasiado complejo con useState.

  - Prueba: Genera tareas con diversas categorías. Muestra la vista filtrada de cada categoría donde sólo aparezcan esas tareas. Marca algunas como completadas, elimina una y edita otra.Recarga la página y vuelve a mirar si están las tareas guardadas o no (deberían estar).
```

- Ventajas y desventajas entre react y angular. (Incluirlo en el analisis)

React y Angular son dos frameworks muy populares para construir aplicaciones web:

### React

Ventajas:

1. Flexibilidad y simplicidad: React es más flexible y modular. Permite a los desarrolladores tomar decisiones sobre herramientas adicionales a utilizar.
2. Virtual DOM: Utiliza un Virtual DOM que permite actualizaciones eficientes y rápidas en la interfaz de usuario.
3. Gran comunidad y ecosistema: Una gran comunidad respalda React, ofreciendo una amplia gama de bibliotecas y recursos.
4. JSX: La sintaxis JSX en React facilita la combinación de componentes y lógica en un solo archivo.

Desventajas:

1. Curva de aprendizaje inicial: Para algunos, la adopción de JSX y la forma de pensar en términos de componentes puede ser complicada al principio.
2. Toma de decisiones: Al ser menos opionionado, React deja más decisiones al desarrollador, lo que puede aumentar la complejidad del proyecto si no se tiene un buen entendimiento de las mejores prácticas.

### Angular

Ventajas:

1. Framework completo: Angular es un framework completo y opionionado, lo que significa que ofrece soluciones integradas para muchos problemas comunes.
2. TypeScript: Utiliza TypeScript por defecto, lo que mejora la calidad del código al proporcionar tipado estático.
3. Inyección de dependencias: Ofrece un sistema de inyección de dependencias integrado que facilita la gestión de las dependencias y la modularidad del código.
4. Herramientas CLI y soporte: Angular proporciona un conjunto robusto de herramientas de línea de comandos (CLI) y un buen soporte de Google.

Desventajas:

1. Mayor curva de aprendizaje: Angular puede ser más complejo para los principiantes debido a su estructura y la cantidad de conceptos que se deben aprender.
2. Más verboso: Angular tiende a tener una sintaxis más verbosa en comparación con React, lo que puede llevar a una mayor cantidad de código para lograr ciertas funcionalidades.

| Característica           | React                                     | Angular                                        |
| ------------------------ | ----------------------------------------- | ---------------------------------------------- |
| Arquitectura             | Biblioteca de vistas                      | Framework completo                             |
| Lenguaje de programación | JavaScript                                | TypeScript                                     |
| Curva de aprendizaje     | Más rápida para usuarios experimentados   | Mayor para principiantes                       |
| Renderizado              | Virtual DOM                               | Uso del DOM real                               |
| Flexibilidad             | Más flexible y modular                    | Estructura más rígida y opionionada            |
| Comunidad                | Gran comunidad                            | Comunidad sólida                               |
| Sintaxis                 | JSX (JavaScript + XML)                    | HTML y TypeScript (Template Syntax)            |
| Tamaño de la librería    | Pequeño                                   | Mayor tamaño debido a su naturaleza            |
| Herramientas y soporte   | Amplio ecosistema, múltiples herramientas | Herramientas CLI robustas y soporte de Google  |
| Mantenimiento de estado  | Uso de estados y props                    | Uso de servicios y RxJS para gestión de estado |

## :pencil2: Diseño de la solución

En este caso comenzamos con React por lo que empezaremos investigando un poco sobre el con la ayuda tanto de ChatGPT y la propia documentación de React. Despues de esto crearemos un primer proyecto a traves de "*npx create-react-app ejercicio1*" y adaptaremos su estructura para utilizarla en el resto de ejercicios. A partir de aqui pasamos a adaptar los Javascript que necesitamos retocar y crearemos los que necesitamos para los diferentes componentes.

## :key: Implementación de la solución

### Ejercicio 1: Hola Mundo en React y Componente con Props

***App***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio1/App.png "Javascript App")

***HolaMundo***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio1/HolaMundo.png "Javascript HolaMundo")

***Saludo***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio1/Saludo.png "Javascript Saludo")

### Ejercicio 2: Lista de Elementos

***App***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio2/App2.png "Javascript App")

***Lista de Frutas***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio2/ListaDeFrutas.png "Javascript ListaDeFrutas")

### Ejercicio 3: Contador de Clicks

***App***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio3/App3.png "Javascript App")

***Contador***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio3/Contador.png "Javascript Contador")

### Ejercicio 4: Aplicación de Tareas

***App***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio4/App.png "Javascript App")

***Lista de Tareas***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio4/ListaDeTareas.png "Javascript ListaDeTareas1")
![alt text](/T2/SPRINT%201/Recursos/Ejercicio4/ListaDeTareas2.png "Javascript ListaDeTareas2")

### Ejercicio 5: Gestor de Tareas con Estados Complejos y Local Storage

***App***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio5/App5.png "Javascript App")

***Lista de Tareas Evolución***

![alt text](/T2/SPRINT%201/Recursos/Ejercicio5/Lista1.png "Javascript ListaDeTareas1")
![alt text](/T2/SPRINT%201/Recursos/Ejercicio5/Lista2.png "Javascript ListaDeTareas2")
![alt text](/T2/SPRINT%201/Recursos/Ejercicio5/Lista3.png "Javascript ListaDeTareas3")
![alt text](/T2/SPRINT%201/Recursos/Ejercicio5/Lista4.png "Javascript ListaDeTareas4")
![alt text](/T2/SPRINT%201/Recursos/Ejercicio5/Lista5.png "Javascript ListaDeTareas5")

## :ok_hand: Prueba

### [Plan de pruebas](https://github.com/FernandoTiradosG/DAWEC/blob/main/T2/SPRINT%201/Recursos/Test_Plan_Script6.xlsx)

![alt text](/T2/SPRINT%201/Recursos/TestPlan1.png "PruebaTest1")
![alt text](/T2/SPRINT%201/Recursos/TestPlan2.png "PruebaTest2")

### Ejercicio 1: Hola Mundo en React y Componente con Props

Prueba:

Se inicia el proyecto con "*npm start*" teniendo la terminal situada en la carpeta del proyecto, en este caso la carpeta "Ejercicio1"

![alt text](/T2/SPRINT%201/Recursos/Ejercicio1/Prueba2.png "Prueba")

Para seber que ha compilado bien nos tiene que salir el siguiente mensaje en terminal

![alt text](/T2/SPRINT%201/Recursos/Ejercicio1/Prueba2.3.png "Prueba")

Y se nos carga la web

![alt text](/T2/SPRINT%201/Recursos/Ejercicio1/Prueba2.2.png "Prueba")

### Ejercicio 2: Lista de Elementos

Prueba:

Al utilizarse dos arrays distintos se muestra cada array en su lista

![alt text](/T2/SPRINT%201/Recursos/Ejercicio2/Prueba1.png "Prueba")

### Ejercicio 3: Contador de Clicks

Pruebas:

Autocliker(sin limite):
![alt text](/T2/SPRINT%201/Recursos/Ejercicio3/Autocliker1.png "Prueba Autocliker")
![alt text](/T2/SPRINT%201/Recursos/Ejercicio3/Prueba1.gif "Prueba")

Autocliker(limite 3 cliks):
![alt text](/T2/SPRINT%201/Recursos/Ejercicio3/Autocliker1.png "Prueba Autocliker")
![alt text](/T2/SPRINT%201/Recursos/Ejercicio3/Prueba2.gif "Prueba")

Autocliker(limite 15 cliks):
![alt text](/T2/SPRINT%201/Recursos/Ejercicio3/Autocliker1.png "Prueba Autocliker")
![alt text](/T2/SPRINT%201/Recursos/Ejercicio3/Prueba3.gif "Prueba")

### Ejercicio 4: Aplicación de Tareas

Prueba:

![alt text](/T2/SPRINT%201/Recursos/Ejercicio4/Prueba.gif "Prueba")

### Ejercicio 5: Gestor de Tareas con Estados Complejos y Local Storage

Prueba1:

![alt text](/T2/SPRINT%201/Recursos/Ejercicio5/Prueba1.gif "Prueba1")

Prueba2:

![alt text](/T2/SPRINT%201/Recursos/Ejercicio5/Prueba2.gif "Prueba2")

Prueba3:

![alt text](/T2/SPRINT%201/Recursos/Ejercicio5/Prueba3.gif "Prueba3")
