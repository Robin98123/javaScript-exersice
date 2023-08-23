const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio:100},
    { nombre: 'tablet', precio: 200},
    { nombre: 'audifonos', precio: 300},
    { nombre: 'teclado', precio: 400},
    { nombre: 'celular', precio: 700},
]


const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} - precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.forEach( function(producto){
    return `${producto.nombre} - precio: ${producto.precio}`;
});


console.log(nuevoArreglo);
console.log(nuevoArreglo2);