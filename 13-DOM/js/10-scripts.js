const enelace = document.createElement('a');

enelace.textContent ='Nuevo Enlace';//se agrega texto enlace
enelace.href='/nuevo-enalce';//se agrega direccion enlace
enelace.target='_blank'; //apertura de enlace

console.log(enelace)

//seleccionar lugar donde se agrega
const navegacion = document.querySelector('nav');
//navegacion.appendChild(enelace) //agregar con el metodo appendChild se agrega al final
navegacion.insertBefore(enelace, navegacion.children[1]); //agregar con el metodo isertBefore en un lugar especifico


//crear aun CARD
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'CONCIERTO';
parrafo1.classList.add('caregoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//cerar DIV contenedor
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear una imagen
const imagen = document.createElement('img');
imagen.src= 'img/hacer2.jpg';

//crear DIV padre
const card = document.createElement('div');
info.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

console.log(card)

//insertar ene le html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
