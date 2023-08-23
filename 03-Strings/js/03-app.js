//para unir o concatenar variables, debemos declarar las variables a concatenar
const producto = 'monitor 20 pulgadas';
const precio = ' 30 USD';

//metodo desde la consola concatenando dos varibles
console.log(producto.concat(precio));

//metodo desde la consola concatenando valor de la variable con string
console.log (producto.concat(' el precio del televisor es de 30 USD'))

//concatenar directamente
console.log(producto + " el precio es de" + precio)

//concatenar con backstreps o comillas invertidas `string ${nombre varible}`
console.log (`el ${producto} tiene un costo de ${precio}`)

//concatenar con comas
console.log('el producto', producto, 'tiene un precio de', precio)

