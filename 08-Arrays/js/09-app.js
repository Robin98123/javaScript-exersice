const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio:100},
    { nombre: 'tablet', precio: 200},
    { nombre: 'audifonos', precio: 300},
    { nombre: 'teclado', precio: 400},
    { nombre: 'celular', precio: 700},
]





for(let i = 0; i< carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
};

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
});
