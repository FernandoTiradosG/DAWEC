# Sprint 4

## :microscope: Analisis de Ejercicios

```txt
Sitios de reservas - Gestión de reservas

  - Objetivo: Desarrollar un sistema `GestionReservas` que permita a los usuarios logeados realizar y gestionar reservas en un calendario interactivo.

  - Tareas:
    + Crea un componente `GestionReservas` con un estado que incluya las reservas del usuario, el calendario del centro y los horarios disponibles.
    + Implementa un calendario interactivo que muestre los días y horarios disponibles para realizar reservas.
    + Agrega métodos para realizar una nueva reserva, modificar una existente y cancelar reservas.
    + El método `render` debe mostrar el calendario, permitir la selección de fechas y horarios disponibles y gestionar las reservas del usuario.
    + Asegura que solo se puedan seleccionar horarios disponibles evitando solapamientos y respetando las restricciones del centro.
    + Renderiza `GestionReservas` en `App

  - Prueba: Verifica que los usuarios pueden realizar, modificar y cancelar reservas correctamente, y que el sistema gestiona adecuadamente las disponibilidades.
```

## :pencil2: Diseño de la solución

En este ejercicio aplicaremos todo los conocimientos que hemos adquirido. Aun asi, necesitaremos investigar mas cosas sobre React como el el modulo reac-calendar el cual nos ofrece un calendario con el que podemos interactuar. A partir de aqui aplicaremos toda la logica necesaria para realizar el Sitio de reservas. Neceserio es comentar que para el sistemas de usuarios, en concreto los administradosres, a la hora de registrarse se le dara el rol de admin si el correo que introducen termina en 'admin.com'.

## :key: Implementación de la solución

***App***

![alt text](/T2/SPRINT%204/Recursos/imagenes/app.png "Javascript App")

***Inicio***

![alt text](/T2/SPRINT%204/Recursos/imagenes/inicio.png "Javascript Inicio")

***Login***

![alt text](/T2/SPRINT%204/Recursos/imagenes/login1.png "Javascript Login1")
![alt text](/T2/SPRINT%204/Recursos/imagenes/login2.png "Javascript Login2")

***Registro***

![alt text](/T2/SPRINT%204/Recursos/imagenes/registro1.png "Javascript Registro")
![alt text](/T2/SPRINT%204/Recursos/imagenes/registro2.png "Javascript Registro")

***Gestion Registro***

![alt text](/T2/SPRINT%204/Recursos/imagenes/gc1.png "Javascript Gestion Registro")
![alt text](/T2/SPRINT%204/Recursos/imagenes/gc2.png "Javascript Gestion Registro")
![alt text](/T2/SPRINT%204/Recursos/imagenes/gc3.png "Javascript Gestion Registro")
![alt text](/T2/SPRINT%204/Recursos/imagenes/gc4.png "Javascript Gestion Registro")
![alt text](/T2/SPRINT%204/Recursos/imagenes/gc5.png "Javascript Gestion Registro")
![alt text](/T2/SPRINT%204/Recursos/imagenes/gc6.png "Javascript Gestion Registro")
![alt text](/T2/SPRINT%204/Recursos/imagenes/gc7.png "Javascript Gestion Registro")

***Modal para modificar***

![alt text](/T2/SPRINT%204/Recursos/imagenes/modificar.png "Javascript Modal Modificar")

***Modal para datos de usuario***

![alt text](/T2/SPRINT%204/Recursos/imagenes/datos.png "Javascript Modal Datos Usuario")

***Modal para modal de pago***

![alt text](/T2/SPRINT%204/Recursos/imagenes/pago.png "Javascript Modal Pago")

***Firebase***

![alt text](/T2/SPRINT%204/Recursos/imagenes/firebase.png "Javascript Firebase")

## :ok_hand: Prueba

### [Plan de pruebas](https://github.com/FernandoTiradosG/DAWEC/blob/main/T2/SPRINT%204/Recursos/Test_Plan_Script9.xlsx)

![alt text](/T2/SPRINT%204/Recursos/imagenes/PlanPruebas1.png "PruebaTest1")
![alt text](/T2/SPRINT%204/Recursos/imagenes/PlanPruebas2.png "PruebaTest2")
![alt text](/T2/SPRINT%204/Recursos/imagenes/PlanPruebas3.png "PruebaTest3")

***Creacion User***

![alt text](/T2/SPRINT%204/Recursos/gifs/registro-user.gif "Creacion User")

***Creacion Admin***

![alt text](/T2/SPRINT%204/Recursos/gifs/registro-admin.gif "Creacion Admin")

***Login User***

![alt text](/T2/SPRINT%204/Recursos/gifs/login-user.gif "Login User")

***Login Admin***

![alt text](/T2/SPRINT%204/Recursos/gifs/login-user.gif "Login Admin")

***Anular Horas***

![alt text](/T2/SPRINT%204/Recursos/gifs/anularhoras.gif "Anular")

***Crear Reserva***

![alt text](/T2/SPRINT%204/Recursos/gifs/reservarhora.gif "Crear")

***Modificar Reserva***

![alt text](/T2/SPRINT%204/Recursos/gifs/modificar.gif "Modificar")

***Otro User***

![alt text](/T2/SPRINT%204/Recursos/gifs/otroUser.gif "Otro User")
