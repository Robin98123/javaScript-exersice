//modificar estilos CSS en Js

const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase'

//agregar clases con css

const card = document.querySelector('.card');
card.classList.add('nueva-clase');
console.log(card.classList);