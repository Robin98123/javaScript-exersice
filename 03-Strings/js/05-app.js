const producto = 'monitor 20 pulgadas';

//con el metodo replace se peude reemplzar el texto de un string por otro
console.log(producto.replace('pulgadas', 'centimetros'));

//cortar texto de una cadena de strings con le metodo slice
console.log(producto.slice(0,12))
console.log(producto.slice(6))

//cortar texto con el metodo slice a diferencia de slice intentará hacer algo con los parametros
console.log(producto.substring(6,3))

//seleccionar un caracter en especifico de un string
const nombre = "Juan"
console.log(nombre.charAt(0));