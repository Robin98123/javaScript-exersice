const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
// console.log(navegacion.childNodes) //Los espacios en blanco se consderan elementos
// console.log(navegacion.children) //los espacios en blanco no son considerados elementos

// console.log(navegacion.children[1].nodeName); //consultar el tipo de nodo
// console.log(navegacion.children[1].nodeType); //consultar tipo de nodo


//acceder al hijo del hijo segun su posición

// const card = document.querySelector('.card');

// console.log(card.children[1].children[1])


//Recorrer travesing de DOM hijo a Padre

const card = document.querySelector('.card');

// console.log(card.parentNode.parentNode); //esta opción tomará en cuenta los espacios vacios o saltos

// console.log(card.parentElement); //preferiblemente usar esta opción

//recorrer travesing DOM hijo a hermano

// console.log(card.nextElementSibling);

//recorrer travesing DOM herano a hijo

// console.log(card.previousElementSibling);