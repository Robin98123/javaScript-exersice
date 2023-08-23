const pendientes = ['Tarea', 'comer', 'proyecto', 'Estudiar Javascript'];

pendientes.forEach( pendiente => console.log(pendiente));

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio:100},
    { nombre: 'tablet', precio: 200},
    { nombre: 'audifonos', precio: 300},
    { nombre: 'teclado', precio: 400},
    { nombre: 'celular', precio: 700},
]

const Nuevoarreglo = carrito.forEach( producto => producto.nombre);
const Nuevoarreglo2 = carrito.map( producto => producto.nombre);

console.log(Nuevoarreglo);
console.log(Nuevoarreglo2);