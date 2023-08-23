const carrito = [];

//definir un producto

const producto = {
    nombre : "Monitor 32 pulgadas",
    precio: 400
};

const producto2 = {
    nombre : "celular",
    precio: 800
};

carrito.push(producto2, producto );

const producto3 = {
    nombre : "teclado",
    precio : 300
}

carrito.unshift(producto3);

console.table(carrito);


// //eliminar elementos de un arreglo

// carrito.pop();

// console.table(carrito);

// //eliminar al inicio del arreglo

// carrito.shift();

// console.table(carrito);

carrito.splice(0, 1); 

console.table(carrito)