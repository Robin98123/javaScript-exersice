const pendientes = ['Tarea', 'comer', 'proyecto', 'Estudiar Javascript'];


const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio:100},
    { nombre: 'tablet', precio: 200},
    { nombre: 'audifonos', precio: 300},
    { nombre: 'teclado', precio: 400},
    { nombre: 'celular', precio: 700},
]


for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.precio)
}