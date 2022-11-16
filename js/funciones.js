//Validar formulario

export function validar(obj) {
  return !Object.values(obj).every((input) => input !== '');
}

//Mostrar mensaje

export function mostrarMensaje(mensaje) {
  const existe = document.querySelector('.bg-red-100');

  if (!existe) {
    const p = document.createElement('P');
    p.classList.add(
      'bg-red-100',
      'border-red-400',
      'text-red-700',
      'px-4',
      'py-3',
      'rounded',
      'mx-w-lg',
      'mx-auto',
      'mt-5',
      'text-center'
    );
    p.textContent = mensaje;
    formulario.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 3000);
  }
}
