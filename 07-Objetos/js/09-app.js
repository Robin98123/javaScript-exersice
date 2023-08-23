"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
};

Object.seal(producto);

producto.precio = 600;

console.log(producto)

console.log(Object.isFrozen(producto));
