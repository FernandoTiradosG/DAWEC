# Sprint 2

## :microscope: Analisis de Ejercicios

```txt
Ejercicio 1: Navegación con Parámetros de Ruta

  - Objetivo: Crear una aplicación simple de perfil de usuario que utilice React Router para la navegación, donde cada perfil tenga su propia URL basada en el ID del usuario.

  - Tareas:
    + Configurar React Router en tu aplicación:
      * Asegúrate de que React Router esté instalado usando npm install react-router-dom.
      * Envuelve tu componente App con <BrowserRouter> en el punto de entrada de tu aplicación.
    + Crear dos componentes: Inicio y PerfilUsuario:
      * El componente Inicio debe mostrar un mensaje de bienvenida y enlaces a perfiles de usuario ficticios.
      * El componente PerfilUsuario debe extraer el ID del usuario de los parámetros de ruta y mostrar un mensaje simple, como "Perfil del Usuario: [ID]".
    + Configurar las rutas en tu componente App:
      * Utiliza <Switch> y <Route> para configurar tus rutas. Debes tener una ruta para el componente Inicio (por ejemplo, /) y otra para PerfilUsuario (por ejemplo, /usuario/:id).
    + Usar <Link> para la navegación:
      * En el componente Inicio, crea enlaces (<Link>) que lleven al usuario a diferentes perfiles, modificando el ID en la URL.
    + Extracción de parámetros de ruta en PerfilUsuario:
      * En PerfilUsuario, utiliza useParams para obtener el ID del usuario de la URL y mostrarlo en la página.

  - Prueba:
    + Navega a la página de inicio y verifica que los enlaces a los perfiles de usuario se muestran correctamente.
    + Haz clic en los enlaces para asegurarte de que la URL cambia y que el componente PerfilUsuario muestra el ID correcto del usuario.

Ejercicio 2: Gestión de Formularios y Validaciones con React Hook Form

  - Objetivo: Crear un formulario de contacto simple que valide la entrada del usuario antes de mostrar un mensaje de éxito, utilizando React Hook Form.

  - Tareas:
    + Instalar React Hook Form:
      * Ejecuta npm install react-hook-form para añadir React Hook Form a tu proyecto.
    + Crear un componente FormularioContacto:
      * Este componente debe contener un formulario con campos para el nombre, email, y un mensaje. Utiliza useForm de React Hook Form para gestionar el formulario.
    + Agregar validaciones a los campos del formulario:
      * Utiliza las opciones de validación de React Hook Form para requerir todos los campos. Añade validación específica para el campo de email, asegurándose de que tenga un formato de correo electrónico válido
    + Mostrar mensajes de error para validaciones fallidas:
      * Utiliza <span> o cualquier otro elemento HTML para mostrar mensajes de error debajo de cada campo si no pasa la validación.
    + Manejar el envío del formulario:
      * En el evento onSubmit, simplemente muestra un mensaje de alerta que diga "Formulario enviado con éxito" si el formulario es válido.
    + Integrar el componente FormularioContacto en tu aplicación:
      * Asegúrate de que el componente FormularioContacto se muestre correctamente en tu aplicación.


  - Prueba: 
    + Intenta enviar el formulario sin completar todos los campos para ver los mensajes de error.
    + Completa el formulario con datos inválidos (como un correo electrónico incorrecto) para verificar las validaciones específicas.
    + Envía el formulario con todos los campos válidos para asegurarte de que se muestra el mensaje de éxito.

Ejercicio 3: Buscador de Películas con API Externa

  - Objetivo: Crear una aplicación que permita a los usuarios buscar películas por nombre usando la API de OMDB (Open Movie Database) y mostrar los resultados en la página.

  - Tareas:
    + Configuración inicial:
      * Obtén una API key gratuita registrándote en OMDB API.
      * Crea un nuevo componente llamado BuscadorPeliculas.
    + Crear un formulario de búsqueda:
      * Incluye un input de texto para el término de búsqueda y un botón para enviar la búsqueda.
      * Maneja el estado del término de búsqueda en el componente.
    + Realizar la petición a la API de OMDB:
      * Utiliza fetch para realizar una petición a la API de OMDB cuando el usuario envíe el formulario. Usa el término de búsqueda del estado para buscar películas por nombre.
      * Ejemplo de URL de petición: 
      https://www.omdbapi.com/?s={termino_de_busqueda}&apikey={tu_api_key}
    + Mostrar resultados de búsqueda:
      * Almacena los resultados de la búsqueda en el estado del componente.
      * Muestra una lista de películas que coincidan con el término de búsqueda. Cada elemento de la lista debe incluir al menos el título de la película y el año de lanzamiento.
    + Manejo de errores y estados de carga:
      * Implementa un indicador de carga que se muestre mientras se está realizando la petición a la API.
      * Muestra mensajes adecuados en caso de que la búsqueda no arroje resultados o si ocurre un error en la petición.

  -Prueba: 
    + Realiza búsquedas de películas para asegurarte de que los resultados se muestran correctamente.
    + Prueba el manejo de errores y el indicador de carga para verificar que funcionan como se espera.

Ejercicio 4: Actualización de Perfil de Usuario con Autenticación

  - Objetivo: Crear una galería de imágenes (`GaleriaImagenes`) que cargue imágenes de una API, las muestre en un grid y permita abrir una imagen en un modal al hacer clic. 

  - Tareas:
    + Configuración inicial y elección de API:
      * Utiliza una API que ofrezca autenticación y operaciones de perfil de usuario, como Firebase Auth para la autenticación y Cloud Storage para las imágenes. Si prefieres una alternativa, puedes simular las operaciones con JSON Placeholder y agregar autenticación ficticia.
    + Implementación de Autenticación:
      * Crea componentes para el registro y el inicio de sesión de usuarios.
      * Implementa la lógica de autenticación usando la API seleccionada, gestionando tokens JWT o cualquier mecanismo de autenticación proporcionado por la API.
    + Interfaz de Usuario para el Perfil:
      * Desarrolla un componente PerfilUsuario donde los usuarios puedan ver y editar su información de perfil, incluido el nombre, correo electrónico y la imagen de perfil.
      * Asegúrate de que solo los usuarios autenticados puedan acceder a esta página.
    + Carga y Actualización de la Imagen de Perfil:
      * Incorpora un formulario en el componente PerfilUsuario que permita a los usuarios subir o cambiar su imagen de perfil.
      * Utiliza la API para subir la imagen al servidor o almacenamiento en la nube y actualizar la URL de la imagen en el perfil del usuario.
    + Actualización de Datos del Perfil:
      * Permite a los usuarios modificar su información de perfil (nombre, correo electrónico) a través de un formulario.
      * Al enviar el formulario, realiza una petición PUT o PATCH a la API para actualizar la información en el servidor, asegurándose de que la solicitud incluya la autenticación del usuario.
    + Manejo de Sesiones y Protección de Rutas:
      * Implementa el manejo de sesiones para mantener a los usuarios conectados.
      * Protege las rutas relacionadas con el perfil de usuario para asegurar que solo los usuarios autenticados puedan acceder a ellas.

  - Consideraciones adicionales:
    * Implementa validaciones en los formularios de registro, inicio de sesión y actualización de perfil para mejorar la experiencia del usuario.
    * Maneja los estados de carga y los mensajes de error o éxito al interactuar con la API.

  - Prueba: 
    + Realiza pruebas de registro e inicio de sesión para verificar la autenticación y el manejo de sesiones.
    + Prueba la funcionalidad de actualización de perfil, incluida la carga de la imagen, para asegurarte de que los cambios se reflejan correctamente en la interfaz de usuario y en el servidor. Básicamente, cambiar la foto de perfil del usuario y que se refleje en el mismo al cerrar sesión e iniciar de nuevo.

```

## :pencil2: Diseño de la solución

Aquí pasamos a la interacción entre distintas páginas de una web y a la integración con APIs, todo esto a través de enrutamientos y gestionando los datos obtenidos. También haremos conexión con un autenticador como es Firebase para crear y controlar usuarios.

## :key: Implementación de la solución

### Ejercicio 1: Navegación con Parámetros de Ruta

***App***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio1/App1.png "Javascript App")

***Inicio***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio1/Inicio.png "Javascript Navegacion")

***PerfilUsuario***
![alt text](/T2/SPRINT%203/Recursos/Ejercicio1/PerfilUsuario.png "Javascript Formulario")

### Ejercicio 2: Gestión de Formularios y Validaciones con React Hook Form

***App***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio2/App2.png "Javascript App")

***Formulario***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio2/FormularioContacto.png "Javascript Contacto")

### Ejercicio 3: Buscador de Películas con API Externa

***App***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio3/App3.png "Javascript App")

***Galeria***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio3/BuscadorPeliculas1.png "Javascript Buscador")
![alt text](/T2/SPRINT%203/Recursos/Ejercicio3/BuscadorPeliculas2.png "Javascript Buscador")

### Ejercicio 4: Actualización de Perfil de Usuario con Autenticación

***App***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/App4.png "Javascript App")

***Inicio***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Inicio.png "Javascript Inicio")

***Registro***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Registro1.png "Javascript Registro")
![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Registro2.png "Javascript Registro")

***Inicio Sesion***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Sesion1.png "Javascript Sesion")
![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Sesion2.png "Javascript Sesion")

***Perfil***

![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Perfil1.png "Javascript Perfil")
![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Perfil2.png "Javascript Perfil")
![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Perfil3.png "Javascript Perfil")
![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Perfil4.png "Javascript Perfil")

## :ok_hand: Prueba

### [Plan de pruebas](https://github.com/FernandoTiradosG/DAWEC/blob/main/T2/SPRINT%203/Recursos/Test_Plan_Script8.xlsx)

![alt text](/T2/SPRINT%203/Recursos/TestPlan1.png "PruebaTest1")
![alt text](/T2/SPRINT%203/Recursos/TestPlan2.png "PruebaTest2")

### Ejercicio 1: Navegación

Prueba:

![alt text](/T2/SPRINT%203/Recursos/Ejercicio1/Navegacion.gif "Prueba Navegacion")

### Ejercicio 2: Formulario

Prueba:

![alt text](/T2/SPRINT%203/Recursos/Ejercicio2/Formulario.gif "Prueba Formulario")

### Ejercicio 3: Buscador

Pruebas:

![alt text](/T2/SPRINT%203/Recursos/Ejercicio3/Buscador.gif "Prueba Buscador")

### Ejercicio 4: Usuarios

Prueba: Creación usuario y inicio sesión

![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Autenticacion1.gif "Prueba Autenticacion")

Prueba: Edicion y cerrar sesión de usuario

![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Autenticacion2.gif "Prueba Autenticacion")

Prueba: Eliminar usuario

![alt text](/T2/SPRINT%203/Recursos/Ejercicio4/Autenticacion3.gif "Prueba Autenticacion")
