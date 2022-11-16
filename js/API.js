const url = 'https://my-json-server.typicode.com/edmblue/crm-json-server-RESTApi/clientes';

export async function agregarCliente(cliente) {
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.href = 'index.html';
  } catch (error) {
    console.log(error);
  }
}

export async function obtenerClientes() {
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
}

export async function borrarCliente(id) {
  try {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log(error);
  }
}

export async function obtenerClienteUnico(idCliente) {
  try {
    const respuesta = await fetch(`${url}/${idCliente}`);
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
}

export async function editarCliente(cliente) {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.href = 'index.html';
  } catch (error) {
    console.log(error);
  }
}
