const enelace = document.createElement('a');

enelace.textContent ='Nuevo Enlace';//se agrega texto enlace
enelace.href='/nuevo-enalce';//se agrega direccion enlace
enelace.target='_blank'; //apertura de enlace

console.log(enelace)

//seleccionar lugar donde se agrega
const navegacion = document.querySelector('nav');
//navegacion.appendChild(enelace) //agregar con el metodo appendChild se agrega al final
navegacion.insertBefore(enelace, navegacion.children[1]); //agregar con el metodo isertBefore en un lugar especifico

