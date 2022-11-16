import { validar, mostrarMensaje } from './funciones.js';
import { agregarCliente } from './API.js';

(function () {
  //Variables
  const formulario = document.querySelector('#formulario');

  //evenListeners
  callEventListeners();

  function callEventListeners() {
    formulario.addEventListener('submit', validarCliente);
  }

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    const cliente = { nombre, email, telefono, empresa };

    if (validar(cliente)) {
      mostrarMensaje('Debe rellenar todos los campos');
      return;
    }

    agregarCliente(cliente);
  }
})();
