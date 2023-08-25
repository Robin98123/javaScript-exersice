//eleminar un elemento de manera directa

// const primerEnlace = document.querySelector('a')
// console.log(primerEnlace)

//eliminar un elemento desde el padre

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[3]);