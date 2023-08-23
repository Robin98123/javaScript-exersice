//metodo para medir longitud de strings
const producto = 'monitor 20 pulgadas';

console.log(producto)
//con el metodo length se puede medir la cantidad de caracteres de un string
console.log(producto.length)

//con el metodo indexof se puede saber en que posición inicia una cadena de texto dentro de un string
//console.log(producto.indexOf('pulgadas'))

//con el metodo include se puede saber si dentro del string está incluida la cadena de caracteres(diferencia entre mayuscula y minuscula)
console.log(producto.includes('monitor'));//regresa un booleano true en este caso por que la cadena de caracteres 'monitor' si esta incluido en la variable de producto

console.log(producto.includes('Monitor')); //regresa false, por que dentro de la cadena de caracteres de el string de la varibale producto esta en minuscula

console.log(producto.includes('tablet')); //regresa false por que esta cadena de caracteres no esta incluida dentro del string de la variable.

