let ascending = true;
let currentKey = null;

const tabla = [
    {Nombre: "Ana", Edad: 25, DNI: "45678912B", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "12/05/1998"},
    {Nombre: "Carlos", Edad: 30, DNI: "12345678A", "Tiene/No tiene hijos": "No tiene", "Fecha de nacimiento": "05/02/1993"},
    {Nombre: "Berta", Edad: 28, DNI: "98765432C", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "20/03/1995"},
    {Nombre: "David", Edad: 31, DNI: "11223344D", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "18/08/1992"},
    {Nombre: "Elena", Edad: 33, DNI: "54321678E", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "14/09/1989"},
    {Nombre: "Fernando", Edad: 27, DNI: "87654321F", "Tiene/No tiene hijos": "No tiene", "Fecha de nacimiento": "30/06/1994"},
    {Nombre: "Gonzalo", Edad: 29, DNI: "65432187G", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "03/11/1992"},
    {Nombre: "Hilda", Edad: 35, DNI: "34567812H", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "22/07/1987"},
    {Nombre: "Isaac", Edad: 26, DNI: "23456781I", "Tiene/No tiene hijos": "No tiene", "Fecha de nacimiento": "17/03/1996"},
    {Nombre: "Javier", Edad: 32, DNI: "76543218J", "Tiene/No tiene hijos": "No tiene", "Fecha de nacimiento": "11/01/1990"},
    {Nombre: "Karen", Edad: 31, DNI: "45678123K", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "05/10/1991"},
    {Nombre: "Luis", Edad: 29, DNI: "98765432L", "Tiene/No tiene hijos": "No tiene", "Fecha de nacimiento": "28/04/1992"},
    {Nombre: "María", Edad: 34, DNI: "56781234M", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "15/12/1987"},
    {Nombre: "Nacho", Edad: 30, DNI: "87654321N", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "10/09/1991"},
    {Nombre: "Olga", Edad: 26, DNI: "34567812O", "Tiene/No tiene hijos": "No tiene", "Fecha de nacimiento": "24/05/1995"},
    {Nombre: "Pablo", Edad: 33, DNI: "23456781P", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "01/03/1989"},
    {Nombre: "Quintín", Edad: 28, DNI: "76543218Q", "Tiene/No tiene hijos": "No tiene", "Fecha de nacimiento": "13/08/1994"},
    {Nombre: "Raquel", Edad: 31, DNI: "45678123R", "Tiene/No tiene hijos": "Tiene", "Fecha de nacimiento": "09/11/1990"},
    {Nombre: "Sergio", Edad: 29, DNI: "98765432S", "Tiene/No tiene hijos": "No tiene", "Fecha de nacimiento": "07/06/1992"}
  ];

  function ordenarTabla(key) {
    if (currentKey === key) {
        ascending = !ascending;
    } else {
        currentKey = key;
        ascending = true;
    }

    tabla.sort((a, b) => {
        const valueA = String(a[key]).toLowerCase();
        const valueB = String(b[key]).toLowerCase();

        if (key === 'Fecha de nacimiento') {
            const [dayA, monthA, yearA] = valueA.split('/').map(Number);
            const [dayB, monthB, yearB] = valueB.split('/').map(Number);

            return ascending ?
                new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB) :
                new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
        } else {
            return ascending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }
    });

    actualizarTabla();
}

function actualizarTabla() {
    const tbody = document.querySelector('#miTabla tbody');
    tbody.innerHTML = '';

    tabla.forEach(rowData => {
        const row = document.createElement('tr');

        for (const key in rowData) {
            const cell = document.createElement('td');
            cell.textContent = rowData[key];
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    });
}

// Asegúrate de que este evento se ejecute después de que se cargue completamente la página.
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('#miTabla th');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            ordenarTabla(this.innerText);
        });
    });

    // Inicializar la tabla
    actualizarTabla();
});