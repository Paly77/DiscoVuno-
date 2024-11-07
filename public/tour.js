/* Muestra mensaje genérico al cargar la página
const span = document.querySelector("#welcome");
span.textContent = "Bienvenido/a, por favor ingresa tu nombre.";

setTimeout(() => {
// Pedimos el nombre al usuario
let nombre = prompt("¿Cuál es tu nombre?");

while (!nombre || nombre.length < 2) {
  if (!nombre) {
    alert("Por favor, debes ingresar tu nombre.");
  } else if (nombre.length < 2) {
    alert("Tu nombre debe tener al menos 2 letras.");
  }
  nombre = prompt("¿Cuál es tu nombre?");
}

// Actualizamos el contenido del span con el nombre en mayúsculas
span.textContent = "Hola, " + nombre.toUpperCase();
}, 100);  // Retardo de 100 milisegundos

// Preguntar al usuario su nombre
let nombreUsuario = prompt("¿Cuál es tu nombre?");

// Preguntar al usuario su edad
let edadUsuario = prompt("¿Cuántos años tienes?");

// Mostrar un mensaje con el nombre y la edad
alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años.`);

*/
/*
// Listado de fechas de la gira (puedes ajustar esto según tu proyecto)
const fechas = [
  { ciudad: "Buenos Aires", fecha: "15 de Octubre, 2024" },
  { ciudad: "Rosario", fecha: "20 de Octubre, 2024" },
  { ciudad: "Córdoba", fecha: "25 de Octubre, 2024" },
  { ciudad: "Mendoza", fecha: "30 de Octubre, 2024" },
];

// Mostrar las fechas en la página
const listaFechas = document.getElementById('lista-fechas');
fechas.forEach(tour => {
  const listItem = document.createElement('li');
  listItem.textContent = `Ciudad: ${tour.ciudad}, Fecha: ${tour.fecha}`;
  listaFechas.appendChild(listItem);
});
*/
const img =document.querySelector('img')
img.getAttribute('alt')
img.setAttribute('with','50px')

//Actualizamos para Bonus de modulo loops y while 
let nombre = prompt("¿Cuál es tu nombre?").toUpperCase();

while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras."
  ).toUpperCase();
}

// Actualizamos el contenido del span con el nombre y el ícono de ticket
const span = document.getElementById("welcome");
span.innerHTML = `Hola, ${nombre} <i class="fa fa-ticket"></i>`;

// Configura la clase del ícono
const i = document.querySelector("i");
i.setAttribute("class", "fa fa-ticket");

// Objeto tickets con la disponibilidad de cada ciudad
const tickets = {
  "Buenos Aires": 180,
  "Rosario": 50,
  "Cordoba": 150,
  "Mendoza": 2
};

/*
function getTickets(place, noTickets) {
  if (noTickets) {
    swal(
      "Oh no!",
      "¡Lo siento, no hay más tickets para " + place + "!",
      "info"
    );
  } else {
    swal(
      "¡Tickets Adquiridos!",
      "Tienes tickets para el concierto en " + place,
      "success"
    );
  }
}*/

// Modulo Ojeto
function getTickets(place) {
  // Verificar si hay tickets disponibles para la ciudad seleccionada
  if (tickets[place] > 0) {
    tickets[place] -= 1; // Reducir en 1 la cantidad de tickets disponibles
    swal("Compra exitosa", `¡Has adquirido un ticket para ${place}!`, "success");
  } else {
    swal("Lo sentimos", `No quedan más tickets para ${place}.`, "error");
  }

  // Llamar a la función que deshabilita botones agotados
  disableSoldOutButtons();
}

// Función disableSoldOutButtons para deshabilitar los botones agotados
function disableSoldOutButtons() {
  const botonesTickets = document.querySelectorAll("button[data-city]");
  
  botonesTickets.forEach(boton => {
    const ciudad = boton.getAttribute("data-city");
    
    if (tickets[ciudad] === 0) {
      boton.disabled = true;
      boton.textContent = "SOLD OUT";
      boton.classList.add("bg-gray-500", "cursor-not-allowed");
      boton.classList.remove("hover:bg-gray-700");
    }
  });
}

// Llamada a disableSoldOutButtons al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  disableSoldOutButtons();
});


//--modulo Arreglos--Aplicacion
// Solicitar la edad al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  let edad = prompt("Por favor, ingresa tu edad:");
  
  // Verificar si el usuario es menor de edad
  if (edad < 18) {
    // Mostrar alerta de SweetAlert indicando que no puede comprar tickets
    swal("Lo sentimos", "No puedes comprar tickets si eres menor de edad.", "warning");

    // Seleccionar todos los botones de compra de tickets y deshabilitarlos
    const botonesTickets = document.querySelectorAll("button[onclick^='getTickets']");
    botonesTickets.forEach(boton => {
      boton.disabled = true; // Deshabilitar el botón
      boton.classList.add("bg-gray-500", "cursor-not-allowed"); // Cambiar el color y el cursor
      boton.classList.remove("hover:bg-gray-700"); // Remover el efecto hover
    });
  }
});



