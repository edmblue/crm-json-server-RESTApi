import { obtenerClienteUnico, editarCliente } from './API.js';
import { validar, mostrarMensaje } from './funciones.js';

(function () {
  const parametrosURL = new URLSearchParams(window.location.search);
  const idCliente = parametrosURL.get('id');
  const formulario = document.querySelector('#formulario');
  const nombreInput = document.querySelector('#nombre');
  const empresaInput = document.querySelector('#empresa');
  const telefonoInput = document.querySelector('#telefono');
  const emailInput = document.querySelector('#email');
  const idInput = document.querySelector('#id');

  document.addEventListener('DOMContentLoaded', recuperarCliente(idCliente));
  formulario.addEventListener('submit', editarClienteFn);

  function editarClienteFn(e) {
    e.preventDefault();
    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: idInput.value,
    };

    if (validar(cliente)) {
      console.log('hi');
      mostrarMensaje('Debe rellenar todos los campos');
      return;
    }

    editarCliente(cliente);
  }

  async function recuperarCliente(idCliente) {
    const infoCliente = await obtenerClienteUnico(idCliente);

    const { nombre, email, telefono, empresa, id } = infoCliente;

    nombreInput.value = nombre;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    emailInput.value = email;
    idInput.value = id;
  }
})();
