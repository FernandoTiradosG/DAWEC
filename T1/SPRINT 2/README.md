# Script 2: 

## :microscope: Analisis de Ejercicios
```
Ejercicio 1: Cambio de Color con Botón
- Crear una página web que contenga un botón etiquetado "Cambiar color".
- Al hacer clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.
- Pista: Utiliza `Math.random()` para generar valores RGB aleatorios.

Ejercicio 2: Calculadora de Área
- Diseña una página web con dos campos de entrada (input) para introducir el ancho y el alto de un rectángulo.
- Agrega un botón etiquetado "Calcular Área".
- Al hacer clic en el botón, calcula el área del rectángulo y muestra el resultado en un elemento `<p>` en la página.
- Pista: Área del rectángulo = ancho x alto.

Ejercicio 3: Listado Dinámico
- Crea una página con un campo de entrada y un botón etiquetado "Añadir a la lista".
- También debes tener una lista vacía (`<ul>` o `<ol>`).
- Cuando el usuario escribe algo en el campo de entrada y hace clic en el botón, entonces el contenido del campo debe agregarse como un nuevo ítem (`<li>`) a la lista.
- Pista: Utiliza el método `.createElement()` y `.appendChild()` del DOM.

Ejercicio 4: Hover y Estilo Dinámico
- Diseña una página con varios elementos div, cada uno con un texto diferente.
- Al pasar el ratón sobre un div, cambia su color de fondo a azul y el texto a blanco.
- Al mover el ratón fuera del div, restaura sus estilos originales.
- Pista: Considera usar eventos como "mouseover" y "mouseout".


Ejercicio 5: Detección de Clics y Generación de XPath
Descripción:
Desarrolla una página web que, al hacer clic en cualquier elemento, muestre el XPath único de ese elemento en un cuadro de alerta o en una sección dedicada de la página.
Especificaciones:
1. Detección de Clics:
   - Añade un evento de escucha a todo el documento (`document`) para detectar cualquier clic realizado.
   - Al detectar un clic, determina el elemento exacto que fue clickeado usando el objeto `event.target`.
2. Generación de XPath:
   - Una vez identificado el elemento, genera su XPath.
  - Muestra el XPath generado en un cuadro de alerta o en una sección específica de la página.
  
Se adjunta el HTML para el ejercicio 5 llamado ‘Sprint2Ejercicio5.html’ Hay que hacer click sobre cada uno de los botones y tiene que venir reflejado que se ha hecho click sobre cada uno con una alerta que indique el XPATH relativo del que se ha realizado el click.
```
Aquí necesitaremos recordar lo aprendido sobre Html y CSS, para poder interactuar con lo que vamos aprendiendo de JavaScript. Esto permitira comprobar lo que ChatGPT nos ofrezca en sus respuestas.

## :pencil2: Diseño de la solución
Para este caso crearemos tres archivos un Html, un CSS y el JavaScript que interactuaran entre ellos. Comenzaremos incluyendo en el Html lo que se pida y creamos necesario para el ejercicio, en el CSS daremos estilo a los elementos que esten en el Html y en el JavaScript constuiremos las funciones que hagan lo que deseamos. 

## :key: Implementación de la solución
### Ejercicio 1: Cambio de color del fondo
Creamos los tres archivos:

***Html***
![alt text](\Ejercicio1/Recursos/Html1.png "Html")

***CSS***
![alt text](\Ejercicio1/Recursos/CSS1.png "CSS")

***JavaScript***
![alt text](\Ejercicio1/Recursos/JavaScript1.png "Html")
___

### Ejercicio 2: Calculo del Area
Creamos los tres archivos:

***Html***
![alt text](\Ejercicio2/Recursos/Html2.png "Html")

***CSS***
![alt text](\Ejercicio2/Recursos/CSS2.png "CSS")

***JavaScript***
![alt text](\Ejercicio2/Recursos/JavaScript2.png "Html")
___

### Ejercicio 3: Creacion de una lista
Creamos los tres archivos:

***Html***
![alt text](\Ejercicio3/Recursos/Html3.png "Html")

***CSS***
![alt text](\Ejercicio3/Recursos/CSS3.png "CSS")

***JavaScript***
En este caso se ha realizado un función más como es la de borrar la lista:
![alt text](\Ejercicio3/Recursos/JavaScript3.png "Html")
___

### Ejercicio 4: Cajas de colores
Creamos los tres archivos:

***Html***
![alt text](\Ejercicio4/Recursos/Html4.png "Html")

***CSS***
![alt text](\Ejercicio4/Recursos/CSS4.png "CSS")

***JavaScript***
![alt text](\Ejercicio4/Recursos/JavaScript4.png "Html")
___

### Ejercicio 5: Detector de XPATH
Creamos solo dos archivos, ya que en este caso no necesitamos el CSS y el Html mostrado es el dado por el profesor:

***Html***
![alt text](\Ejercicio5/Recursos/Html5.png "Html")

***JavaScript***
![alt text](\Ejercicio5/Recursos/JavaScript5.png "Html")

Para este ejercicio se realizo una primera solución pero implicaba incluir el codigo del iframe en un Html aparte, pero se siguio intentando para que se pudiera solucionar sin tener que variar el Html original.
## :ok_hand: Prueba
### [Plan de pruebas](https://github.com/FernandoTiradosG/DAWEC/blob/main/T1/SPRINT%202/RecursosGenerales/Test_Plan_Script2.xlsx)
![alt text](\RecursosGenerales/Test_de_prueba.png "Prueba 1")

### Ejercicio 1:Cambio de color del fondo
El resultado de clicar varias veces en el botón para que cambie de color el fondo de forma aleatoria da el siguiente resultado:

![alt text](\Ejercicio1/Recursos/Ejercicio1.gif "Prueba 1")
___
### Ejercicio 2:Calculo del Area
Al escribir ambos valores pedidos y pulsar en el boton en el ultimo cuadro de texto te da el resultado:

![alt text](\Ejercicio2/Recursos/Ejercicio2.gif "Prueba 2")
___
### Ejercicio 3:Creacion de una lista
Se escribe en el cuadro de texto lo deseado y al clicar el botón se añade a la lista, si se quiere elimiar la lista creada se clica en el botón para ello.

![alt text](\Ejercicio3/Recursos/Ejercicio3.gif "Prueba 3")
___
### Ejercicio 4:Cajas de colores
Al pasar el raton sobre cada caja se colorea la caja del color que te indica a excepción del ultimo que te colorea el resto.

![alt text](\Ejercicio4/Recursos/Ejercicio4.gif "Prueba 4")
___
### Ejercicio 5:Detector de XPATH
Al hacer clic en la parte de la pagina que se deseé saltara un cuadro de alerta con el Xpath de la parte clicada.

![alt text](\Ejercicio5/Recursos/Ejercicio5.gif "Prueba 5")